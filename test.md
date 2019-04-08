```

{
  //-------- 编辑器配置 --------
  "editor.fontSize": 16,
  // 控制折行的方式。
  "editor.wordWrap": "on",
  // 一个制表符等于的空格数。
  "editor.tabSize": 2,
  // vscode默认启用了根据文件类型自动设置tabsize的选项
  "editor.detectIndentation": false,
  // #每次保存的时候自动格式化
  "editor.formatOnSave": true,
  // 为编辑器设置 icon
  "workbench.iconTheme": "vscode-icons",
  "editor.fontFamily": "Courier New, monospace",
  "workbench.startupEditor": "newUntitledFile",
  "material-icon-theme.showUpdateMessage": false,
  "html.format.preserveNewLines": false,
  // 标记列表，以逗号分隔，其前应有额外新行。"null" 默认为“标头、正文、/html”。
  "html.format.extraLiners": "",
  "editor.colorDecorators": true,
  "explorer.confirmDelete": false,
  // 按 "Tab" 时插入空格。
  "editor.insertSpaces": true,
  // 控制光标样式，接受的值为 'block' 和 'line'
  "editor.cursorStyle": "block",
  // 删除尾随自动插入的空格
  "editor.trimAutoWhitespace": true,
  // 控制折行方式。可以选择:
  //  - "off" (禁用折行)，
  //  - "on" (根据视区宽度折行)，
  //  - "wordWrapColumn" (在 "editor.wordWrapColumn" 处换行)
  //  - "bounded" (在视区宽度和 "editor.wordWrapColumn" 两者的较小者处换行)。
  "workbench.activityBar.visible": true,
  "workbench.sideBar.location": "left",
  // -------------------------------------------------------------------------------------------//

  //每次保存的时候将代码按eslint格式进行修复
  "eslint.autoFixOnSave": true,
  "eslint.options": {
    "extensions": [".js", ".vue"]
    // "configFile": "/Users/tianshanlaike/Documents/gitHub/vue/vue-test/.eslintrc.js"
  },
  // 添加 vue 支持
  "eslint.validate": [
    {
      "language": "vue",
      "autoFix": true
    },
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "javascript",
      "autoFix": true
    }
  ],
  // ------------------------------------------Eslint End ------------------------------------//

  // vetur 配置会和eslint 发生冲突
  // ---------------------如下配置即可实现格式化vue文件时按eslint的规则来---------------------------
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      // "wrap_attributes": "force-aligned" //属性强制折行对齐
      "wrap_attributes": "auto" // 属性列太长才折行,默认的force-expand-multiline不美观
    },
    "prettier": {
      //去掉代码结尾分号
      "semi": false,
      //使用eslint的代码格式进行校验
      "eslintIntegration": true,
      //采用单引号
      "singleQuote": true
    }
  },
  //格式化.vue中html，js
  // #让vue中的js按编辑器自带的ts格式进行格式化(很重要)
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  // 注释 HTML 格式化,否则 vue中的template格式化很难看
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  //让函数(名)和后面的括号之间加个空格
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,

  "vsicons.dontShowNewVersionMessage": true,
  // jsx 配置
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "sync.gist": "df72edfa0284ab591ecbed9b0c507c56",
  "terminal.integrated.fontSize": 16,
  //#让prettier使用eslint的代码格式进行校验
  "prettier.eslintIntegration": true,
  "prettier.jsxSingleQuote": true,
  "prettier.semi": false,

  "breadcrumbs.enabled": true
  // 格式化stylus, 需安装Manta's Stylus Supremacy插件
  // "stylusSupremacy.insertColons": false, // 是否插入冒号
  // "stylusSupremacy.insertSemicolons": false, // 是否插入分好
  // "stylusSupremacy.insertBraces": false, // 是否插入大括号
  // "stylusSupremacy.insertNewLineAroundImports": false, // import之后是否换行
  // "stylusSupremacy.insertNewLineAroundBlocks": false // 两个选择器中是否换行

  // "tslint.autoFixOnSave": true
}

```
