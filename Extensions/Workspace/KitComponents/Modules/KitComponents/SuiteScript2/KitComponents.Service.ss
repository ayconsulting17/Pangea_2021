/**
* @NApiVersion 2.x
* @NModuleScope Public
*/
define(['N/https'],function (https) {
    "use strict";
    return {
        service: function (ctx) {
            var ids = ctx.request.parameters.id;
            var sl_response = https.post({
                url :'https://5035704-sb2.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=1820&deploy=1&compid=5035704_SB2&h=372e9320c7835ee19bc8',
                body : JSON.stringify({id : ids})
            }) 
           
            ctx.response.write(JSON.stringify({message: sl_response.body}));
        }
    };
});
