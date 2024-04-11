import * as esbuild from 'esbuild';
import esbuildVue from 'esbuild-plugin-vue-next';

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

esbuild.build({
    entryPoints: ['src/example/main.js'],
    outdir: 'prod',
    // outfile: 'prod/index.js',
    bundle: true,
    format: 'esm',
    minify: true,
    // target: ['es2020','chrome58','firefox57','safari11','edge16','node12']
    // target: ['chrome58']
    banner: {
        js: banner
    },
    plugins : [
        esbuildVue()
    ]
});
