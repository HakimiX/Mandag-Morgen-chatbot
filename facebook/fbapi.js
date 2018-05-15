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


function sendBegin(sender) {
    let messageData = {
        "text": "Velkommen til Mandag Morgen!",
        "quick_replies":[
            {
                "content_type":"text",
                "title":"Nyheder",
                "payload":"<POSTBACK_PAYLOAD>",
            },
            {
                "content_type":"text",
                "title":"Video",
                "payload":"<POSTBACK_PAYLOAD>",
            },
            {
                "content_type":"text",
                "title":"Faktatjek",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Viralspiralen",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Værd at vide",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Perspektiv",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Klummer",
                "payload":"<POSTBACK_PAYLOAD>"
            }
        ]
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


function sendSubscribed(sender) {
    let messageData = {
        "text": "Du er tilmeldt nyhedsbrevet!",
        "quick_replies":[
            {
                "content_type":"text",
                "title":"Afmeld",
                "payload":"<POSTBACK_PAYLOAD>"
            }
        ]
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


function sendNotSubscribed(sender) {
    let messageData = {
        "text": "Du er ikke tilmeldt nyhedsbrevet!",
        "quick_replies":[
            {
                "content_type":"text",
                "title":"Tilmeld",
                "payload":"<POSTBACK_PAYLOAD>"
            }
        ]
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


function sendArticles(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": ArticleBodyObj[0].Headline,
                    "subtitle": ArticleBodyObj[0].CreateTime,
                    "image_url": "https://www.mm.dk/images/article/" + ArticleBodyObj[0].RelArticlePictureArticle + "/" + ArticleBodyObj[0].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.mm.dk/tjekdet/artikel/" + ArticleBodyObj[0].UrlKey,
                        "title": "Læs mere"
                    }],
                }, {
                    "title": ArticleBodyObj[1].Headline,
                    "subtitle": ArticleBodyObj[1].CreateTime,
                    "image_url": "https://www.mm.dk/images/article/" + ArticleBodyObj[1].RelArticlePictureArticle + "/" + ArticleBodyObj[1].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.mm.dk/tjekdet/artikel/" + ArticleBodyObj[1].UrlKey,
                        "title": "Læs mere",
                    }],
                }, {
                    "title": ArticleBodyObj[2].Headline,
                    "subtitle": ArticleBodyObj[2].CreateTime,
                    "image_url": "https://www.mm.dk/images/article/" + ArticleBodyObj[2].RelArticlePictureArticle + "/" + ArticleBodyObj[2].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.mm.dk/tjekdet/artikel/" + ArticleBodyObj[2].UrlKey,
                        "title": "Læs mere",
                    }],
                }, {
                    "title": ArticleBodyObj[3].Headline,
                    "subtitle": ArticleBodyObj[3].CreateTime,
                    "image_url": "https://www.mm.dk/images/article/" + ArticleBodyObj[3].RelArticlePictureArticle + "/" + ArticleBodyObj[3].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.mm.dk/tjekdet/artikel/" + ArticleBodyObj[3].UrlKey,
                        "title": "Læs mere",
                    }],
                }, {
                    "title": ArticleBodyObj[4].Headline,
                    "subtitle": ArticleBodyObj[4].CreateTime,
                    "image_url": "https://www.mm.dk/images/article/" + ArticleBodyObj[4].RelArticlePictureArticle + "/" + ArticleBodyObj[4].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.mm.dk/tjekdet/artikel/" + ArticleBodyObj[4].UrlKey,
                        "title": "Læs mere",
                    }],
                }]
            }
        },
        "quick_replies":[
            {
                "content_type":"text",
                "title":"Nyheder",
                "payload":"<POSTBACK_PAYLOAD>",
            },
            {
                "content_type":"text",
                "title":"Video",
                "payload":"<POSTBACK_PAYLOAD>",
            },
            {
                "content_type":"text",
                "title":"Faktatjek",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Viralspiralen",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Værd at vide",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Perspektiv",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Klummer",
                "payload":"<POSTBACK_PAYLOAD>"
            }
        ]
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


function sendFaktatjek(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": FaktatjekBodyObj[0].Headline,
                    "subtitle": FaktatjekBodyObj[0].CreateTime,
                    "image_url": "https://www.mm.dk/images/article/" + FaktatjekBodyObj[0].RelArticlePictureArticle + "/" + FaktatjekBodyObj[0].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.mm.dk/tjekdet/artikel/" + FaktatjekBodyObj[0].UrlKey,
                        "title": "Læs mere"
                    }],
                }, {
                    "title": FaktatjekBodyObj[1].Headline,
                    "subtitle": FaktatjekBodyObj[1].CreateTime,
                    "image_url": "https://www.mm.dk/images/article/" + FaktatjekBodyObj[1].RelArticlePictureArticle + "/" + FaktatjekBodyObj[1].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.mm.dk/tjekdet/artikel/" + FaktatjekBodyObj[1].UrlKey,
                        "title": "Læs mere",
                    }],
                }, {
                    "title": FaktatjekBodyObj[2].Headline,
                    "subtitle": FaktatjekBodyObj[2].CreateTime,
                    "image_url": "https://www.mm.dk/images/article/" + FaktatjekBodyObj[2].RelArticlePictureArticle + "/" + FaktatjekBodyObj[2].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.mm.dk/tjekdet/artikel/" + FaktatjekBodyObj[2].UrlKey,
                        "title": "Læs mere",
                    }],
                }, {
                    "title": FaktatjekBodyObj[3].Headline,
                    "subtitle": FaktatjekBodyObj[3].CreateTime,
                    "image_url": "https://www.mm.dk/images/article/" + FaktatjekBodyObj[3].RelArticlePictureArticle + "/" + FaktatjekBodyObj[3].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.mm.dk/tjekdet/artikel/" + FaktatjekBodyObj[3].UrlKey,
                        "title": "Læs mere",
                    }],
                }, {
                    "title": FaktatjekBodyObj[4].Headline,
                    "subtitle": FaktatjekBodyObj[4].CreateTime,
                    "image_url": "https://www.mm.dk/images/article/" + FaktatjekBodyObj[4].RelArticlePictureArticle + "/" + FaktatjekBodyObj[4].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.mm.dk/tjekdet/artikel/" + FaktatjekBodyObj[4].UrlKey,
                        "title": "Læs mere",
                    }],
                }]
            }
        },
        "quick_replies":[
            {
                "content_type":"text",
                "title":"Nyheder",
                "payload":"<POSTBACK_PAYLOAD>",
            },
            {
                "content_type":"text",
                "title":"Video",
                "payload":"<POSTBACK_PAYLOAD>",
            },
            {
                "content_type":"text",
                "title":"Faktatjek",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Viralspiralen",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Værd at vide",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Perspektiv",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Klummer",
                "payload":"<POSTBACK_PAYLOAD>"
            }
        ]
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


function sendViralspiralen(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": ViralspiralenBodyObj[0].Headline,
                    "subtitle": ViralspiralenBodyObj[0].CreateTime,
                    "image_url": "https://www.mm.dk/images/article/" + ViralspiralenBodyObj[0].RelArticlePictureArticle + "/" + ViralspiralenBodyObj[0].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.mm.dk/tjekdet/artikel/" + ViralspiralenBodyObj[0].UrlKey,
                        "title": "Læs mere"
                    }],
                }, {
                    "title": ViralspiralenBodyObj[1].Headline,
                    "subtitle": ViralspiralenBodyObj[1].CreateTime,
                    "image_url": "https://www.mm.dk/images/article/" + ViralspiralenBodyObj[1].RelArticlePictureArticle + "/" + ViralspiralenBodyObj[1].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.mm.dk/tjekdet/artikel/" + ViralspiralenBodyObj[1].UrlKey,
                        "title": "Læs mere",
                    }],
                }, {
                    "title": ViralspiralenBodyObj[2].Headline,
                    "subtitle": ViralspiralenBodyObj[2].CreateTime,
                    "image_url": "https://www.mm.dk/images/article/" + ViralspiralenBodyObj[2].RelArticlePictureArticle + "/" + ViralspiralenBodyObj[2].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.mm.dk/tjekdet/artikel/" + ViralspiralenBodyObj[2].UrlKey,
                        "title": "Læs mere",
                    }],
                }, {
                    "title": ViralspiralenBodyObj[3].Headline,
                    "subtitle": ViralspiralenBodyObj[3].CreateTime,
                    "image_url": "https://www.mm.dk/images/article/" + ViralspiralenBodyObj[3].RelArticlePictureArticle + "/" + ViralspiralenBodyObj[3].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.mm.dk/tjekdet/artikel/" + ViralspiralenBodyObj[3].UrlKey,
                        "title": "Læs mere",
                    }],
                }, {
                    "title": ViralspiralenBodyObj[4].Headline,
                    "subtitle": ViralspiralenBodyObj[4].CreateTime,
                    "image_url": "https://www.mm.dk/images/article/" + ViralspiralenBodyObj[4].RelArticlePictureArticle + "/" + ViralspiralenBodyObj[4].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.mm.dk/tjekdet/artikel/" + ViralspiralenBodyObj[4].UrlKey,
                        "title": "Læs mere",
                    }],
                }]
            }
        },
        "quick_replies":[
            {
                "content_type":"text",
                "title":"Nyheder",
                "payload":"<POSTBACK_PAYLOAD>",
            },
            {
                "content_type":"text",
                "title":"Video",
                "payload":"<POSTBACK_PAYLOAD>",
            },
            {
                "content_type":"text",
                "title":"Faktatjek",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Viralspiralen",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Værd at vide",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Perspektiv",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Klummer",
                "payload":"<POSTBACK_PAYLOAD>"
            }
        ]
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


function sendVaerdAtVide(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": VaerdAtVideBodyObj[0].Headline,
                    "subtitle": VaerdAtVideBodyObj[0].CreateTime,
                    "image_url": "https://www.mm.dk/images/article/" + VaerdAtVideBodyObj[0].RelArticlePictureArticle + "/" + VaerdAtVideBodyObj[0].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.mm.dk/tjekdet/artikel/" + VaerdAtVideBodyObj[0].UrlKey,
                        "title": "Læs mere"
                    }],
                }, {
                    "title": VaerdAtVideBodyObj[1].Headline,
                    "subtitle": VaerdAtVideBodyObj[1].CreateTime,
                    "image_url": "https://www.mm.dk/images/article/" + VaerdAtVideBodyObj[1].RelArticlePictureArticle + "/" + VaerdAtVideBodyObj[1].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.mm.dk/tjekdet/artikel/" + VaerdAtVideBodyObj[1].UrlKey,
                        "title": "Læs mere",
                    }],
                }, {
                    "title": VaerdAtVideBodyObj[2].Headline,
                    "subtitle": VaerdAtVideBodyObj[2].CreateTime,
                    "image_url": "https://www.mm.dk/images/article/" + VaerdAtVideBodyObj[2].RelArticlePictureArticle + "/" + VaerdAtVideBodyObj[2].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.mm.dk/tjekdet/artikel/" + VaerdAtVideBodyObj[2].UrlKey,
                        "title": "Læs mere",
                    }],
                }, {
                    "title": VaerdAtVideBodyObj[3].Headline,
                    "subtitle": VaerdAtVideBodyObj[3].CreateTime,
                    "image_url": "https://www.mm.dk/images/article/" + VaerdAtVideBodyObj[3].RelArticlePictureArticle + "/" + VaerdAtVideBodyObj[3].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.mm.dk/tjekdet/artikel/" + VaerdAtVideBodyObj[3].UrlKey,
                        "title": "Læs mere",
                    }],
                }, {
                    "title": VaerdAtVideBodyObj[4].Headline,
                    "subtitle": VaerdAtVideBodyObj[4].CreateTime,
                    "image_url": "https://www.mm.dk/images/article/" + VaerdAtVideBodyObj[4].RelArticlePictureArticle + "/" + VaerdAtVideBodyObj[4].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.mm.dk/tjekdet/artikel/" + VaerdAtVideBodyObj[4].UrlKey,
                        "title": "Læs mere",
                    }],
                }]
            }
        },
        "quick_replies":[
            {
                "content_type":"text",
                "title":"Nyheder",
                "payload":"<POSTBACK_PAYLOAD>",
            },
            {
                "content_type":"text",
                "title":"Video",
                "payload":"<POSTBACK_PAYLOAD>",
            },
            {
                "content_type":"text",
                "title":"Faktatjek",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Viralspiralen",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Værd at vide",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Perspektiv",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Klummer",
                "payload":"<POSTBACK_PAYLOAD>"
            }
        ]
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


function sendPerspektiv(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": PerspektivBodyObj[0].Headline,
                    "subtitle": PerspektivBodyObj[0].CreateTime,
                    "image_url": "https://www.mm.dk/images/article/" + PerspektivBodyObj[0].RelArticlePictureArticle + "/" + PerspektivBodyObj[0].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.mm.dk/tjekdet/artikel/" + PerspektivBodyObj[0].UrlKey,
                        "title": "Læs mere"
                    }],
                }, {
                    "title": PerspektivBodyObj[1].Headline,
                    "subtitle": PerspektivBodyObj[1].CreateTime,
                    "image_url": "https://www.mm.dk/images/article/" + PerspektivBodyObj[1].RelArticlePictureArticle + "/" + PerspektivBodyObj[1].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.mm.dk/tjekdet/artikel/" + PerspektivBodyObj[1].UrlKey,
                        "title": "Læs mere",
                    }],
                }, {
                    "title": PerspektivBodyObj[2].Headline,
                    "subtitle": PerspektivBodyObj[2].CreateTime,
                    "image_url": "https://www.mm.dk/images/article/" + PerspektivBodyObj[2].RelArticlePictureArticle + "/" + PerspektivBodyObj[2].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.mm.dk/tjekdet/artikel/" + PerspektivBodyObj[2].UrlKey,
                        "title": "Læs mere",
                    }],
                }, {
                    "title": PerspektivBodyObj[3].Headline,
                    "subtitle": PerspektivBodyObj[3].CreateTime,
                    "image_url": "https://www.mm.dk/images/article/" + PerspektivBodyObj[3].RelArticlePictureArticle + "/" + PerspektivBodyObj[3].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.mm.dk/tjekdet/artikel/" + PerspektivBodyObj[3].UrlKey,
                        "title": "Læs mere",
                    }],
                }, {
                    "title": PerspektivBodyObj[4].Headline,
                    "subtitle": PerspektivBodyObj[4].CreateTime,
                    "image_url": "https://www.mm.dk/images/article/" + PerspektivBodyObj[4].RelArticlePictureArticle + "/" + PerspektivBodyObj[4].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.mm.dk/tjekdet/artikel/" + PerspektivBodyObj[4].UrlKey,
                        "title": "Læs mere",
                    }],
                }]
            }
        },
        "quick_replies":[
            {
                "content_type":"text",
                "title":"Nyheder",
                "payload":"<POSTBACK_PAYLOAD>",
            },
            {
                "content_type":"text",
                "title":"Video",
                "payload":"<POSTBACK_PAYLOAD>",
            },
            {
                "content_type":"text",
                "title":"Faktatjek",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Viralspiralen",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Værd at vide",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Perspektiv",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Klummer",
                "payload":"<POSTBACK_PAYLOAD>"
            }
        ]
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
                    "title": ColumnsBodyObj[0].Headline,
                    "subtitle": ColumnsBodyObj[0].CreateTime,
                    "image_url": "https://www.mm.dk/images/article/" + ColumnsBodyObj[0].RelArticlePictureArticle + "/" + ColumnsBodyObj[0].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.mm.dk/tjekdet/artikel/" + ColumnsBodyObj[0].UrlKey,
                        "title": "Læs mere"
                    }],
                }, {
                    "title": ColumnsBodyObj[1].Headline,
                    "subtitle": ColumnsBodyObj[1].CreateTime,
                    "image_url": "https://www.mm.dk/images/article/" + ColumnsBodyObj[1].RelArticlePictureArticle + "/" + ColumnsBodyObj[1].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.mm.dk/tjekdet/artikel/" + ColumnsBodyObj[1].UrlKey,
                        "title": "Læs mere",
                    }],
                }, {
                    "title": ColumnsBodyObj[2].Headline,
                    "subtitle": ColumnsBodyObj[2].CreateTime,
                    "image_url": "https://www.mm.dk/images/article/" + ColumnsBodyObj[2].RelArticlePictureArticle + "/" + ColumnsBodyObj[2].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.mm.dk/tjekdet/artikel/" + ColumnsBodyObj[2].UrlKey,
                        "title": "Læs mere",
                    }],
                }, {
                    "title": ColumnsBodyObj[3].Headline,
                    "subtitle": ColumnsBodyObj[3].CreateTime,
                    "image_url": "https://www.mm.dk/images/article/" + ColumnsBodyObj[3].RelArticlePictureArticle + "/" + ColumnsBodyObj[3].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.mm.dk/tjekdet/artikel/" + ColumnsBodyObj[3].UrlKey,
                        "title": "Læs mere",
                    }],
                }, {
                    "title": ColumnsBodyObj[4].Headline,
                    "subtitle": ColumnsBodyObj[4].CreateTime,
                    "image_url": "https://www.mm.dk/images/article/" + ColumnsBodyObj[4].RelArticlePictureArticle + "/" + ColumnsBodyObj[4].Picture + ".jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.mm.dk/tjekdet/artikel/" + ColumnsBodyObj[4].UrlKey,
                        "title": "Læs mere",
                    }],
                }]
            }
        },
        "quick_replies":[
            {
                "content_type":"text",
                "title":"Nyheder",
                "payload":"<POSTBACK_PAYLOAD>",
            },
            {
                "content_type":"text",
                "title":"Video",
                "payload":"<POSTBACK_PAYLOAD>",
            },
            {
                "content_type":"text",
                "title":"Faktatjek",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Viralspiralen",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Værd at vide",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Perspektiv",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Klummer",
                "payload":"<POSTBACK_PAYLOAD>"
            }
        ]
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


function sendHelp(sender) {
    let messageData = {
        "text": "Jeg har følgende funktioner",
        "quick_replies":[
            {
                "content_type":"text",
                "title":"Nyheder",
                "payload":"<POSTBACK_PAYLOAD>",
            },
            {
                "content_type":"text",
                "title":"Video",
                "payload":"<POSTBACK_PAYLOAD>",
            },
            {
                "content_type":"text",
                "title":"Faktatjek",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Viralspiralen",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Værd at vide",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Perspektiv",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Klummer",
                "payload":"<POSTBACK_PAYLOAD>"
            }
        ]
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


function sendWitDefault(sender) {
    let messageData = {
        "text": "Jeg forstår desværre ikke hvad du mener :(",
        "quick_replies":[
            {
                "content_type":"text",
                "title":"Nyheder",
                "payload":"<POSTBACK_PAYLOAD>",
            },
            {
                "content_type":"text",
                "title":"Video",
                "payload":"<POSTBACK_PAYLOAD>",
            },
            {
                "content_type":"text",
                "title":"Faktatjek",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Viralspiralen",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Værd at vide",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Perspektiv",
                "payload":"<POSTBACK_PAYLOAD>"
            },
            {
                "content_type":"text",
                "title":"Klummer",
                "payload":"<POSTBACK_PAYLOAD>"
            }
        ]
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


function sendVideo(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "media",
                "elements": [{
                    "media_type": "video",
                    "url": "https://www.facebook.com/Altingetdk/videos/" + FBvideoBodyObj.data[0].id,
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
module.exports.sendBegin = sendBegin;
module.exports.sendSubscribed = sendSubscribed;
module.exports.sendNotSubscribed = sendNotSubscribed;

module.exports.sendArticles = sendArticles;
module.exports.sendFaktatjek = sendFaktatjek;
module.exports.sendViralspiralen = sendViralspiralen;
module.exports.sendVaerdAtVide = sendVaerdAtVide;
module.exports.sendPerspektiv = sendPerspektiv;
module.exports.sendColumns = sendColumns;

module.exports.sendHelp = sendHelp;
module.exports.sendWitDefault = sendWitDefault;
module.exports.generic = generic;
module.exports.sendVideo = sendVideo;
