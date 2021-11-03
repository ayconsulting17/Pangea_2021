// @module Salora.CustomWebReviews.CustomWebReviews
define('CustomWebReviewsItem.View', [
	'customwebreviews_item.tpl'

	, 'CustomWebReviews.SS2Model'

	, 'Backbone'
], function (
	customwebreviews_item_tpl

	, CustomWebReviewsSS2Model

	, Backbone
) {
	'use strict';

	// @class Salora.CustomWebReviews.CustomWebReviews.View @extends Backbone.View
	return Backbone.View.extend({

		template: customwebreviews_item_tpl


			,
		initialize: function (options) {

				/*  Uncomment to test backend communication with an example service
					(you'll need to deploy and activate the extension first)
				*/
				var self = this;
				// var container = options.container;
				console.log("PDP details page is working", options.id)
				// var layout = container.getComponent('Layout');
				this.model = new CustomWebReviewsSS2Model();
				this.promise = this.model.fetch({
					data: {
						id: options.id
					}
				}).done(function (result) {
					console.log('Items Review Result', result);
					self.result = result.message;
				});
				jQuery.when(this.promise).then(function () {
					self.render();
				});
			}

			,
		events: {}

		,
		bindings: {}

		,
		childViews: {

			// 'Manuals.Product': function () {

			// 	return new BackboneCollectionView({
			// 		collection: this.model.get('manuals'),
			// 		childView: ManualsSingleView,
			// 		viewsPerRow: 1
			// 	});
			// }
		}

		//@method getContext @return Salora.CustomWebReviews.CustomWebReviews.View.Context
		,
		getContext: function getContext() {
			//@class Salora.CustomWebReviews.CustomWebReviews.View.Context
			this.result = this.result || [];
			return {
				message: this.message,
				result: this.result
			};
		}
	});
});