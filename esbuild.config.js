const esbuild = require('esbuild');

esbuild.buildSync({
    entryPoints: ['src/index.js'],
    bundle: true,
    outfile: 'dist/index.js',
    format: 'esm',
    minify: true
});
