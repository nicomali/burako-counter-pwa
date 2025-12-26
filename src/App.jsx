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
    <div style={{ padding: 20 }}>
      <h1>Burako Counter</h1>

      <Camera onCapture={handleCapture} />

      {loading && <p>Analizando imagen…</p>}

      {tiles.length > 0 && (
        <>
          <TilesEditor tiles={tiles} setTiles={setTiles} />
          <h2>Puntaje: {totalScore(tiles)}</h2>
        </>
      )}
    </div>
  );
}
