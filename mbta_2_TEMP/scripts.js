var map;
var image = 'train.png';
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
	}
	navigator.geolocation.getCurrentPosition(success);
    var south_station = new google.maps.Marker({
		position: south_station_pos,
		map: map,
		title: 'South Station',
		icon: image
	});
	var andrew = new google.maps.Marker({
		position: andrew_pos,
		map: map,
		title: 'Andrew',
		icon: image
	});
	var porter_square = new google.maps.Marker({
		position: porter_square_pos,
		map: map,
		title: 'Porter Square',
		icon: image
	});
	var harvard_square = new google.maps.Marker({
		position: harvard_square_pos,
		map: map,
		title: 'Harvard Square',
		icon: image
	});
	var jfk_umass = new google.maps.Marker({
		position: jfk_umass_pos,
		map: map,
		title: 'JFK/UMass',
		icon: image
	});
	var savin_hill = new google.maps.Marker({
		position: savin_hill_pos,
		map: map,
		title: 'Savin Hill',
		icon: image
	});
	var park_street = new google.maps.Marker({
		position: park_street_pos,
		map: map,
		title: 'Park Street',
		icon: image
	});
	var broadway = new google.maps.Marker({
		position: broadway_pos,
		map: map,
		title: 'Broadway',
		icon: image
	});
	var north_quincy = new google.maps.Marker({
		position: north_quincy_pos,
		map: map,
		title: 'North Quincy',
		icon: image
	});
	var shawmut = new google.maps.Marker({
		position: shawmut_pos,
		map: map,
		title: 'Shawmut',
		icon: image
	});
	var davis = new google.maps.Marker({
		position: davis_pos,
		map: map,
		title: 'Davis',
		icon: image
	});
	var alewife = new google.maps.Marker({
		position: alewife_pos,
		map: map,
		title: 'Alewife',
		icon: image
	});
	var kendall_mit = new google.maps.Marker({
		position: kendall_mit_pos,
		map: map,
		title: 'Kendall/MIT',
		icon: image
	});
	var charles_mgh = new google.maps.Marker({
		position: charles_mgh_pos,
		map: map,
		title: 'Charles/MGH',
		icon: image
	});
	var downtown_crossing = new google.maps.Marker({
		position: downtown_crossing_pos,
		map: map,
		title: 'Downtown Crossing',
		icon: image
	});
	var quincy_center = new google.maps.Marker({
		position: quincy_center_pos,
		map: map,
		title: 'Quincy Center',
		icon: image
	});
	var quincy_adams = new google.maps.Marker({
		position: quincy_adams_pos,
		map: map,
		title: 'Quincy Adams',
		icon: image
	});
	var ashmont = new google.maps.Marker({
		position: ashmont_pos,
		map: map,
		title: 'Ashmont',
		icon: image
	});
	var wollaston = new google.maps.Marker({
		position: wollaston_pos,
		map: map,
		title: 'Wollaston',
		icon: image
	});
	var fields_corner = new google.maps.Marker({
		position: fields_corner_pos,
		map: map,
		title: 'Fields Corner',
		icon: image
	});
	var central_square = new google.maps.Marker({
		position: central_square_pos,
		map: map,
		title: 'Central Square',
		icon: image
	});
	var braintree = new google.maps.Marker({
		position: braintree_pos,
		map: map,
		title: 'Braintree',
		icon: image,
	});

	var path_1 = new google.maps.Polyline({
		path: red_1,
		geodesic: true,
		strokeColor: '#FF0000',
		stokeOpacity: 1.0,
		strokeWeight: 2
	});
	var path_2 = new google.maps.Polyline({
		path: red_2,
		geodesic: true,
		strokeColor: '#FF0000',
		stokeOpacity: 1.0,
		strokeWeight: 2
	});
	var path_3 = new google.maps.Polyline({
		path: red_3,
		geodesic: true,
		strokeColor: '#FF0000',
		stokeOpacity: 1.0,
		strokeWeight: 2
	});
	var path_4 = new google.maps.Polyline({
		path: red_4,
		geodesic: true,
		strokeColor: '#FF0000',
		stokeOpacity: 1.0,
		strokeWeight: 2
	});
	var path_5 = new google.maps.Polyline({
		path: red_5,
		geodesic: true,
		strokeColor: '#FF0000',
		stokeOpacity: 1.0,
		strokeWeight: 2
	});
	var path_6 = new google.maps.Polyline({
		path: red_6,
		geodesic: true,
		strokeColor: '#FF0000',
		stokeOpacity: 1.0,
		strokeWeight: 2
	});
	var path_7 = new google.maps.Polyline({
		path: red_7,
		geodesic: true,
		strokeColor: '#FF0000',
		stokeOpacity: 1.0,
		strokeWeight: 2
	});
	var path_8 = new google.maps.Polyline({
		path: red_8,
		geodesic: true,
		strokeColor: '#FF0000',
		stokeOpacity: 1.0,
		strokeWeight: 2
	});
	var path_9 = new google.maps.Polyline({
		path: red_9,
		geodesic: true,
		strokeColor: '#FF0000',
		stokeOpacity: 1.0,
		strokeWeight: 2
	});
	var path_10 = new google.maps.Polyline({
		path: red_10,
		geodesic: true,
		strokeColor: '#FF0000',
		stokeOpacity: 1.0,
		strokeWeight: 2
	});
	var path_11 = new google.maps.Polyline({
		path: red_11,
		geodesic: true,
		strokeColor: '#FF0000',
		stokeOpacity: 1.0,
		strokeWeight: 2
	});
	var path_12 = new google.maps.Polyline({
		path: red_12,
		geodesic: true,
		strokeColor: '#FF0000',
		stokeOpacity: 1.0,
		strokeWeight: 2
	});
	var path_13 = new google.maps.Polyline({
		path: red_13,
		geodesic: true,
		strokeColor: '#FF0000',
		stokeOpacity: 1.0,
		strokeWeight: 2
	});
	var path_14 = new google.maps.Polyline({
		path: red_14,
		geodesic: true,
		strokeColor: '#FF0000',
		stokeOpacity: 1.0,
		strokeWeight: 2
	});
	var path_15 = new google.maps.Polyline({
		path: red_15,
		geodesic: true,
		strokeColor: '#FF0000',
		stokeOpacity: 1.0,
		strokeWeight: 2
	});
	var path_16 = new google.maps.Polyline({
		path: red_16,
		geodesic: true,
		strokeColor: '#FF0000',
		stokeOpacity: 1.0,
		strokeWeight: 2
	});
	var path_17 = new google.maps.Polyline({
		path: red_17,
		geodesic: true,
		strokeColor: '#FF0000',
		stokeOpacity: 1.0,
		strokeWeight: 2
	});
	var path_18 = new google.maps.Polyline({
		path: red_18,
		geodesic: true,
		strokeColor: '#FF0000',
		stokeOpacity: 1.0,
		strokeWeight: 2
	});
	var path_19 = new google.maps.Polyline({
		path: red_19,
		geodesic: true,
		strokeColor: '#FF0000',
		stokeOpacity: 1.0,
		strokeWeight: 2
	});
	var path_20 = new google.maps.Polyline({
		path: red_20,
		geodesic: true,
		strokeColor: '#FF0000',
		stokeOpacity: 1.0,
		strokeWeight: 2
	});
	var path_21 = new google.maps.Polyline({
		path: red_21,
		geodesic: true,
		strokeColor: '#FF0000',
		stokeOpacity: 1.0,
		strokeWeight: 2
	});

	path_1.setMap(map);
	path_2.setMap(map);
	path_3.setMap(map);
	path_4.setMap(map);
	path_5.setMap(map);
	path_6.setMap(map);
	path_7.setMap(map);
	path_8.setMap(map);
	path_9.setMap(map);
	path_10.setMap(map);
	path_11.setMap(map);
	path_12.setMap(map);
	path_13.setMap(map);
	path_14.setMap(map);
	path_15.setMap(map);
	path_16.setMap(map);
	path_17.setMap(map);
	path_18.setMap(map);
	path_19.setMap(map);
	path_20.setMap(map);
	path_21.setMap(map);

}