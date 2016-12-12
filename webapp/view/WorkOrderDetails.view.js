sap.ui.jsview("sciener.mobile.inspection.view.WorkOrderDetails", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf sciener.mobile.inspection.view.WorkOrderDetails
	 */
	getControllerName: function() {
		return "sciener.mobile.inspection.controller.WorkOrderDetails";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf sciener.mobile.inspection.view.WorkOrderDetails
	 */
	createContent: function(oController) {
	
	    var oTabBar = new sap.m.IconTabBar("idOrderDetails_iconTabBar", {
	        items:[
	                new  sap.m.IconTabFilter("idOrderDetails_iconTabBar_det", {
	                    icon: "sap-icon://detail-view",
	                    text: "{i18n>detail}",
	                    iconColor: sap.ui.core.IconColor.DefaultDefault,
	                    content:[
	                           sap.ui.jsfragment( "sciener.mobile.inspection.fragment.WorkOrderHeaderDetails" , oController )
	                        ]
	                }),
	                new  sap.m.IconTabFilter("idOrderDetails_iconTabBar_items", {
	                    icon: "sap-icon://list",
	                    text: "{i18n>items}",
	                    iconColor: sap.ui.core.IconColor.Positive,
	                    content:[
	                            sap.ui.jsfragment( "sciener.mobile.inspection.fragment.WorkOrderHeaderItems" , oController )
	                        ]
	                }),
	                 new  sap.m.IconTabFilter("idOrderDetails_iconTabBar_notif", {
	                    icon: "sap-icon://notification",
	                    text: "{i18n>notification}",
	                    iconColor: sap.ui.core.IconColor.Negative,
	                    content:[
	                         sap.ui.jsfragment( "sciener.mobile.inspection.fragment.WorkOrderHeaderNotifications" , oController )
	                        ]
	                }),
	                new  sap.m.IconTabFilter("idOrderDetails_iconTabBar_notes", {
	                    icon: "sap-icon://notes",
	                    text: "{i18n>notes}",
	                    content: [ 
	                            sap.ui.jsfragment( "sciener.mobile.inspection.fragment.WorkOrderHeaderNotes" , oController )
	                        ]
	               
	                })
	            ]
	    });
		var oPage = new sap.m.Page({
		    showNavButton:"{device>/system/phone}",
			title: "{i18n>orderDetails}",
			headerContent:[ new sap.m.Button("btn",{icon:"sap-icon://home", press: [oController.onGoHome, oController]})],
			content: [oTabBar]
		});

		return oPage;
	}

});