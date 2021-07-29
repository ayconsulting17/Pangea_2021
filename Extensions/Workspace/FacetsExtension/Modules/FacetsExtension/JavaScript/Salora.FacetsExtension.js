
define(
	'Salora.FacetsExtension'
,   [
	'underscore'
,	'Utils'
,	'Facets.ItemCell.View'
,	'ItemsSearcher.Item.View'
,	'ProductViews.Price.View'
	]
,   function (
	_
,	Utils
,	FacetsItemCellView
,	ItemsSearcherItemView	
,	ProductViewsPriceView
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
				console.log('FacetsItemCellView',context)
				context.productType = this.model.get('custitem_jhm_product_type')
				context.description = this.model.get('storedescription')
				return context;
			});

		}
	};
});
