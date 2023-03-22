/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1890FF',
        'txt-black': '#000000D9',
        'gray-1': '#fafafa',
        'gray-2': '#f5f5f5',
        'gray-3': '#f0f0f0',
        'gray-4': '#d9d9d9',
        'gray-5': '#bfbfbf',
        'gray-6': '#8c8c8c',
        'gray-7': '#595959',
        'gray-8': '#434343',
        'gray-9': '#262626',
        'gray-10': '#1f1f1f',
        //
        spinner: 'rgba(0, 0, 0, 0.2)',
        'bd-modal': 'rgba(0, 0, 0, .06)',
      },
      borderRadius: {
        round: '40px',
      },
      fontSize: {
        h1: '38px',
        h2: '30px',
        h3: '24px',
        h4: '20px',
        h5: '16px',
      },
      lineHeight: {
        h1: 1.23,
        h2: 1.35,
        h3: 1.35,
        h4: 1.4,
        h5: 1.5,
      },
      minWidth: {
        'min-modal': '320px',
      },
      maxWidth: {
        'mobile': '420px',
        'max-modal': '560px',
      },
      minHeight: {
        'min-modal': '320px',
      },
      boxShadow: {
        'notification': '0 5px 8px rgba(0, 0, 0, 0.08)',
      },

      // animations
      animation: {
        blowUp: 'blowUp .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards'
      },
      keyframes: {
        blowUp: {
          '0%': { transform: 'scale(0)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        }
      }
    },
  },
  plugins: [],
}
