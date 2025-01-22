import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', ],
      'serif': ['ui-serif', 'Georgia', ],
      'mono': ['ui-monospace', 'SFMono-Regular', ],
      'display': ['Oswald', ],
      'body': ['"Open Sans"', ],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        flash: 'flash 1s ease-in-out infinite',  // Add the custom "flash" animation
        },
        keyframes: {
        flash: {
          '0%': { opacity: '1', color: '#243c5a' },  // Initial color and opacity
          '50%': { opacity: '0.5', color: '#f43f5e' },  // Halfway - color and opacity change
          '100%': { opacity: '1', color: '#243c5a' },  // Final color and opacity
        }
        },
    },
  },
  plugins: [],
};
export default config;
