// @module Salora.CustomWebReviews.CustomWebReviews
define('CustomWebReviews.View'
,	[
	'customwebreviews.tpl'
	
	,	'CustomWebReviews.SS2Model'
	
	,	'Backbone'
    ]
, function (
		customwebreviews_tpl
	
	,	CustomWebReviewsSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class Salora.CustomWebReviews.CustomWebReviews.View @extends Backbone.View
	return Backbone.View.extend({

		template: customwebreviews_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/
			var self = this;
			self.model = new CustomWebReviewsSS2Model();
			self.model.fetch({data : {name:'humza'}}).done(function(result) {
			console.log('result',result);
			self.result = result.message;
			self.render();
		  });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return Salora.CustomWebReviews.CustomWebReviews.View.Context
	,	getContext: function getContext()
		{
			//@class Salora.CustomWebReviews.CustomWebReviews.View.Context
			this.result = this.result || [];
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message,
				result :this.result
			};
		}
	});
});
