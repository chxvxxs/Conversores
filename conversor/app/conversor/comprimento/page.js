'use client';
import { useState } from 'react';
import './page.css'

export default function ConversorComprimento() {
  const [metro, setMetro] = useState('');
  const [pes, setPes] = useState('');
  const [polegada, setPolegada] = useState('');

  const handleMetroChange = (e) => {
    const val = e.target.value;
    setMetro(val);
    const m = parseFloat(val);
    setPes(val ? (m * 3.28084).toFixed(2) : '');
    setPolegada(val ? (m * 39.3701).toFixed(2) : '');
  };

  const handlePesChange = (e) => {
    const val = e.target.value;
    setPes(val);
    const p = parseFloat(val);
    setMetro(val ? (p / 3.28084).toFixed(2) : '');
    setPolegada(val ? (p * 12).toFixed(2) : '');
  };

  const handlePolegadaChange = (e) => {
    const val = e.target.value;
    setPolegada(val);
    const p = parseFloat(val);
    setMetro(val ? (p / 39.3701).toFixed(2) : '');
    setPes(val ? (p / 12).toFixed(2) : '');
  };

  return (
    <div className="conversor-container">
      <h1 className="conversor-title">Conversor de Comprimento</h1>
      <input
        type="number"
        value={metro}
        onChange={handleMetroChange}
        placeholder="Metros"
        className="conversor-input"
      />
      <input
        type="number"
        value={pes}
        onChange={handlePesChange}
        placeholder="Pés"
        className="conversor-input"
      />
      <input
        type="number"
        value={polegada}
        onChange={handlePolegadaChange}
        placeholder="Polegadas"
        className="conversor-input"
      />
    </div>
  );
}