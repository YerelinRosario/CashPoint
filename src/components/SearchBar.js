import React from 'react';
import '../styles/components/SearchBar.css';

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <svg className="search-bar__icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
        <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      <input
        className="search-bar__input"
        type="text"
        placeholder="Buscar por nombre, dirección o ciudad..."
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      {value && (
        <button className="search-bar__clear" onClick={() => onChange('')} aria-label="Limpiar">
          ✕
        </button>
      )}
    </div>
  );
}