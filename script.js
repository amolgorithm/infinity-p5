// Copyright (C) Amolgorithm

var jsCode = "addCanvas(400, 400);\n\nfunction cdraw() {\n\n}";
document.getElementById("the-editor-nav-inner").innerText = jsCode;



function openElements() {
	document.getElementById("the-element-nav").style.height = "104%";
	document.getElementById("the-main").style.transition = "0.5s";
	document.getElementById("the-main").style.width = "70%";
}

function closeElements() {
	document.getElementById("the-element-nav").style.height = "0";
	document.getElementById("the-main").style.transition = "0.5s";
	document.getElementById("the-main").style.width = "90%";
}


function openEditor() {
	document.getElementById("the-editor-nav-inner").style.visibility = "visible";
	document.getElementsByClassName("introtag")[0].style.visibility = "visible";
	document.getElementById("run-btn").style.visibility = "visible";
	
	document.getElementById("the-editor-nav").style.width = "37%";
	document.getElementById("the-main").style.transition = "0.5s";
	document.getElementById("the-main").style.width = "60%";
	document.getElementById("the-console").style.width = "62.5%";
}

function closeEditor() {
	document.getElementById("the-editor-nav-inner").style.visibility = "hidden";
	document.getElementsByClassName("introtag")[0].style.visibility = "hidden";
	document.getElementById("run-btn").style.visibility = "hidden";
	
	document.getElementById("the-editor-nav").style.width = "1%";
	document.getElementById("the-main").style.transition = "0.5s";
	document.getElementById("the-main").style.width = "93%";
	document.getElementById("the-console").style.width = "98.5%";
}

function openConsole() {
	document.getElementById("the-console").style.height = "30vh";
	document.getElementById("the-main").style.transition = "0.5s";
	document.getElementById("the-main").style.height = "61vh";
}

function closeConsole() {
	document.getElementById("the-console").style.height = "0";
	document.getElementById("the-main").style.transition = "0.5s";
	document.getElementById("the-main").style.height = "90vh";
}


function downloadTheFile() {
	var filename = prompt("Enter name for file", "untitled.js");	
	var element = document.createElement('a');
    element.setAttribute('href', 'data:text/javascript;charset=utf-8,' + encodeURIComponent(document.getElementById("the-editor-nav-inner").innerText));
    element.setAttribute('download', filename);
    
    element.click();
}

function openFile(e) {
	var file = e.target.files[0];
	if (!file) {
		return;
	}
	var reader = new FileReader();
	reader.onload = function(e) {
		var contents = e.target.result;
		document.getElementById("the-editor-nav-inner").innerText = contents;
	};
	reader.readAsText(file);
	
}

document.getElementById('file-input').addEventListener('change', openFile, false);


function deleteFile() {
	var result = confirm("Are you sure you want to delete this file?");
	
	theResult = result ? true :
    false;
	
	if (theResult) {
		document.getElementById("canvas-area").innerHTML = "";
		jsCode = "addCanvas(400, 400);\n\nfunction cdraw() {\n\n}";
		document.getElementById("the-editor-nav-inner").innerText = jsCode;
	}
}


