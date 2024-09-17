import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}', // Ensure pages directory is included
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;


