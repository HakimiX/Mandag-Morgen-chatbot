// Imports
var express = require('express');
var request = require('request');
var timers = require('timers');
var schedule = require('node-schedule');
var http = require('http');
var mysql = require('mysql');
var router = express.Router();

// Files
var fbapi = require('../facebook/fbapi');
var consume = require('../api/consume');
var graph = require('../api/graph');

// MySQL Connection
var pool = mysql.createPool({
    host: 'us-cdbr-iron-east-05.cleardb.net',
    user: 'b24bc93e0b8ea5',
    password : "a218d305",
    database: 'heroku_9b459204a642844'
});

// Facebook Access Token
var token = "EAAF4c0kP0IoBAMqycdA1BtBuXZCQ1Q0bLnle0oqY00URRSzxZC1IIZAlZCcfkEfbOHrVJfAPN6U8EBOcvtUgrZB7lZBAYj8xDZC4EvA15kxZAP17ZAvXxhFFBT144G2HBToWwZAh2uZCqDLMjhgjEF4xaTTc1tNomkqsA8rw3s6e2FoitFtPcPrsUnj";

// WIT AI
var wit_endpoint = 'https://api.wit.ai/message?v=20180129&q=';
var wit_token = 'JXUVJCEJC73J72LFJ7YDYHDEAGLF2POW';

// Fetch data
consume.getArticles();
graph.getFBVideos();


// GET Home page
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/webhook/', function (req, res) {
    if (req.query['hub.verify_token'] === 'verify_me') {
        res.send(req.query['hub.challenge']);
    }
    res.send('Error, wrong validation token');
});

router.post('/webhook/', function (req, res) {
    messaging_events = req.body.entry[0].messaging;

    for (i = 0; i < messaging_events.length; i++) {
        event = req.body.entry[0].messaging[i];
        sender = event.sender.id;

        if (event.message && event.message.text) {
            text = event.message.text;

            switch (text) {
                case "generic":
                    fbapi.generic(sender);
                    break;
                case "Faktatjek":
                    fbapi.sendFaktatjek(sender);
                    break;
                case "Viralspiralen":
                    fbapi.sendViralspiralen(sender);
                    break;
                case "db":

                    pool.getConnection(function (err, connection) {
                        // Use connection
                        var select = connection.query("SELECT * FROM users", function (err, result) {

                            // Return connection back to pool to be used by someone else
                            connection.release();

                            if (err) {
                                console.log(err);
                                return
                            }
                            console.log(select.sql);
                            console.log(result);
                            for (var i = 0; i < result.length; i++) {
                                fbapi.sendText(sender, "Row: \n" + result[i].id + " : " + result[i].fb_id);
                            }
                        });
                    });

                    break;
                case "Tilmeld":
                    subscribeUser(sender);
                    fbapi.sendText(sender, "Du er tilmeldt! 🙌");
                    break;
                case "Afmeld":
                    unsubscribeUse(sender);
                    fbapi.sendText(sender, "Du er afmeldt! 😔");
                    break;
                case "stop":
                    fbapi.sendText(sender, "jeg stopper");
                    break;
                default:
                    callWithAI(text, function (err, intent) {
                        handleIntent(intent, sender);
                    })
            }

            //sendText(sender, text);
        }
        if (event.postback) {
            let text = JSON.stringify(event.postback)

            // Handle postback text
            switch (text) {
                case "test":
                    fbapi.sendText(sender, "test postback");
                    break;
                default:
                    callWithAI(text, function (err, intent) {
                        handleIntent(intent, sender);
                    })
            }
        }
    }
    res.sendStatus(200);
});


// WIT AI Connection
function callWithAI(query, callback) {
    query = encodeURIComponent(query);
    request({
        uri: wit_endpoint + query,
        qs: {
            access_token: wit_token
        },
        method: 'GET'
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log('Successfully got %s', response.body);
            try {
                body = JSON.parse(response.body)
                intent = body['entities']['intent'][0]['value']
                callback(null, intent)
            } catch (e) {
                callback(e)
            }
        } else {
            console.log(response.statusCode)
            console.error("Unable to send message. %s", error);
            callback(error)
        }
    });
}


// WIT AI Intents
function handleIntent(intent, sender) {
    switch (intent) {
        case "greeting":
            fbapi.sendText(sender, "Hej, hvad kan jeg hjælpe dig med?");
            break;
        case "help":
            fbapi.sendHelp(sender);
            break;
        case "video":

            try {
                if(!consume.isEmpty(FBvideoBodyObj)) {
                    timers.setTimeout(() => fbapi.sendText(sender, FBvideoBodyObj.data[0].description), 500);
                    timers.setTimeout(() => fbapi.sendVideo(sender), 1000);
                } else {
                    console.log('Could not fetch columns');
                }
            } catch (error) {
                console.log(error);
                fbapi.sendText(sender, "Jeg kunne desværre ikke hente seneste videoer :(");
            }

            break;
        case "klumme":
            timers.setTimeout(() => fbapi.sendText(sender, "Seneste Klummer"), 500);
            timers.setTimeout(() => fbapi.sendColumns(sender), 1000);
            break;
        case "artikler":
            
            try {
                if(!consume.isEmpty(ArticleBodyObj)) {
                    timers.setTimeout(() => fbapi.sendText(sender, "Seneste nyheder"), 500);
                    timers.setTimeout(() => fbapi.sendArticles(sender), 1000);
                } else {
                    console.log('Could not fetch articles');
                }
            } catch (error) {
                console.log(error);
                fbapi.sendText(sender, "Jeg kunne desværre ikke hente seneste nyheder :(");
            }

            break;
        default:
            fbapi.sendText(sender, "Jeg forstår desværre ikke!");
            break;
    }
}


function subscribeUser(id) {
    pool.getConnection(function (err, connection) {
        var insert = connection.query("INSERT INTO users (fb_id) SELECT * FROM (SELECT '" + id + "') AS tmp WHERE NOT EXISTS (SELECT fb_id FROM users WHERE fb_id = '" + id + "') LIMIT 1", function (err, result) {
            // Release connection
            connection.release();

            if (err) {
                console.log(err);
                return
            }

            console.log(insert.sql);
            console.log(result);
        });
    });
}


function unsubscribeUse(id) {
    pool.getConnection(function (err, connection) {
        var remove = connection.query('DELETE FROM users where fb_id = ?', id, function (err, result) {
            // Release connection
            connection.release();

            if (err) {
                console.log(err);
                return
            }

            console.log(remove.sql);
            console.log(result);
        });
    });
}


function checkSubsribtion(id) {
    pool.getConnection(function (err, connection) {
        var check = connection.query('SELECT fb_id FROM users where fb_id = ?', id, function (err, result) {
            // Release connection
            connection.release();

            if (err) {
                console.log(err);
                return
            }

            console.log(check.sql);
            console.log(result);

            // If user exists

            if (!consume.isEmpty(result)) {
                fbapi.sendSubscribed(sender);
            } else if (consume.isEmpty(result)) {
                fbapi.sendNotSubscribed(sender);
            }

        });
    });
    
}


module.exports = router;