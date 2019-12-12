import React from 'react';
import { Route } from 'react-router-dom';

import { WebRTC } from "./pages"
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/about" component={WebRTC}/>
    </div>
  );
}

export default App;
