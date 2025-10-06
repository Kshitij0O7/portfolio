export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-cyber-bg/80 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold neon-text">Kshitij Mahajan</a>
        <div className="space-x-6">
          <a href="#about" className="hover:text-cyber-neon transition">About</a>
          <a href="#experience" className="hover:text-cyber-neon transition">Experience</a>
          <a href="#projects" className="hover:text-cyber-neon transition">Projects</a>
          <a href="#skills" className="hover:text-cyber-neon transition">Skills</a>
          <a href="#contact" className="hover:text-cyber-neon transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}