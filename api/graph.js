var express = require('express');
var request = require('request');
var http = require('http');
var FB = require('fb');

// Facebook Graph API Token (Expires every 2 hours or 60 days)
// Create Marketings API app to extend access token
FB.setAccessToken('EAACR0MwteYUBAETRhbbhg6OsosdT6rj5Pnzcr9ap98YML4pRTX1wtNYVBhrZBS00VTN312oFi5sXZBZB509s2ftk38DJrh5ovAZAQPt1D9PZBDKZBZBROpAJDwcofOusAZC4vGms0WqPPZAlFNnM53TchoIz4cqUYihcXS9JA403IEAZDZD');

// JSON Body Object
global.FBvideoBodyObj;

function getFBVideos(sender) {
    FB.api(
        '/Altingetdk/videos/',
        'GET', {},
        function (response) {
            FBvideoBodyObj = response;
            console.log(FBvideoBodyObj.data[0]);
        }
    );
}

module.exports.getFBVideos = getFBVideos;