"use strict";(self["webpackChunkcork_vue3"]=self["webpackChunkcork_vue3"]||[]).push([[1704],{47042:(e,i,t)=>{var a=t(82109),l=t(17854),u=t(43157),n=t(4411),s=t(70111),r=t(51400),o=t(26244),c=t(45656),d=t(86135),m=t(5112),p=t(81194),v=t(50206),b=p("slice"),f=m("species"),g=l.Array,h=Math.max;a({target:"Array",proto:!0,forced:!b},{slice:function(e,i){var t,a,l,m=c(this),p=o(m),b=r(e,p),q=r(void 0===i?p:i,p);if(u(m)&&(t=m.constructor,n(t)&&(t===g||u(t.prototype))?t=void 0:s(t)&&(t=t[f],null===t&&(t=void 0)),t===g||void 0===t))return v(m,b,q);for(a=new(void 0===t?g:t)(h(q-b,0)),l=0;b<q;b++,l++)b in m&&d(a,l,m[b]);return a.length=l,a}})},8754:(e,i,t)=>{t.r(i),t.d(i,{default:()=>E});t(26699),t(32023),t(57327),t(41539),t(32564),t(47042),t(21249);var a=t(66252),l=t(2262),u=t(21174),n=t(84414),s=t(56296),r={class:"container"},o=(0,a._)("ul",{class:"navbar-nav flex-row"},[(0,a._)("li",null,[(0,a._)("div",{class:"page-header"},[(0,a._)("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[(0,a._)("ol",{class:"breadcrumb"},[(0,a._)("li",{class:"breadcrumb-item"},[(0,a._)("a",{href:"javascript:;"},"Forms")]),(0,a._)("li",{class:"breadcrumb-item active","aria-current":"page"},[(0,a._)("span",null,"Quill Editor")])])])])])],-1),c={class:"container"},d={class:"nav sidenav"},m={class:"sidenav-content"},p=(0,a._)("a",{href:"#basic",class:"nav-link"},"Basic",-1),v=(0,a._)("a",{href:"#tooltip",class:"nav-link"},"Tooltip",-1),b=[p,v],f=(0,a.uE)('<div class="row layout-top-spacing"><div class="col-12"><div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> Documentation: <a target="_blank" href="https://www.npmjs.com/package/vue3-quill" class="text-info"> https://www.npmjs.com/package/vue3-quill </a></div></div></div>',1),g={id:"basic",class:"row layout-spacing layout-top-spacing"},h={class:"col-lg-12"},q={class:"statbox panel box box-shadow"},_=(0,a._)("div",{class:"panel-heading"},[(0,a._)("div",{class:"row"},[(0,a._)("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[(0,a._)("h4",null,"Basic")])])],-1),w={class:"panel-body"},x={class:"code-section-container show-code"},k=(0,a._)("span",null,"Code",-1),y=[k],C={key:0,class:"code-section text-start"},A=(0,a._)("pre",null,'\x3c!-- Basic --\x3e\n<quill-editor v-model:value="content1" :options="options1"></quill-editor>\n',-1),P={id:"tooltip",class:"row layout-spacing"},V={class:"col-lg-12"},S={class:"statbox panel box box-shadow"},D=(0,a._)("div",{class:"panel-heading"},[(0,a._)("div",{class:"row"},[(0,a._)("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[(0,a._)("h4",null,"With Tooltip")])])],-1),U={class:"panel-body"},H={class:"code-section-container show-code"},M=(0,a._)("span",null,"Code",-1),Q=[M],j={key:0,class:"code-section text-start"},N=(0,a._)("pre",null,'\x3c!-- With tooltip --\x3e\n<quill-editor v-model:value="content2" :options="options2"></quill-editor>\n',-1);const T={setup:function(e){(0,s.j)({title:"Quill Editor"});var i=(0,l.iH)([]),t=(0,l.iH)("\n<h1>This is a heading text...</h1>\n                                        <br/>\n                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui arcu, pellentesque id mattis sed, mattis semper erat. Etiam commodo arcu a mollis consequat. Curabitur pretium auctor tortor, bibendum placerat elit feugiat et. Ut ac turpis nec dui ullamcorper ornare. Vestibulum finibus quis magna at accumsan. Praesent a purus vitae tortor fringilla tempus vel non purus. Suspendisse eleifend nibh porta dolor ullamcorper laoreet. Ut sit amet ipsum vitae lectus pharetra tincidunt. In ipsum quam, iaculis at erat ut, fermentum efficitur ipsum. Nunc odio diam, fringilla in auctor et, scelerisque at lorem. Sed convallis tempor dolor eu dictum. Cras ornare ornare imperdiet. Pellentesque sagittis lacus non libero fringilla faucibus. Aenean ullamcorper enim et metus vestibulum, eu aliquam nunc placerat. Praesent fringilla dolor sit amet leo pulvinar semper. </p>\n                                        <br/>\n                                        <p> Curabitur vel tincidunt dui. Duis vestibulum eget velit sit amet aliquet. Curabitur vitae cursus ex. Aliquam pulvinar vulputate ullamcorper. Maecenas luctus in eros et aliquet. Cras auctor luctus nisl a consectetur. Morbi hendrerit nisi nunc, quis egestas nibh consectetur nec. Aliquam vel lorem enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc placerat, enim quis varius luctus, enim arcu tincidunt purus, in vulputate tortor mi a tortor. Praesent porta ornare fermentum. Praesent sed ligula at ante tempor posuere a at lorem. </p>\n                                        <br/>\n                                        <p> Aliquam diam felis, vehicula ut ipsum eu, consectetur tincidunt ipsum. Vestibulum sed metus ac nisi tincidunt mollis sed non urna. Vivamus lacinia ullamcorper interdum. Sed sed erat vel leo venenatis pretium. Sed aliquet sem nunc, ut iaculis dolor consectetur et. Vivamus ligula sapien, maximus nec pellentesque ut, imperdiet at libero. Vivamus semper nulla lectus, id dapibus nulla convallis id. Quisque elementum lectus ac dui gravida, ut molestie nunc convallis. Pellentesque et odio non dolor convallis commodo sit amet a ante. </p>\n"),p=(0,l.iH)("\n<h1>This is a heading text...</h1>\n                                            <br/>\n                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui arcu, pellentesque id mattis sed, mattis semper erat. Etiam commodo arcu a mollis consequat. Curabitur pretium auctor tortor, bibendum placerat elit feugiat et. Ut ac turpis nec dui ullamcorper ornare. Vestibulum finibus quis magna at accumsan. Praesent a purus vitae tortor fringilla tempus vel non purus. Suspendisse eleifend nibh porta dolor ullamcorper laoreet. Ut sit amet ipsum vitae lectus pharetra tincidunt. In ipsum quam, iaculis at erat ut, fermentum efficitur ipsum. Nunc odio diam, fringilla in auctor et, scelerisque at lorem. Sed convallis tempor dolor eu dictum. Cras ornare ornare imperdiet. Pellentesque sagittis lacus non libero fringilla faucibus. Aenean ullamcorper enim et metus vestibulum, eu aliquam nunc placerat. Praesent fringilla dolor sit amet leo pulvinar semper. </p>\n                                            <br/>\n                                            <p> Curabitur vel tincidunt dui. Duis vestibulum eget velit sit amet aliquet. Curabitur vitae cursus ex. Aliquam pulvinar vulputate ullamcorper. Maecenas luctus in eros et aliquet. Cras auctor luctus nisl a consectetur. Morbi hendrerit nisi nunc, quis egestas nibh consectetur nec. Aliquam vel lorem enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc placerat, enim quis varius luctus, enim arcu tincidunt purus, in vulputate tortor mi a tortor. Praesent porta ornare fermentum. Praesent sed ligula at ante tempor posuere a at lorem. </p>\n                                            <br/>\n                                            <p>Aliquam diam felis, vehicula ut ipsum eu, consectetur tincidunt ipsum. Vestibulum sed metus ac nisi tincidunt mollis sed non urna. Vivamus lacinia ullamcorper interdum. Sed sed erat vel leo venenatis pretium. Sed aliquet sem nunc, ut iaculis dolor consectetur et. Vivamus ligula sapien, maximus nec pellentesque ut, imperdiet at libero. Vivamus semper nulla lectus, id dapibus nulla convallis id. Quisque elementum lectus ac dui gravida, ut molestie nunc convallis. Pellentesque et odio non dolor convallis commodo sit amet a ante. </p>\n"),v=(0,l.iH)({modules:{toolbar:[[{header:[1,2,!1]}],["bold","italic","underline"],["image","code-block"]]}}),k=(0,l.iH)({modules:{toolbar:[["bold","italic","underline","image","code-block"]]}});(0,a.bv)((function(){T()}));var M=function(e){i.value.includes(e)?i.value=i.value.filter((function(i){return i!=e})):i.value.push(e)},T=function(){setTimeout((function(){var e=[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));e.map((function(e){return new window.bootstrap.Tooltip(e)}))}))};return function(e,s){var T=(0,a.Q2)("scroll-spy-active"),W=(0,a.Q2)("scroll-spy-link"),E=(0,a.Q2)("scroll-spy");return(0,a.wg)(),(0,a.iD)("div",r,[((0,a.wg)(),(0,a.j4)(a.lR,{to:"#breadcrumb"},[o])),(0,a._)("div",c,[(0,a._)("div",d,[(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",m,b)),[[T],[W]])]),f,(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",g,[(0,a._)("div",h,[(0,a._)("div",q,[_,(0,a._)("div",w,[(0,a.Wm)((0,l.SU)(u.HL),{value:t.value,"onUpdate:value":s[0]||(s[0]=function(e){return t.value=e}),options:v.value},null,8,["value","options"]),(0,a._)("div",x,[(0,a._)("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[1]||(s[1]=function(e){return M("code1")})},y),i.value.includes("code1")?((0,a.wg)(),(0,a.iD)("div",C,[(0,a.Wm)(n.Z,null,{default:(0,a.w5)((function(){return[A]})),_:1})])):(0,a.kq)("",!0)])])])])]),(0,a._)("div",P,[(0,a._)("div",V,[(0,a._)("div",S,[D,(0,a._)("div",U,[(0,a.Wm)((0,l.SU)(u.HL),{value:p.value,"onUpdate:value":s[2]||(s[2]=function(e){return p.value=e}),options:k.value},null,8,["value","options"]),(0,a._)("div",H,[(0,a._)("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[3]||(s[3]=function(e){return M("code2")})},Q),i.value.includes("code2")?((0,a.wg)(),(0,a.iD)("div",j,[(0,a.Wm)(n.Z,null,{default:(0,a.w5)((function(){return[N]})),_:1})])):(0,a.kq)("",!0)])])])])])])),[[E]])])])}}},W=T,E=W}}]);
//# sourceMappingURL=forms-quill-editor.2e3744a6.js.map