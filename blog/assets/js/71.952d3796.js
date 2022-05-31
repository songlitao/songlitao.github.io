(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{565:function(t,_,v){"use strict";v.r(_);var a=v(19),s=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("HTTP 有以下安全性问题：")]),t._v(" "),v("ul",[v("li",[t._v("使用明文进行通信，内容可能会被窃听；")]),t._v(" "),v("li",[t._v("不验证通信方的身份，通信方的身份有可能遭遇伪装；")]),t._v(" "),v("li",[t._v("无法证明报文的完整性，报文有可能遭篡改。")])]),t._v(" "),v("p",[t._v("HTTPS 并不是新协议，而是让 HTTP 先和 SSL（Secure Sockets Layer）通信，再由 SSL 和 TCP 通信，也就是说 HTTPS 使用了隧道进行通信。")]),t._v(" "),v("p",[t._v("通过使用 SSL，HTTPS 具有了加密（防窃听）、认证（防伪装）和完整性保护（防篡改）。")]),t._v(" "),v("p",[v("img",{attrs:{src:"/picgo/images/http/05-01.jpg",alt:"images"}})]),t._v(" "),v("h2",{attrs:{id:"加密"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#加密"}},[t._v("#")]),t._v(" 加密")]),t._v(" "),v("h3",{attrs:{id:"_1-对称密钥加密"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-对称密钥加密"}},[t._v("#")]),t._v(" 1. 对称密钥加密")]),t._v(" "),v("p",[t._v("对称密钥加密（Symmetric-Key Encryption），加密和解密使用同一密钥。")]),t._v(" "),v("ul",[v("li",[t._v("优点：运算速度快；")]),t._v(" "),v("li",[t._v("缺点：无法安全地将密钥传输给通信方。")])]),t._v(" "),v("p",[v("img",{attrs:{src:"/picgo/images/http/05-02.png",alt:"images"}})]),t._v(" "),v("h3",{attrs:{id:"_2-非对称密钥加密"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-非对称密钥加密"}},[t._v("#")]),t._v(" 2. 非对称密钥加密")]),t._v(" "),v("p",[t._v("非对称密钥加密，又称公开密钥加密（Public-Key Encryption），加密和解密使用不同的密钥。")]),t._v(" "),v("p",[t._v("公开密钥所有人都可以获得，通信发送方获得接收方的公开密钥之后，就可以使用公开密钥进行加密，接收方收到通信内容后使用私有密钥解密。")]),t._v(" "),v("p",[t._v("非对称密钥除了用来加密，还可以用来进行签名。因为私有密钥无法被其他人获取，因此通信发送方使用其私有密钥进行签名，通信接收方使用发送方的公开密钥对签名进行解密，就能判断这个签名是否正确。")]),t._v(" "),v("ul",[v("li",[t._v("优点：可以更安全地将公开密钥传输给通信发送方；")]),t._v(" "),v("li",[t._v("缺点：运算速度慢。")])]),t._v(" "),v("p",[v("img",{attrs:{src:"/picgo/images/http/05-03.png",alt:"images"}})]),t._v(" "),v("h3",{attrs:{id:"_3-https-采用的加密方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-https-采用的加密方式"}},[t._v("#")]),t._v(" 3. HTTPS 采用的加密方式")]),t._v(" "),v("p",[t._v("上面提到对称密钥加密方式的传输效率更高，但是无法安全地将密钥 Secret Key 传输给通信方。而非对称密钥加密方式可以保证传输的安全性，因此我们可以利用非对称密钥加密方式将 Secret Key 传输给通信方。HTTPS 采用混合的加密机制，正是利用了上面提到的方案：")]),t._v(" "),v("ul",[v("li",[t._v("使用非对称密钥加密方式，传输对称密钥加密方式所需要的 Secret Key，从而保证安全性;")]),t._v(" "),v("li",[t._v("获取到 Secret Key 后，再使用对称密钥加密方式进行通信，从而保证效率。（下图中的 Session Key 就是 Secret Key）")])]),t._v(" "),v("p",[v("img",{attrs:{src:"/picgo/images/http/05-04.png",alt:"images"}})]),t._v(" "),v("h2",{attrs:{id:"认证"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#认证"}},[t._v("#")]),t._v(" 认证")]),t._v(" "),v("p",[t._v("通过使用 "),v("strong",[t._v("证书")]),t._v(" 来对通信方进行认证。")]),t._v(" "),v("p",[t._v("数字证书认证机构（CA，Certificate Authority）是客户端与服务器双方都可信赖的第三方机构。")]),t._v(" "),v("p",[t._v("服务器的运营人员向 CA 提出公开密钥的申请，CA 在判明提出申请者的身份之后，会对已申请的公开密钥做数字签名，然后分配这个已签名的公开密钥，并将该公开密钥放入公开密钥证书后绑定在一起。")]),t._v(" "),v("p",[t._v("进行 HTTPS 通信时，服务器会把证书发送给客户端。客户端取得其中的公开密钥之后，先使用数字签名进行验证，如果验证通过，就可以开始通信了。")]),t._v(" "),v("p",[v("img",{attrs:{src:"/picgo/images/http/05-05.png",alt:"images"}})]),t._v(" "),v("h2",{attrs:{id:"完整性保护"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#完整性保护"}},[t._v("#")]),t._v(" 完整性保护")]),t._v(" "),v("p",[t._v("SSL 提供报文摘要功能来进行完整性保护。")]),t._v(" "),v("p",[t._v("HTTP 也提供了 MD5 报文摘要功能，但不是安全的。例如报文内容被篡改之后，同时重新计算 MD5 的值，通信接收方是无法意识到发生了篡改。")]),t._v(" "),v("p",[t._v("HTTPS 的报文摘要功能之所以安全，是因为它结合了加密和认证这两个操作。试想一下，加密之后的报文，遭到篡改之后，也很难重新计算报文摘要，因为无法轻易获取明文。")]),t._v(" "),v("h2",{attrs:{id:"https-的缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#https-的缺点"}},[t._v("#")]),t._v(" HTTPS 的缺点")]),t._v(" "),v("ul",[v("li",[t._v("因为需要进行加密解密等过程，因此速度会更慢；")]),t._v(" "),v("li",[t._v("需要支付证书授权的高额费用。")])])])}),[],!1,null,null,null);_.default=s.exports}}]);