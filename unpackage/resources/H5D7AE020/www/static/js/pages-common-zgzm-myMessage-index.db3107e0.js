(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-zgzm-myMessage-index"],{"04d6":function(t,a,e){"use strict";var r=e("06c2"),n=e.n(r);n.a},"05a1":function(t,a,e){"use strict";e.r(a);var r=e("9dd2"),n=e("17b6");for(var i in n)["default"].indexOf(i)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(i);e("d672");var s=e("828b"),o=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"861643d8",null,!1,r["a"],void 0);a["default"]=o.exports},"06c2":function(t,a,e){var r=e("fec1");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=e("967d").default;n("7cb7a00e",r,!0,{sourceMap:!1,shadowMode:!1})},"17b6":function(t,a,e){"use strict";e.r(a);var r=e("1aec"),n=e.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){e.d(a,t,(function(){return r[t]}))}(i);a["default"]=n.a},"1aec":function(t,a,e){"use strict";(function(t){e("6a54");var r=e("f5bd").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("c223");r(e("8a6f")),r(e("08a3"));var n={components:{},data:function(){return{options:[{text:"取消",style:{backgroundColor:"#007aff"}},{text:"确认",style:{backgroundColor:"#dd524d"}}],users:[{avatar:"/static/avatar/avatar1.png",name:"杨涛",read:1,time:"23:59",msg:"没有消息就是最好的消息"},{avatar:"/static/avatar/avatar2.jpg",name:"雨中漫步",read:1,time:"23:59",msg:"没有消息就是最好的消息"},{avatar:"/static/avatar/avatar3.jpeg",name:"糖果梦境",read:1,time:"23:59",msg:"没有消息就是最好的消息"},{avatar:"/static/avatar/avatar4.png",name:"海上日落",read:1,time:"23:59",msg:"没有消息就是最好的消息"},{avatar:"/static/avatar/avatar6.png",name:"男朋友",read:1,time:"23:59",msg:"没有消息就是最好的消息"},{avatar:"/static/avatar/avatar8.png",name:"女朋友",read:1,time:"23:59",msg:"没有消息就是最好的消息"}]}},onReachBottom:function(){},onLoad:function(){},computed:{title:function(){return this.$Route.query.title||"我的消息"}},methods:{onClick:function(a){t.log("点击了"+("left"===a.position?"左侧":"右侧")+a.content.text+"按钮")},swipeChange:function(a,e){t.log("当前状态："+a+"，下标："+e)},connect:function(t){uni.navigateTo({url:"/pages/common/zgzm/myMessage/message?name=".concat(t.name,"&avatar=").concat(t.avatar)})}}};a.default=n}).call(this,e("ba7c")["default"])},"382a":function(t,a,e){"use strict";e.r(a);var r=e("bf79"),n=e.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){e.d(a,t,(function(){return r[t]}))}(i);a["default"]=n.a},"3bb4":function(t,a,e){var r=e("c86c");a=r(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.deviceList[data-v-861643d8]{padding:3vw 2vw 3vw 0}.progress[data-v-861643d8]{display:flex;justify-content:space-around;padding:5vw 0 5vw}.progress > uni-view[data-v-861643d8]{width:40%}.progress .chartsProgress[data-v-861643d8]{position:relative;height:100%;width:100%;\r\n  /* text-align: center; */display:flex;flex-direction:column;justify-content:center;align-items:center;-webkit-transform:scale(.9);transform:scale(.9)}.progress .chartsProgress .chartsProgressTop > uni-view[data-v-861643d8]{display:inline-block}.progress .chartsProgress .chartsProgressTop .chartsProgressNum[data-v-861643d8]{margin-right:1.5vw}.progress .chartsProgress .chartsProgressTop .company[data-v-861643d8]{font-size:5vw}.progress .chartsProgress .title[data-v-861643d8]{font-size:5vw;color:#6f6f6f}.myCardgrid[data-v-861643d8]{width:95%;margin-left:auto;margin-right:auto\r\n  /* height: 150px; */}.shebeicar[data-v-861643d8]{float:left;margin-left:2vw;margin-bottom:2vw;width:21.2vw;height:27.5vw;background:linear-gradient(180deg,#f7f8fa,#f7f8fa);box-shadow:inset 0 1px 1px 1px #fff,inset 0 1px 2px 0 hsla(0,0%,76.5%,.58);border-radius:4px}.clearfix[data-v-861643d8]::after{content:"";display:table;clear:both}.text-center-le[data-v-861643d8]{font-size:14px;margin-top:5px;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;max-height:3em;line-height:1.5em}.shebeisearch[data-v-861643d8]{padding:10px 10px 0 10px}.page[data-v-861643d8]{padding:0 %?32?%;color:#333}.list-item[data-v-861643d8]{display:flex;padding:%?50?% 0;border-bottom:1px solid #ccced3}.list-item .avatar[data-v-861643d8]{width:%?90?%;height:%?90?%;border-radius:%?10?%;margin-right:%?20?%;position:relative}.list-item .avatar .round[data-v-861643d8]{position:absolute;width:%?14?%;height:%?14?%;border-radius:50%;background:#ef5656;top:%?-4?%;right:%?-4?%;z-index:1}.list-item .avatar uni-image[data-v-861643d8]{width:100%;height:100%;border-radius:%?10?%}.list-item .content[data-v-861643d8]{flex:1}.list-item .content .title[data-v-861643d8]{display:flex;justify-content:space-between}.list-item .content .title .name[data-v-861643d8]{font-weight:700}.list-item .content .title .time[data-v-861643d8]{color:#999;font-size:%?24?%}.list-item .content .txt[data-v-861643d8]{margin-top:%?10?%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;text-align:left;color:#999;font-size:%?26?%}',""]),t.exports=a},"3d19":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return r}));var r={qiunDataCharts:e("5ee1").default},n=function(){var t=this.$createElement,a=this._self._c||t;return a("v-uni-view",{staticClass:"charts-box",style:"height: "+this.width+"px;"},[a("v-uni-view",{staticClass:"charts-back"},[a("v-uni-view",{staticClass:"charts-back-cont"},[this._t("default")],2)],1),a("qiun-data-charts",{attrs:{type:"arcbar",opts:this.opts,chartData:this.chartData}})],1)},i=[]},"647d":function(t,a,e){var r=e("3bb4");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=e("967d").default;n("bef9626e",r,!0,{sourceMap:!1,shadowMode:!1})},"8a6f":function(t,a,e){"use strict";e.r(a);var r=e("3d19"),n=e("382a");for(var i in n)["default"].indexOf(i)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(i);e("04d6");var s=e("828b"),o=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"1750ceb6",null,!1,r["a"],void 0);a["default"]=o.exports},"9dd2":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return r}));var r={uGap:e("c2c9").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticStyle:{"background-color":"white"}},[e("v-uni-scroll-view",{staticClass:"pageNo",attrs:{"scroll-y":!0}},[e("cu-custom",{attrs:{bgColor:"bg-gradual-white",isBack:!0}},[e("template",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.title))])],2),e("u-gap",{attrs:{height:"2vw","bg-color":"#F5F7FB"}}),e("v-uni-view",{staticClass:"page"},t._l(t.users,(function(a,r){return e("v-uni-view",{key:r,staticClass:"list-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.connect(a)}}},[e("v-uni-view",{staticClass:"avatar"},[a.read?e("v-uni-text",{staticClass:"round"}):t._e(),e("v-uni-image",{attrs:{src:a.avatar,mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"title"},[e("v-uni-text",{staticClass:"name"},[t._v(t._s(a.name))]),e("v-uni-text",{staticClass:"time"},[t._v(t._s(a.time))])],1),e("v-uni-view",{staticClass:"txt"},[t._v(t._s(a.msg))])],1)],1)})),1)],1)],1)},i=[]},bf79:function(t,a,e){"use strict";e("6a54"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("64aa"),e("5c47");var r={props:{proportion:[String,Number]},data:function(){return{width:300}},mounted:function(){this.getViewWidth()},computed:{chartData:function(){return{series:[{name:"",color:"#3ff3de",data:this.proportion}]}},opts:function(){var t=this,a=function(a){return t.width*(a/300)};return{color:["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],padding:void 0,title:{name:"",fontSize:a(35),color:"#2fc25b"},subtitle:{name:"",fontSize:a(25),color:"#666666"},extra:{arcbar:{type:"circle",width:a(12),backgroundColor:"#E9E9E9",startAngle:1.5,endAngle:.25,gap:2,lineCap:"round",linearType:"custom",customColor:["#3ff3de","#3ff3decc"]}}}}},methods:{getViewWidth:function(){var t=this,a=uni.createSelectorQuery().in(this);a.select(".charts-box").boundingClientRect((function(a){a&&(t.width=a.width)})).exec()}}};a.default=r},d672:function(t,a,e){"use strict";var r=e("647d"),n=e.n(r);n.a},fec1:function(t,a,e){var r=e("c86c");a=r(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 请根据实际需求修改父元素尺寸，组件自动识别宽高 */.charts-box[data-v-1750ceb6]{width:100%;position:relative}.charts-box > uni-view[data-v-1750ceb6]{position:absolute;top:0;left:0;width:100%;height:100%}.charts-box .charts-back[data-v-1750ceb6]{background-color:#e9e9e9;border-radius:50%;-webkit-transform:scale(.9);transform:scale(.9)}.charts-box .charts-back .charts-back-cont[data-v-1750ceb6]{background-color:#fff;border-radius:50%;width:100%;height:100%;-webkit-transform:scale(.81);transform:scale(.81)}',""]),t.exports=a}}]);