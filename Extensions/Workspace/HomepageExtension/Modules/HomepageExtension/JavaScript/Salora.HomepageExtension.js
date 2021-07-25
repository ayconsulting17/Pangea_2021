// Entry point for javascript creates a router to handle new routes and adds a view inside the Product Details Page

define(
	'Salora.HomepageExtension'
,   [
		'underscore'
	,	'SC.Configuration'
	,	'Home.View'
	,	'Footer.View'

	,	'Utils'
	]
,   function
	(
		_
	,	Configuration
	,	HomeView

	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			HomeView.prototype.getContext = _.wrap(HomeView.prototype.getContext, function (fn) {
				var context = fn.apply(this, _.toArray(arguments).slice(1));	
				console.log('context1244',context);
				
				context.customBuckets = Configuration.get('home.customBuckets', [])
				context.customSliders = Configuration.get('home.customSliders', [])
				return context;
			});

		}
	};
});
