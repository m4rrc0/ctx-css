import { build as bunBuild, plugin as bunPlugin } from "bun";

const ELEVENTY_RUN_MODE = process.env.ELEVENTY_RUN_MODE;
const NODE_ENV = process.env.NODE_ENV;
// If NODE_ENV is production or ELEVENTY_RUN_MODE is build, minify
const MINIFY = NODE_ENV === "production" || (!NODE_ENV && ELEVENTY_RUN_MODE === "build");

// TODO: plugin not working. May be because 
// const cssTransformPlugin = {
//   name: "css-transform",
//   setup(build) {
//     // const { compile } = await import("svelte/compiler");

//     build.onLoad({ filter: /\.css$/ }, async (args) => {
//       console.log({ args })
//       const path = args.path
//       const file = await Bun.file(path).text();
//       console.log({ file })
//       const contents = `p { color: red; }\n${file}`
//       return {
//         contents,
//         loader: "css",
//       }
//     })
//   }
// }

// bunPlugin(cssTransformPlugin);

const cssBuildPlugin = async function() {
    await bunBuild({
      entrypoints: ['./src/styles/index.css'],
      outdir: './dist',
      naming: '[name].css',
      // plugins: [cssTransformPlugin],
      minify: MINIFY,
    });
}

export const config = {
  dir: {
    input: "src",
    output: "dist"
  }
};

export default async function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/**/*.css");
    await eleventyConfig.addPlugin(cssBuildPlugin);

    eleventyConfig.addWatchTarget("src/**/*.css", { resetConfig: true });
};

