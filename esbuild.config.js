const esbuild = require('esbuild');

esbuild.buildSync({
    entryPoints: ['src/index.js'],
    outfile: 'index.js',
    bundle: true,
    format: 'esm',
    minify: true
    // target: ['es2020','chrome58','firefox57','safari11','edge16','node12']
    // target: ['chrome58']
});
