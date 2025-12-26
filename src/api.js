export async function analyzeImage(file) {
  const form = new FormData();
  form.append("image", file);
  const API_URL = "https://burako-counter-function-938457229232.europe-west1.run.app"; //import.meta.env.VITE_API_URL;


  const res = await fetch(
    `${API_URL}/analyze`,
    {
      method: "POST",
      headers: {
        "X-App-Client": "burako-pwa"
      },
      body: form
    }
  );

  return res.json();
}
