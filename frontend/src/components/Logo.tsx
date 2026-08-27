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

export const LogoMark: React.FC<{ size?: number; className?: string }> = ({ size = 38, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`farex-logo-mark ${className}`}
      style={{ filter: 'drop-shadow(0 3px 10px rgba(12, 44, 85, 0.22))' }}
    >
      <defs>
        {/* Core Navy to Electric Cyan Gradient */}
        <linearGradient id="farexPrimaryGrad" x1="0" y1="100" x2="100" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0C2C55" />
          <stop offset="55%" stopColor="#1C4E80" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>

        {/* Dynamic X-Wing Vector Gradient */}
        <linearGradient id="farexXGrad" x1="15" y1="85" x2="85" y2="15" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0C2C55" />
          <stop offset="40%" stopColor="#06B6D4" />
          <stop offset="85%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>

        {/* Wing Reflection & Accent */}
        <linearGradient id="farexWingLit" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="60%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#0C2C55" />
        </linearGradient>

        {/* Flight Trajectory Glow Filter */}
        <filter id="farexGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Drop shadow for 3D depth */}
        <filter id="farexDepth" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodColor="#0C2C55" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Outer Precision Compass Ring */}
      <circle
        cx="50"
        cy="50"
        r="44"
        stroke="url(#farexPrimaryGrad)"
        strokeWidth="1.6"
        strokeDasharray="4 5"
        strokeOpacity="0.38"
      />
      <circle
        cx="50"
        cy="50"
        r="35"
        stroke="url(#farexPrimaryGrad)"
        strokeWidth="1"
        strokeOpacity="0.16"
      />

      {/* The Iconic 'X' Flight Intersect Trajectory (Background Crosshair Blades) */}
      <path
        d="M 22 22 L 78 78"
        stroke="url(#farexPrimaryGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeOpacity="0.25"
      />
      <path
        d="M 20 78 C 30 78, 42 66, 50 50 C 58 34, 70 22, 84 16"
        stroke="url(#farexXGrad)"
        strokeWidth="3.2"
        strokeLinecap="round"
        filter="url(#farexGlow)"
      />

      {/* Supersonic Jet Climbing Along the Vector (Forming the Center Ascent of FareX) */}
      <g filter="url(#farexDepth)">
        {/* Left Aerodynamic Delta Wing */}
        <path
          d="M 50 14 L 31 66 L 47 57 Z"
          fill="url(#farexPrimaryGrad)"
          opacity="0.95"
        />

        {/* Right Aerodynamic Delta Wing (High-Altitude Cyan) */}
        <path
          d="M 50 14 L 47 57 L 69 66 Z"
          fill="url(#farexWingLit)"
        />

        {/* Center Fuselage Spine (White/Silver Titanium Ridge) */}
        <path
          d="M 50 14 L 48 58 L 50 63 L 52 58 Z"
          fill="#FFFFFF"
          opacity="0.95"
        />

        {/* Jet Afterburner Exhaust Vector */}
        <path
          d="M 46 60 L 50 75 L 54 60 Z"
          fill="url(#farexXGrad)"
          opacity="0.9"
        />

        {/* Supersonic Nose Apex Point */}
        <circle cx="50" cy="14" r="2.8" fill="#38BDF8" />
      </g>

      {/* Index Metric Nodes (Laspeyres Sample Horizons T+1, T+15, T+45) */}
      <circle cx="28" cy="74" r="2.5" fill="#0C2C55" opacity="0.7" />
      <circle cx="50" cy="50" r="3" fill="#06B6D4" />
      <circle cx="76" cy="22" r="3.8" fill="#10B981" />
      <circle cx="76" cy="22" r="7" fill="#10B981" opacity="0.25" />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showSubtitle = false,
  showBadge = true,
  badgeText = 'v2.0',
  className = '',
  iconOnly = false,
  onClick,
}) => {
  const markSizes = {
    sm: 30,
    md: 40,
    lg: 52,
    hero: 68,
  };

  const titleSizes = {
    sm: '1.3rem',
    md: '1.75rem',
    lg: '2.25rem',
    hero: '3.6rem',
  };

  const currentMarkSize = markSizes[size];
  const currentTitleSize = titleSizes[size];

  return (
    <div
      className={`farex-brand-logo farex-logo-${size} ${className}`}
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: size === 'sm' ? 8 : size === 'hero' ? 18 : 12,
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none',
        textDecoration: 'none',
      }}
    >
      {/* Emblem Mark */}
      <div
        className="farex-logo-mark-wrapper"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        <LogoMark size={currentMarkSize} />
      </div>

      {/* Brand Logotype Typography */}
      {!iconOnly && (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9, lineHeight: 1 }}>
            <span
              className="farex-logotype"
              style={{
                fontSize: currentTitleSize,
                fontWeight: 900,
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                letterSpacing: '-0.045em',
                color: 'var(--text)',
                display: 'inline-flex',
                alignItems: 'baseline',
              }}
            >
              <span style={{ color: '#0C2C55', fontWeight: 900 }}>Fare</span>
              <span
                style={{
                  background: 'linear-gradient(135deg, #06B6D4 0%, #0C2C55 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 900,
                  fontStyle: 'italic',
                  marginLeft: '1px',
                  display: 'inline-block',
                  filter: 'drop-shadow(0 1px 2px rgba(6, 182, 212, 0.3))',
                }}
              >
                X
              </span>
            </span>

            {/* Version / Live Status Badge */}
            {showBadge && (
              <span
                className="farex-logo-badge"
                style={{
                  fontSize: size === 'sm' ? '0.62rem' : '0.72rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 700,
                  padding: '2.5px 8px',
                  borderRadius: '6px',
                  background: 'rgba(12, 44, 85, 0.08)',
                  color: '#0C2C55',
                  border: '1px solid rgba(12, 44, 85, 0.18)',
                  letterSpacing: '0.04em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 5,
                  alignSelf: 'center',
                }}
              >
                <span
                  style={{
                    width: 5.5,
                    height: 5.5,
                    borderRadius: '50%',
                    background: '#10B981',
                    boxShadow: '0 0 7px #10B981',
                    display: 'inline-block',
                  }}
                />
                {badgeText}
              </span>
            )}
          </div>

          {/* Subtitle */}
          {showSubtitle && (
            <span
              className="farex-logosub"
              style={{
                fontSize: size === 'hero' ? '0.88rem' : '0.66rem',
                fontWeight: 750,
                fontFamily: "'Inter', sans-serif",
                textTransform: 'uppercase',
                letterSpacing: size === 'hero' ? '0.26em' : '0.16em',
                color: 'var(--sub)',
                marginTop: size === 'hero' ? 6 : 2,
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
