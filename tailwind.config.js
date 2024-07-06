// tailwind.config.js
// const { nextui } = require('@nextui-org/react');
// eslint-disable-next-line no-undef
const { nextui } = require('@nextui-org/react');

const config = {
  content: [
    // ...
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [nextui()],
};

export default config;
