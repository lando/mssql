module.exports = {
  lang: 'en-US',
  title: 'Lando',
  description: 'Lando MSSQL Plugin Documentation',
  base: '/mssql/',
  head: [
    ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1'}],
    ['link', {rel: 'icon', href: '/mssql/favicon.ico', size: 'any'}],
    ['link', {rel: 'icon', href: '/mssql/favicon.svg', type: 'image/svg+xml'}],
    ['link', {rel: 'preconnect', href: '//fonts.googleapis.com'}],
    ['link', {rel: 'preconnect', href: '//fonts.gstatic.com', crossorigin: true}],
    ['link', {rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Lexend:wght@500&display=swap'}],
  ],
  theme: '@lando/vuepress-theme-default-plus',
  themeConfig: {
    landoDocs: true,
    logo: '/images/icon.svg',
    docsDir: 'docs',
    docsBranch: 'main',
    repo: 'lando/mssql',
    sidebarHeader: {
      enabled: true,
      title: 'MSSQL Plugin',
      icon: '/images/mssqlicon.png',
    },
    sidebar: [
      {
        text: 'Getting Started',
        link: '/index.md',
      },
      '/config.md',
      '/support.md',
      {text: 'Examples', link: 'https://github.com/lando/mssql/tree/main/examples'},
      {text: 'Release Notes', link: 'https://github.com/lando/mssql/releases'},
      '/development.md',
    ],
  },
};
