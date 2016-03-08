define(['knockout', 'router'], function(ko, Router) {

	var errorPage = function() {

		function ErrorModel() {
			this.loading = ko.observable(true);
			this.errorMsg = ko.observable('Deliberate error!');	//can not bind this.error=***
		}

		var errorModel = new ErrorModel();

		require(['jquery', 'text!app/errorPage/partials/errorPage.html'], function($, template) {
            var DomTemplate = $(template);
            if(!$("script#"+DomTemplate[0].id).size()){
            	$('body').append(DomTemplate);
            }
            errorModel.loading(false);
        });

		return new Router.Page('Will it work?', 'error-template', errorModel);
	}
    return errorPage;
})