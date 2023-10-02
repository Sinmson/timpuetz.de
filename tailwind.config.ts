import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      "mono": ['PT Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      "sans": ['ui-sans-serif','system-ui','-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans','sans-serif','"Apple Color Emoji"','"Segoe UI Emoji"','Segoe UI Symbol','"Noto Color Emoji"']
    },
    extend: {      
    },
  },
  plugins: [],
}
export default config
