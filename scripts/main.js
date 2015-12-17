'use strict';

var $button = $('#loadingButton');
$button.html('click');
$button.on('click',loading);

function loading(e){
	$button.html('loading...');
	$button.css('color', 'grey');

setTimeout(changeText,4000);

function changeText(e){
	$button.html('click');
	$button.css('color', 'green');

	}
}


