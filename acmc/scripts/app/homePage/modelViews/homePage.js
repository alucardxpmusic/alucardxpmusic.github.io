define(['knockout', 'router', 'utils'], function(ko, Router, utils) {

    var templateId = 'home-template';
    var templateSrc = 'text!app/homePage/partials/homePage.html';
    var title = 'Home';

    var homePage = function() {

        function Product(name, rating) {
            this.name = name;
            this.userRating = ko.observable(rating || null);
        }
         
        function HomeModel() {
            this.loading = ko.observable(true);
            this.products = ko.observableArray();
        }
         
        HomeModel.prototype.addProduct = function() {
            var name = 'Product ' + (this.products().length + 1);
            this.products.push(new Product(name));
        };
        
        var model = new HomeModel();

        utils.loadTemplate(templateId, templateSrc, model);

        return new Router.Page(title, templateId, model);
  	};

  	return homePage;
})