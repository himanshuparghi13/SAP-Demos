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

    //     /* Show data values */
    //     dataLabel: {
    //       visible: false,
    //       formatString: "0.0",
    //       style: {
    //         fontSize: "11px",
    //         color: "#333",
    //       },
    //     },

    //     /* Colors */
    //     colorPalette: ["#5bbae7", "#b6da58", "#f9c463", "#f78a8a", "#d48ce1"],

    //     /* Line drawing style */
    //     drawingEffect: "glossy",
    //   },


    //   valueAxis: {
    //     title: {
    //       visible: true,
    //       text: "Revenue",
    //     },

    //     label: {
    //       formatString: "ShortFloat",
    //     },
    //   },

    //   /* ---------------- CATEGORY AXIS (X) ---------------- */
    //   categoryAxis: {
    //     title: {
    //       visible: true,
    //       text: "Year",
    //     },

    //     label: {
    //       rotation: "auto",
    //     },
    //   },

    //   /* ---------------- TOOLTIP ---------------- */
    //   tooltip: {
    //     visible: true,
    //     formatString: "0.00",
    //   },

    //   /* ---------------- INTERACTION ---------------- */
    //   interaction: {
    //     hover: {
    //       opacity: 1,
    //     },

    //     selectability: {
    //       mode: "EXCLUSIVE",
    //     },
    //   },

    //   /* ---------------- GENERAL ---------------- */
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

    areaChart: {
      /* ---------------- TITLE ---------------- */
      title: {
        visible: true,
        text: "Website Traffic Trend",
        alignment: "center",
        style: {
          fontSize: "16px",
          fontWeight: "bold",
          color: "#333",
        },
      },

      /* ---------------- LEGEND ---------------- */
      legend: {
        visible: true,
        title: {
          visible: false,
        },
        label: {
          style: {
            fontSize: "12px",
            color: "#333",
          },
        },
      },

      legendGroup: {
        layout: {
          position: "right", // top / bottom / left / right
        },
      },

      /* ---------------- PLOT AREA ---------------- */
      plotArea: {
        /* Show values on area */
        dataLabel: {
          visible: false,
          formatString: "0.0",
          style: {
            fontSize: "11px",
            color: "#333",
          },
        },

        /* Area transparency */
        transparency: 0.2,

        /* Line thickness */
        lineSize: 2,

        /* Colors */
        colorPalette: ["#5bbae7", "#b6da58", "#f9c463", "#f78a8a", "#d48ce1"],

        /* Marker (points on line) */
        marker: {
          visible: true,
          size: 5,
        },

        /* Drawing style */
        drawingEffect: "glossy",
      },

      /* ---------------- VALUE AXIS (Y) ---------------- */
      valueAxis: {
        title: {
          visible: true,
          text: "Visits",
        },

        label: {
          formatString: "ShortFloat",
        },
      },

      /* ---------------- CATEGORY AXIS (X) ---------------- */
      categoryAxis: {
        title: {
          visible: true,
          text: "Year",
        },

        label: {
          rotation: "auto",
        },
      },

      /* ---------------- TOOLTIP ---------------- */
      tooltip: {
        visible: true,
        formatString: "0.00",
      },

      /* ---------------- INTERACTION ---------------- */
      interaction: {
        hover: {
          opacity: 1,
        },

        selectability: {
          mode: "EXCLUSIVE",
        },
      },

      /* ---------------- GENERAL ---------------- */
      general: {
        background: {
          color: "transparent",
          visible: true,
        },

        layout: {
          padding: 20,
        },
      },
    },

    pieChart: {
      /* ---------------- TITLE ---------------- */
      title: {
        visible: true,
        text: "Traffic Source Distribution",
        alignment: "center",
        style: {
          fontSize: "16px",
          fontWeight: "bold",
          color: "#333",
        },
      },

      /* ---------------- LEGEND ---------------- */
      legend: {
        visible: true,
        title: {
          visible: false,
        },
        label: {
          style: {
            fontSize: "12px",
            color: "#333",
          },
        },
      },

      legendGroup: {
        layout: {
          position: "right", // top / bottom / left / right
        },
      },

      /* ---------------- PLOT AREA ---------------- */
      plotArea: {
        /* Pie size */
        radius: 0.8,

        /* Data Labels */
        dataLabel: {
          visible: true,
          type: "percentage", // value / percentage / color / colorAndPercentage
          formatString: "0.0%",
          hideWhenOverlap: true,
          style: {
            fontSize: "12px",
            color: "#333",
          },
        },

        /* Slice Colors */
        colorPalette: ["#5bbae7", "#b6da58", "#f9c463", "#f78a8a", "#d48ce1"],

        /* Drawing style */
        drawingEffect: "glossy", // normal / glossy
      },

      /* ---------------- TOOLTIP ---------------- */
      tooltip: {
        visible: true,
        formatString: "0.00",
        bodyMeasureValue: {
          type: "valueAndPercentage",
        },
      },

      /* ---------------- INTERACTION ---------------- */
      interaction: {
        selectability: {
          mode: "EXCLUSIVE", // select one slice
        },

        hover: {
          opacity: 1,
        },
      },

      /* ---------------- GENERAL ---------------- */
      general: {
        background: {
          color: "transparent",
          visible: true,
        },

        layout: {
          padding: 20,
        },
      },
    },

    scatterChart: {
      title: {
        text: "ScatterChart",
      },
    },

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

    // //   legend: {
    // //     visible: true,
    // //     title: {
    // //       visible: true,
    // //     },
    // //     label: {
    // //       style: {
    // //         fontSize: "12px",
    // //         color: "#333",
    // //       },
    // //     },
    // //   },

    // //   legendGroup: {
    // //     layout: {
    // //       position: "bottom", 
    // //     },
    // //   },

   
    //   plotArea: {
    //     dataLabel: {
    //       visible: true,
    //       formatString: "0.0",
    //       style: {
    //         fontSize: "11px",
    //         color: "#333",
    //       },
    //     },

    //     /* Column width (spacing control) */
    //     gap: {
    //       inner: 0.3, // space between bars
    //       outer: 0.1,
    //     },

    //     /* Colors */
    //     colorPalette: ["#5bbae7", "#b6da58", "#f9c463", "#f78a8a", "#d48ce1"],

    //     /* Column border */
    //     dataPoint: {
    //       stroke: {
    //         visible: true,
    //         color: "#ffffff",
    //       },
    //     },

    //     /* Drawing style */
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
    donutChart: {
      /* ---------------- TITLE ---------------- */
      title: {
        visible: true,
        text: "Sales Distribution",
        alignment: "center",
        style: {
          fontSize: "16px",
          fontWeight: "bold",
          color: "#333",
        },
      },

      /* ---------------- LEGEND ---------------- */
      legend: {
        visible: true,
        title: {
          visible: false,
        },
        label: {
          style: {
            fontSize: "12px",
            color: "#333",
          },
        },
      },

      legendGroup: {
        layout: {
          position: "right", // top / bottom / left / right
        },
      },

      /* ---------------- PLOT AREA ---------------- */
      plotArea: {
        /* Donut thickness */
        innerRadiusRatio: 0.6,

        /* Radius size */
        radius: 0.8,

        /* Data Labels */
        dataLabel: {
          visible: true,
          type: "percentage", // value / percentage / colorAndPercentage
          formatString: "0.0%",
          hideWhenOverlap: true,
          style: {
            fontSize: "12px",
            color: "#333",
          },
        },

        /* Slice Colors */
        colorPalette: ["#5bbae7", "#b6da58", "#f9c463", "#f78a8a", "#d48ce1"],

        /* Highlight effect */
        highlight: {
          centerValue: {
            visible: true,
          },
          centerName: {
            visible: true,
          },
        },

        /* Drawing style */
        drawingEffect: "glossy", // normal / glossy
      },

      /* ---------------- TOOLTIP ---------------- */
      tooltip: {
        visible: true,
        formatString: "0.00",
        bodyMeasureValue: {
          type: "valueAndPercentage",
        },
      },

      /* ---------------- INTERACTION ---------------- */
      interaction: {
        selectability: {
          mode: "EXCLUSIVE", // SINGLE slice selection
        },

        hover: {
          opacity: 1,
        },
      },

      /* ---------------- GENERAL ---------------- */
      general: {
        background: {
          color: "transparent",
          visible: true,
        },

        layout: {
          padding: 20,
        },
      },
    },
  };
});
