var express = require('express');
var request = require('request');
var timers = require('timers');
var schedule = require('node-schedule');
var http = require('http');

var consume = require('./consume');
var graph = require('./graph');

// Fetch data from api

function cacheArticle() {
    var scheduleAPIConsume = schedule.scheduleJob("*/1 * * * *", function() {
        console.log(' --- API Consume Articles --- ');
        consume.getArticles();
    });
}

function cacheFaktatjek() {
    var scheduleAPIConsume = schedule.scheduleJob("*/1 * * * *", function() {
        console.log(' --- API Consume Faktatjek --- ');
        consume.getFaktatjek();
    });
}

function cacheViralspiralen() {
    var scheduleAPIConsume = schedule.scheduleJob("*/1 * * * *", function() {
        console.log(' --- API Consume Viralspiralen --- ');
        consume.getViralspiralen();
    });
}

function cacheVaerdAtVide() {
    var scheduleAPIConsume = schedule.scheduleJob("*/1 * * * *", function() {
        console.log(' --- API Consume Værd at vide --- ');
        consume.getVaerdAtVide();
    });
}

function cacheColumns() {
    var scheduleAPIConsume = schedule.scheduleJob("*/1 * * * *", function() {
        console.log(' --- API Consume Columns --- ');
        consume.getColumns();
    });
}

function cachePerspektiv() {
    var scheduleAPIConsume = schedule.scheduleJob("*/1 * * * *", function() {
        console.log(' --- API Consume Perspektiv --- ');
        consume.getPerspektiv();
    });
}

function cacheFBVideos() {
    var scheduleAPIConsume = schedule.scheduleJob("*/1 * * * *", function() {
        console.log(' --- API Consume FB Videos --- ');
        graph.getFBVideos();
    });
}





module.exports.cacheArticle = cacheArticle;
module.exports.cacheFaktatjek = cacheFaktatjek;
module.exports.cacheViralspiralen = cacheViralspiralen;
module.exports.cacheVaerdAtVide = cacheVaerdAtVide;
module.exports.cacheColumns = cacheColumns;
module.exports.cachePerspektiv = cachePerspektiv;
module.exports.cacheFBVideos = cacheFBVideos;