# tailwind4-demo

Running: `npm install` and then `deno run -A ./mod.ts` or `deno run ./mod.ts` if you want to inspect permissions (only `env`, `ffi`, and `read` should be needed).

This should yield something like `error: Uncaught (in promise) Error: Can't resolve 'tailwindcss' in '<project location>'` instead of generating CSS.
