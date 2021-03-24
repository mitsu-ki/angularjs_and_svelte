import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";

export default {
  plugins: [
    svelte({
      css: false,
      emitCss: false,
      compilerOptions: {
        customElement: true,
      },
    }),
    commonjs(),
    babel({
      extensions: [".js", ".mjs", ".html", ".svelte"],
      include: ["src/**", "node_modules/svelte/**"],
    }),
    resolve({ browser: true }),
  ],
  input: "src/main.js",
  output: {
    dir: "public/dist",
    sourcemap: true,
    output: "iife",
  },
};
