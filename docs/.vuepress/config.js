module.exports = {
  "theme": 'reco',
  "locales": {
    "/": {
      "lang": "zh-CN"
    }
  },
  "title":"Govee生态工具链",
  "description":"打造适合Govee的生态工具链产品",
  "themeConfig": {
    "subSidebar": "auto",
    "nav": [
      { "text" : "首页", "link": "/"},
      { "text" : "快速入门", "link": "/quick-start"},
      { 
        text: '冴羽的 JavaScript 博客', 
        items: [
            { text: 'Github', link: 'https://github.com/mqyqingfeng' },
            { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
        ]
      }
    ],
    "sidebar": [
      {
        "title": "欢迎学习",
        "path": "/",
        "children": [
          { "title": "学前必读", "path": "/" }
        ]
      },
      {
        title: "基础学习",
        path: '/handbook/ConditionalTypes',
        collapsable: false, // 不折叠
        children: [
          { title: "条件类型", path: "/handbook/ConditionalTypes" },
          { title: "泛型", path: "/handbook/Generics" }
        ],
      }
    ]
  }
}