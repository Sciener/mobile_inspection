sap.ui.jsfragment ( "sciener.mobile.inspection.fragment.WorkOrderHeaderDetails",{ 
	createContent: function (oController ) {
        var oGrid =  new sap.ui.layout.Grid(this.createId("idWorkOrderHeaderDetailsGrid"),{
            defaultSpan:"L12 M12 S12",
            width:"auto",
            content:[
                   new sap.ui.layout.form.SimpleForm(this.createId("idWorkOrderHeaderDetailsFormMain"),{
                       title: "Main Data",
                       minWidth:1024,
                       maxContainerCols:2,
                       editable:false,
                       layout:"ResponsiveGridLayout",
                       labelSpanL:3,
                       labelSpanM:3,
                       emptySpanL:1,
                       emptySpanM:0,
                       columnsL:1,
                       columnsM:1,
                       content:[
                            new  sap.m.Label({
                                design:sap.m.LabelDesign.Bold,
                                text: "Order Number"
                            }),
                            new sap.m.Text({
                                text: "{orderId}"
                            }),
                             new  sap.m.Label({
                                design:sap.m.LabelDesign.Bold,
                                text: "Description"
                            }),
                            new sap.m.Text({
                                text: "{description}"
                            })
                           ]
                   }),
                       new sap.ui.layout.form.SimpleForm(this.createId("idWorkOrderHeaderDetailsFormDate"),{
                       title: "Date",
                       minWidth:1024,
                       maxContainerCols:2,
                       editable:false,
                       layout:"ResponsiveGridLayout",
                       labelSpanL:3,
                       labelSpanM:3,
                       emptySpanL:1,
                       emptySpanM:0,
                       columnsL:6,
                       columnsM:6,
                       content:[
                            new  sap.m.Label({
                                design:sap.m.LabelDesign.Bold,
                                text: "Plan Bagin Date"
                            }),
                            new sap.m.Text({
                                text: "{beginPlanTimestamp}"
                            }) ,
                            new  sap.m.Label({
                                design:sap.m.LabelDesign.Bold,
                                text: "Plan FinishDate"
                            }),
                            new sap.m.Text({
                                text: "{finishPalnTimestamp}"
                            })  ,
                            new  sap.m.Label({
                                design:sap.m.LabelDesign.Bold,
                                text: "Fact Bagin Date"
                            }),
                            new sap.m.Text({
                                text: "{eginFactTimestamp}"
                            }) ,
                            new  sap.m.Label({
                                design:sap.m.LabelDesign.Bold,
                                text: "Fact Finish Date"
                            }),
                            new sap.m.Text({
                                text: "{finishFactTimestamp}"
                            })
                           ]
                   }),
                new sap.ui.layout.form.SimpleForm(this.createId("idWorkOrderHeaderDetailsFormOthers"),{
                       title: "Others",
                       minWidth:1024,
                       maxContainerCols:2,
                       editable:false,
                       layout:"ResponsiveGridLayout",
                       labelSpanL:3,
                       labelSpanM:3,
                       emptySpanL:1,
                       emptySpanM:0,
                       columnsL:1,
                       columnsM:1,
                       content:[
                                new  sap.m.Label({
                                design:sap.m.LabelDesign.Bold,
                                text: "Planer"
                            }),
                            new sap.m.Text({
                                text: "{plannerId}"
                               
                            }), 
                            new  sap.m.Label({
                                design:sap.m.LabelDesign.Bold,
                                text: "Executor"
                            }),
                            new sap.m.Text({
                                text: "{plannerId}"
                            }),
                            new  sap.m.Label({
                                design:sap.m.LabelDesign.Bold,
                                text: "Status"
                            }),
                            new sap.m.Text({
                                text: "{statusId}"
                            }) 
                           ]
                   })
                ]
        });
        return oGrid;
	} 
});