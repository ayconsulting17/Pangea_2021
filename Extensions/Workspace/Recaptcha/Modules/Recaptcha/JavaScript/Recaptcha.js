
define(
	'Recaptcha'
,   [
		'Recaptcha.View'
	,	'LoginRegister.Register.View'
	,	'SC.Configuration'
	]
,   function (
		RecaptchaView
	,	LoginRegisterView
	,	Configuration
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');
			
			if(layout)
			{
				layout.addChildView('reCaptcha', function() { 
					return new RecaptchaView({ container: container });
				});

				LoginRegisterView.prototype.getContext = _.wrap(LoginRegisterView.prototype.getContext, function (fn) {
					var context = fn.apply(this, _.toArray(arguments).slice(1));
					context.sitekey = Configuration.get('salora.sitekey').trim()
					return context;
				});
			}

		}
	};
});
