import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

const baseConfig = {
	input: 'src/entry.js',
	plugins: {
		preVue: [
			replace({
				'process.env.NODE_ENV': JSON.stringify('production'),
			}),
			commonjs(),
		],
		vue: {
			css: true,
			template: {
				isProduction: true,
			},
		},
		postVue: [
			buble(),
		],
	},
};

// Customize configs for individual targets
const buildFormats = [];
const esConfig = {
	...baseConfig,
	output: {
		file: 'dist/vue-naira-input.esm.js',
		format: 'esm',
		exports: 'named',
	},
	plugins: [
		...baseConfig.plugins.preVue,
		vue(baseConfig.plugins.vue),
		...baseConfig.plugins.postVue,
	],
};
buildFormats.push(esConfig);

// Export config
export default buildFormats;
