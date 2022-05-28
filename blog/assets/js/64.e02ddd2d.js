(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{632:function(t,a,s){"use strict";s.r(a);var e=s(21),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"如何撤销-git-操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何撤销-git-操作"}},[t._v("#")]),t._v(" 如何撤销 Git 操作？")]),t._v(" "),s("p",[t._v("Git 版本管理时，往往需要撤销某些操作。")]),t._v(" "),s("p",[t._v("更多命令可以参考"),s("RouterLink",{attrs:{to:"/pages/b3cb63/"}},[t._v("《常用 Git 命令》")]),t._v("一文。")],1),t._v(" "),s("h2",{attrs:{id:"一、撤销提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、撤销提交"}},[t._v("#")]),t._v(" 一、撤销提交")]),t._v(" "),s("p",[t._v("一种常见的场景是，提交代码以后，你突然意识到这个提交有问题，应该撤销掉，这时执行下面的命令就可以了。")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" revert HEAD\n")])])])]),t._v(" "),s("p",[t._v("上面命令的原理是，在当前提交后面，新增一次提交，抵消掉上一次提交导致的所有变化。它不会改变过去的历史，所以是首选方式，没有任何丢失代码的风险。")]),t._v(" "),s("p",[s("code",[t._v("git revert")]),t._v(" 命令只能抵消上一个提交，如果想抵消多个提交，必须在命令行依次指定这些提交。比如，抵消前两个提交，要像下面这样写。")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" revert "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("倒数第一个提交"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("倒数第二个提交"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])]),t._v(" "),s("p",[s("code",[t._v("git revert")]),t._v("命令还有两个参数。")]),t._v(" "),s("blockquote",[s("ul",[s("li",[s("code",[t._v("--no-edit")]),t._v("：执行时不打开默认编辑器，直接使用 Git 自动生成的提交信息。")]),t._v(" "),s("li",[s("code",[t._v("--no-commit")]),t._v("：只抵消暂存区和工作区的文件变化，不产生新的提交。")])])]),t._v(" "),s("h2",{attrs:{id:"二、丢弃提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、丢弃提交"}},[t._v("#")]),t._v(" 二、丢弃提交")]),t._v(" "),s("p",[t._v("如果希望以前的提交在历史中彻底消失，而不是被抵消掉，可以使用"),s("code",[t._v("git reset")]),t._v("命令，丢弃掉某个提交之后的所有提交。")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("last good SHA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])]),t._v(" "),s("p",[s("code",[t._v("git reset")]),t._v("的原理是，让最新提交的指针回到以前某个时点，该时点之后的提交都从历史中消失。")]),t._v(" "),s("p",[t._v("默认情况下，"),s("code",[t._v("git reset")]),t._v("不改变工作区的文件（但会改变暂存区），"),s("code",[t._v("--hard")]),t._v("参数可以让工作区里面的文件也回到以前的状态。")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("last good SHA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])]),t._v(" "),s("p",[t._v("执行"),s("code",[t._v("git reset")]),t._v("命令之后，如果想找回那些丢弃掉的提交，可以使用"),s("code",[t._v("git reflog")]),t._v("命令，具体做法参考"),s("a",{attrs:{href:"https://github.blog/2015-06-08-how-to-undo-almost-anything-with-git/#redo-after-undo-local",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("。不过，这种做法有时效性，时间长了可能找不回来。")]),t._v(" "),s("h2",{attrs:{id:"三、替换上一次提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、替换上一次提交"}},[t._v("#")]),t._v(" 三、替换上一次提交")]),t._v(" "),s("p",[t._v("提交以后，发现提交信息写错了，这时可以使用"),s("code",[t._v("git commit")]),t._v("命令的"),s("code",[t._v("--amend")]),t._v("参数，可以修改上一次的提交信息。")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --amend -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Fixes bug #42"')]),t._v("\n")])])])]),t._v(" "),s("p",[t._v("它的原理是产生一个新的提交对象，替换掉上一次提交产生的提交对象。")]),t._v(" "),s("p",[t._v("这时如果暂存区有发生变化的文件，会一起提交到仓库。所以，"),s("code",[t._v("--amend")]),t._v("不仅可以修改提交信息，还可以整个把上一次提交替换掉。")]),t._v(" "),s("h2",{attrs:{id:"四、撤销工作区的文件修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、撤销工作区的文件修改"}},[t._v("#")]),t._v(" 四、撤销工作区的文件修改")]),t._v(" "),s("p",[t._v("如果工作区的某个文件被改乱了，但还没有提交，可以用"),s("code",[t._v("git checkout")]),t._v("命令找回本次修改之前的文件。")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -- "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])]),t._v(" "),s("p",[t._v("它的原理是先找暂存区，如果该文件有暂存的版本，则恢复该版本，否则恢复上一次提交的版本。")]),t._v(" "),s("p",[t._v("注意，工作区的文件变化一旦被撤销，就无法找回了。")]),t._v(" "),s("h2",{attrs:{id:"五、从暂存区撤销文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、从暂存区撤销文件"}},[t._v("#")]),t._v(" 五、从暂存区撤销文件")]),t._v(" "),s("p",[t._v("如果不小心把一个文件添加到暂存区，可以用下面的命令撤销。")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" --cached "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])]),t._v(" "),s("p",[t._v("上面的命令不影响已经提交的内容。")]),t._v(" "),s("h2",{attrs:{id:"六、撤销当前分支的变化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、撤销当前分支的变化"}},[t._v("#")]),t._v(" 六、撤销当前分支的变化")]),t._v(" "),s("p",[t._v("你在当前分支上做了几次提交，突然发现放错了分支，这几个提交本应该放到另一个分支。")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个 feature 分支，指向当前最新的提交")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注意，这时依然停留在当前分支")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch feature\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换到这几次提交之前的状态")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("当前分支此前的最后一次提交"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换到 feature 分支")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout feature\n")])])])]),t._v(" "),s("p",[t._v("上面的操作等于是撤销当前分支的变化，将这些变化放到一个新建的分支。")]),t._v(" "),s("br"),t._v(" "),s("blockquote",[s("p",[t._v("参考来源：http://www.ruanyifeng.com/blog/2019/12/git-undo.html")])])])}),[],!1,null,null,null);a.default=n.exports}}]);