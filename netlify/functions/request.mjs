// Stand-in for the WordPress route /wp-json/tubwell/v1/request (booking + pickup-bag forms).
// The site runs in demo mode: the form only needs a 2xx JSON answer to show its "Thanks, …" screen.
// Nothing is stored or forwarded.
export default async (req) => {
  if (req.method !== "POST") return new Response(JSON.stringify({ message: "Method not allowed" }), { status: 405, headers: { "content-type": "application/json" } });
  return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { "content-type": "application/json", "cache-control": "no-store" } });
};
