import babel from 'rollup-plugin-babel';

export default {
	input: 'src/index.js',
	output: { file: 'index.js', format: 'cjs', sourcemap: true, strict: false },
	plugins: [
		babel({
			plugins: [ '@babel/syntax-dynamic-import' ],
			presets: [ ['@babel/env', { targets: { node: 8 } }] ]
		}),
		addHashBang()
	]
};

function addHashBang () {
	return {
		name: 'add-hash-bang',
		renderChunk (code) {
			return `#!/usr/bin/env node\n${code}`;
		}
	};
}
