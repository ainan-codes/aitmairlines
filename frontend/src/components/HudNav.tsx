import React, { useState } from 'react';
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

  return (
    <nav className="hud-nav">
      {/* Logo */}
      <Logo size="sm" onClick={() => navigate('/dashboard')} className="hud-logo-clickable" />

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
    </nav>
  );
};

export default HudNav;
