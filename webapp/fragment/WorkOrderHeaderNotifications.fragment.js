sap.ui.jsfragment ( "sciener.mobile.inspection.fragment.WorkOrderHeaderNotifications",{ 
	createContent: function (oController ) {
	       
            var oListFeed = new sap.m.StandardListItem({
                title:"{description}"
            });
            var oList = new sap.m.List(this.createId("idWorkOrderHeaderNotificationList"),{
                showSeparators:"Inner"
            });
            
            oList.bindItems({
				path : "items",
				template : oListFeed });
             
            return  oList;
	} 
});