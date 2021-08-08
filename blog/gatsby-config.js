/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Blog`,
    owner: 'Blog 2',
    siteUrl: `https://blog.fues.us/`,
    description: `a guide to %TOPICS%`,
    topics: [
      'Internet of Things (IoT)',
      'Cloud Computing',
      'NextJS',
      'React',
      'Machine Learning'
    ],
    menu: [
      {
        name: 'About',
        path: '/about'
      },
      {
        name: 'Tags',
        path: '/tags'
      },
    ],
    footerMenu: [
      {
        name: 'About',
        path: '/about'
      },
      {
        name: 'Tags',
        path: '/tags'
      },
      {
        name: 'RSS',
        path: '/rss.xml'
      }
    ],
    search: true,
    author: {
      name: `Naval Monga`,
      // <b>&copy;&nbsp;2018-${new Date().getFullYear()}.</b>
      description: `
        <h2>IoT<span>Spy</span>&trade;&nbsp;Blog</h2>
        <p>&copy;&nbsp;${new Date().getFullYear()}</p>
        <p>Audit and protect smart-home systems, networks, and data.</p>
        <p>Learn more</p>
        <br/>
        <br/>
        <a href="https://github.com/fuesvc/blog" rel="noopener" target="_blank">Contribute&nbsp;&rarr;</a>`,
      social: {
        youtube: ``,
        facebook: ``,
        twitter: `https://twitter.com/iotspy`,
        linkedin: ``,
        instagram: ``,
        github: `https://github.com/iotspy`,
        twitch: ``,
      }
    }
  },
  plugins: [
    {
      resolve: '@nehalist/gatsby-theme-nehalem',
      options: {
        manifest: {
          name: `Fues Blog - Gatsby Theme`,
          short_name: `blog`,
          start_url: `/`,
          background_color: `#a4cbb8`,
          theme_color: `#121212`,
          display: `minimal-ui`,
          icon: `${__dirname}/content/assets/images/android-chrome-512x512.png`
        }
      }
    }
  ]
};

