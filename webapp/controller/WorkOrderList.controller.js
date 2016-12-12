sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sciener.mobile.inspection.controller.WorkOrderList", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sciener.mobile.inspection.view.WorkOrderList
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sciener.mobile.inspection.view.WorkOrderList
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sciener.mobile.inspection.view.WorkOrderList
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sciener.mobile.inspection.view.WorkOrderList
		 */
		//	onExit: function() {
		//
		//	}
		getRouter : function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		
		onPressListItem:function(oEvent){
		    var oItem = oEvent.getParameters().listItem;
			var oCtx = oItem.getBindingContext();
			this.getRouter().navTo("orderDetais",{
				orderId : oCtx.getProperty("orderId")
			});
		}

	});

});