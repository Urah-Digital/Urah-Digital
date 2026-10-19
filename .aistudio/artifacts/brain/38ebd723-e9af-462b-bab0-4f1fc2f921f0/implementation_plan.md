# 3D Parametric Torus & Drifting Particle Field Integration — Implementation Plan

Integrating the user-provided 3D parametric dot-matrix visual as the primary hero background, accompanied by a subtle drifting particle field and warm ambient glow to deliver a high-end, tactile tech aesthetic without compromising headline legibility.

---

## 1. Confirmed User Decisions

- **Primary Visual Integration**:
  - Incorporate the uploaded 3D parametric dot-matrix visual (toroidal particle cloud rendered in warm coral, peach, and amber tones) as the primary hero background element.
  - Illuminate with an ambient warm radial glow (`rgba(245, 158, 11, 0.22)` to `rgba(244, 63, 94, 0.18)`) that provides depth and tactile warmth behind the headline.

- **Animation Behavior**:
  - **Subtle Drifting Particle Field**: Implement a lightweight, looping SVG particle system drifting gently around and through the 3D parametric structure.
  - Non-distracting, smooth harmonic float (subtle x/y drift and opacity pulsing) simulating floating technical dust and constellation nodes.
  - 60 FPS performance without canvas overhead or battery drain.

- **Mobile Viewport Calibration**:
  - Maintain the background's visual presence on mobile screens (`< 640px`) with the visual starting in the upper half of the hero and supporting text starting lower, maintaining pure white typography with backdrop drop-shadows.

---

## 2. Technical Architecture & Component Changes

### A. Dynamic Background Component / Engine
- **File**: `src/components/HeroParametricBackground.tsx` (or integrated in `src/components/Hero.tsx`)
  - Construct the 3D parametric dot-matrix torus visual using high-fidelity vector math / parametric point distribution or SVG rendering:
    - Layer 1: Core parametric toroidal point-matrix rendered with glowing coral/amber/peach gradient particles and perspective depth.
    - Layer 2: Drifting SVG particle field with 30+ floating micro-nodes drifting across coordinates with gentle Framer Motion / CSS keyframe trajectories.
    - Layer 3: Warm ambient backlight and radial focal flares to produce the signature warm studio glow.
  - Position safely behind text with calibrated gradient masks (`mask-image` / radial fade-outs) ensuring headline and CTA remain crisp and prominent.

### B. Hero Component Integration
- **File**: `src/components/Hero.tsx`
  - Set the 3D Parametric Dot-Matrix as the default active background style (`bgStyle = 'parametric-torus'`), with options to toggle between Parametric Torus, Cyber Topo, and Tech Gradient.
  - Maintain high-contrast typography (`text-white font-medium drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]`).
  - Ensure mobile padding and layout seamlessly showcases the parametric 3D structure.

---

## 3. Verification & Quality Plan

- **Visual Contrast**: Verify that headline "Websites that earn trust" and secondary copy remain effortlessly legible across all device sizes.
- **Animation Fluidity**: Ensure the particle drift is smooth, organic, and distraction-free at 60 FPS.
- **Responsiveness**: Validate layout at 375px (iPhone SE/13), 414px (Plus), and 1280px+ (Desktop).
- **Compilation**: Run `compile_applet` and `lint_applet` to confirm zero errors.
