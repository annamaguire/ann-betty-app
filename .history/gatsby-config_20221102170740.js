module.exports = {
  siteMetadata: {
    title: `Anna & Betty Clothing`,
    siteUrl: `https://jamm.matter.design`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ann & Betty`,
        short_name: `Ann & Betty`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: 'src/assets/elephant.JPG',
      },
    },
    'gatsby-plugin-netlify',
  ],
};
