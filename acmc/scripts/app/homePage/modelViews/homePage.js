define(['jquery', 'knockout', 'router'], function($, ko, Router) {

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
        
        var homeModel = new HomeModel();

        require(['jquery', 'text!app/homePage/partials/homePage.html'], function($, template) {
            var DomTemplate = $(template);
            if(!$("script#"+DomTemplate[0].id).size()){
                $('body').append(DomTemplate);
            }
            homeModel.loading(false);
        });

        return new Router.Page('Home', 'home-template', homeModel);
  	};

  	return homePage;
})