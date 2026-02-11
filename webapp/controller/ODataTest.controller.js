sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller, ODataModel, MessageToast, JSONModel,Filter,FilterOperator) => {
    "use strict";

    return Controller.extend("hp.project3.controller.ODataTest", {
      

        onInit() {
            MessageToast.show("Products Loaded Successfully");
        },

        onFilter(oEvent) {
            var sValue = oEvent.getParameter("newValue");
            var oTable = this.byId("productsTable");
            var oBinding = oTable.getBinding("items");

            if (!sValue) {
                oBinding.filter([]);
                return;
            }

            var oFilter = new Filter(
                "ProductName",
                FilterOperator.Contains,
                sValue
            );

            oBinding.filter([oFilter]);
        },

        
        onSave() {
            MessageToast.show("Save Triggered");
        }

        
    });
});