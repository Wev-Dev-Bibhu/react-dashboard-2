import FunnelGraph from "funnel-graph-js/src/js/main";
import React, { useEffect } from "react";

const FunnelGraphUI = () => {
  useEffect(() => {
    const data = {
      labels: ["NEW DEAL", "NEGOTIATION", "ESTIMATION", "CLOSED WON"],
      // subLabels: ["Persona PFAE"],
      colors: [["blue", "pink"]],
      values: [[1294], [954], [615], [248]],
    };

    const graph = new FunnelGraph({
      container: ".Ui-Graph",
      gradientDirection: "horizontal",
      data: data,
      displayPercent: true,
      direction: "Horizontal",
      width: window.screen.width * 0.45,
      height: window.screen.height * 0.2,
      // subLabelValue: "values",
    });

    graph.draw();
  }, []);

  return (
    <div className="Ui-Graph p-2 overflow-x-auto lg:overflow-auto overflow-y-hidden lg:overflow-y-hidden h-[200px] "></div>
  );
};

export default FunnelGraphUI;
