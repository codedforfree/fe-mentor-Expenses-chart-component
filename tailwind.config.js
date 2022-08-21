module.exports = {
  content: ['./src/**/*.njk', './src/**/*.md',],
  theme: {
    extend: {
      colors: {
        'cyan': 'hsl(186, 34%, 60%)',
        'soft-red': 'hsl(10, 79%, 65%)',
        'medium-brown': 'hsl(28, 10%, 53%)',
        'dark-brown': 'hsl(25, 47%, 15%)',
        'cream': 'hsl(27, 66%, 92%)',
        'orange': 'hsl(33, 100%, 98%)',
      },
      fontFamily: {
        sans: ['DM Sans']
      }
    },
  },
  plugins: [],
}
