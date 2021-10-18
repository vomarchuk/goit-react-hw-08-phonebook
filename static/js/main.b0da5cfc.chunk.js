(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[1],{12:function(e,t,n){"use strict";var r=n(7),a=n.n(r),c=n(20),s=n(6),o=n(17),i=n.n(o);i.a.defaults.baseURL="https://connections-api.herokuapp.com";var u=function(e){i.a.defaults.headers.common.Authorization="Bearer ".concat(e)},l=function(){i.a.defaults.headers.common.Authorization=""},d=Object(s.b)("/auth/refresh",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c,s,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState(),null!==(c=r.auth.token)){e.next=4;break}return e.abrupt("return",n.rejectedWithValue());case 4:return u(c),e.prev=5,e.next=8,i.a.get("/users/current");case 8:return s=e.sent,o=s.data,e.abrupt("return",o);case 13:throw e.prev=13,e.t0=e.catch(5),e.t0;case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t,n){return e.apply(this,arguments)}}()),j=Object(s.b)("auth/register",function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.post("/users/signup",t);case 3:return n=e.sent,r=n.data,u(r.token),e.abrupt("return",r);case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),b=Object(s.b)("auth/login",function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.post("/users/login",t);case 3:return n=e.sent,r=n.data,u(r.token),e.abrupt("return",r);case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),h={userRegister:j,logIn:b,logOut:Object(s.b)("auth/logout",Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.post("/users/logout");case 3:l(),e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))),fetchCurrentUser:d};t.a=h},18:function(e,t,n){"use strict";var r={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getUserName:function(e){return e.auth.user.name},getIsFechingCurrent:function(e){return e.auth.isFechingCurrent}};t.a=r},24:function(e,t,n){"use strict";var r=n(7),a=n.n(r),c=n(20),s=n(6),o=n(17),i=n.n(o);i.a.defaults.baseURL="https://connections-api.herokuapp.com";var u=Object(s.b)("contacts",Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/contacts");case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))),l=Object(s.b)("contacts/add",function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.post("/contacts",t);case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()),d=Object(s.b)("contact/remove",function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.delete("/contacts/".concat(t));case 3:return e.abrupt("return",t);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()),j={getAllContacts:u,addContact:l,removeContact:d,filter:Object(s.b)("/auth/filter",(function(e){return e}))};t.a=j},49:function(e,t,n){e.exports={container:"Container_container__3RIox"}},58:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var r,a,c=n(0),s=n.n(c),o=n(27),i=n.n(o),u=n(19),l=n(4),d=n(47),j=(n(58),n(59),n(3)),b=n(8),h=n(22),f=n(18),O=n(1),g=["children","redirectTo"],p=function(e){var t=e.children,n=e.redirectTo,r=void 0===n?"/":n,a=Object(h.a)(e,g),c=Object(l.c)(f.a.getIsLoggedIn);return Object(O.jsx)(j.b,Object(b.a)(Object(b.a)({},a),{},{children:c?t:Object(O.jsx)(j.a,{to:r})}))},v=["children","restricted","redirectTo"],m=function(e){var t=e.children,n=e.restricted,r=void 0!==n&&n,a=e.redirectTo,c=void 0===a?"/":a,s=Object(h.a)(e,v),o=Object(l.c)(f.a.getIsLoggedIn)&&r;return Object(O.jsx)(j.b,Object(b.a)(Object(b.a)({},s),{},{children:o?Object(O.jsx)(j.a,{to:c}):t}))},x=n(49),k=n.n(x),w=function(e){var t=e.children;return Object(O.jsx)("div",{className:k.a.container,children:t})},I=function(e){var t=e.children;return Object(O.jsx)("section",{children:Object(O.jsx)(w,{children:t})})},_=n(9),C=n.n(_),y=function(){return Object(O.jsxs)("div",{className:C.a.auth_nav,children:[Object(O.jsx)(u.b,{className:"".concat(C.a.nav_item," "),to:"/register",children:"Register"}),Object(O.jsx)(u.b,{className:"".concat(C.a.nav_item," "),to:"/login",children:"Login"})]})},N=n(12),L=n(86),B=n.p+"static/media/logout.a6eede60.svg",R=function(){var e=Object(l.c)(f.a.getUserName),t=Object(l.b)();return Object(O.jsxs)("div",{className:C.a.user_menu,children:[Object(O.jsxs)("span",{className:C.a.s,children:["Wellcome, ",e]}),Object(O.jsx)(L.a,{className:C.a.logOutBtn,variant:"danger",onClick:function(){return t(N.a.logOut())},type:"button",children:Object(O.jsx)("img",{className:C.a.icon,src:B,width:"20",height:"20",alt:"logout button"})})]})},U=function(){var e=Object(l.c)(f.a.getIsLoggedIn);return Object(O.jsxs)("nav",{className:C.a.navigations,children:[Object(O.jsx)(u.b,{className:C.a.nav_item,to:"/",children:"Home"}),e&&Object(O.jsx)(u.b,{className:C.a.nav_item,to:"/contacts",children:"Contacts"})]})},F=function(){var e=Object(l.c)(f.a.getIsLoggedIn);return Object(O.jsxs)("header",{className:C.a.nav_bar,children:[Object(O.jsx)(U,{}),e?Object(O.jsx)(R,{}):Object(O.jsx)(y,{})]})},T=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,103))})),z=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,106))})),A=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,107))})),S=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(5),n.e(4)]).then(n.bind(null,105))})),P=function(){var e=Object(l.c)(f.a.getIsFechingCurrent),t=Object(l.b)();return Object(c.useEffect)((function(){t(N.a.fetchCurrentUser())}),[t]),!e&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(I,{children:Object(O.jsx)(F,{})}),Object(O.jsx)(c.Suspense,{fallback:Object(O.jsx)("div",{children:"...Loading"}),children:Object(O.jsx)(I,{children:Object(O.jsxs)(j.d,{children:[Object(O.jsx)(m,{exact:!0,path:"/",children:Object(O.jsx)(T,{})}),Object(O.jsx)(m,{path:"/register",restricted:!0,redirectTo:"/contacts",children:Object(O.jsx)(A,{})}),Object(O.jsx)(m,{path:"/login",restricted:!0,redirectTo:"/contacts",children:Object(O.jsx)(z,{})}),Object(O.jsx)(p,{path:"/contacts",redirectTo:"/",children:Object(O.jsx)(S,{})})]})})})]})},E=n(6),J=n(21),W=n(50),G=n.n(W),H=n(5),M=n(24),V=Object(E.c)({name:"contacts",initialState:{items:null,filter:""},extraReducers:(r={},Object(H.a)(r,M.a.getAllContacts.fulfilled,(function(e,t){e.items=t.payload})),Object(H.a)(r,M.a.addContact.fulfilled,(function(e,t){e.items.push(t.payload)})),Object(H.a)(r,M.a.removeContact.fulfilled,(function(e,t){e.items=e.items.filter((function(e){return e.id!==t.payload}))})),Object(H.a)(r,M.a.filter.fulfilled,(function(e,t){e.filter=t.payload})),r)}).reducer,q=Object(E.c)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,error:null,isFechingCurrent:!1},extraReducers:(a={},Object(H.a)(a,N.a.fetchCurrentUser.pending,(function(e,t){e.isFechingCurrent=!0})),Object(H.a)(a,N.a.fetchCurrentUser.fulfilled,(function(e,t){var n=t.payload;e.user=n,e.isLoggedIn=!0,e.isFechingCurrent=!1,e.error=null})),Object(H.a)(a,N.a.fetchCurrentUser.rejected,(function(e,t){var n=t.error;e.isLoggedIn=!1,e.isFechingCurrent=!1,e.error=null===n||void 0===n?void 0:n.message})),Object(H.a)(a,N.a.userRegister.fulfilled,(function(e,t){var n=t.payload;e.user=n.user,e.token=n.token,e.isLoggedIn=!0,e.error=null})),Object(H.a)(a,N.a.userRegister.rejected,(function(e,t){var n=t.error;e.isLoggedIn=!1,e.error=null===n||void 0===n?void 0:n.message})),Object(H.a)(a,N.a.logIn.fulfilled,(function(e,t){var n=t.payload;e.user=n.user,e.token=n.token,e.isLoggedIn=!0,e.error=null})),Object(H.a)(a,N.a.logIn.rejected,(function(e,t){var n=t.error;e.isLoggedIn=!1,e.error=null===n||void 0===n?void 0:n.message})),Object(H.a)(a,N.a.logOut.fulfilled,(function(e,t){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1,e.error=null})),Object(H.a)(a,N.a.logOut.rejected,(function(e,t){var n=t.error;e.error=null===n||void 0===n?void 0:n.message})),a)}).reducer,D={key:"auth",storage:G.a,whitelist:["token"]},K=Object(E.a)({reducer:{auth:Object(J.g)(D,q),contacts:V},middleware:Object(E.d)({serializableCheck:{ignoredActions:[J.a,J.f,J.b,J.c,J.d,J.e]}}),devTools:!1}),Q=Object(J.h)(K);i.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(l.a,{store:K,children:Object(O.jsx)(d.a,{loading:null,persistor:Q,children:Object(O.jsx)(u.a,{children:Object(O.jsx)(P,{})})})})}),document.getElementById("root"))},9:function(e,t,n){e.exports={nav_bar:"NavBar_nav_bar__1hgvk",nav_item:"NavBar_nav_item__38viu",user_menu:"NavBar_user_menu__GfI1r",logOutBtn:"NavBar_logOutBtn__30N8I"}}},[[84,2,3]]]);
//# sourceMappingURL=main.b0da5cfc.chunk.js.map