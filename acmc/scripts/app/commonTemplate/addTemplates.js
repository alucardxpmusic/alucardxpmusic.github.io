define(['jquery', 'text!app/commonTemplate/partials/tepmlate.html'], function($, tepmlate){
	$('body').append($(tepmlate));
});