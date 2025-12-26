export default function TilesEditor({ tiles, setTiles }) {
  function updateTile(i, field, value) {
    const copy = [...tiles];
    copy[i] = { ...copy[i], [field]: value };
    setTiles(copy);
  }

  return (
    <div>
      {tiles.map((t, i) => (
        <div key={i} style={{ marginBottom: 8 }}>
          <input
            type="number"
            placeholder="Número"
            value={t.number ?? ""}
            onChange={e =>
              updateTile(i, "number", e.target.value ? Number(e.target.value) : null)
            }
          />

          <select
            value={t.color ?? ""}
            onChange={e => updateTile(i, "color", e.target.value || null)}
          >
            <option value="">Color</option>
            <option value="rojo">Rojo</option>
            <option value="azul">Azul</option>
            <option value="verde">Verde</option>
            <option value="negro">Negro</option>
          </select>

          <label>
            Joker
            <input
              type="checkbox"
              checked={t.joker}
              onChange={e => updateTile(i, "joker", e.target.checked)}
            />
          </label>
        </div>
      ))}
    </div>
  );
}
