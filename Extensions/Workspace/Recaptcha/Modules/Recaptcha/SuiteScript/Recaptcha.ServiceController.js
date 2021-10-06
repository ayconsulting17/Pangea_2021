
define(
	'Recaptcha.ServiceController'
,	[
		'ServiceController'
	]
,	function(
		ServiceController
	)
	{
		'use strict';

		return ServiceController.extend({

			name: 'Recaptcha.ServiceController'

			// The values in this object are the validation needed for the current service.
		,	options: {
				common: {
				}
			}

		,	get: function get()
			{
				var captchares = request.getParameter("response");
				var captchakey = request.getParameter('sk');
				nlapiLogExecution('DEBUG','captcha',captchares);
				
				var serverValidate = "https://www.google.com/recaptcha/api/siteverify";
				var postBody = {
					secret:captchakey,
					response:captchares
				};
				var headers = {
					Accept: 'application/json',
				};
				var responseObj = nlapiRequestURL(serverValidate,postBody,headers);
				nlapiLogExecution('DEBUG','responseBody',responseObj.getBody());
				return JSON.parse(responseObj.getBody());
			}

		,	post: function post()
			{
				// not implemented
			}

		,	put: function put()
			{
				// not implemented
			}
			
		,	delete: function()
			{
				// not implemented
			}
		});
	}
);