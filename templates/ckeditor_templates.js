// Override the default template set

var invisibleSpace = '&zwnj;';

CKEDITOR.addTemplates( 'default', {
	// The name of sub folder which hold the shortcut preview images of the
	// templates.
	imagesPath: '/themes/custom/cuenergy/images/ckeditor/',

	// The templates definitions.
	templates: [ {
		title: 'Question callout box',
		image: 'question-callout.png',
		description: 'Highlight answers to common questions.',
		html: '<div class="question panel fill"><span aria-hidden="true" class="fa fa-question-circle">'+invisibleSpace+'</span>Lorem ipsum dolor tianus.</div>'
	},
	{
		title: 'Info callout box',
		image: 'info-callout.png',
		description: 'Highlight text which serves as supplemental or additional information.',
		html: '<div class="info panel fill"><span aria-hidden="true" class="fa fa-info-circle">'+invisibleSpace+'</span>Lorem ipsum dolor tianus.</div>'
	},
	{
		title: 'Important callout box',
		image: 'important-callout.png',
		description: 'Highlight important information in a callout box.',
		html: '<div class="important panel fill"><span aria-hidden="true" class="fa fa-exclamation-circle">'+invisibleSpace+'</span>Lorem ipsum dolor tianus.</div>'
	},
	{
		title: 'Cornell event callout box',
		image: 'clocktower-callout.png',
		description: 'Highlight events in a special callout box w/icon.',
		html: '<div class="clocktower panel fill"><span aria-hidden="true" class="fa icon icon-clocktower-bold">'+invisibleSpace+'</span>Lorem ipsum dolor tianus.</div>'
	},
	{
		title: 'Question icon',
		image: 'question-icon.png',
		description: 'Insert a question mark icon.',
		html: '<span class="fa fa-question-circle" aria-hidden="true">'+invisibleSpace+'</span>'
	},
	{
		title: 'Info icon',
		image: 'info-icon.png',
		description: 'Insert an info icon.',
		html: '<span class="fa fa-info-circle" aria-hidden="true">'+invisibleSpace+'</span>'
	},
	{
		title: 'Important icon',
		image: 'important-icon.png',
		description: 'Insert an an important! icon.',
		html: '<span class="fa fa-exclamation-circle" aria-hidden="true">'+invisibleSpace+'</span>'
	},
	{
		title: 'Clock icon',
		image: 'clocktower-icon.png',
		description: 'Insert a cornell event icon.',
		html: '<span class="fa icon icon-clocktower-bold" aria-hidden="true">'+invisibleSpace+'</span>'
	} ]
} );

CKEDITOR.dtd.$removeEmpty.span = 0;