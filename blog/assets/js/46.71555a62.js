(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{541:function(t,e,a){"use strict";a.r(e);var _=a(19),v=Object(_.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"二叉树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二叉树"}},[t._v("#")]),t._v(" 二叉树")]),t._v(" "),a("h3",{attrs:{id:"二叉树的概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二叉树的概念"}},[t._v("#")]),t._v(" 二叉树的概念")]),t._v(" "),a("p",[t._v("如果树中的每一个节点最多只能由两个子节点，这样的树就称为二叉树；")]),t._v(" "),a("h3",{attrs:{id:"二叉树的组成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二叉树的组成"}},[t._v("#")]),t._v(" 二叉树的组成")]),t._v(" "),a("ul",[a("li",[t._v("二叉树可以为空，也就是没有节点；")]),t._v(" "),a("li",[t._v("若二叉树不为空，则它由根节点和称为其左子树 TL 和右子树 TR 的两个不相交的二叉树组成；")])]),t._v(" "),a("h3",{attrs:{id:"二叉树的五种形态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二叉树的五种形态"}},[t._v("#")]),t._v(" 二叉树的五种形态")]),t._v(" "),a("p",[a("img",{attrs:{src:"/picgo/images/data-structure/11-01.png",alt:"image"}})]),t._v(" "),a("p",[t._v("上图分别表示：空的二叉树、只有一个节点的二叉树、只有左子树 TL 的二叉树、只有右子树 TR 的二叉树和有左右两个子树的二叉树。")]),t._v(" "),a("h3",{attrs:{id:"二叉树的特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二叉树的特性"}},[t._v("#")]),t._v(" 二叉树的特性")]),t._v(" "),a("ul",[a("li",[t._v("一个二叉树的第 i 层的最大节点树为：2^(i-1)^，i >= 1；")]),t._v(" "),a("li",[t._v("深度为 k 的二叉树的最大节点总数为：2^k^ - 1 ，k >= 1；")]),t._v(" "),a("li",[t._v("对任何非空二叉树，若 n~0~ 表示叶子节点的个数，n~2~表示度为 2 的非叶子节点个数，那么两者满足关系：n~0~ = n~2~ + 1；如下图所示：H，E，I，J，G 为叶子节点，总数为 5；A，B，C，F 为度为 2 的非叶子节点，总数为 4；满足 n~0~ = n~2~ + 1 的规律。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/picgo/images/data-structure/11-02.png",alt:"image"}})]),t._v(" "),a("h3",{attrs:{id:"特殊的二叉树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特殊的二叉树"}},[t._v("#")]),t._v(" 特殊的二叉树")]),t._v(" "),a("h4",{attrs:{id:"完美二叉树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完美二叉树"}},[t._v("#")]),t._v(" 完美二叉树")]),t._v(" "),a("p",[t._v("完美二叉树（Perfect Binary Tree）也成为满二叉树（Full Binary Tree），在二叉树中，除了最下一层的叶子节点外，每层节点都有 2 个子节点，这就构成了完美二叉树。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/picgo/images/data-structure/11-03.png",alt:"image"}})]),t._v(" "),a("h4",{attrs:{id:"完全二叉树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完全二叉树"}},[t._v("#")]),t._v(" 完全二叉树")]),t._v(" "),a("p",[t._v("完全二叉树（Complete Binary Tree）:")]),t._v(" "),a("ul",[a("li",[t._v("除了二叉树最后一层外，其他各层的节点数都达到了最大值；")]),t._v(" "),a("li",[t._v("并且，最后一层的叶子节点从左向右是连续存在，只缺失右侧若干叶子节点；")]),t._v(" "),a("li",[t._v("完美二叉树是特殊的完全二叉树；")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/picgo/images/data-structure/11-04.png",alt:"image"}})]),t._v(" "),a("p",[t._v("在上图中，由于 H 缺失了右子节点，所以它不是完全二叉树。")]),t._v(" "),a("h3",{attrs:{id:"二叉树的数据存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二叉树的数据存储"}},[t._v("#")]),t._v(" 二叉树的数据存储")]),t._v(" "),a("p",[t._v("常见的二叉树存储方式为数组和链表：")]),t._v(" "),a("h4",{attrs:{id:"使用数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用数组"}},[t._v("#")]),t._v(" 使用数组")]),t._v(" "),a("ul",[a("li",[t._v("完全二叉树：按从上到下，从左到右的方式存储数据。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/picgo/images/data-structure/11-05.png",alt:"image"}})]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("节点")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("A")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("B")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("C")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("D")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("E")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("F")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("G")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("H")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("I")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("序号")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("7")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("8")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("9")])])])]),t._v(" "),a("p",[t._v("使用数组存储时，取数据的时候也十分方便：左子节点的序号等于父节点序号 _ 2，右子节点的序号等于父节点序号 _ 2 + 1 。")]),t._v(" "),a("ul",[a("li",[t._v("非完全二叉树：非完全二叉树需要转换成完全二叉树才能按照上面的方案存储，这样会浪费很大的存储空间。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/picgo/images/data-structure/11-06.png",alt:"image"}})]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("节点")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("A")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("B")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("C")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("^")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("^")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("F")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("^")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("^")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("^")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("^")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("^")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("^")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("M")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("序号")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("7")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("8")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("9")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("11")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("13")])])])]),t._v(" "),a("h4",{attrs:{id:"使用链表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用链表"}},[t._v("#")]),t._v(" 使用链表")]),t._v(" "),a("p",[t._v("二叉树最常见的存储方式为链表：每一个节点封装成一个 Node，Node 中包含存储的数据、左节点的引用和右节点的引用。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/picgo/images/data-structure/11-07.png",alt:"image"}})])])}),[],!1,null,null,null);e.default=v.exports}}]);