import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    watch: false,
    isolate: false,
    environment: 'node',
    maxWorkers: '50%',
    deps: {
      interopDefault: false,
    },
    include: ['src/**/*.unit.test.ts'],
  },
  plugins: [swc.vite()],
});
