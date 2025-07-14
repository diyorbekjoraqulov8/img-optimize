import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default {
    input: 'src/index.js',
    external: ['vue'],
    output: [
        {
            file: 'dist/index.cjs.js',
            format: 'cjs',
            exports: 'default'
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm'
        },
        {
            file: 'dist/index.umd.js',
            format: 'umd',
            name: 'ImgOptimize',
            exports: 'default',
            globals: {
                vue: 'Vue'
            }
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-env'],
            exclude: 'node_modules/**'
        })
    ]
};