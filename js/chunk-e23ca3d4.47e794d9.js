(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e23ca3d4"],{"5e5e":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t._self._c;return n("div",[t.list.length?t._e():n("van-empty",{attrs:{description:"空空入也,去首页买点吧"}}),t._l(t.list,(function(e){return n("van-swipe-cell",{key:e.id,scopedSlots:t._u([{key:"right",fn:function(){return[n("van-button",{staticClass:"delete-button",attrs:{square:"",text:"删除",type:"danger"},on:{click:function(n){return t.del(e.id)}}})]},proxy:!0}],null,!0)},[n("van-card",{staticClass:"active",attrs:{tag:"已选",price:e.pri,desc:"优质水果",title:e.name,thumb:e.src},on:{click:function(n){return t.clickHandle(e.id)}},scopedSlots:t._u([{key:"tags",fn:function(){return[n("van-tag",{attrs:{plain:"",type:"danger"}},[t._v("自营")]),n("van-tag",{attrs:{plain:"",type:"danger"}},[t._v("生鲜")])]},proxy:!0},{key:"footer",fn:function(){return[n("van-button",{attrs:{size:"mini"},on:{click:function(n){return t.sub(e.id)}}},[t._v("-")]),n("van-button",{attrs:{size:"mini",disabled:""}},[t._v(t._s(e.num))]),n("van-button",{attrs:{size:"mini"},on:{click:function(n){return t.add(e.id)}}},[t._v("+")])]},proxy:!0}],null,!0)})],1)})),n("van-tabbar",{staticClass:"tab"},[n("span",[t._v("已选: "+t._s(t.totalNum))]),n("div",[n("span",[t._v("￥"+t._s(t.total))]),n("van-button",{attrs:{type:"danger",size:"small",disabled:!t.list.length},on:{click:t.go}},[t._v("立即下单")])],1)])],2)},s=[],a=e("2f62"),r={computed:{...Object(a["d"])("shoppingCar",["list"]),...Object(a["c"])("shoppingCar",["total","totalNum"])},methods:{clickHandle(t){},sub(t){this.$store.commit("shoppingCar/sub",t)},add(t){this.$store.commit("shoppingCar/add",t)},del(t){this.$store.commit("shoppingCar/del",t)},go(){this.$router.push({name:"confirm"})}}},o=r,c=(e("b65e"),e("2877")),u=Object(c["a"])(o,i,s,!1,null,"5280ebb4",null);n["default"]=u.exports},b65e:function(t,n,e){"use strict";e("fd1d")},fd1d:function(t,n,e){}}]);
//# sourceMappingURL=chunk-e23ca3d4.47e794d9.js.map