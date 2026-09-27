import * as esbuild from 'esbuild';

const isWatch = process.argv.includes('--watch');

const context = await esbuild.context({
  entryPoints: ['src/glass-terrarium-card.ts'],
  bundle: true,
  outfile: 'dist/glass-terrarium-card.js',
  minify: true,
  target: ['es2021'],
  format: 'esm',
});

if (isWatch) {
  await context.watch();
  console.log('⚡ Watching for changes...');
} else {
  await context.rebuild();
  await context.dispose();
  console.log('✅ Build complete: dist/glass-terrarium-card.js');
}