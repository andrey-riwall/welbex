(function(){var t={5683:function(t,e,s){"use strict";var n=s(6369),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("HeaderComp"),e("Router-View"),e("FooterComp")],1)},o=[],i=function(){var t=this,e=t._self._c;return e("header",{staticClass:"header",attrs:{id:"header"}},[e("div",{staticClass:"container header__container"},[e("LogoComp"),e("nav",{staticClass:"header__nav"},[e("ul",{staticClass:"header__list"},t._l(t.nav,(function(s){return e("li",{key:t.nav.indexOf(s),staticClass:"header__item"},[e("router-link",{staticClass:"header__link",attrs:{to:{path:`/${s.href}`}}},[t._v(" "+t._s(s.name)+" ")])],1)})),0)]),e("router-link",{staticClass:"header__cart",attrs:{to:{path:"/cart"}}},[e("img",{attrs:{src:s(9898),alt:"cart"}})]),e("router-link",{staticClass:"header__btn",attrs:{to:{path:"/contact"}}},[t._v(" Contact Us ")])],1)])},a=[],c=function(){var t=this,e=t._self._c;return e("router-link",{staticClass:"header__logo",attrs:{to:{name:"home"}}},[e("img",{attrs:{src:s(9574),alt:"logo"}})])},u=[],l={components:{},data:function(){return{}},methods:{},computed:{}},p=l,m=s(1001),_=(0,m.Z)(p,c,u,!1,null,"7f9cd1b2",null),f=_.exports,h={components:{LogoComp:f},data:function(){return{nav:[{name:"Home",href:"home"},{name:"About",href:"about"},{name:"Team",href:"team"},{name:"Shop",href:"shop"},{name:"Pages",href:"pages"}]}},methods:{},computed:{}},d=h,g=(0,m.Z)(d,i,a,!1,null,"e7f06482",null),v=g.exports,C=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"container footer__container"},[e("div",{staticClass:"footer__box"},[e("LogoComp"),e("p",{staticClass:"footer__desc"},[t._v(" Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non. ")])],1),e("div",{staticClass:"footer__box"},[e("h3",{staticClass:"footer__heading"},[t._v(" Menu Items ")]),e("ul",{staticClass:"footer__list"},t._l(t.items,(function(s,n){return e("li",{key:n,staticClass:"footer__item"},[e("router-link",{staticClass:"footer__link",attrs:{to:{path:`/${s.href}`}}},[t._v(" "+t._s(s.name)+" ")])],1)})),0)]),e("div",{staticClass:"footer__box"},[e("h3",{staticClass:"footer__heading"},[t._v(" Other Pages ")]),e("ul",{staticClass:"footer__list"},t._l(t.pages,(function(s,n){return e("li",{key:n,staticClass:"footer__item"},[e("router-link",{staticClass:"footer__link",attrs:{to:{path:`/${s.href}`}}},[t._v(" "+t._s(s.name)+" ")])],1)})),0)])])])},w=[],b={components:{LogoComp:f},data:function(){return{items:[{name:"About",href:"about"},{name:"Blog",href:"error"},{name:"Shop",href:"shop"},{name:"Contact Us",href:"contact"}],pages:[{name:"Styleguide",href:"error"},{name:"Changelog",href:"error"},{name:"licenses",href:"error"},{name:"Team",href:"team"}]}},methods:{},computed:{}},x=b,k=(0,m.Z)(x,C,w,!1,null,null,null),z=k.exports,O={components:{HeaderComp:v,FooterComp:z}},y=O,Z=(0,m.Z)(y,r,o,!1,null,null,null),F=Z.exports,A=s(2631),P=function(){var t=this,e=t._self._c;return e("main",[e("HeroComp"),e("CustomizeComp"),e("NewsComp")],1)},T=[],E=function(){var t=this,e=t._self._c;return e("section",{staticClass:"hero"},[e("div",{staticClass:"container hero__container"},[e("FutureComp"),t._m(0),e("p",{staticClass:"hero__desc"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque. ")]),e("router-link",{staticClass:"hero__btn hero__btn-blue",attrs:{to:{path:"/more"}}},[t._v(" Explore More ")]),e("router-link",{staticClass:"hero__btn",attrs:{to:{path:"/team"}}},[t._v(" View our team ")]),e("ul",{staticClass:"hero__info"},t._l(t.info,(function(s){return e("li",{key:t.info.indexOf(s),staticClass:"hero__item"},[e("a",{staticClass:"hero__link",attrs:{href:s.href,target:"_blank"}},[t._v(" "+t._s(s.name)+" ")])])})),0),e("img",{staticClass:"hero__img",attrs:{src:s(980),alt:""}})],1),e("div",{staticClass:"hero__bg"})])},S=[function(){var t=this,e=t._self._c;return e("h1",{staticClass:"hero__heading"},[t._v(" Unleash the Next Generation of Gaming "),e("img",{attrs:{src:s(5642),alt:""}})])}],L=function(){var t=this;t._self._c;return t._m(0)},N=[function(){var t=this,e=t._self._c;return e("h2",{staticClass:"future"},[e("img",{attrs:{src:s(5202),alt:"fire"}}),t._v(" FUTURE OF eSPORTS ")])}],j={components:{},data:function(){return{}},methods:{},computed:{}},I=j,R=(0,m.Z)(I,L,N,!1,null,"24300e54",null),U=R.exports,q={components:{FutureComp:U},data:function(){return{info:[{name:"FACEBOOK",href:"https://www.facebook.com/"},{name:"INSTAGRAM",href:"https://www.instagram.com/"},{name:"TWITCH",href:"https://www.twitch.tv/"}]}},methods:{},computed:{}},H=q,M=(0,m.Z)(H,E,S,!1,null,"efe415fa",null),$=M.exports,G=function(){var t=this,e=t._self._c;return e("section",{staticClass:"customize"},[e("div",{staticClass:"container customize__container"},[e("img",{staticClass:"customize__img",attrs:{src:s(5422),alt:""}}),e("div",{staticClass:"customize__content"},[e("FutureComp"),e("h2",{staticClass:"customize__heading"},[t._v(" Customize your Own Character ")]),e("p",{staticClass:"customize__desc"},[t._v(" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae. ")]),e("ul",{staticClass:"customize__list"},t._l(t.images,(function(n,r){return e("li",{key:r,staticClass:"customize__item",class:{is_active:n.active},on:{click:function(e){return t.activeImg(r)}}},[e("img",{staticClass:"customize__img-item",attrs:{src:s(7173)(`./${n.src}`),alt:""}})])})),0)],1)])])},V=[],B={components:{FutureComp:U},data:function(){return{images:[{src:"customize1.png",active:!0},{src:"customize2.png",active:!1},{src:"customize3.png",active:!1}]}},methods:{activeImg:function(t){this.images.forEach((t=>{t.active=!1})),this.images[t].active=!0}}},D=B,K=(0,m.Z)(D,G,V,!1,null,"3a2af889",null),W=K.exports,X=function(){var t=this,e=t._self._c;return e("section",{staticClass:"news"},[e("div",{staticClass:"container news__container"},[e("FutureComp"),e("div",{staticClass:"news__box"},[e("h2",{staticClass:"news__heading"},[t._v(" Latest News & Articles ")]),e("router-link",{staticClass:"news__btn",attrs:{to:{path:"/more"}}},[t._v(" Read More ")])],1),e("ul",{staticClass:"news__grid"},t._l(t.news,(function(n,r){return e("li",{key:r,staticClass:"news__item"},[e("img",{staticClass:"news__img",attrs:{src:s(7173)(`./${n.src}`),alt:"img"}}),e("span",{staticClass:"news__date"},[t._v(" "+t._s(n.date)+" ")]),e("h3",{staticClass:"news__heading_low"},[t._v(" "+t._s(n.heading)+" ")])])})),0)],1)])},J=[],Q={components:{FutureComp:U},data:function(){return{news:[{src:"news1.png",date:"April 2, 2021",heading:"Esports Group teams up with the Indianapolis Colts"},{src:"news2.png",date:"April 2, 2021",heading:"NAVI reveals s1mple fifth anniversary"},{src:"news3.png",date:"April 2, 2021",heading:"A1esports Shares new picture"},{src:"news4.png",date:"April 2, 2021",heading:"T1 unveil partnership with Razer"},{src:"news5.png",date:"April 2, 2021",heading:"RX secures content partnership with"}]}},methods:{},computed:{}},Y=Q,tt=(0,m.Z)(Y,X,J,!1,null,"1e8648de",null),et=tt.exports,st={components:{HeroComp:$,CustomizeComp:W,NewsComp:et},data:function(){return{}}},nt=st,rt=(0,m.Z)(nt,P,T,!1,null,null,null),ot=rt.exports,it=function(){var t=this;t._self._c;return t._m(0)},at=[function(){var t=this,e=t._self._c;return e("section",{staticClass:"error"},[e("div",{staticClass:"container error__container"},[e("h1",{staticClass:"error__heading"},[t._v(" Sorry, not found page. ")])])])}],ct={components:{},data:function(){return{}},methods:{},computed:{}},ut=ct,lt=(0,m.Z)(ut,it,at,!1,null,"2a7e07c0",null),pt=lt.exports;n.ZP.use(A.ZP);const mt=[{name:"home",path:"/home",component:ot},{name:"error",path:"*",component:pt},{path:"/",redirect:{name:"home"}}],_t=new A.ZP({routes:mt});var ft=_t,ht=s(3822);n.ZP.use(ht.ZP);var dt=new ht.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}});n.ZP.config.productionTip=!1,new n.ZP({router:ft,store:dt,render:t=>t(F)}).$mount("#app")},7173:function(t,e,s){var n={"./cart.svg":9898,"./customize.png":5422,"./customize1.png":7936,"./customize2.png":9357,"./customize3.png":1805,"./fire.svg":5202,"./hero.png":980,"./hero_svg.svg":5642,"./logo.svg":9574,"./news1.png":2523,"./news2.png":8180,"./news3.png":9904,"./news4.png":2543,"./news5.png":8137,"./sprite.svg":7795};function r(t){var e=o(t);return s(e)}function o(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=o,t.exports=r,r.id=7173},9898:function(t,e,s){"use strict";t.exports=s.p+"img/cart.ad744f0d.svg"},5202:function(t,e,s){"use strict";t.exports=s.p+"img/fire.d788934c.svg"},5642:function(t,e,s){"use strict";t.exports=s.p+"img/hero_svg.dc6b43a4.svg"},9574:function(t,e,s){"use strict";t.exports=s.p+"img/logo.fa46cda2.svg"},7795:function(t,e,s){"use strict";t.exports=s.p+"img/sprite.912779b2.svg"},5422:function(t,e,s){"use strict";t.exports=s.p+"img/customize.a8b97a18.png"},7936:function(t,e,s){"use strict";t.exports=s.p+"img/customize1.11f422c5.png"},9357:function(t,e,s){"use strict";t.exports=s.p+"img/customize2.8a6f1334.png"},1805:function(t,e,s){"use strict";t.exports=s.p+"img/customize3.aba8c681.png"},980:function(t,e,s){"use strict";t.exports=s.p+"img/hero.fd513cb9.png"},2523:function(t,e,s){"use strict";t.exports=s.p+"img/news1.561bc1bd.png"},8180:function(t,e,s){"use strict";t.exports=s.p+"img/news2.b366bd26.png"},9904:function(t,e,s){"use strict";t.exports=s.p+"img/news3.a1ef8cea.png"},2543:function(t,e,s){"use strict";t.exports=s.p+"img/news4.63547f86.png"},8137:function(t,e,s){"use strict";t.exports=s.p+"img/news5.14744bcc.png"}},e={};function s(n){var r=e[n];if(void 0!==r)return r.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,s),o.exports}s.m=t,function(){var t=[];s.O=function(e,n,r,o){if(!n){var i=1/0;for(l=0;l<t.length;l++){n=t[l][0],r=t[l][1],o=t[l][2];for(var a=!0,c=0;c<n.length;c++)(!1&o||i>=o)&&Object.keys(s.O).every((function(t){return s.O[t](n[c])}))?n.splice(c--,1):(a=!1,o<i&&(i=o));if(a){t.splice(l--,1);var u=r();void 0!==u&&(e=u)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[n,r,o]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.p="/welbex/"}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,o,i=n[0],a=n[1],c=n[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(r in a)s.o(a,r)&&(s.m[r]=a[r]);if(c)var l=c(s)}for(e&&e(n);u<i.length;u++)o=i[u],s.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return s.O(l)},n=self["webpackChunkwelbex"]=self["webpackChunkwelbex"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(5683)}));n=s.O(n)})();
//# sourceMappingURL=app.1e10fc3c.js.map