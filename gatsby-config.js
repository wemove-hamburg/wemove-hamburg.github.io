require('dotenv').config({
  path: '.env'
});

module.exports = {
  siteMetadata: {
    siteTitle: 'WeMove Hamburg',
    siteTitleAlt: 'WeMove Hamburg - Mobilitätsbericht 2020',
    siteUrl: 'https://wemove.hamburg',
    siteLanguage: 'de',
    siteImage: '/banner.jpg',
    author: '@ppult'
  },
  plugins: [
    {
      resolve: '@lekoarts/gatsby-theme-minimal-blog',
      options: {
        navigation: [
          {
            title: 'Über uns',
            slug: '/ueber-uns'
          }
        ],
        externalLinks: []
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID
      }
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'WeMove Hamburg - Mobilitätsbericht 2020 ',
        short_name: 'WeMove Hamburg',
        description:
          'Der Bericht zur Lage der Mobilität in Hamburg, hat eine objektive Darstellung zum Ziel. Jeder ist eingeladen zu diesem Bericht beizutragen und seine Sicht hinzuzufügen. Er dient der Grundlage und Gegenüberstellung, nicht der Meinungsmache.',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#6B46C1',
        display: 'standalone',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify'
  ]
};
