import React from 'react';
import { BUTTON_TYPES } from '../data/gameData';

export const ButtonList = React.memo(({ buttons, cash, onBuy }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {buttons.map((item) => {
        const config = BUTTON_TYPES[item.type] || { color: '#6b7280' };
        const canAfford = cash >= item.cost;
        return (
          <div
            key={item.id}
            style={{
              display: 'flex',
              justify: 'space-between',
              alignItems: 'center',
              padding: '10px 14px',
              backgroundColor: '#1e293b',
              borderLeft: `6px solid ${config.color}`,
              borderRadius: '8px',
              color: '#fff',
            }}
          >
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{item.name}</div>
              <div style={{ fontSize: '11px', color: '#94a3b8' }}>Nút: {config.name} (Lv.{item.level || 0})</div>
            </div>
            <button
              onClick={() => onBuy(item)}
              disabled={!canAfford}
              style={{
                padding: '6px 12px',
                backgroundColor: canAfford ? config.color : '#334155',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: canAfford ? 'pointer' : 'not-allowed',
                fontWeight: 'bold',
              }}
            >
              ${item.cost.toLocaleString()}
            </button>
          </div>
        );
      })}
    </div>
  );
});
