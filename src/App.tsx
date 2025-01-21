
import { useState } from 'react';
import './App.css';
import Slider from './components/slider';
import { Polygon } from 'react-polygon-ts';

function App() {
  const [sides, setSides] = useState(3);
  return (
    <div className="app-container">
      <h1>React-Polygon-TS Example</h1>
      <div className="polygon-grid">
        {new Array(4).fill(0).map((_, idx) => (
          <Polygon
            key={idx}
            sides={sides}
            size={40} // Incremental size variation
            fill={`hsl(${(idx + 1) * 40}, 70%, 60%)`} // Dynamic color
            stroke={`hsl(${(idx + 1) * 40}, 70%, 20%)`}
            strokeWidth={2}
          />
        ))}
      </div>
      <div className="slider-container">
        <Slider min={3} max={12} onChange={setSides} value={sides} />
        <p>Number of Sides: {sides}</p>
      </div>
    </div>
  );
}

export default App;

