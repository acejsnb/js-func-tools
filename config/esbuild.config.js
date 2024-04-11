import * as esbuild from 'esbuild';
import pkg from '../package.json' assert { type: 'json' };
import TimeFn from '../get_time.js';

const {name, version, author, license} = pkg;

// 输出文件添加注释
const banner = `/**
* @${name} v${version}
* (c) 2021-2024 ${author}
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
