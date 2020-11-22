(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{432:function(t,e,s){"use strict";s.r(e);var a=s(11),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"dns-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns-server"}},[t._v("#")]),t._v(" DNS Server")]),t._v(" "),s("p",[t._v("V2Ray has a built-in DNS server, which has two main purposes: matching routing rules according to the IP resolved from a domain, and traditional DNS function—resolving the target address to connect.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Due to the complexity of DNS protocol, V2Ray only supports basic IP query function (A and AAAA records). In order to have a complete DNS experience, you may want to use an dedicated DNS serverware, such as "),s("a",{attrs:{href:"https://coredns.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("CoreDNS"),s("OutboundLink")],1),t._v(", together with V2Ray's builtin DNS features.")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("For "),s("code",[t._v("outbound")]),t._v("s with "),s("code",[t._v("freedom")]),t._v(" protocol, the default value of "),s("code",[t._v("domainStrategy")]),t._v(" is "),s("code",[t._v("AsIs")]),t._v(", therefore the DNS settings will not be applied to this outbound by default. If necessary, it should be configured as"),s("code",[t._v("UseIP")]),t._v(".")])]),t._v(" "),s("h2",{attrs:{id:"dns-processing-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns-processing-flow"}},[t._v("#")]),t._v(" DNS processing flow")]),t._v(" "),s("p",[t._v("When a domain name list assigned by a DNS server matches the domain name currently being queried, V2Ray will use this DNS server first, otherwise, it will query from top to bottom, and only return the IP list which matches expectIPs. The processing flow diagram of the DNS server is as follows:")]),t._v(" "),s("p",[s("img",{attrs:{src:"/dns_flowchart_en.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"dnsobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dnsobject"}},[t._v("#")]),t._v(" DnsObject")]),t._v(" "),s("p",[s("code",[t._v("DnsObject")]),t._v(" corresponds to the "),s("code",[t._v("dns")]),t._v(" field of the configuration file.")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hosts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"baidu.com"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"servers"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.2.3.4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5353")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domains"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"domain:v2ray.com"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expectIPs"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geoip:cn"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8.8.8.8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8.8.4.4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clientIp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.2.3.4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dns_inbound"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[s("code",[t._v("hosts")]),t._v(": map{string: address}")])]),t._v(" "),s("p",[t._v('Static IP list, its value is a series of "domain name": "address". The address can be an IP or domain name. When resolving a domain name, if the domain name matches an item in this list when the address of the item is an IP, the resolution result is the IP of the item, and the following servers are not used for resolution; when the address is a domain name, this domain name will be used for IP resolution instead of the original domain name.')]),t._v(" "),s("p",[t._v("The domain name format has the following forms:")]),t._v(" "),s("ul",[s("li",[t._v('Pure string: When this domain name completely matches the target domain name, the rule takes effect. For example, "v2ray.com" matches "v2ray.com" but not "www.v2ray.com".')]),t._v(" "),s("li",[t._v("Regular expression: Start with "),s("code",[t._v('"regexp:"')]),t._v(', and the rest is a regular expression. When this regular expression matches the target domain name, the rule takes effect. For example, "regexp:\\\\.goo.*\\\\.com$" matches "www.google.com" and "fonts.googleapis.com" but not "google.com".')]),t._v(" "),s("li",[t._v("Subdomain (recommended): Start with "),s("code",[t._v('"domain:"')]),t._v(', and the rest part is a domain name. This rule takes effect when the domain name is the target domain name or its subdomain name. For example, "domain:v2ray.com" matches "www.v2ray.com", "v2ray.com", but not "xv2ray.com".')]),t._v(" "),s("li",[t._v("Substring: Start with "),s("code",[t._v('"keyword:"')]),t._v(', and the rest part is a string. When this string matches any part of the target domain name, the rule takes effect. For example, "keyword:sina.com" can match "sina.com", "sina.com.cn" and "www.sina.com" but not "sina.cn".')]),t._v(" "),s("li",[t._v("List of predefined domain names: Start with "),s("code",[t._v('"geosite:"')]),t._v(", and the rest is a name, such as "),s("code",[t._v("geosite:google")]),t._v(" or "),s("code",[t._v("geosite:cn")]),t._v(". For the name and domain name list, please refer to "),s("RouterLink",{attrs:{to:"/en_US/config/routing.html#dlc"}},[t._v("Predefined Domain Name List")]),t._v(".")],1)]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("servers")]),t._v(": [string | "),s("a",{attrs:{href:"#serverobject"}},[t._v("ServerObject")]),t._v(" ]")])]),t._v(" "),s("p",[t._v("A list of DNS servers, supporting two types: DNS address (string format) and "),s("a",{attrs:{href:"#serverobject"}},[t._v("ServerObject")]),t._v(". When its value is a DNS IP address, such as "),s("code",[t._v('"8.8.8.8"')]),t._v(", V2Ray will use port 53 of this address for DNS query.")]),t._v(" "),s("p",[t._v("When the value is "),s("code",[t._v('"localhost"')]),t._v(", it means the machine's preset DNS configuration is used. When the value is in the form of "),s("code",[t._v('"https://host:port/dns-query"')]),t._v(", such as "),s("code",[t._v('"https://dns.google/dns-query"')]),t._v(", V2Ray will use "),s("code",[t._v("DNS over HTTPS")]),t._v(" (RFC8484, short for DOH) to query. Some service providers have certificates of IP aliases, then you can write IP format directly, such as "),s("code",[t._v("https://1.1.1.1/dns-query")]),t._v(". You can also use non-standard ports and paths, such as "),s("code",[t._v('"https://a.b.c.d:8443/my-dns-query"')]),t._v(" (4.22.0+).")]),t._v(" "),s("p",[t._v("When the value is in the form of "),s("code",[t._v('"https+local://host:port/dns-query"')]),t._v(", such as "),s("code",[t._v('"https+local://dns.google/dns-query"')]),t._v(", V2Ray will use "),s("code",[t._v("DOH local mode")]),t._v(" for queries, that is, DOH requests will not go through Routing/Outbound and other components, but directly request externally to improve timing. Generally suitable for use on the server side. Non-standard ports and paths can also be used. (4.22.0+)")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("When using "),s("code",[t._v("localhost")]),t._v(", the DNS request of this machine is not controlled by V2Ray, and additional configuration is needed to make DNS request forwarded by V2Ray.")]),t._v(" "),s("p",[t._v("The DNS clients initialized by different rules will be reflected in the V2Ray startup log with an "),s("code",[t._v("info")]),t._v(" level, such as "),s("code",[t._v("local DOH")]),t._v(", "),s("code",[t._v("remote DOH")]),t._v(" and "),s("code",[t._v("udp")]),t._v(" and other modes. (4.22.0+)")])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("clientIp")]),t._v(": string")])]),t._v(" "),s("p",[t._v("The IP address of the current system. It is used to inform server the client's location during DNS queries. It cannot be a private address.")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("tag")]),t._v(": string")])]),t._v(" "),s("p",[t._v("(V2Ray 4.13+) The query traffic sent by this DNS, except "),s("code",[t._v("localhost")]),t._v(" and "),s("code",[t._v("DOHL_")]),t._v(" modes, will carry this identifier, which can be matched with "),s("code",[t._v("inboundTag")]),t._v(" in the routing.")]),t._v(" "),s("h2",{attrs:{id:"serverobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serverobject"}},[t._v("#")]),t._v(" ServerObject")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.2.3.4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5353")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domains"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"domain:v2ray.com"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expectIPs"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geoip:cn"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[s("code",[t._v("address")]),t._v(": address")])]),t._v(" "),s("p",[t._v("DNS server address, such as "),s("code",[t._v('"8.8.8.8"')]),t._v(". For ordinary DNS IP addresses that only support the UDP protocol DNS server, if the address is in the form of a URL beginning with "),s("code",[t._v('"https://"')]),t._v(" or "),s("code",[t._v('"https+local://"')]),t._v(", DOH mode is used, and the rules are the same as DOH configuration in string mode.")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("port")]),t._v(": number")])]),t._v(" "),s("p",[t._v("DNS server port, such as "),s("code",[t._v("53")]),t._v(". This item defaults to "),s("code",[t._v("53")]),t._v(" by default. When using DOH mode, this item is invalid, non-standard port should be specified in URL.")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("domains")]),t._v(": [string]")])]),t._v(" "),s("p",[t._v("A list of domain names. The domain names contained in this list will be queried by this server first. The domain name format is the same as it in "),s("RouterLink",{attrs:{to:"/en_US/config/routing.html#ruleobject"}},[t._v("Routing Configuration")]),t._v(".")],1),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("expectIPs")]),t._v(":[string]")])]),t._v(" "),s("p",[t._v("(V2Ray 4.22.0+) A list of IP ranges, the format is the same as it in "),s("RouterLink",{attrs:{to:"/en_US/config/routing.html#ruleobject"}},[t._v("route configuration")]),t._v(".")],1),t._v(" "),s("p",[t._v("When this option is configured, V2Ray DNS will verify the returned IP and only return addresses in the expectIPs list.")]),t._v(" "),s("p",[t._v("If this item is not configured, the IP address will be returned as it is.")])])}),[],!1,null,null,null);e.default=n.exports}}]);