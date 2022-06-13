(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{756:function(t,s,a){"use strict";a.r(s);var v=a(19),_=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"http-1-x-新特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-1-x-新特性"}},[t._v("#")]),t._v(" HTTP/1.x 新特性")]),t._v(" "),a("ul",[a("li",[t._v("默认是长连接")]),t._v(" "),a("li",[t._v("支持流水线")]),t._v(" "),a("li",[t._v("支持同时打开多个 TCP 连接")]),t._v(" "),a("li",[t._v("支持虚拟主机")]),t._v(" "),a("li",[t._v("新增状态码 100")]),t._v(" "),a("li",[t._v("支持分块传输编码")]),t._v(" "),a("li",[t._v("新增缓存处理指令 max-age")])]),t._v(" "),a("h2",{attrs:{id:"http-1-x-缺陷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-1-x-缺陷"}},[t._v("#")]),t._v(" HTTP/1.x 缺陷")]),t._v(" "),a("p",[t._v("HTTP/1.x 实现简单是以牺牲性能为代价的：")]),t._v(" "),a("ul",[a("li",[t._v("客户端需要使用多个连接才能实现并发和缩短延迟；")]),t._v(" "),a("li",[t._v("不会压缩请求和响应首部，从而导致不必要的网络流量；")]),t._v(" "),a("li",[t._v("不支持有效的资源优先级，致使底层 TCP 连接的利用率低下。")])]),t._v(" "),a("h2",{attrs:{id:"二进制分帧层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二进制分帧层"}},[t._v("#")]),t._v(" 二进制分帧层")]),t._v(" "),a("p",[t._v("HTTP/2.0 将报文分成 HEADERS 帧和 DATA 帧，它们都是二进制格式的。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/songlitao/picgo/resource/blog/assets/imgs/http/06-01.png",alt:"images"}})]),t._v(" "),a("p",[t._v("在通信过程中，只会有一个 TCP 连接存在，它承载了任意数量的双向数据流（Stream）。")]),t._v(" "),a("ul",[a("li",[t._v("一个数据流（Stream）都有一个唯一标识符和可选的优先级信息，用于承载双向信息。")]),t._v(" "),a("li",[t._v("消息（Message）是与逻辑请求或响应对应的完整的一系列帧。")]),t._v(" "),a("li",[t._v("帧（Frame）是最小的通信单位，来自不同数据流的帧可以交错发送，然后再根据每个帧头的数据流标识符重新组装。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/songlitao/picgo/resource/blog/assets/imgs/http/06-02.png",alt:"images"}})]),t._v(" "),a("h2",{attrs:{id:"服务端推送"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务端推送"}},[t._v("#")]),t._v(" 服务端推送")]),t._v(" "),a("p",[t._v("HTTP/2.0 在客户端请求一个资源时，会把相关的资源一起发送给客户端，客户端就不需要再次发起请求了。例如客户端请求 page.html 页面，服务端就把 script.js 和 style.css 等与之相关的资源一起发给客户端。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/songlitao/picgo/resource/blog/assets/imgs/http/06-03.png",alt:"images"}})]),t._v(" "),a("h2",{attrs:{id:"首部压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首部压缩"}},[t._v("#")]),t._v(" 首部压缩")]),t._v(" "),a("p",[t._v("HTTP/1.1 的首部带有大量信息，而且每次都要重复发送。")]),t._v(" "),a("p",[t._v("HTTP/2.0 要求客户端和服务器同时维护和更新一个包含之前见过的首部字段表，从而避免了重复传输。")]),t._v(" "),a("p",[t._v("不仅如此，HTTP/2.0 也使用 Huffman 编码对首部字段进行压缩。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/songlitao/picgo/resource/blog/assets/imgs/http/06-04.png",alt:"images"}})])])}),[],!1,null,null,null);s.default=_.exports}}]);