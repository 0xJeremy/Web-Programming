const http = require('http');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const express = require('express')
const path = require('path')
var app = express();
const PORT = process.env.PORT || 5000

var redline_stops = ["place-sstat", "place-andrw", "place-portr", 
	"place-harsq", "place-jfk", "place-shmnl", "place-pktrm", 
	"place-brdwy", "place-nqncy", "place-smmnl", "place-davis", 
	"place-alfcl", "place-knncl", "place-chmnl", "place-dwnxg", 
	"place-qnctr", "place-qamnl", "place-asmnl", "place-wlsta", 
	"place-fldcr", "place-cntsq", "place-brntn"];

var train_data;
function get_data(request_info, info_type) {
	if(!redline_stops.includes(request_info)) {
		return "{\"errors\":\"No such stop_id exist\"}";
	}
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			train_data = this.responseText;
		}
	};
	stop_url = "";
	if(info_type == "schedule") {
		stop_url = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=" + request_info + "&page[limit]=10&sort=departure_time";
	}
	else if(info_type == "route") {
		stop_url = "https://api-v3.mbta.com/routes?filter[route]=Red&filter[route_type]=0,1&filter[stop]=" + request_info;
	}
	else if (info_type == "alerts") {
		stop_url = "https://api-v3.mbta.com/alerts?filter[stop]=" + request_info;
	}
	xmlhttp.open('Get', stop_url, false);
	xmlhttp.send();
	return train_data;
}

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);
app.use('/', express.static(__dirname + '/public'));
app.get('/', function(req, res) {
  res.render('index.html');
});
app.get('/supers3cret', function(req, res) {
  res.render('supers3cret.html');
});

app.get('/redline/schedule.json', function(req, res) {
	res.send(get_data(req.query.stop_id, "schedule"));
});
app.get('/redline/route.json', function(req, res) {
	res.send(get_data(req.query.stop_id, "route"));
});
app.get('/redline/alerts.json', function(req, res) {
	res.send(get_data(req.query.stop_id, "alerts"));
});

app.listen(PORT, function() { console.log("Listening on port " + PORT)});