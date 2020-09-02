const purgecss = require('@fullhuman/postcss-purgecss')({
      content: ['./_layouts/**/*.html', './*.html'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })

const cssnano = require('cssnano')

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    cssnano({
      preset: 'default'
    }),
    ...process.env.NODE_ENV !== 'dev'
      ? [purgecss]
      : []
  ]
}