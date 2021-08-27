
define('JHM.DealerPriceListPage.DealerPriceListPage'
,   [
		'JHM.DealerPriceListPage.DealerPriceListPage.View'
	,	'JHM.DealersPriceListPage.DealersPriceListPage.Router'
	,	'underscore'
	,	'jhm_dealerpricelistpage_header_menu_myacct.tpl'
	, 	'Header.Menu.MyAccount.View'
	, 	'MyAccountMenu'
	,	'Utils'
	]
,   function
	(
		DealerPriceListPageView
	,	DealerPriceListPageRouter
	,	_
	,	jhm_dealerpricelistpage_header_menu_myacct_tpl
	, 	HeaderMenuMyAccountView
	,	MyAccountMenu
	, 	Utils
	)
{
	'use strict';


		_.extend(HeaderMenuMyAccountView.prototype, {
			template: jhm_dealerpricelistpage_header_menu_myacct_tpl
		})

	return  {
		
		mountToApp: function mountToApp(container)
		{
			var MyAccountMenuInstance = MyAccountMenu.getInstance();
			var environment = container.getComponent('Environment');

			var removeEntryIds = ['productlists', 'product_list_dummy'];
			MyAccountMenuInstance.getEntries().forEach(function (entry, idx) {
				if (removeEntryIds.indexOf(entry.id) !== -1) MyAccountMenuInstance.removeEntry(entry.id);
			})

			MyAccountMenuInstance.addEntry({
					parent: 'orders'
				,	id: 'request-a-quote'
				,	name: _('Request A Quote').translate()
				,	url: 'request-a-quote'
				,	permission: 'transactions.tranFind.1,transactions.tranEstimate.1'
			});
			

			if (SC.ENVIRONMENT.permissions.transactions.tranEstimate >= 2) {
			MyAccountMenuInstance.addEntry({
					id: 'dealer-price-list-page'
				,	name: _('Price Lists').translate()
				,	url: 'dealer-price-lists'
				,	index: 10
			});
			}

			return new DealerPriceListPageRouter(container);
		}
	};
});
