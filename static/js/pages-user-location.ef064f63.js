(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-location"],{"32ea":function(t,i,e){"use strict";e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){}));var o=function(){var t=this.$createElement,i=this._self._c||t;return i("v-uni-view",[i("cu-custom",{attrs:{bgColor:this.NavBarColor,isBack:!0}},[i("template",{attrs:{slot:"backText"},slot:"backText"},[this._v("返回")]),i("template",{attrs:{slot:"content"},slot:"content"},[this._v("定位")])],2),i("v-uni-map",{staticStyle:{width:"100%",height:"500px"},attrs:{latitude:this.latitude,longitude:this.longitude,markers:this.marker,scale:this.scale}})],1)},a=[]},6359:function(t,i,e){"use strict";e.r(i);var o=e("66bf"),a=e.n(o);for(var n in o)["default"].indexOf(n)<0&&function(t){e.d(i,t,(function(){return o[t]}))}(n);i["default"]=a.a},"66bf":function(t,i,e){"use strict";(function(t){e("6a54"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o={data:function(){return{NavBarColor:this.NavBarColor,id:0,title:"map",latitude:40.009704,longitude:116.374999,marker:[{id:0,latitude:40.009704,longitude:116.374999,iconPath:"/static/location.png",rotate:0,width:20,height:20,title:"你在哪了",alpha:.5,callout:{content:"北京国炬公司",color:"#ffffff",fontSize:14,borderRadius:2,bgColor:"#00c16f",display:"ALWAYS"}}],scale:16,controls:[{id:1,iconPath:"/static/login3.png",clickable:!0,position:{left:15,top:15,width:50,height:50}}],circles:[{latitude:40.009704,longitude:116.374999,radius:50,fillColor:"#ffffffAA",color:"#55aaffAA",strokeWidth:1}]}},onLoad:function(){this.getLocation()},methods:{getLocation:function(){uni.getLocation({type:"gcj02",success:function(i){t.log("当前位置的经度："+i.longitude),t.log("当前位置的纬度："+i.latitude)},fail:function(i){t.log("当前位置的经度")}})}}};i.default=o}).call(this,e("ba7c")["default"])},d10d:function(t,i,e){"use strict";e.r(i);var o=e("32ea"),a=e("6359");for(var n in a)["default"].indexOf(n)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(n);var l=e("828b"),c=Object(l["a"])(a["default"],o["b"],o["c"],!1,null,"5e683fa4",null,!1,o["a"],void 0);i["default"]=c.exports}}]);