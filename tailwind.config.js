export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary-brown': '#A0522D',
        'primary-blue': '#A0522D', // Keep for compatibility, but use brown
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