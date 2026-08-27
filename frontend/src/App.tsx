import React, { createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Methodology from './pages/MathsStats';
import Analysts from './pages/Analysts';
import Simulation from './pages/Simulation';
import Fleet from './pages/Fleet';
import HudNav from './components/HudNav';

type ThemeMode = 'light';
interface ThemeCtx { theme: ThemeMode; dark: boolean; }
export const ThemeContext = createContext<ThemeCtx>({ theme: 'light', dark: false });
export const useTheme = () => useContext(ThemeContext);

/* ─── Inner layout (with HUD nav) ───────────────────────────────────────── */
const AppInner: React.FC = () => {
  const location = useLocation();
  const showNav = location.pathname !== '/';

  return (
    <div className="app-inner">
      {showNav && <HudNav />}
      <Routes>
        <Route path="/"            element={<Landing />} />
        <Route path="/dashboard"   element={<Dashboard />} />
        <Route path="/methodology" element={<Methodology />} />
        {/* Legacy /weights route still works — redirects to /methodology */}
        <Route path="/weights"     element={<Methodology />} />
        <Route path="/analysts"    element={<Analysts />} />
        <Route path="/simulation"  element={<Simulation />} />
        <Route path="/fleet"       element={<Fleet />} />
      </Routes>
    </div>
  );
};

const App: React.FC = () => {
  React.useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    html.setAttribute('data-theme', 'light');
    html.style.colorScheme = 'light';
    body.style.backgroundColor = '#EDEDCE';
    body.style.color = '#0C2C55';
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: 'light', dark: false }}>
      <Router>
        <AppInner />
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
