(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{106:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(6),o=(a(0),a(137)),l=a(146),c={id:"microblogs",title:"Microblogs"},i={id:"microblogs",title:"Microblogs",description:"import Request from '../src/core/components/Request';\r",source:"@site/docs\\microblogs.mdx",permalink:"/api-4p/docs/microblogs",editUrl:"https://github.com/Danon/api-4p/edit/master/website/docs/microblogs.mdx",sidebar:"someSidebar",previous:{title:"Acquire authorization token",permalink:"/api-4p/docs/login"},next:{title:"Jobs",permalink:"/api-4p/docs/jobs"}},s=[],u={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(l.a,{get:!0,url:"/microblogs/:id",parameters:{id:1},mdxType:"Request"}),Object(o.b)(l.a,{get:!0,url:"/microblogs",parameters:{page:0},pagination:!0,mdxType:"Request"}))}p.isMDXComponent=!0},146:function(e,t,a){"use strict";a.d(t,"a",(function(){return I}));a(139);var n=a(138),r=a(135),o=a(5),l=a(0),c=a.n(l),i=a(153),s=a(154),u=a(244),p=a(253);function m(e){var t=c.a.useState("prod"),a=t[0],n=t[1];return c.a.useEffect((function(){return n(e.env)}),[e.env]),c.a.createElement(p.a,{value:a,onChange:function(t,a){a&&(n(a),e.onChange(a))},size:"small",exclusive:!0},c.a.createElement(u.a,{value:"local"},"Local"),c.a.createElement(u.a,{value:"dev"},"Dev"),c.a.createElement(u.a,{value:"prod"},"Prod"))}a(140),a(141);var d=a(158),h=a.n(d),f=a(93),g=a.n(f),v=function(e){var t=e.color,a=e.children;return c.a.createElement("div",{className:g.a.badge,style:{backgroundColor:t}},c.a.createElement("div",{className:g.a.wrapper},a))};a(12),a(52),a(142),a(143);function E(e){for(var t in e)return!0;return!1}var b=a(94),y=a.n(b),j=a(245),O=a(251),C=a(250),T=a(248),k=a(249),q=a(246);function x(e){var t=e.children,a=c.a.useState(!1),n=a[0],r=a[1],o=c.a.useRef(null);return c.a.useEffect((function(){if(n){var e=o.current;null!==e&&e.focus()}}),[n]),c.a.createElement("div",null,c.a.createElement(j.a,{onClick:function(){return r(!0)}},"Edit schema"),c.a.createElement(O.a,{open:n,onClose:function(){return r(!1)},scroll:"body","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description"},c.a.createElement(q.a,{id:"scroll-dialog-title"},"Resource schema"),c.a.createElement(T.a,{dividers:!1},c.a.createElement(k.a,{id:"scroll-dialog-description",ref:o,tabIndex:-1}),t),c.a.createElement(C.a,null,c.a.createElement(j.a,{onClick:function(){return r(!1)},color:"primary",disabled:!0},"Make a request"),c.a.createElement(j.a,{onClick:function(){return r(!1)},color:"primary"},"Cancel"))))}var w=a(156);a(157);function N(e,t){t=Object.assign({},t);var a=[];return[e=e.replace(/:([a-z]+)/g,(function(e,n){if(n in t){var r=t[n];return a.push(n),delete t[n],r}throw new Error("Missing replacement for '"+n+"'")})),t,a]}function R(e){return function(e,t){for(var a,n=[],r=Object(w.a)(t.matchAll(e));!(a=r()).done;){var o=a.value;n.push(o[1])}return n}(/:([a-z]+)/g,e)}var S=a(145),G=function(e){var t=e.children,a=e.language;return c.a.createElement(S.a,{className:"language-"+a},t)},M=function(e){var t=e.method,a=e.url,n=e.parameters,r=e.schema;return E(n)||E(r)?function(e){var t=e.parameters,a=e.suffix,n=e.schema;return c.a.createElement("table",{className:y.a.parameters},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"parameter"),c.a.createElement("th",null,"example value"))),c.a.createElement("tbody",null,Object.entries(t).map((function(e){var t=e[0],n=e[1];return c.a.createElement("tr",{key:t},c.a.createElement("td",null,P(a(t)),P(function(e){var t=typeof e;if("number"===t)return"int";return t}(n)),t),c.a.createElement("td",null,function(e){if("string"==typeof e)return'"'+e+'"';return e}(n)))})),E(n)?c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("code",null,"schema","{}")," ","{","...}"),c.a.createElement("td",null,c.a.createElement(x,null,c.a.createElement("div",{className:y.a.minWidthCode},c.a.createElement(G,{language:"json"},JSON.stringify(n,null,2)))))):null))}({parameters:n,suffix:function(e){return R(a).includes(e)?"path/":"GET"===t?"query?":null},schema:r}):c.a.createElement("p",{className:y.a.noParams},"This resource doesn't take any parameters :)")};function P(e){return null===e?null:c.a.createElement("code",{style:{marginRight:"3px"}},e)}var L=a(95),J=a.n(L),U=function(e){Object(o.a)(t,e);Object(r.a)(t);function t(){return e.apply(this,arguments)||this}var a=t.prototype;return a.suffix=function(e){return R(this.props.url).includes(e)?"path/":"GET"===this.props.method?"query?":null},a.render=function(){var e=this.props,t=e.url,a=e.method,n=e.parameters,r=e.schema,o=e.pagination,l=e.requiresLogin;return c.a.createElement("div",{className:J.a.params},c.a.createElement("header",null,c.a.createElement(v,{color:this.badgeColor},a),c.a.createElement("span",{className:J.a.endpoint},t)),c.a.createElement(M,{method:a,url:t,parameters:n,schema:r}),c.a.createElement("div",{style:{display:"flex"}},l?c.a.createElement(v,{color:"#ffcccc"},c.a.createElement(h.a,{fontSize:"small"})," Requires Login"):null,o?c.a.createElement(v,{color:"#49cc90"},"+ Pagination"):null))},Object(n.a)(t,[{key:"badgeColor",get:function(){return{POST:"#49cc90",GET:"#61affe",PUT:"#fca130"}[this.props.method]}},{key:"placeholders",get:function(){return R(this.props.url)}}]),t}(c.a.Component);function A(e){var t=Object.entries(e).map((function(e){var t=e[0],a=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(a)}));return t.length?"?"+t.join("&"):""}a(159),a(160);function z(e){var t=e.method,a=N(e.url,e.parameters),n=a[0],r=a[1];return"GET"===t?function(e,t){return c.a.createElement(G,{language:"js"},'fetch("'+(e+A(t))+'", {\n  "method": "GET",\n  "headers": {\n    "Accept": "application/json",\n    "Content-type": "application/json"\n  }\n})')}(n,r):function(e,t,a){return c.a.createElement(G,{language:"js"},'fetch("'+t+'", {\n  "method": "'+e+'",\n  "headers": {\n    "Accept": "application/json",\n    "Content-type": "application/json"\n  },\n  "body": JSON.stringify('+(n=JSON.stringify(a,null,2),r=2,n.split("\n").map((function(e){return" ".repeat(r)+e})).join("\n").substr(r))+")\n})");var n,r}(t,n,r)}var H=function(e){Object(o.a)(t,e);Object(r.a)(t);function t(){return e.apply(this,arguments)||this}var a=t.prototype;return a.render=function(){var e=this.props,t=e.method,a=N(e.url,e.parameters),n=a[0],r=a[1];return"GET"===t?this.codeMethodGet(n,r):this.code(t,n,r)},a.code=function(e,t,a){return c.a.createElement(G,{language:"bash"},"curl -X "+e+" "+t+' \\\n      -H "Accept: application/json" \\\n      -H "Content-Type: application/json" \\\n      -d \''+JSON.stringify(a)+"'")},a.codeMethodGet=function(e,t){return c.a.createElement(G,{language:"bash"},"curl -X GET "+(e+A(t))+' \\\n      -H "Accept: application/json" \\\n      -H "Content-Type: application/json"')},t}(c.a.Component),D=a(96),X=a.n(D),I=function(e){Object(o.a)(t,e);Object(r.a)(t);function t(t){var a;return(a=e.call(this,t)||this).state={env:"prod"},a}var a=t.prototype;return a.render=function(){return this.doRender({url:this.baseUrl+this.props.url,parameters:this.props.parameters||{},schema:this.props.schema||{},pagination:this.props.pagination,requiresLogin:this.props.requiresLogin})},a.doRender=function(e){var t=this,a=e.url,n=e.parameters,r=e.schema,o=e.pagination,l=e.requiresLogin;return c.a.createElement("div",null,c.a.createElement(i.a,{defaultValue:"params",values:[{label:"Params",value:"params"},{label:"fetch()",value:"fetch"},{label:"curl",value:"curl"}]},c.a.createElement(s.a,{value:"params"},c.a.createElement(U,{method:this.method,url:a,parameters:n,schema:r,pagination:o,requiresLogin:l})),c.a.createElement(s.a,{value:"fetch"},c.a.createElement(z,{method:this.method,url:a,parameters:Object.assign({},n,r)})),c.a.createElement(s.a,{value:"curl"},c.a.createElement(H,{method:this.method,url:a,parameters:Object.assign({},n,r)}))),c.a.createElement("div",{className:X.a.wrapper},c.a.createElement(m,{env:this.state.env,onChange:function(e){return t.setState({env:e})}})))},Object(n.a)(t,[{key:"method",get:function(){if(this.props.get)return"GET";if(this.props.post)return"POST";if(this.props.put)return"PUT";throw"Missing HTTP method"}},{key:"baseUrl",get:function(){return{prod:"https://api.4programmers.net/v1",dev:"https://api.4programmers.dev/v1",local:"http://localhost:8080/v1"}[this.state.env]}}]),t}(c.a.Component)}}]);