define(['knockout', 'router', 'utils'], function(ko, Router, utils) {

    var templateId = 'params-template';
    var templateSrc = 'text!app/paramPage/partials/paramPage.html';
    var title = 'Params';

    var paramPage = function(param1, param2) {      //url params

        function ParamModel() {
            this.loading = ko.observable(true);
            this.param1 = param1;
            this.param2 = param2;
        }
          
        var model = new ParamModel();

        utils.loadTemplate(templateId, templateSrc, model);

        return new Router.Page(title, templateId, model);
  	};

  	return paramPage;
})