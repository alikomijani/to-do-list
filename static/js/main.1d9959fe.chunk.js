(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{59:function(t,e,a){t.exports=a(93)},64:function(t,e,a){},93:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),o=a(20),r=a.n(o),i=(a(64),a(14)),l=a(22),u={ADD_TO_DO:"ADD_TO_DO",EDIT_TO_DO:"EDIT_TO_DO",DELETE_TO_DO:"DELETE_TO_DO",TOGGLE_CHECK_ITEM_TODO:"TOGGLE_CHECK_ITEM_TODO"},s=a(9),d=a(94),m=a(95),E=a(96),O=a(107),D=a(108),f=a(97),b=a(98),h=a(55),p=a(99),T=a(100),j=a(101),_=a(102);var k=Object(i.b)(null,{deleteToDo:function(t){return{type:u.DELETE_TO_DO,payload:t}},toggleToDoCheckItemStatus:function(t,e){return{type:u.TOGGLE_CHECK_ITEM_TODO,payload:{todoID:t,itemId:e}}}})((function(t){var e=t.toDo,a=t.deleteToDo,o=t.toggleToDoCheckItemStatus,r=Object(s.f)(),i=Object(n.useState)(!1),u=Object(l.a)(i,2),k=u[0],x=u[1],L=Object(n.useState)(!1),g=Object(l.a)(L,2),v=g[0],y=g[1];return c.a.createElement(d.a,null,c.a.createElement(m.a,{className:"d-flex justify-content-between"},c.a.createElement("p",null,e.title),c.a.createElement(E.a,{id:"dfdf",isOpen:k,toggle:function(t){t.target.attributes["aria-expanded"]&&x((function(t){return!t}))}},c.a.createElement(O.a,{caret:!0},"Dropdown"),c.a.createElement(D.a,null,c.a.createElement(f.a,{header:!0},"Actions"),c.a.createElement(f.a,{onClick:function(){return r.push("/update/".concat(e.id))}},"Edit"),c.a.createElement(f.a,{onClick:function(){return a(e.id)}},"Delete")))),c.a.createElement(b.a,null,e.text,c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(h.a,{size:"sm",color:"primary",onClick:function(){return y((function(t){return!t}))},style:{marginBottom:"1rem"}},"Toggle"),c.a.createElement(p.a,{isOpen:v},c.a.createElement("ol",null,e.checkList.map((function(t){return c.a.createElement("li",{key:"".concat(e.id).concat(t.id)},c.a.createElement(T.a,{check:!0},c.a.createElement(j.a,{check:!0,style:{cursor:"pointer"}},c.a.createElement(_.a,{checked:t.status,type:"checkbox",onChange:function(){return o(e.id,t.id)}})," ",t.status?c.a.createElement("del",null,t.text):t.text)))}))))))})),x=a(103),L=a(104),g=a(105);var v=Object(i.b)((function(t){return{toDoList:t.todo.toDoList}}),{})((function(t){var e=t.toDoList;return c.a.createElement(x.a,null,c.a.createElement(L.a,{className:"mt-5"},e.map((function(t){return c.a.createElement(g.a,{className:"mt-3",key:t.id,xs:12,md:6},c.a.createElement(k,{toDo:t}))}))))})),y=a(30),C=a(12),I=a(32),w=a(106),G=a(31),S=Object(G.a)((function(t){return t.todo.toDoList}),(function(t){return t.length+1}));var A=Object(G.b)({toDoId:S}),H=Object(i.b)(A,{addToDo:function(t){return{type:u.ADD_TO_DO,payload:t}},editToDo:function(t){return{type:u.EDIT_TO_DO,payload:t}}})((function(t){var e=t.addToDo,a=t.toDoId,o=t.editToDo,r=Object(s.f)(),u=Object(s.g)().id,d=Object(i.c)((function(t){return t.todo.toDoList.find((function(t){return t.id==u}))})),m=Object(n.useState)(d?{title:d.title,text:d.text}:{title:"",text:""}),E=Object(l.a)(m,2),O=E[0],D=E[1],f=Object(n.useState)(d?d.checkList:[{id:1,text:"",status:!1}]),b=Object(l.a)(f,2),p=b[0],k=b[1],x=function(t){var e=t.target,a=e.name,n=e.value;D(Object(C.a)({},O,Object(y.a)({},a,n)))};return c.a.createElement("div",null,c.a.createElement(w.a,{onSubmit:function(t){t.preventDefault(),d&&o(Object(C.a)({id:d.id},O,{checkList:p})),!d&&e(Object(C.a)({id:a},O,{checkList:p})),r.push("/")}},c.a.createElement(T.a,null,c.a.createElement(j.a,{htmlFor:"title"},"title"),c.a.createElement(_.a,{value:O.title,onChange:x,name:"title",id:"title"})),c.a.createElement(T.a,null,c.a.createElement(j.a,{htmlFor:"text"},"text"),c.a.createElement(_.a,{value:O.text,onChange:x,name:"text",id:"text"})),p.map((function(t){return c.a.createElement(T.a,{key:t.id},c.a.createElement(j.a,{htmlFor:"text"},"check item"),c.a.createElement(_.a,{value:t.text,onChange:function(e){return function(t,e){k(p.map((function(a){return a.id===e?Object(C.a)({},a,{text:t.target.value}):a})))}(e,t.id)},name:"text",id:"text"}))})),c.a.createElement(h.a,{type:"button",onClick:function(){k([].concat(Object(I.a)(p),[{id:p.length+1,text:"",status:!1}]))}},"add check Item")," ",c.a.createElement(h.a,null,"save")))})),K=a(17),M=a(58),B=a.n(M),F={toDoList:[{id:1,title:"to do 1",text:"this is a check list for shop",checkList:[{id:1,text:"first job",status:!1},{id:2,text:"second job",status:!1}]},{id:2,title:"to do 2",text:"this is amother check list for maktab",checkList:[{id:1,text:"first job maktab",status:!0},{id:2,text:"second job maktab",status:!1}]}]},N=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0,a=e.type,n=e.payload;switch(a){case u.ADD_TO_DO:return Object(C.a)({},t,{toDoList:[].concat(Object(I.a)(t.toDoList),[n])});case u.EDIT_TO_DO:return Object(C.a)({},t,{toDoList:t.toDoList.map((function(t){return t.id==n.id?n:t}))});case u.DELETE_TO_DO:return Object(C.a)({},t,{toDoList:t.toDoList.filter((function(t){return t.id!==n}))});case u.TOGGLE_CHECK_ITEM_TODO:return Object(C.a)({},t,{toDoList:t.toDoList.map((function(t){return t.id==n.todoID?Object(C.a)({},t,{checkList:t.checkList.map((function(t){return t.id==n.itemId?Object(C.a)({},t,{status:!t.status}):t}))}):t}))});default:return t}},J=Object(K.c)({todo:N}),W=[B.a],z=Object(K.d)(J,K.a.apply(void 0,W)),$=a(24);var q=function(){return c.a.createElement(i.a,{store:z},c.a.createElement(x.a,null,c.a.createElement($.a,null,c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/",exact:!0},c.a.createElement(v,null)),c.a.createElement(s.a,{path:"/add"},c.a.createElement(H,null)),c.a.createElement(s.a,{path:"/update/:id"},c.a.createElement(H,null)),c.a.createElement(s.a,{path:"/todo/:id"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(92);r.a.render(c.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.1d9959fe.chunk.js.map