import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: './src/main.ts',
  output: {
    file: './build/main.js',
    format: 'iife',
    name: 'bundle'
  },
  plugins: [
    resolve(),
    commonjs()
  ]
}
