module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                loose: true,
                modules: false,
                useBuiltIns: 'usage',
                corejs: 3
            }
        ]
    ],
    plugins: [
        ['@babel/plugin-transform-runtime', { corejs: { version: 3, proposals: true } }],
        '@babel/plugin-transform-modules-commonjs'
    ]
};
