sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "hp/project3/VizProperties/vizProperties",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel, vizProperties) {
    "use strict";
    return Controller.extend("hp.project3.controller.Charts", {
      onInit: function () {
        const lineChart = this.byId("lineChart");
        const columnChart = this.byId("columnChart");
        const pieChart = this.byId("pieChart");
        const areaChart = this.byId("areaChart");
        const donutChart = this.byId("donutChart");

        lineChart.setVizProperties(vizProperties.lineChart);
        columnChart.setVizProperties(vizProperties.columnChart);
        pieChart.setVizProperties(vizProperties.pieChart);
        areaChart.setVizProperties(vizProperties.areaChart);
        donutChart.setVizProperties(vizProperties.donutChart);
      },
    });
  },
);
