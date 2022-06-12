(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{687:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"page-visibility-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#page-visibility-api"}},[t._v("#")]),t._v(" Page Visibility API")]),t._v(" "),s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[t._v("有时候，开发者需要知道，用户正在离开页面。常用的方法是监听下面三个事件。")]),t._v(" "),s("blockquote",[s("ul",[s("li",[s("code",[t._v("pagehide")])]),t._v(" "),s("li",[s("code",[t._v("beforeunload")])]),t._v(" "),s("li",[s("code",[t._v("unload")])])])]),t._v(" "),s("p",[t._v("但是，这些事件在手机上可能不会触发，页面就直接关闭了。因为手机系统可以将一个进程直接转入后台，然后杀死。")]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("用户点击了一条系统通知，切换到另一个 App。")]),t._v(" "),s("li",[t._v("用户进入任务切换窗口，切换到另一个 App。")]),t._v(" "),s("li",[t._v("用户点击了 Home 按钮，切换回主屏幕。")]),t._v(" "),s("li",[t._v("操作系统自动切换到另一个 App（比如，收到一个电话）。")])])]),t._v(" "),s("p",[t._v("上面这些情况，都会导致手机将浏览器进程切换到后台，然后为了节省资源，可能就会杀死浏览器进程。")]),t._v(" "),s("p",[t._v("以前，页面被系统切换，以及系统清除浏览器进程，是无法监听到的。开发者想要指定，任何一种页面卸载情况下都会执行的代码，也是无法做到的。为了解决这个问题，就诞生了 Page Visibility API。不管手机或桌面电脑，所有情况下，这个 API 都会监听到页面的可见性发生变化。")]),t._v(" "),s("p",[t._v("这个新的 API 的意义在于，通过监听网页的可见性，可以预判网页的卸载，还可以用来节省资源，减缓电能的消耗。比如，一旦用户不看网页，下面这些网页行为都是可以暂停的。")]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("对服务器的轮询")]),t._v(" "),s("li",[t._v("网页动画")]),t._v(" "),s("li",[t._v("正在播放的音频或视频")])])]),t._v(" "),s("h2",{attrs:{id:"document-visibilitystate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#document-visibilitystate"}},[t._v("#")]),t._v(" document.visibilityState")]),t._v(" "),s("p",[t._v("这个 API 主要在"),s("code",[t._v("document")]),t._v("对象上，新增了一个"),s("code",[t._v("document.visibilityState")]),t._v("属性。该属性返回一个字符串，表示页面当前的可见性状态，共有三个可能的值。")]),t._v(" "),s("blockquote",[s("ul",[s("li",[s("code",[t._v("hidden")]),t._v("：页面彻底不可见。")]),t._v(" "),s("li",[s("code",[t._v("visible")]),t._v("：页面至少一部分可见。")]),t._v(" "),s("li",[s("code",[t._v("prerender")]),t._v("：页面即将或正在渲染，处于不可见状态。")])])]),t._v(" "),s("p",[t._v("其中，"),s("code",[t._v("hidden")]),t._v("状态和"),s("code",[t._v("visible")]),t._v("状态是所有浏览器都必须支持的。"),s("code",[t._v("prerender")]),t._v("状态只在支持“预渲染”的浏览器上才会出现，比如 Chrome 浏览器就有预渲染功能，可以在用户不可见的状态下，预先把页面渲染出来，等到用户要浏览的时候，直接展示渲染好的网页。")]),t._v(" "),s("p",[t._v("只要页面可见，哪怕只露出一个角，"),s("code",[t._v("document.visibilityState")]),t._v("属性就返回"),s("code",[t._v("visible")]),t._v("。只有以下四种情况，才会返回"),s("code",[t._v("hidden")]),t._v("。")]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("浏览器最小化。")]),t._v(" "),s("li",[t._v("浏览器没有最小化，但是当前页面切换成了背景页。")]),t._v(" "),s("li",[t._v("浏览器将要卸载（unload）页面。")]),t._v(" "),s("li",[t._v("操作系统触发锁屏屏幕。")])])]),t._v(" "),s("p",[t._v("可以看到，上面四种场景涵盖了页面可能被卸载的所有情况。也就是说，页面卸载之前，"),s("code",[t._v("document.visibilityState")]),t._v("属性一定会变成"),s("code",[t._v("hidden")]),t._v("。事实上，这也是设计这个 API 的主要目的。")]),t._v(" "),s("p",[t._v("另外，早期版本的 API，这个属性还有第四个值"),s("code",[t._v("unloaded")]),t._v("，表示页面即将卸载，现在已经被废弃了。")]),t._v(" "),s("p",[t._v("注意，"),s("code",[t._v("document.visibilityState")]),t._v("属性只针对顶层窗口，内嵌的"),s("code",[t._v("<iframe>")]),t._v("页面的"),s("code",[t._v("document.visibilityState")]),t._v("属性由顶层窗口决定。使用 CSS 属性隐藏"),s("code",[t._v("<iframe>")]),t._v("页面（比如"),s("code",[t._v("display: none;")]),t._v("），并不会影响内嵌页面的可见性。")]),t._v(" "),s("h2",{attrs:{id:"document-hidden"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#document-hidden"}},[t._v("#")]),t._v(" document.hidden")]),t._v(" "),s("p",[t._v("由于历史原因，这个 API 还定义了"),s("code",[t._v("document.hidden")]),t._v("属性。该属性只读，返回一个布尔值，表示当前页面是否可见。")]),t._v(" "),s("p",[t._v("当"),s("code",[t._v("document.visibilityState")]),t._v("属性返回"),s("code",[t._v("visible")]),t._v("时，"),s("code",[t._v("document.hidden")]),t._v("属性返回"),s("code",[t._v("false")]),t._v("；其他情况下，都返回"),s("code",[t._v("true")]),t._v("。")]),t._v(" "),s("p",[t._v("该属性只是出于历史原因而保留的，只要有可能，都应该使用"),s("code",[t._v("document.visibilityState")]),t._v("属性，而不是使用这个属性。")]),t._v(" "),s("h2",{attrs:{id:"visibilitychange-事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#visibilitychange-事件"}},[t._v("#")]),t._v(" visibilitychange 事件")]),t._v(" "),s("p",[t._v("只要"),s("code",[t._v("document.visibilityState")]),t._v("属性发生变化，就会触发"),s("code",[t._v("visibilitychange")]),t._v("事件。因此，可以通过监听这个事件（通过"),s("code",[t._v("document.addEventListener()")]),t._v("方法或"),s("code",[t._v("document.onvisibilitychange")]),t._v("属性），跟踪页面可见性的变化。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'visibilitychange'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用户离开了当前页面")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("visibilityState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hidden'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'页面不可见'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用户打开或回到页面")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("visibilityState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'visible'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'页面可见'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("上面代码是 Page Visibility API 的最基本用法，可以监听可见性变化。")]),t._v(" "),s("p",[t._v("下面是另一个例子，一旦页面不可见，就暂停视频播放。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" vidElem "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'video-demo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'visibilitychange'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" startStopVideo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startStopVideo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("visibilityState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hidden'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    vidElem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pause")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("visibilityState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'visible'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    vidElem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"页面卸载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面卸载"}},[t._v("#")]),t._v(" 页面卸载")]),t._v(" "),s("p",[t._v("下面专门讨论一下，如何正确监听页面卸载。")]),t._v(" "),s("p",[t._v("页面卸载可以分成三种情况。")]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("页面可见时，用户关闭 Tab 页或浏览器窗口。")]),t._v(" "),s("li",[t._v("页面可见时，用户在当前窗口前往另一个页面。")]),t._v(" "),s("li",[t._v("页面不可见时，用户或系统关闭浏览器窗口。")])])]),t._v(" "),s("p",[t._v("这三种情况，都会触发"),s("code",[t._v("visibilitychange")]),t._v("事件。前两种情况，该事件在用户离开页面时触发；最后一种情况，该事件在页面从可见状态变为不可见状态时触发。")]),t._v(" "),s("p",[t._v("由此可见，"),s("code",[t._v("visibilitychange")]),t._v("事件比"),s("code",[t._v("pagehide")]),t._v("、"),s("code",[t._v("beforeunload")]),t._v("、"),s("code",[t._v("unload")]),t._v("事件更可靠，所有情况下都会触发（从"),s("code",[t._v("visible")]),t._v("变为"),s("code",[t._v("hidden")]),t._v("）。因此，可以只监听这个事件，运行页面卸载时需要运行的代码，不用监听后面那三个事件。")]),t._v(" "),s("p",[t._v("甚至可以这样说，"),s("code",[t._v("unload")]),t._v("事件在任何情况下都不必监听，"),s("code",[t._v("beforeunload")]),t._v("事件只有一种适用场景，就是用户修改了表单，没有提交就离开当前页面。另一方面，指定了这两个事件的监听函数，浏览器就不会缓存当前页面。")]),t._v(" "),s("h2",{attrs:{id:"参考链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://w3c.github.io/page-visibility/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Page Visibility Level 2"),s("OutboundLink")],1),t._v(", W3C")]),t._v(" "),s("li",[s("a",{attrs:{href:"http://davidwalsh.name/page-visibility",target:"_blank",rel:"noopener noreferrer"}},[t._v("Page Visibility API"),s("OutboundLink")],1),t._v(", David Walsh")]),t._v(" "),s("li",[s("a",{attrs:{href:"http://www.html5rocks.com/en/tutorials/pagevisibility/intro/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using the pageVisbility API"),s("OutboundLink")],1),t._v(", Joe Marini")]),t._v(" "),s("li",[s("a",{attrs:{href:"http://blogs.msdn.com/b/ie/archive/2011/07/08/using-pc-hardware-more-efficiently-in-html5-new-web-performance-apis-part-2.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using PC Hardware more efficiently in HTML5: New Web Performance APIs, Part 2"),s("OutboundLink")],1),t._v(", Jatinder Mann")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Don't lose user and app state, use Page Visibility"),s("OutboundLink")],1),t._v(", Ilya Grigorik")])])])}),[],!1,null,null,null);a.default=n.exports}}]);