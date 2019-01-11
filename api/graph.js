var express = require('express');
var request = require('request');
var http = require('http');
var FB = require('fb');

// Facebook Graph API Token (Expires every 2 hours or 60 days)
// Create Marketings API app to extend access token
FB.setAccessToken('<token>');

// JSON Body Object
global.FBvideoBodyObj;

function getFBVideos(sender) {
    FB.api(
        '/tjekdetdk/videos/',
        'GET', {},
        function (response) {
            FBvideoBodyObj = response;
            console.log(FBvideoBodyObj.data[0]);
        }
    );
}

module.exports.getFBVideos = getFBVideos;