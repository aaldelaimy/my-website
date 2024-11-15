// app.js: Main Application Entry Point
import React from 'react';
import './App.css';
import './intro.css';
import Intro from './intro.js'; // Correct import for the default export

function App() {
    return (
        <div className="App">
            <Intro /> {/* Correct usage of the imported React component */}
        </div>
    );
}

export default App;
