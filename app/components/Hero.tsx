'use client';

import { useEffect, useRef } from 'react';
import { animate, createTimeline } from 'animejs';

export default function Hero() {
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const racketRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Text animation (glitch-style infinite loop)
    if (textWrapperRef.current) {
      textWrapperRef.current.innerHTML = textWrapperRef.current.textContent!.replace(/\S/g, "<span class='letter neon-text'>$&</span>");
      const tl = createTimeline({ loop: true });
      tl.add('.letter',{
        opacity: [0, 1],
        translateY: [-10, 0],
        easing: 'easeInOutQuad',
        duration: 2000,
        delay: (el, i) => 100 * (i + 1),
      }).add('.letter',{
        opacity: [1, 0.3],
        translateY: [0, 10],
        easing: 'easeInOutQuad',
        duration: 1000,
      }, '-=500'); // Overlap for glitch effect
    }

    // Racket swing animation
    if (racketRef.current) {
      animate(racketRef.current, {
        rotate: [0, 45, 0], // Swing motion
        translateX: [0, 50, 0], // Side-to-side motion
        easing: 'easeInOutSine',
        duration: 2000,
        loop: true,
        direction: 'alternate',
      });
      animate(racketRef.current, {
        scale: [1, 1.1, 1], // Pulsing glow effect
        easing: 'easeInOutQuad',
        duration: 1500,
        loop: true,
      });
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-cyber-bg relative overflow-hidden pt-20">
      <div className="container mx-auto px-4 text-center z-10">
        <h1 ref={textWrapperRef} className="text-5xl md:text-7xl font-bold mb-6">
          Kshitij Mahajan: Developer Advocate
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Developer Relations | Full-Stack & Web3 Developer
        </p>
        <button className='cyber-button text-lg px-4 py-2 text-8xl'>
        <a href="#projects" className="hover:text-cyber-neon no-underline transition">
          View My Work
        </a>
        </button>
      </div>
      {/* Glowing Tennis Racket SVG */}
      <svg
        ref={racketRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 glow"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 10 L90 50 L50 90 L10 50 Z" // Racket head
          stroke="url(#neonGradient)"
          strokeWidth="2"
          fill="none"
        />
        <line x1="50" y1="50" x2="50" y2="10" stroke="url(#neonGradient)" strokeWidth="2" /> {/* Handle */}
        <defs>
          <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#00ffcc' }} />
            <stop offset="100%" style={{ stopColor: '#ff00ff' }} />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
}