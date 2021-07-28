
define(
	'Salora.FacetsExtension'
,   [
	'underscore'
,	'Utils'
,	'Facets.ItemCell.View'
	]
,   function (
	_
,	Utils
,	FacetsItemCellView
	)
{
	'use strict';

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
