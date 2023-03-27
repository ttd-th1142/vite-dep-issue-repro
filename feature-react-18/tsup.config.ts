import { defineConfig } from 'tsup';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
    format: ['cjs', 'esm'],
    entry: ['./src/index.tsx'],
});
