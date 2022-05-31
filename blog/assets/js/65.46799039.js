(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{559:function(_,v,t){"use strict";t.r(v);var a=t(19),r=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"域名系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#域名系统"}},[_._v("#")]),_._v(" 域名系统")]),_._v(" "),t("p",[_._v("DNS 是一个分布式数据库，提供了主机名和 IP 地址之间相互转换的服务。这里的分布式数据库是指，每个站点只保留它自己的那部分数据。")]),_._v(" "),t("p",[_._v("域名具有层次结构，从上到下依次为：根域名、顶级域名、二级域名。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontents.com/songlitao/picgo/master/resource/blog/images/network/05-01.jpg",alt:"images"}})]),_._v(" "),t("p",[_._v("DNS 可以使用 UDP 或者 TCP 进行传输，使用的端口号都为 53。大多数情况下 DNS 使用 UDP 进行传输，这就要求域名解析器和域名服务器都必须自己处理超时和重传从而保证可靠性。在两种情况下会使用 TCP 进行传输：")]),_._v(" "),t("ul",[t("li",[_._v("如果返回的响应超过的 512 字节（UDP 最大只支持 512 字节的数据）。")]),_._v(" "),t("li",[_._v("区域传送（区域传送是主域名服务器向辅助域名服务器传送变化的那部分数据）。")])]),_._v(" "),t("h2",{attrs:{id:"文件传送协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件传送协议"}},[_._v("#")]),_._v(" 文件传送协议")]),_._v(" "),t("p",[_._v("FTP 使用 TCP 进行连接，它需要两个连接来传送一个文件：")]),_._v(" "),t("ul",[t("li",[_._v("控制连接：服务器打开端口号 21 等待客户端的连接，客户端主动建立连接后，使用这个连接将客户端的命令传送给服务器，并传回服务器的应答。")]),_._v(" "),t("li",[_._v("数据连接：用来传送一个文件数据。")])]),_._v(" "),t("p",[_._v("根据数据连接是否是服务器端主动建立，FTP 有主动和被动两种模式：")]),_._v(" "),t("ul",[t("li",[_._v("主动模式：服务器端主动建立数据连接，其中服务器端的端口号为 20，客户端的端口号随机，但是必须大于 1024，因为 0~1023 是熟知端口号。")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontents.com/songlitao/picgo/master/resource/blog/images/network/05-02.jpg",alt:"images"}})]),_._v(" "),t("ul",[t("li",[_._v("被动模式：客户端主动建立数据连接，其中客户端的端口号由客户端自己指定，服务器端的端口号随机。")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontents.com/songlitao/picgo/master/resource/blog/images/network/05-03.jpg",alt:"images"}})]),_._v(" "),t("p",[_._v("主动模式要求客户端开放端口号给服务器端，需要去配置客户端的防火墙。被动模式只需要服务器端开放端口号即可，无需客户端配置防火墙。但是被动模式会导致服务器端的安全性减弱，因为开放了过多的端口号。")]),_._v(" "),t("h2",{attrs:{id:"动态主机配置协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动态主机配置协议"}},[_._v("#")]),_._v(" 动态主机配置协议")]),_._v(" "),t("p",[_._v("DHCP (Dynamic Host Configuration Protocol) 提供了即插即用的连网方式，用户不再需要手动配置 IP 地址等信息。")]),_._v(" "),t("p",[_._v("DHCP 配置的内容不仅是 IP 地址，还包括子网掩码、网关 IP 地址。")]),_._v(" "),t("p",[_._v("DHCP 工作过程如下：")]),_._v(" "),t("ol",[t("li",[_._v("客户端发送 Discover 报文，该报文的目的地址为 255.255.255.255:67，源地址为 0.0.0.0:68，被放入 UDP 中，该报文被广播到同一个子网的所有主机上。如果客户端和 DHCP 服务器不在同一个子网，就需要使用中继代理。")]),_._v(" "),t("li",[_._v("DHCP 服务器收到 Discover 报文之后，发送 Offer 报文给客户端，该报文包含了客户端所需要的信息。因为客户端可能收到多个 DHCP 服务器提供的信息，因此客户端需要进行选择。")]),_._v(" "),t("li",[_._v("如果客户端选择了某个 DHCP 服务器提供的信息，那么就发送 Request 报文给该 DHCP 服务器。")]),_._v(" "),t("li",[_._v("DHCP 服务器发送 Ack 报文，表示客户端此时可以使用提供给它的信息。")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontents.com/songlitao/picgo/master/resource/blog/images/network/05-04.jpg",alt:"images"}})]),_._v(" "),t("h2",{attrs:{id:"远程登录协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#远程登录协议"}},[_._v("#")]),_._v(" 远程登录协议")]),_._v(" "),t("p",[_._v("TELNET 用于登录到远程主机上，并且远程主机上的输出也会返回。")]),_._v(" "),t("p",[_._v("TELNET 可以适应许多计算机和操作系统的差异，例如不同操作系统系统的换行符定义。")]),_._v(" "),t("h2",{attrs:{id:"电子邮件协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#电子邮件协议"}},[_._v("#")]),_._v(" 电子邮件协议")]),_._v(" "),t("p",[_._v("一个电子邮件系统由三部分组成：用户代理、邮件服务器以及邮件协议。")]),_._v(" "),t("p",[_._v("邮件协议包含发送协议和读取协议，发送协议常用 SMTP，读取协议常用 POP3 和 IMAP。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontents.com/songlitao/picgo/master/resource/blog/images/network/05-05.png",alt:"images"}})]),_._v(" "),t("h3",{attrs:{id:"_1-smtp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-smtp"}},[_._v("#")]),_._v(" 1. SMTP")]),_._v(" "),t("p",[_._v("SMTP 只能发送 ASCII 码，而互联网邮件扩充 MIME 可以发送二进制文件。MIME 并没有改动或者取代 SMTP，而是增加邮件主体的结构，定义了非 ASCII 码的编码规则。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontents.com/songlitao/picgo/master/resource/blog/images/network/05-06.png",alt:"images"}})]),_._v(" "),t("h3",{attrs:{id:"_2-pop3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-pop3"}},[_._v("#")]),_._v(" 2. POP3")]),_._v(" "),t("p",[_._v("POP3 的特点是只要用户从服务器上读取了邮件，就把该邮件删除。但最新版本的 POP3 可以不删除邮件。")]),_._v(" "),t("h3",{attrs:{id:"_3-imap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-imap"}},[_._v("#")]),_._v(" 3. IMAP")]),_._v(" "),t("p",[_._v("IMAP 协议中客户端和服务器上的邮件保持同步，如果不手动删除邮件，那么服务器上的邮件也不会被删除。IMAP 这种做法可以让用户随时随地去访问服务器上的邮件。")]),_._v(" "),t("h2",{attrs:{id:"常用端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用端口"}},[_._v("#")]),_._v(" 常用端口")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("应用")]),_._v(" "),t("th",[_._v("应用层协议")]),_._v(" "),t("th",[_._v("端口号")]),_._v(" "),t("th",[_._v("传输层协议")]),_._v(" "),t("th",[_._v("备注")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("域名解析")]),_._v(" "),t("td",[_._v("DNS")]),_._v(" "),t("td",[_._v("53")]),_._v(" "),t("td",[_._v("UDP/TCP")]),_._v(" "),t("td",[_._v("长度超过 512 字节时使用 TCP")])]),_._v(" "),t("tr",[t("td",[_._v("动态主机配置协议")]),_._v(" "),t("td",[_._v("DHCP")]),_._v(" "),t("td",[_._v("67/68")]),_._v(" "),t("td",[_._v("UDP")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("简单网络管理协议")]),_._v(" "),t("td",[_._v("SNMP")]),_._v(" "),t("td",[_._v("161/162")]),_._v(" "),t("td",[_._v("UDP")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("文件传送协议")]),_._v(" "),t("td",[_._v("FTP")]),_._v(" "),t("td",[_._v("20/21")]),_._v(" "),t("td",[_._v("TCP")]),_._v(" "),t("td",[_._v("控制连接 21，数据连接 20")])]),_._v(" "),t("tr",[t("td",[_._v("远程终端协议")]),_._v(" "),t("td",[_._v("TELNET")]),_._v(" "),t("td",[_._v("23")]),_._v(" "),t("td",[_._v("TCP")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("超文本传送协议")]),_._v(" "),t("td",[_._v("HTTP")]),_._v(" "),t("td",[_._v("80")]),_._v(" "),t("td",[_._v("TCP")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("简单邮件传送协议")]),_._v(" "),t("td",[_._v("SMTP")]),_._v(" "),t("td",[_._v("25")]),_._v(" "),t("td",[_._v("TCP")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("邮件读取协议")]),_._v(" "),t("td",[_._v("POP3")]),_._v(" "),t("td",[_._v("110")]),_._v(" "),t("td",[_._v("TCP")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("网际报文存取协议")]),_._v(" "),t("td",[_._v("IMAP")]),_._v(" "),t("td",[_._v("143")]),_._v(" "),t("td",[_._v("TCP")]),_._v(" "),t("td")])])]),_._v(" "),t("h2",{attrs:{id:"web-页面请求过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web-页面请求过程"}},[_._v("#")]),_._v(" Web 页面请求过程")]),_._v(" "),t("h3",{attrs:{id:"_1-dhcp-配置主机信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-dhcp-配置主机信息"}},[_._v("#")]),_._v(" 1. DHCP 配置主机信息")]),_._v(" "),t("ul",[t("li",[_._v("假设主机最开始没有 IP 地址以及其它信息，那么就需要先使用 DHCP 来获取。")]),_._v(" "),t("li",[_._v("主机生成一个 DHCP 请求报文，并将这个报文放入具有目的端口 67 和源端口 68 的 UDP 报文段中。")]),_._v(" "),t("li",[_._v("该报文段则被放入在一个具有广播 IP 目的地址(255.255.255.255) 和源 IP 地址（0.0.0.0）的 IP 数据报中。")]),_._v(" "),t("li",[_._v("该数据报则被放置在 MAC 帧中，该帧具有目的地址 FF:<zero-width space>FF:<zero-width space>FF:<zero-width space>FF:<zero-width space>FF:FF，将广播到与交换机连接的所有设备。")]),_._v(" "),t("li",[_._v("连接在交换机的 DHCP 服务器收到广播帧之后，不断地向上分解得到 IP 数据报、UDP 报文段、DHCP 请求报文，之后生成 DHCP ACK 报文，该报文包含以下信息：IP 地址、DNS 服务器的 IP 地址、默认网关路由器的 IP 地址和子网掩码。该报文被放入 UDP 报文段中，UDP 报文段有被放入 IP 数据报中，最后放入 MAC 帧中。")]),_._v(" "),t("li",[_._v("该帧的目的地址是请求主机的 MAC 地址，因为交换机具有自学习能力，之前主机发送了广播帧之后就记录了 MAC 地址到其转发接口的交换表项，因此现在交换机就可以直接知道应该向哪个接口发送该帧。")]),_._v(" "),t("li",[_._v("主机收到该帧后，不断分解得到 DHCP 报文。之后就配置它的 IP 地址、子网掩码和 DNS 服务器的 IP 地址，并在其 IP 转发表中安装默认网关。")])]),_._v(" "),t("h3",{attrs:{id:"_2-arp-解析-mac-地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-arp-解析-mac-地址"}},[_._v("#")]),_._v(" 2. ARP 解析 MAC 地址")]),_._v(" "),t("ul",[t("li",[_._v("主机通过浏览器生成一个 TCP 套接字，套接字向 HTTP 服务器发送 HTTP 请求。为了生成该套接字，主机需要知道网站的域名对应的 IP 地址。")]),_._v(" "),t("li",[_._v("主机生成一个 DNS 查询报文，该报文具有 53 号端口，因为 DNS 服务器的端口号是 53。")]),_._v(" "),t("li",[_._v("该 DNS 查询报文被放入目的地址为 DNS 服务器 IP 地址的 IP 数据报中。")]),_._v(" "),t("li",[_._v("该 IP 数据报被放入一个以太网帧中，该帧将发送到网关路由器。")]),_._v(" "),t("li",[_._v("DHCP 过程只知道网关路由器的 IP 地址，为了获取网关路由器的 MAC 地址，需要使用 ARP 协议。")]),_._v(" "),t("li",[_._v("主机生成一个包含目的地址为网关路由器 IP 地址的 ARP 查询报文，将该 ARP 查询报文放入一个具有广播目的地址（FF:<zero-width space>FF:<zero-width space>FF:<zero-width space>FF:<zero-width space>FF:FF）的以太网帧中，并向交换机发送该以太网帧，交换机将该帧转发给所有的连接设备，包括网关路由器。")]),_._v(" "),t("li",[_._v("网关路由器接收到该帧后，不断向上分解得到 ARP 报文，发现其中的 IP 地址与其接口的 IP 地址匹配，因此就发送一个 ARP 回答报文，包含了它的 MAC 地址，发回给主机。")])]),_._v(" "),t("h3",{attrs:{id:"_3-dns-解析域名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-dns-解析域名"}},[_._v("#")]),_._v(" 3. DNS 解析域名")]),_._v(" "),t("ul",[t("li",[_._v("知道了网关路由器的 MAC 地址之后，就可以继续 DNS 的解析过程了。")]),_._v(" "),t("li",[_._v("网关路由器接收到包含 DNS 查询报文的以太网帧后，抽取出 IP 数据报，并根据转发表决定该 IP 数据报应该转发的路由器。")]),_._v(" "),t("li",[_._v("因为路由器具有内部网关协议（RIP、OSPF）和外部网关协议（BGP）这两种路由选择协议，因此路由表中已经配置了网关路由器到达 DNS 服务器的路由表项。")]),_._v(" "),t("li",[_._v("到达 DNS 服务器之后，DNS 服务器抽取出 DNS 查询报文，并在 DNS 数据库中查找待解析的域名。")]),_._v(" "),t("li",[_._v("找到 DNS 记录之后，发送 DNS 回答报文，将该回答报文放入 UDP 报文段中，然后放入 IP 数据报中，通过路由器反向转发回网关路由器，并经过以太网交换机到达主机。")])]),_._v(" "),t("h3",{attrs:{id:"_4-http-请求页面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-http-请求页面"}},[_._v("#")]),_._v(" 4. HTTP 请求页面")]),_._v(" "),t("ul",[t("li",[_._v("有了 HTTP 服务器的 IP 地址之后，主机就能够生成 TCP 套接字，该套接字将用于向 Web 服务器发送 HTTP GET 报文。")]),_._v(" "),t("li",[_._v("在生成 TCP 套接字之前，必须先与 HTTP 服务器进行三次握手来建立连接。生成一个具有目的端口 80 的 TCP SYN 报文段，并向 HTTP 服务器发送该报文段。")]),_._v(" "),t("li",[_._v("HTTP 服务器收到该报文段之后，生成 TCP SYN ACK 报文段，发回给主机。")]),_._v(" "),t("li",[_._v("连接建立之后，浏览器生成 HTTP GET 报文，并交付给 HTTP 服务器。")]),_._v(" "),t("li",[_._v("HTTP 服务器从 TCP 套接字读取 HTTP GET 报文，生成一个 HTTP 响应报文，将 Web 页面内容放入报文主体中，发回给主机。")]),_._v(" "),t("li",[_._v("浏览器收到 HTTP 响应报文后，抽取出 Web 页面内容，之后进行渲染，显示 Web 页面。")])])])}),[],!1,null,null,null);v.default=r.exports}}]);