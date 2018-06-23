var map;
var image = 'train.png';
var red_line = [
	{station: "South Station", pos: {lat: 42.352271, lng: -71.05524200000001}, stop_id: "place-sstat"},
	{station: "Andrew", pos: {lat: 42.330154, lng: -71.057655}, stop_id: "place-andrw"},
	{station: "Porter Square", pos: {lat: 42.3884, lng: -71.11914899999999}, stop_id: "place-portr"},
	{station: "Harvard Square", pos: {lat: 42.373362, lng: -71.118956}, stop_id: "place-harsq"},
	{station: "JFK/Umass", pos: {lat: 42.320685, lng: -71.052391}, stop_id: "place-jfk"},
	{station: "Savin Hill", pos: {lat: 42.31129, lng: -71.053331}, stop_id: "place-shmnl"},
	{station: "Park Street", pos: {lat: 42.35639457, lng: -71.0624242}, stop_id: "place-pktrm"},
	{station: "Broadway", pos: {lat: 42.342622, lng: -71.056967}, stop_id: "place-brdwy"},
	{station: "North Quincy", pos: {lat: 42.275275, lng: -71.029583}, stop_id: "place-nqncy"},
	{station: "Shawmut", pos: {lat: 42.29312583, lng: -71.06573796000001}, stop_id: "place-smmnl"},
	{station: "Davis", pos: {lat: 42.39674, lng: -71.121815}, stop_id: "place-davis"},
	{station: "Alewife", pos: {lat: 42.395428, lng:  -71.142483}, stop_id: "place-alfcl"},
	{station: "Kendall/MIT", pos: {lat: 42.36249079, lng: -71.08617653}, stop_id: "place-knncl"},
	{station: "Charles/MGH", pos: {lat: 42.361166, lng: -71.070628}, stop_id: "place-chmnl"},
	{station: "Downtown Crossing", pos: {lat: 42.355518, lng: -71.060225}, stop_id: "place-dwnxg"},
	{station: "Quincy Center", pos: {lat: 42.251809, lng: -71.005409}, stop_id: "place-qnctr"},
	{station: "Quincy Adams", pos: {lat: 42.233391, lng: -71.007153}, stop_id: "place-qamnl"},
	{station: "Ashmont", pos: {lat: 42.284652, lng: -71.06448899999999}, stop_id: "place-asmnl"},
	{station: "Wollaston", pos: {lat: 42.2665139, lng: -71.0203369}, stop_id: "place-wlsta"},
	{station: "Fields Corner", pos: {lat: 42.300093, lng: -71.061667}, stop_id: "place-fldcr"},
	{station: "Central Square", pos: {lat: 42.365486, lng: -71.103802}, stop_id: "place-cntsq"},
	{station: "Braintree", pos: {lat: 42.2078543, lng: -71.0011385}, stop_id: "place-brntn"}
];

var red_line_tracks = [
	{station1: "Alewife", station2: "Davis"},
	{station1: "Davis", station2: "Porter Square"},
	{station1: "Porter Square", station2: "Harvard Square"},
	{station1: "Harvard Square", station2: "Central Square"},
	{station1: "Central Square", station2: "Kendall/MIT"},
	{station1: "Kendall/MIT", station2: "Charles/MGH"},
	{station1: "Charles/MGH", station2: "Park Street"},
	{station1: "Park Street", station2: "Downtown Crossing"},
	{station1: "Downtown Crossing", station2: "South Station"},
	{station1: "South Station", station2: "Broadway"},
	{station1: "Broadway", station2: "Andrew"},
	{station1: "Andrew", station2: "JFK/Umass"},
	{station1: "JFK/Umass", station2: "North Quincy"},
	{station1: "North Quincy", station2: "Wollaston"},
	{station1: "Wollaston", station2: "Quincy Center"},
	{station1: "Quincy Center", station2: "Quincy Adams"},
	{station1: "Quincy Adams", station2: "Braintree"},
	{station1: "JFK/Umass", station2: "Savin Hill"},
	{station1: "Savin Hill", station2: "Fields Corner"},
	{station1: "Fields Corner", station2: "Shawmut"},
	{station1: "Shawmut", station2: "Ashmont"},
];

function haversineDistance(coords1, coords2, isMiles) {
	function toRad(x) {
		return x * Math.PI / 180;
	}
	var lat1 = coords1.lat;
	var lon1 = coords1.lng;
	var lat2 = coords2.lat;
	var lon2 = coords2.lng;
	var R = 6371; // km
	var x1 = lat2 - lat1;
	var dLat = toRad(x1);
	var x2 = lon2 - lon1;
	var dLon = toRad(x2)
	var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
			Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
			Math.sin(dLon / 2) * Math.sin(dLon / 2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	var d = R * c;
	if(isMiles) d /= 1.60934;
	return d;
}

var ready_data;
function get_data(train_stop) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			var jsonData = JSON.parse(this.responseText);
			ready_data = display_data(jsonData);
		}
	};
	stop_url = "https://mysterious-escarpment-42964.herokuapp.com/redline/schedule.json?stop_id=" + train_stop;
	xmlhttp.open('GET', stop_url, true);
	xmlhttp.send();
	return ready_data;
}

function display_data(jsonData) {
	var info = jsonData;
	var messagetext = '<p>Train Shedule</p>';
	for(var i in info.data)
	{
		var arrival_time = info.data[i].attributes.arrival_time;
		//arrival_time = arrival_time.substr(11);
		var departure_time = info.data[i].attributes.departure_time;
		//departure_time = departure_time.substr(11);
		messagetext += 'Arrival Time: ' + arrival_time + '</br>';
		messagetext += 'Departure Time: ' + departure_time + '</br>';
	}
	return messagetext;
}

function initMap() {

	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 42.352271, lng: -71.05524200000001},
		zoom: 12
    });

    function success(position) {
		var user_lat = position.coords.latitude; 
    	var user_lon = position.coords.longitude;
    	user_pos = {lat: user_lat, lng: user_lon};
    	var user = new google.maps.Marker({
			position: user_pos,
			map: map,
			title: 'You',
		});
		distance = haversineDistance(user_pos, red_line[0].pos, true);
   		dis_station = red_line[0].station;
   		dis_station_pos = red_line[0].pos;
   		for(var i in red_line)
   		{
   			temp_dist = haversineDistance(user_pos, red_line[i].pos, true);
   			if(temp_dist < distance)
   			{
   				distance = temp_dist;
   				dis_station = red_line[i].station;
   				dis_station_pos = red_line[i].pos;
   			}
   		}
   		distance = Math.round(distance * 1000)/1000;
		var infowindow = new google.maps.InfoWindow({
			content: "Closest Station: " + dis_station + " (" + distance + " miles)"
		});
		var user_path = new google.maps.Polyline({
			path: [user_pos, dis_station_pos],
			geodesic: true,
			strokeColor: '#FF0000',
			stokeOpacity: 1.0,
			strokeWeight: 2	
	 	});	
		user.addListener('click', function() {
        	infowindow.open(map, user);
        	user_path.setMap(map);
   		});
	}
	navigator.geolocation.getCurrentPosition(success);

	function window(station, id) {
		google.maps.event.addListener(station, 'click', function() {
			infowindow.setContent(get_data(id));
			infowindow.open(map, station);
		});
	}
	
	infowindow = new google.maps.InfoWindow();
	for(var i in red_line)
	{
		var station = new google.maps.Marker({
			position: red_line[i].pos,
			map: map,
			title: red_line[i].station,
			icon: image
		});
		var id = red_line[i].stop_id;
		window(station, id);
	}

	for(var i in red_line_tracks)
	{
		for(var j in red_line)
		{
			if(red_line[j].station == red_line_tracks[i].station1)
			{
				for(var k in red_line)
				{
					if(red_line[k].station == red_line_tracks[i].station2)
					{
						var redline_path = new google.maps.Polyline({
							path: [red_line[j].pos, red_line[k].pos],
							geodesic: true,
							strokeColor: '#FF0000',
							stokeOpacity: 1.0,
							strokeWeight: 2	
	 					});	
	 					redline_path.setMap(map);
					}
				}
			}
		}
	}

}