const esbuild = require('esbuild');
const {name, version, author, license} = require('../package.json');
const TimeFn = require('../get_time');

// 输出文件添加注释
const banner = `/**
* @${name} v${version}
* (c) 2021-2023 ${author}
* Released under the ${license} License.
* ${TimeFn()}
*/`;

esbuild.buildSync({
    entryPoints: ['src/index.ts'],
    outfile: 'dist/index.cjs',
    bundle: true,
    format: 'cjs',
    minify: true,
    banner: {
        js: banner
    }
});

esbuild.buildSync({
    entryPoints: ['src/index.ts'],
    // outdir: 'dist',
    outfile: 'dist/index.mjs',
    bundle: true,
    format: 'esm',
    minify: true,
    // target: ['es2020','chrome58','firefox57','safari11','edge16','node12']
    // target: ['chrome58']
    banner: {
        js: banner
    }
});

esbuild.buildSync({
    entryPoints: ['src/index.ts'],
    outfile: 'dist/browser.js',
    bundle: true,
    globalName: 'JSFT',
    format: 'iife',
    minify: true,
    banner: {
        js: banner
    }
});
