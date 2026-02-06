sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], (Controller, History) => {
    "use strict";

    return Controller.extend("hp.project3.controller.View3", {
        onInit() {
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
        },

        onJsonPrint() {
            var oGlobalModel = this.getOwnerComponent().getModel("globalData");
            var aEntries = oGlobalModel.getProperty("/entries") || [];
            console.log(aEntries);



            var oModel = this.getView().getModel("globalData").getProperty(
"/entries");


            var sJSON = JSON.stringify(oModel, null, 2); 

            var oBlob = new Blob([sJSON], {
                type: "application/json"
            });

            var sURL = URL.createObjectURL(oBlob);

            var oLink = document.createElement("a");
            oLink.href = sURL;
            oLink.download = "FormData.json";   // File name

            oLink.click();

            URL.revokeObjectURL(sURL);


        },

        onClear() {
            var oGlobalModel = this.getOwnerComponent().getModel("globalData");
            oGlobalModel.setProperty("/entries", []);
        },

        onClearNavBack() {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteView1", {}, true);
        }

    });
});