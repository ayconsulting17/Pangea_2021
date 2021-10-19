
define(
	'ProductDetailsExtension'
,   [
	'ProductDetails.Full.View'
,	'Manuals.Product.View'
, 	'ProductDetails.Information.View'
,	'StateComplianceWarning.View',

	]
,   function (
	ProductDetailsFullView,
	ManualsProductView,
	ProductInformationView,
	StateComplianceWarningView,
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

	_.extend(ProductInformationView.prototype, {

		childViews: _.extend({}, ProductInformationView.prototype.childViews, {

			'Manuals': function ()
			{
				return new ManualsProductView({
					application: this.application
				,	id: this.model.get('item').get('internalid')
				});
			}
		}) 
	})


	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */

			var layout = container.getComponent('Layout');
            var PDP = container.getComponent('PDP')
			
			if(PDP)
			{

				layout.addChildView('StateComplianceWarning', function () {
					return new 	StateComplianceWarningView();
				});	

	
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

			layout.addChildView('ProductOptions.View', function () {
				return new ProductOptions.View({});
			});


			ProductDetailsFullView.prototype.getContext = _.wrap(ProductDetailsFullView.prototype.getContext, function (fn) {
				var context = fn.apply(this, _.toArray(arguments).slice(1));

				context.showManual =  this.model.get('item').get('custitem_with_manual');
				context.showCompliance = this.model.get('item').get('custitem_show_state_compliance');
				context.showkitComponents = this.model.get('item').get('itemtype') == "Kit"; 
				context.isinstock = this.model.get('item').get('isinstock');
				context.custitem_kit_display_name1 = this.model.get('item').get('custitem_kit_display_name1');
				context.custitem_kit_url_component_1 = this.model.get('item').get('custitem_kit_url_component_1');
				context.itemtype = this.model.get('item').get('itemtype');

				context.condition = this.model.get('item').get('custitem_condition')

				//tooltipconditions
				context.new = this.model.get('item').get('custitem_condition') == "New";
				context.demo = this.model.get('item').get('custitem_condition') == "Demo";
				context.openbox = this.model.get('item').get('custitem_condition') == "Open Box";
				context.factory = this.model.get('item').get('custitem_condition') == "Factory Refreshed";
				context.cosmetically_blemished = this.model.get('item').get('custitem_condition') == "Cosmetically Blemished";
				context.used = this.model.get('item').get('custitem_condition') == "Used";

				context.finish = this.model.get('item').get('custitem_finish');
				context.options = this.model.get('item').get('custitem_options');
				context.length_metric = this.model.get('item').get('custitem_length_metric');
				context.length_us = this.model.get('item').get('custitem_length_us');
				context.amptospeaker = this.model.get('item').get('custitem_amptospeaker');
				context.rackmount = this.model.get('item').get('custitem_rackmount');
				context.storage = this.model.get('item').get('custitem_storage');
				context.cartridge_output = this.model.get('item').get('custitem_cartridgeoutput');

				context.pair_or_single = this.model.get('item').get('custitem_pair_or_single');
				context.interconnect_end = this.model.get('item').get('custitem_interconnect_end');
				context.color = this.model.get('item').get('custitem_color');
				context.height = this.model.get('item').get('custitem_height');
				context.volume = this.model.get('item').get('custitem_volume');
				context.amperage = this.model.get('item').get('custitem_amperage');
				context.voltage = this.model.get('item').get('custitem_voltage');
				context.cartridgetype = this.model.get('item').get('custitem_cartridgetype');

				context.tonearmtype = this.model.get('item').get('custitem_tonearmtype');
				context.drawer_size = this.model.get('item').get('custitem_drawer_size');
				context.treatment = this.model.get('item').get('custitem_treatment');

				context.cable_contact_type = this.model.get('item').get('custitem_cable_contact_type');
				context.boxsize = this.model.get('item').get('custitem_customboxsize');
				context.size = this.model.get('item').get('custitem_size');
				context.width = this.model.get('item').get('custitem_width');
				context.weightcapacity = this.model.get('item').get('custitem_weightcapacity');

				return context;
			});

		}
	};
});
