
define(
	'ProductDetailsExtension'
,   [
	'ProductDetails.Full.View'
	// 'Manuals.Product.View',
	// 'StateComplianceWarning.View'

	]
,   function (
	ProductDetailsFullView
	// ManualsProductView,
	// StateComplianceWarningView
	)
{
	'use strict';

	function getCategoryName(catArr)
	{
		var returnString = ''
		,	catObj;

		if(catArr && catArr.length) {

			catObj = catArr[0];

			if(catObj.hasOwnProperty('name') && catObj.name) {
				returnString = catObj.name;
			}
		}

		return returnString;
	}

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			
            var PDP = container.getComponent('PDP')
			
			if(PDP)
			{
				PDP.addToViewContextDefinition(PDP.PDP_FULL_VIEW, 'category', 'string', function(context) {

					var item = context.model.item
					,	catObj = item.commercecategory
					,	primaryPath
					,	categories
					,	catString = '';

					/**
					 * If primary path exists, get item's category from primary path. Otherwise, use first
					 * category that this item is assigned to.
					 */
					if(catObj && !_.isEmpty(catObj)) {

						primaryPath = catObj.primarypath;

						catString = getCategoryName(primaryPath);
						if(!catString) {

							categories = catObj.categories;
							catString = getCategoryName(categories);
						}

					}

					return catString;
				})
			}

			ProductDetailsFullView.prototype.getContext = _.wrap(ProductDetailsFullView.prototype.getContext, function (fn) {
				var context = fn.apply(this, _.toArray(arguments).slice(1));
				console.log('context',context)
				context.showComponents = this.model.get('item').get('isinstock') == false && this.model.get('item').get('itemtype') == "Kit"; 
				context.isinstock = this.model.get('item').get('isinstock');
				context.custitem_kit_display_name1 = this.model.get('item').get('custitem_kit_display_name1');
				context.custitem_kit_url_component_1 = this.model.get('item').get('custitem_kit_url_component_1');
				context.itemtype = this.model.get('item').get('itemtype');
				return context;
			});

		}
	};
});
