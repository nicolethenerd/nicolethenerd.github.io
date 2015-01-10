'use strict';

var topBarNext = $('.top-bar-next');
var topBar = $('.top-bar');
var pages = $('.page');
var navLinks = $('nav a');

var loadTime = 1000;

var pageColorMap = {
	projects: 'pink',
	resume: 'green',
	calendar: 'orange',
	about: 'blue'
};

function colorTopBar(color) {
	topBarNext.removeClass('blue-bg pink-bg green-bg orange-bg behind in-front');

	topBarNext.addClass(color+'-bg');

	topBar.addClass('behind');
	topBarNext.addClass('in-front');

	topBarNext.animate({width: '100%'}, loadTime, function() {
		topBar.removeClass('blue-bg pink-bg green-bg orange-bg behind in-front');
		topBar.addClass(color+'-bg');
		topBarNext.width('0%');
	});
}

function show(page) {
	var color = pageColorMap[page];

	colorTopBar(color);
	pages.hide();
	$('.' + page).fadeIn(loadTime);
	$('h1').removeClass().addClass(color);
	navLinks.removeClass('selected');
	$('.'+ page +'-link').addClass('selected');
}

function showProjects() {
	colorTopBar('pink');
	pages.hide();
	$('.projects').fadeIn(loadTime);
	$('h1').removeClass().addClass('pink');
	navLinks.removeClass('selected');
	$('.projects-link').addClass('selected');
}