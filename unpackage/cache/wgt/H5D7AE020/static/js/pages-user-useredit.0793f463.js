(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-useredit"],{"0cd9":function(t,a,i){"use strict";(function(t){i("6a54"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,i("fd3c"),i("dc8a"),i("23f4"),i("7d2f"),i("5c47"),i("9c4e"),i("ab80"),i("0506"),i("a1c1"),i("dd2b");var e={data:function(){return{index:-1,switchC:!0,imgList:[],uploadUrl:"/sys/common/upload",myFormData:{avatar:"",realname:"",username:"",sex:1,birthday:"",orgCode:"",workNo:"",phone:"",email:"",id:""}}},onLoad:function(a){var i=this;t.log("this.$Route.query",this.$Route.query);var e=this.$Route.query;e&&(this.myFormData=e,"女"==this.myFormData.sex?this.switchC=!1:"男"==this.myFormData.sex&&(this.switchC=!0),this.myFormData.avatar&&(this.imgList=[this.myFormData.avatar]),this.myFormData.birthday||(this.myFormData.birthday="无"),"普通成员"==this.myFormData.identity?this.myFormData.identity=1:"上级"==this.myFormData.identity&&(this.myFormData.identity=2),"正常"==this.myFormData.status?this.myFormData.status=1:"冻结"==this.myFormData.status&&(this.myFormData.status=2),this.Avatar=this.myFormData.avatar,Object.keys(this.myFormData).map((function(t){"无"==i.myFormData[t]&&(i.myFormData[t]="")})),t.log("this.myFormData",this.myFormData))},methods:{onSubmit:function(){var a=this,i=this.myFormData,e=new RegExp(/^[1]([3-9])[0-9]{9}$/);return t.log("myForm",i),i.phone&&0!=i.phone.length?e.test(i.phone)?/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(i.email)?(this.myFormData.id=this.$store.getters.userid,this.switchC?this.myFormData.sex=1:this.myFormData.sex=2,t.log("myform",this.myFormData),this.$tip.loading(),void this.$http.put("/sys/user/appEdit",this.myFormData).then((function(i){t.log(i),a.$tip.loaded(),i.data.success&&(a.$tip.toast("提交成功"),a.$Router.replace({name:"userdetail"}))})).catch((function(){a.$tip.loaded(),a.$tip.error("提交失败")}))):(this.$tip.alert("请输入正确的邮箱地址"),!1):(this.$tip.alert("请输入正确的手机号"),!1):(this.$tip.alert("请输入手机号"),!1)},DateChange:function(t){this.myFormData.birthday=t.detail.value},SwitchC:function(t){this.switchC=t.detail.value},ChooseImage:function(){var t=this,a=this;uni.chooseImage({count:4,sizeType:["original","compressed"],sourceType:["album"],success:function(i){a.$http.upload(a.$config.apiUrl+a.uploadUrl,{filePath:i.tempFilePaths[0],name:"file"}).then((function(t){a.myFormData.avatar=t.data.message})).catch((function(t){a.$tip.error(t.data.message)})),t.imgList=i.tempFilePaths}})},ViewImage:function(t){uni.previewImage({urls:this.imgList,current:t.currentTarget.dataset.url})},DelImg:function(t){var a=this;uni.showModal({title:"召唤师",content:"确定要删除这段回忆吗？",cancelText:"再看看",confirmText:"再见",success:function(i){i.confirm&&a.imgList.splice(t.currentTarget.dataset.index,1)}})}}};a.default=e}).call(this,i("ba7c")["default"])},"12f8":function(t,a,i){var e=i("953c");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("967d").default;n("cf7e80cc",e,!0,{sourceMap:!1,shadowMode:!1})},"189d":function(t,a,i){"use strict";i("6a54");var e=i("f5bd").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("fab6")),s={name:"u-gap",mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default],computed:{gapStyle:function(){var t={backgroundColor:this.bgColor,height:uni.$u.addUnit(this.height),marginTop:uni.$u.addUnit(this.marginTop),marginBottom:uni.$u.addUnit(this.marginBottom)};return uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}}};a.default=s},"4abf":function(t,a,i){var e=i("540b");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("967d").default;n("3bfb6270",e,!0,{sourceMap:!1,shadowMode:!1})},"540b":function(t,a,i){var e=i("c86c");a=e(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-3927d88e], uni-scroll-view[data-v-3927d88e], uni-swiper-item[data-v-3927d88e]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}',""]),t.exports=a},"65c7":function(t,a,i){"use strict";var e=i("4abf"),n=i.n(e);n.a},"6b36":function(t,a,i){"use strict";i.r(a);var e=i("0cd9"),n=i.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(s);a["default"]=n.a},"71f4":function(t,a,i){"use strict";var e=i("12f8"),n=i.n(e);n.a},"7a7d":function(t,a,i){"use strict";i.d(a,"b",(function(){return e})),i.d(a,"c",(function(){return n})),i.d(a,"a",(function(){}));var e=function(){var t=this.$createElement,a=this._self._c||t;return a("v-uni-view",{staticClass:"u-gap",style:[this.gapStyle]})},n=[]},"8bc6":function(t,a,i){"use strict";i.r(a);var e=i("a441"),n=i("6b36");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(s);i("71f4");var r=i("828b"),o=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"7c6892f4",null,!1,e["a"],void 0);a["default"]=o.exports},"953c":function(t,a,i){var e=i("c86c");a=e(!1),a.push([t.i,".cu-form-group .title[data-v-7c6892f4]{min-width:calc(4em + 15px)}",""]),t.exports=a},a441:function(t,a,i){"use strict";i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return s})),i.d(a,"a",(function(){return e}));var e={uGap:i("c2c9").default},n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("cu-custom",{attrs:{bgColor:"bg-gradual-white",isBack:!0}},[i("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),i("template",{attrs:{slot:"content"},slot:"content"},[t._v("编辑资料")])],2),i("u-gap",{attrs:{height:"2vw","bg-color":"#F5F7FB"}}),i("v-uni-form",[i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("姓名")]),i("v-uni-input",{attrs:{placeholder:"请输入姓名",name:"input"},model:{value:t.myFormData.realname,callback:function(a){t.$set(t.myFormData,"realname",a)},expression:"myFormData.realname"}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("用户名")]),i("v-uni-input",{attrs:{placeholder:"用户名",name:"input",disabled:!0},model:{value:t.myFormData.username,callback:function(a){t.$set(t.myFormData,"username",a)},expression:"myFormData.username"}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("头像")]),i("v-uni-view",{staticClass:"grid col-4 grid-square flex-sub"},[t._l(t.imgList,(function(a,e){return i("v-uni-view",{key:e,staticClass:"bg-img",attrs:{"data-url":t.imgList[e]},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.ViewImage.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:t.imgList[e],mode:"aspectFill"}}),i("v-uni-view",{staticClass:"cu-tag bg-red radius",attrs:{"data-index":e},on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.DelImg.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)})),t.imgList.length<1?i("v-uni-view",{staticClass:"solids",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.ChooseImage.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-cameraadd"})],1):t._e()],2)],1),i("v-uni-view",{staticClass:"cu-form-group margin-top"},[i("v-uni-view",{staticClass:"title"},[t._v("性别")]),i("v-uni-switch",{staticClass:"switch-sex",class:t.switchC?"checked":"",attrs:{checked:!!t.switchC},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.SwitchC.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"cu-form-group margin-top"},[i("v-uni-view",{staticClass:"title"},[t._v("手机号码")]),i("v-uni-input",{attrs:{placeholder:"输入手机号码",name:"input"},model:{value:t.myFormData.phone,callback:function(a){t.$set(t.myFormData,"phone",a)},expression:"myFormData.phone"}}),i("v-uni-view",{staticClass:"cu-capsule radius"},[i("v-uni-view",{staticClass:"cu-tag bg-blue "},[t._v("+86")]),i("v-uni-view",{staticClass:"cu-tag line-blue"},[t._v("中国大陆")])],1)],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("邮箱")]),i("v-uni-input",{attrs:{placeholder:"输入邮箱",name:"input"},model:{value:t.myFormData.email,callback:function(a){t.$set(t.myFormData,"email",a)},expression:"myFormData.email"}})],1),i("v-uni-view",{staticClass:"padding flex flex-direction"},[i("v-uni-button",{staticClass:"cu-btn bg-blue lg",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onSubmit.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)],1)},s=[]},c2c9:function(t,a,i){"use strict";i.r(a);var e=i("7a7d"),n=i("e248");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(s);i("65c7");var r=i("828b"),o=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"3927d88e",null,!1,e["a"],void 0);a["default"]=o.exports},e248:function(t,a,i){"use strict";i.r(a);var e=i("189d"),n=i.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(s);a["default"]=n.a},fab6:function(t,a,i){"use strict";i("6a54"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,i("64aa");var e={props:{bgColor:{type:String,default:uni.$u.props.gap.bgColor},height:{type:[String,Number],default:uni.$u.props.gap.height},marginTop:{type:[String,Number],default:uni.$u.props.gap.marginTop},marginBottom:{type:[String,Number],default:uni.$u.props.gap.marginBottom}}};a.default=e}}]);