(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{615:function(t,s,v){"use strict";v.r(s);var r=v(21),a=Object(r.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[v("img",{attrs:{src:"https://raw.githubusercontent.com/songlitao/picgo/master/resource/blog-slt/images/svn/svn-01.png",alt:""}})]),t._v(" "),v("p",[t._v("Subversion(SVN) 是一个开源的版本控制系統, 也就是说 Subversion 管理着随时间改变的数据。 这些数据放置在一个中央资料档案库(repository) 中。 这个档案库很像一个普通的文件服务器, 不过它会记住每一次文件的变动。 这样你就可以把档案恢复到旧的版本, 或是浏览文件的变动历史。")]),t._v(" "),v("h2",{attrs:{id:"svn-概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#svn-概念"}},[t._v("#")]),t._v(" SVN 概念")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("repository（源代码库）:")]),t._v(" 源代码统一存放的地方")]),t._v(" "),v("li",[v("strong",[t._v("Checkout（提取）:")]),t._v(" 当你手上没有源代码的时候，你需要从repository checkout一份")]),t._v(" "),v("li",[v("strong",[t._v("Commit（提交）:")]),t._v(" 当你已经修改了代码，你就需要Commit到repository")]),t._v(" "),v("li",[v("strong",[t._v("Update（更新）:")]),t._v(" 当你已经Checkout了一份源代码， Update一下你就可以和Repository上的源代码同步，你手上的代码就会有最新的变更")])]),t._v(" "),v("h2",{attrs:{id:"svn-主要功能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#svn-主要功能"}},[t._v("#")]),t._v(" SVN 主要功能")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("（1）目录版本控制")]),t._v(" "),v("p",[t._v('CVS 只能跟踪单个文件的历史, 不过 Subversion 实作了一个 "虚拟" 的版本控管文件系统, 能够依时间跟踪整个目录的变动。 目录和文件都能进行版本控制。')])]),t._v(" "),v("li",[v("p",[t._v("（2）真实的版本历史")]),t._v(" "),v("p",[t._v("自从CVS限制了文件的版本记录，CVS并不支持那些可能发生在文件上，但会影响所在目录内容的操作，如同复制和重命名。除此之外，在CVS里你不能用拥有同样名字但是没有继承老版本历史或者根本没有关系的文件替换一个已经纳入系统的文件。在Subversion中，你可以增加（add）、删除（delete）、复制（copy）和重命名（rename），无论是文件还是目录。所有的新加的文件都从一个新的、干净的版本开始。")])]),t._v(" "),v("li",[v("p",[t._v("（3）自动提交")]),t._v(" "),v("p",[t._v("一个提交动作，不是全部更新到了档案库中，就是不完全更新。这允许开发人员以逻辑区间建立并提交变动，以防止当部分提交成功时出现的问题。")])]),t._v(" "),v("li",[v("p",[t._v("（4）纳入版本控管的元数据")]),t._v(" "),v("p",[t._v("每一个文件与目录都附有一組属性关键字并和属性值相关联。你可以创建, 并儲存任何你想要的Key/Value对。 属性是随着时间来作版本控管的,就像文件內容一样。")])]),t._v(" "),v("li",[v("p",[t._v("（5）选择不同的网络层")]),t._v(" "),v("p",[t._v("Subversion 有抽象的档案库存取概念, 可以让人很容易地实作新的网络机制。 Subversion 可以作为一个扩展模块嵌入到Apache HTTP 服务器中。这个为Subversion提供了非常先进的稳定性和协同工作能力，除此之外还提供了许多重要功能: 举例来说, 有身份认证, 授权, 在线压缩, 以及文件库浏览等等。还有一个轻量级的独立Subversion服务器， 使用的是自定义的通信协议, 可以很容易地通过 ssh 以 tunnel 方式使用。")])]),t._v(" "),v("li",[v("p",[t._v("（6）一致的数据处理方式")]),t._v(" "),v("p",[t._v("Subversion 使用二进制差异算法来异表示文件的差异, 它对文字(人类可理解的)与二进制文件(人类无法理解的) 两类的文件都一视同仁。 这两类的文件都同样地以压缩形式储存在档案库中, 而且文件差异是以两个方向在网络上传输的。")])]),t._v(" "),v("li",[v("p",[t._v("（7）有效的分支(branch)与标签(tag)")]),t._v(" "),v("p",[t._v("在分支与标签上的消耗并不必一定要与项目大小成正比。 Subversion 建立分支与标签的方法, 就只是复制该项目, 使用的方法就类似于硬连接（hard-link）。 所以这些操作只会花费很小, 而且是固定的时间。")])]),t._v(" "),v("li",[v("p",[t._v("（8）Hackability")]),t._v(" "),v("p",[t._v("Subversion没有任何的历史包袱; 它主要是一群共用的 C 程序库, 具有定义完善的API。这使得 Subversion 便于维护, 并且可被其它应用程序与程序语言使用。")])])]),t._v(" "),v("h2",{attrs:{id:"常用版本控制工具"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常用版本控制工具"}},[t._v("#")]),t._v(" 常用版本控制工具")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://raw.githubusercontent.com/songlitao/picgo/master/resource/blog-slt/images/svn/svn-02.png",alt:""}})]),t._v(" "),v("p",[v("img",{attrs:{src:"https://raw.githubusercontent.com/songlitao/picgo/master/resource/blog-slt/images/svn/svn-03.png",alt:""}})]),t._v(" "),v("h2",{attrs:{id:"svn的优势"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#svn的优势"}},[t._v("#")]),t._v(" SVN的优势")]),t._v(" "),v("h3",{attrs:{id:"统一的版本号"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#统一的版本号"}},[t._v("#")]),t._v(" 统一的版本号")]),t._v(" "),v("p",[t._v("Subversion下，任何一次提交都会对所有文件增加到同一个新版本号，即使是提交并不涉及的文件，版本号相同的文件构成软件的一个版本。")]),t._v(" "),v("h3",{attrs:{id:"原子提交"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#原子提交"}},[t._v("#")]),t._v(" 原子提交")]),t._v(" "),v("p",[t._v("一次提交不管是单个还是多个文件，都是作为一个整体提交的。在这当中发生的意外例如传输中断，不会引起数据库的不完整和数据损坏。")]),t._v(" "),v("h3",{attrs:{id:"多级管理系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多级管理系统"}},[t._v("#")]),t._v(" 多级管理系统")]),t._v(" "),v("p",[t._v("超级管理员：对所有配置库具有完全权限。")]),t._v(" "),v("p",[t._v("目录管理员：目录管理员可对指定的目录/SVN库进行权限管理。")]),t._v(" "),v("p",[t._v("普通用户：可以查看用户名、查看权限设置、修改自己密码。")]),t._v(" "),v("h3",{attrs:{id:"一致的数据操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一致的数据操作"}},[t._v("#")]),t._v(" 一致的数据操作")]),t._v(" "),v("p",[t._v("Subversion用一个二进制差异算法描述文件的变化，对于文本（可读）和二进制（不可读）文件其操作方式是一致的。这两种类型的文件压缩存储在版本库中，而差异信息则在网络上双向传递。")]),t._v(" "),v("h3",{attrs:{id:"简单、易操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简单、易操作"}},[t._v("#")]),t._v(" 简单、易操作")]),t._v(" "),v("p",[t._v("SVN对中文支持好，操作简单，使用没有难度，使用界面统一，功能完善，操作方便。")])])}),[],!1,null,null,null);s.default=a.exports}}]);