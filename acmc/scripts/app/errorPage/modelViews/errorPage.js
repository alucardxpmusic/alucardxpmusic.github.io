define(['knockout', 'router', 'utils'], function(ko, Router, utils) {

	var templateId = 'error-template';
    var templateSrc = 'text!app/errorPage/partials/errorPage.html';
    var title = 'Will it work?';

	var errorPage = function() {

		function ErrorModel() {
			this.loading = ko.observable(true);
			this.errorMsg = ko.observable('Deliberate error!');	//can not bind this.error=***
		}

		var model = new ErrorModel();

		utils.loadTemplate(templateId, templateSrc, model);

        return new Router.Page(title, templateId, model);
	}
    return errorPage;
})