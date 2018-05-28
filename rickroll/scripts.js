var vid = document.getElementById("rickroll");
vid.ontimeupdate = function() {printLyrics()};
function printLyrics() {
	if(vid.currentTime > 18 && vid.currentTime < 35)
	{
		printFirstStanza();
	}
	else if(vid.currentTime > 35 && vid.currentTime < 43)
	{
		printSecondStanza();
	}
	else if(vid.currentTime > 43 && vid.currentTime < 60)
	{
		printChorus();
	}
	else if(vid.currentTime > 60 && vid.currentTime < 77)
	{
		printThirdStanza();
	}
	else if(vid.currentTime > 77 && vid.currentTime < 85)
	{
		printFourthStanza();
	}
	else if(vid.currentTime > 85 && vid.currentTime < 120)
	{
		printChorus();
	}
	else if(vid.currentTime > 120 && vid.currentTime < 136)
	{
		printFifthStanza();
	}
	else if(vid.currentTime > 136 && vid.currentTime < 153)
	{
		printSixthStanza();
	}
	else if(vid.currentTime > 153 && vid.currentTime < 160)
	{
		printSeventhStanza();
	}
	else if(vid.currentTime > 160 && vid.currentTime < 212)
	{
		printChorus();
	}
}
function printFirstStanza() {
	document.getElementById("lyrics").innerHTML = "We're no strangers to love<br />You know the rules and so do I<br />A full commitment's what I'm thinking of<br />You wouldn't get this from any other guy";
	}
	function printSecondStanza() {
	document.getElementById("lyrics").innerHTML = "I just wanna tell you how I'm feeling<br />Gotta make you understand";
}
	function printThirdStanza() {
		document.getElementById("lyrics").innerHTML = "We've known each other for so long<br />Your heart's been aching, but<br />You're too shy to say it<br />Inside, we both know what's been going on<br />We know the game and we're gonna play it";
	}
	function printFourthStanza() {
		document.getElementById("lyrics").innerHTML = "And if you ask me how I'm feeling<br />Don't tell me you're too blind to see";
	}
	function printFifthStanza() {
		document.getElementById("lyrics").innerHTML = "(Ooh, give you up)<br />(Ooh, give you up)<br />Never gonna give, never gonna give<br />(Give you up)<br />Never gonna give, never gonna give<br />(Give you up)";
	}
	function printSixthStanza() {
		document.getElementById("lyrics").innerHTML = "We've known each other for so long<br />Your heart's been aching, but<br />You're too shy to say it<br />Inside, we both know what's been going on<br />We know the game and we're gonna play it";
	}
	function printSeventhStanza() {
		document.getElementById("lyrics").innerHTML = "I just wanna tell you how I'm feeling<br />Gotta make you understand";
	}
	function printChorus() {
		document.getElementById("lyrics").innerHTML = "Never gonna give you up<br />Never gonna let you down<br />Never gonna run around and desert you<br />Never gonna make you cry<br />Never gonna say goodbye<br />Never gonna tell a lie and hurt you";
	}