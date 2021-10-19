
define(
	'Salora.FacetsExtension'
,   [
	'underscore'
,	'Utils'
,	'Facets.ItemCell.View'
,	'ItemsSearcher.Item.View'
,	'ProductViews.Price.View'
, 	'Facets.Browse.CategoryHeading.View'
, 	'Categories.Utils'
,	'SC.Configuration'
	]
,   function (
	_
,	Utils
,	FacetsItemCellView
,	ItemsSearcherItemView	
,	ProductViewsPriceView
, 	FacetsBrowseCategoryHeadingView
,	CategoriesUtils
,	Configuration
	)
{
	'use strict';

	_.extend(ItemsSearcherItemView.prototype, {

		childViews: _.extend({}, ItemsSearcherItemView.prototype.childViews, {

			'ItemPrice': function ()
			{
				return new ProductViewsPriceView({
					model: this.model
				,	origin: 'ITEMCELL'
				});
			}
		}) // End childViews
	}) // End extend module

	return  {
		mountToApp: function mountToApp (container)
		{
			FacetsItemCellView.prototype.getContext = _.wrap(FacetsItemCellView.prototype.getContext, function (fn) {
				var context = fn.apply(this, _.toArray(arguments).slice(1));	
				context.imgsrcurl = Configuration.get('customimagesolution.sourceurl');
				context.featuredimage = this.model.get('custitem_featued_image');
				context.featuredimage = this.model.get('custitem_featued_image');
				context.showfeaturedimage = this.model.get('custitem_featued_image') !== "";
				context.showImage1 = this.model.get('custitem_image_1') !== ""
				context.showdefaultImage = this.model.get('custitem_featued_image') == "" && this.model.get('custitem_image_1') == "";
				context.productType = this.model.get('custitem_jhm_product_type')
				context.description = this.model.get('storedescription')
				return context;
			});

			// FacetsBrowseCategoryHeadingView.prototype.getContext = _.wrap(FacetsBrowseCategoryHeadingView.prototype.getContext, function (fn) {
			// 	var additionalFields = CategoriesUtils.getAdditionalFields(this.model.attributes, 'categories.category.fields')
			// 	,   showDescription = false
			// 	,   modelShowDescription = this.model.get('showDescription');

			// 	if (modelShowDescription && modelShowDescription == true) {
			// 		showDescription = true;
			// 	}

			// 	var context = fn.apply(this, _.toArray(arguments).slice(1));	
			// 	context.showDescription = showDescription
			// 	return context;
			// });

		}
	};
});
