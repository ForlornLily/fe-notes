const utils = require('./utils')

module.exports = {
  title: 'fe-notes',
  description: '个人前端笔记',
  base: '/fe-notes/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '网站/书籍/库',
        link: '/repository/'
      },
      {
        text: 'HTML&CSS',
        link: '/css/'
      },
      {
        text: 'JS',
        link: '/js/'
      },
      {
        text: 'Vue',
        link: '/vue/'
      },
      /* {
        text: 'NodeJS',
        link: '/nodejs/'
      },*/
      {
        text: '算法',
        link: '/leetcode/'
      }
    ],
    sidebar: utils.inferSiderbars(),
    lastUpdated: '上次更新',
    repo: 'ForlornLily/fe-notes',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    sidebarDepth: 2,
    search: false
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  ga: 'UA-109340118-1',
  markdown: {
    config: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-include'))
    }
  }
}
