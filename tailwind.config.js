/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0c10',
        surface: '#12161c',
        paper: '#f2f0ea',
        gold: '#d9a94e',
        goldSoft: '#f0cf8a',
        mute: '#9aa0a8',
      },
      fontFamily: {
        display: ['"Anton"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        clamp1: 'clamp(2.5rem, 6.5vw, 5.25rem)',
        clamp2: 'clamp(2rem, 5.5vw, 4rem)',
        clamp3: 'clamp(1.25rem, 2.5vw, 1.75rem)',
      },
    },
  },
  plugins: [],
}
