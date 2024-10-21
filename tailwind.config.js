import {
  isolateInsideOfContainer,
  scopedPreflightStyles,
} from "tailwindcss-scoped-preflight";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx,js,jsx,html,css}"],
  theme: {
    extend: {},
  },
  plugins: [
    scopedPreflightStyles({
      isolationStrategy: isolateInsideOfContainer("some-prefix"),
    }),
  ],
};
