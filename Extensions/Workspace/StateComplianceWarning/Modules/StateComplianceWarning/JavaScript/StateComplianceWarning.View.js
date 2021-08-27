define('StateComplianceWarning.View'
,   [
        'Backbone'
    ,   'state_warning_icons_pdp.tpl'
    ,	'SC.Configuration'
    ,   'underscore'
    ,   'Utils'
    ]
,   function
    (
        Backbone
    ,   state_warning_icons_pdp_tpl
    ,	Configuration
    ,   _
    ,   Utils
    )
{
    'use strict';

    return Backbone.View.extend({

        template: state_warning_icons_pdp_tpl

    ,   initialize: function(options)
        {
            // if(options.hasOwnProperty('template') && options.template) {
            //     this.template = options.template;
            // }
        }

    ,   getContext: function()
        {

            return {
               icon: Configuration.get('stateWarnings.californiaIcon')
            ,   message: Configuration.get('stateWarnings.californiaMessage')
            ,   link: Configuration.get('stateWarnings.californiaLink')
            ,   linkText: Configuration.get('stateWarnings.californiaLinkText')
            }
        }
    });
});