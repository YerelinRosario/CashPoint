import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { fetchAllATMs } from './api';
import { mockATMs } from './mockData';
import ATMCard from './components/ATMCard';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import './styles/App.css';

// ⚠️ Cambia a false cuando el rate limit se resetee
const USE_MOCK = true;
const PER_PAGE = 9;

export default function App() {
  const [atms, setAtms]       = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);
  const [search, setSearch]   = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [page, setPage]       = useState(1);

  // Debounce 400ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1); // resetear a página 1 al buscar
    }, 400);
    return () => clearTimeout(timer);
  }, [search]);

  const loadATMs = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      if (USE_MOCK) {
        await new Promise(r => setTimeout(r, 700));
        setAtms(mockATMs);
      } else {
        const list = await fetchAllATMs();
        setAtms(list);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadATMs(); }, [loadATMs]);

  // Filtrado
  const filtered = useMemo(() => {
    if (!debouncedSearch.trim()) return atms;
    const q = debouncedSearch.toLowerCase();
    return atms.filter(atm =>
      (atm.nombre || '').toLowerCase().includes(q) ||
      (atm.Dir_Fis || '').toLowerCase().includes(q)
    );
  }, [atms, debouncedSearch]);

  // Paginación
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated  = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handlePageChange = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <div className="header__inner">
          <div className="header__logo">
            <div className="header__logo-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="5" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="2"/>
                <path d="M2 10h20" stroke="currentColor" strokeWidth="2"/>
                <circle cx="7" cy="15" r="1.5" fill="currentColor"/>
              </svg>
            </div>
            <div className="header__logo-texts">
              <span className="header__logo-name">CashPoint <strong>RD</strong></span>
              <span className="header__logo-sub">Localizador de ATMs</span>
            </div>
          </div>
          <div className="header__right">
            <div className="header__status">
              <span className="header__status-dot" />
              {/* <span>{USE_MOCK ? 'Modo Demo' : 'API Activa'}</span> */}
            </div>
            <span className="header__pill">{USE_MOCK ? 'Demo' : 'Sandbox'}</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="hero">
        <div className="hero__inner">
          <div className="hero__content">
            <p className="hero__eyebrow">Banco Popular Dominicano</p>
            <h1 className="hero__title">Encuentra tu cajero<br /><span>más cercano</span></h1>
            <p className="hero__sub">Localiza todos los ATMs del Banco Popular en la República Dominicana en tiempo real.</p>
          </div>
          {!loading && !error && (
            <div className="hero__stats">
              <div className="hero__stat">
                <strong>{atms.length}</strong>
                <span>ATMs disponibles</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <strong>{filtered.length}</strong>
                <span>Resultados</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main */}
      <main className="main">
        <div className="main__inner">

          {/* Banner demo */}
          {/* {USE_MOCK && (
            <div className="demo-banner">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>Modo demo — datos reales del sandbox. Cambia <code>USE_MOCK = false</code> en App.js para conectar la API en vivo.</span>
            </div>
          )} */}

          {/* Toolbar */}
          <div className="toolbar">
            <SearchBar value={search} onChange={setSearch} />
            {!loading && !error && (
              <span className="toolbar__count">
                <strong>{filtered.length}</strong> cajeros
                {totalPages > 1 && <> · Página <strong>{page}</strong> de <strong>{totalPages}</strong></>}
              </span>
            )}
          </div>

          {/* Loading */}
          {loading && (
            <div className="state-box">
              <div className="spinner" />
              <p className="state-box__msg">Cargando cajeros automáticos...</p>
              <p className="state-box__sub">Conectando con la API del Banco Popular</p>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="state-box state-box--error">
              <div className="state-box__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="state-box__msg">No se pudo cargar la información</p>
              <p className="state-box__sub">{error}</p>
              <button className="btn-retry" onClick={loadATMs}>Reintentar</button>
            </div>
          )}

          {/* Sin resultados */}
          {!loading && !error && filtered.length === 0 && debouncedSearch && (
            <div className="state-box">
              <div className="state-box__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="state-box__msg">Sin resultados para "{debouncedSearch}"</p>
              <p className="state-box__sub">Intenta con otro nombre o dirección</p>
            </div>
          )}

          {/* Grid + Paginación */}
          {!loading && !error && paginated.length > 0 && (
            <>
              <div className="atm-grid">
                {paginated.map((atm, i) => (
                  <ATMCard key={atm.id || i} atm={atm} index={i} />
                ))}
              </div>
              <Pagination
                current={page}
                total={totalPages}
                onChange={handlePageChange}
              />
            </>
          )}

        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__inner">
          <p>Datos provistos por la API oficial del <strong>Banco Popular Dominicano</strong> · Entorno Sandbox</p>
          <p>© 2026 CashPoint RD</p>
        </div>
      </footer>

    </div>
  );
}