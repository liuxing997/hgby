/**
 * 导航栏配置
 */
const nav = [
  {
    text: "首页",
    link: "/",
    icon: "reco-home",
  },
  {
    text: "开发工具",
    link: "/docs/code-tools/",
    icon: "reco-home",
    items: [
      {
        text: "画图工具",
        link: "/docs/code-tools/draw",
      },
      {
        text: "文档工具",
        link: "/docs/code-tools/doc",
      },
    ],
  },
  {
    text: "时间线",
    link: "/timeline/",
    icon: "reco-date",
  },
  {
    text: "Code Sheep",
    icon: "reco-api",
    items: [
      {
        text: "画图工具",
        items: [
          {
            text: "ProcessOn",
            link: "https://www.processon.com/",
          },
          {
            text: "draw.",
            link: "https://app.diagrams.net/",
          },
          {
            text: "思维导图mindline",
            link: "http://www.mindline.cn/webapp/",
          },
        ],
      },
      {
        text: "文档笔记工具",
        items: [
          {
            text: "ProcessOn",
            link: "https://www.processon.com/",
          },
          {
            text: "draw.",
            link: "https://app.diagrams.net/",
          },
          {
            text: "思维导图mindline",
            link: "http://www.mindline.cn/webapp/",
          },
        ],
      },
    ],
  },
  {
    text: "在线素材库",
    items: [
      {
        text: "Emoji表情搜索",
        link: "https://emoji.svend.cc/",
      },
      {
        text: "Emoji表情包下载",
        link: "https://emojiisland.com/",
      },
      {
        text: "表情包在线网站",
        link: "https://fabiaoqing.com/",
      },
      {
        text: "免费透明背景图片素材",
        link: "http://pngimg.com/",
      },
      {
        text: "ICON图标在线下载",
        link: "https://www.iconfinder.com/",
      },
      {
        text: "open source icons",
        link: "https://feathericons.com/",
      },
      {
        text: "阿里巴巴矢量图标库",
        link: "https://www.iconfont.cn/",
      },
      {
        text: "免费PNG图片库",
        link: "https://pluspng.com/",
      },
      {
        text: "Pixabay图片素材库",
        link: "https://pixabay.com/zh/",
      },
      {
        text: "Unsplash图片素材库",
        link: "https://unsplash.com/",
      },
      {
        text: "Pexels图片素材库",
        link: "http://www.pexels.com/",
      },
      {
        text: "NASA图片视频素材库",
        link: "https://images.nasa.gov/",
      },
      {
        text: "极简壁纸",
        link: "https://bz.zzzmh.cn/",
      },
      {
        text: "Wallpaper Abyss壁纸",
        link: "https://wall.alphacoders.com/",
      },
    ],
  },
  {
    text: "在线教程和文档",
    icon: "reco-message",
    items: [
      { text: "Git中文教程", link: "https://git-scm.com/book/zh/v2" },
      {
        text: "SVN中文手册",
        link: "http://svnbook.red-bean.com/nightly/zh/index.html",
      },
      { text: "jQuery API中文文档", link: "https://jquery.cuishifeng.cn/" },
      {
        text: "Nginx中文文档",
        link: "https://www.nginx.cn/doc/index.html",
      },
      { text: "Kafka中文文档", link: "https://kafka.apachecn.org/" },
      {
        text: "Mybatis中文文档",
        link: "https://mybatis.org/mybatis-3/zh/index.html",
      },
      {
        text: "微信小程序官方文档",
        link: "https://developers.weixin.qq.com/miniprogram/dev/framework/",
      },
      { text: "Nodejs中文教程文档", link: "http://nodejs.cn/learn/" },
      {
        text: "Apache Web Server文档",
        link: "http://httpd.apache.org/docs/",
      },
      {
        text: "Spring文档中文版",
        link: "https://www.springcloud.cc/spring-reference.html",
      },
      {
        text: "Golang标准库文档中文版",
        link: "https://studygolang.com/pkgdoc",
      },
      {
        text: "Java 8官方文档",
        link: "https://docs.oracle.com/javase/8/docs/api/index.html",
      },
      { text: "Maven官方文档", link: "http://maven.apache.org/guides/" },
      {
        text: "Tomcat 8官方文档",
        link: "http://tomcat.apache.org/tomcat-8.0-doc/index.html",
      },
      {
        text: "Spring Boot官方文档",
        link: "https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/",
      },
      {
        text: "RabbitMQ官方文档",
        link: "https://www.rabbitmq.com/documentation.html",
      },
      {
        text: "RocketMQ官方文档",
        link: "http://rocketmq.apache.org/docs/quick-start/",
      },
      { text: "Dubbo中文文档", link: "https://dubbo.apache.org/zh/docs/" },
      { text: "Netty官方文档", link: "https://netty.io/wiki/index.html" },
      {
        text: "Elasticsearch官方文档",
        link: "https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html",
      },
      {
        text: "Spring Cloud官方文档",
        link: "https://spring.io/projects/spring-cloud",
      },
      {
        text: "Docker官方文档",
        link: "https://docs.docker.com/get-started/",
      },
      {
        text: "kubernetes中文文档",
        link: "https://kubernetes.io/zh/docs/home/",
      },
      {
        text: "thymeleaf官方文档",
        link: "https://www.thymeleaf.org/documentation.html",
      },
      { text: "Vue.js中文文档", link: "https://cn.vuejs.org/v2/guide/" },
      {
        text: "React.js官方文档",
        link: "https://reactjs.org/docs/getting-started.html",
      },
      { text: "Jenkins中文文档", link: "https://www.jenkins.io/zh/doc/" },
    ],
  },
  {
    text: "联系我",
    link: "https://support.qq.com/product/453451",
    icon: "reco-faq",
  },
  // {
  //   text: "GitHub",
  //   link: "https://github.com/liuxing997",
  //   icon: "reco-github",
  // },
];
module.exports = nav;
