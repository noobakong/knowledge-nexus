// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
// @ts-ignore
const recentPosts = require("./.docusaurus/docusaurus-plugin-content-blog/daily/blog-post-list-prop-daily.json");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Akong Blog",
  // tagline: '当学生准备好了，老师就会出现',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://akong.fun',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'noobakong', // Usually your GitHub org/user name.
  projectName: 'knowledge-nexus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 'ALL', // 一页展示完
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',  
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'noobakong',
        // logo: {
        //   alt: 'Knowledge Nexus Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mainSidebar',
            position: 'left',
            label: '🚀 Dev',
          },
          {
            type: 'docSidebar',
            sidebarId: 'lifeSidebar',
            position: 'left',
            label: '🏞️ Life',
          },
          {to: '/blog', label: '✍️ Blog', position: 'left'},
          {to: `${recentPosts.items[0].permalink}`, label: '📆 daily', position: 'right'},
          {
            href: 'https://github.com/noobakong/knowledge-nexus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // footer: {
      //   style: 'dark',
        
      //   links: [
      //     {
      //       title: '雷雨白噪音',
      //       items: [
      //         {
      //           html: `<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=180 height=52 src="//music.163.com/outchain/player?type=2&id=32070215&auto=0&height=32"></iframe>`
      //         //   html: `
      //         //   <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
      //         //     <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" width="114" height="51" />
      //         //   </a>
      //         // `,
      //         }
              
      //       ]
      //     },
      //     {
      //       title: '友链',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/facebook/docusaurus',
      //         },
      //       ],
      //     },
      //     // {
      //     //   title: 'More',
      //     //   items: [
      //     //     {
      //     //       label: 'Blog',
      //     //       to: '/blog',
      //     //     },
      //     //     {
      //     //       label: 'GitHub',
      //     //       href: 'https://github.com/facebook/docusaurus',
      //     //     },
      //     //   ],
      //     // },
      //   ],
      //   // copyright: `当学生准备好了，老师就会出现`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    'docusaurus-plugin-less-hash',
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'daily',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'daily',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './daily',
        blogSidebarTitle: '2023',
        blogSidebarCount: 'ALL',
      },
    ],
  ],
};

module.exports = config;
