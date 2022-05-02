import { useState } from 'react';

import Plot from './components/Plot.js';
import Inputs from './components/Inputs.js';

function App() {
  const [mean, setMean] = useState((sessionStorage.getItem("mean") ? sessionStorage.getItem("mean") : 0));
  const [std, setStd] = useState((sessionStorage.getItem("std") ? sessionStorage.getItem("std") : 1));

  return (
    <div className="App">
      <Inputs mean={mean} std={std} setMean={setMean} setStd={setStd} />
      <Plot mean={mean} std={std} setMean={setMean} setStd={setStd} />
    </div>
  );
}

export default App;
