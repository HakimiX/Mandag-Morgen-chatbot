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

module.exports.cacheArticle = cacheArticle;