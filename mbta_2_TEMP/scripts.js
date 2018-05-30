var map;
var image = 'train.png';
var red_line = [
	{"South Station": {station: "South Station", pos: {lat: 42.352271, lng: -71.05524200000001}}},
	{"Andrew": {station: "Andrew", pos: {lat: 42.330154, lng: -71.057655}}},
	{"Porter Square": {station: "Porter Square", pos: {lat: 42.3884, lng: -71.11914899999999}}},
	{"Harvard Square": {station: "Harvard Square", pos: {lat: 42.373362, lng: -71.118956}}},
	{"JFK/Umass": {station: "JFK/Umass", pos: {lat: 42.320685, lng: -71.052391}}},
	{"Savin Hill": {station: "Savin Hill", pos: {lat: 42.31129, lng: -71.053331}}},
	{"Park Street": {station: "Park Street", pos: {lat: 42.35639457, lng: -71.0624242}}},
	{"Broadway": {station: "Broadway", pos: {lat: 42.342622, lng: -71.056967}}},
	{"North Quincy": {station: "North Quincy", pos: {lat: 42.275275, lng: -71.029583}}},
	{"Shawmut": {station: "Shawmut", pos: {lat: 42.29312583, lng: -71.06573796000001}}},
	{"Davis": {station: "Davis", pos: {lat: 42.39674, lng: -71.121815}}},
	{"Alewife": {station: "Alewife", pos: {lat: 42.395428, lng:  -71.142483}}},
	{"Kendall/MIT": {station: "Kendall/MIT", pos: {lat: 42.36249079, lng: -71.08617653}}},
	{"Charles": {station: "Charles/MGH", pos: {lat: 42.361166, lng: -71.070628}}},
	{"Downtown Cross": {station: "Downtown Crossing", pos: {lat: 42.355518, lng: -71.060225}}},
	{"Quincy Center": {station: "Quincy Center", pos: {lat: 42.251809, lng: -71.005409}}},
	{"Quincy Adams": {station: "Quincy Adams", pos: {lat: 42.233391, lng: -71.007153}}},
	{"Ashmont": {station: "Ashmont", pos: {lat: 42.284652, lng: -71.06448899999999}}},
	{"Wollaston": {station: "Wollaston", pos: {lat: 42.2665139, lng: -71.0203369}}},
	{"Fields Corner": {station: "Fields Corner", pos: {lat: 42.300093, lng: -71.061667}}},
	{"Central Square": {station: "Central Square", pos: {lat: 42.365486, lng: -71.103802}}},
	{"Braintree": {station: "Braintree", pos: {lat: 42.2078543, lng: -71.0011385}}}
]

var south_station_pos = {lat: 42.352271, lng: -71.05524200000001};
var andrew_pos = {lat: 42.330154, lng: -71.057655};
var porter_square_pos = {lat: 42.3884, lng: -71.11914899999999};
var harvard_square_pos = {lat: 42.373362, lng: -71.118956};
var jfk_umass_pos = {lat: 42.320685, lng: -71.052391};
var savin_hill_pos = {lat: 42.31129, lng: -71.053331};
var park_street_pos = {lat: 42.35639457, lng: -71.0624242};
var broadway_pos = {lat: 42.342622, lng: -71.056967};
var north_quincy_pos = {lat: 42.275275, lng: -71.029583};
var shawmut_pos = {lat: 42.29312583, lng: -71.06573796000001};
var davis_pos = {lat: 42.39674, lng: -71.121815};
var alewife_pos = {lat: 42.395428, lng:  -71.142483};
var kendall_mit_pos = {lat: 42.36249079, lng: -71.08617653};
var charles_mgh_pos = {lat: 42.361166, lng: -71.070628};
var downtown_crossing_pos = {lat: 42.355518, lng: -71.060225};
var quincy_center_pos = {lat: 42.251809, lng: -71.005409};
var quincy_adams_pos = {lat: 42.233391, lng: -71.007153};
var ashmont_pos = {lat: 42.284652, lng: -71.06448899999999};
var wollaston_pos = {lat: 42.2665139, lng: -71.0203369};
var fields_corner_pos = {lat: 42.300093, lng: -71.061667};
var central_square_pos = {lat: 42.365486, lng: -71.103802};
var braintree_pos = {lat: 42.2078543, lng: -71.0011385};
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
]
var red_1 = [alewife_pos, davis_pos];
var red_2 = [davis_pos, porter_square_pos];
var red_3 = [porter_square_pos, harvard_square_pos];
var red_4 = [harvard_square_pos, central_square_pos];
var red_5 = [central_square_pos, kendall_mit_pos];
var red_6 = [kendall_mit_pos, charles_mgh_pos];
var red_7 = [charles_mgh_pos, park_street_pos];
var red_8 = [park_street_pos, downtown_crossing_pos];
var red_9 = [downtown_crossing_pos, south_station_pos];
var red_10 = [south_station_pos, broadway_pos];
var red_11 = [broadway_pos, andrew_pos];
var red_12 = [andrew_pos, jfk_umass_pos];
var red_13 = [jfk_umass_pos, north_quincy_pos];
var red_14 = [north_quincy_pos, wollaston_pos];
var red_15 = [wollaston_pos, quincy_center_pos];
var red_16 = [quincy_center_pos, quincy_adams_pos];
var red_17 = [quincy_adams_pos, braintree_pos];
var red_18 = [jfk_umass_pos, savin_hill_pos];
var red_19 = [savin_hill_pos, fields_corner_pos];
var red_20 = [fields_corner_pos, shawmut_pos];
var red_21 = [shawmut_pos, ashmont_pos];

function haversineDistance(coords1, coords2, isMiles) {
	function toRad(x) {
		return x * Math.PI / 180;
	}

	var lon1 = coords1[0];
	var lat1 = coords1[1];

	var lon2 = coords2[0];
	var lat2 = coords2[1];

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
		var infowindow = new google.maps.InfoWindow({
			content: "Hello!"
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
			title: red_line[i],
			icon: image
		});
	}

	// for(var i in red_line_tracks)
	// {
	// 	var redline_path = new google.maps.Polyline({
	// 		path: [red_line[station: red_line_tracks[i][station1]].pos,
	// 				red_line[station: red_line_tracks[i][station2]].pos],
	// 		geodesic: true,
	// 		strokeColor: '#FF0000',
	// 		stokeOpacity: 1.0,
	// 		strokeWeight: 2	
	//  	});	
	// }

	// var path_1 = new google.maps.Polyline({
	// 	path: red_1,
	// 	geodesic: true,
	// 	strokeColor: '#FF0000',
	// 	stokeOpacity: 1.0,
	// 	strokeWeight: 2
	// });
	// var path_2 = new google.maps.Polyline({
	// 	path: red_2,
	// 	geodesic: true,
	// 	strokeColor: '#FF0000',
	// 	stokeOpacity: 1.0,
	// 	strokeWeight: 2
	// });
	// var path_3 = new google.maps.Polyline({
	// 	path: red_3,
	// 	geodesic: true,
	// 	strokeColor: '#FF0000',
	// 	stokeOpacity: 1.0,
	// 	strokeWeight: 2
	// });
	// var path_4 = new google.maps.Polyline({
	// 	path: red_4,
	// 	geodesic: true,
	// 	strokeColor: '#FF0000',
	// 	stokeOpacity: 1.0,
	// 	strokeWeight: 2
	// });
	// var path_5 = new google.maps.Polyline({
	// 	path: red_5,
	// 	geodesic: true,
	// 	strokeColor: '#FF0000',
	// 	stokeOpacity: 1.0,
	// 	strokeWeight: 2
	// });
	// var path_6 = new google.maps.Polyline({
	// 	path: red_6,
	// 	geodesic: true,
	// 	strokeColor: '#FF0000',
	// 	stokeOpacity: 1.0,
	// 	strokeWeight: 2
	// });
	// var path_7 = new google.maps.Polyline({
	// 	path: red_7,
	// 	geodesic: true,
	// 	strokeColor: '#FF0000',
	// 	stokeOpacity: 1.0,
	// 	strokeWeight: 2
	// });
	// var path_8 = new google.maps.Polyline({
	// 	path: red_8,
	// 	geodesic: true,
	// 	strokeColor: '#FF0000',
	// 	stokeOpacity: 1.0,
	// 	strokeWeight: 2
	// });
	// var path_9 = new google.maps.Polyline({
	// 	path: red_9,
	// 	geodesic: true,
	// 	strokeColor: '#FF0000',
	// 	stokeOpacity: 1.0,
	// 	strokeWeight: 2
	// });
	// var path_10 = new google.maps.Polyline({
	// 	path: red_10,
	// 	geodesic: true,
	// 	strokeColor: '#FF0000',
	// 	stokeOpacity: 1.0,
	// 	strokeWeight: 2
	// });
	// var path_11 = new google.maps.Polyline({
	// 	path: red_11,
	// 	geodesic: true,
	// 	strokeColor: '#FF0000',
	// 	stokeOpacity: 1.0,
	// 	strokeWeight: 2
	// });
	// var path_12 = new google.maps.Polyline({
	// 	path: red_12,
	// 	geodesic: true,
	// 	strokeColor: '#FF0000',
	// 	stokeOpacity: 1.0,
	// 	strokeWeight: 2
	// });
	// var path_13 = new google.maps.Polyline({
	// 	path: red_13,
	// 	geodesic: true,
	// 	strokeColor: '#FF0000',
	// 	stokeOpacity: 1.0,
	// 	strokeWeight: 2
	// });
	// var path_14 = new google.maps.Polyline({
	// 	path: red_14,
	// 	geodesic: true,
	// 	strokeColor: '#FF0000',
	// 	stokeOpacity: 1.0,
	// 	strokeWeight: 2
	// });
	// var path_15 = new google.maps.Polyline({
	// 	path: red_15,
	// 	geodesic: true,
	// 	strokeColor: '#FF0000',
	// 	stokeOpacity: 1.0,
	// 	strokeWeight: 2
	// });
	// var path_16 = new google.maps.Polyline({
	// 	path: red_16,
	// 	geodesic: true,
	// 	strokeColor: '#FF0000',
	// 	stokeOpacity: 1.0,
	// 	strokeWeight: 2
	// });
	// var path_17 = new google.maps.Polyline({
	// 	path: red_17,
	// 	geodesic: true,
	// 	strokeColor: '#FF0000',
	// 	stokeOpacity: 1.0,
	// 	strokeWeight: 2
	// });
	// var path_18 = new google.maps.Polyline({
	// 	path: red_18,
	// 	geodesic: true,
	// 	strokeColor: '#FF0000',
	// 	stokeOpacity: 1.0,
	// 	strokeWeight: 2
	// });
	// var path_19 = new google.maps.Polyline({
	// 	path: red_19,
	// 	geodesic: true,
	// 	strokeColor: '#FF0000',
	// 	stokeOpacity: 1.0,
	// 	strokeWeight: 2
	// });
	// var path_20 = new google.maps.Polyline({
	// 	path: red_20,
	// 	geodesic: true,
	// 	strokeColor: '#FF0000',
	// 	stokeOpacity: 1.0,
	// 	strokeWeight: 2
	// });
	// var path_21 = new google.maps.Polyline({
	// 	path: red_21,
	// 	geodesic: true,
	// 	strokeColor: '#FF0000',
	// 	stokeOpacity: 1.0,
	// 	strokeWeight: 2
	// });

	// path_1.setMap(map);
	// path_2.setMap(map);
	// path_3.setMap(map);
	// path_4.setMap(map);
	// path_5.setMap(map);
	// path_6.setMap(map);
	// path_7.setMap(map);
	// path_8.setMap(map);
	// path_9.setMap(map);
	// path_10.setMap(map);
	// path_11.setMap(map);
	// path_12.setMap(map);
	// path_13.setMap(map);
	// path_14.setMap(map);
	// path_15.setMap(map);
	// path_16.setMap(map);
	// path_17.setMap(map);
	// path_18.setMap(map);
	// path_19.setMap(map);
	// path_20.setMap(map);
	// path_21.setMap(map);

}