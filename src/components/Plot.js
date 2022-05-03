import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import "./css/Plot.css";

function Plot(props) {
  const [data, setData] = useState("");
  const [loaded, setLoaded] = useState(false);

  const getPlot = async () => {
    const res = await axios.post("http://localhost:4000/makeplot", {
      mean: props.mean,
      std: props.std
    });
    setLoaded(true);
    setData(res.data);
  }

  useEffect(() => {
    setLoaded(false);
    getPlot();
  }, [props.mean, props.std]);

  return(
    <div className="plot">
      {loaded ? <img alt="" src={`data:image/png;base64,${data}`} /> : <p>Plot loading...</p>}
    </div>
  )
}

export default Plot;