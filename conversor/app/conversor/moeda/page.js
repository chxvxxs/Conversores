'use client';
import { useState } from 'react';
import './page.css'

export default function ConversorMoeda() {
  const cotacao = 6.16; // cotação do dia 14/04/2025
  const [real, setReal] = useState('');
  const [dolar, setDolar] = useState('');

  const handleRealChange = (e) => {
    const valor = e.target.value;
    setReal(valor);
    setDolar(valor ? (parseFloat(valor) / cotacao).toFixed(2) : '');
  };

  const handleDolarChange = (e) => {
    const valor = e.target.value;
    setDolar(valor);
    setReal(valor ? (parseFloat(valor) * cotacao).toFixed(2) : '');
  };

  return (
    <div className="conversor-container">
      <h1 className="conversor-title">Conversor de Moeda</h1>
      <p className="conversor-cotacao">Cotação fixa de 1 USD = R$ {cotacao}</p>
      <input
        type="number"
        value={dolar}
        onChange={handleDolarChange}
        placeholder="Valor em Real (BRL)"
        className="conversor-input"
      />
      <input
        type="number"
        value={real}
        onChange={handleRealChange}
        placeholder="Valor em Dólar (USD)"
        className="conversor-input"
      />

    </div>
  );
}