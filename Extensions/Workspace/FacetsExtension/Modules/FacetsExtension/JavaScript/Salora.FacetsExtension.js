
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
	]
,   function (
	_
,	Utils
,	FacetsItemCellView
,	ItemsSearcherItemView	
,	ProductViewsPriceView
, 	FacetsBrowseCategoryHeadingView
,	CategoriesUtils
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
