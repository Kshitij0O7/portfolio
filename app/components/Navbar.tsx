import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-[98%] mx-auto bg-cyber-bg/80 backdrop-blur-sm z-50 py-5">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo / Name */}
        <button className="cyber-button text-5xl font-bold">
          <Link href="/" className="neon-text no-underline">Kshitij Mahajan</Link>
        </button>

        {/* Nav Links */}
        <div className="flex items-center px-5">
          <button className="cyber-button text-lg px-4 py-2">
            <Link href="#about" className="hover:text-cyber-neon no-underline transition">About</Link>
          </button>
          <button className="cyber-button text-lg px-4 py-2">
            <Link href="#experience" className="hover:text-cyber-neon no-underline transition">Experience</Link>
          </button>
          <button className="cyber-button text-lg px-4 py-2">
            <Link href="#projects" className="hover:text-cyber-neon no-underline transition">Projects</Link>
          </button>
          <button className="cyber-button text-lg px-4 py-2">
            <Link href="#skills" className="hover:text-cyber-neon no-underline transition">Skills</Link>
          </button>
          <button className="cyber-button text-lg px-4 py-2">
            <Link href="#contact" className="hover:text-cyber-neon no-underline transition">Contact</Link>
          </button>
        </div>
      </div>
    </nav>
  );
}
