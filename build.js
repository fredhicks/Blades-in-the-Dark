#!/usr/bin/env node
const pug = require("pug"),
	fs = require("fs"),
	execSync = require("child_process").execSync;

const cssOutput = execSync("sass --no-source-map --style compressed Source/blades.scss").toString().replace(/^\uFEFF/, "");
fs.writeFileSync("blades.css", cssOutput);

// Build HTML
const htmlOutput = pug.renderFile("Source/blades.pug");
fs.writeFileSync("blades.html", `${htmlOutput}\n`);

console.log("Sheet build completed.");
