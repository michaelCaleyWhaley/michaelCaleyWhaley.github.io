(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{ALdH:function(e,n,t){"use strict";t.r(n);var a=t("o0o1"),r=t.n(a);function o(e,n,t,a,r,o,i){try{var u=e[o](i),l=u.value}catch(c){return void t(c)}u.done?n(l):Promise.resolve(l).then(a,r)}var i=t("q1tI"),u=t.n(i),l=t("TSYQ"),c=t.n(l),s=t("gF98"),m=t("9fQE"),p=t("G9T2"),h=t("k2Lc"),f=(t("7uKC"),u.a.createElement);n.default=function(){var e=Object(i.useState)(!1),n=e[0],t=e[1],a=Object(i.useState)(""),l=a[0],_=a[1],d=Object(i.useState)(""),v=d[0],g=d[1],y=Object(i.useState)(""),b=y[0],w=y[1],S=Object(i.useState)(""),C=S[0],N=S[1],k=function(){var e,a=(e=r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!([n,l,v,b,C].filter((function(e){return e.length<=0})).length>0)){e.next=7;break}return t(!0),e.abrupt("return");case 7:t(!1);case 8:return e.next=10,fetch("https://michaelcaley.caley.now.sh/api/formSubmit",{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},referrerPolicy:"no-referrer",body:JSON.stringify({name:l,email:v,telephone:b,inquiry:C})});case 10:if(e.sent.ok){e.next=13;break}return e.abrupt("return");case 13:console.log("LOG: SUCCESS");case 14:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(a,r){var i=e.apply(n,t);function u(e){o(i,a,r,u,l,"next",e)}function l(e){o(i,a,r,u,l,"throw",e)}u(void 0)}))});return function(e){return a.apply(this,arguments)}}();return f(u.a.Fragment,null,f(s.a,{title:"Caltech - contact us",description:"Caltech air conditioning is a family run air conditioning installation, maintenance and repair company in Hull, East Yorkshire."}),f(m.a,null),f(p.a,{classString:"contact__layout"},f("h1",{className:"contact__h1"},"Contact us"),f("p",null,"Caltech provides air conditioning installation, maintenance and repair services. We are based in Cottingham near Hull but operate all over Yorkshire and the Humber Region."),f("p",null,"Please get in touch with your inquiry."),f("div",{className:"contact__row"},f("div",{className:"contact__column contact__column--dark"},f("p",null,"Telephone: 0800 211 8434"),f("hr",null),f("p",null,"Email: info@CaltechAirConditioning.co.uk"),f("hr",null),f("p",null,"Head Office: 53 Burton Road, Cottingham, Hull, HU16 5DZ, East Yorkshire"),f("hr",null),f("p",null,"Sub Office: 30 Well House Avenue, Leeds, LS8 4BY, West Yorkshire")),f("div",{className:"contact__column contact__column--border"},f("form",{className:c()({"form--submitted":n}),onSubmit:k},f("input",{className:c()("form__input form__input--top",{"form__input--empty":l.length<=0}),type:"text",name:"name",placeholder:"Name",value:l,onChange:function(e){_(e.target.value)}}),f("input",{className:c()("form__input",{"form__input--empty":v.length<=0}),type:"email",name:"email",placeholder:"Email",value:v,onChange:function(e){g(e.target.value)}}),f("input",{className:c()("form__input",{"form__input--empty":b.length<=0}),type:"tel",name:"telephone",size:"30",placeholder:"Telephone",value:b,onChange:function(e){w(e.target.value)}}),f("textarea",{className:c()("form__input form__text-area",{"form__input--empty":C.length<=0}),name:"query",placeholder:"Inquiry",value:C,onChange:function(e){N(e.target.value)}}),f("input",{className:"form__input form__submit",id:"submit",type:"submit",name:"send",value:"Submit"}))))),f(h.a,null))}},lqnA:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return t("ALdH")}])}},[["lqnA",0,2,1,4,3]]]);