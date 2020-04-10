module.exports = {
  title: 'QFusion Docs',
  description: 'QFusion 文档管理平台',
  markdown: {
    lineNumbers: true,
  },
  base: '/docs/',
  theme: 'antdocs',
  themeConfig: {
    nav: [
      {
        text: '文档',
        link: '/document/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/qfusiondocs/docs',
      },
    ],
    sidebar: [
      {
        title: 'Docs',
        collapsable: false,
        children: [
          '/document/',
          '/document/test',
          '/document/browser-compatibility',
          '/document/html-and-static-assets',
          '/document/css',
          '/document/webpack',
          '/document/mode-and-env',
          '/document/linter',
          '/document/ui-library',
          '/document/router',
          '/document/deployment',
          '/document/typescript',
          '/document/unittest',
          '/document/data-fetch',
          '/document/technology-selection-and-restraint',
        ],
      },
    ],
    lastUpdated: '上次更新时间',
  },
}
