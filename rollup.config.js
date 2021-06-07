import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import { babel } from "@rollup/plugin-babel";

const production = !process.env.ROLLUP_WATCH;
const legacy = !!process.env.IS_LEGACY_BUILD;

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = require("child_process").spawn(
        "npm",
        ["run", "start", "--", "--dev"],
        {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true,
        }
      );

      process.on("SIGTERM", toExit);
      process.on("exit", toExit);
    },
  };
}

export default {
  input: "src/main.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/dist/main.js",
  },
  plugins: [
    svelte({
      // Emit CSS as "files" for other plugins to process. default is true
      emitCss: false,
      compilerOptions: {
        // enable run-time checks when not in production
        dev: !production,
      },
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
    commonjs(),

    // ror IE11 support
    legacy &&
      babel({
        extensions: [".js", ".mjs", ".html", ".svelte"],
        exclude: ["node_modules/@babel/**", "node_modules/core-js/**"],
        presets: [
          [
            "@babel/preset-env",
            {
              targets: ["> 1%", "Last 2 versions", "IE >= 11"],
              useBuiltIns: "usage",
              corejs: 3,
            },
          ],
        ],
      }),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload("public"),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
