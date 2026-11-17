import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sparkles, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { Rotate3D, Sparkles as SparklesIcon, ShieldCheck, Gem, Sun, Moon, Flame } from 'lucide-react';

// Materials based on metal choice
const METAL_CONFIGS = {
  platinum: {
    name: "Platinum 950 Haute Parure",
    shortName: "Pt 950",
    color: "#e8ecf2",
    roughness: 0.10,
    metalness: 0.98,
    purity: "95.0% Pure Noble Platinum",
    glow: "rgba(232, 236, 242, 0.3)"
  },
  whiteGold: {
    name: "18K Diamond White Gold",
    shortName: "18K White",
    color: "#f2f4f8",
    roughness: 0.12,
    metalness: 0.96,
    purity: "75.0% Fine Gold + Rhodium Plated",
    glow: "rgba(242, 244, 248, 0.3)"
  },
  roseGold: {
    name: "18K Crown Rose Gold",
    shortName: "18K Rose",
    color: "#e5a186",
    roughness: 0.18,
    metalness: 0.92,
    purity: "75.0% Fine Gold + Copper Alloy",
    glow: "rgba(229, 161, 134, 0.3)"
  }
};

const LIGHTING_MODES = {
  studio: {
    name: "Haute Studio",
    icon: Sun,
    keyColor: "#fff8e7",
    fillColor: "#e6f2ff",
    ambient: 0.85
  },
  vault: {
    name: "Royal Vault",
    icon: Flame,
    keyColor: "#ffd27f",
    fillColor: "#ff9f43",
    ambient: 0.65
  },
  midnight: {
    name: "Midnight Gala",
    icon: Moon,
    keyColor: "#cce5ff",
    fillColor: "#d8b4fe",
    ambient: 0.55
  }
};

function LuxuryJewellery3D({ metalKey, autoRotate, lightingMode }) {
  const groupRef = useRef();
  const diamondRef = useRef();
  const innerSparkleRef = useRef();
  const metalConfig = METAL_CONFIGS[metalKey] || METAL_CONFIGS.platinum;

  // Gentle floating and continuous slow rotation
  useFrame((state, delta) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y += delta * 0.35;
    }
    if (diamondRef.current) {
      diamondRef.current.rotation.y += delta * 0.15;
    }
    if (innerSparkleRef.current) {
      innerSparkleRef.current.rotation.y -= delta * 0.25;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.15, 0]}>
      {/* Central Diamond Solitaire Gemstone (58 Facets Brilliant Cut Simulation) */}
      <mesh ref={diamondRef} position={[0, 1.45, 0]}>
        <octahedronGeometry args={[0.78, 2]} />
        <meshPhysicalMaterial
          color="#ffffff"
          emissive="#d4ecff"
          emissiveIntensity={0.2}
          transmission={0.94}
          opacity={1}
          transparent
          roughness={0.04}
          metalness={0.08}
          ior={2.42} // Real Diamond Index of Refraction
          thickness={1.6}
          specularIntensity={2.0}
          specularColor="#ffffff"
        />
      </mesh>

      {/* Inner Diamond Core Sparkle */}
      <mesh ref={innerSparkleRef} position={[0, 1.45, 0]}>
        <octahedronGeometry args={[0.42, 1]} />
        <meshStandardMaterial
          color="#f0f7ff"
          emissive="#99d6ff"
          emissiveIntensity={0.8}
          roughness={0.08}
          metalness={0.85}
        />
      </mesh>

      {/* 4 Crown Prongs holding Diamond */}
      {[-1, 1].map((x) =>
        [-1, 1].map((z) => (
          <mesh
            key={`prong-${x}-${z}`}
            position={[x * 0.44, 1.35, z * 0.44]}
            rotation={[x * 0.14, 0, z * 0.14]}
          >
            <cylinderGeometry args={[0.045, 0.065, 0.68, 16]} />
            <meshStandardMaterial
              color={metalConfig.color}
              roughness={metalConfig.roughness}
              metalness={metalConfig.metalness}
            />
          </mesh>
        ))
      )}

      {/* Crown Setting Base Collar */}
      <mesh position={[0, 1.1, 0]}>
        <torusGeometry args={[0.48, 0.08, 16, 32]} />
        <meshStandardMaterial
          color={metalConfig.color}
          roughness={metalConfig.roughness}
          metalness={metalConfig.metalness}
        />
      </mesh>

      {/* Main Ring Shank (Torus) */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.18, 0.13, 24, 64]} />
        <meshStandardMaterial
          color={metalConfig.color}
          roughness={metalConfig.roughness}
          metalness={metalConfig.metalness}
        />
      </mesh>

      {/* Pavé Shoulder Diamonds on Ring Band */}
      {[-0.65, -0.45, -0.25, 0.25, 0.45, 0.65].map((angle, i) => (
        <mesh
          key={`pave-${i}`}
          position={[
            Math.sin(angle) * 1.18,
            Math.cos(angle) * 1.18 - 0.22,
            0.12
          ]}
        >
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#cce5ff"
            emissiveIntensity={0.6}
            roughness={0.08}
          />
        </mesh>
      ))}

      {/* Floating subtle gold sparkles */}
      <Sparkles
        count={50}
        scale={4.2}
        size={2.8}
        speed={0.4}
        color={metalConfig.color}
      />
    </group>
  );
}

export default function ThreeViewer() {
  const [metalKey, setMetalKey] = useState("platinum");
  const [lightingKey, setLightingKey] = useState("studio");
  const [autoRotate, setAutoRotate] = useState(true);

  const activeLight = LIGHTING_MODES[lightingKey];

  return (
    <section id="craftsmanship-3d" className="relative py-28 bg-[#070707] overflow-hidden border-t border-luxury-gold/20">
      {/* Background radial gold aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-luxury-gold/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-luxury-gold/30 bg-luxury-gold/5 text-luxury-gold text-xs tracking-[0.25em] uppercase mb-4"
          >
            <Gem className="w-3.5 h-3.5 text-luxury-gold" />
            <span>Interactive 3D Joaillerie Salon</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-ivory tracking-tight mb-5"
          >
            The Imperial Solitaire &mdash; <span className="text-gold-gradient font-light italic">In 360° Majesty</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-luxury-muted text-sm md:text-base leading-relaxed font-light"
          >
            Examine our signature crown solitaire in real-time WebGL. Orbit 360°, inspect the 58 hand-cut pavilion facets, and switch noble alloys melted in our heritage foundry.
          </motion.p>
        </div>

        {/* 3D Canvas Box + Controls Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main 3D Canvas Area */}
          <div className="lg:col-span-8 relative h-[500px] md:h-[600px] rounded-3xl bg-[#0a0a0a] border border-luxury-gold/25 backdrop-blur-xl overflow-hidden shadow-2xl">
            {/* Top Bar Controls */}
            <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2 bg-luxury-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-luxury-gold/30 text-[11px] text-luxury-champagne tracking-wider pointer-events-auto">
                <Rotate3D className="w-3.5 h-3.5 text-luxury-gold animate-spin-slow" />
                <span>Drag to Rotate • Pinch to Zoom</span>
              </div>

              <div className="flex items-center gap-2 pointer-events-auto">
                {/* Lighting Switcher */}
                <div className="flex items-center bg-luxury-black/85 backdrop-blur-md rounded-full border border-luxury-gold/30 p-1">
                  {Object.entries(LIGHTING_MODES).map(([key, item]) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={key}
                        onClick={() => setLightingKey(key)}
                        title={item.name}
                        className={`p-1.5 rounded-full transition-all ${
                          lightingKey === key
                            ? "bg-luxury-gold text-luxury-black"
                            : "text-luxury-muted hover:text-luxury-champagne"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </button>
                    );
                  })}
                </div>

                {/* Auto Rotate Toggle */}
                <button
                  onClick={() => setAutoRotate(!autoRotate)}
                  className={`px-3 py-1.5 rounded-full border border-luxury-gold/30 text-[11px] tracking-wider transition-all backdrop-blur-md ${
                    autoRotate
                      ? "bg-luxury-gold/20 text-luxury-champagne border-luxury-gold/60"
                      : "bg-luxury-black/85 text-luxury-muted hover:text-luxury-ivory"
                  }`}
                >
                  {autoRotate ? "Auto Spin" : "Manual"}
                </button>
              </div>
            </div>

            {/* Three.js Canvas */}
            <Canvas dpr={[1, 2]} className="w-full h-full cursor-grab active:cursor-grabbing">
              <PerspectiveCamera makeDefault position={[0, 0.8, 4.3]} fov={45} />
              <ambientLight intensity={activeLight.ambient} />
              
              {/* Studio Key Lights */}
              <spotLight
                position={[5, 8, 5]}
                intensity={1.9}
                angle={0.6}
                penumbra={0.8}
                color={activeLight.keyColor}
              />
              <spotLight
                position={[-5, 4, -4]}
                intensity={1.3}
                color={activeLight.fillColor}
              />
              <pointLight position={[0, -2, 2]} intensity={0.6} color="#C9A44C" />

              <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.3}>
                <LuxuryJewellery3D
                  metalKey={metalKey}
                  autoRotate={autoRotate}
                  lightingMode={lightingKey}
                />
              </Float>

              <OrbitControls
                enablePan={false}
                minDistance={2.4}
                maxDistance={5.8}
                maxPolarAngle={Math.PI / 1.7}
                minPolarAngle={Math.PI / 4}
              />
            </Canvas>

            {/* Bottom info strip */}
            <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between text-xs text-luxury-muted bg-luxury-black/80 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-luxury-gold/20">
              <span className="flex items-center gap-1.5 text-luxury-champagne text-[11px] tracking-wide">
                <ShieldCheck className="w-4 h-4 text-luxury-gold" />
                GIA Certified D-Flawless Natural Solitaire &bull; Laser Inscribed
              </span>
              <span className="hidden sm:inline font-mono text-[10px] text-luxury-gold/80 uppercase tracking-widest">
                60 FPS Hardware Rendered
              </span>
            </div>
          </div>

          {/* Configuration & Gemological Dossier Panel */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
            <div className="bg-[#0b0b0b] border border-luxury-gold/25 rounded-3xl p-6 sm:p-7 backdrop-blur-xl shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] tracking-[0.25em] uppercase text-luxury-gold font-semibold">
                  Atelier Customizer
                </span>
                <span className="text-[11px] text-luxury-champagne font-mono">
                  No. 884-SOL
                </span>
              </div>

              <h3 className="font-serif text-2xl text-luxury-ivory mb-2 font-bold">
                Select Noble Alloy
              </h3>
              <p className="text-xs text-luxury-muted leading-relaxed mb-6 font-light">
                Choose the precious metal alloy cast in our royal foundry to preview real specular reflections.
              </p>

              {/* Metal Switcher Buttons */}
              <div className="space-y-3 mb-6">
                {Object.entries(METAL_CONFIGS).map(([key, config]) => {
                  const isActive = metalKey === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setMetalKey(key)}
                      className={`w-full flex items-center justify-between p-3.5 rounded-2xl border transition-all text-left ${
                        isActive
                          ? "border-luxury-gold bg-luxury-gold/15 shadow-lg shadow-luxury-gold/10"
                          : "border-luxury-gold/15 bg-luxury-black/50 hover:border-luxury-gold/40"
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <span
                          className="w-5 h-5 rounded-full border border-white/30 shadow-md shrink-0"
                          style={{ backgroundColor: config.color }}
                        />
                        <div>
                          <p className="text-xs font-semibold text-luxury-ivory tracking-wide">{config.name}</p>
                          <p className="text-[10px] text-luxury-muted font-light mt-0.5">
                            {config.purity}
                          </p>
                        </div>
                      </div>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-luxury-gold animate-pulse shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Gemological Dossier Table */}
              <div className="pt-5 border-t border-luxury-gold/15 space-y-2.5 text-xs">
                <div className="flex justify-between items-center text-luxury-muted">
                  <span className="text-[11px]">Diamond Carat:</span>
                  <span className="text-luxury-ivory font-serif font-bold text-sm">3.50 Carats</span>
                </div>
                <div className="flex justify-between items-center text-luxury-muted">
                  <span className="text-[11px]">Cut & Proportion:</span>
                  <span className="text-luxury-ivory font-medium">Triple Excellent (Hearts & Arrows)</span>
                </div>
                <div className="flex justify-between items-center text-luxury-muted">
                  <span className="text-[11px]">Color & Clarity:</span>
                  <span className="text-luxury-ivory font-medium">D Grade / Flawless (IF)</span>
                </div>
                <div className="flex justify-between items-center text-luxury-muted">
                  <span className="text-[11px]">Mounting Architecture:</span>
                  <span className="text-luxury-ivory font-medium">Four-Prong Royal Tulip Collet</span>
                </div>
                <div className="flex justify-between items-center text-luxury-muted">
                  <span className="text-[11px]">Handcraft Duration:</span>
                  <span className="text-luxury-champagne font-medium">14 Business Days</span>
                </div>
              </div>

              {/* Atelier Bespoke Inquire CTA */}
              <a
                href="#contact"
                className="mt-6 w-full py-3.5 block text-center rounded-2xl bg-gold-gradient text-luxury-black font-semibold text-xs tracking-[0.2em] uppercase hover:shadow-lg hover:shadow-luxury-gold/25 transition-all transform hover:-translate-y-0.5"
              >
                Inquire For Bespoke Ring
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
