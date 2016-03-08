/**
 * @fileoverview Users Widget.
 *
 * @author Your Name Here
 */
define(
  //-------------------------------------------------------------------
  // DEPENDENCIES
  //-------------------------------------------------------------------
  ['jquery', 'knockout'],

  //-------------------------------------------------------------------
  // MODULE DEFINITION
  //-------------------------------------------------------------------
  function ($, ko) {

    "use strict";

	var ENDPOINT_USERS_LIST = "http://jsonplaceholder.typicode.com/users";
	var SEARCH_NAME_KEY = "username";

	var KEY_CODE_ENTER = 13;

    return {
		// Search by username
		searchName: ko.observable(""),
		userList: ko.observableArray([]),

		/**
		* Called on first loading of widget instance
		*
		* @param {Object} widget
		*/
		onLoad: function(widget) {
			widget.searchHandler(widget);
		},

      /**
       * Called each time the widget instance will
       * appear on the page currently being loaded
       *
       * @param {Object} page
       */
		beforeAppear: function(page) {
			this.searchName("");
			this.userList.removeAll();
		},

		keyHandler: function(widget, event) {
			var keyCode;

			keyCode = (event.which ? event.which : event.keyCode);

			if(keyCode === KEY_CODE_ENTER) {
				// Enter key
				widget.searchHandler(widget);
				return false;
			}
			return true;
		},

		searchHandler: function(widget) {
			widget.userList.removeAll();
		
			var params = {};

			if (widget.searchName() && widget.searchName().length > 0) {
				params[SEARCH_NAME_KEY] = widget.searchName();
			}
			
			$.getJSON( 
				ENDPOINT_USERS_LIST, 
				params,
				function(data){
					for(var i=0; i<data.length; i++ ) {
						widget.userList.push(data[i]);
					}
				} 
			);
		},
    };
  }
);
