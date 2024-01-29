import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import  { themes } from 'prism-react-renderer';


const config: Config = {
  title: 'Akong Blog',
  tagline: '当学生准备好了，老师就会出现',
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
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: false,
          postsPerPage: 'ALL', // 一页展示完
          blogSidebarTitle: ' ',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'noobakong',
      // logo: {
      //   alt: 'Knowledge Nexus Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        { to: '/blog', label: '✍️ Blog', position: 'left' },
        // { to: '/daily/2023-07', label: '📆 Daily', position: 'left' },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'mainSidebar',
        //   position: 'right',
        //   label: '🚀 Dev',
        // },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'lifeSidebar',
        //   position: 'right',
        //   label: '🏞️ Life',
        // },
        {
          href: 'https://github.com/noobakong/knowledge-nexus',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
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
      theme: themes.github,
      darkTheme: themes.dracula,
    },
  } satisfies Preset.ThemeConfig,

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
        blogSidebarTitle: '2024',
        blogSidebarCount: 'ALL',
        sortPosts: 'descending',
      },
    ],
  ],
};

module.exports = config;
