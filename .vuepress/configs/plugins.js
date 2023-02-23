/**
 * 插件配置
 */
const plugins = [
  // 鼠标光标
  [
    "cursor-effects",
    {
      size: 2, // 大小
      shape: "star", // ['star' | 'circle'], 类型
      zIndex: 999999999, // 位置
    },
  ],
  // 动态标题配置
  [
    "dynamic-title",
    {
      showIcon: "/favicon.ico",
      showText: "(/≧▽≦/)咦！客官欢迎回来~",
      hideIcon: "/favicon.ico",
      hideText: "(●—●)喔哟，客官再看一会嘛~",
      recoverTime: 2000,
    },
  ],
  // 分页
  [
    "@vuepress-reco/vuepress-plugin-pagation",
    {
      perPage: 10,
    },
  ],
  // 进度条
  ["@vuepress/nprogress"],
  // 代码复制
  ["vuepress-plugin-code-copy", true],
  // 代码复制弹窗插件
  // [
  //   "vuepress-plugin-nuggets-style-copy",
  //   {
  //     copyText: "复制代码",
  //     tip: {
  //       content: "复制成功",
  //     },
  //   },
  // ],
  // 著作权信息
  [
    "copyright",
    {
      authorName: "刘兴", // 选中的文字将无法被复制
      minLength: 10, // 如果长度超过  10 个字符
    },
  ],
  // 打赏
  // [
  //   "vuepress-plugin-sponsor",
  //   {
  //     theme: "simple",
  //     alipay: "/pay/aliPay.png",
  //     wechat: "/pay/weChat.png",
  //     qq: "/pay/qqPay.png",
  //     paypal: "https://paypal.me/liuxing98",
  //     duration: 2000,
  //   },
  // ],
  // 公告栏
  [
    "@vuepress-reco/vuepress-plugin-bulletin-popover",
    {
      // width: "300px", // 默认 260px
      title: "公告",
      body: [
        {
          type: "title",
          content: "欢迎关注公众号 🎉🎉🎉",
          style: "text-aligin: center;",
        },
        {
          type: "image",
          src: "/gzh.png",
          style: "width:100px;height:100px;",
        },
      ],
      footer: [
        {
          type: "button",
          text: "打赏",
          link: "/docs/donate/donate.html",
          style: "background-color:orange;",
        },
      ],
    },
  ],
  // 看板娘
  [
    "@vuepress-reco/vuepress-plugin-kan-ban-niang",
    {
      theme: [
        "haru1",
        "blackCat",
        "whiteCat",
        "haru2",
        "haruto",
        "koharu",
        "izumi",
        "shizuku",
        "wanko",
        "miku",
        "z16",
      ],
    },
  ],
];

module.exports = plugins;
