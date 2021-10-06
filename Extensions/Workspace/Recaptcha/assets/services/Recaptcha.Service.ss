
function service(request, response)
{
	'use strict';
	try 
	{
		require('Recaptcha.ServiceController.js').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Recaptcha.ServiceController.js', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}