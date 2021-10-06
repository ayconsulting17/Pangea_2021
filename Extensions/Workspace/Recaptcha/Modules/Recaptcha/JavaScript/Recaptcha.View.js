// @module Kodella.KDLGoogleRecaptcha.KDLGoogleRecaptcha
define('Recaptcha.View'
,	[
		'salora_recaptcha_recaptcha.tpl'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	,	'SC.Configuration'
	]
,	function (
		salora_recaptcha_recaptcha_tpl
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	,	Configuration
	)
{
	'use strict';

	// @class Kodella.KDLGoogleRecaptcha.KDLGoogleRecaptcha.View @extends Backbone.View
	return Backbone.View.extend({

		template: salora_recaptcha_recaptcha_tpl

	,	initialize: function (options) {

			
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {
			
		}
	,	validateCaptcha: function(){
		
		
			if(Configuration.get('salora.enableCaptcha')){
				var skey = Configuration.get('salora.secretkey').trim();
				console.log('grecaptcha',grecaptcha);
				
				return JSON.parse(this.fetchResult(skey));
				
			}else{
				
				return {
					success:true,
					message:"captcha not enabled in configuration"
				}
			}
			
		}
	, fetchResult: function(skey){
			var urlreq = Utils.getAbsoluteUrl(getExtensionAssetsPath('services/Recaptcha.Service.ss?sk='+skey+'&response='+grecaptcha.getResponse()));
			return $.getJSON({
				url: urlreq, 
				  async: false
			},function(googleres){
				console.log('googleresext',googleres);
				grecaptcha.reset();
			}).responseText;
		}
		//@method getContext @return Kodella.KDLGoogleRecaptcha.KDLGoogleRecaptcha.View.Context
	,	getContext: function getContext()
		{
			//@class Kodella.KDLGoogleRecaptcha.KDLGoogleRecaptcha.View.Context
			return {
				sitekey:Configuration.get('salora.sitekey').trim(),
				useCaptcha:Configuration.get('salora.enableCaptcha')
			};
		}
	});
});