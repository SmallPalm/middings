(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-subsidiary"],{"0375":function(t,e,n){var i=n("c86c");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.pcIconBg[data-v-e944b75e]{border-radius:20px}.pcIcon[data-v-e944b75e]{width:15vw;height:15vw;border-radius:%?20?%;position:relative;background-size:70%;background-position:50%;background-repeat:no-repeat}.clearBoth[data-v-e944b75e]::after{content:"";display:table;clear:both}.sjtj_item[data-v-e944b75e]{width:45vw;margin:1.6vw 0 0 1.6vw;height:22vw;background-size:100% 100%;float:left;position:relative}.sjtj_item .sjtj_item_typeName[data-v-e944b75e]{font-size:2.5vw;color:#fff;font-weight:600;padding-left:1.3vw;padding-top:.5vw}.sjtj_item .sjtj_item_title[data-v-e944b75e]{font-size:3.8vw;font-weight:600;padding-left:5vw;padding-top:2vw}.sjtj_item .sjtj_item_num[data-v-e944b75e]{font-size:6vw;color:#1962f8;font-weight:600;padding-left:5.2vw;padding-top:.5vw}.myCard[data-v-e944b75e]{width:95%;margin-left:auto;margin-right:auto}.myCardgrid[data-v-e944b75e]{margin-top:3vw;width:95%;margin-left:auto;margin-right:auto;box-shadow:0 2px 3px 0 rgba(0,0,0,.08);border-radius:7px}',""]),t.exports=e},"0411":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uGap:n("c2c9").default,uNoticeBar:n("0929").default,uGrid:n("086e").default,uGridItem:n("f03b").default,uBadge:n("ae15").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{"background-color":"#ffffff"}},[n("v-uni-scroll-view",{staticClass:"page",attrs:{"scroll-y":!0}},[n("cu-custom",{attrs:{bgColor:"bg-gradual-white",isBack:!0}},[n("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),n("template",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.osTitle))])],2),n("u-gap",{attrs:{height:"2vw","bg-color":"#F5F7FB"}}),n("v-uni-view",{staticClass:"myCardgrid",staticStyle:{height:"37px","background-color":"#f4f7ff",display:"flex","align-items":"center"}},[n("v-uni-image",{staticStyle:{width:"4vw",height:"4vw","margin-left":"4vw"},attrs:{src:"/static/icon/xiaoxi.png"}}),n("u-notice-bar",{staticStyle:{width:"100%",height:"100%"},attrs:{icon:"",color:"#000000",bgColor:"#f4f7ff",text:t.text1}})],1),n("v-uni-scroll-view",[n("v-uni-view",{staticClass:"myCardgrid",staticStyle:{padding:"0vw 0 5vw 0"}},[n("u-grid",{attrs:{border:!1,col:"3","indicator-dots":!0}},t._l(t.osList,(function(e,i){return n("u-grid-item",{key:i,on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goPage(e)}}},[n("v-uni-view",{staticClass:"pcIconBg margin-top margin-bottom",style:{"background-image":"radial-gradient(circle at center, "+e.bgColor+"c2 0%, "+e.bgColor+"f5 100%)","box-shadow":"0px 0px 5px 0px #bcbaba"}},[n("v-uni-view",{staticClass:"d-flex align-items-center justify-content-center pcIcon",style:"background-image: url(."+e.pcIcon+");"},[n("v-uni-view",{staticStyle:{position:"absolute",right:"-16rpx",top:"-16rpx"}},[n("u-badge",{attrs:{max:"99",value:e.count}})],1)],1)],1),n("v-uni-text",{staticStyle:{"font-weight":"500","font-size":"3.5vw"}},[t._v(t._s(e.name))])],1)})),1)],1)],1)],1)],1)},r=[]},"189d":function(t,e,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("fab6")),r={name:"u-gap",mixins:[uni.$u.mpMixin,uni.$u.mixin,a.default],computed:{gapStyle:function(){var t={backgroundColor:this.bgColor,height:uni.$u.addUnit(this.height),marginTop:uni.$u.addUnit(this.marginTop),marginBottom:uni.$u.addUnit(this.marginBottom)};return uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}}};e.default=r},"4abf":function(t,e,n){var i=n("540b");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("967d").default;a("3bfb6270",i,!0,{sourceMap:!1,shadowMode:!1})},"540b":function(t,e,n){var i=n("c86c");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-3927d88e], uni-scroll-view[data-v-3927d88e], uni-swiper-item[data-v-3927d88e]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}',""]),t.exports=e},"65c7":function(t,e,n){"use strict";var i=n("4abf"),a=n.n(i);a.a},"7a7d":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"u-gap",style:[this.gapStyle]})},a=[]},"93c20":function(t,e,n){"use strict";(function(t){n("6a54");var i=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("9b1b"));n("aa77"),n("bf0f"),n("8f71"),n("aa9c");n("02ef");var r=i(n("e084")),o=i(n("08a3")),u=n("8f59"),s={name:"subsidiary",data:function(){return{sjtjList:[{icon:"jiudian7",typeName:"设备",title:"总设备数量",num:""},{icon:"jiudian8",typeName:"设备",title:"总设备离线",num:""},{icon:"jiudian9",typeName:"告警",title:"今日未处理警告",num:""},{icon:"jiudian10",typeName:"告警",title:"今日告警总数",num:""},{icon:"jiudian11",typeName:"处理",title:"今日已处理",num:""},{icon:"jiudian12",typeName:"维修",title:"维修中的设备",num:""}],msgCount:0,text1:"常青企业服务专注于产业园企业运营服务。",dot:{mailHome:!1}}},watch:{"$store.getters.tenantId":{immediate:!0,handler:function(t,e){this.summaryQueryDeviceAlarmSummary()}}},computed:{osList:function(){var e,n=this,i=(null===(e=this.$store.getters.osList.find((function(t){return t.type===n.$Route.query.subsidiary})))||void 0===e?void 0:e.children)||[];t.log("osList",i);var a=uni.getStorageSync("departName"),r="公司领导"===a||"副总师"===a;return t.log("hasAuditPermission",r),r||(i=i.filter((function(t){return"/pages/common/zgzm/meet/meetingAuidt"!==t.type}))),t.log("osList",i),i},osTitle:function(){var t,e=this;return(null===(t=this.$store.getters.osList.find((function(t){return t.type===e.$Route.query.subsidiary})))||void 0===t?void 0:t.name)||""},code:function(){var t,e=this;return(null===(t=this.$store.getters.osList.find((function(t){return t.type===e.$Route.query.subsidiary})))||void 0===t?void 0:t.code)||""}},onLoad:function(){this.summaryQueryDeviceAlarmSummary()},methods:(0,a.default)((0,a.default)({},(0,u.mapActions)(["getCurrentUserTenant"])),{},{summaryQueryDeviceAlarmSummary:function(){var t=this;o.default.summaryQueryDeviceAlarmSummary({subSystemCategory:this.code}).then((function(e){var n=e.data;200==n.code&&(t.sjtjList[0].num=n.result.deviceCount,t.sjtjList[1].num=n.result.deviceOfflineCount,t.sjtjList[2].num=n.result.alarmUnProcessCount,t.sjtjList[3].num=n.result.alarmTodayCount,t.sjtjList[4].num=n.result.alarmTodayProcessCount,t.sjtjList[5].num=n.result.deviceRepairCount)}))},goPage:function(t){var e=t.type,n=t.name;this.$Router.push({path:e,query:{subSystem:"1",title:n}})},onSocketOpen:function(){r.default.init("websocket")},onSocketReceive:function(){var t=this;r.default.acceptMessage=function(e){"topic"==e.cmd?t.loadCount("1"):"user"==e.cmd?t.loadCount("2"):"email"==e.cmd&&t.loadEmailCount()}},loadCount:function(e){var n=this;t.log("loadCount::flag",e);this.$http.get("/sys/annountCement/listByUser").then((function(e){if(t.log("res::",e),e.data.success){var i=e.data.result.anntMsgTotal,a=e.data.result.sysMsgTotal;n.msgCount=i+a,t.log("this.msgCount",n.msgCount)}}))},loadEmailCount:function(){this.dot.mailHome=!0},goSjtjList:function(t){"告警"==t.typeName&&this.$Router.push({path:"/pages/common/alarmDataAll",query:{}})}})};e.default=s}).call(this,n("ba7c")["default"])},9424:function(t,e,n){"use strict";var i=n("e81c"),a=n.n(i);a.a},c2c9:function(t,e,n){"use strict";n.r(e);var i=n("7a7d"),a=n("e248");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("65c7");var o=n("828b"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"3927d88e",null,!1,i["a"],void 0);e["default"]=u.exports},c57f:function(t,e,n){"use strict";n.r(e);var i=n("0411"),a=n("e7ad");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("9424");var o=n("828b"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"e944b75e",null,!1,i["a"],void 0);e["default"]=u.exports},e248:function(t,e,n){"use strict";n.r(e);var i=n("189d"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},e7ad:function(t,e,n){"use strict";n.r(e);var i=n("93c20"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},e81c:function(t,e,n){var i=n("0375");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("967d").default;a("26e9b2b9",i,!0,{sourceMap:!1,shadowMode:!1})},fab6:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("64aa");var i={props:{bgColor:{type:String,default:uni.$u.props.gap.bgColor},height:{type:[String,Number],default:uni.$u.props.gap.height},marginTop:{type:[String,Number],default:uni.$u.props.gap.marginTop},marginBottom:{type:[String,Number],default:uni.$u.props.gap.marginBottom}}};e.default=i}}]);