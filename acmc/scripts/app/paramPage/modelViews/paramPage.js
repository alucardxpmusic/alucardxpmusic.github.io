define(['jquery', 'knockout', 'router'], function($, ko, Router) {

    var paramPage = function(param1, param2) {      //url params

        function ParamModel() {
            this.loading = ko.observable(true);
            this.param1 = param1;
            this.param2 = param2;
        }
          
        var paramModel = new ParamModel();

        require(['jquery', 'text!app/paramPage/partials/paramPage.html'], function($, template) {
            var DomTemplate = $(template);
            if(!$("script#"+DomTemplate[0].id).size()){
                $('body').append(DomTemplate);
            }
            paramModel.loading(false);
        });

        return new Router.Page('Params', 'params-template', paramModel);
  	};

  	return paramPage;
})