/**
 * 侧边栏配置
 */
const sidebar = {
  // 侧边栏
  // "/docs/theme-reco/": ["", "theme", "plugin", "api"],
  // "/donate/": ["donate"],
  "/docs/code-tools/": [
    {
      title: "开发工具",
      sidebarDepth: 2,
      collapsable: true,
      children: [
        ["draw", "画图工具"],
        ["doc", "文档工具"],
      ],
    },
  ],
  // 笔试
  "/blogs/written/": [
    {
      title: "笔试",
      sidebarDepth: 2,
      collapsable: false,
      children: [
        ["", "目录"],
        [
          "网易2021校招笔试-Java开发工程师（正式第二批）",
          "网易2021校招笔试-Java开发工程师（正式第二批）",
        ],
        [
          "哔哩哔哩2021校园招聘后端开发方向笔试卷A",
          "哔哩哔哩2021校园招聘后端开发方向笔试卷A",
        ],
        ["【2021】阿里巴巴编程题（2星）", "【2021】阿里巴巴编程题（2星）"],
        [
          "【2021】牛客模考（四模）编程题集合",
          "【2021】牛客模考（四模）编程题集合",
        ],
        [
          "百度2020校招Java研发工程师笔试卷（第一批）",
          "百度2020校招Java研发工程师笔试卷（第一批）",
        ],
      ],
    },
  ],
  // 运维
  "/blogs/dev-ops/": [
    {
      title: "运维",
      sidebarDepth: 2,
      collapsable: false,
      children: [
        ["", "目录"],
        ["阿里云服务器搭建多个Tomcat", "阿里云服务器搭建多个Tomcat"],
      ],
    },
  ],
};

module.exports = sidebar;
