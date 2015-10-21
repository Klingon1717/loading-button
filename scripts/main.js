'use strict';

var $button = $('#loadingButton');
$button.html('click');
$button.on('click',loading);

function loading(e){
	$button.html('loading...');
	$button.css('color', 'grey');
	setTimeOut(changeText,4000);

function changeText(){
	$button.html('submit');
	$button.css('color', 'green');
	}
}


