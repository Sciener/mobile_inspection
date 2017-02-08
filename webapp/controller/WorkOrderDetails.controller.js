sap.ui.define([
	"sciener/mobile/inspection/controller/Base.controller"
], function(BaseController) {
	"use strict";

	return BaseController.extend("sciener.mobile.inspection.controller.WorkOrderDetails", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sciener.mobile.inspection.view.WorkOrderDetails
		 */
			onInit: function() {
		        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			    oRouter.getRoute("orderDetais").attachPatternMatched(this._onOrderDetaisMatched, this);
			},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sciener.mobile.inspection.view.WorkOrderDetails
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sciener.mobile.inspection.view.WorkOrderDetails
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sciener.mobile.inspection.view.WorkOrderDetails
		 */
		//	onExit: function() {
		//
		//	}
		
		_onOrderDetaisMatched: function(oEvent){
		    var orderId = oEvent.getParameters().arguments.orderId;
		  //  var oList = this.byId(this.createId("idOrderDetail_orderItemList"));
		  //  var oListItemTemplate = this.byId(this.createId("idOrderDetail_orderItemList_item"));
		    
		  //  oList.bindItems({
				// path : "/Orders('" + orderId + "')/items",
				// template : oListItemTemplate,
				// parameters : {expand : "object"}
		  //  });
		    
		     // var oWorkOrderHeaderDetailsFrom = this.byId("idWorkOrderHeaderDetailsFrom");
		      this.getView().bindElement("/Orders('" + orderId + "')");
		},
		
		onGoHome:function(oEvent){
		     var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		     oRouter.navTo("orderList");
		},
		
		onPressListItem: function(oEvent){
		    var oItem = oEvent.getSource();
			var oCtx = oItem.getBindingContext();
			this.getRouter().navTo("orderItemDetais",{
				orderId : oCtx.getProperty("orderId"),
				itemId : oCtx.getProperty("itemId")
				
			});
		}
	});

});