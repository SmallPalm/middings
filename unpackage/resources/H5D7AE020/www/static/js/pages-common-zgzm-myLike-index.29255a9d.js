(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-zgzm-myLike-index"],{"0ac4":function(t,e,i){var a=i("e16f");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("967d").default;n("0dbcbcf6",a,!0,{sourceMap:!1,shadowMode:!1})},"189d":function(t,e,i){"use strict";i("6a54");var a=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("fab6")),r={name:"u-gap",mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default],computed:{gapStyle:function(){var t={backgroundColor:this.bgColor,height:uni.$u.addUnit(this.height),marginTop:uni.$u.addUnit(this.marginTop),marginBottom:uni.$u.addUnit(this.marginBottom)};return uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}}};e.default=r},2585:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={uGap:i("c2c9").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{"background-color":"white"}},[i("v-uni-scroll-view",{staticClass:"pageNo",attrs:{"scroll-y":!0}},[i("cu-custom",{attrs:{bgColor:"bg-gradual-white",isBack:!0}},[i("template",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.title))])],2),i("u-gap",{attrs:{height:"2vw","bg-color":"#F5F7FB"}}),t._l(t.favoritesList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"cu-card article no-card margin-top solid-bottom"},[i("v-uni-view",{staticClass:"cu-item shadow card"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"desc"},[i("v-uni-view",{staticClass:"text-black text-bold text-lg"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"text-gray text-sm"},[t._v(t._s(e.description))]),i("v-uni-view",{staticClass:"flex justify-between"},[i("v-uni-view",{staticClass:"text-gray text-sm"},[t._v(t._s(e.category)+" · "+t._s(e.date))])],1)],1),e.imageUrl?i("v-uni-view",[i("v-uni-image",{staticClass:"radius",staticStyle:{height:"150rpx",width:"190rpx"},attrs:{src:e.imageUrl,mode:"aspectFill"}})],1):t._e()],1),i("v-uni-view",{staticClass:"star-icon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleFavorite(a)}}},[i("v-uni-text",{class:["cuIcon",e.isFavorite?"cuIcon-favorfill":"cuIcon-favor"]})],1)],1)],1)}))],2)],1)},r=[]},"28ca":function(t,e,i){"use strict";i.r(e);var a=i("2585"),n=i("6f0b");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("5578");var s=i("828b"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"3b77faab",null,!1,a["a"],void 0);e["default"]=c.exports},"4abf":function(t,e,i){var a=i("540b");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("967d").default;n("3bfb6270",a,!0,{sourceMap:!1,shadowMode:!1})},"540b":function(t,e,i){var a=i("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-3927d88e], uni-scroll-view[data-v-3927d88e], uni-swiper-item[data-v-3927d88e]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}',""]),t.exports=e},5578:function(t,e,i){"use strict";var a=i("0ac4"),n=i.n(a);n.a},"65c7":function(t,e,i){"use strict";var a=i("4abf"),n=i.n(a);n.a},"6f0b":function(t,e,i){"use strict";i.r(e);var a=i("78a3"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"78a3":function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{favoritesList:[{title:"政策深入",description:"一本涵盖 ES6 及更高版本的详细指南，适合进阶学习。",category:"技术教程",date:"2023-10-10",imageUrl:"/static/devices/dianya@3x(1).png",isFavorite:!0},{title:"Vue 3 实战项目",description:"从基础到项目实践，手把手带你打造 Vue 3 应用。",category:"前端开发",date:"2023-08-24",imageUrl:"/static/devices/dianya.png",isFavorite:!0},{title:"产品管理 101",description:"适合初学者的产品管理入门书籍。",category:"产品管理",date:"2023-07-12",imageUrl:"/static/devices/dianya@3x(3).png",isFavorite:!1}]}},computed:{title:function(){return this.$Route.query.title||"我的收藏"}},methods:{toggleFavorite:function(t){this.favoritesList[t].isFavorite=!this.favoritesList[t].isFavorite}}}},"7a7d":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"u-gap",style:[this.gapStyle]})},n=[]},c2c9:function(t,e,i){"use strict";i.r(e);var a=i("7a7d"),n=i("e248");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("65c7");var s=i("828b"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"3927d88e",null,!1,a["a"],void 0);e["default"]=c.exports},e16f:function(t,e,i){var a=i("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.pageNo[data-v-3b77faab]{padding:1vw}.cu-card.article[data-v-3b77faab]{padding:2vw;border-bottom:1px solid #f0f0f0}.cu-card.article .cu-item[data-v-3b77faab]{margin:2vw 0;position:relative;border:1px solid #e0e0e0;border-radius:8px;padding:1vw}.cu-card.article .cu-item .content[data-v-3b77faab]{display:flex;align-items:center;justify-content:space-between}.cu-card.article .cu-item .content .desc[data-v-3b77faab]{max-width:70%}.cu-card.article .cu-item .content .desc .text-lg[data-v-3b77faab]{font-size:1.5em;font-weight:700}.cu-card.article .cu-item .content .desc .text-sm[data-v-3b77faab]{color:#999;margin-top:.5em}.cu-card.article .cu-item .content uni-image[data-v-3b77faab]{width:20vw;height:auto;border-radius:8px}.cu-card.article .cu-item .star-icon[data-v-3b77faab]{position:absolute;top:8px;right:8px;font-size:1.5em;color:gold;\r\n  /* 金黄色 */cursor:pointer}',""]),t.exports=e},e248:function(t,e,i){"use strict";i.r(e);var a=i("189d"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},fab6:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("64aa");var a={props:{bgColor:{type:String,default:uni.$u.props.gap.bgColor},height:{type:[String,Number],default:uni.$u.props.gap.height},marginTop:{type:[String,Number],default:uni.$u.props.gap.marginTop},marginBottom:{type:[String,Number],default:uni.$u.props.gap.marginBottom}}};e.default=a}}]);