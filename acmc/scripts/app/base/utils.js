define(['jquery'], function($){
	return {
		loadTemplate : function(templateId, templateSrc, model){
			if(!$("script#"+templateId).size()){
	            require([templateSrc], function(template) {
	                $('body').append($(template));
	                model.loading(false);
	            });
	        }else{
	            model.loading(false);
	        }
		}
	}
});