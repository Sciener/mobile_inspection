sap.ui.jsview("sciener.mobile.inspection.view.NotFound", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf sciener.mobile.inspection.view.NotFound
	 */
	getControllerName: function() {
		return "sciener.mobile.inspection.controller.NotFound";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf sciener.mobile.inspection.view.NotFound
	 */
	createContent: function(oController) {
		var oPage = new sap.m.Page({
			title: "Title",
			content: []
		});

		var app = new sap.m.App("myApp", {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});