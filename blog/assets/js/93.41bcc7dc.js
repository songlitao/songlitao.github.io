(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{588:function(t,s,a){"use strict";a.r(s);var e=a(19),i=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("由于国内访问 Github 速度比较慢，很影响使用。")]),t._v(" "),a("p",[t._v("如果希望体验到 Git 飞一般的速度，可以使用国内的 Git 托管服务——"),a("a",{attrs:{href:"https://gitee.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitee（gitee.com）"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("Gitee 提供免费的 Git 仓库，还集成了代码质量检测、项目演示等功能。对于团队协作开发，Gitee 还提供了项目管理、代码托管、文档管理的服务，5 人以下小团队免费。")]),t._v(" "),a("p",[t._v("由于本地 Git 仓库和 Gitee 仓库之间的传输是通过SSH加密的，所以需要配置验证信息。")]),t._v(" "),a("h2",{attrs:{id:"配置ssh公钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置ssh公钥"}},[t._v("#")]),t._v(" 配置SSH公钥")]),t._v(" "),a("p",[a("strong",[t._v("首先在 "),a("a",{attrs:{href:"https://gitee.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitee"),a("OutboundLink")],1),t._v(" 上注册账号并登录后，然后上传自己的 SSH 公钥。")])]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/pages/f3d7dc/"}},[t._v("远程仓库(Github)")]),t._v(" 章节已经生成了自己的 SSH 公钥，所以只需要将用户主目录下的 ~/.ssh/id_rsa.pub 文件的内容粘贴 Gitee 上。")],1),t._v(" "),a("p",[t._v('选择右上角用户头像 -> 设置，然后选择 "SSH公钥"，填写一个便于识别的标题，然后把用户主目录下的 .ssh/id_rsa.pub 文件的内容粘贴进去：')]),t._v(" "),a("p",[a("img",{attrs:{src:"/picgo/images/git/11-01.png",alt:"img"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"/picgo/images/git/11-02.png",alt:"img"}})]),t._v(" "),a("p",[t._v("成功添加后如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/picgo/images/git/11-03.png",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"创建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建项目"}},[t._v("#")]),t._v(" 创建项目")]),t._v(" "),a("p",[t._v("点击右上角的 "),a("strong",[t._v("+")]),t._v(" 号，新建仓库：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/picgo/images/git/11-04.png",alt:"img"}})]),t._v(" "),a("p",[t._v("然后添加仓库信息：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/picgo/images/git/11-05.png",alt:"img"}})]),t._v(" "),a("p",[t._v("创建成功后看到如下信息：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/picgo/images/git/11-06.png",alt:"img"}})]),t._v(" "),a("p",[t._v("接下来看下连接信息：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/picgo/images/git/11-07.png",alt:"img"}})]),t._v(" "),a("p",[t._v("项目名称最好与本地库保持一致。")]),t._v(" "),a("h2",{attrs:{id:"关联gitee"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关联gitee"}},[t._v("#")]),t._v(" 关联Gitee")]),t._v(" "),a("p",[t._v("在本地库上使用命令 "),a("strong",[t._v("git remote add")]),t._v(" 把它和 Gitee 的远程库关联：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin git@gitee.com:imnoob/runoob-test.git\n")])])]),a("p",[t._v("之后，就可以正常地用 git push 和 git pull 推送了！")]),t._v(" "),a("p",[t._v("如果在使用命令 git remote add 时报错：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin git@gitee.com:imnoob/runoob-test.git\nfatal: remote origin already exists.\n")])])]),a("p",[t._v("这说明本地库已经关联了一个名叫 origin 的远程库，此时，可以先用 "),a("strong",[t._v("git remote -v")]),t._v(" 查看远程库信息：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\norigin    git@github.com:tianqixin/runoob.git "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\norigin    git@github.com:tianqixin/runoob.git "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("可以看到，本地库已经关联了 origin 的远程库，并且，该远程库指向 GitHub。")]),t._v(" "),a("p",[t._v("可以删除已有的 GitHub 远程库：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" origin\n")])])]),a("p",[t._v("再关联 Gitee 的远程库（注意路径中需要填写正确的用户名）：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin git@gitee.com:imnoob/runoob-test.git\n")])])]),a("p",[t._v("此时，再查看远程库信息：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\norigin    git@gitee.com:imnoob/runoob-test.git "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\norigin    git@gitee.com:imnoob/runoob-test.git "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("现在可以看到，origin 已经被关联到 Gitee 的远程库了。")]),t._v(" "),a("p",[t._v("通过 git push 命令就可以把本地库推送到 Gitee 上。")]),t._v(" "),a("h2",{attrs:{id:"关联github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关联github"}},[t._v("#")]),t._v(" 关联GitHub")]),t._v(" "),a("p",[a("strong",[t._v("一个本地库能不能既关联 GitHub，又关联 Gitee 呢？")])]),t._v(" "),a("p",[t._v("答案是肯定的，因为 git 本身是分布式版本控制系统，可以同步到另外一个远程库，当然也可以同步到另外两个远程库。")]),t._v(" "),a("p",[t._v("使用多个远程库时，要注意，git 给远程库起的默认名称是 origin，如果有多个远程库，需要用不同的名称来标识不同的远程库。")]),t._v(" "),a("p",[t._v("仍然以 runoob-test 本地库为例，先删除已关联的名为 origin 的远程库：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" origin\n")])])]),a("p",[t._v("然后，先关联 GitHub 的远程库：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" github git@github.com:tianqixin/runoob-git-test.git\n")])])]),a("p",[t._v("注意，远程库的名称叫 github，不叫 origin 了。")]),t._v(" "),a("p",[t._v("接着，再关联 Gitee 的远程库：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" gitee git@gitee.com:imnoob/runoob-test.git\n")])])]),a("p",[t._v("同样注意，远程库的名称叫 gitee，不叫 origin。")]),t._v(" "),a("p",[t._v("现在，用 git remote -v 查看远程库信息，可以看到两个远程库：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\ngitee    git@gitee.com:imnoob/runoob-test.git "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ngitee    git@gitee.com:imnoob/runoob-test.git "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ngithub    git@github.com:tianqixin/runoob.git "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ngithub    git@github.com:tianqixin/runoob.git "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("如果要推送到 GitHub，使用命令：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push github master\n")])])]),a("p",[t._v("如果要推送到 Gitee，使用命令：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push gitee master\n")])])]),a("p",[t._v("这样一来，本地库就可以同时与多个远程库互相同步：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/picgo/images/git/11-08.png",alt:"img"}})])])}),[],!1,null,null,null);s.default=i.exports}}]);