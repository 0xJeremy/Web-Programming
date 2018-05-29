function parse() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			var jsonData = JSON.parse(this.responseText);
			display_data(jsonData);
		}
	};
	xmlhttp.open('GET', 'data.json', true);
	xmlhttp.send();
}

function display_data(jsonData) {
	var info = jsonData;
	var messagetext = "";
	for(var i in info)
	{
		messagetext += info[i].content + " " + info[i].username + "<br /><br />";
	}
	document.getElementById("messages").innerHTML = messagetext;
}