sap.ui.jsview("sciener.mobile.inspection.view.WorkOrderList", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf sciener.mobile.inspection.view.WorkOrderList
	 */
	getControllerName: function() {
		return "sciener.mobile.inspection.controller.WorkOrderList";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf sciener.mobile.inspection.view.WorkOrderList
	 */
	createContent: function(oController) {
	    var oOrderList = new sap.m.List("idOrderList",{
	        selectionChange: [oController.onPressListItem, oController],
	        mode: "{= ${device>/system/phone} ? 'None' : 'SingleSelectMaster'}"
	    });
        oOrderList.bindItems({
            path : "/Orders", 
            template : new sap.m.ObjectListItem("ididOrderList_Item",{
                title: "{description}",
                number:"{itemCount}",
                firstStatus: new sap.m.ObjectStatus({text:"New",state:"Error"}),
                type: "{= ${device>/system/phone} ? 'Active' : 'Inactive'}",
                attributes:[new sap.m.ObjectAttribute({text:"{beginPlanTimestamp}"})],
                press: [oController.onPressListItem, oController]
                })
        });
		var oPage = new sap.m.Page({
			title: "Workorders",
			content: [oOrderList]
		});
		return oPage;
	}

});