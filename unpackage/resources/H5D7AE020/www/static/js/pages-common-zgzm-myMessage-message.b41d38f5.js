(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-zgzm-myMessage-message"],{"13b1":function(t,e,a){"use strict";a("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("aa9c");var n={data:function(){return{content:"",list:[],top:0}},onLoad:function(t){uni.setNavigationBarTitle({title:t.name}),this._friendAvatar=t.avatar,this._selfAvatar="/static/avatar/avatar5.jpeg",this.list=[{content:"对方历史回复消息",userType:"friend",avatar:this._friendAvatar},{content:"历史消息",userType:"self",avatar:this._selfAvatar}]},methods:{send:function(){var t=this;this.list.push({content:this.content,userType:"self",avatar:this._selfAvatar}),this.content="",this.scrollToBottom(),setTimeout((function(){t.list.push({content:"周末什么安排",userType:"friend",avatar:t._friendAvatar}),t.scrollToBottom()}),1500)},chooseImage:function(){var t=this;uni.chooseImage({success:function(e){t.list.push({content:e.tempFilePaths[0],userType:"self",messageType:"image",avatar:t._selfAvatar}),t.scrollToBottom(),setTimeout((function(){t.list.push({content:"你好呀，朋友~",userType:"friend",avatar:t._friendAvatar}),t.scrollToBottom()}),1500)}})},scrollToBottom:function(){this.top=1e3*this.list.length}}};e.default=n},"1f01":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"page"},[a("v-uni-scroll-view",{staticClass:"scroll-view",attrs:{"scroll-y":!0,"scroll-with-animation":!0,"scroll-top":t.top}},[a("v-uni-view",{staticStyle:{padding:"30rpx 30rpx 240rpx"}},t._l(t.list,(function(e,n){return a("v-uni-view",{key:n,staticClass:"message",class:[e.userType]},["friend"===e.userType?a("v-uni-image",{staticClass:"avatar",attrs:{src:e.avatar,mode:"widthFix"}}):t._e(),"image"===e.messageType?a("v-uni-view",{staticClass:"content"},[a("v-uni-image",{attrs:{src:e.content,mode:"widthFix"}})],1):a("v-uni-view",{staticClass:"content"},[t._v(t._s(e.content))]),"self"===e.userType?a("v-uni-image",{staticClass:"avatar",attrs:{src:e.avatar,mode:"widthFix"}}):t._e()],1)})),1)],1),a("v-uni-view",{staticClass:"tool"},[a("v-uni-input",{staticClass:"input",attrs:{type:"text"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.send.apply(void 0,arguments)}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),a("v-uni-image",{staticClass:"thumb",attrs:{src:"/static/photo.png",mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseImage.apply(void 0,arguments)}}})],1)],1)},i=[]},"452b":function(t,e,a){"use strict";var n=a("4a5b"),i=a.n(n);i.a},"4a5b":function(t,e,a){var n=a("827c");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("967d").default;i("7806342d",n,!0,{sourceMap:!1,shadowMode:!1})},"827c":function(t,e,a){var n=a("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.scroll-view[data-v-5a695bec]{height:calc(100vh - 44px);background:#eee;box-sizing:border-box}.message[data-v-5a695bec]{display:flex;align-items:flex-start;margin-bottom:%?30?%}.message .avatar[data-v-5a695bec]{width:%?80?%;height:%?80?%;border-radius:%?10?%;margin-right:%?30?%}.message .content[data-v-5a695bec]{min-height:%?80?%;max-width:60vw;box-sizing:border-box;font-size:%?28?%;line-height:1.3;padding:%?20?%;border-radius:%?10?%;background:#fff}.message .content uni-image[data-v-5a695bec]{width:%?200?%}.message.self[data-v-5a695bec]{justify-content:flex-end}.message.self .avatar[data-v-5a695bec]{margin:0 0 0 %?30?%}.message.self .content[data-v-5a695bec]{position:relative}.message.self .content[data-v-5a695bec]::after{position:absolute;content:"";width:0;height:0;border:%?16?% solid transparent;border-left:%?16?% solid #fff;right:%?-28?%;top:%?24?%}.message.friend .content[data-v-5a695bec]{position:relative}.message.friend .content[data-v-5a695bec]::after{position:absolute;content:"";width:0;height:0;border:%?16?% solid transparent;border-right:%?16?% solid #fff;left:%?-28?%;top:%?24?%}.tool[data-v-5a695bec]{position:fixed;width:100%;min-height:%?120?%;left:0;bottom:0;background:#fff;display:flex;align-items:flex-start;box-sizing:border-box;padding:%?20?% %?24?% %?20?% %?40?%;padding-bottom:calc(%?20?% + constant(safe-area-inset-bottom)/2)!important;padding-bottom:calc(%?20?% + env(safe-area-inset-bottom)/2)!important}.tool .input[data-v-5a695bec]{background:#eee;border-radius:%?10?%;height:%?70?%;margin-right:%?30?%;flex:1;padding:0 %?20?%;box-sizing:border-box;font-size:%?28?%}.tool .thumb[data-v-5a695bec]{width:%?64?%}',""]),t.exports=e},"8a50":function(t,e,a){"use strict";a.r(e);var n=a("1f01"),i=a("e9a2");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("452b");var o=a("828b"),r=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"5a695bec",null,!1,n["a"],void 0);e["default"]=r.exports},e9a2:function(t,e,a){"use strict";a.r(e);var n=a("13b1"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a}}]);