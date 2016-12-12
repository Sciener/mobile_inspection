sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sciener/mobile/inspection/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("sciener.mobile.inspection.Component", {

		metadata: {
			"version": "1.0.0",
			"rootView": {
				viewName: "sciener.mobile.inspection.view.App",
				type: sap.ui.core.mvc.ViewType.JS
			},
			"dependencies": {
				"libs": ["sap.ui.core", "sap.m", "sap.ui.layout"]
			},
			"config": {
				"i18nBundle": "sciener.mobile.inspection.i18n.i18n",
				"icon": "",
				"favIcon": "",
				"phone": "",
				"phone@2": "",
				"tablet": "",
				"tablet@2": "",
				serviceConfig: {
					name: "ZPM_MOBILE_INSPECTION",
					serviceUrl: "/sap/opa/odata/sap/ZPM_MOBILE_INSPECTION/"
				},
				appConfig:{
				    
				}
			},
			routing: {
				config: {
					routerClass: "sap.m.routing.Router",
					viewType: "JS",
					viewPath: "sciener.mobile.inspection.view", 
					controlId: "inspectionApp",
					bypassed: {
						target: ["master", "empty"]
					}
				},
				routes: [
					{
						pattern: "",
						name: "orderList",
						target: [ "empty","master"]
					},
					{
						pattern: "order/{orderId}",
						name: "orderDetais",
						target: ["master", "object"]
					}
				],
				targets: {
					master: {
						viewName: "WorkOrderList",
						viewLevel: 1,
						controlAggregation: "masterPages"
					},
					object: {
						viewName: "WorkOrderDetails",
						viewLevel: 2,
						controlAggregation: "detailPages"
					},
					empty: {
						viewName: "Home",
						viewLevel: 3,
						controlAggregation: "detailPages"
					}
				}
			}
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * In this method, the resource and application models are set.
		 * @public
		 * @override
		 */
		init: function() {
			var mConfig = this.getMetadata().getConfig();

            this.setModel(models.createODataModel(mConfig.serviceConfig.serviceUrl,{}));
			// set the i18n model
			this.setModel(models.createResourceModel(mConfig.i18nBundle), "i18n");
			this.setModel(models.createDeviceModel(), "device");
			this.setModel(models.createJSONModel(mConfig.serviceConfig.appConfig), "appConfig");

			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			this.getRouter().initialize();
		},
		
		destroy: function() {
			this.getModel().destroy();
			this.getModel("i18n").destroy();
			this.getModel("device").destroy();

			UIComponent.prototype.destroy.apply(this, arguments);
		}
	});
});