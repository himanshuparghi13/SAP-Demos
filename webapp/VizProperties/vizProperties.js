sap.ui.define([], function () {
  "use strict";

  return {
    // lineChart: {
    //   title: {
    //     visible: true,
    //     text: "Revenue Trend Analysis",
    //     alignment: "center",
    //     style: {
    //       fontSize: "16px",
    //       fontWeight: "bold",
    //       color: "#333",
    //     },
    //   },
    //   legend: {
    //     visible: true,
    //     title: {
    //       visible: false,
    //     },
    //     label: {
    //       style: {
    //         fontSize: "12px",
    //         color: "#333",
    //       },
    //     },
    //   },
    //   legendGroup: {
    //     layout: {
    //       position: "right",
    //     },
    //   },
    //   plotArea: {
    //     lineSize: 3,
    //     marker: {
    //       visible: true,
    //       size: 6,
    //     },
    //     dataLabel: {
    //       visible: false,
    //       formatString: "0.0",
    //       style: {
    //         fontSize: "11px",
    //         color: "#333",
    //       },
    //     },
    //     colorPalette: ["#5bbae7", "#b6da58", "#f9c463", "#f78a8a", "#d48ce1"],
    //     drawingEffect: "glossy",
    //   },
    //   valueAxis: {
    //     title: {
    //       visible: true,
    //       text: "Revenue",
    //     },
    //   },
    //   categoryAxis: {
    //     title: {
    //       visible: true,
    //       text: "Year",
    //     },
    //     label: {
    //       rotation: "auto",
    //     },
    //   },
    //   tooltip: {
    //     visible: true,
    //     formatString: "0.00",
    //   },
    //   interaction: {
    //     hover: {
    //       opacity: 1,
    //     },
    //     selectability: {
    //       mode: "EXCLUSIVE",
    //     },
    //   },
    //   general: {
    //     background: {
    //       color: "transparent",
    //       visible: true,
    //     },
    //     layout: {
    //       padding: 20,
    //     },
    //   },
    // },
    // areaChart: {
    //   title: {
    //     visible: true,
    //     text: "Website Traffic Trend",
    //     alignment: "center",
    //     style: {
    //       fontSize: "16px",
    //       fontWeight: "bold",
    //       color: "#333",
    //     },
    //   },
    //   legend: {
    //     visible: true,
    //     title: {
    //       visible: false,
    //     },
    //     label: {
    //       style: {
    //         fontSize: "12px",
    //         color: "#333",
    //       },
    //     },
    //   },
    //   legendGroup: {
    //     layout: {
    //       position: "bottom",
    //     },
    //   },
    //   plotArea: {
    //     dataLabel: {
    //       visible: false,
    //       formatString: "0.0",
    //       style: {
    //         fontSize: "11px",
    //         color: "#333",
    //       },
    //     },
    //     transparency: 0.2,
    //     lineSize: 2,
    //     colorPalette: ["#5bbae7", "#b6da58", "#f9c463", "#f78a8a", "#d48ce1"],
    //     marker: {
    //       visible: true,
    //       size: 5,
    //     },
    //     drawingEffect: "glossy",
    //   },
    //   valueAxis: {
    //     title: {
    //       visible: true,
    //       text: "Visits",
    //     },
    //   },
    //   categoryAxis: {
    //     title: {
    //       visible: true,
    //       text: "Year",
    //     },
    //     label: {
    //       rotation: "auto",
    //     },
    //   },
    //   tooltip: {
    //     visible: true,
    //     formatString: "0.00",
    //   },
    //   interaction: {
    //     hover: {
    //       opacity: 1,
    //     },
    //     selectability: {
    //       mode: "EXCLUSIVE",
    //     },
    //   },
    //   general: {
    //     background: {
    //       color: "transparent",
    //       visible: true,
    //     },
    //     layout: {
    //       padding: 20,
    //     },
    //   },
    // },
    // pieChart: {
    //   title: {
    //     visible: true,
    //     text: "Traffic Source Distribution",
    //     alignment: "center",
    //     style: {
    //       fontSize: "16px",
    //       fontWeight: "bold",
    //       color: "#333",
    //     },
    //   },
    //   legend: {
    //     visible: true,
    //     title: {
    //       visible: false,
    //     },
    //     label: {
    //       style: {
    //         fontSize: "12px",
    //         color: "#333",
    //       },
    //     },
    //   },
    //   legendGroup: {
    //     layout: {
    //       position: "bottom",
    //     },
    //   },
    //   plotArea: {
    //     /* Pie size */
    //     radius: 0.8,
    //     /* Data Labels */
    //     dataLabel: {
    //       visible: true,
    //       type: "percentage",
    //       formatString: "0.0%",
    //       hideWhenOverlap: true,
    //       style: {
    //         fontSize: "12px",
    //         color: "#333",
    //       },
    //     },
    //     /* Slice Colors */
    //     colorPalette: ["#5bbae7", "#b6da58", "#f9c463", "#f78a8a", "#d48ce1"],
    //     /* Drawing style */
    //     drawingEffect: "glossy", // normal / glossy
    //   },
    //   tooltip: {
    //     visible: true,
    //     formatString: "0.00",
    //     bodyMeasureValue: {
    //       type: "valueAndPercentage",
    //     },
    //   },
    //   interaction: {
    //     selectability: {
    //       mode: "EXCLUSIVE",
    //     },
    //     hover: {
    //       opacity: 1,
    //     },
    //   },
    //   general: {
    //     background: {
    //       color: "transparent",
    //       visible: true,
    //     },
    //     layout: {
    //       padding: 20,
    //     },
    //   },
    // },
    // scatterChart: {
    //   title: {
    //     text: "ScatterChart",
    //   },
    // },
    // columnChart: {
    //   title: {
    //     visible: true,
    //     text: "Sales Performance",
    //     alignment: "center",
    //     style: {
    //       fontSize: "16px",
    //       fontWeight: "bold",
    //       color: "#333",
    //     },
    //   },
    //   legend: {
    //     visible: true,
    //     title: {
    //       visible: true,
    //     },
    //     label: {
    //       style: {
    //         fontSize: "12px",
    //         color: "#333",
    //       },
    //     },
    //   },
    //   legendGroup: {
    //     layout: {
    //       position: "bottom",
    //     },
    //   },
    //   plotArea: {
    //     dataLabel: {
    //       visible: true,
    //       formatString: "0.0",
    //       style: {
    //         fontSize: "11px",
    //         color: "#333",
    //       },
    //     },
    //     gap: {
    //       inner: 0.3,
    //       outer: 0.1,
    //     },
    //     colorPalette: ["#5bbae7", "#b6da58", "#f9c463", "#f78a8a", "#d48ce1"],
    //     dataPoint: {
    //       stroke: {
    //         visible: true,
    //         color: "#ffffff",
    //       },
    //     },
    //     drawingEffect: "glossy",
    //   },
    //   valueAxis: {
    //     title: {
    //       visible: true,
    //       text: "Revenue",
    //     },
    //   },
    //   categoryAxis: {
    //     title: {
    //       visible: true,
    //       text: "Year",
    //     },
    //     label: {
    //       rotation: "auto",
    //     },
    //   },
    //   tooltip: {
    //     visible: true,
    //     formatString: "0.00",
    //   },
    //   interaction: {
    //     selectability: {
    //       mode: "EXCLUSIVE",
    //     },
    //     hover: {
    //       opacity: 1,
    //     },
    //   },
    //   general: {
    //     background: {
    //       color: "transparent",
    //       visible: true,
    //     },
    //     layout: {
    //       padding: 20,
    //     },
    //   },
    // },
    // donutChart: {
    //   title: {
    //     visible: true,
    //     text: "Sales Distribution",
    //     alignment: "center",
    //     style: {
    //       fontSize: "16px",
    //       fontWeight: "bold",
    //       color: "#333",
    //     },
    //   },
    //   legend: {
    //     visible: true,
    //     title: {
    //       visible: false,
    //     },
    //     label: {
    //       style: {
    //         fontSize: "12px",
    //         color: "#333",
    //       },
    //     },
    //   },
    //   legendGroup: {
    //     layout: {
    //       position: "right",
    //     },
    //   },
    //   plotArea: {
    //     /* Donut thickness */
    //     innerRadiusRatio: 0.6,
    //     /* Radius size */
    //     radius: 0.8,
    //     /* Data Labels */
    //     dataLabel: {
    //       visible: true,
    //       type: "percentage",
    //       formatString: "0.0%",
    //       hideWhenOverlap: true,
    //       style: {
    //         fontSize: "12px",
    //         color: "#333",
    //       },
    //     },
    //     /* Slice Colors */
    //     colorPalette: ["#5bbae7", "#b6da58", "#f9c463", "#f78a8a", "#d48ce1"],
    //     /* Highlight effect */
    //     highlight: {
    //       centerValue: {
    //         visible: true,
    //       },
    //       centerName: {
    //         visible: true,
    //       },
    //     },
    //     /* Drawing style */
    //     drawingEffect: "glossy", // normal / glossy
    //   },
    //   tooltip: {
    //     visible: true,
    //     formatString: "0.00",
    //     bodyMeasureValue: {
    //       type: "valueAndPercentage",
    //     },
    //   },
    //   interaction: {
    //     selectability: {
    //       mode: "EXCLUSIVE", // SINGLE slice selection
    //     },
    //     hover: {
    //       opacity: 1,
    //     },
    //   },
    //   general: {
    //     background: {
    //       color: "transparent",
    //       visible: true,
    //     },
    //     layout: {
    //       padding: 20,
    //     },
    //   },
    // },
  };
});
