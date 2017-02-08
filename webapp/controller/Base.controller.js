sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sciener.mobile.inspection.controller.Base", {
	    getRouter : function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
	    }
	});

});