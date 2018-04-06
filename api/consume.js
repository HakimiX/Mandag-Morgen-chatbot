var express = require('express');
var request = require('request');
var timers = require('timers');
var http = require('http');


global.ArticleBodyObj;
global.FaktatjekBodyObj;

// API - GET Articles
function getArticles() {
    var options = {
        host: 'altingetpraktik.azurewebsites.net',
        port: 80,
        path: '/mmArticle/GetArticles',
        method: 'GET'
    };

    http.request(options, function (res) {
        var body = '';

        res.on('data', function (chunk) {
            body += chunk;
        });

        res.on('end', function () {
            ArticleBodyObj = JSON.parse(body);
            console.log(ArticleBodyObj);
        })
    }).end();
}

// API - GET Faktatjek
function getFaktatjek() {
    var options = {
        host: 'altingetpraktik.azurewebsites.net',
        port: 80,
        path: '/mmArticle/GetFaktatjek',
        method: 'GET'
    };

    http.request(options, function (res) {
        var body = '';

        res.on('data', function (chunk) {
            body += chunk;
        });

        res.on('end', function () {
            FaktatjekBodyObj = JSON.parse(body);
            console.log(FaktatjekBodyObj);
        })
    }).end();
}

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

module.exports.getArticles = getArticles;
module.exports.getFaktatjek = getFaktatjek;
module.exports.isEmpty = isEmpty;