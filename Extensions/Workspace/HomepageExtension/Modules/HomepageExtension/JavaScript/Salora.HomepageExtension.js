// Entry point for javascript creates a router to handle new routes and adds a view inside the Product Details Page

define(
	'Salora.HomepageExtension'
,   [
		'underscore'
	,	'SC.Configuration'
	,	'Home.View'
	,	'Testimonials.Homepage.View'
	, 	'News.Homepage.View'
	,	'Utils'
	]
,   function
	(
		_
	,	Configuration
	,	HomeView
	, 	TestimonialsHomepageView
	, 	NewsHomepageView

	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{

			var layout = container.getComponent('Layout');

			HomeView.prototype.getContext = _.wrap(HomeView.prototype.getContext, function (fn) {
				var context = fn.apply(this, _.toArray(arguments).slice(1));	
				context.customBuckets = Configuration.get('home.customBuckets', [])
				context.customSliders = Configuration.get('home.customSliders', [])
				return context;
			});

			layout.addChildView('TestimonialsView', function () {
				return new TestimonialsHomepageView();
			});

			layout.addChildView('NewsView', function () {
				return new NewsHomepageView();
			});

		}
	};
});
