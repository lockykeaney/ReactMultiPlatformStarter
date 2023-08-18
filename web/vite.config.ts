import {defineConfig, splitVendorChunkPlugin} from 'vite';
import react from '@vitejs/plugin-react';
import {viteCommonjs, esbuildCommonjs} from '@originjs/vite-plugin-commonjs';

import path from 'path';

const EXTENTIONS = [
  '.web.tsx',
  '.tsx',
  '.web.ts',
  '.ts',
  '.web.jsx',
  '.jsx',
  '.web.js',
  '.js',
  '.css',
  '.json',
];

export default () => {
  return defineConfig({
    root: path.join(__dirname, './'),
    define: {
      'process.env': process.env,
      global: {},
    },
    resolve: {
      extensions: EXTENTIONS,
      alias: {
        'react-native': 'react-native-web',
        '@src': path.resolve(__dirname, '../src'),
        '@assets': path.resolve(__dirname, '../src/assets'),
      },
    },
    optimizeDeps: {
      include: ['@react-navigation/native'],
      esbuildOptions: {
        mainFields: ['module', 'main'],
        resolveExtensions: ['.web.js', '.js', '.ts', '.tsx'],
        plugins: [esbuildCommonjs(['@react-navigation/elements'])],
      },
    },
    server: {
      host: 'localhost',
      port: 3001,
    },
    plugins: [viteCommonjs(), react(), splitVendorChunkPlugin()],
  });
};
