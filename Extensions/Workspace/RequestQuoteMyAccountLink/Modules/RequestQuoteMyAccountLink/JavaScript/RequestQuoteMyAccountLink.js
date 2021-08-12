
define(
	'RequestQuoteMyAccountLink'
,   [
		'underscore'
	]
,   function (
		_
	)
{
	'use strict';

	return  {

		MenuItems: {
            parent: 'orders'
		,	id: 'request-a-quote'
		,	name: _('Request A Quote').translate()
		,	url: 'request-a-quote'
		,	index: 6
		,	permission: 'transactions.tranFind.1,transactions.tranEstimate.1'
        }  

		
		, mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');
			
			if(layout)
			{
				// layout.addChildView('Header.Logo', function() { 
				// 	return new RequestQuoteMyAccountLinkView({ container: container });
				// });
			}

		}
	};
});
