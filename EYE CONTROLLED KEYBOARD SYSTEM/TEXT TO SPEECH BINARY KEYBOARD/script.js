var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";

var low = 0;
var high = 27;

var mid = Math.floor((low + high)/2);
var Print = "";

function init(){
	document.getElementById("mytext").value = s[mid];
}

function ok(){
	Print += s[mid];
	document.getElementById("finaltext").value = Print;
	low = 0;
	high = 27;
	mid = Math.floor((low + high)/2);
	init();
}

function left(){

	high = mid;
	mid = Math.floor((low + high)/2);
	document.getElementById("mytext").value = s[mid];
}

function right(){

	low = mid;
	mid = Math.floor((low + high)/2);
	document.getElementById("mytext").value = s[mid];
}

function search(){
	search_text = String(document.getElementById("finaltext").value);
	//document.write(search_text);

	/*url = "https://www.google.co.in/search?q=" + search_text;
	openInNewTab(url);*/
	var msg = new SpeechSynthesisUtterance(search_text);
	window.speechSynthesis.speak(msg);

}

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}