// TO DO: callbacks logic

(function ( $ ) {
	var methods = {
		init: function ( options ) {
			var $this = this;

			var settings = $.extend($.fn.sTabs.defaults, options);

			settings.init.call($this);
		},
		show: function( selector ) {
			// Before Show
			console.log($.fn.sTabs.defaults)

			console.log('Method show called for selector: ' + selector);

			// After Show
		},
		hide: function( selector ) {
			console.log('Method hide called for selector: ' + selector);
		}		
	}

	$.fn.sTabs = function ( options ) {
		if ( methods[options] ) {
			return methods[ options ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof options === 'object' || ! options ) {
			// Default to "init"
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  options + ' does not exist!' );
		}   
	}

	$.fn.sTabs.defaults = {
		fade: 						false, // Boolean -- Add/Remove tab transition
		defaultTab: 				0, // Int -- Index of the opened tab on page load
		tabsNavigationSelector: 	'', // String -- Class or ID of the Tabs Navigation container
		tabsContentSelector: 		'', // String --  Class or ID of the Tabs Content container
		init: 						function() {},
		beforeShow: 				function() {},
		afterShow: 					function() {},
		beforeClose: 				function() {},
		afterClose: 				function() {}
	}

} ( jQuery ));