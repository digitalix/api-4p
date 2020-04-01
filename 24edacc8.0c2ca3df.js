(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{114:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return p}));var r=a(1),n=a(6),s=(a(0),a(136)),l=a(139),o=a(198),i={id:"jobs",title:"Jobs"},c={id:"jobs",title:"Jobs",description:"import Request from '../src/core/components/Request';\r",source:"@site/docs\\jobs.mdx",permalink:"/api-4p/docs/jobs",editUrl:"https://github.com/Danon/api-4p/edit/master/website/docs/jobs.mdx",sidebar:"someSidebar",previous:{title:"Microblogs",permalink:"/api-4p/docs/microblogs"},next:{title:"Forum",permalink:"/api-4p/docs/forum"}},u=[],m={rightToc:u};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)(l.a,{get:!0,url:"/jobs",mdxType:"Request"}),Object(s.b)(l.a,{get:!0,url:"/jobs/:id",parameters:{id:1},mdxType:"Request"}),Object(s.b)(l.a,{post:!0,url:"/jobs",schema:o,requiresLogin:!0,mdxType:"Request"}),Object(s.b)(l.a,{put:!0,url:"/jobs/:id",parameters:{id:1},schema:o,requiresLogin:!0,mdxType:"Request"}))}p.isMDXComponent=!0},139:function(e,t,a){"use strict";a.d(t,"a",(function(){return U}));var r=a(0),n=a.n(r),s=a(145),l=a(146),o=a(217),i=a(226);function c(e){const[t,a]=n.a.useState("prod");return n.a.useEffect(()=>a(e.env),[e.env]),n.a.createElement(i.a,{value:t,onChange:function(t,r){r&&(a(r),e.onChange(r))},size:"small",exclusive:!0},n.a.createElement(o.a,{value:"local"},"Local"),n.a.createElement(o.a,{value:"dev"},"Dev"),n.a.createElement(o.a,{value:"prod"},"Prod"))}var u=a(148),m=a.n(u),p=a(93),d=a.n(p),h=({color:e,children:t})=>n.a.createElement("div",{className:d.a.badge,style:{backgroundColor:e}},n.a.createElement("div",{className:d.a.wrapper},t));a(12);function g(e){for(const t in e)return!0;return!1}var f=a(94),E=a.n(f),b=a(218),v=a(224),y=a(223),j=a(221),T=a(222),C=a(219);function x({children:e}){const[t,a]=n.a.useState(!1),r=n.a.useRef(null);return n.a.useEffect(()=>{if(t){const{current:e}=r;null!==e&&e.focus()}},[t]),n.a.createElement("div",null,n.a.createElement(b.a,{onClick:()=>a(!0)},"Edit schema"),n.a.createElement(v.a,{open:t,onClose:()=>a(!1),scroll:"body","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description"},n.a.createElement(C.a,{id:"scroll-dialog-title"},"Resource schema"),n.a.createElement(j.a,{dividers:!1},n.a.createElement(T.a,{id:"scroll-dialog-description",ref:r,tabIndex:-1}),e),n.a.createElement(y.a,null,n.a.createElement(b.a,{onClick:()=>a(!1),color:"primary",disabled:!0},"Make a request"),n.a.createElement(b.a,{onClick:()=>a(!1),color:"primary"},"Cancel"))))}function O(e,t){t=Object.assign({},t);const a=[];return[e=e.replace(/:([a-z]+)/g,(e,r)=>{if(r in t){let e=t[r];return a.push(r),delete t[r],e}throw new Error(`Missing replacement for '${r}'`)}),t,a]}function q(e){return function(e,t){const a=[];for(let r of t.matchAll(e))a.push(r[1]);return a}(/:([a-z]+)/g,e)}var N=a(138),w=({children:e,language:t})=>n.a.createElement(N.a,{className:`language-${t}`},e),R=function({method:e,url:t,parameters:a,schema:r}){return g(a)||g(r)?function({parameters:e,suffix:t,schema:a}){return n.a.createElement("table",{className:E.a.parameters},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"parameter"),n.a.createElement("th",null,"example value"))),n.a.createElement("tbody",null,Object.entries(e).map(([e,a])=>n.a.createElement("tr",{key:e},n.a.createElement("td",null,k(t(e)),k(function(e){const t=typeof e;if("number"===t)return"int";return t}(a)),e),n.a.createElement("td",null,function(e){if("string"==typeof e)return`"${e}"`;return e}(a)))),g(a)?n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"schema","{}")," ","{","...}"),n.a.createElement("td",null,n.a.createElement(x,null,n.a.createElement("div",{className:E.a.minWidthCode},n.a.createElement(w,null,JSON.stringify(a,null,2)))))):null))}({parameters:a,suffix:function(a){return q(t).includes(a)?"path/":"GET"===e?"query?":null},schema:r}):n.a.createElement("p",{className:E.a.noParams},"This resource doesn't take any parameters :)")};function k(e){return null===e?null:n.a.createElement("code",{style:{marginRight:"3px"}},e)}var S=a(95),L=a.n(S),$=class extends n.a.Component{suffix(e){return q(this.props.url).includes(e)?"path/":"GET"===this.props.method?"query?":null}get badgeColor(){return{POST:"#49cc90",GET:"#61affe",PUT:"#fca130"}[this.props.method]}get placeholders(){return q(this.props.url)}render(){const{url:e,method:t,parameters:a,schema:r,pagination:s,requiresLogin:l}=this.props;return n.a.createElement("div",{className:L.a.params},n.a.createElement("header",null,n.a.createElement(h,{color:this.badgeColor},t),n.a.createElement("span",{className:L.a.endpoint},e)),n.a.createElement(R,{method:t,url:e,parameters:a,schema:r}),n.a.createElement("div",{style:{display:"flex"}},l?n.a.createElement(h,{color:"#ffcccc"},n.a.createElement(m.a,{fontSize:"small"})," Requires Login"):null,s?n.a.createElement(h,{color:"#49cc90"},"+ Pagination"):null))}};function G(e){const t=Object.entries(e).map(([e,t])=>encodeURIComponent(e)+"="+encodeURIComponent(t));return t.length?"?"+t.join("&"):""}function P({method:e,url:t,parameters:a}){const[r,s]=O(t,a);return"GET"===e?function(e,t){return n.a.createElement(w,{language:"js"},`fetch("${e+G(t)}", {\n  "method": "GET",\n  "headers": {\n    "Accept": "application/json",\n    "Content-type": "application/json"\n  }\n})`)}(r,s):function(e,t,a){return n.a.createElement(w,{language:"js"},`fetch("${t}", {\n  "method": "${e}",\n  "headers": {\n    "Accept": "application/json",\n    "Content-type": "application/json"\n  },\n  "body": JSON.stringify(${r=JSON.stringify(a,null,2),s=2,r.split("\n").map(e=>" ".repeat(s)+e).join("\n").substr(s)})\n})`);var r,s}(e,r,s)}var J=class extends n.a.Component{render(){let{method:e,url:t,parameters:a}=this.props;const[r,n]=O(t,a);return"GET"===e?this.codeMethodGet(r,n):this.code(e,r,n)}code(e,t,a){return n.a.createElement(w,{language:"bash"},`curl -X ${e} ${t} \\\n      -H "Accept: application/json" \\\n      -H "Content-Type: application/json" \\\n      -d '${JSON.stringify(a)}'`)}codeMethodGet(e,t){return n.a.createElement(w,{language:"bash"},`curl -X GET ${e+G(t)} \\\n      -H "Accept: application/json" \\\n      -H "Content-Type: application/json"`)}},M=a(96),_=a.n(M);class U extends n.a.Component{constructor(e){super(e),this.state={env:"prod"}}get method(){if(this.props.get)return"GET";if(this.props.post)return"POST";if(this.props.put)return"PUT";throw"Missing HTTP method"}render(){return this.doRender({url:this.baseUrl+this.props.url,parameters:this.props.parameters||{},schema:this.props.schema||{},pagination:this.props.pagination,requiresLogin:this.props.requiresLogin})}get baseUrl(){return{prod:"https://api.4programmers.net/v1",dev:"https://api.4programmers.dev/v1",local:"http://localhost:8080/v1"}[this.state.env]}doRender({url:e,parameters:t,schema:a,pagination:r,requiresLogin:o}){return n.a.createElement("div",null,n.a.createElement(s.a,{defaultValue:"params",values:[{label:"Params",value:"params"},{label:"fetch()",value:"fetch"},{label:"curl",value:"curl"}]},n.a.createElement(l.a,{value:"params"},n.a.createElement($,{method:this.method,url:e,parameters:t,schema:a,pagination:r,requiresLogin:o})),n.a.createElement(l.a,{value:"fetch"},n.a.createElement(P,{method:this.method,url:e,parameters:Object.assign({},t,a)})),n.a.createElement(l.a,{value:"curl"},n.a.createElement(J,{method:this.method,url:e,parameters:Object.assign({},t,a)}))),n.a.createElement("div",{className:_.a.wrapper},n.a.createElement(c,{env:this.state.env,onChange:e=>this.setState({env:e})})))}}},198:function(e){e.exports=JSON.parse('{"title":"string","salary_from":0,"salary_to":0,"rate":"monthly","is_remote":false,"remote_range":0,"is_gross":false,"description":"string","recruitment":"string","email":"user@example.com","currency":"PLN","plan":"plus","seniority":"student","employment":"employment","locations":[{"city":"string","street":"string","street_number":"string","country":"string","latitude":0,"longitude":0}],"tags":[{"name":"string","priority":0}],"firm":{"name":"string","is_agency":false,"website":"string","logo":"string","description":"string","youtube_url":"string","latitude":0,"longitude":0,"street":"string","street_number":"string","city":"string","country":"string","postcode":"string"}}')}}]);