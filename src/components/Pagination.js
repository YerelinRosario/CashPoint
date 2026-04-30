import React from 'react';
import '../styles/components/Pagination.css';

export default function Pagination({ current, total, onChange }) {
  if (total <= 1) return null;

  const pages = [];

  if (total <= 5) {
    for (let i = 1; i <= total; i++) pages.push(i);
  } else {
    pages.push(1);
    if (current > 3) pages.push('...');
    for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
      pages.push(i);
    }
    if (current < total - 2) pages.push('...');
    pages.push(total);
  }

  return (
    <div className="pagination">
      <button
        className="pagination__btn pagination__btn--nav"
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Anterior
      </button>

      <div className="pagination__pages">
        {pages.map((page, i) =>
          page === '...' ? (
            <span key={`dots-${i}`} className="pagination__dots">···</span>
          ) : (
            <button
              key={page}
              className={`pagination__btn ${current === page ? 'pagination__btn--active' : ''}`}
              onClick={() => onChange(page)}
            >
              {page}
            </button>
          )
        )}
      </div>

      <button
        className="pagination__btn pagination__btn--nav"
        onClick={() => onChange(current + 1)}
        disabled={current === total}
      >
        Siguiente
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}