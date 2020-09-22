import React from 'react';
import './App.css'; 
import Apicontent from './components/Main.js';
import { unregister } from './serviceWorker';
import json from './schema.json';

function App() {
  unregister();
  return (
    <div className="container p-4">
      <div>
        <h1 className="text-center">
          IndexedDB Data Display
        </h1>
      </div>
      <Apicontent />
    </div>
  );
}

export default App;