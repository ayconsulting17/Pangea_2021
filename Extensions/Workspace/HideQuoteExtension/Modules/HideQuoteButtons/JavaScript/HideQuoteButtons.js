
define(
	'HideQuoteButtons'
,   [
	'ProductDetailToQuote.View'
,	'RequestQuoteAccessPoints.HeaderLink.View'
,	'underscore'
,	'SC.Configuration'
	]
,   function (
	ProductDetailToQuoteView
,	RequestQuoteHeaderLinkView
,	_
,	Configuration
	)
{
	'use strict';

	ProductDetailToQuoteView.prototype.isQuotable = _.wrap(ProductDetailToQuoteView.prototype.isQuotable, function (fn) {
		// If user is not logged in OR user has role that prohibits quotes, hide the quote button

			if (!this.hasOwnProperty('profile_model')) {
				return false;
			}

			return !(this.model.get('item') &&
						(
							this.model.get('item').get('itemtype') === 'GiftCert' ||
							this.model.get('item').get('itemtype') === 'Discount'
						)
					) &&

			this.application.ProductListModule.Utils.isProductListEnabled() &&
			this.profile_model.get('isLoggedIn') === 'T' &&
			this.state.quote_permissions;
		
	}),

	RequestQuoteHeaderLinkView.prototype.getContext = _.wrap(RequestQuoteHeaderLinkView.prototype.getContext, function (fn) {
		 // Hide request a quote sidebar menu link if user doesn't have quote permissions
		var returnVar = fn.apply(this, _.toArray(arguments).slice(1))
		,	showTitle;

		showTitle = Configuration.get('quote.showHyperlink') &&
				SC.ENVIRONMENT.permissions.transactions.tranEstimate >= 2;

		returnVar.showTitle = showTitle;

		return returnVar;
		
	})



	return  {
		mountToApp: function mountToApp (container)
		{

		}
	};
});
