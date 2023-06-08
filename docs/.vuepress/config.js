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
        href: '/favicon.ico',
      },
    ],
  ],
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '基础',
        items: [
          { text: 'HTML&CSS', link: '/css/' },
          { text: 'JavaScript', link: '/js/' },
        ],
      },
      { text: 'jQuery', link: '/jquery/' },
      {
        text: 'Vue',
        items: [
          { text: 'Vue2.x', link: '/vue/' },
          { text: 'Vue Router', link: '/vue-router/' },
          { text: 'Vuex', link: '/vuex/' },
          { text: 'Vue3.x', link: '/vue-3.x/' },
        ],
      },
      {
        text: 'React',
        items: [
          { text: 'React', link: '/react/' },
          { text: 'Transition', link: '/transition/' },
          { text: 'React Router', link: '/react-router/' },
          { text: 'Next', link: '/nextjs/' },
        ],
      },
      {
        text: '工程化',
        items: [
          { text: 'webpack4.x', link: '/webpack4/' },
          { text: 'TypeScript', link: '/typescript/' },
          { text: 'Redux', link: '/redux/' },
          { text: 'Jest', link: '/jest/' },
          { text: 'ESLint', link: '/eslint/' },
          { text: 'Testing Library', link: '/testing-library/' },
        ],
      },
      {
        text: 'NodeJS',
        items: [
          { text: 'NodeJS', link: '/nodejs/' },
          { text: 'npm', link: '/npm/' },
          { text: 'Yarn', link: '/yarn/' },
          { text: 'Electron', link: '/electron/' },
        ],
      },
      {
        text: '计算机通识',
        items: [
          {
            text: '《计算机科学精粹》',
            link: '/distilled/',
          },
          {
            text: '算法',
            items: [
              { text: '数据结构', link: '/algorithm/' },
              { text: 'LeetCode', link: '/leetcode/' },
            ],
          },
          {
            text: '网络',
            items: [
              { text: 'TCP/IP', link: '/tcp/' },
              { text: 'HTTP(S)', link: '/http/' },
              { text: '网络综合', link: '/network/' },
            ],
          },
          {
            text: '操作系统',
            items: [
              { text: 'Linux', link: '/linux/' },
              { text: 'Docker', link: '/docker/' },
            ],
          },
          {
            text: '设计模式',
            items: [{ text: '常见', link: '/design/' }],
          },
        ],
      },
      {
        text: '其他',
        items: [
          { text: 'Handlebars', link: '/handlebars/' },
          { text: '踩坑', link: '/trick/' },
          { text: 'Git', link: '/git/' },
          { text: '文案排版', link: '/copywriting/' },
          { text: '网站', link: '/repository/' },
          { text: '协议', link: '/license/' },
          { text: 'Photoshop', link: '/ps/' },
        ],
      },
    ],
    sidebar: utils.inferSiderbars(),
    lastUpdated: '上次更新',
    repo: 'ForlornLily/fe-notes',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    sidebarDepth: 2,
    search: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public',
      },
    },
  },
  ga: 'UA-109340118-1',
  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-include'))
    },
  },
}
