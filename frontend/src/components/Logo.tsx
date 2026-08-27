import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showSubtitle?: boolean;
  showBadge?: boolean;
  badgeText?: string;
  className?: string;
  iconOnly?: boolean;
  onClick?: () => void;
}

/**
 * World-Class Precision Aerospace & Financial Index Emblem Mark
 * Designed with mathematical golden-ratio curves, faceted delta wings,
 * and an iconic 'X' trajectory vector.
 */
export const LogoMark: React.FC<{ size?: number; className?: string }> = ({ size = 42, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`farex-logo-mark ${className}`}
      style={{
        filter: 'drop-shadow(0 4px 12px rgba(12, 44, 85, 0.25))',
        flexShrink: 0,
      }}
    >
      <defs>
        {/* Deep Sovereign Navy Base Gradient */}
        <linearGradient id="fxNavyDeep" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#08182B" />
          <stop offset="50%" stopColor="#0C2C55" />
          <stop offset="100%" stopColor="#173D68" />
        </linearGradient>

        {/* Hyper Sonic Electric Cyan Gradient */}
        <linearGradient id="fxCyanElectric" x1="10" y1="110" x2="110" y2="10" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="45%" stopColor="#00D2FF" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>

        {/* Dynamic Trajectory Gradient with Emerald Profit/Index Accent */}
        <linearGradient id="fxTrajectory" x1="15" y1="105" x2="105" y2="15" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0284C7" stopOpacity="0.1" />
          <stop offset="40%" stopColor="#00D2FF" />
          <stop offset="85%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#34D399" />
        </linearGradient>

        {/* Wing Shading 3D Gradient */}
        <linearGradient id="fxWing3D" x1="40" y1="30" x2="90" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="50%" stopColor="#00D2FF" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>

        {/* Gold Apex Flash */}
        <linearGradient id="fxGoldFlash" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>

        {/* Glowing Drop Shadow */}
        <filter id="fxShadowGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#00D2FF" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* ── 1. Aerodynamic Hex-Shield Base with Precision Glass Bevel ── */}
      <rect
        x="6"
        y="6"
        width="108"
        height="108"
        rx="28"
        fill="url(#fxNavyDeep)"
        stroke="#1E4A78"
        strokeWidth="1.5"
      />
      <rect
        x="7"
        y="7"
        width="106"
        height="106"
        rx="27"
        stroke="url(#fxCyanElectric)"
        strokeWidth="1"
        strokeOpacity="0.35"
      />

      {/* ── 2. Subtle Precision Radar / Latitude Coordinate Rings ── */}
      <circle cx="60" cy="60" r="44" stroke="#00D2FF" strokeWidth="1" strokeDasharray="3 5" strokeOpacity="0.22" />
      <circle cx="60" cy="60" r="28" stroke="#00D2FF" strokeWidth="0.8" strokeOpacity="0.15" />

      {/* Cardinal Ticks */}
      <line x1="60" y1="12" x2="60" y2="17" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.7" />
      <line x1="60" y1="103" x2="60" y2="108" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4" />
      <line x1="12" y1="60" x2="17" y2="60" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4" />
      <line x1="103" y1="60" x2="108" y2="60" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.7" />

      {/* ── 3. The Bold 'X' Cross-Vector Coordinate Geometry ── */}
      {/* Downward X-Slash: Representing Lead-Time Horizon Convergence */}
      <path
        d="M 28 28 L 92 92"
        stroke="#1E4A78"
        strokeWidth="4"
        strokeLinecap="round"
        strokeOpacity="0.4"
      />

      {/* Upward X-Slash: Laspeyres Index Exponential Surge Arc */}
      <path
        d="M 22 94 C 36 94, 48 80, 60 60 C 72 40, 86 26, 98 18"
        stroke="url(#fxTrajectory)"
        strokeWidth="4.5"
        strokeLinecap="round"
      />

      {/* ── 4. The Centerpiece: Hypersonic Stealth Delta Jet ── */}
      <g filter="url(#fxShadowGlow)">
        {/* Left Swept Wing (Shadow / Obsidian facet) */}
        <path
          d="M 60 18 L 36 78 L 57 68 Z"
          fill="#08182B"
          stroke="#00D2FF"
          strokeWidth="0.7"
          strokeOpacity="0.4"
        />

        {/* Right Swept Wing (High-Altitude Electric Cyan facet) */}
        <path
          d="M 60 18 L 57 68 L 84 78 Z"
          fill="url(#fxWing3D)"
        />

        {/* Titanium Centerline Spine Highlight */}
        <path
          d="M 60 18 L 58 69 L 60 75 L 62 69 Z"
          fill="#FFFFFF"
          opacity="0.95"
        />

        {/* Jet Afterburner Propulsion Flare */}
        <path
          d="M 55 72 L 60 90 L 65 72 Z"
          fill="url(#fxTrajectory)"
          opacity="0.95"
        />

        {/* Supersonic Nose Apex Sensor Bead */}
        <circle cx="60" cy="18" r="3.2" fill="#FFFFFF" />
        <circle cx="60" cy="18" r="1.5" fill="url(#fxGoldFlash)" />
      </g>

      {/* ── 5. Index Metric Nodes (T+1, T+15, T+45) ── */}
      <circle cx="34" cy="88" r="3" fill="#0284C7" />
      <circle cx="60" cy="60" r="3.5" fill="#00D2FF" />
      <circle cx="90" cy="24" r="4.2" fill="#10B981" />
      <circle cx="90" cy="24" r="8" fill="#10B981" fillOpacity="0.25" />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showSubtitle = false,
  showBadge = false,
  badgeText = '',
  className = '',
  iconOnly = false,
  onClick,
}) => {
  // Proportions tailored for visual impact
  const metrics = {
    sm:   { mark: 36, title: '1.4rem', sub: '0.62rem', gap: 10, badgePad: '2px 7px', badgeFont: '0.62rem' },
    md:   { mark: 46, title: '1.85rem', sub: '0.68rem', gap: 13, badgePad: '3px 9px', badgeFont: '0.72rem' },
    lg:   { mark: 58, title: '2.4rem', sub: '0.76rem', gap: 16, badgePad: '4px 11px', badgeFont: '0.78rem' },
    hero: { mark: 80, title: '4.2rem', sub: '0.92rem', gap: 22, badgePad: '6px 16px', badgeFont: '0.88rem' },
  }[size];

  return (
    <div
      className={`farex-brand-logo farex-logo-${size} ${className}`}
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: metrics.gap,
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none',
        textDecoration: 'none',
      }}
    >
      {/* ── Precision Emblem ── */}
      <div
        className="farex-mark-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        <LogoMark size={metrics.mark} />
      </div>

      {/* ── Master Brand Logotype ── */}
      {!iconOnly && (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, lineHeight: 1 }}>
            {/* Custom High-Tech Wordmark */}
            <span
              className="farex-wordmark"
              style={{
                fontSize: metrics.title,
                fontWeight: 900,
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                letterSpacing: '-0.05em',
                display: 'inline-flex',
                alignItems: 'baseline',
              }}
            >
              <span
                style={{
                  color: '#0C2C55',
                  fontWeight: 900,
                  letterSpacing: '-0.04em',
                }}
              >
                Fare
              </span>
              <span
                className="farex-x-letter"
                style={{
                  color: '#00D2FF',
                  background: 'linear-gradient(135deg, #00D2FF 0%, #0284C7 60%, #0C2C55 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 950,
                  fontStyle: 'italic',
                  marginLeft: '1px',
                  display: 'inline-block',
                  transform: 'skewX(-4deg)',
                  filter: 'drop-shadow(0 2px 8px rgba(0, 210, 255, 0.4))',
                }}
              >
                X
              </span>
            </span>

            {/* Live Status Pill Badge */}
            {showBadge && (
              <span
                className="farex-badge-pill"
                style={{
                  fontSize: metrics.badgeFont,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 700,
                  padding: metrics.badgePad,
                  borderRadius: 20,
                  background: 'rgba(12, 44, 85, 0.07)',
                  color: '#0C2C55',
                  border: '1px solid rgba(12, 44, 85, 0.16)',
                  letterSpacing: '0.05em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  boxShadow: '0 2px 6px rgba(12, 44, 85, 0.04)',
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: '#10B981',
                    boxShadow: '0 0 8px #10B981',
                    display: 'inline-block',
                    animation: 'farexPulse 2s infinite ease-in-out',
                  }}
                />
                {badgeText}
              </span>
            )}
          </div>

          {/* Subtitle Branding */}
          {showSubtitle && (
            <span
              className="farex-subtitle-text"
              style={{
                fontSize: metrics.sub,
                fontWeight: 800,
                fontFamily: "'Inter', sans-serif",
                textTransform: 'uppercase',
                letterSpacing: size === 'hero' ? '0.28em' : '0.18em',
                color: 'var(--sub)',
                marginTop: size === 'hero' ? 8 : 3,
                display: 'block',
              }}
            >
              National Airfare Price Index &amp; Aviation Intelligence
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;
