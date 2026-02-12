
 Bun.serve({
  port: 3000,
  async fetch(req) {
    console.log("Received request:", req.method, req.url);
    const url = new URL(req.url);
     if (url.pathname === "/zara") return new Response("Hello Zaraaaa!", { status: 200 });
    if (url.pathname === "/") return new Response("Hello Bun!", { status: 200 });
    return new Response("Not found", { status: 404 });
  }
});