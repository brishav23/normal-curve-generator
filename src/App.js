import { useState } from 'react';

import Plot from './components/Plot.js';
import Inputs from './components/Inputs.js';

function App() {
  const [mean, setMean] = useState(0);
  const [std, setStd] = useState(1);

  return (
    <div className="App">
      <Plot mean={mean} std={std} setMean={setMean} setStd={setStd} />
      <Inputs mean={mean} std={std} setMean={setMean} setStd={setStd} />
    </div>
  );
}

export default App;
