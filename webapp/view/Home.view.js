sap.ui.jsview("sciener.mobile.inspection.view.Home", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf sciener.mobile.inspection.view.Home
	 */
	getControllerName: function() {
		return "sciener.mobile.inspection.controller.Home";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf sciener.mobile.inspection.view.Home
	 */
	createContent: function(oController) {
		var oPage = new sap.m.Page({
			title: "Home",
			content: [],
			footer: new sap.m.OverflowToolbar({
			    content: [ 
			 //       new sap.m.Button("idStart", {
			 //       type:sap.m.ButtonType.Accept,
			 //       text:"Start",
			 //       icon:"sap-icon://play"
			 //   }),
			 //   new sap.m.Button("idStop", {
			 //       type:sap.m.ButtonType.Emphasized,
			 //       text:"Pause",
			 //       icon:"sap-icon://pause"
			 //   }),
			 //   new sap.m.Button("idFinish", {
			 //       type:sap.m.ButtonType.Reject,
			 //       text:"Finish",
			 //       icon:"sap-icon://stop"
			 //   })
			    ]
			})
		});

		return oPage;
	}

});