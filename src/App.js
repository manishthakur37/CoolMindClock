import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  const date = time.toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="landpg">
      <div className="box">
        <div className="digitalclock">
          <span id="hrs">{hours}</span>
          <span>:</span>
          <span id="min">{minutes}</span>
          <span>:</span>
          <span id="sec">{seconds}</span>
        </div>
        <div className="container">
          <h1 id="dateee">{date}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
