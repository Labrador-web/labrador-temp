module.exports = {
  title: 'Labrador',
  tagline: 'Do great science. Together',
  url: 'https://Labrador-org.github.io',
  baseUrl: '/labrador-website/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Labrador-org', // Usually your GitHub org/user name.
  projectName: 'labrador-website', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Labrador',
      logo: {
        alt: 'Labrador Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'research_notes',
          activeBasePath: 'testpage',
          label: 'Research Papers',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Labrador-org',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Style Guide',
        //       to: 'docs/',
        //     },
        //     {
        //       label: 'Second Doc',
        //       to: 'docs/doc2/',
        //     },
        //   ],
        // },
        {
          title: 'Community',
          items: [
            {
              label: 'Add papers',
              href: 'mailto:shauwnak.joshi@gmail.com',
            },
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/docusaurus',
            // },
            // {
            //   label: 'Twitter',
            //   href: 'https://twitter.com/docusaurus',
            // },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Labrador-org',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Labrador Org. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Labrador-org/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Labrador-org',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
