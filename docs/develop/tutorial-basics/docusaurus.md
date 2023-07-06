# docusaurus 使用记录

### 多wiki模式

```js
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  mainSidebar: [{type: 'autogenerated', dirName: 'develop'}],
  lifeSidebar: [{type: 'autogenerated', dirName: 'life'}],
  
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};
```

### _category_
docs 中 可以在文件夹中创建 _category_.json 文件 eg:
```json
{
  "label": "Tutorial - Basics", // 显示name
  "position": 2, // 排序
  "link": {
    "type": "generated-index", // 生成目录
    "description": "5 minutes to learn the most important Docusaurus concepts." // 描述
  }
}

```


### sidebar_position
文档内最上层可配置排序
```md
---
sidebar_position: 1
---
```

@more see https://docusaurus.io/docs/sidebar/autogenerated#doc-item-metadata

### markdown 头部配置
https://docusaurus.io/docs/sidebar/autogenerated#doc-item-metadata