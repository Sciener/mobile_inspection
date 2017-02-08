sap.ui.jsview("sciener.mobile.inspection.view.WorkOrderItemDetails", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf sciener.mobile.inspection.view.Home
	 */
	getControllerName: function() {
		return "sciener.mobile.inspection.controller.WorkOrderItemDetails";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf sciener.mobile.inspection.view.Home
	 */
	createContent: function(oController) {
	    
	    var oTabBar = new sap.m.IconTabBar(this.createId("idOrderDetails_iconTabBar"), {
	        items:[
	                new  sap.m.IconTabFilter(this.createId("idItemDetalis"), {
	                    icon: "sap-icon://detail-view",
	                    text: "{i18n>detail}",
	                    iconColor: sap.ui.core.IconColor.DefaultDefault,
	                    content:[
	                        ]
	                }),
	                new  sap.m.IconTabFilter(this.createId("idItemHistory"), {
	                    icon: "sap-icon://history",
	                    text: "{i18n>History}",
	                    iconColor: sap.ui.core.IconColor.DefaultDefault,
	                    content:[
	                        ]
	                }),
	                new  sap.m.IconTabFilter(this.createId("idItemNote"), {
	                    icon: "sap-icon://notes",
	                    text: "{i18n>notes}",
	                    iconColor: sap.ui.core.IconColor.DefaultDefault,
	                    content:[
	                        ]
	                })
	                ]
	        
	    });
	                
	                
		var oPage = new sap.m.Page({
		    showNavButton:true,
			title: "Item Details",
			//headerContent:[ new sap.m.Button(this.createId("btn"),{icon:"sap-icon://nav-back", press: [oController.onGoHome, oController]})],
			content: [ oTabBar],
			footer: new sap.m.OverflowToolbar({
			    content: [ 
			   new sap.m.ToolbarSpacer(),
			        new sap.m.Button(this.createId("idInspected"), {
			        type:sap.m.ButtonType.Accept,
			        text:"Viewed",
			        icon:"sap-icon://message-success"
			    }),
			    new sap.m.Button(this.createId("idReset"), {
			     type:sap.m.ButtonType.Emphasized,
			        text:"Reset",
			        icon:"sap-icon://sys-cancel"
			    }),
			    new sap.m.Button(this.createId("idDamage"), {
			        type:sap.m.ButtonType.Reject,
			        text:"Damege",
			        icon:"sap-icon://notification"
			    }),
			    new sap.m.ToolbarSpacer()
			    ]
			})
		});

		return oPage;
	}

});