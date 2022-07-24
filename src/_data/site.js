module.exports = {
  title: 'Eleventy Web Starter',
  description: 'bondiano.io site',
  url: 'https://bondiano.io',
  author: 'Vassiliy Kuzenkov',
  meta_data: {
    twitter: '@b0ndiano',
    opengraph_default: '/static/opengraph-default.jpg',
  },
  env: process.env.ELEVENTY_ENV === 'production',
};
