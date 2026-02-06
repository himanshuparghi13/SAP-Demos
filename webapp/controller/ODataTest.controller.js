sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/m/MessageToast"
], (Controller, ODataModel, MessageToast) => {
    "use strict";

    return Controller.extend("hp.project3.controller.ODataTest", {
        onInit() {
        },

        onTestConnection() {
            var oStatusText = this.byId("connectionStatus");
            var oTable = this.byId("customersTable");
            
            oStatusText.setText("Testing connection...");
            
            var oModel = this.getOwnerComponent().getModel();
            
            if (!oModel) {
                oStatusText.setText("❌ No OData model found in manifest.json");
                return;
            }
            
            oModel.read("/Customers", {
                urlParameters: {
                    "$top": "5"
                },
                success: (data) => {
                    oStatusText.setText("✅ OData service is working! Found " + data.results.length + " customers");
                    this.getView().setModel(oModel);
                    oTable.setVisible(true);
                },
                error: (error) => {
                    oStatusText.setText("❌ OData service failed: " + (error.message || "Connection error"));
                    oTable.setVisible(false);
                }
            });
        }
    });
});