
define(
	'Salora.LoginFailureMessage'
,   [
	'LoginRegister.Login.View',
	'SC.Configuration'
	]
,   function (
	LoginRegisterLoginView,
	Configuration
	)
{
	'use strict';

	_.extend(LoginRegisterLoginView.prototype, {

		showError: _.wrap(LoginRegisterLoginView.prototype.showError, function(fn) {

			var message = arguments[1]
			,   customMessage = Configuration.get('checkoutApp.customLoginFailureMessage');

			if (customMessage) {
				message = customMessage;
			}

			fn.call(this, message);
		})
	}) // End extend module
});
