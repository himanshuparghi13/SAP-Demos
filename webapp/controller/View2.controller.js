sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], (Controller,History) => {
    "use strict";

    return Controller.extend("hp.project3.controller.View2", {
        onInit() {
        },

        onSave() {
            var oGlobalModel = this.getOwnerComponent().getModel("globalData");
            var oCurrentEntry = oGlobalModel.getProperty("/currentEntry");
            var aEntries = oGlobalModel.getProperty("/entries") || [];
            

            aEntries.push(JSON.parse(JSON.stringify(oCurrentEntry)));
            oGlobalModel.setProperty("/entries", aEntries);

            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteView3", {}, true);
        },

        onClos() {
        },

        onClear() {
        },

        onNavBack() {
            const oHistory = History.getInstance();
            const sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView1", {}, true);
            }
        }

        
    });
});