(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{13:function(e,t,n){e.exports={ContactsList:"ContactList_ContactsList__2QcPa"}},14:function(e,t,n){e.exports={Filter:"Filter_Filter__I1D3Y"}},15:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(7),i=n.n(r),s=(n(22),n(23),n(4)),o=n(3),b=(Object(o.b)("contacts/fetchContactsRequest"),Object(o.b)("contacts/fetchContactsSuccess"),Object(o.b)("contacts/fetchContactsError"),Object(o.b)("form/submit")),l=Object(o.b)("list/delete"),u=Object(o.b)("list/filter"),d=n(13),j=n.n(d),m=function(e){return e.contacts.items},O=function(e){var t=m(e),n=function(e){return e.contacts.filter}(e),c=n.toLowerCase();return console.log(c),t.filter((function(e){return e.name.toLowerCase().includes(c)}))},h=n(1),f=function(){var e=Object(s.b)(),t=Object(s.c)(O);return 0===t.length?Object(h.jsx)("h2",{children:"No results were found..."}):Object(h.jsx)("div",{className:j.a.ContactsList,children:Object(h.jsx)("ul",{children:t.map((function(t){var n=t.name,c=t.id,a=t.number;return Object(h.jsxs)("li",{children:[Object(h.jsx)("p",{children:n+": "+a}),Object(h.jsx)("button",{onClick:function(){e(l(c))},children:"Delete"})]},c)}))})})},p=n(14),x=n.n(p),v=function(e){e.e;var t=Object(s.b)();return Object(h.jsxs)("div",{className:x.a.Filter,children:[Object(h.jsx)("label",{htmlFor:"",children:"Find contacts by name"}),Object(h.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:function(e){t(u(e.target.value))}})]})},C=n(11),g=n(15),A=n.n(g),k=n(34);var y=function(){var e=Object(s.b)(),t=Object(s.c)(m),n=Object(k.a)(),a=Object(k.a)(),r=Object(k.a)(),i=Object(c.useState)(""),o=Object(C.a)(i,2),l=o[0],u=o[1],d=Object(c.useState)(""),j=Object(C.a)(d,2),O=j[0],f=j[1],p={name:l,number:O,id:r},x=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"name":u(c);break;case"number":f(c);break;default:return}};return Object(h.jsx)("div",{className:A.a.Phonebook,children:Object(h.jsxs)("form",{onSubmit:function(n){n.preventDefault();var c=n.target,a=c.name,r=c.number;t.some((function(e){return e.name===p.name}))?alert("".concat(p.name," is already in contacts")):e(b(p)),a.value="",r.value=""},children:[Object(h.jsx)("label",{htmlFor:n,children:"Name"}),Object(h.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,id:n,onChange:x}),Object(h.jsx)("label",{htmlFor:a,children:"Number"}),Object(h.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,id:a,onChange:x}),Object(h.jsx)("button",{type:"submit",children:"Add contacts"})]})})};var w=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(y,{}),Object(h.jsx)("h1",{children:"Contacts"}),Object(h.jsx)(v,{}),Object(h.jsx)(f,{})]})},z=n(17),F=Object(o.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],{"form/submit":function(e,t){var n=t.payload;return[].concat(Object(z.a)(e),[n])},"list/delete":function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))}}),N=Object(o.c)("",{"list/filter":function(e,t){return t.payload}}),L=n(2),S=n(5),Z=n(16),_=n.n(Z),J=Object(L.b)({items:F,filter:N}),q=Object(o.a)({reducer:{contacts:J},middleware:function(e){return e({serializableCheck:{ignoredActions:[S.a,S.f,S.b,S.c,S.d,S.e]}}).concat(_.a)}});i.a.render(Object(h.jsxs)(a.a.StrictMode,{children:[Object(h.jsx)(s.a,{store:q,children:Object(h.jsx)(w,{})}),";"]}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.17f95f3e.chunk.js.map