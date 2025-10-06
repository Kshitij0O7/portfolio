export default function Navbar() {
  return (
    <nav className="fixed top-0 w-[98%] mx-auto bg-cyber-bg/80 backdrop-blur-sm z-50 py-5">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo / Name */}
        <button className="cyber-button text-5xl font-bold">
          <a href="/" className="neon-text no-underline">Kshitij Mahajan</a>
        </button>

        {/* Nav Links */}
        <div className="flex items-center px-5">
          <button className="cyber-button text-lg px-4 py-2">
            <a href="#about" className="hover:text-cyber-neon no-underline transition">About</a>
          </button>
          <button className="cyber-button text-lg px-4 py-2">
            <a href="#experience" className="hover:text-cyber-neon no-underline transition">Experience</a>
          </button>
          <button className="cyber-button text-lg px-4 py-2">
            <a href="#projects" className="hover:text-cyber-neon no-underline transition">Projects</a>
          </button>
          <button className="cyber-button text-lg px-4 py-2">
            <a href="#skills" className="hover:text-cyber-neon no-underline transition">Skills</a>
          </button>
          <button className="cyber-button text-lg px-4 py-2">
            <a href="#contact" className="hover:text-cyber-neon no-underline transition">Contact</a>
          </button>
        </div>
      </div>
    </nav>
  );
}
