(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{395:function(t,s,a){"use strict";a.r(s);var e=a(11),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"dns-服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns-服务器"}},[t._v("#")]),t._v(" DNS 服务器")]),t._v(" "),a("p",[t._v("V2Ray 内置了一个 DNS 服务器，其有两大主要用途：根据域名解析的 IP 匹配路由规则，以及传统的 DNS 功能——解析目标地址进行连接。")]),t._v(" "),a("p",[t._v("由此 DNS 服务器所发出的 DNS 查询请求，会自动根据路由配置进行转发，无需额外配置。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("由于 DNS 协议的复杂性，V2Ray 只支持最基本的 IP 查询（A 和 AAAA 记录）。推荐使用本机 DNS 配合一个额外的 DNS 服务器来做 DNS 查询，如 "),a("a",{attrs:{href:"https://coredns.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CoreDNS"),a("OutboundLink")],1),t._v("，以使用完整的 DNS 功能。")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("注意：在 "),a("code",[t._v("freedom")]),t._v(" 协议的 "),a("code",[t._v("outbound")]),t._v(" 中，"),a("code",[t._v("domainStrategy")]),t._v(" 默认值为 "),a("code",[t._v("AsIs")]),t._v("，不会使用本 DNS 服务器进行目的地址解析，如果需要使用应配置为 "),a("code",[t._v("UseIP")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"dns-处理流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns-处理流程"}},[t._v("#")]),t._v(" DNS 处理流程")]),t._v(" "),a("p",[t._v("当某个 DNS 服务器指定的域名列表匹配了当前要查询的域名，V2Ray 会优先使用这个 DNS 服务器进行查询，否则按从上往下的顺序进行查询，同时只返回匹配 expectIPs 的 IP 列表。")]),t._v(" "),a("p",[t._v("DNS 服务器的处理流程示意图如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/dns_flowchart.svg",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"dnsobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dnsobject"}},[t._v("#")]),t._v(" DnsObject")]),t._v(" "),a("p",[a("code",[t._v("DnsObject")]),t._v(" 对应配置文件的 "),a("code",[t._v("dns")]),t._v(" 项。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hosts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"baidu.com"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"servers"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.2.3.4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5353")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domains"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"domain:v2ray.com"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expectIPs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geoip:cn"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8.8.8.8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8.8.4.4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clientIp"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.2.3.4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dns_inbound"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("hosts")]),t._v(": map{string: address}")])]),t._v(" "),a("p",[t._v('静态 IP 列表，其值为一系列的 "域名": "地址"。其中地址可以是 IP 或者域名。在解析域名时，如果域名匹配这个列表中的某一项，当该项的地址为 IP 时，则解析结果为该项的 IP，而不会使用下述的 servers 进行解析；当该项的地址为域名时，会使用此域名进行 IP 解析，而不使用原始域名。')]),t._v(" "),a("p",[t._v("域名的格式有以下几种形式：")]),t._v(" "),a("ul",[a("li",[t._v('纯字符串：当此域名完整匹配目标域名时，该规则生效。例如 "v2ray.com" 匹配 "v2ray.com" 但不匹配 "www.v2ray.com"。')]),t._v(" "),a("li",[t._v("正则表达式：由 "),a("code",[t._v('"regexp:"')]),t._v(' 开始，余下部分是一个正则表达式。当此正则表达式匹配目标域名时，该规则生效。例如 "regexp:\\\\.goo.*\\\\.com$" 匹配 "www.google.com"、"fonts.googleapis.com"，但不匹配 "google.com"。')]),t._v(" "),a("li",[t._v("子域名 (推荐)：由 "),a("code",[t._v('"domain:"')]),t._v(' 开始，余下部分是一个域名。当此域名是目标域名或其子域名时，该规则生效。例如 "domain:v2ray.com" 匹配 "www.v2ray.com"、"v2ray.com"，但不匹配 "xv2ray.com"。')]),t._v(" "),a("li",[t._v("子串：由 "),a("code",[t._v('"keyword:"')]),t._v(' 开始，余下部分是一个字符串。当此字符串匹配目标域名中任意部分，该规则生效。比如 "keyword:sina.com" 可以匹配 "sina.com"、"sina.com.cn" 和 "www.sina.com"，但不匹配 "sina.cn"。')]),t._v(" "),a("li",[t._v("预定义域名列表：由 "),a("code",[t._v('"geosite:"')]),t._v(" 开头，余下部分是一个名称，如 "),a("code",[t._v("geosite:google")]),t._v(" 或者 "),a("code",[t._v("geosite:cn")]),t._v("。名称及域名列表参考 "),a("RouterLink",{attrs:{to:"/config/routing.html#dlc"}},[t._v("预定义域名列表")]),t._v("。")],1)]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("servers")]),t._v(": [string | "),a("a",{attrs:{href:"#serverobject"}},[t._v("ServerObject")]),t._v(" ]")])]),t._v(" "),a("p",[t._v("一个 DNS 服务器列表，支持的类型有两种：DNS 地址（字符串形式）和 "),a("a",{attrs:{href:"#serverobject"}},[t._v("ServerObject")]),t._v(" 。")]),t._v(" "),a("p",[t._v("当它的值是一个 DNS IP 地址时，如 "),a("code",[t._v('"8.8.8.8"')]),t._v("，V2Ray 会使用此地址的 53 端口进行 DNS 查询。")]),t._v(" "),a("p",[t._v("当值为 "),a("code",[t._v('"localhost"')]),t._v(" 时，表示使用本机预设的 DNS 配置。")]),t._v(" "),a("p",[t._v("当值是 "),a("code",[t._v('"https://host:port/dns-query"')]),t._v(" 的形式，如 "),a("code",[t._v('"https://dns.google/dns-query"')]),t._v("，V2Ray 会使用 "),a("code",[t._v("DNS over HTTPS")]),t._v(" (RFC8484, 简称 DOH) 进行查询。有些服务商拥有 IP 别名的证书，可以直接写 IP 形式，比如 "),a("code",[t._v("https://1.1.1.1/dns-query")]),t._v("。也可使用非标准端口和路径，如 "),a("code",[t._v('"https://a.b.c.d:8443/my-dns-query"')]),t._v(" (4.22.0+)")]),t._v(" "),a("p",[t._v("当值是 "),a("code",[t._v('"https+local://host:port/dns-query"')]),t._v(" 的形式，如 "),a("code",[t._v('"https+local://dns.google/dns-query"')]),t._v("，V2Ray 会使用 "),a("code",[t._v("DOH本地模式")]),t._v(" 进行查询，即 DOH 请求不会经过 Routing/Outbound 等组件，直接对外请求，以降低耗时。一般适合在服务端使用。也可使用非标端口和路径。(4.22.0+)")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("当使用 "),a("code",[t._v("localhost")]),t._v(" 时，本机的 DNS 请求不受 V2Ray 控制，需要额外的配置才可以使 DNS 请求由 V2Ray 转发。")]),t._v(" "),a("p",[t._v("不同规则初始化得到的 DNS 客户端会在 V2Ray 启动日志中以 "),a("code",[t._v("info")]),t._v(" 级别体现，比如 "),a("code",[t._v("local DOH")]),t._v("、"),a("code",[t._v("remote DOH")]),t._v(" 和 "),a("code",[t._v("udp")]),t._v(" 等模式。（4.22.0+）")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("clientIp")]),t._v(": string")])]),t._v(" "),a("p",[t._v("当前系统的 IP 地址。用于 DNS 查询时通知服务器客户端的所在位置。不能是私有地址。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("tag")]),t._v(": string")])]),t._v(" "),a("p",[t._v("（V2Ray 4.13+）由此 DNS 发出的查询流量，除 "),a("code",[t._v("localhost")]),t._v(" 和 "),a("code",[t._v("DOHL_")]),t._v(" 模式外，都会带有此标识，可在路由使用 "),a("code",[t._v("inboundTag")]),t._v(" 进行匹配。")]),t._v(" "),a("h2",{attrs:{id:"serverobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serverobject"}},[t._v("#")]),t._v(" ServerObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.2.3.4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5353")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domains"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"domain:v2ray.com"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expectIPs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geoip:cn"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("address")]),t._v(": address")])]),t._v(" "),a("p",[t._v("DNS 服务器地址，如 "),a("code",[t._v('"8.8.8.8"')]),t._v("。对于普通 DNS IP 地址只支持 UDP 协议的 DNS 服务器，若地址是以 "),a("code",[t._v('"https://"')]),t._v(" 或 "),a("code",[t._v('"https+local://"')]),t._v(" 开头的 URL 形式，则使用 DOH 模式，规则同字符串模式的 DOH 配置。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("port")]),t._v(": number")])]),t._v(" "),a("p",[t._v("DNS 服务器端口，如 "),a("code",[t._v("53")]),t._v("。此项缺省时默认为 "),a("code",[t._v("53")]),t._v("。当使用 DOH 模式该项无效，非标端口应在 URL 中指定。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("domains")]),t._v(": [string]")])]),t._v(" "),a("p",[t._v("一个域名列表，此列表包含的域名，将优先使用此服务器进行查询。域名格式和 "),a("RouterLink",{attrs:{to:"/config/routing.html#ruleobject"}},[t._v("路由配置")]),t._v(" 中相同。")],1),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("expectIPs")]),t._v(":[string]")])]),t._v(" "),a("p",[t._v("（V2Ray 4.22.0+）一个 IP 范围列表，格式和 "),a("RouterLink",{attrs:{to:"/config/routing.html#ruleobject"}},[t._v("路由配置")]),t._v(" 中相同。")],1),t._v(" "),a("p",[t._v("当配置此项时，V2Ray DNS 会对返回的 IP 的进行校验，只返回包含 expectIPs 列表中的地址。")]),t._v(" "),a("p",[t._v("如果未配置此项，会原样返回 IP 地址。")])])}),[],!1,null,null,null);s.default=n.exports}}]);