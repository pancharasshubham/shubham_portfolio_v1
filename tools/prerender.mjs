import { existsSync, promises as fs } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'vite';

const routes = [
  '/',
  '/projects/inspirex',
  '/projects/saascope-api',
  '/projects/ai-usage-policy-generator',
  '/projects/real-estate-business-website',
];

const rootDir = process.cwd();
const clientOutput = path.join(rootDir, 'dist');
const serverOutput = path.join(rootDir, '.prerender');

function outputPathForRoute(route) {
  return route === '/'
    ? path.join(clientOutput, 'index.html')
    : path.join(clientOutput, route.slice(1), 'index.html');
}

try {
  await build({
    build: {
      outDir: clientOutput,
      emptyOutDir: true,
    },
  });

  await build({
    build: {
      ssr: 'src/entry-server.jsx',
      outDir: serverOutput,
      emptyOutDir: true,
    },
  });

  const serverEntry = path.join(serverOutput, 'entry-server.js');
  const { render } = await import(pathToFileURL(serverEntry).href);
  const template = await fs.readFile(path.join(clientOutput, 'index.html'), 'utf8');

  for (const route of routes) {
    const { appHtml, head } = render(route);
    const document = template
      .replace('<!--app-head-->', head)
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    const outputPath = outputPathForRoute(route);

    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, document, 'utf8');
  }
} finally {
  if (existsSync(serverOutput)) {
    await fs.rm(serverOutput, { recursive: true, force: true });
  }
}
