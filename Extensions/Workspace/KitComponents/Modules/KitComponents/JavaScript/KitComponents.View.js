// @module AA.KitComponents.KitComponents
define('KitComponents.View'
,	[
		'kitcomponents.tpl'
	,	'KitComponents.SS2Model'
	,	'Backbone'
    ]
, function (
		kitcomponents_tpl
	,	KitComponentsSS2Model
	,	Backbone
)
{
    'use strict';

	// @class AA.KitComponents.KitComponents.View @extends Backbone.View
	return Backbone.View.extend({

		template: kitcomponents_tpl

	,	initialize: function (options) {

		var container = options.container;
		var layout = container.getComponent('Layout');
		var PDP = container.getComponent('PDP');
		var self = this;
		this.result = [];

		layout.on('afterShowContent',function(){
			var iteminfo = PDP.getItemInfo();
			var itemId = iteminfo.item.internalid;
			console.log('itemsInfo',iteminfo.item.internalid);
			
			self.model = new KitComponentsSS2Model();
			self.model.fetch({data : {id :itemId}}).done(function(result) {
			self.result = JSON.parse(result.message);
			self.render();
		  });
		})

		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return AA.KitComponents.KitComponents.View.Context
	,	getContext: function getContext()
		{

				return {
				isDisplay : this.result.length? true :false,
				components : this.result,
			};
		}
	});
});
