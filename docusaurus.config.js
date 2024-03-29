// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mask Docs',
  tagline: 'Your Portal to the New, Open Internet.',
  url: 'https://docs.mask.io',
  baseUrl: process.env.NODE_EVN === 'development' ? '/Mask-Docs/' : '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
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
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      navbar: {
        title: 'Mask Docs',
        logo: {
          alt: 'Mask Network',
          src: 'img/mask.png',
          srcDark: 'img/mask-dark.png'
        },
        items: [
          {
            type: 'doc',
            docId: 'setup',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/DimensionDev/Maskbook',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/setup',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/realMaskNetwork',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/masknetwork',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/cKGW45g',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/DimensionDev',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Mask.io Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
