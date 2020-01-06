import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'styled-components': 'styled',
};

export default {
  input: 'src/index.tsx',
  output: {
    file: 'build/main.js',
    format: 'iife',
    name: 'bundle',
    globals,
  },
  plugins: [
    resolve({
      extensions,
    }),
    babel({
      exclude: 'node_modules/**',
      extensions,
    }),
    // typescript(),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react-is/index.js': [
          'isElement',
          'isValidElementType',
          'ForwardRef',
        ],
        'node_modules/react/index.js': [
          'Children',
          'Component',
          'PureComponent',
          'PropTypes',
          'createElement',
          'Fragment',
          'cloneElement',
          'StrictMode',
          'createFactory',
          'createRef',
          'createContext',
          'isValidElement',
          'isValidElementType',
        ],
        'node_modules/react-dom/index.js': [
          'render',
          'hydrate',
        ],
      },
    })
  ],
  external: Object.keys(globals),
}
