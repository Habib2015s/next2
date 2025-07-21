export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q");

  if (!q) {
    return new Response(
      JSON.stringify({ error: 'Query parameter "q" is required.' }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const deezerURL = `https://api.deezer.com/search?q=${encodeURIComponent(q)}`;
  const proxyURL = `https://thingproxy.freeboard.io/fetch/${deezerURL}`;

  try {
    const response = await fetch(proxyURL);
    const text = await response.text();

    try {
      const data = JSON.parse(text);
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (jsonError) {
      console.error("❌ JSON Parse Error:", jsonError);
      console.error("🔍 Response Text:", text.slice(0, 300));
      return new Response(
        JSON.stringify({ error: "Invalid JSON returned from proxy." }),
        {
          status: 502,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    console.error("💥 Proxy fetch error:", error);
    return new Response(
      JSON.stringify({ error: "Proxy failed to fetch Deezer data." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
