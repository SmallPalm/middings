(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-deviceType"],{3111:function(t,e,s){"use strict";s.r(e);var a=s("3b12"),i=s("f771");for(var r in i)["default"].indexOf(r)<0&&function(t){s.d(e,t,(function(){return i[t]}))}(r);s("456d");var n=s("828b"),o=Object(n["a"])(i["default"],a["b"],a["c"],!1,null,"ce2876a8",null,!1,a["a"],void 0);e["default"]=o.exports},3157:function(t,e,s){var a=s("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.deviceList[data-v-ce2876a8]{padding:3vw 2vw 3vw 0}.progress[data-v-ce2876a8]{display:flex;justify-content:space-around;padding:5vw 0 5vw}.progress > uni-view[data-v-ce2876a8]{width:40%}.progress .chartsProgress[data-v-ce2876a8]{position:relative;height:100%;width:100%;\r\n  /* text-align: center; */display:flex;flex-direction:column;justify-content:center;align-items:center;-webkit-transform:scale(.9);transform:scale(.9)}.progress .chartsProgress .chartsProgressTop > uni-view[data-v-ce2876a8]{display:inline-block}.progress .chartsProgress .chartsProgressTop .chartsProgressNum[data-v-ce2876a8]{margin-right:1.5vw}.progress .chartsProgress .chartsProgressTop .company[data-v-ce2876a8]{font-size:5vw}.progress .chartsProgress .title[data-v-ce2876a8]{font-size:5vw;color:#6f6f6f}.myCardgrid[data-v-ce2876a8]{width:95%;margin-left:auto;margin-right:auto\r\n  /* height: 150px; */}.shebeicar[data-v-ce2876a8]{float:left;margin-left:2vw;margin-bottom:2vw;width:21.2vw;height:27.5vw;background:linear-gradient(180deg,#f7f8fa,#f7f8fa);box-shadow:inset 0 1px 1px 1px #fff,inset 0 1px 2px 0 hsla(0,0%,76.5%,.58);border-radius:4px}.clearfix[data-v-ce2876a8]::after{content:"";display:table;clear:both}.text-center-le[data-v-ce2876a8]{font-size:14px;margin-top:5px;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;max-height:3em;line-height:1.5em}.shebeisearch[data-v-ce2876a8]{padding:10px 10px 0 10px}',""]),t.exports=e},"3b12":function(t,e,s){"use strict";s.d(e,"b",(function(){return i})),s.d(e,"c",(function(){return r})),s.d(e,"a",(function(){return a}));var a={uGap:s("c2c9").default,uCountTo:s("aad9").default,uTabs:s("2a22").default,uSearch:s("02fe").default,uLoadmore:s("cbe8").default},i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",{staticStyle:{"background-color":"white"}},[s("v-uni-scroll-view",{staticClass:"pageNo",attrs:{"scroll-y":!0}},[s("cu-custom",{attrs:{bgColor:"bg-gradual-white",isBack:!0}},[s("template",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.title))])],2),s("u-gap",{attrs:{height:"2vw","bg-color":"#F5F7FB"}}),s("v-uni-view",{staticClass:"progress"},[s("v-uni-view",[s("my-charts-progress",{attrs:{proportion:t.progress.progress1}},[s("v-uni-view",{staticClass:"chartsProgress"},[s("v-uni-view",{staticClass:"chartsProgressTop"},[s("u-count-to",{staticClass:"chartsProgressNum",attrs:{"start-val":0,"end-val":t.progress.value1,decimals:1,fontSize:"10vw",bold:!0,color:"rgb(43,43,43)"}}),s("v-uni-view",{staticClass:"company"},[t._v("%")])],1),s("v-uni-view",{staticClass:"title"},[t._v("设备在线数量")])],1)],1)],1),s("v-uni-view",[s("my-charts-progress",{attrs:{proportion:t.progress.progress2}},[s("v-uni-view",{staticClass:"chartsProgress"},[s("v-uni-view",{staticClass:"chartsProgressTop"},[s("u-count-to",{staticClass:"chartsProgressNum",attrs:{"start-val":0,"end-val":t.progress.value2,decimals:1,fontSize:"10vw",bold:!0,color:"rgb(43,43,43)"}}),s("v-uni-view",{staticClass:"company"},[t._v("%")])],1),s("v-uni-view",{staticClass:"title"},[t._v("设备离线数量")])],1)],1)],1)],1),s("u-gap",{attrs:{height:"2vw","bg-color":"#F5F7FB"}}),s("v-uni-view",[s("v-uni-view",{staticClass:"myCardgrid"},[s("u-tabs",{attrs:{list:t.list.map((function(t){return{name:t.title}})),activeStyle:{fontWeight:"900",transform:"scale(1.05)",fontSize:"3.5vw",color:"#000"},inactiveStyle:{color:"#606266",transform:"scale(1)",fontSize:"3.5vw"}},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabsClisk.apply(void 0,arguments)}}}),s("u-search",{staticClass:"shebeisearch",attrs:{placeholder:"请输入设备名称"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.thBaseDeviceList(t.list[t.tabsIndex])}},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}}),s("v-uni-view",{staticClass:"clearfix deviceList"},t._l(t.listChildren,(function(e,a){return s("v-uni-view",{key:a,staticClass:"shebeicar",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.goPage(e)}}},[s("v-uni-view",{staticStyle:{width:"30px",height:"30px","margin-left":"auto","margin-right":"auto","margin-top":"15px"}},[1==e.onlineStatus?s("v-uni-image",{staticStyle:{width:"30px",height:"30px"},attrs:{src:"/static/icon/sbkq.png"}}):s("v-uni-image",{staticStyle:{width:"30px",height:"30px"},attrs:{src:"/static/icon/sbgb.png"}})],1),s("v-uni-view",{staticClass:"text-center text-center-le"},[t._v(t._s(e.name))]),1==e.onlineStatus?s("v-uni-view",{staticClass:"text-center",staticStyle:{"font-size":"13px","font-weight":"bold",color:"#0FD4D5","margin-top":"5px"}},[t._v("在线")]):s("v-uni-view",{staticClass:"text-center",staticStyle:{"font-size":"13px","font-weight":"bold",color:"#8F8F8F","margin-top":"5px"}},[t._v("离线")])],1)})),1)],1)],1),s("u-loadmore",{attrs:{status:t.status}})],1)],1)},r=[]},"456d":function(t,e,s){"use strict";var a=s("eedc"),i=s.n(a);i.a},a7b6:function(t,e,s){"use strict";(function(t){s("6a54");var a=s("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,s("c223"),s("aa9c");var i=a(s("b7c7")),r=a(s("8a6f")),n=a(s("08a3"));var o={components:{myChartsProgress:r.default},data:function(){return{list:[],listChildren:[],tabsIndex:0,subSystem:"",status:"loadmore",pageSize:48,pageNo:1,searchValue:"",progress:{progress1:0,value1:0,progress2:0,value2:0}}},onReachBottom:function(){var t=this;"nomore"!==this.status&&(this.status="loading",this.pageNo=++this.pageNo,n.default.thBaseDeviceList({subSystem:this.subSystem,deviceCategoryId:this.list[this.tabsIndex].value,pageNo:this.pageNo,pageSize:this.pageSize,name:"*".concat(this.searchValue,"*")}).then((function(e){var s=e.data;200==s.code&&(t.listChildren=[].concat((0,i.default)(t.listChildren),(0,i.default)(s.result.records)),t.pageNo===s.result.pages?t.status="nomore":t.status="loading")})))},onLoad:function(){this.subSystem=this.$Route.query.subSystem,this.thBaseDeviceCategoryQuerySummaryTreeList(),this.summaryQueryDeviceAlarmSummary()},computed:{title:function(){return this.$Route.query.title||"设备列表"}},methods:{goPage:function(t){var e=t.id,s=t.name;this.$Router.push({path:"/pages/common/devices",query:{devices:e,name:s}})},summaryQueryDeviceAlarmSummary:function(){var t=this;n.default.summaryQueryDeviceAlarmSummary({subSystem:this.subSystem}).then((function(e){var s=e.data;if(200==s.code){var a=s.result.deviceOfflineCount+s.result.deviceOnlineCount;t.progress={progress1:(s.result.deviceOnlineCount/a).toFixed(2),value1:100*(s.result.deviceOnlineCount/a).toFixed(2),progress2:(s.result.deviceOfflineCount/a).toFixed(2),value2:100*(s.result.deviceOfflineCount/a).toFixed(2)}}}))},thBaseDeviceCategoryQuerySummaryTreeList:function(){var t=this;n.default.thBaseDeviceCategoryQuerySummaryTreeList({subSystem:this.subSystem}).then((function(e){var s=e.data;200==s.code&&(t.list=s.result[0].children,t.list.length&&t.thBaseDeviceList(t.list[t.tabsIndex]))}))},thBaseDeviceList:function(t,e){var s=null;return function(){var a=this,i=arguments;s||(s=setTimeout((function(){t.apply(a,i),s=null}),e))}}((function(e){var s=this,a=e.value;t.log(this.searchValue),n.default.thBaseDeviceList({subSystem:this.subSystem,deviceCategoryId:a,pageNo:this.pageNo,pageSize:this.pageSize,name:"*".concat(this.searchValue,"*")}).then((function(t){var e=t.data;200==e.code&&(s.listChildren=e.result.records)}))}),1e3),tabsClisk:function(t){var e=t.index;this.status="loadmore",this.pageNo=1,this.tabsIndex=e,this.thBaseDeviceList(this.list[e])}}};e.default=o}).call(this,s("ba7c")["default"])},eedc:function(t,e,s){var a=s("3157");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=s("967d").default;i("41d8bf3e",a,!0,{sourceMap:!1,shadowMode:!1})},f771:function(t,e,s){"use strict";s.r(e);var a=s("a7b6"),i=s.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){s.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a}}]);