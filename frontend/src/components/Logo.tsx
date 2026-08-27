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

export const LogoMark: React.FC<{ size?: number; className?: string }> = ({ size = 36, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`apix-logo-mark ${className}`}
      style={{ filter: 'drop-shadow(0 2px 8px rgba(12, 44, 85, 0.18))' }}
    >
      <defs>
        {/* Main navy-to-cyan aviation gradient */}
        <linearGradient id="apixGradientPrimary" x1="10" y1="90" x2="90" y2="10" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0C2C55" />
          <stop offset="60%" stopColor="#1E4A5C" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>

        {/* Accent supersonic wing highlight */}
        <linearGradient id="apixGradientAccent" x1="20" y1="20" x2="90" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="50%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#0C2C55" />
        </linearGradient>

        {/* Dynamic trajectory curve gradient */}
        <linearGradient id="apixTrajectoryGrad" x1="10" y1="85" x2="85" y2="15" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#296374" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>

        {/* Beacon glow */}
        <radialGradient id="apixBeaconGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
        </radialGradient>

        {/* Soft shadow */}
        <filter id="apixShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#0C2C55" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Background Precision Compass / Radar Outer Ring */}
      <circle
        cx="50"
        cy="50"
        r="44"
        stroke="url(#apixGradientPrimary)"
        strokeWidth="1.5"
        strokeDasharray="3 4"
        strokeOpacity="0.35"
      />
      <circle
        cx="50"
        cy="50"
        r="36"
        stroke="url(#apixGradientPrimary)"
        strokeWidth="1"
        strokeOpacity="0.15"
      />

      {/* Index Metric Ascending Coordinate Arc */}
      <path
        d="M 16 78 C 24 78, 38 68, 48 52 C 58 36, 72 24, 86 18"
        stroke="url(#apixTrajectoryGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="100"
        strokeDashoffset="0"
      />

      {/* Precision Ticks on Orbit */}
      <line x1="50" y1="6" x2="50" y2="10" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="90" x2="50" y2="94" stroke="#0C2C55" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5" />
      <line x1="6" y1="50" x2="10" y2="50" stroke="#0C2C55" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5" />
      <line x1="90" y1="50" x2="94" y2="50" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" />

      {/* Supersonic Delta Aircraft Silhouette (Ascending diagonally at 45°) */}
      <g filter="url(#apixShadow)">
        {/* Left Swept Wing */}
        <path
          d="M 50 14 L 33 66 L 47 57 Z"
          fill="url(#apixGradientPrimary)"
          opacity="0.95"
        />

        {/* Right Swept Wing (Main Lit Side) */}
        <path
          d="M 50 14 L 47 57 L 67 66 Z"
          fill="url(#apixGradientAccent)"
        />

        {/* Central Fuselage Ridge Line */}
        <path
          d="M 50 14 L 48 58 L 50 63 L 52 58 Z"
          fill="#FFFFFF"
          opacity="0.9"
        />

        {/* Afterburner / Data Thrust Core */}
        <path
          d="M 46 60 L 50 74 L 54 60 Z"
          fill="url(#apixTrajectoryGrad)"
          opacity="0.9"
        />
        
        {/* Supersonic Jet Nose Apex Point */}
        <circle cx="50" cy="14" r="2.5" fill="#38BDF8" />
      </g>

      {/* Index Metric Data Points */}
      <circle cx="28" cy="74" r="2.5" fill="#0C2C55" opacity="0.6" />
      <circle cx="48" cy="52" r="3" fill="#06B6D4" />
      <circle cx="76" cy="24" r="3.5" fill="#10B981" />
      <circle cx="76" cy="24" r="6" fill="#10B981" opacity="0.25" />
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
  // Size metrics
  const markSizes = {
    sm: 28,
    md: 38,
    lg: 48,
    hero: 64,
  };

  const titleSizes = {
    sm: '1.25rem',
    md: '1.65rem',
    lg: '2.1rem',
    hero: '3.4rem',
  };

  const currentMarkSize = markSizes[size];
  const currentTitleSize = titleSizes[size];

  return (
    <div
      className={`apix-brand-logo apix-logo-${size} ${className}`}
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: size === 'sm' ? 8 : size === 'hero' ? 16 : 12,
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none',
        textDecoration: 'none',
      }}
    >
      {/* Icon Mark */}
      <div
        className="apix-logo-mark-wrapper"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        <LogoMark size={currentMarkSize} />
      </div>

      {/* Typographic Identity */}
      {!iconOnly && (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, lineHeight: 1 }}>
            <span
              className="apix-logotype"
              style={{
                fontSize: currentTitleSize,
                fontWeight: 900,
                fontFamily: "'Inter', -apple-system, sans-serif",
                letterSpacing: '-0.04em',
                color: 'var(--text)',
                display: 'inline-flex',
                alignItems: 'baseline',
              }}
            >
              <span style={{ color: '#0C2C55', fontWeight: 900 }}>API</span>
              <span
                style={{
                  background: 'linear-gradient(135deg, #06B6D4 0%, #0C2C55 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 900,
                  fontStyle: 'italic',
                  marginLeft: '1px',
                  display: 'inline-block',
                }}
              >
                x
              </span>
            </span>

            {/* Version Badge */}
            {showBadge && (
              <span
                className="apix-logo-badge"
                style={{
                  fontSize: size === 'sm' ? '0.62rem' : '0.7rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 700,
                  padding: '2px 7px',
                  borderRadius: '6px',
                  background: 'rgba(12, 44, 85, 0.08)',
                  color: '#0C2C55',
                  border: '1px solid rgba(12, 44, 85, 0.18)',
                  letterSpacing: '0.04em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 4,
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background: '#10B981',
                    boxShadow: '0 0 6px #10B981',
                    display: 'inline-block',
                  }}
                />
                {badgeText}
              </span>
            )}
          </div>

          {/* Subtitle / Expansion */}
          {showSubtitle && (
            <span
              className="apix-logosub"
              style={{
                fontSize: size === 'hero' ? '0.85rem' : '0.65rem',
                fontWeight: 700,
                fontFamily: "'Inter', sans-serif",
                textTransform: 'uppercase',
                letterSpacing: size === 'hero' ? '0.24em' : '0.16em',
                color: 'var(--sub)',
                marginTop: size === 'hero' ? 6 : 2,
              }}
            >
              National Airfare Price Index
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;
