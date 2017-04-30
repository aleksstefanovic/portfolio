var express = require('express');
var app = express();
var path = require("path");

app.post('/contact', function (req, res) {
    res.sendFile(path.join(__dirname+'/client/imports/emailSent.html'));
});


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/client/index.html'));
});
app.get('/index.html', function (req, res) {
    res.sendFile(path.join(__dirname+'/client/index.html'));
});
app.get('/aboutme.html', function (req, res) {
    res.sendFile(path.join(__dirname+'/client/aboutme.html'));
});
app.get('/contact.html', function (req, res) {
    res.sendFile(path.join(__dirname+'/client/contact.html'));
});
app.get('/projects.html', function (req, res) {
    res.sendFile(path.join(__dirname+'/client/projects.html'));
});
app.get('/imports/nav.html', function (req, res) {
    res.sendFile(path.join(__dirname+'/client/imports/nav.html'));
});

app.get('/media/portfolio.png', function (req, res) {
    res.sendFile(path.join(__dirname+'/client/media/portfolio.png'));
});

app.get('/portfolio.js', function (req, res) {
    res.sendFile(path.join(__dirname+'/client/portfolio.js'));
});


app.get('/imports/nav.css', function (req, res) {
    res.sendFile(path.join(__dirname+'/client/imports/nav.css'));
});
app.get('/portfolio.css', function (req, res) {
    res.sendFile(path.join(__dirname+'/client/portfolio.css'));
});

app.listen(3000);
