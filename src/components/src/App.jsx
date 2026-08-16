import React, { useState, useEffect, useRef, useCallback } from 'react';
import { INITIAL_BUTTONS } from './data/gameData';
import { ButtonList } from './components/ButtonList';

export default function App() {
  const [cashDisplay, setCashDisplay] = useState(0);
  const [buttons, setButtons] = useState(INITIAL_BUTTONS);
  const cashRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let income = 0;
      buttons.forEach((b) => {
        if (b.type === 'INCOME' && b.level > 0) {
          income += b.income * b.level;
        }
      });
      cashRef.current += income;
      setCashDisplay(Math.floor(cashRef.current));
    }, 500);

    return () => clearInterval(interval);
  }, [buttons]);

  const handleManualClick = () => {
    cashRef.current += 1;
    setCashDisplay(Math.floor(cashRef.current));
  };

  const handleBuy = useCallback((item) => {
    if (cashRef.current >= item.cost) {
      cashRef.current -= item.cost;
      setCashDisplay(Math.floor(cashRef.current));

      setButtons((prev) =>
        prev.map((b) => {
          if (b.id === item.id) {
            return {
              ...b,
              level: (b.level || 0) + 1,
              cost: Math.floor(b.cost * 1.15),
            };
          }
          return b;
        })
      );
    }
  }, []);

  return (
    <div style={{ maxWidth: '480px', margin: '0 auto', padding: '16px', fontFamily: 'sans-serif', color: '#fff' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h2 style={{ color: '#facc15' }}>🍋 LEMON TYCOON CORE</h2>
        <h1 style={{ color: '#4ade80', fontSize: '36px', margin: '10px 0' }}>${cashDisplay.toLocaleString()}</h1>
        <button
          onClick={handleManualClick}
          style={{ padding: '12px 24px', backgroundColor: '#facc15', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}
        >
          🍋 Nhặt Chanh (+1$)
        </button>
      </div>
      <ButtonList buttons={buttons} cash={cashDisplay} onBuy={handleBuy} />
    </div>
  );
}
