(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{751:function(a,t,e){"use strict";e.r(t);var s=e(19),_=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"连接管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#连接管理"}},[a._v("#")]),a._v(" 连接管理")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/songlitao/picgo/resource/blog/assets/imgs/http/04-01.png",alt:"images"}})]),a._v(" "),e("h3",{attrs:{id:"_1-短连接与长连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-短连接与长连接"}},[a._v("#")]),a._v(" 1. 短连接与长连接")]),a._v(" "),e("p",[a._v("当浏览器访问一个包含多张图片的 HTML 页面时，除了请求访问的 HTML 页面资源，还会请求图片资源。如果每进行一次 HTTP 通信就要新建一个 TCP 连接，那么开销会很大。")]),a._v(" "),e("p",[a._v("长连接只需要建立一次 TCP 连接就能进行多次 HTTP 通信。")]),a._v(" "),e("ul",[e("li",[a._v("从 HTTP/1.1 开始默认是长连接的，如果要断开连接，需要由客户端或者服务器端提出断开，使用 "),e("code",[a._v("Connection : close")]),a._v("；")]),a._v(" "),e("li",[a._v("在 HTTP/1.1 之前默认是短连接的，如果需要使用长连接，则使用 "),e("code",[a._v("Connection : Keep-Alive")]),a._v("。")])]),a._v(" "),e("h3",{attrs:{id:"_2-流水线"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-流水线"}},[a._v("#")]),a._v(" 2. 流水线")]),a._v(" "),e("p",[a._v("默认情况下，HTTP 请求是按顺序发出的，下一个请求只有在当前请求收到响应之后才会被发出。由于受到网络延迟和带宽的限制，在下一个请求被发送到服务器之前，可能需要等待很长时间。")]),a._v(" "),e("p",[a._v("流水线是在同一条长连接上连续发出请求，而不用等待响应返回，这样可以减少延迟。")]),a._v(" "),e("h2",{attrs:{id:"cookie"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[a._v("#")]),a._v(" Cookie")]),a._v(" "),e("p",[a._v("HTTP 协议是无状态的，主要是为了让 HTTP 协议尽可能简单，使得它能够处理大量事务。HTTP/1.1 引入 Cookie 来保存状态信息。")]),a._v(" "),e("p",[a._v("Cookie 是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器之后向同一服务器再次发起请求时被携带上，用于告知服务端两个请求是否来自同一浏览器。由于之后每次请求都会需要携带 Cookie 数据，因此会带来额外的性能开销（尤其是在移动环境下）。")]),a._v(" "),e("p",[a._v("Cookie 曾一度用于客户端数据的存储，因为当时并没有其它合适的存储办法而作为唯一的存储手段，但现在随着现代浏览器开始支持各种各样的存储方式，Cookie 渐渐被淘汰。新的浏览器 API 已经允许开发者直接将数据存储到本地，如使用 Web storage API（本地存储和会话存储）或 IndexedDB。")]),a._v(" "),e("h3",{attrs:{id:"_1-用途"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-用途"}},[a._v("#")]),a._v(" 1. 用途")]),a._v(" "),e("ul",[e("li",[a._v("会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）")]),a._v(" "),e("li",[a._v("个性化设置（如用户自定义设置、主题等）")]),a._v(" "),e("li",[a._v("浏览器行为跟踪（如跟踪分析用户行为等）")])]),a._v(" "),e("h3",{attrs:{id:"_2-创建过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建过程"}},[a._v("#")]),a._v(" 2. 创建过程")]),a._v(" "),e("p",[a._v("服务器发送的响应报文包含 Set-Cookie 首部字段，客户端得到响应报文后把 Cookie 内容保存到浏览器中。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("HTTP/1.0 200 OK\nContent-type: text/html\nSet-Cookie: yummy_cookie=choco\nSet-Cookie: tasty_cookie=strawberry\n\n[page content]\n")])])]),e("p",[a._v("客户端之后对同一个服务器发送请求时，会从浏览器中取出 Cookie 信息并通过 Cookie 请求首部字段发送给服务器。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("GET /sample_page.html HTTP/1.1\nHost: www.example.org\nCookie: yummy_cookie=choco; tasty_cookie=strawberry\n")])])]),e("h3",{attrs:{id:"_3-分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-分类"}},[a._v("#")]),a._v(" 3. 分类")]),a._v(" "),e("ul",[e("li",[a._v("会话期 Cookie：浏览器关闭之后它会被自动删除，也就是说它仅在会话期内有效。")]),a._v(" "),e("li",[a._v("持久性 Cookie：指定过期时间（Expires）或有效期（max-age）之后就成为了持久性的 Cookie。")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;\n")])])]),e("h3",{attrs:{id:"_4-作用域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-作用域"}},[a._v("#")]),a._v(" 4. 作用域")]),a._v(" "),e("p",[a._v("Domain 标识指定了哪些主机可以接受 Cookie。如果不指定，默认为当前文档的主机（不包含子域名）。如果指定了 Domain，则一般包含子域名。例如，如果设置 Domain=mozilla.org，则 Cookie 也包含在子域名中（如 developer.mozilla.org）。")]),a._v(" "),e("p",[a._v('Path 标识指定了主机下的哪些路径可以接受 Cookie（该 URL 路径必须存在于请求 URL 中）。以字符 %x2F ("/") 作为路径分隔符，子路径也会被匹配。例如，设置 Path=/docs，则以下地址都会匹配：')]),a._v(" "),e("ul",[e("li",[a._v("/docs")]),a._v(" "),e("li",[a._v("/docs/Web/")]),a._v(" "),e("li",[a._v("/docs/Web/HTTP")])]),a._v(" "),e("h3",{attrs:{id:"_5-javascript"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-javascript"}},[a._v("#")]),a._v(" 5. JavaScript")]),a._v(" "),e("p",[a._v("浏览器通过 "),e("code",[a._v("document.cookie")]),a._v(" 属性可创建新的 Cookie，也可通过该属性访问非 HttpOnly 标记的 Cookie。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('document.cookie = "yummy_cookie=choco";\ndocument.cookie = "tasty_cookie=strawberry";\nconsole.log(document.cookie);\n')])])]),e("h3",{attrs:{id:"_6-httponly"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-httponly"}},[a._v("#")]),a._v(" 6. HttpOnly")]),a._v(" "),e("p",[a._v("标记为 HttpOnly 的 Cookie 不能被 JavaScript 脚本调用。跨站脚本攻击 (XSS) 常常使用 JavaScript 的 "),e("code",[a._v("document.cookie")]),a._v(" API 窃取用户的 Cookie 信息，因此使用 HttpOnly 标记可以在一定程度上避免 XSS 攻击。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly\n")])])]),e("h3",{attrs:{id:"_7-secure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-secure"}},[a._v("#")]),a._v(" 7. Secure")]),a._v(" "),e("p",[a._v("标记为 Secure 的 Cookie 只能通过被 HTTPS 协议加密过的请求发送给服务端。但即便设置了 Secure 标记，敏感信息也不应该通过 Cookie 传输，因为 Cookie 有其固有的不安全性，Secure 标记也无法提供确实的安全保障。")]),a._v(" "),e("h3",{attrs:{id:"_8-session"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-session"}},[a._v("#")]),a._v(" 8. Session")]),a._v(" "),e("p",[a._v("除了可以将用户信息通过 Cookie 存储在用户浏览器中，也可以利用 Session 存储在服务器端，存储在服务器端的信息更加安全。")]),a._v(" "),e("p",[a._v("Session 可以存储在服务器上的文件、数据库或者内存中。也可以将 Session 存储在 Redis 这种内存型数据库中，效率会更高。")]),a._v(" "),e("p",[a._v("使用 Session 维护用户登录状态的过程如下：")]),a._v(" "),e("ul",[e("li",[a._v("用户进行登录时，用户提交包含用户名和密码的表单，放入 HTTP 请求报文中；")]),a._v(" "),e("li",[a._v("服务器验证该用户名和密码，如果正确则把用户信息存储到 Redis 中，它在 Redis 中的 Key 称为 Session ID；")]),a._v(" "),e("li",[a._v("服务器返回的响应报文的 Set-Cookie 首部字段包含了这个 Session ID，客户端收到响应报文之后将该 Cookie 值存入浏览器中；")]),a._v(" "),e("li",[a._v("客户端之后对同一个服务器进行请求时会包含该 Cookie 值，服务器收到之后提取出 Session ID，从 Redis 中取出用户信息，继续之前的业务操作。")])]),a._v(" "),e("p",[a._v("应该注意 Session ID 的安全性问题，不能让它被恶意攻击者轻易获取，那么就不能产生一个容易被猜到的 Session ID 值。此外，还需要经常重新生成 Session ID。在对安全性要求极高的场景下，例如转账等操作，除了使用 Session 管理用户状态之外，还需要对用户进行重新验证，比如重新输入密码，或者使用短信验证码等方式。")]),a._v(" "),e("h3",{attrs:{id:"_9-浏览器禁用-cookie"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-浏览器禁用-cookie"}},[a._v("#")]),a._v(" 9. 浏览器禁用 Cookie")]),a._v(" "),e("p",[a._v("此时无法使用 Cookie 来保存用户信息，只能使用 Session。除此之外，不能再将 Session ID 存放到 Cookie 中，而是使用 URL 重写技术，将 Session ID 作为 URL 的参数进行传递。")]),a._v(" "),e("h3",{attrs:{id:"_10-cookie-与-session-选择"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-cookie-与-session-选择"}},[a._v("#")]),a._v(" 10. Cookie 与 Session 选择")]),a._v(" "),e("ul",[e("li",[a._v("Cookie 只能存储 ASCII 码字符串，而 Session 则可以存储任何类型的数据，因此在考虑数据复杂性时首选 Session；")]),a._v(" "),e("li",[a._v("Cookie 存储在浏览器中，容易被恶意查看。如果非要将一些隐私数据存在 Cookie 中，可以将 Cookie 值进行加密，然后在服务器进行解密；")]),a._v(" "),e("li",[a._v("对于大型网站，如果用户所有的信息都存储在 Session 中，那么开销是非常大的，因此不建议将所有的用户信息都存储到 Session 中。")])]),a._v(" "),e("h2",{attrs:{id:"缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[a._v("#")]),a._v(" 缓存")]),a._v(" "),e("h3",{attrs:{id:"_1-优点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-优点"}},[a._v("#")]),a._v(" 1. 优点")]),a._v(" "),e("ul",[e("li",[a._v("缓解服务器压力；")]),a._v(" "),e("li",[a._v("降低客户端获取资源的延迟：缓存通常位于内存中，读取缓存的速度更快。并且缓存服务器在地理位置上也有可能比源服务器来得近，例如浏览器缓存。")])]),a._v(" "),e("h3",{attrs:{id:"_2-实现方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-实现方法"}},[a._v("#")]),a._v(" 2. 实现方法")]),a._v(" "),e("ul",[e("li",[a._v("让代理服务器进行缓存；")]),a._v(" "),e("li",[a._v("让客户端浏览器进行缓存。")])]),a._v(" "),e("h3",{attrs:{id:"_3-cache-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-cache-control"}},[a._v("#")]),a._v(" 3. Cache-Control")]),a._v(" "),e("p",[a._v("HTTP/1.1 通过 Cache-Control 首部字段来控制缓存。")]),a._v(" "),e("p",[e("strong",[a._v("3.1 禁止进行缓存")])]),a._v(" "),e("p",[a._v("no-store 指令规定不能对请求或响应的任何一部分进行缓存。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Cache-Control: no-store\n")])])]),e("p",[e("strong",[a._v("3.2 强制确认缓存")])]),a._v(" "),e("p",[a._v("no-cache 指令规定缓存服务器需要先向源服务器验证缓存资源的有效性，只有当缓存资源有效时才能使用该缓存对客户端的请求进行响应。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Cache-Control: no-cache\n")])])]),e("p",[e("strong",[a._v("3.3 私有缓存和公共缓存")])]),a._v(" "),e("p",[a._v("private 指令规定了将资源作为私有缓存，只能被单独用户使用，一般存储在用户浏览器中。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Cache-Control: private\n")])])]),e("p",[a._v("public 指令规定了将资源作为公共缓存，可以被多个用户使用，一般存储在代理服务器中。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Cache-Control: public\n")])])]),e("p",[e("strong",[a._v("3.4 缓存过期机制")])]),a._v(" "),e("p",[a._v("max-age 指令出现在请求报文，并且缓存资源的缓存时间小于该指令指定的时间，那么就能接受该缓存。")]),a._v(" "),e("p",[a._v("max-age 指令出现在响应报文，表示缓存资源在缓存服务器中保存的时间。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Cache-Control: max-age=31536000\n")])])]),e("p",[a._v("Expires 首部字段也可以用于告知缓存服务器该资源什么时候会过期。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Expires: Wed, 04 Jul 2012 08:26:05 GMT\n")])])]),e("ul",[e("li",[a._v("在 HTTP/1.1 中，会优先处理 max-age 指令；")]),a._v(" "),e("li",[a._v("在 HTTP/1.0 中，max-age 指令会被忽略掉。")])]),a._v(" "),e("h3",{attrs:{id:"_4-缓存验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-缓存验证"}},[a._v("#")]),a._v(" 4. 缓存验证")]),a._v(" "),e("p",[a._v("需要先了解 ETag 首部字段的含义，它是资源的唯一标识。URL 不能唯一表示资源，例如 "),e("code",[a._v("http://www.google.com/")]),a._v(" 有中文和英文两个资源，只有 ETag 才能对这两个资源进行唯一标识。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('ETag: "82e22293907ce725faf67773957acd12"\n')])])]),e("p",[a._v("可以将缓存资源的 ETag 值放入 If-None-Match 首部，服务器收到该请求后，判断缓存资源的 ETag 值和资源的最新 ETag 值是否一致，如果一致则表示缓存资源有效，返回 304 Not Modified。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('If-None-Match: "82e22293907ce725faf67773957acd12"\n')])])]),e("p",[a._v("Last-Modified 首部字段也可以用于缓存验证，它包含在源服务器发送的响应报文中，指示源服务器对资源的最后修改时间。但是它是一种弱校验器，因为只能精确到一秒，所以它通常作为 ETag 的备用方案。如果响应首部字段里含有这个信息，客户端可以在后续的请求中带上 If-Modified-Since 来验证缓存。服务器只在所请求的资源在给定的日期时间之后对内容进行过修改的情况下才会将资源返回，状态码为 200 OK。如果请求的资源从那时起未经修改，那么返回一个不带有实体主体的 304 Not Modified 响应报文。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Last-Modified: Wed, 21 Oct 2015 07:28:00 GMT\nIf-Modified-Since: Wed, 21 Oct 2015 07:28:00 GMT\n")])])]),e("h2",{attrs:{id:"内容协商"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内容协商"}},[a._v("#")]),a._v(" 内容协商")]),a._v(" "),e("p",[a._v("通过内容协商返回最合适的内容，例如根据浏览器的默认语言选择返回中文界面还是英文界面。")]),a._v(" "),e("h3",{attrs:{id:"_1-类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-类型"}},[a._v("#")]),a._v(" 1. 类型")]),a._v(" "),e("p",[e("strong",[a._v("1.1 服务端驱动型")])]),a._v(" "),e("p",[a._v("客户端设置特定的 HTTP 首部字段，例如 Accept、Accept-Charset、Accept-Encoding、Accept-Language，服务器根据这些字段返回特定的资源。")]),a._v(" "),e("p",[a._v("它存在以下问题：")]),a._v(" "),e("ul",[e("li",[a._v("服务器很难知道客户端浏览器的全部信息；")]),a._v(" "),e("li",[a._v("客户端提供的信息相当冗长（HTTP/2 协议的首部压缩机制缓解了这个问题），并且存在隐私风险（HTTP 指纹识别技术）；")]),a._v(" "),e("li",[a._v("给定的资源需要返回不同的展现形式，共享缓存的效率会降低，而服务器端的实现会越来越复杂。")])]),a._v(" "),e("p",[e("strong",[a._v("1.2 代理驱动型")])]),a._v(" "),e("p",[a._v("服务器返回 300 Multiple Choices 或者 406 Not Acceptable，客户端从中选出最合适的那个资源。")]),a._v(" "),e("h3",{attrs:{id:"_2-vary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-vary"}},[a._v("#")]),a._v(" 2. Vary")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Vary: Accept-Language\n")])])]),e("p",[a._v("在使用内容协商的情况下，只有当缓存服务器中的缓存满足内容协商条件时，才能使用该缓存，否则应该向源服务器请求该资源。")]),a._v(" "),e("p",[a._v("例如，一个客户端发送了一个包含 Accept-Language 首部字段的请求之后，源服务器返回的响应包含 "),e("code",[a._v("Vary: Accept-Language")]),a._v(" 内容，缓存服务器对这个响应进行缓存之后，在客户端下一次访问同一个 URL 资源，并且 Accept-Language 与缓存中的对应的值相同时才会返回该缓存。")]),a._v(" "),e("h2",{attrs:{id:"内容编码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内容编码"}},[a._v("#")]),a._v(" 内容编码")]),a._v(" "),e("p",[a._v("内容编码将实体主体进行压缩，从而减少传输的数据量。")]),a._v(" "),e("p",[a._v("常用的内容编码有：gzip、compress、deflate、identity。")]),a._v(" "),e("p",[a._v("浏览器发送 Accept-Encoding 首部，其中包含有它所支持的压缩算法，以及各自的优先级。服务器则从中选择一种，使用该算法对响应的消息主体进行压缩，并且发送 Content-Encoding 首部来告知浏览器它选择了哪一种算法。由于该内容协商过程是基于编码类型来选择资源的展现形式的，响应报文的 Vary 首部字段至少要包含 Content-Encoding。")]),a._v(" "),e("h2",{attrs:{id:"范围请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#范围请求"}},[a._v("#")]),a._v(" 范围请求")]),a._v(" "),e("p",[a._v("如果网络出现中断，服务器只发送了一部分数据，范围请求可以使得客户端只请求服务器未发送的那部分数据，从而避免服务器重新发送所有数据。")]),a._v(" "),e("h3",{attrs:{id:"_1-range"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-range"}},[a._v("#")]),a._v(" 1. Range")]),a._v(" "),e("p",[a._v("在请求报文中添加 Range 首部字段指定请求的范围。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("GET /z4d4kWk.jpg HTTP/1.1\nHost: i.imgur.com\nRange: bytes=0-1023\n")])])]),e("p",[a._v("请求成功的话服务器返回的响应包含 206 Partial Content 状态码。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("HTTP/1.1 206 Partial Content\nContent-Range: bytes 0-1023/146515\nContent-Length: 1024\n...\n(binary content)\n")])])]),e("h3",{attrs:{id:"_2-accept-ranges"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-accept-ranges"}},[a._v("#")]),a._v(" 2. Accept-Ranges")]),a._v(" "),e("p",[a._v("响应首部字段 Accept-Ranges 用于告知客户端是否能处理范围请求，可以处理使用 bytes，否则使用 none。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Accept-Ranges: bytes\n")])])]),e("h3",{attrs:{id:"_3-响应状态码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-响应状态码"}},[a._v("#")]),a._v(" 3. 响应状态码")]),a._v(" "),e("ul",[e("li",[a._v("在请求成功的情况下，服务器会返回 206 Partial Content 状态码。")]),a._v(" "),e("li",[a._v("在请求的范围越界的情况下，服务器会返回 416 Requested Range Not Satisfiable 状态码。")]),a._v(" "),e("li",[a._v("在不支持范围请求的情况下，服务器会返回 200 OK 状态码。")])]),a._v(" "),e("h2",{attrs:{id:"分块传输编码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分块传输编码"}},[a._v("#")]),a._v(" 分块传输编码")]),a._v(" "),e("p",[a._v("Chunked Transfer Encoding，可以把数据分割成多块，让浏览器逐步显示页面。")]),a._v(" "),e("h2",{attrs:{id:"多部分对象集合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多部分对象集合"}},[a._v("#")]),a._v(" 多部分对象集合")]),a._v(" "),e("p",[a._v("一份报文主体内可含有多种类型的实体同时发送，每个部分之间用 boundary 字段定义的分隔符进行分隔，每个部分都可以有首部字段。")]),a._v(" "),e("p",[a._v("例如，上传多个表单时可以使用如下方式：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('Content-Type: multipart/form-data; boundary=AaB03x\n\n--AaB03x\nContent-Disposition: form-data; name="submit-name"\n\nLarry\n--AaB03x\nContent-Disposition: form-data; name="files"; filename="file1.txt"\nContent-Type: text/plain\n\n... contents of file1.txt ...\n--AaB03x--\n')])])]),e("h2",{attrs:{id:"虚拟主机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#虚拟主机"}},[a._v("#")]),a._v(" 虚拟主机")]),a._v(" "),e("p",[a._v("HTTP/1.1 使用虚拟主机技术，使得一台服务器拥有多个域名，并且在逻辑上可以看成多个服务器。")]),a._v(" "),e("h2",{attrs:{id:"通信数据转发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通信数据转发"}},[a._v("#")]),a._v(" 通信数据转发")]),a._v(" "),e("h3",{attrs:{id:"_1-代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-代理"}},[a._v("#")]),a._v(" 1. 代理")]),a._v(" "),e("p",[a._v("代理服务器接受客户端的请求，并且转发给其它服务器。")]),a._v(" "),e("p",[a._v("使用代理的主要目的是：")]),a._v(" "),e("ul",[e("li",[a._v("缓存")]),a._v(" "),e("li",[a._v("负载均衡")]),a._v(" "),e("li",[a._v("网络访问控制")]),a._v(" "),e("li",[a._v("访问日志记录")])]),a._v(" "),e("p",[a._v("代理服务器分为正向代理和反向代理两种：")]),a._v(" "),e("ul",[e("li",[a._v("用户察觉得到正向代理的存在。")])]),a._v(" "),e("p",[e("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/songlitao/picgo/resource/blog/assets/imgs/http/04-02.png",alt:"images"}})]),a._v(" "),e("ul",[e("li",[a._v("而反向代理一般位于内部网络中，用户察觉不到。")])]),a._v(" "),e("p",[e("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/songlitao/picgo/resource/blog/assets/imgs/http/04-03.png",alt:"images"}})]),a._v(" "),e("h3",{attrs:{id:"_2-网关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-网关"}},[a._v("#")]),a._v(" 2. 网关")]),a._v(" "),e("p",[a._v("与代理服务器不同的是，网关服务器会将 HTTP 转化为其它协议进行通信，从而请求其它非 HTTP 服务器的服务。")]),a._v(" "),e("h3",{attrs:{id:"_3-隧道"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-隧道"}},[a._v("#")]),a._v(" 3. 隧道")]),a._v(" "),e("p",[a._v("使用 SSL 等加密手段，在客户端和服务器之间建立一条安全的通信线路。")])])}),[],!1,null,null,null);t.default=_.exports}}]);