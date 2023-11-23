import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'xl': '1600px', // Add your custom breakpoint
      },
      maxWidth: {
        'container': '1600px', // Define your max-width class
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'ponnala': ['Ponnala', 'sans-serif'],
      },
    },
    container:{
      center: true,
    }
  },
  plugins: [],
}
export default config
