define(['knockout'], function(ko){
	ko.components.register('like-or-dislike', {
		viewModel: { require: '../widget/like-widget/js/component-like-widget' },
		template: { require: 'text!../widget/like-widget/templates/component-like-widget.template' }
	});
})