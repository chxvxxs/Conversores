'use client';
import { useState } from 'react';
import './page.css';

export default function ConversorTemperatura() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsius = (e) => {
    const val = e.target.value;
    setCelsius(val);
    setFahrenheit(val ? ((parseFloat(val) * 9 / 5) + 32).toFixed(2) : '');
  };

  const handleFahrenheit = (e) => {
    const val = e.target.value;
    setFahrenheit(val);
    setCelsius(val ? (((parseFloat(val) - 32) * 5) / 9).toFixed(2) : '');
  };

  return (
    <div className="conversor-temperatura-container">
      <h1 className="conversor-temperatura-titulo">Conversor de Temperatura</h1>
      <input
        type="number"
        value={celsius}
        onChange={handleCelsius}
        placeholder="Temperatura em °C"
        className="conversor-temperatura-input"
      />
      <input
        type="number"
        value={fahrenheit}
        onChange={handleFahrenheit}
        placeholder="Temperatura em °F"
        className="conversor-temperatura-input"
      />
    </div>
  );
}