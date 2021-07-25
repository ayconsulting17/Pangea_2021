
define(
	'Salora.FooterExtension'
,   [
	'Footer.View'
,	'SC.Configuration'
,	'Profile.Model'
,   'Utils'
,	'underscore'
	]
,   function (
	FooterView
,	Configuration
,	ProfileModel
,   Utils
,	_
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			FooterView.prototype.getContext = _.wrap(FooterView.prototype.getContext, function (fn) {

				var context = fn.apply(this, _.toArray(arguments).slice(1));	
				var profile = ProfileModel.getInstance()
				,	isLoading = !_.getPathFromObject(Configuration, 'performance.waitForUserProfile', true) && ProfileModel.getPromise().state() !== 'resolved'
				,	isLoggedIn = (profile.get('isLoggedIn') === 'T' || profile.get('isRecognized') === 'T') && profile.get('isGuest') === 'F'
				,	returnVariable = fn.apply(this, _.toArray(arguments).slice(1))
				,	showLogin = true;

				if(!isLoading && isLoggedIn) {
					showLogin = false;
				}

				context.phone = Configuration.get('footer.phone', '')
				context.fax = Configuration.get('footer.fax', '')
				context.email = Configuration.get('footer.email', '')
				context.address1 = Configuration.get('footer.address1', '')
				context.address2 = Configuration.get('footer.address2', '')
				context.showLogin = showLogin
				context.company = Configuration.get('footer.company', '')
				return context;
			});

		}
	};
});
