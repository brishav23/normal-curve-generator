import React, { useState } from "react";
import "./css/Inputs.css";

function Inputs() {
	const [mean, setMean] = useState(0);
	const [std, setStd] = useState(1);

	const updateImage = () => {
		//
	}

	return(
		<form class="inputs_form" onSubmit={updateImage}>
			<table class="input_table">
				<tr class="input_row">
					<td  class="label_cell">
						<label for="mean_input">Input mean: </label>
					</td>
					<td class="input_cell">
						<input type="number" name="mean_input" step="0.1" onChange={(e) => {setMean(e.target.value)}}/>
					</td>
				</tr>
				<tr class="input_table">
					<td class="label_cell">
						<label for="std_input">Input standard deviation: </label>
					</td>
					<td class="input_cell">
						<input type="number" name="std_input" step="0.1" onChange={(e) => {setStd(e.target.value)}} />
					</td>
				</tr>
			</table>
			<br/>
			<button type="submit">Update Plot</button>
		</form>
	)
}

export default Inputs;