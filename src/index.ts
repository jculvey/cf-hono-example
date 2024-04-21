import { Hono } from 'hono'

type Bindings = Record<string, unknown> & CloudflareBindings;

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app