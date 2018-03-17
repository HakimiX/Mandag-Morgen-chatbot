var request = require('request');
var token = "EAAF4c0kP0IoBAMqycdA1BtBuXZCQ1Q0bLnle0oqY00URRSzxZC1IIZAlZCcfkEfbOHrVJfAPN6U8EBOcvtUgrZB7lZBAYj8xDZC4EvA15kxZAP17ZAvXxhFFBT144G2HBToWwZAh2uZCqDLMjhgjEF4xaTTc1tNomkqsA8rw3s6e2FoitFtPcPrsUnj";


function sendText(sender, text) {
    let messageData = {text: text}
    request({
        url: 'https://graph.facebook.com/v2.11/me/messages',
        qs: {access_token: token},
        method: 'POST',
        json: {
            recipient: {id: sender},
            message: messageData 
        }
    }, function(error, response, body) {
        if(error) {
            console.log('sending error')
        } else if(response.body.error) {
            console.log('response body error')
        }
    })
} 


function generic(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "Deadlift",
                    "subtitle": "Compound Movement",
                    "image_url": "https://i.imgur.com/FCTSI9J.jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.altinget.dk",
                        "title": "Read more"
                    }, {
                        "type": "postback",
                        "title": "Postback",
                        "payload": "Payload for first element in a generic bubble",
                    }],
                }, {
                    "title": "HIIT Cardio",
                    "subtitle": "Health",
                    "image_url": "https://i.imgur.com/dNo2ZB5.jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.altinget.dk",
                        "title": "Read more",
                    }, {
                        "type": "postback",
                        "title": "Postback",
                        "payload": "Payload for second element in a generic bubble",
                    }],
                }]
            }
        }
    }
    request({
        url: 'https://graph.facebook.com/v2.11/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}


module.exports.sendText = sendText;
module.exports.generic = generic;
