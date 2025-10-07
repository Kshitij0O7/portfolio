'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-[98%] mx-auto bg-cyber-bg/80 backdrop-blur-sm z-50 py-5 rounded-xl">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo / Name */}
        <button className="cyber-button text-3xl lg:text-5xl font-bold">
          <Link href="/" className="neon-text no-underline">
            Kshitij Mahajan
          </Link>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden sm:flex items-center gap-6">
          {['about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
            <button key={item} className="cyber-button text-lg px-4 py-2">
              <Link href={`#${item}`} className="hover:text-cyber-neon no-underline transition">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-cyber-neon text-3xl focus:outline-none mr-[20px]">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 bg-cyber-bg/95 border-t border-cyber-neon rounded-b-xl px-6 py-4 space-y-4 text-center animate-fade-in-down">
          {['about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
            <div key={item}>
              <Link
                href={`#${item}`}
                onClick={() => setIsOpen(false)}
                className="block text-lg text-gray-200 hover:text-cyber-neon transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
