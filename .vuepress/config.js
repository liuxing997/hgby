const themeConfig = require("./configs/themeConfig/themeConfig"); // 主题配置
const plugins = require("./configs/plugins"); // 插件配置

module.exports = {
  configureWebpack: {
    node: {
      global: true,
      process: true,
    },
  },
  title: "寒光冰月", // 网站名称
  description: "刘兴的个人博客", // 网站介绍
  dest: "public",
  locales: {
    // 语言配置
    "/": {
      lang: "zh-CN",
    },
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    // 百度联盟广告验证
    [
      "meta",
      {
        name: "baidu_union_verify",
        content: "babfd01f3afb096d30f5315f91aa4157",
      },
    ],
    // 添加百度统计代码
    [
      "script",
      {},
      `
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?8cc5b2a2f57965e5d76d6598295c8b8a";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
      `,
    ],
    // 易统计流量变现，http://www.6v4.cn/
    [
      "script",
      {
        src: "//i.6v6.work/v/?uid=388877",
        async: "async",
      },
    ],
    // 添加百度联盟广告的js
    [
      "script",
      {
        defer: "defer",
        async: "async",
        src: "//cpro.baidustatic.com/cpro/ui/cm.js",
      },
    ],
  ],
  theme: "reco", // 主题
  themeConfig: themeConfig, // 主题配置
  markdown: {
    lineNumbers: true,
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"],
    toc: {
      includeLevel: [1, 2, 3, 4],
    },
  },
  plugins: plugins, // 插件
};
