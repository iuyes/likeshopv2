(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54bcbe44"],{2909:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var a=i("6b75");function s(t){if(Array.isArray(t))return Object(a["a"])(t)}i("a4d3"),i("e01a"),i("d28b"),i("a630"),i("d3b7"),i("3ca3"),i("ddb0");function n(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var r=i("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return s(t)||n(t)||Object(r["a"])(t)||o()}},4662:function(t,e,i){"use strict";i("68ef"),i("a71a"),i("9d70"),i("3743"),i("09fe"),i("4d75"),i("e3b3"),i("8270"),i("786d"),i("504b")},"93b0":function(t,e,i){},a070:function(t,e,i){t.exports=i.p+"img/goods_null.d774c28d.png"},a83d:function(t,e,i){"use strict";i("93b0")},d2e9:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-evaluate"},[t.isEmpty?t._e():a("div",{staticClass:"header bg-white"},[a("div",{staticClass:"title xs row"},[a("div",{staticClass:"lighter mr10"},[t._v("商品好评率")]),a("div",{staticClass:"primary"},[t._v(t._s(this.percent))])]),a("div",{staticClass:"tab row"},[t._l(t.categoryList,(function(e,i){return[e.count?a("div",{key:i,class:["tab-item","xs","mr5","br60","mb10",t.type==e.id?"bg-primary white":"bg-gray"],on:{click:function(i){return t.onChangType(e.id)}}},[t._v(t._s(e.name)+"("+t._s(e.count)+")")]):t._e()]}))],2)]),a("div",{staticClass:"main"},[t.isEmpty&&t.finished?a("div",{staticClass:"column-center",staticStyle:{"padding-top":"100px"}},[a("img",{staticClass:"img-null",attrs:{src:i("a070")}}),a("span",{staticClass:"lighter"},[t._v("暂无评价")])]):a("van-list",{attrs:{finished:t.finished,finishedText:"没有更多了",error:t.error},on:{load:t.$getCommentList},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[a("div",{staticClass:"evaluation-list bg-white"},t._l(t.commentList,(function(e,i){return a("div",{key:i,staticClass:"evaluation-item"},[a("div",{staticClass:"user-info row"},[a("img",{staticClass:"avatar mr10",attrs:{src:e.avatar}}),a("div",{staticClass:"user-name sm mr10"},[t._v(t._s(e.nickname))]),a("van-rate",{attrs:{size:"16px",color:t.primaryColor,readonly:"",value:e.goods_comment}})],1),a("div",{staticClass:"muted xs mt10 row"},[a("div",{staticClass:"mr10"},[t._v(t._s(e.create_time))]),a("div",[t._v(t._s(e.spec_value_str))])]),e.comment?a("div",{staticClass:"dec mt10",staticStyle:{"word-wrap":"break-word"}},[t._v(t._s(e.comment))]):t._e(),e.image.length?a("div",{staticClass:"img mt10 row",staticStyle:{"flex-wrap":"wrap"}},t._l(e.image,(function(i,s){return a("div",{key:s,staticClass:"img-item mr10 mb10",on:{click:function(i){return t.previewImg(s,e.image)}}},[a("van-image",{staticClass:"goods-img",attrs:{width:"2.13333rem",fit:"cover",height:"2.13333rem","lazy-load":"",src:i}})],1)})),0):t._e(),e.reply?a("div",{staticClass:"seller-recall-container bg-gray mt10"},[a("div",{staticClass:"lighter nr",staticStyle:{"word-wrap":"break-word"}},[t._v(" 商家回复："),a("span",{staticClass:"normal two-txt-cut"},[t._v(t._s(e.reply))])])]):t._e()])})),0)])],1)])},s=[],n=(i("d3b7"),i("4662"),i("28a2")),r=i("2909"),o=(i("96cf"),i("1da1")),c=i("73f5"),l={name:"userEvaluate",data:function(){return{commentList:[],categoryList:[],percent:"",isEmpty:!0,type:"",loading:!0,finished:!1,error:!1,page:1}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.id=t.$route.query.id,e.next=3,t.$getCommentCategory();case 3:t.$getCommentList();case 4:case"end":return e.stop()}}),e)})))()},methods:{onChangType:function(t){var e=this,i=this.type;t!=i&&(this.type=t,this.page=1,this.commentList=[],this.finished=!1,this.$nextTick((function(){return e.$getCommentList()})))},$getCommentCategory:function(){var t=this;return new Promise((function(e){Object(c["j"])(t.id).then((function(i){var a=i.code,s=i.data,n=s.comment,r=s.percent;1==a&&(t.categoryList=n,t.percent=r,t.type=n[0].id,t.$nextTick((function(){return e()})))}))}))},$getCommentList:function(){var t=this,e=this.page,i=this.type,a=this.commentList,s=this.finished;this.loading=!0,s||Object(c["k"])({id:i,goods_id:this.id,page_no:e}).then((function(i){if(1==i.code){t.loading=!1;var s=i.data,n=s.list,o=s.more;a.push.apply(a,Object(r["a"])(n)),t.commentList=a,t.page=++e,console.log(t.commentList),t.$nextTick((function(){o||(t.finished=!0),a.length<=0?t.isEmpty=!0:t.isEmpty=!1}))}else t.error=!0}))},previewImg:function(t,e){Object(n["a"])({images:e,startPosition:t})}}},m=l,d=(i("a83d"),i("2877")),u=Object(d["a"])(m,a,s,!1,null,"6feea286",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-54bcbe44.0439bbf5.js.map