webpackJsonp([21],{637:function(t,e,n){"use strict";function a(t){n(818)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(750),i=n(820),r=n(244),s=a,c=r(o.a,i.a,!1,s,"data-v-11a8ce8d",null);e.default=c.exports},727:function(t,e,n){t.exports=n.p+"img/qweqwe.5494c77.jpg"},750:function(t,e,n){"use strict";var a=n(247),o=n.n(a),i=n(246);e.a={name:"name",components:{QInput:i.h,QBtn:i.c,QField:i.e},data:function(){return{info:{uname:null,password:null},err:{uname:null,password:null}}},methods:{login:function(t,e){var n=this;this.checkinfo()?this.call("/users/login",this.info,function(t){e(),t.state?(localStorage.setItem("userinfo",o()(t.data[0])),n.$router.push("/Main")):i.a.create({title:t.msg,buttons:[{label:"好的",handler:function(){}}]})}):e()},inpfuc:function(t){this.info[t]=null,this.err[t]=null},checkinfo:function(){var t=!0;return this.info.uname||(this.err.uname="用户名不能为空!",t=!1),this.info.password||(this.err.password="密码不能为空!",t=!1),t},forgot:function(){i.a.create({title:"联系管理员",message:"186-0513-4284",buttons:[{label:"好的",handler:function(){}}]})}}}},818:function(t,e,n){var a=n(819);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(613)("69f309f0",a,!0,{})},819:function(t,e,n){var a=n(630);e=t.exports=n(612)(!1),e.push([t.i,".footer[data-v-11a8ce8d]{position:fixed;left:0;bottom:0;width:100%;height:40px;color:#fff;text-align:center;line-height:40px;font-size:12px}.back[data-v-11a8ce8d]{width:100vw;height:100vh;background:url("+a(n(727))+") no-repeat;background-size:cover}.subtitle[data-v-11a8ce8d]{font-size:13px;color:#888;text-align:center}.title[data-v-11a8ce8d]{font-size:25px;font-weight:600;color:#555;text-align:center}.content[data-v-11a8ce8d]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);padding:20px;box-shadow:0 1px 20px #888;width:320px;border-radius:2px;background:hsla(0,0%,100%,.3)}.qbtn[data-v-11a8ce8d]{margin-top:20px}.forgotbtn[data-v-11a8ce8d]:hover{text-decoration:underline}.forgotbtn[data-v-11a8ce8d]{font-size:13px;color:#888;float:right}.register[data-v-11a8ce8d]:hover{text-decoration:underline}.register[data-v-11a8ce8d]{text-align:center;width:100%}",""])},820:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"back"},[n("div",{staticClass:"content"},[n("div",{staticClass:"title"},[t._v("VACT")]),t._v(" "),n("div",{staticClass:"subtitle"},[t._v("Visualization System")]),t._v(" "),n("q-field",{attrs:{icon:"account_circle",error:!!t.err.uname,"error-label":t.err.uname}},[n("q-input",{attrs:{placeholder:"用户名"},on:{click:function(e){t.inpfuc("uname")}},model:{value:t.info.uname,callback:function(e){t.$set(t.info,"uname",e)},expression:"info.uname"}})],1),t._v(" "),n("q-field",{attrs:{icon:"create",error:!!t.err.password,"error-label":t.err.password}},[n("q-input",{attrs:{type:"password",placeholder:"密码"},on:{click:function(e){t.inpfuc("password")}},model:{value:t.info.password,callback:function(e){t.$set(t.info,"password",e)},expression:"info.password"}})],1),t._v(" "),n("a",{staticClass:"forgotbtn",on:{click:t.forgot}},[t._v("忘记密码?»")]),t._v(" "),n("q-btn",{staticClass:"full-width qbtn",attrs:{loader:"",color:"secondary"},on:{click:t.login}},[t._v("登录")]),t._v(" "),n("div",{staticStyle:{"text-align":"center","margin-top":"10px","font-size":"13px"}},[n("a",{staticClass:"register",on:{click:function(e){t.$router.push("/register")}}},[t._v("新用户?点击这里注册 »")])])],1),t._v(" "),n("div",{staticClass:"footer"},[t._v("© Mobius Vision 2016-2017. All rights reserved.")])])},o=[],i={render:a,staticRenderFns:o};e.a=i}});