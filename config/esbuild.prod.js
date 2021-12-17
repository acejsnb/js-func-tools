const esbuild = require('esbuild');
const esbuildVue = require('esbuild-plugin-vue-next');

const {name, version, author, license} = require('../package.json');
const TimeFn = require('../get_time');

// 输出文件添加注释
const banner = `/**
* @${name} v${version}
* (c) 2021-2022 ${author}
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
