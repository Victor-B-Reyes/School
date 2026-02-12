import { useState } from "react";

function Fundamentos001P01Component() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const runCode = () => {
    const lines = code.split("\n");
    let result = "";

    lines.forEach(line => {
      line = line.trim();

      if (line.startsWith("ESCRIBIR")) {
        const text = line.replace("ESCRIBIR", "").trim();
        result += text + "\n";
      }
    });

    setOutput(result);
  };

  return (
    <div>
      <h2>Emulador de Pseudocódigo</h2>

      <textarea
        rows="10"
        cols="50"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <br />
      <button onClick={runCode}>Ejecutar</button>

      <pre>{output}</pre>
    </div>
  );
}

export default Fundamentos001P01Component;


