export default function Camera({ onCapture }) {
  return (
    <input
      type="file"
      accept="image/*"
      capture="environment"
      onChange={e => onCapture(e.target.files[0])}
      style={{
        display: "block",
        margin: "20px auto",
        padding: "10px 20px",
        fontSize: "1rem",
        color: "#fff",
        backgroundColor: "#4a148c",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    />
  );
}
