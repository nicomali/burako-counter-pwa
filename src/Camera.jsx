export default function Camera({ onCapture }) {
  return (
    <input
      type="file"
      accept="image/*"
      capture="environment"
      onChange={e => onCapture(e.target.files[0])}
    />
  );
}
