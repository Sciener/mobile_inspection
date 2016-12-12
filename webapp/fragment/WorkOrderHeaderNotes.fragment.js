sap.ui.jsfragment ( "sciener.mobile.inspection.fragment.WorkOrderHeaderNotes",{ 
	createContent: function (oController ) {
	       
            var oFeedList =  new sap.m.FeedInput(this.createId("idWorkOrderHeaderNoteAdd"),{
                post:"onPost",
                icon:""
            });
            var oListFeed = new sap.m.FeedListItem({
                sender: "{Text}",
                text:"{description}",
                timestamp:"{Date}"
            });
            var oList = new sap.m.List(this.createId("idWorkOrderHeaderNoteList"),{
                showSeparators:"Inner"
            });
            
            oList.bindItems({
				path : "items",
				template : oListFeed });
				
		    return [ oFeedList, oList];
	} 
});