var express = require('express');
var app = express();
var path = require("path");

//reminder for myself to actually publish the folders instead of individual files. This site got too big.

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
app.get('/workpages/software1.html', function (req, res) {
    res.sendFile(path.join(__dirname+'/client/workpages/software1.html'));
});
app.get('/workpages/software2.html', function (req, res) {
    res.sendFile(path.join(__dirname+'/client/workpages/software2.html'));
});
app.get('/workpages/other.html', function (req, res) {
    res.sendFile(path.join(__dirname+'/client/workpages/other.html'));
});

app.get('/media/DeusVult.jpg', function (req, res) {
    res.sendFile(path.join(__dirname+'/client/media/DeusVult.jpg'));
});
app.get('/media/linkedin.png', function (req, res) {
    res.sendFile(path.join(__dirname+'/client/media/linkedin.png'));
});
app.get('/media/portfolio.png', function (req, res) {
    res.sendFile(path.join(__dirname+'/client/media/portfolio.png'));
});
app.get('/media/profile.png', function (req, res) {
    res.sendFile(path.join(__dirname+'/client/media/profile.png'));
});
app.get('/media/resume.pdf', function (req, res) {
    res.sendFile(path.join(__dirname+'/client/media/Resume.pdf'));
});
app.get('/media/phnksLogo.pdf', function (req, res) {
    res.sendFile(path.join(__dirname+'/client/media/phnksLogo.pdf'));
});
app.get('/media/hackingHealth.pdf', function (req, res) {
    res.sendFile(path.join(__dirname+'/client/media/hackingHealth.pdf'));
});
app.get('/media/pandora.apk', function (req, res) {
    res.sendFile(path.join(__dirname+'/client/media/pandora.apk'));
});
app.get('/media/mimic.apk', function (req, res) {
    res.sendFile(path.join(__dirname+'/client/media/mimic.apk'));
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
app.get('/aboutme.css', function (req, res) {
    res.sendFile(path.join(__dirname+'/client/aboutme.css'));
});
app.get('/workpages/software1.css', function (req, res) {
    res.sendFile(path.join(__dirname+'/client/workpages/software1.css'));
});
app.get('/workpages/software2.css', function (req, res) {
    res.sendFile(path.join(__dirname+'/client/workpages/software2.css'));
});
app.get('/workpages/other.css', function (req, res) {
    res.sendFile(path.join(__dirname+'/client/workpages/other.css'));
});

app.listen(3000);
