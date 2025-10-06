export default function Skills() {
  return (
    <section className="py-20 bg-cyber-bg/50">
      <div className="container mx-auto py-4 my-auto h-5/6">
        <h2 className="text-4xl font-bold mb-8 text-center neon-text">My Skills</h2>
        <table className="w-11/12 mx-auto rounded-3xl border-collapse h-11/12">
          <thead>
            <tr className="bg-cyber-bg">
              <th className="border px-4 py-2 neon-text">Category</th>
              <th className="border px-4 py-2 neon-text">Skills</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2 text-gray-300 text-center">Languages</td>
              <td className="border px-4 py-2 text-gray-300 text-center">Rust, GraphQL, JavaScript, TypeScript, Solidity, Python, Java, HTML, CSS</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-gray-300 text-center">Frameworks</td>
              <td className="border px-4 py-2 text-gray-300 text-center">React, Next, Node.js, Hardhat, Express, MongoDB, Kafka, Protobuf, gRPC</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-gray-300 text-center">Developer Tools</td>
              <td className="border px-4 py-2 text-gray-300 text-center">Git, GitHub, Docker, VS Code, Visual Studio, Linux, Postman, Brew</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-gray-300 text-center">Devrel Tools</td>
              <td className="border px-4 py-2 text-gray-300 text-center">Hubspot, Jira, Slack, Veed.io</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}