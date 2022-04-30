import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const getData = async () => {
    const resp = await axios.get("http://localhost:4000");
    console.log(resp.data);
    setImg(resp.data);
  }

  const [img, setImg] = useState("");

  getData();
  return (
    <div className="App">
      <img alt="" src={`data:image/png;base64,${img}`} />
    </div>
  );
}

export default App;
