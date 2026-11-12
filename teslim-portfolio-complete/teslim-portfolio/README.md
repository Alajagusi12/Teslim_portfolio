# Abdulwahab Teslim Portfolio

1. Double-click start.bat (or run: npm install, then npm run dev)
2. Open http://localhost:3000
3. Before deploying, run: npm run build
4. Deploy: push to GitHub; Vercel redeploys automatically.

## Real screen recordings (GIFs)
The project cards use animated previews by default. To show a real recording:
1. Record your screen (Windows: ScreenToGif is free) and save as public/projects/nexus.gif
2. In src/data/projects.ts add to that project:
   media: { type: "image", src: "/projects/nexus.gif", alt: "Nexus demo" }
   (for an .mp4 use type: "video")

## Automated tests for this site
npx playwright install   (one time)
npm run test:e2e         (starts the site and runs the tests at desktop and 768px)

## To finish
- Replace the Nexus and EvalOps "source" links in src/data/projects.ts with the exact repo URLs.
- Case study text is a draft; edit it to match your code.
