---
title: git 基于目录设置不同的user.name和user.email
author: wujunkui
date: 2024-06-05
category:
    - 技术
tag:
    - git

---

# git 基于目录设置不同的user.name和user.email

## 背景

## 方法

1. 创建一个git工作配置文件

假如的工作目录是`～/code/work`，那么创建一个配置文件`~/.gitconfig-work`

填入工作使用的名字和邮箱，内容如下

```
[user]
    name = 你的工作名字
    email = 你的工作邮箱
```

2. 在默认git配置文件`~/.gitconfig`中添加如下内容

```
[includeIf "gitdir:~/code/work/"]
    path = ~/.gitconfig-work       
```

3. 测试

在`~/code/work`目录下的代码目录，命令行中输入`git config --list`，可以看到配置文件`~/.gitconfig-work`中的配置信息

```
// ....
includeif.gitdir:~/code/work/.path=~/.gitconfig-work
user.name=xxxxx
user.email=wujunkui@xxxxx.com
```


