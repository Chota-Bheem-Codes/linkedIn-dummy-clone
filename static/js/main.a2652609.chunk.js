(this["webpackJsonplinked-in"]=this["webpackJsonplinked-in"]||[]).push([[0],{77:function(e,t,c){},78:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c(2),i=c(25),a=c.n(i),r=(c(77),c(78),c(16)),o=c(39),l=Object(o.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),j=l.actions,d=j.login,u=j.logout,b=function(e){return e.user.user},h=l.reducer,O=c(33),p=O.a.initializeApp({apiKey:"AIzaSyBc5pXccdiGnBk3KBIE85h_E-k2oPhqtbw",authDomain:"spotify-clone-e9554.firebaseapp.com",databaseURL:"https://spotify-clone-e9554.firebaseio.com",projectId:"spotify-clone-e9554",storageBucket:"spotify-clone-e9554.appspot.com",messagingSenderId:"1057907833015",appId:"1:1057907833015:web:3b93325237db31c31b7532",measurementId:"G-D9N1X62S0B"}).firestore(),m=O.a.auth(),x=c(27),v=c(9),f=(c(84),c(18)),g=(c(85),c(56)),N=c.n(g),_=c(57),y=c.n(_),w=c(58),I=c.n(w),S=c(59),k=c.n(S),C=c(60),L=c.n(C),R=(c(86),function(e){var t=e.Icon,c=e.title,n=e.color;return Object(s.jsxs)("div",{className:"inputOption",children:[Object(s.jsx)(t,{style:{color:n}}),Object(s.jsx)("h4",{children:c})]})}),E=c(111),U=c(52),B=c.n(U),P=c(53),D=c.n(P),A=c(54),W=c.n(A),F=c(55),M=c.n(F),J=(c(87),Object(n.forwardRef)((function(e,t){var c=e.name,n=e.description,i=e.message,a=e.photoUrl;return Object(s.jsxs)("div",{ref:t,className:"post",children:[Object(s.jsxs)("div",{className:"post__header",children:[Object(s.jsx)(E.a,{src:a,children:c[0]}),Object(s.jsxs)("div",{className:"post__info",children:[Object(s.jsx)("h2",{children:c}),Object(s.jsx)("p",{children:n})]})]}),Object(s.jsx)("div",{className:"post__body",children:Object(s.jsx)("p",{children:i})}),Object(s.jsxs)("div",{className:"post__buttons",children:[Object(s.jsx)(R,{Icon:B.a,title:"Like",color:"gray"}),Object(s.jsx)(R,{Icon:D.a,title:"Comment",color:"gray"}),Object(s.jsx)(R,{Icon:W.a,title:"Share",color:"gray"}),Object(s.jsx)(R,{Icon:M.a,title:"Send",color:"gray"})]})]})}))),V=c(61),z=function(){var e=Object(r.c)(b),t=Object(n.useState)([]),c=Object(f.a)(t,2),i=c[0],a=c[1],o=Object(n.useState)(""),l=Object(f.a)(o,2),j=l[0],d=l[1];Object(n.useEffect)((function(){p.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){return a(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]);return Object(s.jsxs)("div",{className:"feed",children:[Object(s.jsxs)("div",{className:"feed__inputContainer",children:[Object(s.jsxs)("div",{className:"feed__input",children:[Object(s.jsx)(N.a,{}),Object(s.jsxs)("form",{children:[Object(s.jsx)("input",{type:"text",value:j,onChange:function(e){return d(e.target.value)}}),Object(s.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),p.collection("posts").add({name:e.displayName,description:e.email,message:j,photoUrl:e.photoURL||"",timestamp:O.a.firestore.FieldValue.serverTimestamp()}),d("")},children:"Send"})]})]}),Object(s.jsxs)("div",{className:"feed__inputOptions",children:[Object(s.jsx)(R,{Icon:y.a,title:"Photo",color:"#70B5F9"}),Object(s.jsx)(R,{Icon:I.a,title:"Video",color:"#E7A33E"}),Object(s.jsx)(R,{Icon:k.a,title:"Event",color:"#C0CBCD"}),Object(s.jsx)(R,{Icon:L.a,title:"Write Article",color:"#7FC15E"})]})]}),Object(s.jsx)(V.a,{children:i.map((function(e){var t=e.id,c=e.data,n=c.name,i=c.description,a=c.message,r=c.photoUrl;return Object(s.jsx)(J,{name:n,description:i,message:a,photoUrl:r},t)}))})]})},G=(c(89),c(62)),H=c.n(G),K=c(63),T=c.n(K),X=c(64),q=c.n(X),$=c(65),Q=c.n($),Y=c(66),Z=c.n(Y),ee=c(67),te=c.n(ee),ce=(c(90),function(e){var t=e.alt,c=e.avatar,n=e.Icon,i=e.title,a=e.onClick;return Object(s.jsxs)("div",{onClick:a,className:"headerOption",children:[n&&Object(s.jsx)(n,{className:"headerOption__icon"}),t&&Object(s.jsx)(E.a,{className:"headerOption__icon",src:c,children:t}),Object(s.jsx)("h3",{className:"headerOption__title",children:i})]})}),se=function(){var e=Object(r.c)(b),t=Object(r.b)();return Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("div",{className:"header__left",children:Object(s.jsx)("img",{src:"https://www.flaticon.com/svg/static/icons/svg/174/174857.svg",alt:""})}),Object(s.jsxs)("div",{className:"header__search",children:[Object(s.jsx)(H.a,{}),Object(s.jsx)("input",{placeholder:"Search",type:"text"})]}),Object(s.jsxs)("div",{className:"header__right",children:[Object(s.jsx)(ce,{Icon:T.a,title:"Home"}),Object(s.jsx)(ce,{Icon:q.a,title:"My Network"}),Object(s.jsx)(ce,{Icon:Q.a,title:"Jobs"}),Object(s.jsx)(ce,{Icon:Z.a,title:"Messaging"}),Object(s.jsx)(ce,{Icon:te.a,title:"Notifications"}),Object(s.jsx)(ce,{avatar:null===e||void 0===e?void 0:e.photoURL,alt:null===e||void 0===e?void 0:e.email[0],title:"me",onClick:function(){t(u()),m.signOut()}})]})]})},ne=(c(91),c(69)),ie=c.n(ne),ae=c(68),re=c.n(ae),oe=function(){var e=function(e,t){return Object(s.jsxs)("div",{className:"widgets__article",children:[Object(s.jsx)("div",{className:"widgets__articleLeft",children:Object(s.jsx)(re.a,{})}),Object(s.jsxs)("div",{className:"widgets__articleRight",children:[Object(s.jsx)("h4",{children:e}),Object(s.jsx)("p",{children:t})]})]})};return Object(s.jsxs)("div",{className:"widgets",children:[Object(s.jsxs)("div",{className:"widgets__header",children:[Object(s.jsx)("h2",{children:"LinkedIn News"}),Object(s.jsx)(ie.a,{})]}),e("Dummy LinkedIn Clone","Made By Mayank"),e("Crash 2021","Stock Market Bubble Rissing"),e("Bye Bye 2020","Happy new year 2021")]})},le=(c(92),function(){var e,t,c,n=Object(r.c)(b),i="",a="";-1===(null===n||void 0===n||null===(e=n.displayName)||void 0===e?void 0:e.search(" "))?i=null===n||void 0===n?void 0:n.displayName[0]:(i=null===n||void 0===n||null===(t=n.displayName)||void 0===t?void 0:t.split(" ")[0][0],a=null===n||void 0===n||null===(c=n.displayName)||void 0===c?void 0:c.split(" ")[1][0]);var o=function(e){return Object(s.jsxs)("div",{className:"sidebar__recentItem",children:[Object(s.jsx)("span",{className:"sidebar__hash",children:"#"}),Object(s.jsx)("p",{children:e})]})};return Object(s.jsxs)("div",{className:"sidebar",children:[Object(s.jsxs)("div",{className:"sidebar__top",children:[Object(s.jsx)("img",{src:"https://source.unsplash.com/random/200",className:"",alt:""}),Object(s.jsxs)(E.a,{src:null===n||void 0===n?void 0:n.photoURL,className:"sidebar__avatar",children:[i,a]}),Object(s.jsx)("h2",{children:null===n||void 0===n?void 0:n.displayName}),Object(s.jsx)("h4",{children:null===n||void 0===n?void 0:n.email})]}),Object(s.jsxs)("div",{className:"sidebar__stats",children:[Object(s.jsxs)("div",{className:"sidebar__stat",children:[Object(s.jsx)("p",{children:"Who viewed you"}),Object(s.jsx)("p",{className:"sidebar__statNumber",children:"2,543"})]}),Object(s.jsxs)("div",{className:"sidebar__stat",children:[Object(s.jsx)("p",{children:"Views on post"}),Object(s.jsx)("p",{className:"sidebar__statNumber",children:"2,448"})]})]}),Object(s.jsxs)("div",{className:"sidebar__bottom",children:[Object(s.jsx)("p",{children:"Recent"}),o("reactjs"),o("java"),o("javaScript")]})]})}),je=function(){return Object(s.jsxs)("div",{className:"homeScreen",children:[Object(s.jsx)(se,{}),Object(s.jsxs)("div",{className:"homeScreen__body",children:[Object(s.jsx)(le,{}),Object(s.jsx)(z,{}),Object(s.jsx)(oe,{})]})]})},de=(c(93),function(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(""),o=Object(f.a)(a,2),l=o[0],j=o[1],u=Object(r.b)();return Object(s.jsxs)("div",{className:"login",children:[Object(s.jsx)("img",{src:"https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011%E2%80%932019.png",alt:""}),Object(s.jsxs)("form",{children:[Object(s.jsx)("input",{value:c,placeholder:"Email",type:"email",onChange:function(e){return i(e.target.value)}}),Object(s.jsx)("input",{value:l,placeholder:"Password",type:"password",onChange:function(e){return j(e.target.value)}}),Object(s.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),m.signInWithEmailAndPassword(c,l).then((function(e){u(d({email:e.user.email,uid:e.user.uid,displayName:e.user.displayName,photoURL:e.user.profileURL}))})).catch((function(e){return alert(e)}))},children:"Sign In"})]}),Object(s.jsxs)("p",{children:["Not a member?",Object(s.jsx)(x.b,{to:"/register",children:Object(s.jsx)("span",{className:"login__register",children:" Register Now "})})]})]})}),ue=function(){return Object(s.jsx)(de,{})},be=c(70),he=c.n(be),Oe=(c(95),function(){var e=Object(n.useState)(!0),t=Object(f.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){setTimeout((function(){return i(!1)}),1e3)}),[]),Object(s.jsx)("div",{className:"loader",children:c?Object(s.jsx)(he.a,{type:"balls",color:"lightblue",height:667,width:375}):Object(s.jsx)(v.a,{to:"/register"})})}),pe=(c(96),function(){var e=Object(r.b)(),t=Object(n.useState)(""),c=Object(f.a)(t,2),i=c[0],a=c[1],o=Object(n.useState)(""),l=Object(f.a)(o,2),j=l[0],u=l[1],b=Object(n.useState)(""),h=Object(f.a)(b,2),O=h[0],p=h[1],v=Object(n.useState)(""),g=Object(f.a)(v,2),N=g[0],_=g[1];return Object(s.jsxs)("div",{className:"register",children:[Object(s.jsxs)("div",{className:"register__header",children:[Object(s.jsx)("img",{src:"https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011%E2%80%932019.png",alt:""}),Object(s.jsx)(x.b,{to:"/login",children:Object(s.jsx)("button",{children:"Sign In"})})]}),Object(s.jsxs)("div",{className:"register__body",children:[Object(s.jsxs)("form",{children:[Object(s.jsxs)("h1",{children:["Welcome to your",Object(s.jsx)("br",{}),"professional community"]}),Object(s.jsx)("input",{vlaue:i,placeholder:"Full Name",type:"text",onChange:function(e){return a(e.target.value)}}),Object(s.jsx)("input",{value:N,placeholder:"Display Picture URL",type:"text",onChange:function(e){return _(e.target.value)}}),Object(s.jsx)("input",{value:j,placeholder:"Email",type:"email",onChange:function(e){return u(e.target.value)}}),Object(s.jsx)("input",{value:O,placeholder:"Password",type:"password",onChange:function(e){return p(e.target.value)}}),Object(s.jsx)("button",{type:"submit",onClick:function(t){if(t.preventDefault(),!i)return alert("Please enter a full name");m.createUserWithEmailAndPassword(j,O).then((function(t){t.user.updateProfile({displayName:i,photoURL:N}).then((function(){return e(d({email:t.user.email,uid:t.user.uid,displayName:i,photoURL:N}))}))})).catch((function(e){return alert(e)}))},children:"Register"})]}),Object(s.jsx)("img",{src:"register-front.svg",alt:""})]})]})}),me=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:"PageNotFound"})})};var xe=function(){var e=Object(r.c)(b),t=Object(r.b)();return Object(n.useEffect)((function(){m.onAuthStateChanged((function(e){t(e?d({email:e.email,uid:e.uid,displayName:e.displayName,photoURL:e.photoURL}):u())}))}),[]),Object(s.jsx)(x.a,{children:Object(s.jsxs)(v.d,{children:[Object(s.jsx)(v.b,{path:"/register",render:function(){return e?Object(s.jsx)(v.a,{to:"/home"}):Object(s.jsx)(pe,{})}}),Object(s.jsx)(v.b,{path:"/login",render:function(){return e?Object(s.jsx)(v.a,{to:"/home"}):Object(s.jsx)(ue,{})}}),Object(s.jsx)(v.b,{path:"/home",render:function(){return e?Object(s.jsx)(je,{}):Object(s.jsx)(v.a,{to:"/login"})}}),Object(s.jsx)(v.b,{path:"/",exact:!0,render:function(){return e?Object(s.jsx)(v.a,{to:"/home"}):Object(s.jsx)(Oe,{})}}),Object(s.jsx)(v.b,{path:"*",component:me})]})})},ve=Object(o.a)({reducer:{user:h}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(s.jsx)(r.a,{store:ve,children:Object(s.jsx)(xe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[97,1,2]]]);
//# sourceMappingURL=main.a2652609.chunk.js.map