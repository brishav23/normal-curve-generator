import React, { useState } from "react";
// import axios from "axios";

import "./css/Inputs.css";

function Inputs(props) {
  const [mean, setMean] = useState(props.mean);
  const [std, setStd] = useState(props.std);

  const updateImage = (e) => {
    e.preventDefault();
    sessionStorage.setItem("mean", mean);
    sessionStorage.setItem("std", std);
    props.setMean(mean);
    props.setStd(std);
  }

  return(
    <form className="inputs_form" onSubmit={updateImage}>
      <table className="input_table">
        <tbody>
          <tr className="input_row">
            <td  className="label_cell">
              <label htmlFor="mean_input">Input mean: </label>
            </td>
            <td className="input_cell">
              <input type="number" name="mean_input" step="0.1" defaultValue={mean} onChange={(e) => {setMean(e.target.value)}}/>
            </td>
          </tr>
          <tr className="input_table">
            <td className="label_cell">
              <label htmlFor="std_input">Input standard deviation: </label>
            </td>
            <td className="input_cell">
              <input type="number" name="std_input" step="0.1" defaultValue={std} onChange={(e) => {setStd(e.target.value)}} />
            </td>
          </tr>
        </tbody>
      </table>
      <br/>
      <button type="submit">Update Plot</button>
    </form>
  )
}

export default Inputs;