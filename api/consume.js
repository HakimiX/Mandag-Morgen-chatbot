var express = require('express');
var request = require('request');
var timers = require('timers');
var http = require('http');


global.ArticleBodyObj;
global.FaktatjekBodyObj;
global.ViralspiralenBodyObj;
global.VaerdAtVideBodyObj;

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

// API - GET Viralspiralen
function getViralspiralen() {
    var options = {
        host: 'altingetpraktik.azurewebsites.net',
        port: 80,
        path: '/mmArticle/GetViralspiralen',
        method: 'GET'
    };

    http.request(options, function (res) {
        var body = '';

        res.on('data', function (chunk) {
            body += chunk;
        });

        res.on('end', function () {
            ViralspiralenBodyObj = JSON.parse(body);
            console.log(ViralspiralenBodyObj);
        })
    }).end();
}

// API - GET Værd At Vide
function getVaerdAtVide() {
    var options = {
        host: 'altingetpraktik.azurewebsites.net',
        port: 80,
        path: '/mmArticle/GetVaerdAtVide',
        method: 'GET'
    };

    http.request(options, function (res) {
        var body = '';

        res.on('data', function (chunk) {
            body += chunk;
        });

        res.on('end', function () {
            VaerdAtVideBodyObj = JSON.parse(body);
            console.log(VaerdAtVideBodyObj);
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
module.exports.getViralspiralen = getViralspiralen;
module.exports.getVaerdAtVide = getVaerdAtVide;
module.exports.isEmpty = isEmpty;