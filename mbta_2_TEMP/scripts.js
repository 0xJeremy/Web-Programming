var map;
var image = 'train.png';
var red_line = [
	{station: "South Station", pos: {lat: 42.352271, lng: -71.05524200000001}},
	{station: "Andrew", pos: {lat: 42.330154, lng: -71.057655}},
	{station: "Porter Square", pos: {lat: 42.3884, lng: -71.11914899999999}},
	{station: "Harvard Square", pos: {lat: 42.373362, lng: -71.118956}},
	{station: "JFK/Umass", pos: {lat: 42.320685, lng: -71.052391}},
	{station: "Savin Hill", pos: {lat: 42.31129, lng: -71.053331}},
	{station: "Park Street", pos: {lat: 42.35639457, lng: -71.0624242}},
	{station: "Broadway", pos: {lat: 42.342622, lng: -71.056967}},
	{station: "North Quincy", pos: {lat: 42.275275, lng: -71.029583}},
	{station: "Shawmut", pos: {lat: 42.29312583, lng: -71.06573796000001}},
	{station: "Davis", pos: {lat: 42.39674, lng: -71.121815}},
	{station: "Alewife", pos: {lat: 42.395428, lng:  -71.142483}},
	{station: "Kendall/MIT", pos: {lat: 42.36249079, lng: -71.08617653}},
	{station: "Charles/MGH", pos: {lat: 42.361166, lng: -71.070628}},
	{station: "Downtown Crossing", pos: {lat: 42.355518, lng: -71.060225}},
	{station: "Quincy Center", pos: {lat: 42.251809, lng: -71.005409}},
	{station: "Quincy Adams", pos: {lat: 42.233391, lng: -71.007153}},
	{station: "Ashmont", pos: {lat: 42.284652, lng: -71.06448899999999}},
	{station: "Wollaston", pos: {lat: 42.2665139, lng: -71.0203369}},
	{station: "Fields Corner", pos: {lat: 42.300093, lng: -71.061667}},
	{station: "Central Square", pos: {lat: 42.365486, lng: -71.103802}},
	{station: "Braintree", pos: {lat: 42.2078543, lng: -71.0011385}}
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
   		for(var i in red_line)
   		{
   			temp_dist = haversineDistance(user_pos, red_line[i].pos, true);
   			if(temp_dist < distance)
   			{
   				distance = temp_dist;
   				dis_station = red_line[i].station;
   			}
   		}
   		distance = Math.round(distance * 1000)/1000;
		var infowindow = new google.maps.InfoWindow({
			content: "Closest Station: " + dis_station + " (" + distance + " miles)"
		});
		user.addListener('click', function() {
        	infowindow.open(map, user);
   		});
	}
	navigator.geolocation.getCurrentPosition(success);
	for(var i in red_line)
	{
		var station = new google.maps.Marker({
			position: red_line[i].pos,
			map: map,
			title: red_line[i].station,
			icon: image
		});
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