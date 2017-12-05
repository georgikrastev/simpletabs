( function( $ ) {

	var simpleTabs = function(element, options) {
		var _this = this;

		_this.settings = $.extend($.fn.simpleTabs.defaults, options);
		_this.element = $(element);
		
		_this.init();
	}

	simpleTabs.prototype.init = function() {
		var _this = this;
		var settings = _this.settings;
		var $tabsContainer = _this.element;

		_this.buildClases($tabsContainer);
		_this.activateTab();

		// Trigger `onInit` callback function
		settings.onInit();
	}

	simpleTabs.prototype.buildClases = function($container) {
		var _this = this;
		var fadeClass = _this.settings.animate === true ? 'fade' : '';

		$container
			.find('.simple-tabs__content')
				.children()
				.addClass(fadeClass);
	}

	simpleTabs.prototype.updateTab = function($activeTabLink, $activeTab) {
		var _this = this;

		$activeTabLink
			.parent()
				.add( $activeTab )
				.addClass('active')
				.siblings()
				.removeClass('active');

		// Trigger `onAfterChange` callback function
		_this.settings.onAfterChange();
	}

	simpleTabs.prototype.activateTab = function() {
		var _this = this;
		var $tabLink = $('.simple-tabs__nav a');

		$tabLink.on('click', function(event) {
			event.preventDefault();

			var $this = $(this);
			var tabID = $this.attr('href');
			var $activeTab = $(tabID);

			// Trigger `onBeforeChange` callback function
			_this.settings.onBeforeChange();

			_this.updateTab($this, $activeTab);
		});
	}

	simpleTabs.prototype.change = function( selector ) {
		var _this = this;

		var $activeTabLink = $('[href="' + selector + '"]');
		var $activeTab = $(selector);

		// Trigger `onBeforeChange` callback function
		_this.settings.onBeforeChange();

		_this.updateTab($activeTabLink, $activeTab);
	}

	$.fn.simpleTabs = function(options) {
		var args = arguments;
		
		return this.each(function() {			
			var $element = $(this);

        	if ($.type(options) === 'string') $element.data('simpletabs')[options](args[1]);

			if( $element.data('simpletabs')) {
				return;
			}

			var instance = new simpleTabs(this, options);

			$element.data('simpletabs', instance);
		});
	}

	$.fn.simpleTabs.defaults = {
		animate: 					true, // Boolean -- Add/Remove tab transition
		defaultTab: 				0, // Int -- Index of the opened tab on page load
		onInit: 					function() {},
		onBeforeChange: 			function() {},
		onAfterChange: 				function() {}
	}

})( jQuery );