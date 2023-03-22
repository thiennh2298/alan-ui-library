import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy";

const packageJson = require("./package.json");

export default {
  input: "./src/index.tsx",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ browser: true }),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss(),
    copy({
      targets: [
        {
          src: "src/styles/base.scss",
          dest: "dist",
          rename: "dist/styles/base.scss"
        },
        {
          src: "tailwindcss/tailwind.css",
          dest: "dist",
          rename: "tailwindcss/tailwind.css"
        }
      ],
    }),
  ],
};
