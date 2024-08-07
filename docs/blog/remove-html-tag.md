---
title: javascript快速去除html字符串中的标签
author: wujunkui
date: 2024-07-22
category:
    - 技术
tag:
    - javascript
---

# javascript快速去除html字符串中的标签

有些时候复制了一串html字符串，但是里面有很多标签，想直接去除标签，但是又不想用正则，因为正则太麻烦了，可以使用自带的工具函数DOMParser,快速的去掉html标签，获取里面的内容。

```html
<ol class="hljs-ln" style="width: 100%; user-select: auto;"><li style="user-select: auto;"><div class="hljs-ln-numbers" style="user-select: auto;"><div class="hljs-ln-line hljs-ln-n" data-line-number="1" style="user-select: auto;"></div></div><div class="hljs-ln-code" style="user-select: auto;"><div class="hljs-ln-line" style="user-select: auto;"><span class="hljs-keyword" style="user-select: auto;">string</span> tmp<span class="hljs-operator" style="user-select: auto;">=</span><span class="hljs-string" style="user-select: auto;">"i love beijing i love beijing"</span><span class="hljs-operator" style="user-select: auto;">+</span></div></div></li><li style="user-select: auto;"><div class="hljs-ln-numbers" style="user-select: auto;"><div class="hljs-ln-line hljs-ln-n" data-line-number="2" style="user-select: auto;"></div></div><div class="hljs-ln-code" style="user-select: auto;"><div class="hljs-ln-line" style="user-select: auto;"> <span class="hljs-string" style="user-select: auto;">"i love beijing i love beijing i love beijing i love beijing"</span>;</div></div></li></ol>

```

```javascript
var parser = new DOMParser();
var content = parser.parseFromString(htmlStr, "text/html").body.textContent;
```