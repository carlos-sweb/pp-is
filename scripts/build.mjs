// Builds the published dist/ artifacts from src/ using Bun's bundler.
// bun build only supports one format/target per invocation (esm/cjs/iife),
// so each artifact is built with its own Bun.build() call, same idea as the
// previous rollup.config.mjs.

const builds = [
	{
		label: "ESM (Node import / bundlers)",
		entrypoints: ["./src/pp-is.js"],
		format: "esm",
		target: "browser",
		outfile: "./dist/pp-is.mjs"
	},
	{
		label: "CJS (Node require)",
		entrypoints: ["./src/pp-is.js"],
		format: "cjs",
		target: "node",
		// bun's ESM->CJS interop wraps a lone default export as
		// `module.exports.default`; unwrap it so require("pp-is") still
		// returns the ppIs object directly.
		footer: "module.exports = module.exports.default;",
		outfile: "./dist/pp-is.cjs"
	},
	{
		label: "Browser global <script> tag",
		entrypoints: ["./src/browser.js"],
		format: "iife",
		target: "browser",
		outfile: "./dist/pp-is.min.js"
	}
]

for (const { label, outfile, ...options } of builds) {
	const result = await Bun.build({ ...options, minify: true })
	if (!result.success) {
		console.error(`build failed: ${label}`)
		for (const message of result.logs) console.error(message)
		process.exit(1)
	}
	await Bun.write(outfile, await result.outputs[0].text())
	console.log(`built ${label} -> ${outfile}`)
}
