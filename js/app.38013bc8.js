(function(){"use strict";var t={910:function(t,n,e){var i=e(7195),a=e(4359),o=e(7244),r=e(185),l=e(4761),s=e(3685),c=e(2965),u=e(4435),m=e(8145),d=(e(7024),function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"text-start ms-2 mb-3"},[n("div",[n("b-button",{staticClass:"btn-sm",attrs:{variant:"outline-primary"},on:{click:t.initScalingAndPosition}},[t._v("init")]),n("b-button",{staticClass:"btn-sm ms-2",attrs:{variant:"outline-primary"},on:{click:t.initScaling}},[t._v("init scaling")]),n("b-button",{staticClass:"btn-sm ms-2",attrs:{variant:"outline-primary"},on:{click:t.initPosition}},[t._v("init position")])],1)]),t.debug?n("div",{staticClass:"text-start mt-1 mb-1 bg-warning"},[n("div",[t._v("zoom: "+t._s(t.zoom))]),n("div",[t._v("center: "+t._s(t.center))])]):t._e(),n("div",{staticClass:"map"},[n("l-map",{attrs:{zoom:t.zoom,minZoom:t.minZoom,maxZoom:t.maxZoom,center:t.center},on:{"update:zoom":t.zoomUpdated,"update:center":t.centerUpdated}},[n("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),t._l(t.markers,(function(e,i){return[n("l-marker",{key:i,attrs:{"lat-lng":e.latLng,visible:e.visible}},[n("l-popup",[n("div",{staticClass:"pointer",on:{click:function(n){return t.clickPopup(e.code)}}},[t._v(t._s(e.name))])])],1)]}))],2)],1),n("div",{staticClass:"text-start ms-2 mt-3"},[t._m(0),n("div",[n("b-button",{staticClass:"btn-sm",attrs:{variant:"outline-success",href:"https://www.youtube.com/@user-dk9ms9rh1d"}},[t._v("板倉 趣味チャンネル(YouTube)")])],1),n("div",{staticClass:"mt-2"},[n("b-button",{staticClass:"btn-sm",attrs:{variant:"outline-success",href:"https://twitter.com/itazuratoshiyuk"}},[t._v("板倉さんのTwitter")]),n("b-button",{staticClass:"btn-sm ms-2",attrs:{variant:"outline-success",href:"https://twitter.com/itakurasyumiCh"}},[t._v("さいとうちゃんのTwitter")])],1),n("div",{staticClass:"mt-2"},[n("b-button",{staticClass:"btn-sm",attrs:{variant:"outline-success",href:"https://suzuri.jp/itakura-ch"}},[t._v("ストア(suzuri)")])],1)]),n("b-modal",{ref:"modal",attrs:{"hide-header-close":"","ok-only":""}},[n("div",{staticClass:"modal-inner"},[n("iframe",{attrs:{width:"100%",height:"100%",src:t.youtubeUrl,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])],1)}),p=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"mb-1"},[t._v(" ・ 板倉さんのYouTube企画「ハイエース一人旅」で行かれていた場所をマッピングしてみました。"),n("br"),t._v(" ・ ポップアップをクリックすると動画がモーダル表示されます。 ")])}],b={name:"App",components:{},data(){const t=0,n=18,e="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",i='&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors';return{debug:!1,zoom:0,minZoom:t,maxZoom:n,center:null,url:e,attribution:i,markers:[{name:"東京駅",latLng:(0,m.latLng)(35.681235294054765,139.76712523292755),visible:!0,code:""},{name:"RVパーク 甲州市勝沼 ぶどうの丘",latLng:(0,m.latLng)(35.673240140957205,138.73579703736712),visible:!0,code:"xqZYod_atfY"},{name:"RVパーク ヘリテイジ美の山",latLng:(0,m.latLng)(36.06632357666182,139.11613247189374),visible:!0,code:"_TlIq94TZi0"},{name:"美の山公園",latLng:(0,m.latLng)(36.053520817625746,139.11299614042457),visible:!0,code:"fgqg2RPVwtw"},{name:"RVパーク 七里川",latLng:(0,m.latLng)(35.2168524847308,140.13591765572258),visible:!0,code:"W2aEWkKRwNk"},{name:"RVパーク 七里川",latLng:(0,m.latLng)(35.217033599755794,140.13485565649597),visible:!0,code:"rkwDRaLJsL4"},{name:"長池親水公園",latLng:(0,m.latLng)(35.42704072619624,138.87118703895496),visible:!0,code:"O2j41-q6vtU"},{name:"青根キャンプ場",latLng:(0,m.latLng)(35.54843760181532,139.13728809810797),visible:!0,code:"XQRVk-enarY"},{name:"湯河原温泉神谷キャンプ場",latLng:(0,m.latLng)(35.154880791619796,139.07415324866656),visible:!0,code:"NvpQt3fmBHc"},{name:"RVパークsmart 山の駅 養老渓谷 喜楽里",latLng:(0,m.latLng)(35.24134038765043,140.17163616291464),visible:!0,code:"N0DatS4GyMI"},{name:"ネイチャーランドオム",latLng:(0,m.latLng)(35.52447139267352,139.03950733914553),visible:!0,code:"pCFyqzMeGaw"},{name:"ネイチャーランドオム",latLng:(0,m.latLng)(35.52441900155076,139.03917206300693),visible:!0,code:"dS9Po2_aHL4"},{name:"RVパーク 八ヶ岳高原「原村」 もみの木",latLng:(0,m.latLng)(35.96659089134671,138.25516511535548),visible:!0,code:"AiuLqVzr3bc"},{name:"RVパーク 蓼科パークホテル",latLng:(0,m.latLng)(36.03803968224812,138.27021410255347),visible:!0,code:"ho3g8cxmFgY"},{name:"さがざわキャンプ場",latLng:(0,m.latLng)(35.57558405384078,139.06996812680984),visible:!0,code:"sDn5lokgMKw"},{name:"いなかの風キャンプ場",latLng:(0,m.latLng)(35.680442550407975,137.95138280701505),visible:!0,code:"FOl9yQOJvX8"},{name:"RVパーク ゆーとろん水神の湯",latLng:(0,m.latLng)(35.91466729085403,138.21192585565143),visible:!0,code:"j92P-EHCBoY"}],youtubeUrl:""}},created(){this.init()},methods:{zoomUpdated(t){this.zoom=t},centerUpdated(t){this.center=t},initScaling(){this.zoom=9},initPosition(){this.center=(0,m.latLng)(35.681235294054765,139.76712523292755)},initScalingAndPosition(){this.initScaling(),this.initPosition()},init(){this.initScalingAndPosition()},clickPopup(t){""!==t&&(this.youtubeUrl="https://www.youtube.com/embed/"+t,this.$refs.modal.show())}}},v=b,f=e(1001),g=(0,f.Z)(v,d,p,!1,null,null,null),h=g.exports;i["default"].config.productionTip=!1,i["default"].use(a.XG7),i["default"].use(o.A7),i["default"].component("l-map",r.Z),i["default"].component("l-tile-layer",l.Z),i["default"].component("l-marker",s.Z),i["default"].component("l-popup",c.Z),i["default"].component("l-tooltip",u.Z),delete m.Icon.Default.prototype._getIconUrl,m.Icon.Default.mergeOptions({iconRetinaUrl:e(6431),iconUrl:e(7093),shadowUrl:e(8858)}),new i["default"]({render:t=>t(h)}).$mount("#app")}},n={};function e(i){var a=n[i];if(void 0!==a)return a.exports;var o=n[i]={exports:{}};return t[i].call(o.exports,o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(n,i,a,o){if(!i){var r=1/0;for(u=0;u<t.length;u++){i=t[u][0],a=t[u][1],o=t[u][2];for(var l=!0,s=0;s<i.length;s++)(!1&o||r>=o)&&Object.keys(e.O).every((function(t){return e.O[t](i[s])}))?i.splice(s--,1):(l=!1,o<r&&(r=o));if(l){t.splice(u--,1);var c=a();void 0!==c&&(n=c)}}return n}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[i,a,o]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,i){var a,o,r=i[0],l=i[1],s=i[2],c=0;if(r.some((function(n){return 0!==t[n]}))){for(a in l)e.o(l,a)&&(e.m[a]=l[a]);if(s)var u=s(e)}for(n&&n(i);c<r.length;c++)o=r[c],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(u)},i=self["webpackChunksymbolic_racer8"]=self["webpackChunksymbolic_racer8"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(910)}));i=e.O(i)})();
//# sourceMappingURL=app.38013bc8.js.map