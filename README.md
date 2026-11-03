# ANSH TG HOST — Vercel frontend starter

This is a responsive frontend starter for a multi-user Telegram bot hosting panel.

## Deploy the website on Vercel
1. Create a GitHub repository and upload all files in this folder.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Framework preset: **Other**. Build command: leave empty. Output directory: `.`.
4. Deploy.

## Important: what this starter does and does not do
- The dashboard is a frontend preview. It lets you add/remove demo entries in the current browser session.
- It does **not** upload Python files to a server, save user accounts, store bot tokens, or run bots.
- Vercel is suitable for the website and short-lived serverless requests, not for keeping arbitrary Python bot processes alive 24/7.
- Real hosting needs a separate worker platform with isolated containers, per-user limits, authentication, encrypted secrets, file scanning, resource quotas, abuse controls, and process supervision.
- Do not run uploaded user Python code directly on the web server or in a shared unsandboxed process. That can expose the server and other users' data.
- Do not paste real Telegram bot tokens into this demo.

## Next integration step
Build a secured API + isolated worker service, then connect the dashboard to it using a Vercel environment variable such as `VITE_API_BASE_URL`. Implement real authentication and authorization before allowing public registrations.
