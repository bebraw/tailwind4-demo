import * as path from "node:path";
import tailwindCss from "npm:@tailwindcss/postcss@4.0.0-beta.6";
import postcss from "npm:postcss@8.4.49";

const cwd = Deno.cwd();
const tailwindCssPath = path.join(cwd, "./tailwind.css");

const processor = await postcss([tailwindCss()]);
const tailwindCSS = await Deno.readTextFile(tailwindCssPath);

const { css } = await processor.process(
  tailwindCSS,
  // TODO: Is this correct?
  { from: "" }
);

console.log(css);

/*
return {
  markup: markup.replace("</head>", `<style>${css}</style></head>`),
};
*/
