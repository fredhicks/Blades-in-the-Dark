#!/usr/bin/env node
const pug = require("pug"),
	fs = require("fs"),
	sass = require("node-sass");

const printOutput = (() => {
	let counter = 0;
	return () => {
		if (counter == 1) {
			console.log("Sheet build completed.");
		} else counter++;
	};
})();

// Build CSS
sass.render({
	file: "Source/blades.scss",
	outputStyle: "compressed",
}, (error, result) => {
	if (!error) {
		const cssOutput = result.css.toString("utf8").replace(/^@charset "UTF-8";\s*/, "").replace(/^\uFEFF/, "");
		fs.writeFile("blades.css", cssOutput, printOutput);
	} else {
		console.log(`An error occured in the CSS build.\n${error.line}:${error.column} ${error.message}.`);
	}
});

// Build HTML
const htmlOutput = pug.renderFile("Source/blades.pug");
fs.writeFile("blades.html", `${htmlOutput}\n`, printOutput);

