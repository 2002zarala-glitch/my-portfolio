# Learn Bun.js as Backend — Practical Approach

This README is a concise, hands-on guide to learn Bun.js as a backend runtime through small practical examples you can run and iterate on.

## Table of Contents
- Quick goals
- Prerequisites
- Project init
- Hello world (Bun.serve)
- Simple JSON API
- Environment variables
- Testing with curl
- Next steps (DB, frameworks, deployment)
- Resources

**Quick goals:**
- Get Bun installed and a project scaffolded.
- Run a minimal HTTP server with `Bun.serve`.
- Build a tiny JSON API and test it locally.

## Prerequisites
- macOS, Linux, or Windows (WSL). Node knowledge helps but is not required.
- Install Bun (one-liner):

```bash
curl -fsSL https://bun.sh/install | bash
```

After install, make sure `bun` is on your PATH:

```bash
bun --version
```

## Project init
Create a new folder and initialize a project:

```bash
mkdir bun-backend && cd bun-backend
bun init -y
```

This writes a `package.json` so you can use `bun` to add deps and run scripts.

## Hello World — Bun.serve
Create `server.js` with a minimal HTTP server using `Bun.serve`:

```js
// server.js
 Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") return new Response("Hello Bun!", { status: 200 });
    return new Response("Not found", { status: 404 });
  }
});
```

Run the server:

```bash
bun server.js
```

Open http://localhost:3000 in your browser or test with curl:

```bash
curl http://localhost:3000
```

## Simple JSON API
Extend `server.js` to provide a JSON API route:

```js
// server.js (add inside fetch)
if (url.pathname === "/api/time") {
  return new Response(JSON.stringify({ now: new Date().toISOString() }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
```

Test it:

```bash
curl http://localhost:3000/api/time
```

## Environment variables
Create a `.env` (or use your shell) and read `process.env`:

```bash
export MY_SECRET=abc123
```

In code use `process.env.MY_SECRET` for configuration.

## Testing quickly with curl
- GET JSON: `curl http://localhost:3000/api/time`
- POST example (if you add POST handlers):

```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"name":"zara"}' http://localhost:3000/api/users
```

## Next practical steps
- Routing & middleware: use a lightweight framework (Hono, Express-compatible libs) or roll tiny router.
- Databases: add `pg` for Postgres (`bun add pg`) or use SQLite for local prototypes.
- ORMs: try Prisma or Drizzle (check Bun compatibility for the versions you choose).
- Testing: use `bun test` or keep simple integration tests with `curl`/supertest.
- Deployment: build a small Dockerfile or deploy to Fly.io, Render, or Railway.

## Example commands summary

```bash
# install deps
bun add pg

# run server
bun server.js

# run tests (if configured)
bun test
```

## Resources
- Official Bun: https://bun.sh
- Bun docs & examples: https://bun.sh/docs
- Community: Bun Discord / GitHub discussions

---
If you want, I can add a complete example project in this repo (routes, small DB example, and a Dockerfile). Want that next?## Portfolio
# my first site 


## db and docker hello world
create a mongodb collection and do CRUD on data
use docker mongodb 