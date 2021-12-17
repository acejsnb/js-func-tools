module.exports = {
    root: true,
    env: {
        'browser': true,
        'commonjs': true,
        'es6': true,
        'node': true
    },
    settings: {
        polyfills: ['Promise', 'URL'],
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    },
    plugins: [
        'babel',
        '@typescript-eslint',
        'import'
    ],
    extends: [
        'eslint:recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module'
    },
    rules: {
        'import/no-dynamic-require': 0,
        'import/no-extraneous-dependencies': 0,
        'import/no-named-as-default': 0,
        'import/no-unresolved': [2],
        'import/no-webpack-loader-syntax': 0,
        'import/prefer-default-export': 0,
        semi: 2,
        'arrow-body-style': [2, 'as-needed'], // 箭头函数
        'class-methods-use-this': 0, // 强制类方法使用 this
        // 缩进Indent with 4 spaces
        indent: [2, 4],
        'no-console': 0, // 不禁用console
        'no-debugger': 2, // 禁用debugger
        'no-shadow': 0,
        'comma-dangle': [2, 'never'],
        'no-use-before-define': 'off',
        'import/extensions': ['error', { ts: 'never' }],
        quotes: [1, 'single'],
        'eol-last': 2,
        'no-else-return': 2,
        'no-empty': 2,
        eqeqeq: 2,
        'no-multiple-empty-lines': [1, { max: 2 }],
        'no-trailing-spaces': 1,
        'key-spacing': [0, { beforeColon: false, afterColon: true }],
        'padded-blocks': 0,
        'no-unused-vars': 0,
        'no-dupe-else-if': 0,
        'no-control-regex': 0,
        'no-nested-ternary': 0,
        'no-plusplus': 0,
        'no-param-reassign': 1
    }
};
