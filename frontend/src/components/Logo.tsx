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
 * AITM AIRLINES Master Aerospace Emblem
 * Bespoke geometric monogram uniting the "A" altitude apex with the "M" dual-turbine wingspan,
 * sliced by an ascending supersonic titanium aircraft with gold navigation beacon.
 */
export const LogoMark: React.FC<{ size?: number; className?: string }> = ({ size = 44, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`aitm-logo-mark ${className}`}
      style={{
        filter: 'drop-shadow(0 4px 14px rgba(12, 44, 85, 0.28))',
        flexShrink: 0,
      }}
    >
      <defs>
        {/* Deep Sovereign Navy Gradient */}
        <linearGradient id="aitmNavy" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#081A30" />
          <stop offset="60%" stopColor="#0C2C55" />
          <stop offset="100%" stopColor="#19426D" />
        </linearGradient>

        {/* Hyper Cyan Flight Gradient */}
        <linearGradient id="aitmCyan" x1="15" y1="105" x2="105" y2="15" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="50%" stopColor="#00D2FF" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>

        {/* Luxury Gold Airline Winglet Accent */}
        <linearGradient id="aitmGold" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>

        {/* Facet Wing 3D Gradient */}
        <linearGradient id="aitmWingFacet" x1="30" y1="30" x2="90" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="60%" stopColor="#00D2FF" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>

        {/* Atmospheric Sonic Glow */}
        <filter id="aitmGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="3.5" floodColor="#00D2FF" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* ── Base Aerodynamic Rounded Shield ── */}
      <rect
        x="6"
        y="6"
        width="108"
        height="108"
        rx="26"
        fill="url(#aitmNavy)"
        stroke="#1E4A78"
        strokeWidth="1.5"
      />
      <rect
        x="7.5"
        y="7.5"
        width="105"
        height="105"
        rx="24.5"
        stroke="url(#aitmCyan)"
        strokeWidth="1"
        strokeOpacity="0.3"
      />

      {/* ── Subtle Compass Horizon Arc ── */}
      <path
        d="M 22 76 C 34 52, 86 52, 98 76"
        stroke="#00D2FF"
        strokeWidth="1.2"
        strokeDasharray="3 4"
        strokeOpacity="0.3"
      />

      {/* ── The "M" Dual Aerodynamic Swept Wing Structure ── */}
      {/* Left Wing Arch of M */}
      <path
        d="M 22 84 L 38 42 L 52 64 L 40 84 Z"
        fill="#13365E"
        stroke="#00D2FF"
        strokeWidth="0.8"
        strokeOpacity="0.4"
      />
      {/* Right Wing Arch of M */}
      <path
        d="M 98 84 L 82 42 L 68 64 L 80 84 Z"
        fill="url(#aitmWingFacet)"
        opacity="0.85"
      />

      {/* ── Gold Airline Horizon Stabilizer Bar ── */}
      <path
        d="M 24 84 L 96 84"
        stroke="url(#aitmGold)"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      {/* ── The Master "A" Ascent Vector (Supersonic Aircraft Climbing to Zenith) ── */}
      <g filter="url(#aitmGlow)">
        {/* Left Delta Wing (Obsidian navy shade) */}
        <path
          d="M 60 16 L 36 74 L 57 65 Z"
          fill="#081A30"
          stroke="#00D2FF"
          strokeWidth="0.8"
          strokeOpacity="0.6"
        />

        {/* Right Delta Wing (Electric Azure illumination) */}
        <path
          d="M 60 16 L 57 65 L 84 74 Z"
          fill="url(#aitmWingFacet)"
        />

        {/* Center Titanium Fuselage Ridge */}
        <path
          d="M 60 16 L 58 66 L 60 72 L 62 66 Z"
          fill="#FFFFFF"
          opacity="0.95"
        />

        {/* Gold Navigation Apex Beacon */}
        <circle cx="60" cy="16" r="3.2" fill="#FFFFFF" />
        <circle cx="60" cy="16" r="1.8" fill="url(#aitmGold)" />

        {/* Supersonic Afterburner Thrust Flare */}
        <path
          d="M 55 68 L 60 84 L 65 68 Z"
          fill="url(#aitmCyan)"
          opacity="0.9"
        />
      </g>

      {/* ── Precision Flight Navigation Coordinates ── */}
      <circle cx="36" cy="74" r="2.5" fill="url(#aitmGold)" />
      <circle cx="84" cy="74" r="2.5" fill="#00D2FF" />
      <circle cx="60" cy="84" r="3" fill="#FFFFFF" />
      <circle cx="60" cy="84" r="6" fill="#00D2FF" fillOpacity="0.25" />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showSubtitle = true,
  showBadge = false,
  badgeText = '',
  className = '',
  iconOnly = false,
  onClick,
}) => {
  const metrics = {
    sm:   { mark: 36, title: '1.25rem', sub: '0.52rem', gap: 11, tracking: '0.12em', subTracking: '0.34em' },
    md:   { mark: 46, title: '1.65rem', sub: '0.62rem', gap: 14, tracking: '0.14em', subTracking: '0.38em' },
    lg:   { mark: 58, title: '2.2rem',  sub: '0.72rem', gap: 18, tracking: '0.15em', subTracking: '0.42em' },
    hero: { mark: 80, title: '3.6rem',  sub: '0.95rem', gap: 24, tracking: '0.16em', subTracking: '0.46em' },
  }[size];

  return (
    <div
      className={`aitm-brand-logo aitm-logo-${size} ${className}`}
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
      {/* ── Emblem Mark ── */}
      <div
        className="aitm-mark-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        <LogoMark size={metrics.mark} />
      </div>

      {/* ── Master Typography Wordmark ── */}
      {!iconOnly && (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, lineHeight: 1 }}>
            {/* Primary Airline Identity */}
            <span
              className="aitm-wordmark"
              style={{
                fontSize: metrics.title,
                fontWeight: 900,
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                letterSpacing: metrics.tracking,
                color: '#0C2C55',
                display: 'inline-flex',
                alignItems: 'baseline',
                textTransform: 'uppercase',
              }}
            >
              <span>AITM</span>
              <span
                style={{
                  color: '#00D2FF',
                  background: 'linear-gradient(135deg, #00D2FF 0%, #0284C7 60%, #0C2C55 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 950,
                  marginLeft: '4px',
                  display: 'inline-block',
                }}
              >
                .
              </span>
            </span>

            {/* Optional Status Badge */}
            {showBadge && badgeText && (
              <span
                className="aitm-logo-badge"
                style={{
                  fontSize: '0.65rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 700,
                  padding: '2.5px 8px',
                  borderRadius: 16,
                  background: 'rgba(12, 44, 85, 0.08)',
                  color: '#0C2C55',
                  border: '1px solid rgba(12, 44, 85, 0.16)',
                  letterSpacing: '0.05em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 5,
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

          {/* Luxury Airline Sub-Wordmark */}
          {showSubtitle && (
            <span
              className="aitm-subline"
              style={{
                fontSize: metrics.sub,
                fontWeight: 800,
                fontFamily: "'Inter', sans-serif",
                textTransform: 'uppercase',
                letterSpacing: metrics.subTracking,
                color: 'var(--sub)',
                marginTop: size === 'hero' ? 8 : 3,
                display: 'block',
              }}
            >
              A I R L I N E S
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;
