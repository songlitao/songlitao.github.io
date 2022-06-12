(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{759:function(t,v,_){"use strict";_.r(v);var i=_(19),s=Object(i.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[_("img",{attrs:{src:"https://raw.githubusercontents.com/songlitao/picgo/master/resource/blog/images/git/01-01.png",alt:"images"}})]),t._v(" "),_("p",[t._v("Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。")]),t._v(" "),_("p",[t._v("Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。")]),t._v(" "),_("p",[t._v("Git 与常用的版本控制工具 CVS, Subversion 等不同，它采用了分布式版本库的方式，不必服务器端软件支持。")]),t._v(" "),_("hr"),t._v(" "),_("h2",{attrs:{id:"git-与-svn-区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git-与-svn-区别"}},[t._v("#")]),t._v(" Git 与 SVN 区别")]),t._v(" "),_("p",[t._v("Git 不仅仅是个版本控制系统，它也是个内容管理系统(CMS)，工作管理系统等。")]),t._v(" "),_("p",[t._v("Git 与 SVN 区别点：")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("1、Git 是分布式的，SVN 不是")]),t._v("：这是 Git 和其它非分布式的版本控制系统，例如 SVN，CVS 等，最核心的区别。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("2、Git 把内容按元数据方式存储，而 SVN 是按文件")]),t._v("：所有的资源控制系统都是把文件的元信息隐藏在一个类似 .svn、.cvs 等的文件夹里。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("3、Git 分支和 SVN 的分支不同")]),t._v("：分支在 SVN 中一点都不特别，其实它就是版本库中的另外一个目录。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("4、Git 没有一个全局的版本号，而 SVN 有")]),t._v("：目前为止这是跟 SVN 相比 Git 缺少的最大的一个特征。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("5、Git 的内容完整性要优于 SVN")]),t._v("：Git 的内容存储使用的是 SHA-1 哈希算法。这能确保代码内容的完整性，确保在遇到磁盘故障和网络问题时降低对版本库的破坏。")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontents.com/songlitao/picgo/master/resource/blog/images/git/01-02.jpg",alt:"images"}})]),t._v(" "),_("h2",{attrs:{id:"工作流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#工作流程"}},[t._v("#")]),t._v(" 工作流程")]),t._v(" "),_("p",[t._v("Git一般工作流程如下：")]),t._v(" "),_("ul",[_("li",[t._v("克隆 Git 资源作为工作目录。")]),t._v(" "),_("li",[t._v("在克隆的资源上添加或修改文件。")]),t._v(" "),_("li",[t._v("如果其他人修改了，你可以更新资源。")]),t._v(" "),_("li",[t._v("在提交前查看修改。")]),t._v(" "),_("li",[t._v("提交修改。")]),t._v(" "),_("li",[t._v("在修改完成后，如果发现错误，可以撤回提交并再次修改并提交。")])]),t._v(" "),_("p",[_("strong",[t._v("Git工作流程图：")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontents.com/songlitao/picgo/master/resource/blog/images/git/01-03.png",alt:"images"}})]),t._v(" "),_("p",[_("strong",[t._v("Git操作流程图：")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontents.com/songlitao/picgo/master/resource/blog/images/git/01-04.png",alt:"images"}})]),t._v(" "),_("h2",{attrs:{id:"工作区、暂存区和版本库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#工作区、暂存区和版本库"}},[t._v("#")]),t._v(" 工作区、暂存区和版本库")]),t._v(" "),_("p",[t._v("我们先来理解下 Git 工作区、暂存区和版本库概念：")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("工作区(Workspace)")]),t._v("：就是你在电脑里能看到的目录。")]),t._v(" "),_("li",[_("strong",[t._v("暂存区(Index/Stage)")]),t._v("：一般存放在 "),_("strong",[t._v(".git")]),t._v(" 目录下的 index 文件中，所以我们把暂存区有时也叫作索引（index）。")]),t._v(" "),_("li",[_("strong",[t._v("版本库/本地版本仓库(Repository)")]),t._v("：工作区有一个隐藏目录 "),_("strong",[t._v(".git")]),t._v("，这个不算工作区，而是 Git 的版本仓库。")]),t._v(" "),_("li",[_("strong",[t._v("远程仓库(Remote)")]),t._v("：远程服务器仓库。")])]),t._v(" "),_("p",[t._v("下面这个图展示了工作区、版本库中的暂存区和版本库之间的关系：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontents.com/songlitao/picgo/master/resource/blog/images/git/01-05.jpg",alt:"images"}})]),t._v(" "),_("ul",[_("li",[t._v('图中左侧为工作区，右侧为版本库。在版本库中标记为 "index" 的区域是暂存区（stage/index），标记为 "master" 的是 master 分支所代表的目录树。')]),t._v(" "),_("li",[t._v('图中我们可以看出此时 "HEAD" 实际是指向 master 分支的一个"游标"。所以图示的命令中出现 HEAD 的地方可以用 master 来替换。')]),t._v(" "),_("li",[t._v('图中的 objects 标识的区域为 Git 的对象库，实际位于 ".git/objects" 目录下，里面包含了创建的各种对象及内容。')]),t._v(" "),_("li",[t._v("当对工作区修改（或新增）的文件执行 "),_("strong",[t._v("git add")]),t._v(" 命令时，暂存区的目录树被更新，同时工作区修改（或新增）的文件内容被写入到对象库中的一个新的对象中，而该对象的ID被记录在暂存区的文件索引中。")]),t._v(" "),_("li",[t._v("当执行提交操作（git commit）时，暂存区的目录树写到版本库（对象库）中，master 分支会做相应的更新。即 master 指向的目录树就是提交时暂存区的目录树。")]),t._v(" "),_("li",[t._v("当执行 "),_("strong",[t._v("git reset HEAD")]),t._v(" 命令时，暂存区的目录树会被重写，被 master 分支指向的目录树所替换，但是工作区不受影响。")]),t._v(" "),_("li",[t._v("当执行 "),_("strong",[t._v("git rm --cached <file>")]),t._v(" 命令时，会直接从暂存区删除文件，工作区则不做出改变。")]),t._v(" "),_("li",[t._v("当执行 "),_("strong",[t._v("git checkout .")]),t._v(" 或者 "),_("strong",[t._v("git checkout -- <file>")]),t._v(" 命令时，会用暂存区全部或指定的文件替换工作区的文件。这个操作很危险，会清除工作区中未添加到暂存区中的改动。")]),t._v(" "),_("li",[t._v("当执行 "),_("strong",[t._v("git checkout HEAD .")]),t._v(" 或者 "),_("strong",[t._v("git checkout HEAD <file>")]),t._v(" 命令时，会用 HEAD 指向的 master 分支中的全部或者部分文件替换暂存区和以及工作区中的文件。这个命令也是极具危险性的，因为不但会清除工作区中未提交的改动，也会清除暂存区中未提交的改动。")])])])}),[],!1,null,null,null);v.default=s.exports}}]);