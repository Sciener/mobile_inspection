sap.ui.jsfragment ( "sciener.mobile.inspection.fragment.WorkOrderHeaderItems",{ 
	createContent: function (oController ) {
	       
	    var oOrderItemListTemplate = new sap.m.StandardListItem({
	        title: "{objectId} - {object/description}",
	        info: "{statusId}",
	        infoState:sap.ui.core.ValueState.Success,
	        type: "Navigation"
	    });
	    var oOrderItemList =   new sap.m.List(this.createId("idWorkOrderHeaderItemsList"),{});
	    
        oOrderItemList.bindItems({
    				path : "items",
    				template : oOrderItemListTemplate,
    				parameters : {expand : "object"}});
             
        return  oOrderItemList;
	} 
});