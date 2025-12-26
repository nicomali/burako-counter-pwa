import { useState } from "react";
import Camera from "./Camera";
import { resizeImage } from "./imageUtils";
import { analyzeImage } from "./api";
import TilesEditor from "./TilesEditor";
import { totalScore } from "./burakoRules";

export default function App() {
  const [tiles, setTiles] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleCapture(file) {
    setLoading(true);

    const resized = await resizeImage(file);
    const result = await analyzeImage(resized);

    setTiles(result.tiles || []);
    setLoading(false);
  }

  return (
    <div
      style={{
        padding: 20,
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        minHeight: "100vh",
        color: "#333",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", color: "#4a148c" }}>Contador de Burako</h1>

      <Camera onCapture={handleCapture} />

      {loading && <p style={{ fontSize: "1.2rem", color: "#ff5722" }}>Analizando imagen…</p>}

      {tiles.length > 0 && (
        <>
          <TilesEditor tiles={tiles} setTiles={setTiles} />
          <h2 style={{ fontSize: "2rem", marginTop: "20px" }}>Puntaje: {totalScore(tiles)}</h2>
        </>
      )}
    </div>
  );
}
