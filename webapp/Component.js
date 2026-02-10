sap.ui.define([
    "sap/ui/core/UIComponent",
    "hp/project3/model/models",
    "sap/ui/model/json/JSONModel"
], (UIComponent, models, JSONModel) => {
    "use strict";

    return UIComponent.extend("hp.project3.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // set global data model
            var oGlobalModel = new JSONModel({ entries: [] });
            this.setModel(oGlobalModel, "globalData");

            //   var oProductsModel = new JSONModel();
            // oProductsModel.loadData("model/Products.json");
            // this.setModel(oProductsModel, "Products");

            // enable routing
            this.getRouter().initialize();
        }
    });
});