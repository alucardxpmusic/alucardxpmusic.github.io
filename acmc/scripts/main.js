require.config({
  shim: {
  },
  paths: {
    jquery:       'lib/jquery',
    knockout:     'lib/knockout',
    text:         'lib/text',
    addTemplates: 'app/commonTemplate/addTemplates',
    register:     '../widget/register',
    utils:        'app/base/utils',
    injector:     'app/base/injector',
    homePage:     'app/homePage/modelViews/homePage',
    errorPage:    'app/errorPage/modelViews/errorPage',
    paramPage:    'app/paramPage/modelViews/paramPage'
  }
});

define(['knockout', 'router', 'homePage', 'errorPage', 'paramPage', 'addTemplates', 'register', 'injector'], function(ko, Router, homePage, errorPage, paramPage) {

  var urlMapping = {
    home:   { match: /^$/,                    page: homePage },
    param:  { match: /^params\/(.+)\/(\d+)$/, page: paramPage },
    fail:   { match: /^fail$/,                page: errorPage }
  }

  function TopLevelModel() {
    this.router = new Router(urlMapping);     // second param which redirect to some page
  }

  var viewModel = new TopLevelModel();

  ko.applyBindings(viewModel, $('html').get(0));
});

