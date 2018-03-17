var express = require('express');
var request = require('request');
var rssReader = require('feed-read');
var timers = require('timers');
var schedule = require('node-schedule');
var http = require('http');
var router = express.Router();

var platform = require('../facebook/platform');
var api = require('../api/consume');

var mysql = require('mysql');

var token = "EAAF4c0kP0IoBAMqycdA1BtBuXZCQ1Q0bLnle0oqY00URRSzxZC1IIZAlZCcfkEfbOHrVJfAPN6U8EBOcvtUgrZB7lZBAYj8xDZC4EvA15kxZAP17ZAvXxhFFBT144G2HBToWwZAh2uZCqDLMjhgjEF4xaTTc1tNomkqsA8rw3s6e2FoitFtPcPrsUnj";

// WIT AI
var wit_endpoint = 'https://api.wit.ai/message?v=17032018&q=';
var wit_token = '5aad162e-da68-4081-9c2f-21d735001031';

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
                    platform.generic(sender);
                    break;
                case "stop":
                    platform.sendText(sender, "jeg stopper");
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
            platform.sendText(sender, "Hi! kan jeg hjælpe dig?");
            break;
        default:
            platform.sendText(sender, "I don't understand :(");
            break;
    }
}


module.exports = router;