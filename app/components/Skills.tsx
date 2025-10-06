export default function Skills() {
  return (
    <section className="py-20 bg-cyber-bg/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center neon-text">Technical Skills</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-cyber-bg">
              <th className="border px-4 py-2 neon-text">Category</th>
              <th className="border px-4 py-2 neon-text">Skills</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2 text-gray-300">Languages</td>
              <td className="border px-4 py-2 text-gray-300">Rust, GraphQL, JavaScript, TypeScript, Solidity, Python, Java, HTML, CSS</td>
            </tr>
            {/* ... (rest of the table rows unchanged, adjust text color) */}
          </tbody>
        </table>
      </div>
    </section>
  );
}