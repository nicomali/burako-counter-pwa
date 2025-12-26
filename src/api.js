export async function analyzeImage(file) {
  const form = new FormData();
  form.append("image", file);

  const res = await fetch(
    "https://TU_CLOUD_FUNCTION_URL/analyze",
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
