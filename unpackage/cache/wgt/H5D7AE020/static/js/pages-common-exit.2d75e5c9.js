(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-exit"],{"189d":function(t,n,e){"use strict";e("6a54");var i=e("f5bd").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("fab6")),u={name:"u-gap",mixins:[uni.$u.mpMixin,uni.$u.mixin,a.default],computed:{gapStyle:function(){var t={backgroundColor:this.bgColor,height:uni.$u.addUnit(this.height),marginTop:uni.$u.addUnit(this.marginTop),marginBottom:uni.$u.addUnit(this.marginBottom)};return uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}}};n.default=u},"34d1":function(t,n,e){"use strict";e.r(n);var i=e("62ac"),a=e.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=a.a},"4abf":function(t,n,e){var i=e("540b");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("967d").default;a("3bfb6270",i,!0,{sourceMap:!1,shadowMode:!1})},"540b":function(t,n,e){var i=e("c86c");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-3927d88e], uni-scroll-view[data-v-3927d88e], uni-swiper-item[data-v-3927d88e]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}',""]),t.exports=n},"57df":function(t,n,e){"use strict";e.r(n);var i=e("99c1"),a=e("34d1");for(var u in a)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(u);var r=e("828b"),o=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"64253d83",null,!1,i["a"],void 0);n["default"]=o.exports},"62ac":function(t,n,e){"use strict";e("6a54");var i=e("f5bd").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("0b94")),u={data:function(){return{modalName:null,item:{msg:"退出成功"}}},onLoad:function(t){a.default.logout().then((function(t){uni.clearStorageSync()}))},methods:{goback:function(){uni.navigateTo({url:"/pages/login/login"})}}};n.default=u},"65c7":function(t,n,e){"use strict";var i=e("4abf"),a=e.n(i);a.a},"7a7d":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){}));var i=function(){var t=this.$createElement,n=this._self._c||t;return n("v-uni-view",{staticClass:"u-gap",style:[this.gapStyle]})},a=[]},"99c1":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return i}));var i={uGap:e("c2c9").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-scroll-view",{staticClass:"page",class:null!=t.modalName?"show":"",attrs:{"scroll-y":null==t.modalName}},[e("cu-custom",{attrs:{bgColor:"bg-gradual-white",isBack:!1}},[e("template",{attrs:{slot:"content"},slot:"content"},[t._v("退出页")])],2),e("u-gap",{attrs:{height:"2vw","bg-color":"#F5F7FB"}}),e("v-uni-view",{staticClass:"solids-bottom padding-xs flex align-center"},[e("v-uni-view",{staticClass:"flex-sub text-center"},[e("v-uni-view",{staticClass:"solid-bottom text-xsl padding"},[e("v-uni-text",{staticClass:" cuIcon-roundcheckfill text-green"})],1),e("v-uni-view",{staticClass:"padding"},[t._v(t._s(t.item.msg))])],1)],1),e("v-uni-view",{staticClass:"padding flex flex-direction"},[e("v-uni-button",{staticClass:"cu-btn bg-green shadow-blur round lg",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goback()}}},[t._v("返回登录")])],1)],1)],1)},u=[]},c2c9:function(t,n,e){"use strict";e.r(n);var i=e("7a7d"),a=e("e248");for(var u in a)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(u);e("65c7");var r=e("828b"),o=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"3927d88e",null,!1,i["a"],void 0);n["default"]=o.exports},e248:function(t,n,e){"use strict";e.r(n);var i=e("189d"),a=e.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=a.a},fab6:function(t,n,e){"use strict";e("6a54"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("64aa");var i={props:{bgColor:{type:String,default:uni.$u.props.gap.bgColor},height:{type:[String,Number],default:uni.$u.props.gap.height},marginTop:{type:[String,Number],default:uni.$u.props.gap.marginTop},marginBottom:{type:[String,Number],default:uni.$u.props.gap.marginBottom}}};n.default=i}}]);