module.exports = {
  plugins: [
    require('autoprefixer')(),
    require('postcss-sort-media-queries')(),
  ],
  options: {
    postcssOptions: {
      plugins: {
        'postcss-preset-env': {
          browsers: 'last 2 versions',
        },
      },
    },
  },
};
