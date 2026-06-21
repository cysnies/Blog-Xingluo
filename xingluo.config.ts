import { defineXingluoConfig } from "./src/types/config";

/**
 * 星罗项目用户配置
 * 修改此文件即可自定义站点信息与功能开关
 */
export default defineXingluoConfig({
  site: {
    url: "https://blog.tcea.top/",
    title: "白鼠的小站",
    description: "一个平平无奇的个人博客",
    author: "白鼠 Cysnies",
    profile: "https://blog.tcea.top/",
    ogImage: "default-og.jpg",
    lang: "zh-cn",
    timezone: "Asia/Shanghai",
    dir: "ltr",
    favicon: {
      ico: "favicon.ico",
    },
  },
  posts: {
    perPage: 8,
    perIndex: 5,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showCategories: true,
    showBackButton: true,
    showPostCardHero: true,
    showPostDetailHero: true,
    editPost: {
      enabled: true,
      url: "https://github.com/cysnies/Xingluo/edit/main/",
    },
    search: "pagefind",
    mdx: true,
    comments: {
      provider: "twikoo",
      twikoo: { envId: "https://twikoo.tcea.top", lang: "zh-CN" },
    },
    players: {
      aplayer: true,
      dplayer: true,
    },
  },
  socials: [
    { name: "github", url: "https://github.com/cysnies" },
    { name: "x", url: "https://x.com/Cysnies" },
    { name: "mail", url: "mailto:official@tcea.top" },
  ],
  shareLinks: [
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "weibo", url: "https://service.weibo.com/share/share.php?url=" },
    {
      name: "mail",
      url: "mailto:?subject=%E6%8E%A8%E8%8D%90%E6%96%87%E7%AB%A0&body=",
    },
  ],
});
