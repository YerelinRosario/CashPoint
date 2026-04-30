import React from 'react';
import '../styles/components/ATMCard.css';

export default function ATMCard({ atm, index }) {
  return (
    <div className="atm-card" style={{ animationDelay: `${index * 0.04}s` }}>
      <div className="atm-card__icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="5" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 10h20" stroke="currentColor" strokeWidth="2"/>
          <circle cx="7" cy="15" r="1.5" fill="currentColor"/>
          <rect x="11" y="13.5" width="6" height="3" rx="1" fill="currentColor" opacity="0.5"/>
        </svg>
      </div>

      <div className="atm-card__body">
        <h3 className="atm-card__name">{atm.nombre}</h3>

        {atm.Dir_Fis && (
          <p className="atm-card__address">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2"/>
            </svg>
            {atm.Dir_Fis}
          </p>
        )}

        {atm.horario && atm.horario !== 'null' && (
          <p className="atm-card__horario">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            {atm.horario}
          </p>
        )}
      </div>

      <span className="atm-card__badge">ATM</span>
    </div>
  );
}