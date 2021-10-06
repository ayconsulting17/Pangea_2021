
function service(request, response)
{
	'use strict';
	try 
	{
		require('KitComponents.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('KitComponents.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}