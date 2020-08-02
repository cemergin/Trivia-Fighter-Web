module.exports = {
  siteMetadata: {
    title: `Trivia Fighter Turbo`,
    description: `Are you ready to fulfill your destiny and become the greatest trivia fighter of all time? Let's find out!`,
    author: `@cemergin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
