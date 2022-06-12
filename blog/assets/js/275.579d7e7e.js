(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{765:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"添加远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加远程仓库"}},[t._v("#")]),t._v(" 添加远程仓库")]),t._v(" "),a("p",[t._v("要添加一个新的远程仓库，可以指定一个简单的名字，以便将来引用,命令格式如下：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("shortname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("本例以 Github 为例作为远程仓库，如果没有 Github 可以在官网 https://github.com/注册。")]),t._v(" "),a("p",[t._v("由于本地 Git 仓库和 GitHub 仓库之间的传输是通过SSH加密的，所以需要配置验证信息：")]),t._v(" "),a("p",[t._v("使用以下命令生成 SSH Key：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ ssh-keygen -t rsa -C "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"youremail@example.com"')]),t._v("\n")])])]),a("p",[t._v("后面的 "),a("strong",[t._v("your_email@youremail.com")]),t._v(" 改为 Github 上注册的邮箱，之后会要求确认路径和输入密码，使用默认的一路回车就行。")]),t._v(" "),a("p",[t._v("成功的话会在 "),a("strong",[t._v("~/")]),t._v(" 下生成 "),a("strong",[t._v(".ssh")]),t._v(" 文件夹，进去，打开 "),a("strong",[t._v("id_rsa.pub")]),t._v("，复制里面的 "),a("strong",[t._v("key")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ ssh-keygen -t rsa -C "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"429240967@qq.com"')]),t._v("\nGenerating public/private rsa key pair.\nEnter "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("which")]),t._v(" to save the key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("/Users/tianqixin/.ssh/id_rsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": \nEnter passphrase "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("empty "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" no passphrase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 直接回车")]),t._v("\nEnter same passphrase again:                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 直接回车")]),t._v("\nYour identification has been saved "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" /Users/tianqixin/.ssh/id_rsa.\nYour public key has been saved "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" /Users/tianqixin/.ssh/id_rsa.pub.\nThe key fingerprint is:\nSHA256:MDKVidPTDXIQoJwoqUmI4LBAsg5XByBlrOEzkxrwARI "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("429240967")]),t._v("@qq.com\nThe key's randomart image is:\n+---"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("RSA "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3072")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("----+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("E*+."),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v("**oo       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("%Oo+oo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("o. "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("%**.o.o.         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("OO.  o o         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("+o+     S        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("                 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("                 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("                 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+----"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("SHA256"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("-----+\n")])])]),a("p",[t._v("回到 github 上，进入 Account => Settings（账户配置）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontents.com/songlitao/picgo/master/resource/blog/images/git/10-01.jpg",alt:"img"}})]),t._v(" "),a("p",[t._v("左边选择 "),a("strong",[t._v("SSH and GPG keys")]),t._v("，然后点击 "),a("strong",[t._v("New SSH key")]),t._v(" 按钮,title 设置标题，可以随便填，粘贴电脑上生成的 key。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontents.com/songlitao/picgo/master/resource/blog/images/git/10-02.jpg",alt:"img"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontents.com/songlitao/picgo/master/resource/blog/images/git/10-03.jpg",alt:"img"}})]),t._v(" "),a("p",[t._v("添加成功后界面如下所示")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontents.com/songlitao/picgo/master/resource/blog/images/git/10-04.jpg",alt:"img"}})]),t._v(" "),a("p",[t._v("为了验证是否成功，输入以下命令：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" -T git@github.com\nThe authenticity of "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'github.com (52.74.223.119)'")]),t._v(" can"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'t be established.\nRSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.\nAre you sure you want to continue connecting (yes/no/[fingerprint])? yes                   # 输入 yes\nWarning: Permanently added '")]),t._v("github.com,52.74.223.119"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' (RSA) to the list of known hosts.\nHi tianqixin! You'")]),t._v("ve successfully authenticated, but GitHub does not provide shell access. "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 成功信息")]),t._v("\n")])])]),a("p",[t._v("以下命令说明已成功连上 Github。")]),t._v(" "),a("p",[t._v('之后登录后点击" New repository " 如下图所示：')]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontents.com/songlitao/picgo/master/resource/blog/images/git/10-05.jpg",alt:"img"}})]),t._v(" "),a("p",[t._v('之后在在Repository name 填入 runoob-git-test(远程仓库名) ，其他保持默认设置，点击"Create repository"按钮，就成功地创建了一个新的Git仓库：')]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontents.com/songlitao/picgo/master/resource/blog/images/git/10-06.jpg",alt:"img"}})]),t._v(" "),a("p",[t._v("创建成功后，显示如下信息：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontents.com/songlitao/picgo/master/resource/blog/images/git/10-07.jpg",alt:"img"}})]),t._v(" "),a("p",[t._v("以上信息说明可以从这个仓库克隆出新的仓库，也可以把本地仓库的内容推送到GitHub仓库。")]),t._v(" "),a("p",[t._v("现在，根据 GitHub 的提示，在本地的仓库下运行命令：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" runoob-git-test                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建测试目录")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" runoob-git-test/                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入测试目录")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"# 菜鸟教程 Git 测试"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" README.md     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建 README.md 文件并写入内容")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("                                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看目录下的文件")]),t._v("\nREADME\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init                                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 初始化")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" README.md                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加文件")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"添加 README.md 文件"')]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交并备注信息")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("master "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root-commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 0205aab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 添加 README.md 文件\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" changed, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" insertion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n create mode "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100644")]),t._v(" README.md\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交到 Github")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin git@github.com:tianqixin/runoob-git-test.git\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin master\n")])])]),a("p",[t._v("以下命令根据Github成功创建新仓库的地方复制，而不是根据提供的命令，因为Github用户名不一样，仓库名也不一样。")]),t._v(" "),a("p",[t._v("接下来返回 Github 创建的仓库，就可以看到文件已上传到 Github上：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontents.com/songlitao/picgo/master/resource/blog/images/git/10-08.jpg",alt:"img"}})]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"查看远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看远程仓库"}},[t._v("#")]),t._v(" 查看远程仓库")]),t._v(" "),a("p",[t._v("要查看当前配置有哪些远程仓库，可以用命令：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote\n")])])]),a("p",[a("strong",[t._v("实例")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote\norigin\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\norigin    git@github.com:tianqixin/runoob-git-test.git "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\norigin    git@github.com:tianqixin/runoob-git-test.git "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("执行时加上 -v 参数，可以看到每个别名的实际链接地址。")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"提取远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提取远程仓库"}},[t._v("#")]),t._v(" 提取远程仓库")]),t._v(" "),a("p",[t._v("Git 有两个命令用来提取远程仓库的更新。")]),t._v(" "),a("p",[t._v("1、从远程仓库下载新分支与数据：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch\n")])])]),a("p",[t._v("该命令执行完后需要执行 git merge 远程分支到所在的分支。")]),t._v(" "),a("p",[t._v("2、从远端仓库提取数据并尝试合并到当前分支：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge\n")])])]),a("p",[t._v("该命令就是在执行 "),a("strong",[t._v("git fetch")]),t._v(" 之后紧接着执行 "),a("strong",[t._v("git merge")]),t._v(" 远程分支到任意分支。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontents.com/songlitao/picgo/master/resource/blog/images/git/10-09.jpg",alt:"img"}})]),t._v(" "),a("p",[t._v("假设配置好了一个远程仓库，并且想要提取更新的数据，可以首先执行 "),a("strong",[t._v("git fetch [alias]")]),t._v(" 告诉 Git 去获取它有而本地没有的数据，然后可以执行 "),a("strong",[t._v("git merge [alias]/[branch]")]),t._v(" 以将服务器上的任何更新（假设有人这时候推送到服务器了）合并到当前分支。")]),t._v(" "),a("p",[t._v('接下来在 Github 上点击" README.md" 并在线修改它:')]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontents.com/songlitao/picgo/master/resource/blog/images/git/10-10.jpg",alt:"img"}})]),t._v(" "),a("p",[t._v("然后在本地更新修改。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch origin\nremote: Counting objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(", done.\nremote: Compressing objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("/2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", done.\nremote: Total "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("delta "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", reused "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("delta "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", pack-reused "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nUnpacking objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("/3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", done.\nFrom github.com:tianqixin/runoob-git-test\n   0205aab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("febd8ed  master     -"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" origin/master\n")])])]),a("p",[t._v('以上信息"0205aab..febd8ed master -> origin/master" 说明 master 分支已被更新，可以使用以下命令将更新同步到本地：')]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge origin/master\nUpdating 0205aab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("febd8ed\nFast-forward\n README.md "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" +\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" changed, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" insertion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("查看 README.md 文件内容：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" README.md \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 菜鸟教程 Git 测试")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 第一次修改内容")]),t._v("\n")])])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"推送远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推送远程仓库"}},[t._v("#")]),t._v(" 推送远程仓库")]),t._v(" "),a("p",[t._v("推送新分支与数据到某个远端仓库命令:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("alias"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("以上命令将 [branch] 分支推送成为 [alias] 远程仓库上的 [branch] 分支，实例如下。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" runoob-test.txt      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加文件")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" runoob-test.txt \n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"添加到远程"')]),t._v("\nmaster 69e702d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 添加到远程\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" changed, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" insertions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" deletions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n create mode "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100644")]),t._v(" runoob-test.txt\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送到 Github")]),t._v("\n")])])]),a("p",[t._v("重新回到 Github 仓库，可以看到文件已经提交上来了：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontents.com/songlitao/picgo/master/resource/blog/images/git/10-11.jpg",alt:"img"}})]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"删除远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除远程仓库"}},[t._v("#")]),t._v(" 删除远程仓库")]),t._v(" "),a("p",[t._v("删除远程仓库可以使用命令：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("别名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[a("strong",[t._v("实例")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\norigin    git@github.com:tianqixin/runoob-git-test.git "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\norigin    git@github.com:tianqixin/runoob-git-test.git "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加仓库 origin2")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin2 git@github.com:tianqixin/runoob-git-test.git\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\norigin    git@github.com:tianqixin/runoob-git-test.git "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\norigin    git@github.com:tianqixin/runoob-git-test.git "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\norigin2    git@github.com:tianqixin/runoob-git-test.git "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\norigin2    git@github.com:tianqixin/runoob-git-test.git "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除仓库 origin2")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" origin2\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\norigin    git@github.com:tianqixin/runoob-git-test.git "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\norigin    git@github.com:tianqixin/runoob-git-test.git "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("br"),t._v(" "),a("blockquote",[a("p",[t._v("参考来源：https://www.runoob.com/git/git-remote-repo.html")])])])}),[],!1,null,null,null);s.default=e.exports}}]);