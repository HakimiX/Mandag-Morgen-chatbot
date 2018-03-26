var express = require('express');
var request = require('request');
var http = require('http');
var FB = require('fb');

// Facebook Graph API Token (Expires every 2 hours or 60 days)
// Create Marketings API app to extend access token
FB.setAccessToken('EAAePZAMhTZBXsBAKWwBGja9ccDfbSKRHSbc3vWx08dj6wpHRL5fvNR3buuppMym3Ua00Fimh0nLdjXUBJwAiXspkWNUagBUi37K2EfONxwlNhZAPRxd3LPHNyXoz72VNrszqMenj1g2BRrIdTFQX8b4mr6RNhGdbrB0KZBRLGwZDZD');

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