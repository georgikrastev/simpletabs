( function( $ ) {
	$(document).ready(function() {
		// Init Tabs plugin and demonstrate callbacks
		$('.simple-tabs').simpleTabs({
			animate: true,
			theme: 'indigo',
			defaultTab: 0,
			onInit: function() {
				console.log('Initialized.');
			},
			onBeforeChange: function() {
				console.log('Before change.')
			},
			onAfterChange: function() {
				console.log('After change.')				
			}
		});

		// Demonstrate `Change` method
		$('.btn-show-tab').on('click', function(event) {
			event.preventDefault();

			$('.simple-tabs').simpleTabs('change', $(this).data('tab'));			
		});
	});
} ( jQuery ));