import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Context Tree',
  tagline: 'Explore, analyze, and structure codebases for humans & AI.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://parsabordbar.github.io',
  baseUrl: '/ctx3Docs/',

  organizationName: 'ParsaBordbar',
  projectName: 'ctx3Docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/ParsaBordbar/ctx3Docs/edit/main/docs/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/ctx3.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'ctx3',
      logo: {
        alt: 'ctx3 logo',
        src: 'img/ctx3.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/docs/quickStart',
          label: 'Quick Start',
          position: 'left',
        },
        {
          href: 'https://github.com/parsabordbar/ctx3',
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
            { label: 'Introduction', to: '/docs/intro' },
            { label: 'Quick Start', to: '/docs/quickStart' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub Issues', href: 'https://github.com/parsabordbar/ctx3/issues' },
            { label: 'GitHub Discussions', href: 'https://github.com/parsabordbar/ctx3/discussions' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'GitHub', href: 'https://github.com/parsabordbar/ctx3' },
            { label: 'Releases', href: 'https://github.com/parsabordbar/ctx3/releases' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Context Tree, developed by Parsa Bordbar. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['go', 'bash', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;