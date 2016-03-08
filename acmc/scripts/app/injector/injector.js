define(['jquery'], function($){
	$.ajaxSetup({ success: function (data) { 
		console.log(200);
	}});
})