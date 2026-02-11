sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel, MessageToast, Filter, FilterOperator) {
    "use strict";
    return Controller.extend("hp.project3.controller.Charts", {
      onInit: function () {},
      addP: function () {

        let VizFrame2 = this.byId("piechart");
        const props = {
          title: {
            text: "hello akshit",
          },
          legend: {
            isScrollable: true
          },
          general:{
            background:{
                border:{
                    stroke:"#6c6c6c"
                }
            }
          }
        };

        let VizFrame = this.byId("lineChart");
        const props2= {
            title:{
                text:"himanshu"
            },
          valueAxis:{
            color:"#d1dc0aff"
          },
          categoryAxis:{
            color:"#d1dc0aff"
          }
        };

        VizFrame2.setVizProperties(props);
        VizFrame.setVizProperties(props2);
      },
    });
  },
);
