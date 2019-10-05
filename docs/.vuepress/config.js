const utils = require('./utils')

module.exports = {
  title: 'fe-notes',
  description: '个人前端笔记',
  base: '/fe-notes/',
  port: 1001,
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
        text: '基础',
        items: [
          { text: 'HTML&CSS', link: '/css/' },
          { text: 'JS', link: '/js/' }
        ]
      },
      {
        text: '库',
        items: [
          { text: 'Vue2.x', link: '/vue/' },
          { text: 'webpack4.x', link: '/webpack4/' },
          { text: 'TypeScript', link: '/typescript/' },
          { text: 'Vue3.x', link: '/vue-3.x/' }
        ]
      },
      {
        text: '后台',
        items: [
          { text: 'NodeJS', link: '/nodejs/' },
          { text: 'Linux', link: '/linux/' }
        ]
      },
      {
        text: '算法',
        items: [
          { text: '数据结构', link: '/algorithm/' },
          { text: 'LeetCode', link: '/leetcode/' }
        ]
      },
      {
        text: '网络',
        items: [
          { text: 'TCP/IP', link: '/tcp/' },
          { text: 'HTTP(S)', link: '/http/' }
        ]
      }
    ],
    sidebar: utils.inferSiderbars(),
    lastUpdated: '上次更新',
    repo: 'ForlornLily/fe-notes',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    sidebarDepth: 2,
    search: true
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
