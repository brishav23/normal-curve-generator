import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  getData();
  return (
    <div className="App">
      <img src={`http://localhost:4000`} />
    </div>
  );
}

export default App;
