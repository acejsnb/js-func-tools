const esbuild = require('esbuild');
const {name, version, author, license} = require('../package.json');
const TimeFn = require('../get_time');

// 输出文件添加注释
const banner = `/**
* @${name} v${version}
* (c) 2021-2022 ${author}
* Released under the ${license} License.
* ${TimeFn()}
*/`;

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
