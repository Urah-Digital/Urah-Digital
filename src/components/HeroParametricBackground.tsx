import React from 'react';
import { motion, type MotionValue } from 'framer-motion';
import parametricTorusBg from '../assets/images/parametric_torus_bg.jpg';

export interface HeroParametricBackgroundProps {
  cursorX?: MotionValue<number>;
  cursorY?: MotionValue<number>;
  cursorOpacity?: MotionValue<number>;
}

interface Particle {
  id: number;
  cx: number;
  cy: number;
  r: number;
  color: string;
  duration: number;
  delay: number;
  dx: number;
  dy: number;
}

// Deterministic set of drifting particles around the 3D parametric torus
// Strict adherence to URAH DIGITAL brand kit: Gold (#C69B3C), Amber (#F59E0B, #FBBF24), Platinum (#FEF3C7, #E2E8F0)
const PARTICLES: Particle[] = [
  { id: 1, cx: 62, cy: 30, r: 2.2, color: '#C69B3C', duration: 14, delay: 0, dx: 18, dy: -14 },
  { id: 2, cx: 75, cy: 22, r: 1.6, color: '#FBBF24', duration: 18, delay: 1.5, dx: -14, dy: 16 },
  { id: 3, cx: 85, cy: 38, r: 2.8, color: '#F59E0B', duration: 16, delay: 0.8, dx: 12, dy: 20 },
  { id: 4, cx: 58, cy: 55, r: 1.8, color: '#D97706', duration: 20, delay: 2, dx: -22, dy: -12 },
  { id: 5, cx: 68, cy: 68, r: 2.4, color: '#FDE68A', duration: 15, delay: 3, dx: 16, dy: -18 },
  { id: 6, cx: 80, cy: 60, r: 1.5, color: '#F59E0B', duration: 22, delay: 1, dx: -18, dy: -15 },
  { id: 7, cx: 48, cy: 40, r: 2.0, color: '#C69B3C', duration: 17, delay: 2.5, dx: 15, dy: 14 },
  { id: 8, cx: 52, cy: 25, r: 1.4, color: '#FEF3C7', duration: 19, delay: 0.5, dx: -12, dy: 18 },
  { id: 9, cx: 70, cy: 45, r: 3.0, color: '#FBBF24', duration: 13, delay: 4, dx: 14, dy: -16 },
  { id: 10, cx: 88, cy: 50, r: 1.7, color: '#F59E0B', duration: 21, delay: 2.2, dx: -16, dy: 14 },
  { id: 11, cx: 42, cy: 58, r: 1.5, color: '#C69B3C', duration: 16, delay: 3.5, dx: 20, dy: -10 },
  { id: 12, cx: 65, cy: 80, r: 2.1, color: '#FCD34D', duration: 18, delay: 1.8, dx: -15, dy: -20 },
  { id: 13, cx: 35, cy: 32, r: 1.6, color: '#FDE68A', duration: 24, delay: 0.2, dx: 16, dy: 12 },
  { id: 14, cx: 92, cy: 28, r: 2.0, color: '#FBBF24', duration: 15, delay: 2.8, dx: -14, dy: 18 },
  { id: 15, cx: 55, cy: 75, r: 1.4, color: '#E2E8F0', duration: 23, delay: 4.5, dx: 18, dy: -14 },
  { id: 16, cx: 78, cy: 82, r: 1.9, color: '#F59E0B', duration: 17, delay: 1.2, dx: -16, dy: -16 },
  { id: 17, cx: 45, cy: 20, r: 1.8, color: '#C69B3C', duration: 20, delay: 3.2, dx: 14, dy: 15 },
  { id: 18, cx: 82, cy: 15, r: 1.5, color: '#FBBF24', duration: 19, delay: 0.9, dx: -12, dy: 14 },
  { id: 19, cx: 38, cy: 65, r: 2.2, color: '#FCD34D', duration: 22, delay: 2.1, dx: 15, dy: -15 },
  { id: 20, cx: 90, cy: 72, r: 1.6, color: '#D97706', duration: 16, delay: 4.1, dx: -18, dy: -12 },
  { id: 21, cx: 60, cy: 15, r: 2.0, color: '#FEF3C7', duration: 18, delay: 1.6, dx: 12, dy: 16 },
  { id: 22, cx: 72, cy: 35, r: 2.5, color: '#FBBF24', duration: 14, delay: 2.7, dx: -15, dy: -14 },
  { id: 23, cx: 30, cy: 48, r: 1.5, color: '#C69B3C', duration: 25, delay: 3.8, dx: 14, dy: 10 },
  { id: 24, cx: 84, cy: 42, r: 2.3, color: '#F59E0B', duration: 15, delay: 0.4, dx: -16, dy: 18 },
];

// Constellation connecting line segments in brand gold and amber
const GEOMETRIC_LINES = [
  { x1: 62, y1: 30, x2: 72, y2: 35, color: 'rgba(198,155,60,0.38)', strokeWidth: 0.8 },
  { x1: 72, y1: 35, x2: 85, y2: 38, color: 'rgba(245,158,11,0.32)', strokeWidth: 0.7 },
  { x1: 85, y1: 38, x2: 80, y2: 60, color: 'rgba(251,191,36,0.35)', strokeWidth: 0.75 },
  { x1: 80, y1: 60, x2: 68, y2: 68, color: 'rgba(198,155,60,0.38)', strokeWidth: 0.8 },
  { x1: 68, y1: 68, x2: 58, y2: 55, color: 'rgba(253,230,138,0.3)', strokeWidth: 0.7 },
  { x1: 58, y1: 55, x2: 48, y2: 40, color: 'rgba(245,158,11,0.28)', strokeWidth: 0.65 },
  { x1: 48, y1: 40, x2: 52, y2: 25, color: 'rgba(198,155,60,0.32)', strokeWidth: 0.7 },
  { x1: 52, y1: 25, x2: 62, y2: 30, color: 'rgba(251,191,36,0.32)', strokeWidth: 0.75 },
  { x1: 70, y1: 45, x2: 84, y2: 42, color: 'rgba(245,158,11,0.4)', strokeWidth: 0.9 },
  { x1: 65, y1: 80, x2: 78, y2: 82, color: 'rgba(198,155,60,0.3)', strokeWidth: 0.7 },
];

export const HeroParametricBackground: React.FC<HeroParametricBackgroundProps> = ({
  cursorX,
  cursorY,
  cursorOpacity,
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#06080C]" aria-hidden="true">
      {/* 1. Primary 3D Parametric Dot-Matrix Torus in Brand Gold & Amber */}
      <div className="absolute inset-0">
        <img
          src={parametricTorusBg}
          alt="3D Parametric Toroidal Particle Matrix in Warm Gold and Amber"
          className="w-full h-full object-cover object-top sm:object-right md:object-center opacity-95 transition-opacity duration-700 scale-105"
          loading="eager"
          decoding="async"
        />

        {/* Dynamic Interactive Cursor-Following Glow */}
        {cursorX && cursorY && cursorOpacity && (
          <motion.div
            className="absolute top-0 left-0 pointer-events-none select-none z-[1]"
            style={{
              x: cursorX,
              y: cursorY,
              opacity: cursorOpacity,
            }}
          >
            {/* Broad Atmospheric Warm Gold Halo with organic breathing scale */}
            <motion.div
              animate={{
                scale: [0.96, 1.05, 0.96],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-[480px] sm:w-[680px] h-[480px] sm:h-[680px] rounded-full bg-[radial-gradient(circle_at_center,rgba(198,155,60,0.25),rgba(245,158,11,0.14)_36%,rgba(198,155,60,0.03)_65%,transparent_75%)] blur-[50px] sm:blur-[72px]"
            />

            {/* Focused Radiant Luminescence: Lights up the 3D parametric dot matrix under cursor */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[320px] h-[220px] sm:h-[320px] rounded-full bg-[radial-gradient(circle_at_center,rgba(254,243,199,0.28),rgba(251,191,36,0.18)_40%,rgba(198,155,60,0.06)_65%,transparent_72%)] blur-[28px] sm:blur-[38px] mix-blend-screen" />

            {/* Subtle Interactive Micro-Reticle Center */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FEF3C7] opacity-60 blur-[1px]" />
          </motion.div>
        )}

        {/* Dynamic Warm Brand Gold Ambient Backlight Bloom */}
        <div 
          className="absolute top-1/4 sm:top-1/3 right-1/4 sm:right-1/6 w-[380px] sm:w-[650px] h-[380px] sm:h-[650px] bg-[radial-gradient(circle_at_center,rgba(198,155,60,0.18),rgba(245,158,11,0.12),transparent_70%)] blur-[75px] sm:blur-[110px] pointer-events-none"
        />

        {/* Secondary Warm Golden Flare on Left for Depth Contrast */}
        <div 
          className="absolute top-1/2 left-10 sm:left-1/4 -translate-y-1/2 w-[320px] sm:w-[500px] h-[320px] sm:h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.12),transparent_65%)] blur-[90px] pointer-events-none"
        />

        {/* Readability Vignette: Gradient overlay that preserves visual vibrancy while keeping text crystal clear */}
        {/* On mobile: Clear upper preview so the torus glows at top, smoothly transitioning into dark text plate below */}
        <div className="sm:hidden absolute inset-0 bg-gradient-to-b from-transparent via-[#06080C]/40 to-[#06080C]" />
        
        {/* On desktop: Gradient from left text area to transparent torus on right */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#06080C]/90 via-[#06080C]/50 to-transparent" />
        
        {/* Bottom edge blending into the page dark canvas */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
      </div>

      {/* 2. Subtle Drifting SVG Particle & Geometric Constellation Field in Brand Gold & Amber */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none z-[1]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Radiant Soft Glow Filter */}
          <filter id="particle-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Golden Warm Glow Filter */}
          <filter id="intense-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="0.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Geometric Constellation Lines Pulsing Around the Toroidal Perimeter */}
        <g opacity="0.8">
          {GEOMETRIC_LINES.map((line, idx) => (
            <motion.line
              key={`line-${idx}`}
              x1={`${line.x1}%`}
              y1={`${line.y1}%`}
              x2={`${line.x2}%`}
              y2={`${line.y2}%`}
              stroke={line.color}
              strokeWidth={line.strokeWidth}
              strokeDasharray="1.2 1.2"
              initial={{ opacity: 0.25 }}
              animate={{
                opacity: [0.2, 0.65, 0.25],
                strokeDashoffset: [0, -8],
              }}
              transition={{
                duration: 6 + (idx % 4) * 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: idx * 0.4,
              }}
            />
          ))}
        </g>

        {/* Drifting Particles Field Orbiting and Drifting Naturally in Brand Gold & Amber */}
        {PARTICLES.map((p) => (
          <motion.circle
            key={`particle-${p.id}`}
            cx={`${p.cx}%`}
            cy={`${p.cy}%`}
            r={p.r * 0.18}
            fill={p.color}
            filter={p.r > 2 ? 'url(#intense-glow)' : 'url(#particle-glow)'}
            initial={{
              x: 0,
              y: 0,
              opacity: 0.35,
              scale: 0.9,
            }}
            animate={{
              x: [0, p.dx * 0.45, -p.dx * 0.3, 0],
              y: [0, p.dy * 0.45, -p.dy * 0.25, 0],
              opacity: [0.35, 0.9, 0.4, 0.8, 0.35],
              scale: [0.9, 1.25, 0.95, 1.15, 0.9],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: p.delay,
            }}
          />
        ))}

        {/* Technical Coordinate Micro-Crosshairs / Geometric Glyphs */}
        <motion.g
          animate={{ opacity: [0.35, 0.75, 0.35] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <g transform="translate(62, 30)">
            <line x1="-1.5" y1="0" x2="1.5" y2="0" stroke="#FBBF24" strokeWidth="0.3" opacity="0.75" />
            <line x1="0" y1="-1.5" x2="0" y2="1.5" stroke="#FBBF24" strokeWidth="0.3" opacity="0.75" />
          </g>
          <g transform="translate(85, 38)">
            <line x1="-1.5" y1="0" x2="1.5" y2="0" stroke="#C69B3C" strokeWidth="0.3" opacity="0.75" />
            <line x1="0" y1="-1.5" x2="0" y2="1.5" stroke="#C69B3C" strokeWidth="0.3" opacity="0.75" />
          </g>
          <g transform="translate(68, 68)">
            <line x1="-1.5" y1="0" x2="1.5" y2="0" stroke="#F59E0B" strokeWidth="0.3" opacity="0.75" />
            <line x1="0" y1="-1.5" x2="0" y2="1.5" stroke="#F59E0B" strokeWidth="0.3" opacity="0.75" />
          </g>
        </motion.g>
      </svg>

      {/* 3. Subtle Technical Grid Underlay in Brand Amber to Anchor Perspective */}
      <div 
        className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
      />
    </div>
  );
};
