import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import "./css/Plot.css";

function Plot(props) {
  const [data, setData] = useState("");

  const getPlot = async () => {
    const res = await axios.post("http://localhost:4000/makeplot", {
      mean: props.mean,
      std: props.std
    });
    setData(res.data);
  }

  useEffect(() => {
    getPlot();
  }, [props.mean, props.std]);

  return(
    <div className="plot">
      <img alt="" src={`data:image/png;base64,${data}`} />
    </div>
  )
}

export default Plot;