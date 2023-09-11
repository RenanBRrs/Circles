// src/App.js
import React, { useState } from 'react';
import './App.css';
import Circle from './components/Circle';

function App() {
  const [circles, setCircles] = useState([]);
  const [UndoCircles, setUndoCircles] = useState([]);

  const handleCanvasClick = (event) => {
    const { clientX, clientY } = event;
    const newCircle = { x: clientX, y: clientY };
    setCircles([...circles, newCircle]);
  };

  const handleUndo = () => {
    const newClick = [...circles];
    const undoP = newClick.pop();
    setCircles(newClick);
    if (!undoP) return;
    setUndoCircles([...UndoCircles, undoP]);
  };

  const handleRedo = () => {
    const newClickR = [...UndoCircles];
    const redoP = newClickR.pop();
    if (!redoP) return;

    setUndoCircles(newClickR);
    setCircles([...circles, redoP]);
  };

  return (
    <>
      <button disabled={circles.length === 0} onClick={handleUndo}>
        Undo
      </button>
      <button disabled={UndoCircles.length === 0} onClick={handleRedo}>
        Redo
      </button>
      <div className='App' onClick={handleCanvasClick}>
        {circles.map((circle, index) => (
          <Circle key={index} x={circle.x} y={circle.y} />
        ))}
      </div>
    </>
  );
}

export default App;
