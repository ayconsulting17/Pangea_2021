// Model.js
// -----------------------
// @module Case
define("CustomWebReviews.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/CustomWebReviews/SuiteScript2/CustomWebReviews.Service.ss"
            ),
            true
        )
});
});
