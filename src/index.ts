import { Hono } from "hono";

type Bindings = Record<string, unknown> & CloudflareBindings;

const app = new Hono<{ Bindings: Bindings }>();

app.get("/", async (c) => {
  const count = parseInt((await c.env.MY_KV_NAMESPACE.get("count")) || "0");
  await c.env.MY_KV_NAMESPACE.put("count", String(count + 1));

  return c.json({ count });
});

export default app;
