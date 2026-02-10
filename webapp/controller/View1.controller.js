sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("hp.project3.controller.View1", {
        onInit() {
            var oModel = new JSONModel("model/systemData.json");
            this.getView().setModel(oModel, "systemData");
        },

        onSave() {
            var oData = this.getView().getModel("systemData").getData();
            this.getOwnerComponent().getModel("globalData").setProperty("/currentEntry", oData);

            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteView2", {}, true);
        },
        onSave2() {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteTable", {}, true);
        },

        onClose() {

        },

        onClear() {
            var oModel = this.getView().getModel("systemData");
            oModel.setData({});
        },

        onTestOData() {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteODataTest", {}, true);
        }
    });
});