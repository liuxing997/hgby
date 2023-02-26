/**
 * 主题配置
 */
const nav = require("./nav"); // 导航栏
const friendLink = require("./friendLink"); // 友情链接
const valineConfig = require("./valineConfig"); // 评论配置
const sidebar = require("./sidebar"); //  侧边栏
const themeConfig = {
  locales: {
    // 语言配置
    "/": {
      recoLocales: {
        homeBlog: {
          article: "文章", // 默认 文章
          tag: "标签", // 默认 标签
          category: "分类", // 默认 分类
          friendLink: "友链", // 默认 友情链接
        },
        pagation: {
          prev: "上一页",
          next: "下一页",
          go: "前往",
          jump: "跳转至",
        },
      },
    },
  },
  nav: nav, // 导航栏
  valineConfig: valineConfig, // 评论
  sidebar: sidebar, // 侧边栏
  // subSidebar: "auto",
  type: "blog", // 类型
  blogConfig: {
    category: {
      location: 2,
      text: "分类",
    },
    tag: {
      location: 3,
      text: "标签",
    },
    socialLinks: [
      // 信息栏展示社交信息
      {
        icon: "reco-mayun",
        link: "https://gitee.com/liuxing997",
      },
      { icon: "reco-github", link: "https://github.com/liuxing997" },
      {
        icon: "reco-csdn",
        link: "https://blog.csdn.net/ChaunceyLX?spm=1010.2135.3001.5421",
      },
      {
        icon: "reco-jianshu",
        link: "https://www.jianshu.com/u/9421670ee4ed",
      },
      {
        icon: "reco-qq",
        link: "tencent://message/?uin=1747411761&Site=&Menu=yes",
      },
      {
        icon: "reco-mail",
        link: "mailto:1747411761@qq.com",
      },
    ],
  },
  friendLink: friendLink, // 友情链接
  logo: "/logo.svg", // 导航栏左侧logo图标
  // logo: "/logo.png", // 导航栏左侧logo图标
  huawei: true, // 华为文案
  search: true, // 搜索框
  searchMaxSuggestions: 10, // 搜索结果数量
  lastUpdated: "Last Updated", // 最后更新时间
  author: "刘兴", // 作者名
  authorAvatar: "/avatar.png", // 作者头像
  record: "渝ICP备19015847号-2", // ICP 备案号
  recordLink: "https://beian.miit.gov.cn/#/Integrated/recordQuery", // ICP 备案指向链接
  cyberSecurityRecord: "渝公网安备 50011902000430号", // 公安部备案文案
  cyberSecurityLink:
    "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=50011902000430", // 公安部备案指向链接
  startYear: "2022", // 项目开始时间
};

module.exports = themeConfig;
