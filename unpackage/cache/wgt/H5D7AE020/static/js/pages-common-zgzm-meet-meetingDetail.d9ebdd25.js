(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-zgzm-meet-meetingDetail"],{1558:function(t,e,i){"use strict";i.r(e);var n=i("f4cc"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"443c":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={uGap:i("c2c9").default,uPopup:i("6097").default,uTag:i("a447").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{"background-color":"white"}},[i("v-uni-scroll-view",{staticClass:"pageNo",attrs:{"scroll-y":!0}},[i("cu-custom",{attrs:{bgColor:"bg-gradual-white",isBack:!0}},[i("template",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.title))])],2),i("u-gap",{attrs:{height:"2vw","bg-color":"#F5F7FB"}}),i("v-uni-view",{staticStyle:{"background-color":"white"}},[i("v-uni-scroll-view",{staticClass:"pageNo",attrs:{"scroll-y":!0}},[i("u-gap",{attrs:{height:"2vw","bg-color":"#F5F7FB"}}),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"cu-card dynamic animation-slide-in"},[i("v-uni-view",{staticClass:"cu-item shadow"},[i("v-uni-view",{staticClass:"cu-bar solid-bottom bg-white"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-calendar text-blue"}),t._v("会议信息")],1)],1),i("v-uni-view",{staticClass:"cu-list menu sm-border"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-title text-blue margin-right-xs"}),t._v("会议主题")],1),i("v-uni-view",{staticClass:"action"},[t._v(t._s(t.meetingDetail.reason))])],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-time text-blue margin-right-xs"}),t._v("会议时间")],1),i("v-uni-view",{staticClass:"action"},[t._v(t._s(t.formatTime(t.meetingDetail.appointmentDate,t.meetingDetail.appointmentStartTime,t.meetingDetail.appointmentEndTime)))])],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-location text-blue margin-right-xs"}),t._v("会议室")],1),i("v-uni-view",{staticClass:"action"},[t._v(t._s(t.meetingDetail.mettingId_dictText))])],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-group text-blue margin-right-xs"}),t._v("参会人员")],1),i("v-uni-view",{staticClass:"action attendText ellipsis",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showAllAttendees.apply(void 0,arguments)}}},[t._v(t._s(t.meetingDetail.attendIds_dictText||"暂无"))])],1),t.meetingDetail.paper?[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-form text-blue margin-right-xs"}),t._v("无纸化")],1),i("v-uni-view",{staticClass:"action attendText ellipsis"},[t._v(t._s(t.meetingDetail.paper?"是":"否"))])],1)]:t._e()],2)],1)],1),i("v-uni-view",{staticClass:"cu-card dynamic animation-slide-in"},[i("v-uni-view",{staticClass:"cu-item shadow"},[i("v-uni-view",{staticClass:"cu-bar solid-bottom bg-white"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-profile text-green"}),t._v("会议文档")],1)],1),i("v-uni-view",{staticClass:"cu-list menu sm-border"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[t._v(t._s(t.meetingDetail.remark||"暂无文档"))])],1)],1)],1)],1),i("v-uni-view",{staticClass:"cu-card"},[i("v-uni-view",{staticClass:"cu-item shadow"},[i("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-title text-blue"}),t._v("会议状态")],1)],1),i("v-uni-view",{staticClass:"cu-list menu sm-border"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[t._v("当前状态")]),i("v-uni-view",{staticClass:"action"},[i("v-uni-view",{staticClass:"meeting-status",class:t.getStatusClass(t.meetingDetail)},[t._v(t._s(t.getMeetingStatus(t.meetingDetail)))])],1)],1)],1)],1)],1)],1),i("u-popup",{staticClass:"custom-popup",attrs:{show:t.showAttendPopup,round:10,mode:"center",closeable:!0,overlay:!0,closeOnClickOverlay:!0,safeAreaInsetBottom:!0,safeAreaInsetTop:!0},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.closePopup.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"popup-content"},[i("v-uni-view",{staticClass:"tag-wrapper"},t._l(t.attendeesArray,(function(t,e){return i("u-tag",{key:e,staticClass:"attendee-tag",attrs:{text:t,plain:!0,size:"mini"}})})),1)],1)],1)],1)],1)],1)],1)},s=[]},"59f6":function(t,e,i){var n=i("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-6649c256]{padding-bottom:%?30?%}.attendText[data-v-6649c256]{display:flex;flex-wrap:wrap;width:180px;justify-content:flex-end}.cu-card[data-v-6649c256]{margin-top:%?20?%}.cu-item[data-v-6649c256]{margin-top:%?20?%}.custom-popup[data-v-6649c256]{padding:0 45px;border-radius:20px;overflow:hidden}.popup-content[data-v-6649c256]{padding:20px;background-color:#fff;border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center}.tag-wrapper[data-v-6649c256]{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;padding:10px}.attendee-tag[data-v-6649c256]{margin:5px 0}.cu-list.menu .cu-item .content[data-v-6649c256]{font-size:%?28?%}.cu-list.menu .cu-item .action .cu-btn[data-v-6649c256]{font-size:%?24?%}',""]),t.exports=e},"86e6":function(t,e,i){"use strict";var n=i("de8f"),a=i.n(n);a.a},dc16:function(t,e,i){"use strict";i.r(e);var n=i("443c"),a=i("1558");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("86e6");var c=i("828b"),u=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"6649c256",null,!1,n["a"],void 0);e["default"]=u.exports},de8f:function(t,e,i){var n=i("59f6");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("967d").default;a("2d91c1c4",n,!0,{sourceMap:!1,shadowMode:!1})},f4cc:function(t,e,i){"use strict";(function(t){i("6a54");var n=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("2634")),s=n(i("2fdc"));i("795c"),i("c223"),i("aa9c"),i("7a76"),i("c9b5"),i("dd2b");var c=i("a1ed"),u={data:function(){return{meetingId:"",meetingDetail:{},showAttendPopup:!1,attendeesArray:[],uploadedFiles:[]}},onLoad:function(t){t.id&&(this.meetingId=t.id,uni.setStorageSync("meetingDetailId",t.id))},onShow:function(){this.meetingId=uni.getStorageSync("meetingDetailId"),this.meetingId&&this.getMeetingInfo(this.meetingId)},computed:{title:function(){return this.$Route.query.title||"会议详情"}},methods:{formatTime:function(t,e,i){if(!t)return"未知时间";var n=new Date(t),a=n.getFullYear(),s=String(n.getMonth()+1).padStart(2,"0"),c=String(n.getDate()).padStart(2,"0");return"".concat(a,"-").concat(s,"-").concat(c," ").concat(e," - ").concat(i)},getMeetingStatus:function(t){var e=new Date,i=t.appointmentDate?t.appointmentDate.split(" ")[0]:"",n=new Date("".concat(i,"T").concat(t.appointmentStartTime,":00")),a=new Date("".concat(i,"T").concat(t.appointmentEndTime,":00"));if(1===t.status&&e>=n&&e<=a)return"进行中";if(e>a)return"已过期";return{0:"待审核",1:"已通过",2:"未通过",4:"已取消"}[t.status]||"待审核"},getStatusClass:function(t){var e=this.getMeetingStatus(t);return{"待审核":"cu-tag bg-yellow","已通过":"cu-tag bg-green","未通过":"cu-tag bg-red","已取消":"cu-tag bg-grey","已过期":"status-expired","进行中":"status-ongoing"}[e]},getMeetingInfo:function(e){var i=this;return(0,s.default)((0,a.default)().mark((function n(){var s;return(0,a.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,c.getMettingDetail)(e);case 3:s=n.sent,200==s.data.code?(i.meetingDetail=s.data.result,i.attendeesArray=i.meetingDetail.attendIds_dictText?i.meetingDetail.attendIds_dictText.split(","):[],i.uploadedFiles=s.data.result.files||[]):uni.showToast({title:"获取会议数据失败",icon:"none"}),n.next=11;break;case 7:n.prev=7,n.t0=n["catch"](0),t.error("Error fetching meeting data:",n.t0),uni.showToast({title:"获取会议数据时发生错误",icon:"none"});case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))()},showAllAttendees:function(){this.attendeesArray.length>0&&(this.showAttendPopup=!0)},closePopup:function(){this.showAttendPopup=!1},chooseFile:function(){var t=this;uni.chooseFile({count:1,extension:[".doc",".docx",".pdf",".txt"],success:function(e){t.uploadFile(e.tempFilePaths[0])}})},uploadFile:function(t){var e=this;return(0,s.default)((0,a.default)().mark((function i(){var n,s;return(0,a.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return uni.showLoading({title:"上传中..."}),i.prev=1,i.next=4,uni.uploadFile({url:"YOUR_UPLOAD_API_URL",filePath:t,name:"file",formData:{meetingId:e.meetingId}});case 4:if(n=i.sent,s=JSON.parse(n.data),200!==s.code){i.next=12;break}e.meetingDetail.files=e.meetingDetail.files||[],e.meetingDetail.files.push({name:t.split("/").pop(),url:s.fileUrl}),uni.showToast({title:"文件上传成功",icon:"success"}),i.next=13;break;case 12:throw new Error(s.message||"上传失败");case 13:i.next=18;break;case 15:i.prev=15,i.t0=i["catch"](1),uni.showToast({title:i.t0.message||"文件上传失败",icon:"none"});case 18:return i.prev=18,uni.hideLoading(),i.finish(18);case 21:case"end":return i.stop()}}),i,null,[[1,15,18,21]])})))()},deleteFile:function(t){var e=this;uni.showModal({title:"确认删除",content:"是否确定删除该文件？",success:function(i){i.confirm&&(e.uploadedFiles.splice(t,1),uni.showToast({title:"文件已删除",icon:"success"}))}})}}};e.default=u}).call(this,i("ba7c")["default"])}}]);