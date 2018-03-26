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


function sendArticles(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": ArticleBodyObj[0].Headline,
                    "subtitle": ArticleBodyObj[0].CreateTime,
                    "image_url": "https://www.altinget.dk/images/article/" + ArticleBodyObj[0].RelArticlePictureArticle + "/" + ArticleBodyObj[0].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.altinget.dk/artikel/" + ArticleBodyObj[0].UrlKey,
                        "title": "Læs mere"
                    }],
                }, {
                    "title": ArticleBodyObj[1].Headline,
                    "subtitle": ArticleBodyObj[1].CreateTime,
                    "image_url": "https://www.altinget.dk/images/article/" + ArticleBodyObj[1].RelArticlePictureArticle + "/" + ArticleBodyObj[1].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.altinget.dk/artikel/" + ArticleBodyObj[1].UrlKey,
                        "title": "Læs mere",
                    }],
                }, {
                    "title": ArticleBodyObj[2].Headline,
                    "subtitle": ArticleBodyObj[2].CreateTime,
                    "image_url": "https://www.altinget.dk/images/article/" + ArticleBodyObj[2].RelArticlePictureArticle + "/" + ArticleBodyObj[2].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.altinget.dk/artikel/" + ArticleBodyObj[2].UrlKey,
                        "title": "Læs mere",
                    }],
                }, {
                    "title": ArticleBodyObj[3].Headline,
                    "subtitle": ArticleBodyObj[3].CreateTime,
                    "image_url": "https://www.altinget.dk/images/article/" + ArticleBodyObj[3].RelArticlePictureArticle + "/" + ArticleBodyObj[3].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.altinget.dk/artikel/" + ArticleBodyObj[3].UrlKey,
                        "title": "Læs mere",
                    }],
                }, {
                    "title": ArticleBodyObj[4].Headline,
                    "subtitle": ArticleBodyObj[4].CreateTime,
                    "image_url": "https://www.altinget.dk/images/article/" + ArticleBodyObj[4].RelArticlePictureArticle + "/" + ArticleBodyObj[4].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.altinget.dk/artikel/" + ArticleBodyObj[4].UrlKey,
                        "title": "Læs mere",
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


function sendColumns(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "Klumme 1",
                    "subtitle": "dato",
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
                    "title": "Klumme 2",
                    "subtitle": "dato",
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
module.exports.sendArticles = sendArticles;
module.exports.sendColumns = sendColumns;
module.exports.generic = generic;
