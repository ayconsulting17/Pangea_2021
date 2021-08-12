
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
