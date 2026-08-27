import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import ThreeUIButton from './ThreeUIButton';
import GlassmorphismCTA from './GlassmorphismCTA';
import Logo from './Logo';
import { API_BASE_URL } from '../config';

const TABS = [
  { label: '✈ Calculator',       path: '/dashboard'   },
  { label: '📐 Methodology',     path: '/methodology' },
  { label: '🏛 For Analysts',    path: '/analysts'    },
  { label: '🔮 Simulation',      path: '/simulation'  },
  { label: '🛩 Fleet & Carriers',path: '/fleet'       },
];

const API = API_BASE_URL;

const HudNav: React.FC = () => {
  const navigate  = useNavigate();
  const location  = useLocation();
  const [syncing, setSyncing] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleSync = async () => {
    setSyncing(true);
    try {
      const res = await fetch(`${API}/api/sync`, { method: 'POST' });
      if (res.ok) {
        // Optional: you can force a reload or trigger a global state update to refresh Dashboard
        window.location.reload();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setSyncing(false);
    }
  };

  const goTo = (path: string) => {
    setDrawerOpen(false);
    navigate(path);
  };

  React.useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  // Mobile browsers resize the *visible* viewport as their address bar/toolbar
  // shows and hides on scroll — `vh`/`dvh` can lag or miscompute during that
  // transition, leaving the fixed drawer shorter than the actual screen.
  // Track the real visible height in JS instead so it's always correct.
  React.useEffect(() => {
    const setVh = () => {
      const h = window.visualViewport ? window.visualViewport.height : window.innerHeight;
      document.documentElement.style.setProperty('--app-vh', `${h}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', setVh);
    window.visualViewport?.addEventListener('resize', setVh);
    return () => {
      window.removeEventListener('resize', setVh);
      window.removeEventListener('orientationchange', setVh);
      window.visualViewport?.removeEventListener('resize', setVh);
    };
  }, []);

  React.useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  return (
    <nav className="hud-nav">
      {/* Logo */}
      <Logo size="sm" showSubtitle onClick={() => navigate('/dashboard')} className="hud-logo-clickable" />

      {/* Tabs */}
      <div className="hud-nav-tabs">
        {TABS.map(tab => (
          <ThreeUIButton
            key={tab.path}
            active={location.pathname === tab.path}
            onClick={() => navigate(tab.path)}
          >
            {tab.label}
          </ThreeUIButton>
        ))}
      </div>

      {/* Actions */}
      <div className="hud-actions">
        <GlassmorphismCTA
          onClick={handleSync}
          disabled={syncing}
        >
          {syncing ? '↻ Scraping...' : 'Fetch Live Fares'}
        </GlassmorphismCTA>
        <ThreeUIButton onClick={() => navigate('/')}>
          ← Hub
        </ThreeUIButton>
      </div>

      {/* Mobile hamburger trigger */}
      <button
        type="button"
        className={`hud-hamburger ${drawerOpen ? 'is-open' : ''}`}
        aria-label={drawerOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={drawerOpen}
        onClick={() => setDrawerOpen(o => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile drawer overlay + panel — portaled to <body> so they escape
          .hud-nav's `position: sticky` stacking context. WebKit/Safari has a
          long-standing bug where `position: fixed` descendants of a
          `position: sticky` ancestor scroll along with the sticky element
          instead of staying pinned to the viewport; rendering them outside
          that DOM subtree entirely sidesteps it. */}
      {createPortal(
        <>
          <div
            className={`hud-drawer-overlay ${drawerOpen ? 'is-open' : ''}`}
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />
          <div className={`hud-drawer ${drawerOpen ? 'is-open' : ''}`}>
            <div className="hud-drawer-tabs">
              {TABS.map(tab => (
                <button
                  key={tab.path}
                  className={`hud-drawer-tab ${location.pathname === tab.path ? 'active' : ''}`}
                  onClick={() => goTo(tab.path)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="hud-drawer-actions">
              <GlassmorphismCTA onClick={handleSync} disabled={syncing}>
                {syncing ? '↻ Scraping...' : 'Fetch Live Fares'}
              </GlassmorphismCTA>
              <ThreeUIButton onClick={() => goTo('/')}>
                ← Hub
              </ThreeUIButton>
            </div>
          </div>
        </>,
        document.body
      )}
    </nav>
  );
};

export default HudNav;
