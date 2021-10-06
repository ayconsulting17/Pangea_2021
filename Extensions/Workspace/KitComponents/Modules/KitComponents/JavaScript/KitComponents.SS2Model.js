// Model.js
// -----------------------
// @module Case
define("KitComponents.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/KitComponents/SuiteScript2/KitComponents.Service.ss"
            ),
            true
        )
});
});
