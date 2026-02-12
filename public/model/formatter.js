
sap.ui.define([], function () {
    "use strict";

    return {

        statusText: function (status) {
            return status === "In work" ? "sap-icon://action" : (status === "Approved" ? "sap-icon://accept" : "sap-icon://activity-assigned-to-goal");
        },

        odate: function(odate){
            let a = new Date(odate);
            let b = a.toLocaleDateString();
            return b;
        },

        otime: function(otime){
            let a = new Date(otime);
            let b = a.toLocaleTimeString();
            return b;
        }

    };

});