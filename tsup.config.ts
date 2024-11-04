import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*.ts'],
  format: ['esm'],
  outDir: 'out',
  clean: true,
  sourcemap: true,
  bundle: false,
  onSuccess: 'resolve-tspaths --out out',
});
