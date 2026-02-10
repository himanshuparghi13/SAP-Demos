sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], (Controller, ODataModel, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("hp.project3.controller.ODataTest", {
        onInit() {
        },

        // onCreateEntry() {
        //     var oModel = this.getOwnerComponent().getModel();
            
        //     oModel.setUseBatch(false);
            
        //     var oNewProduct = {
        //         ProductID: 99999,
        //         ProductName: "New Product",
        //         SupplierID: 1,
        //         CategoryID: 1,
        //         QuantityPerUnit: "10 boxes",
        //         UnitPrice: "25.50",
        //         UnitsInStock: 100,
        //         UnitsOnOrder: 0,
        //         ReorderLevel: 10,
        //         Discontinued: false
        //     };

        //     oModel.create("/Products", oNewProduct, {
        //         success: () => {
        //             MessageToast.show("Product created successfully!");
        //             this.onTestConnection(); // Refresh table
        //         },
        //         error: (oError) => {
        //             var sMessage = oError.responseText || oError.message || "Unknown error";
        //             MessageToast.show("Create failed: " + sMessage);
        //             console.error("Create error:", oError);
        //         }
        //     });
        // },

        onTestConnection() {
            var oStatusText = this.byId("connectionStatus");
            var oTable = this.byId("customersTable");

            oStatusText.setText("Testing connection...");

            var oModel = this.getOwnerComponent().getModel()
                || this.getView().getModel();;


            if (!oModel) {
                oStatusText.setText("❌ No OData model found in manifest.json");
                return;
            }

            oModel.read("/Products", {
                urlParameters: {
                    "$top": "10"
                },
                success: (data) => {
                    oStatusText.setText("✅ OData service is working! Found " + data.results.length + " customers");
                    this.getView().setModel(new JSONModel({Products:data.results}));
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