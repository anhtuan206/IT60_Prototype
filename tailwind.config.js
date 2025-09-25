export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors mapped to standard Tailwind naming
        brown: {
          50: '#FAF0E6',   // accent-beige
          100: '#F5E6D3',
          200: '#DEB887',  // accent-tan
          300: '#D2B48C',  // light-brown
          400: '#CD853F',  // muted-orange
          500: '#A0522D',  // primary-brown
          600: '#8B4513',  // warm-brown
          700: '#5D4037',  // dark-brown/neutral-text
          800: '#4A2C20',
          900: '#3E2723',
        },
        amber: {
          500: '#DAA520',  // warm-gold
        },
        // Legacy compatibility
        'primary-brown': '#A0522D',
        'primary-blue': '#A0522D',
        'accent-beige': '#FAF0E6',
        'accent-tan': '#DEB887',
        'warm-brown': '#8B4513',
        'light-brown': '#D2B48C',
        'dark-brown': '#5D4037',
        'warm-gold': '#DAA520',
        'muted-orange': '#CD853F',
        'neutral-text': '#5D4037',
      }
    }
  }
}