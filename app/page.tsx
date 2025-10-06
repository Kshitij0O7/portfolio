'use client';

import { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function Home() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target,{
              opacity: [0, 1],
              translateY: [50, 0],
              scale: [0.9, 1],
              easing: 'easeOutExpo',
              duration: 1200,
              begin: () => {
                entry.target?.classList.add('glow');
              },
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-cyber-bg text-gray-200">
      <Navbar />
      <Hero />
      <section id="about" ref={(el) => { sectionsRef.current[0] = el; }} className="py-20">
        <About />
      </section>
      <section id="experience" ref={(el) => { sectionsRef.current[1] = el; }} className="py-20 bg-cyber-bg/50">
        <Experience />
      </section>
      <section id="projects" ref={(el) => { sectionsRef.current[2] = el; }} className="py-20">
        <Projects />
      </section>
      <section id="skills" ref={(el) => { sectionsRef.current[3] = el; }} className="py-20 bg-cyber-bg/50">
        <Skills />
      </section>
      <section id="contact" ref={(el) => { sectionsRef.current[4] = el; }} className="py-20">
        <Contact />
      </section>
    </main>
  );
}