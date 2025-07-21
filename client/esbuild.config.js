
import { build } from 'esbuild';
import path from 'path';

build({
  entryPoints: ['index.jsx'],
  bundle: true,
  outfile: 'build/bundle.js',
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  loader: {
    '.js': 'jsx',
    '.jsx': 'jsx',
    '.png': 'file',
    '.svg': 'file',
    '.css': 'css'
  },
  minify: true,
  sourcemap: false
}).catch(() => process.exit(1))
