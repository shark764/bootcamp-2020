(this["webpackJsonpbootcamp-2020"]=this["webpackJsonpbootcamp-2020"]||[]).push([[0],{120:function(e,t,c){},142:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(0),r=c.n(a),o=c(39),s=c.n(o),i=c(18),l=(c(120),c(12)),u=c(56),b=c(13),j=Object(a.createContext)();var d=function(e){var t=Object(a.useState)([]),c=Object(b.a)(t,2),r=c[0],o=c[1],s=Object(a.useState)({}),i=Object(b.a)(s,2),l=i[0],u=i[1];return Object(n.jsx)(j.Provider,{value:{users:[r,o],current:[l,u]},children:e.children})},p=c(14),O=c(21),f=c.n(O),h=c(53),x=c(33),m=c(25),g=c.n(m),v=c(157),y=c(190),k=c(191),w=c(196),C=c(192),S=c(195),A=c(188),F=c(163);var E=function(e){var t=e.onSubmit,c=e.currentValues,a=Object(p.a)(Object(p.a)({},c),{},{status:"Active"===c.status}),o=r.a.useState(a),s=Object(b.a)(o,2),i=s[0],l=s[1];return Object(n.jsxs)(v.a,{value:i,onChange:function(e,t){var c=t.touched;console.log("Change",e,c),l(e)},onReset:function(){return l(a)},onSubmit:function(e){console.log("Submit",e.value,e.touched),t(e.value)},children:[Object(n.jsx)(y.a,{label:"Name",name:"name",children:Object(n.jsx)(k.a,{name:"name"})}),Object(n.jsx)(y.a,{label:"Email",name:"email",required:!0,children:Object(n.jsx)(w.a,{name:"email",mask:[{regexp:/^[\w\-_.]+$/,placeholder:"example"},{fixed:"@"},{regexp:/^[\w]+$/,placeholder:"my"},{fixed:"."},{regexp:/^[\w]+$/,placeholder:"com"}],icon:Object(n.jsx)(F.a,{})})}),Object(n.jsx)(y.a,{name:"gender",children:Object(n.jsx)(C.a,{name:"gender",options:["Male","Female"]})}),Object(n.jsx)(y.a,{name:"status",children:Object(n.jsx)(S.a,{name:"status",label:"Active?"})}),Object(n.jsxs)(u.a,{direction:"row",justify:"between",margin:{top:"medium"},children:[Object(n.jsx)(A.a,{label:"Cancel"}),Object(n.jsx)(A.a,{type:"reset",label:"Reset"}),Object(n.jsx)(A.a,{type:"submit",label:"Submit",primary:!0})]})]})},T="6cabfd3fc1aa17546fbfac4e0796907906638b74fe780efebf1eb803baa1e31c";var U=function(){var e=Object(a.useContext)(j),t=Object(b.a)(e.users,2)[1],c=Object(b.a)(e.current,1)[0],r=!c.id,o=function(){var e=Object(x.a)(f.a.mark((function e(c){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("https://gorest.co.in/public-api/users",c,{headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(T)}});case 2:n=e.sent,console.log("result POST",n.data.data),t((function(e){return[].concat(Object(h.a)(e),[n.data.data])}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=Object(p.a)(Object(p.a)({},{data:1,code:2}),{res:"hola",code:200});console.log({merged:s});var i=function(){var e=Object(x.a)(f.a.mark((function e(n){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.put("https://gorest.co.in/public-api/users/".concat(c.id),n,{headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(T)}});case 2:a=e.sent,console.log("result PUT",a.data.data),t((function(e){return e.map((function(e){return e.id===a.data.data.id?Object(p.a)(Object(p.a)({},e),a.data.data):e}))}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)(u.a,{pad:"medium",elevation:"medium",gap:"small",width:"large",children:Object(n.jsx)(E,{onSubmit:function(e){var t=Object(p.a)(Object(p.a)({},e),{},{status:e.status?"Active":"Inactive"});console.log({values:e,payload:t,isAddMode:r}),r?o(t):i(t)},currentValues:c},c.id)})},D=c(171),B=c(172),L=c(183),I=c(194),P=c(164),N=c(165),R=c(166),V=c(167),z=c(168),H=c(169),M=c(170);var G=function(e){var t=e.users,c=e.setCurrent,a=e.deleteUser;return Object(n.jsx)(L.a,{columns:[{property:"id",primary:!0,header:Object(n.jsx)(I.a,{children:"Id"})},{property:"name",header:Object(n.jsx)(I.a,{children:"Name"})},{property:"email",header:Object(n.jsx)(I.a,{children:"Email"})},{property:"gender",header:Object(n.jsx)(I.a,{children:"Gender"}),render:function(e){return"Male"===e.gender?Object(n.jsx)(P.a,{color:"brand"}):Object(n.jsx)(N.a,{color:"accent-2"})}},{property:"status",header:Object(n.jsx)(I.a,{children:"Status"}),render:function(e){return"Active"===e.status?Object(n.jsx)(R.a,{color:"brand"}):Object(n.jsx)(V.a,{color:"accent-1"})}},{property:"actions",header:Object(n.jsx)(z.a,{}),render:function(e){return Object(n.jsxs)(u.a,{direction:"row",children:[Object(n.jsx)(A.a,{type:"button",onClick:function(){return c(e)},icon:Object(n.jsx)(H.a,{color:"brand"}),plain:!0}),Object(n.jsx)(A.a,{type:"button",onClick:function(){return a(e.id)},icon:Object(n.jsx)(M.a,{color:"accent-2"}),plain:!0})]})}}],data:t})},$="6cabfd3fc1aa17546fbfac4e0796907906638b74fe780efebf1eb803baa1e31c";var q={light:{global:{colors:{brand:"#8bcaca","accent-1":"#fea889","accent-2":"#d4f4ec","accent-3":"#ffd8c5"}}},dark:{global:{colors:{brand:"#121212","accent-1":"#3700b3","accent-2":"#03dac5","accent-3":"#cf6679"}}},awsmcolor:{global:{colors:{brand:"#25424c","accent-1":"#fb770d","accent-2":"#ffa45b","accent-3":"#ffebdb"}}},fabulous:{global:{colors:{brand:"#801336","accent-1":"#ee4540","accent-2":"#c72c41","accent-3":"#510a32"}}},monokai:{global:{colors:{brand:"#272822","accent-1":"#f92672","accent-2":"#66d9ef","accent-3":"#fd971f"}}},firefly:{global:{colors:{brand:"#1e2328","accent-1":"#f5b301","accent-2":"#3b3f46","accent-3":"#fed053"}}},"warn-and-bold":{global:{colors:{brand:"#000000","accent-1":"#062f4f","accent-2":"#882601","accent-3":"#813772"}}},elegant:{global:{colors:{brand:"#0b3c5d","accent-1":"#328cc1","accent-2":"#d9b310","accent-3":"#1d2731"}}},vibrant:{global:{colors:{brand:"#000000","accent-1":"#ec576b","accent-2":"#4ec5c1","accent-3":"#e5e338"}}},natural:{global:{colors:{brand:"#8d8741","accent-1":"#659dbd","accent-2":"#daad86","accent-3":"#fbeec1"}}},"cool-and-fresh":{global:{colors:{brand:"#05386b","accent-1":"#379683","accent-2":"#5cdb95","accent-3":"#edf5e1"}}},audacious:{global:{colors:{brand:"#fc4445","accent-1":"#3feee6","accent-2":"#55bcc9","accent-3":"#cafafe"}}},contemporary:{global:{colors:{brand:"#1a1a1d","accent-1":"#950740","accent-2":"#c3073f","accent-3":"#6f2232"}}},sleek:{global:{colors:{brand:"#0f292f","accent-1":"#501f3a","accent-2":"#cb2d6f","accent-3":"#14a098"}}},intrepid:{global:{colors:{brand:"#314455","accent-1":"#c96567","accent-2":"#9e5a63","accent-3":"#97aabd"}}},effective:{global:{colors:{brand:"#faed26","accent-1":"#46344e","accent-2":"#5a5560","accent-3":"#9b786f"}}}};var J=function(){var e=Object(a.useContext)(j),t=Object(b.a)(e.users,2),c=t[0],r=t[1],o=Object(b.a)(e.current,2)[1],s=Object(a.useState)(65),i=Object(b.a)(s,2),l=i[0],d=i[1],p=Object(a.useCallback)(Object(x.a)(f.a.mark((function e(){var t,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://gorest.co.in/public-api/users?page=".concat(l));case 2:t=e.sent,c=t.data,console.log({data:c}),r(c.data);case 6:case"end":return e.stop()}}),e)}))),[l,r]);Object(a.useEffect)((function(){p()}),[p]);var O=function(){var e=Object(x.a)(f.a.mark((function e(t){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.delete("https://gorest.co.in/public-api/users/".concat(t),{headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat($)}});case 2:c=e.sent,console.log("result DELETE",c),r((function(e){return e.filter((function(e){return e.id!==t}))}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(u.a,{pad:"medium",elevation:"medium",fill:!0,gap:"small",children:[Object(n.jsxs)(u.a,{direction:"row",gap:"medium",children:[Object(n.jsx)(k.a,{type:"number",value:l,onChange:function(e){return d(parseInt(e.target.value,10))},icon:Object(n.jsx)(D.a,{})}),Object(n.jsx)(A.a,{type:"button",onClick:function(){return o({})},label:"Add",icon:Object(n.jsx)(B.a,{color:"brand"}),color:"accent-1"})]}),Object(n.jsx)(G,{users:c,setCurrent:o,deleteUser:O})]})};var Q=function(){return Object(n.jsx)(d,{children:Object(n.jsxs)(u.a,{direction:"row",pad:"medium",gap:"medium",children:[Object(n.jsx)(J,{}),Object(n.jsx)(U,{})]})})},W=c(40),K=c(1);function X(){var e=Object(W.a)(["\n      border: 8px solid salmon;\n      font-size: 34px;\n\n      &:hover {\n        color: lightsalmon;\n        background-color: pink;\n      }\n    "]);return X=function(){return e},e}function Y(){var e=Object(W.a)(["\n      border: 4px solid lightgreen;\n      font-size: 29px;\n\n      &:hover {\n        color: pink;\n        background-color: cyan;\n      }\n    "]);return Y=function(){return e},e}function _(){var e=Object(W.a)(["\n  color: white;\n  background-color: ",";\n\n  &:hover {\n    color: yellow;\n    background-color: orange;\n  }\n\n  ",";\n\n  ","\n"]);return _=function(){return e},e}var Z=K.default.button(_(),(function(e){return"primary"===e.btnType?"blue":"gray"}),(function(e){return"primary"===e.btnType&&Object(K.css)(Y())}),(function(e){return"secondary"===e.btnType&&Object(K.css)(X())}));function ee(){var e=Object(W.a)(["\n    background-color: transparent;\n    font-family: arial;\n    border-radius: 8px;\n  "]);return ee=function(){return e},e}function te(e){return console.log("props",e),Object(n.jsx)("p",{style:{color:e.color,backgroundColor:e.bgColor},children:e.text})}function ce(e){return Object(n.jsx)("p",{children:"Hey!!"})}function ne(e){return console.log("wrapper props",e),Object(n.jsxs)("div",{style:e.styles,children:[Object(n.jsx)("p",{children:"Componentes!!!!!"}),"black"!==e.styles.backgroundColor&&e.children]})}var ae=function(e){var t=Object(K.default)(Z)(ee());return Object(n.jsxs)("div",{className:"examplex",children:[Object(n.jsx)(t,{children:"Hola"}),Object(n.jsxs)(ne,{styles:{backgroundColor:"green"},children:[Object(n.jsx)(te,{color:"red",bgColor:"yellow",text:"Hola amigos"}),Object(n.jsx)(ce,{})]})]})};var re=function(e){var t=Object(a.useState)(!0),c=Object(b.a)(t,2),r=c[0],o=c[1],s=Object(i.d)((function(e){return e.example.counter}));return Object(n.jsxs)("div",{children:[r&&Object(n.jsx)("span",{children:"A Es Verdadera"}),!r&&Object(n.jsx)("span",{children:"A Es Falsa"}),e.value?Object(n.jsx)("h1",{children:"It's true"}):Object(n.jsx)("h3",{children:"It's false"}),Object(n.jsx)("button",{type:"button",onClick:function(e){return o(!0)},children:"V"}),Object(n.jsx)("button",{type:"button",onClick:function(e){return o(!1)},children:"F"}),Object(n.jsx)("button",{type:"button",onClick:function(t){return e.setValue((function(e){return!e}))},children:"Shared"}),Object(n.jsxs)(I.a,{color:"accent-1",children:["El numero es ",s]})]})},oe=c(104),se=c(105),ie=c(109),le=c(108),ue=c(50),be=c(193);var je=function(){var e=Object(ue.b)(),t=Object(be.a)((function(e){return g.a.post("https://gorest.co.in/public-api/users",e,{headers:{Authorization:"Bearer ".concat($)}})}),{onSuccess:function(){!function(e,t){for(var c,n,a,r,o,s=arguments.length,i=new Array(s>2?s-2:0),l=2;l<s;l++)i[l-2]=arguments[l];switch(e){case"info":(c=console).log.apply(c,["%c".concat(t),"color: #00529B; background-color: #BDE5F8;"].concat(i));break;case"success":(n=console).log.apply(n,["%c".concat(t),"color: #4F8A10; background-color: #DFF2BF;"].concat(i));break;case"warning":(a=console).log.apply(a,["%c".concat(t),"color: #9F6000; background-color: #FEEFB3;"].concat(i));break;case"error":(r=console).log.apply(r,["%c".concat(t),"color: #D8000C; background-color: #FFD2D2;"].concat(i));break;default:(o=console).log.apply(o,["%c".concat(t),"background: LightGoldenRodYellow; color: darkslategray;"].concat(i))}}("success","User created successfully"),e.invalidateQueries("fetchUsers")},onError:function(e){console.error(e)},onSettled:function(){}});return Object(n.jsxs)(u.a,{pad:"medium",elevation:"medium",gap:"small",width:"large",children:[t.isSuccess&&Object(n.jsx)(u.a,{direction:"row",gap:"medium",children:Object(n.jsxs)(I.a,{color:"brand",children:["User created successfully... ",Object(n.jsx)(R.a,{color:"brand"})]})}),t.isError&&Object(n.jsx)(u.a,{direction:"row",gap:"medium",children:Object(n.jsxs)(I.a,{color:"accent-1",children:["An error has occurred... ",Object(n.jsx)(V.a,{color:"accent-1"})]})}),Object(n.jsx)(E,{onSubmit:function(e){console.log("values submitted",e);var c=Object(p.a)(Object(p.a)({},e),{},{status:e.status?"Active":"Inactive"});t.mutate(c)},currentValues:{}})]})},de=c(173),pe=c(187);var Oe=function(){var e=Object(pe.a)("fetchUsers",(function(){return g.a.get("https://gorest.co.in/public-api/users?page=63").then((function(e){return e.data.data})).catch((function(e){return console.error(e),[]}))})),t=e.data,c=e.isFetching,a=e.error,r=e.isLoading;return e.status,r?Object(n.jsx)(u.a,{direction:"row",gap:"medium",children:Object(n.jsxs)(I.a,{color:"accent-1",children:["Loading... ",Object(n.jsx)(de.a,{color:"accent-1"})]})}):a?Object(n.jsx)(u.a,{direction:"row",gap:"medium",children:Object(n.jsxs)(I.a,{color:"accent-2",children:["An error has occurred... ",Object(n.jsx)(V.a,{color:"accent-2"})]})}):Object(n.jsxs)(u.a,{pad:"medium",elevation:"medium",fill:!0,gap:"small",children:[c&&Object(n.jsx)(u.a,{direction:"row",gap:"medium",children:Object(n.jsxs)(I.a,{color:"accent-2",children:["Fetching data... ",Object(n.jsx)(de.a,{color:"accent-2"})]})}),Object(n.jsx)(G,{users:t})]})};var fe=function(){return Object(n.jsxs)(u.a,{direction:"row",pad:"medium",gap:"medium",children:[Object(n.jsx)(Oe,{}),Object(n.jsx)(je,{})]})},he=function(e){Object(ie.a)(c,e);var t=Object(le.a)(c);function c(e){var n;return Object(oe.a)(this,c),(n=t.call(this,e)).state={value:1e3,text:"hola"},n}return Object(se.a)(c,[{key:"componentDidMount",value:function(){console.log("Renderice")}},{key:"componentDidUpdate",value:function(e,t){console.log("Actualice")}},{key:"componentWillUnmount",value:function(){console.log("Voy a ser destruido")}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"Hola soy una clase"}),Object(n.jsx)("p",{children:5*this.state.value}),Object(n.jsx)("p",{children:this.state.text.toUpperCase()}),Object(n.jsx)("button",{onClick:function(){return e.setState({value:1e4})},children:"+"}),Object(n.jsx)(fe,{})]})}}]),c}(a.Component),xe=c(197),me=c(46),ge=Object(me.b)({name:"data",initialState:{products:[]},reducers:{setProducts:function(e,t){e.products=t.payload}}}),ve=ge.actions.setProducts;var ye=function(){var e=Object(i.d)((function(e){return e.data.products})),t=Object(i.c)();return Object(a.useEffect)((function(){t(function(){var e=Object(x.a)(f.a.mark((function e(t,c){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(c().data.products.length>0)){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,g.a.get("https://gorest.co.in/public-api/products");case 5:n=e.sent,a=n.data,console.log("data from api",a),t(ve(a.data));case 9:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}())}),[t]),Object(n.jsxs)(u.a,{children:[Object(n.jsx)(xe.a,{children:"Hola Toolkit"}),Object(n.jsx)(L.a,{columns:[{property:"id",primary:!0,header:Object(n.jsx)(I.a,{children:"Id"})},{property:"name",header:Object(n.jsx)(I.a,{children:"Name"})},{property:"price",header:Object(n.jsx)(I.a,{children:"Price"}),render:function(e){return Object(n.jsxs)(I.a,{children:["$ ",e.price]})}}],data:e})]})},ke=Object(a.createContext)();var we=function(e){var t=Object(a.useState)(""),c=Object(b.a)(t,2),r=c[0],o=c[1];return Object(n.jsx)(ke.Provider,{value:[r,o],children:e.children})},Ce=c(106);var Se=function(e){var t=e.user;return Object(n.jsxs)("div",{className:"App-user",children:[Object(n.jsx)("p",{children:"Usuario"}),Object(n.jsx)("p",{children:t.id}),Object(n.jsx)("p",{children:t.name})]})},Ae=[{id:1,name:"Gabriel"},{id:2,name:"Fernando"},{id:3,name:"Fatima"},{id:4,name:"Karla"},{id:5,name:"Roberto"},{id:6,name:"Alberto"},{id:7,name:"Gilberto"},{id:8,name:"Ernesto"}];var Fe=function(e){Object(Ce.a)(e);var t=Object(a.useContext)(ke),c=Object(b.a)(t,2),r=c[0],o=(c[1],Object(a.useState)(Ae)),s=Object(b.a)(o,2),i=s[0],l=s[1];return Object(a.useEffect)((function(){var e=Ae.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return l(e),console.log("new users",e),function(){console.log("Will unmount")}}),[r]),Object(a.useEffect)((function(){var e=setTimeout((function(){l([].concat(Ae,Ae))}),3e3);return function(){clearTimeout(e),console.log("Will unmount!!!!")}}),[]),Object(n.jsx)("div",{className:"App-users",children:i.map((function(e){return Object(n.jsx)(Se,{user:e},e.id.toString())}))})};var Ee=function(){var e=Object(a.useContext)(ke),t=Object(b.a)(e,2),c=(t[0],t[1]);return Object(n.jsx)("div",{children:Object(n.jsx)("input",{type:"text",onChange:function(e){return c(e.target.value)}})})};var Te=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"Lista de usuarios"}),Object(n.jsxs)(we,{children:[Object(n.jsx)(Ee,{}),Object(n.jsx)(Fe,{})]})]})},Ue=c(28);var De=function(){return Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/",children:Object(n.jsx)(re,{})}),Object(n.jsx)(l.a,{path:"/jsx",children:Object(n.jsx)(ae,{})}),Object(n.jsx)(l.a,{path:"/lifecycle",children:Object(n.jsx)(he,{})}),Object(n.jsx)(l.a,{path:"/users",children:Object(n.jsx)(Te,{})}),Object(n.jsx)(l.a,{path:"/api",children:Object(n.jsx)(Q,{})}),Object(n.jsx)(l.a,{path:"/toolkit",children:Object(n.jsx)(ye,{})}),Object(n.jsx)(l.a,{path:"/rquery",children:Object(n.jsx)(fe,{})})]})},Be=c(189),Le=c(179),Ie=c(180),Pe=c(186),Ne=c(174),Re=c(175),Ve=c(176),ze=c(177),He=c(178);var Me=[{label:"Example",to:"/",icon:Object(n.jsx)(Ne.a,{color:"accent-2"})},{label:"JSX",to:"/jsx",icon:Object(n.jsx)(Ne.a,{color:"accent-2"})},{label:"Lifecycle",to:"/lifecycle",icon:Object(n.jsx)(Ne.a,{color:"accent-2"})},{label:"Users",to:"/users",icon:Object(n.jsx)(Re.a,{color:"accent-2"})},{label:"Fetch Data",to:"/api",icon:Object(n.jsx)(Ve.a,{color:"accent-2"})},{label:"Redux Toolkit",to:"/toolkit",icon:Object(n.jsx)(ze.a,{color:"accent-2"})},{label:"React Query",to:"/rquery",icon:Object(n.jsx)(He.a,{color:"accent-2"})}];var Ge={setNewTheme:function(e){return{type:"main/setTheme",payload:e}}},$e=Object(i.b)((function(e){return{theme:e.main.theme}}),Ge)((function(e){var t=Object(l.f)();return console.log({location:t}),console.log("props con redux",e),Object(n.jsxs)(Le.a,{background:"brand",pad:"medium",children:[Object(n.jsx)(Ie.a,{direction:"row",children:Me.map((function(e){return Object(n.jsxs)(Ue.b,{to:e.to,children:[e.icon," ",Object(n.jsx)(I.a,{color:e.to===t.pathname?"accent-2":"accent-3",children:e.label})]},e.to)}))}),Object(n.jsx)(u.a,{justify:"end",children:Object(n.jsx)(Pe.a,{value:e.theme,options:Object.keys(q),onChange:function(t){var c=t.option;return e.setNewTheme(c)}})})]})}));c(181),c(182);var qe=function(){var e=Object(i.d)((function(e){return e.main.theme}));return Object(n.jsx)(Be.a,{theme:q[e],children:Object(n.jsxs)(Ue.a,{children:[Object(n.jsx)($e,{}),Object(n.jsx)(u.a,{pad:"medium",children:Object(n.jsx)(De,{})})]})})},Je=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,198)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),r(e),o(e)}))},Qe=c(49),We={counter:0},Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"increment":return Object(p.a)(Object(p.a)({},e),{},{counter:e.counter+1});case"decrement":return Object(p.a)(Object(p.a)({},e),{},{counter:e.counter-1});default:return e}},Xe={theme:"awsmcolor",lang:"es-ES"},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"main/setTheme":return Object(p.a)(Object(p.a)({},e),{},{theme:t.payload});default:return e}},_e=Object(Qe.a)({main:Ye,example:Ke},ge.name,ge.reducer),Ze=Object(h.a)(Object(me.c)()),et=Object(me.a)({reducer:_e,middleware:Ze}),tt=c(184),ct=c(107),nt=new tt.a;var at=function(e){return Object(n.jsxs)(ue.a,{client:nt,children:[e.children,Object(n.jsx)(ct.ReactQueryDevtools,{})]})};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(i.a,{store:et,children:Object(n.jsx)(at,{children:Object(n.jsx)(qe,{})})})}),document.getElementById("root")),Je()}},[[142,1,2]]]);
//# sourceMappingURL=main.4eb7909e.chunk.js.map