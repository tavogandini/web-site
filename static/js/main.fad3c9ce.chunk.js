(this["webpackJsonpweb-site"]=this["webpackJsonpweb-site"]||[]).push([[0],{610:function(e,t,n){},612:function(e,t,n){},613:function(e,t,n){},614:function(e,t,n){},629:function(e,t,n){},647:function(e,t,n){},654:function(e,t,n){},657:function(e,t,n){},658:function(e,t,n){},659:function(e,t,n){},660:function(e,t,n){},661:function(e,t,n){},662:function(e,t,n){},663:function(e,t,n){},664:function(e,t,n){},665:function(e,t,n){},667:function(e,t,n){"use strict";n.r(t);n(409),n(421);var c=n(15),a=n.n(c),r=n(257),s=n.n(r),i=(n(610),n(611),n(612),n(613),n(111)),o=(n(614),n(404)),l=n.n(o),d=n(132),u=n(64),j=n(8),b=Object(c.createContext)({}),h=function(){return Object(c.useContext)(b)};function p(e){var t=Object(c.useState)({}),n=Object(u.a)(t,2),a=n[0],r=n[1];return Object(j.jsx)(b.Provider,Object(d.a)({value:{navigationData:a,setNavigationData:r}},e))}var m=n(71),x=n.n(m),O=n(96),f={email:"admin",avatarUrl:"https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png"};function v(e,t){return g.apply(this,arguments)}function g(){return(g=Object(O.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t,n),e.abrupt("return",{isOk:!0,data:f});case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",{isOk:!1,message:"Authentication failed"});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function C(){return w.apply(this,arguments)}function w(){return(w=Object(O.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",{isOk:!0,data:f});case 4:return e.prev=4,e.t0=e.catch(0),e.abrupt("return",{isOk:!1});case 7:case"end":return e.stop()}}),e,null,[[0,4]])})))).apply(this,arguments)}function k(e,t){return y.apply(this,arguments)}function y(){return(y=Object(O.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t,n),e.abrupt("return",{isOk:!0});case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",{isOk:!1,message:"Failed to create account"});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function M(e,t){return _.apply(this,arguments)}function _(){return(_=Object(O.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t,n),e.abrupt("return",{isOk:!0});case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",{isOk:!1,message:"Failed to change password"});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function N(e){return S.apply(this,arguments)}function S(){return(S=Object(O.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),e.abrupt("return",{isOk:!0});case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",{isOk:!1,message:"Failed to reset password"});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function F(e){var t=Object(c.useState)(),n=Object(u.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(!0),i=Object(u.a)(s,2),o=i[0],l=i[1];Object(c.useEffect)((function(){Object(O.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:(t=e.sent).isOk&&r(t.data),l(!1);case 5:case"end":return e.stop()}}),e)})))()}),[]);var b=Object(c.useCallback)(function(){var e=Object(O.a)(x.a.mark((function e(t,n){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t,n);case 2:return(c=e.sent).isOk&&r(c.data),e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[]),h=Object(c.useCallback)((function(){r()}),[]);return Object(j.jsx)(T.Provider,Object(d.a)({value:{user:a,signIn:b,signOut:h,loading:o}},e))}var T=Object(c.createContext)({}),D=function(){return Object(c.useContext)(T)},E=function(){var e=Object(c.useState)(z()),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useCallback)((function(){a(z())}),[]);return Object(c.useEffect)((function(){return V(r),function(){B(r)}}),[r]),n},P=[],R=window.matchMedia("(max-width: 599.99px)"),H=window.matchMedia("(min-width: 600px) and (max-width: 959.99px)"),I=window.matchMedia("(min-width: 960px) and (max-width: 1279.99px)"),L=window.matchMedia("(min-width: 1280px)");[R,H,I,L].forEach((function(e){e.addListener((function(e){e.matches&&P.forEach((function(e){return e()}))}))}));var V=function(e){return P.push(e)},B=function(e){P=P.filter((function(t){return t!==e}))};function z(){return{isXSmall:R.matches,isSmall:H.matches,isMedium:I.matches,isLarge:L.matches}}var A=n(75),G="Gustavo Gandini",q=(n(629),n(284)),Z=n.n(q),W={Accept:"application/json","Access-Control-Allow-Origin":"*",Authorization:"Bearer 6a28c510765bb9a22235853c6e0d043dbb86d3ed","Content-type":"application/json"},U={username:"Iv1.72c3872d7c1ae9bc",password:"6a28c510765bb9a22235853c6e0d043dbb86d3ed"},J={id:2,title:"web-site-2",author:"Gandini Gustavo - 2"};var X=n.p+"static/media/img-profile.5a06c095.jpg",Y=(n(647),n(40)),K=n.n(Y),Q={xs:1,sm:2,md:3,lg:4},$=(n(669),n(107)),ee=n.n($),te={store:{type:"odata",key:"Task_ID",url:"https://js.devexpress.com/Demos/DevAV/odata/Tasks"},expand:"ResponsibleEmployee",select:["Task_ID","Task_Subject","Task_Start_Date","Task_Due_Date","Task_Status","Task_Priority","Task_Completion","ResponsibleEmployee/Employee_Full_Name"]},ne=[{name:"High",value:4},{name:"Urgent",value:3},{name:"Normal",value:2},{name:"Low",value:1}],ce=[{path:"/tasks",component:function(){return Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)("h2",{className:"content-block",children:"Tasks"}),Object(j.jsxs)(ee.a,{className:"dx-card wide-card",dataSource:te,showBorders:!1,focusedRowEnabled:!0,defaultFocusedRowIndex:0,columnAutoWidth:!0,columnHidingEnabled:!0,children:[Object(j.jsx)($.Paging,{defaultPageSize:10}),Object(j.jsx)($.Pager,{showPageSizeSelector:!0,showInfo:!0}),Object(j.jsx)($.FilterRow,{visible:!0}),Object(j.jsx)($.Column,{dataField:"Task_ID",width:90,hidingPriority:2}),Object(j.jsx)($.Column,{dataField:"Task_Subject",width:190,caption:"Subject",hidingPriority:8}),Object(j.jsx)($.Column,{dataField:"Task_Status",caption:"Status",hidingPriority:6}),Object(j.jsx)($.Column,{dataField:"Task_Priority",caption:"Priority",hidingPriority:5,children:Object(j.jsx)($.Lookup,{dataSource:ne,valueExpr:"value",displayExpr:"name"})}),Object(j.jsx)($.Column,{dataField:"ResponsibleEmployee.Employee_Full_Name",caption:"Assigned To",allowSorting:!1,hidingPriority:7}),Object(j.jsx)($.Column,{dataField:"Task_Start_Date",caption:"Start Date",dataType:"date",hidingPriority:3}),Object(j.jsx)($.Column,{dataField:"Task_Due_Date",caption:"Due Date",dataType:"date",hidingPriority:4}),Object(j.jsx)($.Column,{dataField:"Task_Priority",caption:"Priority",name:"Priority",hidingPriority:1}),Object(j.jsx)($.Column,{dataField:"Task_Completion",caption:"Completion",hidingPriority:0})]})]})}},{path:"/profile",component:function(){var e=Object(c.useState)("Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you`ve not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts."),t=Object(u.a)(e,2),n=t[0],r=t[1],s={ID:7,FirstName:"Sandra",LastName:"Johnson",Prefix:"Mrs.",Position:"Controller",Picture:X,BirthDate:new Date("1974/11/15"),HireDate:new Date("2005/05/11"),Notes:n,Address:"4600 N Virginia Rd."};return Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)("h2",{className:"content-block",children:"Profile"}),Object(j.jsxs)("div",{className:"content-block dx-card responsive-paddings",children:[Object(j.jsx)("div",{className:"form-avatar",children:Object(j.jsx)("img",{alt:"",src:s.Picture})}),Object(j.jsx)("span",{children:n})]}),Object(j.jsx)("div",{className:"content-block dx-card responsive-paddings",children:Object(j.jsx)(K.a,{id:"form",defaultFormData:s,onFieldDataChanged:function(e){return"Notes"===e.dataField&&r(e.value)},labelLocation:"top",colCountByScreen:Q})})]})}},{path:"/home",component:function(){return Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)("h2",{className:"content-block",children:"Presentacion.!!"}),Object(j.jsx)("div",{className:"content-block",children:Object(j.jsxs)("div",{className:"dx-card responsive-paddings",children:[Object(j.jsxs)("div",{className:"logos-container",children:[Object(j.jsxs)("svg",{className:"devextreme-logo",viewBox:"0 0 200 34",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[void Object(c.useEffect)((function(){}),[]),Object(j.jsx)("path",{d:"M21.269 16.6304C21.269 21.9331 20.1851 25.9907 18.0171 28.8032C15.8638 31.6011 12.7583 33 8.70068 33H0.834473V0.875977H9.42578C13.1611 0.875977 16.0688 2.26025 18.1489 5.02881C20.229 7.78271 21.269 11.6499 21.269 16.6304ZM15.1387 16.8062C15.1387 9.62842 13.1611 6.03955 9.20605 6.03955H6.81104V27.7705H8.74463C10.9272 27.7705 12.5386 26.8623 13.5786 25.0459C14.6187 23.2148 15.1387 20.4683 15.1387 16.8062ZM33.7504 33.4395C30.6889 33.4395 28.2719 32.3555 26.4994 30.1875C24.7416 28.0049 23.8627 24.9214 23.8627 20.937C23.8627 16.894 24.661 13.7373 26.2577 11.4668C27.8544 9.19629 30.081 8.06104 32.9374 8.06104C35.6034 8.06104 37.7055 9.03516 39.2436 10.9834C40.7816 12.917 41.5507 15.6343 41.5507 19.1353V22.2554H29.7953C29.8393 24.438 30.286 26.064 31.1356 27.1333C31.9853 28.188 33.1571 28.7153 34.6513 28.7153C36.5556 28.7153 38.5038 28.1221 40.496 26.9355V31.7476C38.621 32.8755 36.3725 33.4395 33.7504 33.4395ZM32.8935 12.5654C32.0585 12.5654 31.37 13.0122 30.828 13.9058C30.286 14.7847 29.9711 16.1543 29.8832 18.0146H35.8158C35.7865 16.2275 35.5155 14.8726 35.0028 13.9497C34.4901 13.0269 33.787 12.5654 32.8935 12.5654ZM48.429 33L42.035 8.52246H48.0994L51.2195 22.6948C51.3514 23.354 51.5052 24.3208 51.681 25.5952C51.8714 26.855 51.9886 27.7632 52.0325 28.3198H52.1204C52.1351 27.8804 52.1937 27.2505 52.2962 26.4302C52.4134 25.6099 52.5306 24.8555 52.6478 24.167C52.7649 23.4785 53.8929 18.2637 56.0315 8.52246H62.096L55.68 33H48.429ZM78.5324 33H64.0524V0.875977H78.5324V6.03955H70.029V13.686H77.9172V18.8716H70.029V27.7705H78.5324V33ZM86.1798 20.4976L80.0714 8.52246H86.1358L89.3878 15.9932L92.398 8.52246H98.4186L92.2662 20.4976L98.6822 33H92.5738L89.1021 25.1777L85.8722 33H79.7857L86.1798 20.4976ZM109.12 28.4956C109.94 28.4956 110.827 28.2905 111.779 27.8804V32.4507C110.827 33.1099 109.398 33.4395 107.494 33.4395C105.37 33.4395 103.795 32.8096 102.77 31.5498C101.745 30.2754 101.232 28.3711 101.232 25.8369V13.1587H98.8589V10.5439L101.913 8.43457L103.407 3.24902H107.143V8.52246H111.581V13.1587H107.143V26.0347C107.143 27.6753 107.802 28.4956 109.12 28.4956ZM124.744 8.06104C125.461 8.06104 126.164 8.1709 126.853 8.39062L126.172 14.0596C125.762 13.9131 125.227 13.8398 124.568 13.8398C123.147 13.8398 122.056 14.4038 121.294 15.5317C120.532 16.645 120.151 18.271 120.151 20.4097V33H114.307V8.52246H119.119L119.778 12.3457H119.975C120.62 10.8076 121.323 9.70898 122.085 9.0498C122.847 8.39062 123.733 8.06104 124.744 8.06104ZM137.598 33.4395C134.537 33.4395 132.12 32.3555 130.347 30.1875C128.59 28.0049 127.711 24.9214 127.711 20.937C127.711 16.894 128.509 13.7373 130.106 11.4668C131.702 9.19629 133.929 8.06104 136.785 8.06104C139.451 8.06104 141.554 9.03516 143.092 10.9834C144.63 12.917 145.399 15.6343 145.399 19.1353V22.2554H133.643C133.687 24.438 134.134 26.064 134.984 27.1333C135.833 28.188 137.005 28.7153 138.499 28.7153C140.404 28.7153 142.352 28.1221 144.344 26.9355V31.7476C142.469 32.8755 140.221 33.4395 137.598 33.4395ZM136.742 12.5654C135.907 12.5654 135.218 13.0122 134.676 13.9058C134.134 14.7847 133.819 16.1543 133.731 18.0146H139.664C139.635 16.2275 139.364 14.8726 138.851 13.9497C138.338 13.0269 137.635 12.5654 136.742 12.5654ZM172.668 33V18.4102C172.668 14.8213 171.781 13.0269 170.009 13.0269C168.72 13.0269 167.797 13.6714 167.24 14.9604C166.684 16.2349 166.405 18.2856 166.405 21.1128V33H160.517V18.4102C160.517 14.8213 159.616 13.0269 157.814 13.0269C156.554 13.0269 155.639 13.6641 155.068 14.9385C154.496 16.2129 154.211 18.3149 154.211 21.2446V33H148.366V8.52246H153.002L153.705 11.6646H154.079C154.665 10.4194 155.463 9.51123 156.474 8.93994C157.499 8.354 158.591 8.06104 159.748 8.06104C162.736 8.06104 164.728 9.47461 165.724 12.3018H165.944C167.189 9.47461 169.189 8.06104 171.943 8.06104C174.111 8.06104 175.751 8.82275 176.864 10.3462C177.992 11.8696 178.556 14.0962 178.556 17.0259V33H172.668ZM191.433 33.4395C188.372 33.4395 185.955 32.3555 184.182 30.1875C182.424 28.0049 181.546 24.9214 181.546 20.937C181.546 16.894 182.344 13.7373 183.941 11.4668C185.537 9.19629 187.764 8.06104 190.62 8.06104C193.286 8.06104 195.388 9.03516 196.926 10.9834C198.464 12.917 199.233 15.6343 199.233 19.1353V22.2554H187.478C187.522 24.438 187.969 26.064 188.818 27.1333C189.668 28.188 190.84 28.7153 192.334 28.7153C194.238 28.7153 196.187 28.1221 198.179 26.9355V31.7476C196.304 32.8755 194.055 33.4395 191.433 33.4395ZM190.576 12.5654C189.741 12.5654 189.053 13.0122 188.511 13.9058C187.969 14.7847 187.654 16.1543 187.566 18.0146H193.499C193.469 16.2275 193.198 14.8726 192.686 13.9497C192.173 13.0269 191.47 12.5654 190.576 12.5654Z",fill:"#F05B41"})]}),Object(j.jsx)("svg",{className:"plus",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{d:"M21.6309 13.3433H13.1714V21.8027H8.73291V13.3433H0.229492V8.88281H8.73291V0.379395H13.1714V8.88281H21.6309V13.3433Z",fill:"#BCBCBC"})}),Object(j.jsxs)("svg",{className:"react-logo",viewBox:"0 0 184 62",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsx)("circle",{fill:"#6FCEEF",cx:"34.6",cy:"30.4",r:"6"}),Object(j.jsx)("path",{fill:"#6FCEEF",d:"M68.1,30.4c0-4.8-5.4-8.9-14-11.3c0.3-1.3,0.6-2.5,0.8-3.7c1.1-7-0.1-12-3.5-14c-3.4-2-8.3-0.6-13.9,3.9c-0.9,0.8-1.9,1.6-2.8,2.6C28.3,1.7,22-1,17.9,1.4c-4.1,2.4-5,9.1-2.8,17.7c-8.6,2.4-14,6.5-14,11.3s5.4,8.8,14,11.3c-2.2,8.6-1.4,15.3,2.8,17.7c1,0.6,2.2,0.9,3.4,0.9c3.8,0,8.5-2.7,13.4-7.4c0.9,0.9,1.9,1.8,2.8,2.6c3.9,3.2,7.5,4.8,10.5,4.8c1.2,0,2.4-0.3,3.4-0.9c4.1-2.4,5-9.1,2.8-17.7C62.7,39.3,68.1,35.2,68.1,30.4z M39.4,7.7c3.3-2.7,6.3-4.1,8.5-4.1c0.7,0,1.4,0.2,1.9,0.5c2.2,1.3,3,5.3,2.1,10.9c-0.2,1.1-0.4,2.3-0.7,3.5c-2.7-0.6-5.7-1.1-8.9-1.3c-1.8-2.6-3.7-4.9-5.6-7C37.6,9.2,38.5,8.4,39.4,7.7z M43.9,35.8c-1,1.8-2.1,3.5-3.2,5.1c-1.9,0.1-4,0.2-6.1,0.2c-2.1,0-4.1-0.1-6.1-0.2c-1.1-1.6-2.2-3.4-3.2-5.1c-1-1.8-2-3.6-2.8-5.4c0.8-1.8,1.8-3.5,2.8-5.4c1-1.8,2.1-3.5,3.2-5.1c1.9-0.1,4-0.2,6.1-0.2c2.1,0,4.1,0.1,6.1,0.2c1.1,1.6,2.2,3.3,3.2,5.1c1,1.8,2,3.6,2.8,5.4C45.9,32.2,44.9,34,43.9,35.8z M48.3,33.9c0.8,1.9,1.5,3.8,2,5.6c-1.8,0.4-3.8,0.8-5.9,1c0.7-1.1,1.3-2.1,2-3.3C47.2,36.2,47.8,35.1,48.3,33.9z M34.6,48.6c-1.3-1.4-2.6-2.9-3.8-4.5c1.2,0.1,2.5,0.1,3.8,0.1c1.3,0,2.6,0,3.8-0.1C37.2,45.7,35.9,47.2,34.6,48.6z M24.7,40.5c-2.1-0.3-4-0.6-5.9-1c0.6-1.8,1.2-3.6,2-5.6c0.6,1.1,1.2,2.2,1.8,3.3C23.4,38.4,24.1,39.5,24.7,40.5z M20.9,26.9c-0.8-1.9-1.5-3.8-2-5.6c1.8-0.4,3.8-0.8,5.9-1c-0.7,1.1-1.3,2.1-2,3.3C22.1,24.7,21.5,25.8,20.9,26.9z M34.6,12.2c1.3,1.4,2.5,2.9,3.8,4.6c-1.2-0.1-2.5-0.1-3.8-0.1c-1.3,0-2.5,0-3.8,0.1C32.1,15.2,33.4,13.6,34.6,12.2z M46.5,23.6c-0.6-1.1-1.3-2.2-2-3.2c2.1,0.3,4,0.6,5.8,1c-0.6,1.8-1.2,3.7-2,5.6C47.8,25.8,47.2,24.7,46.5,23.6z M19.4,4c0.5-0.3,1.2-0.5,1.9-0.5c2.8,0,6.9,2.3,11.3,6.5c-1.9,2.1-3.8,4.4-5.6,6.9c-3.2,0.3-6.2,0.7-8.9,1.3C16.2,11,16.8,5.5,19.4,4z M4.1,30.4c0-3,4.4-6.2,11.8-8.3c0.8,2.7,1.9,5.5,3.3,8.3c-1.3,2.9-2.4,5.7-3.3,8.3C8.6,36.7,4.1,33.4,4.1,30.4z M19.4,56.8c-2.6-1.5-3.2-6.9-1.3-14.4c2.7,0.6,5.7,1.1,8.9,1.3c1.8,2.5,3.7,4.9,5.6,7C27,56.1,22,58.3,19.4,56.8z M49.9,56.8c-2.2,1.3-6-0.1-10.5-3.7c-0.9-0.7-1.8-1.5-2.6-2.4c1.9-2,3.8-4.4,5.6-7c3.2-0.3,6.1-0.7,8.9-1.3C53.1,49.9,52.5,55.3,49.9,56.8z M53.3,38.8c-0.8-2.7-1.9-5.5-3.3-8.4c1.3-2.8,2.4-5.6,3.2-8.3c7.4,2.1,11.8,5.3,11.8,8.4C65.1,33.4,60.7,36.7,53.3,38.8z"}),Object(j.jsxs)("g",{children:[Object(j.jsx)("path",{fill:"#6FCEEF",d:"M79.2,31.8v10.8h-5.4v-27H84c3.1,0,5.5,0.7,7.2,2.1c1.7,1.4,2.6,3.4,2.6,5.9c0,1.4-0.4,2.6-1.1,3.6c-0.7,1-1.8,1.8-3.2,2.4c1.6,0.5,2.7,1.3,3.4,2.4c0.7,1.1,1,2.5,1,4.1v2c0,0.8,0.1,1.5,0.3,2.4c0.2,0.8,0.6,1.4,1,1.8v0.4h-5.6c-0.5-0.4-0.8-1.1-1-2s-0.2-1.8-0.2-2.6v-1.9c0-1.3-0.4-2.4-1.1-3.1c-0.7-0.7-1.8-1.1-3.1-1.1H79.2z M79.2,27.7h4.7c1.5,0,2.7-0.3,3.4-1c0.7-0.6,1.1-1.6,1.1-2.9c0-1.2-0.4-2.2-1.1-3c-0.7-0.7-1.9-1.1-3.3-1.1h-4.8V27.7z"}),Object(j.jsx)("path",{fill:"#6FCEEF",d:"M107.3,43c-2.9,0-5.2-0.9-6.9-2.8c-1.7-1.9-2.6-4.2-2.6-7.1v-0.7c0-3,0.8-5.4,2.5-7.4c1.6-1.9,3.8-2.9,6.6-2.9c2.7,0,4.8,0.8,6.3,2.4c1.5,1.6,2.2,3.8,2.2,6.6v3h-12l0,0.1c0.1,1.3,0.5,2.4,1.3,3.3c0.8,0.9,1.9,1.3,3.2,1.3c1.2,0,2.2-0.1,3-0.4c0.8-0.2,1.7-0.6,2.6-1.1l1.5,3.3c-0.8,0.7-1.9,1.2-3.2,1.7C110.4,42.8,109,43,107.3,43z M106.9,26.4c-1,0-1.8,0.4-2.4,1.2c-0.6,0.8-0.9,1.8-1.1,3l0.1,0.1h6.6v-0.5c0-1.2-0.3-2.1-0.8-2.8C108.8,26.7,108,26.4,106.9,26.4z"}),Object(j.jsx)("path",{fill:"#6FCEEF",d:"M130.4,42.6c-0.2-0.5-0.4-0.9-0.5-1.4c-0.1-0.5-0.2-1-0.3-1.6c-0.6,1-1.3,1.8-2.2,2.4c-0.9,0.6-2,1-3.3,1c-2.1,0-3.7-0.5-4.9-1.6c-1.1-1.1-1.7-2.6-1.7-4.4c0-2,0.8-3.5,2.3-4.6c1.5-1.1,3.7-1.6,6.6-1.6h3v-1.6c0-1-0.3-1.7-0.8-2.2c-0.5-0.5-1.3-0.8-2.2-0.8c-0.9,0-1.6,0.2-2,0.6c-0.5,0.4-0.7,1-0.7,1.8l-5.2,0l0-0.1c-0.1-1.7,0.6-3.2,2.2-4.4c1.6-1.2,3.6-1.8,6.1-1.8c2.4,0,4.3,0.6,5.8,1.8c1.5,1.2,2.2,3,2.2,5.2v8.3c0,0.9,0.1,1.8,0.2,2.7c0.1,0.8,0.4,1.7,0.7,2.5H130.4z M125.4,39c1,0,1.8-0.2,2.5-0.7c0.7-0.5,1.2-1,1.5-1.6v-2.8h-3c-1.2,0-2,0.3-2.6,0.9c-0.6,0.6-0.9,1.3-0.9,2.1c0,0.7,0.2,1.2,0.7,1.6S124.6,39,125.4,39z"}),Object(j.jsx)("path",{fill:"#6FCEEF",d:"M147.4,38.9c1,0,1.7-0.3,2.3-0.8c0.6-0.6,0.9-1.3,0.9-2.2h4.9l0.1,0.1c0,2-0.7,3.7-2.3,5.1c-1.6,1.4-3.5,2-5.9,2c-3,0-5.3-0.9-6.9-2.8c-1.6-1.9-2.4-4.3-2.4-7.3v-0.6c0-3,0.8-5.4,2.4-7.3c1.6-1.9,3.9-2.9,6.9-2.9c2.5,0,4.5,0.7,6,2.1c1.5,1.4,2.2,3.3,2.2,5.6l0,0.1h-4.9c0-1-0.3-1.9-0.9-2.6c-0.6-0.7-1.4-1-2.4-1c-1.4,0-2.4,0.6-3,1.7c-0.6,1.1-0.9,2.5-0.9,4.3v0.6c0,1.8,0.3,3.2,0.9,4.3C144.9,38.3,146,38.9,147.4,38.9z"}),Object(j.jsx)("path",{fill:"#6FCEEF",d:"M165.1,17.6v4.9h3.4v3.8h-3.4v10.2c0,0.8,0.2,1.3,0.5,1.7c0.3,0.3,0.8,0.5,1.3,0.5c0.3,0,0.5,0,0.7,0c0.2,0,0.4-0.1,0.7-0.2l0.5,3.9c-0.5,0.2-1.1,0.3-1.6,0.4c-0.5,0.1-1.1,0.1-1.7,0.1c-1.9,0-3.3-0.5-4.3-1.5c-1-1-1.5-2.7-1.5-4.9V26.4h-2.9v-3.8h2.9v-4.9H165.1z"})]})]})]}),Object(j.jsx)("p",{children:"Mandale mecha perreque|."}),Object(j.jsx)("h4",{children:"Change to revert perreke"}),Object(j.jsx)("button",{onClick:function(){return console.log("-------------------\x3e 1.14 ......."),Z()({mehod:"get",url:"https://github.com/login/oauth/authorize",auth:U,headers:W,withCredentials:!0,params:{client_id:"Iv1.72c3872d7c1ae9bc",redirect_uri:"https://tavogandini.github.io/web-site/profile.json",state:"test_state",login:"MandaleMecha",allow_signup:!0}})},children:"gitAuth"})," ",Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:function(){return Z()({method:"get",url:"https://tavogandini.github.io/web-site/profile.json"}).then((function(e){return console.log("readFile Response::",e.data)})).catch((function(e){return console.error("::readFile Error::",e.response)}))},children:"readFile"})," ",Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:function(){return Z()({method:"post",url:"https://tavogandini.github.io/web-site/profile.json",auth:U,headers:W,withCredentials:!0,params:J}).then((function(e){return console.log("post Response::",e.data)})).catch((function(e){return console.error("::Post ERROR::",e.response)}))},children:"writeFile"})," ",Object(j.jsx)("br",{}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:"This application was built using "}),Object(j.jsx)("a",{href:"https://create-react-app.dev/",target:"_blank",rel:"noopener noreferrer",children:"Create React App"}),Object(j.jsx)("span",{children:" and "}),Object(j.jsx)("a",{href:"https://js.devexpress.com/Documentation/Guide/Common/DevExtreme_CLI/",target:"_blank",rel:"noopener noreferrer",children:"DevExtreme CLI"}),Object(j.jsx)("span",{children:" and includes the following DevExtreme components:"})]}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://js.devexpress.com/Documentation/Guide/UI_Components/DataGrid/Getting_Started_with_DataGrid/",target:"_blank",rel:"noopener noreferrer",children:"DataGrid"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://js.devexpress.com/Documentation/Guide/Widgets/Form/Overview/",target:"_blank",rel:"noopener noreferrer",children:"Form"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://js.devexpress.com/Documentation/Guide/Widgets/Drawer/Getting_Started_with_Navigation_Drawer/",target:"_blank",rel:"noopener noreferrer",children:"Drawer"})})]}),Object(j.jsx)("p",{children:"To customize your DevExtreme React application further, please refer to the following help topics:"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://js.devexpress.com/Documentation/Guide/React_Components/Application_Template/#Layouts",target:"_blank",rel:"noopener noreferrer",children:"Layouts"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://js.devexpress.com/Documentation/Guide/React_Components/Application_Template/#Add_a_New_View",target:"_blank",rel:"noopener noreferrer",children:"Add a New View"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://js.devexpress.com/Documentation/Guide/React_Components/Application_Template/#Configure_the_Navigation_Menu",target:"_blank",rel:"noopener noreferrer",children:"Configure the Navigation Menu"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://js.devexpress.com/Documentation/Guide/React_Components/Application_Template/#Configure_Themes",target:"_blank",rel:"noopener noreferrer",children:"Configure Themes"})})]}),Object(j.jsxs)("p",{children:[Object(j.jsxs)("span",{children:["For technical content related to DevExtreme React components, feel free to explore our"," "]}),Object(j.jsx)("a",{href:"https://js.devexpress.com/documentation/",target:"_blank",rel:"noopener noreferrer",children:"online documentation"}),Object(j.jsx)("span",{children:" and "}),Object(j.jsx)("a",{href:"https://js.devexpress.com/Demos/Widgetsgallery/",target:"_blank",rel:"noopener noreferrer",children:"technical demos"}),"."]})]})})]})}}].map((function(e){return Object(d.a)(Object(d.a)({},e),{},{component:(t=e.component,function(e){var n=e.match.path,r=h().setNavigationData;return Object(c.useEffect)((function(){r({currentPath:n})}),[n,r]),a.a.createElement(t,e)})});var t})),ae=n(277),re=n.n(ae),se=n(205),ie=n.n(se),oe=n(154),le=n.n(oe),de=n(237),ue=n.n(de),je=n(318),be=n.n(je),he=n(406),pe=n.n(he),me=(n(654),function(e){var t=e.menuMode,n=D(),a=n.user,r=n.signOut,s=Object(A.g)();function i(){s.push("/profile")}var o=Object(c.useMemo)((function(){return[{text:"Profile",icon:"user",onClick:i},{text:"Logout",icon:"runner",onClick:r}]}),[r]);return Object(j.jsxs)("div",{className:"user-panel",children:[Object(j.jsxs)("div",{className:"user-info",children:[Object(j.jsx)("div",{className:"image-container",children:Object(j.jsx)("div",{style:{background:"url(".concat(a.avatarUrl,") no-repeat #fff"),backgroundSize:"cover"},className:"user-image"})}),Object(j.jsx)("div",{className:"user-name",children:a.email})]}),"context"===t&&Object(j.jsx)(be.a,{items:o,target:".user-button",showEvent:"dxclick",width:210,cssClass:"user-menu",children:Object(j.jsx)(je.Position,{my:"top center",at:"bottom center"})}),"list"===t&&Object(j.jsx)(pe.a,{className:"dx-toolbar-menu-action",items:o})]})}),xe=(n(657),n(182)),Oe=function(e){var t=e.menuToggleEnabled,n=e.title,c=e.toggleMenu;return Object(j.jsx)("header",{className:"header-component",children:Object(j.jsxs)(le.a,{className:"header-toolbar",children:[Object(j.jsx)(oe.Item,{visible:t,location:"before",widget:"dxButton",cssClass:"menu-button",children:Object(j.jsx)(ue.a,{icon:"menu",stylingMode:"text",onClick:c})}),Object(j.jsx)(oe.Item,{location:"before",cssClass:"header-title",text:n,visible:!!n}),Object(j.jsx)(oe.Item,{location:"after",locateInMenu:"auto",menuItemTemplate:"userPanelTemplate",children:Object(j.jsx)(ue.a,{className:"user-button authorization",width:210,height:"100%",stylingMode:"text",children:Object(j.jsx)(me,{menuMode:"context"})})}),Object(j.jsx)(xe.Template,{name:"userPanelTemplate",children:Object(j.jsx)(me,{menuMode:"list"})})]})})},fe=(n(658),function(e){var t=Object.assign({},e);return Object(j.jsx)("footer",Object(d.a)({className:"footer"},t))}),ve=n(170),ge=n.n(ve),Ce=n(153),we=(n(659),function(){var e=Object(A.g)(),t=D().signIn,n=Object(c.useState)(!1),a=Object(u.a)(n,2),r=a[0],s=a[1],o=Object(c.useRef)({}),l=Object(c.useCallback)(function(){var e=Object(O.a)(x.a.mark((function e(n){var c,a,r,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),c=o.current,a=c.email,r=c.password,s(!0),e.next=5,t(a,r);case 5:(i=e.sent).isOk||(s(!1),Object(Ce.a)(i.message,"error",2e3));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),d=Object(c.useCallback)((function(){e.push("/create-account")}),[e]);return Object(j.jsx)("form",{className:"login-form",onSubmit:l,children:Object(j.jsxs)(K.a,{formData:o.current,disabled:r,children:[Object(j.jsxs)(Y.Item,{dataField:"email",editorType:"dxTextBox",editorOptions:ke,children:[Object(j.jsx)(Y.RequiredRule,{message:"Email is required"}),Object(j.jsx)(Y.EmailRule,{message:"Email is invalid"}),Object(j.jsx)(Y.Label,{visible:!1})]}),Object(j.jsxs)(Y.Item,{dataField:"password",editorType:"dxTextBox",editorOptions:ye,children:[Object(j.jsx)(Y.RequiredRule,{message:"Password is required"}),Object(j.jsx)(Y.Label,{visible:!1})]}),Object(j.jsx)(Y.Item,{dataField:"rememberMe",editorType:"dxCheckBox",editorOptions:Me,children:Object(j.jsx)(Y.Label,{visible:!1})}),Object(j.jsx)(Y.ButtonItem,{children:Object(j.jsx)(Y.ButtonOptions,{width:"100%",type:"default",useSubmitBehavior:!0,children:Object(j.jsx)("span",{className:"dx-button-text",children:r?Object(j.jsx)(ge.a,{width:"24px",height:"24px",visible:!0}):"Sign In"})})}),Object(j.jsx)(Y.Item,{children:Object(j.jsx)("div",{className:"link",children:Object(j.jsx)(i.b,{to:"/reset-password",children:"Forgot password?"})})}),Object(j.jsx)(Y.ButtonItem,{children:Object(j.jsx)(Y.ButtonOptions,{text:"Create an account",width:"100%",onClick:d})})]})})}),ke={stylingMode:"filled",placeholder:"Email",mode:"email"},ye={stylingMode:"filled",placeholder:"Password",mode:"password"},Me={text:"Remember me",elementAttr:{class:"form-text"}},_e=(n(660),function(e){var t=Object(A.g)(),n=Object(c.useState)(!1),a=Object(u.a)(n,2),r=a[0],s=a[1],o=Object(c.useRef)({}),l=Object(c.useCallback)(function(){var e=Object(O.a)(x.a.mark((function e(n){var c,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),c=o.current.email,s(!0),e.next=5,N(c);case 5:a=e.sent,s(!1),a.isOk?(t.push("/login"),Object(Ce.a)("We've sent a link to reset your password. Check your inbox.","success",2500)):Object(Ce.a)(a.message,"error",2e3);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(j.jsx)("form",{className:"reset-password-form",onSubmit:l,children:Object(j.jsxs)(K.a,{formData:o.current,disabled:r,children:[Object(j.jsxs)(Y.Item,{dataField:"email",editorType:"dxTextBox",editorOptions:Ne,children:[Object(j.jsx)(Y.RequiredRule,{message:"Email is required"}),Object(j.jsx)(Y.EmailRule,{message:"Email is invalid"}),Object(j.jsx)(Y.Label,{visible:!1})]}),Object(j.jsx)(Y.ButtonItem,{children:Object(j.jsx)(Y.ButtonOptions,{elementAttr:Se,width:"100%",type:"default",useSubmitBehavior:!0,children:Object(j.jsx)("span",{className:"dx-button-text",children:r?Object(j.jsx)(ge.a,{width:"24px",height:"24px",visible:!0}):"Reset my password"})})}),Object(j.jsx)(Y.Item,{children:Object(j.jsxs)("div",{className:"login-link",children:["Return to ",Object(j.jsx)(i.b,{to:"/login",children:"Sign In"})]})})]})})}),Ne={stylingMode:"filled",placeholder:"Email",mode:"email"},Se={class:"submit-button"},Fe=(n(661),function(e){var t=Object(A.g)(),n=Object(c.useState)(!1),a=Object(u.a)(n,2),r=a[0],s=a[1],o=Object(c.useRef)({}),l=Object(c.useCallback)(function(){var e=Object(O.a)(x.a.mark((function e(n){var c,a,r,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),c=o.current,a=c.email,r=c.password,s(!0),e.next=5,k(a,r);case 5:i=e.sent,s(!1),i.isOk?t.push("/login"):Object(Ce.a)(i.message,"error",2e3);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),d=Object(c.useCallback)((function(e){return e.value===o.current.password}),[]);return Object(j.jsx)("form",{className:"create-account-form",onSubmit:l,children:Object(j.jsxs)(K.a,{formData:o.current,disabled:r,children:[Object(j.jsxs)(Y.Item,{dataField:"email",editorType:"dxTextBox",editorOptions:Te,children:[Object(j.jsx)(Y.RequiredRule,{message:"Email is required"}),Object(j.jsx)(Y.EmailRule,{message:"Email is invalid"}),Object(j.jsx)(Y.Label,{visible:!1})]}),Object(j.jsxs)(Y.Item,{dataField:"password",editorType:"dxTextBox",editorOptions:De,children:[Object(j.jsx)(Y.RequiredRule,{message:"Password is required"}),Object(j.jsx)(Y.Label,{visible:!1})]}),Object(j.jsxs)(Y.Item,{dataField:"confirmedPassword",editorType:"dxTextBox",editorOptions:Ee,children:[Object(j.jsx)(Y.RequiredRule,{message:"Password is required"}),Object(j.jsx)(Y.CustomRule,{message:"Passwords do not match",validationCallback:d}),Object(j.jsx)(Y.Label,{visible:!1})]}),Object(j.jsx)(Y.Item,{children:Object(j.jsxs)("div",{className:"policy-info",children:["By creating an account, you agree to the ",Object(j.jsx)(i.b,{to:"#",children:"Terms of Service"})," and ",Object(j.jsx)(i.b,{to:"#",children:"Privacy Policy"})]})}),Object(j.jsx)(Y.ButtonItem,{children:Object(j.jsx)(Y.ButtonOptions,{width:"100%",type:"default",useSubmitBehavior:!0,children:Object(j.jsx)("span",{className:"dx-button-text",children:r?Object(j.jsx)(ge.a,{width:"24px",height:"24px",visible:!0}):"Create a new account"})})}),Object(j.jsx)(Y.Item,{children:Object(j.jsxs)("div",{className:"login-link",children:["Have an account? ",Object(j.jsx)(i.b,{to:"/login",children:"Sign In"})]})})]})})}),Te={stylingMode:"filled",placeholder:"Email",mode:"email"},De={stylingMode:"filled",placeholder:"Password",mode:"password"},Ee={stylingMode:"filled",placeholder:"Confirm Password",mode:"password"},Pe=function(e){var t=Object(A.g)(),n=Object(c.useState)(!1),a=Object(u.a)(n,2),r=a[0],s=a[1],i=Object(c.useRef)({}),o=Object(A.h)().recoveryCode,l=Object(c.useCallback)(function(){var e=Object(O.a)(x.a.mark((function e(n){var c,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),c=i.current.password,s(!0),e.next=5,M(c,o);case 5:a=e.sent,s(!1),a.isOk?t.push("/login"):Object(Ce.a)(a.message,"error",2e3);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t,o]),d=Object(c.useCallback)((function(e){return e.value===i.current.password}),[]);return Object(j.jsx)("form",{onSubmit:l,children:Object(j.jsxs)(K.a,{formData:i.current,disabled:r,children:[Object(j.jsxs)(Y.Item,{dataField:"password",editorType:"dxTextBox",editorOptions:Re,children:[Object(j.jsx)(Y.RequiredRule,{message:"Password is required"}),Object(j.jsx)(Y.Label,{visible:!1})]}),Object(j.jsxs)(Y.Item,{dataField:"confirmedPassword",editorType:"dxTextBox",editorOptions:He,children:[Object(j.jsx)(Y.RequiredRule,{message:"Password is required"}),Object(j.jsx)(Y.CustomRule,{message:"Passwords do not match",validationCallback:d}),Object(j.jsx)(Y.Label,{visible:!1})]}),Object(j.jsx)(Y.ButtonItem,{children:Object(j.jsx)(Y.ButtonOptions,{width:"100%",type:"default",useSubmitBehavior:!0,children:Object(j.jsx)("span",{className:"dx-button-text",children:r?Object(j.jsx)(ge.a,{width:"24px",height:"24px",visible:!0}):"Continue"})})})]})})},Re={stylingMode:"filled",placeholder:"Password",mode:"password"},He={stylingMode:"filled",placeholder:"Confirm Password",mode:"password"},Ie=n(408),Le=n.n(Ie),Ve=[{text:"Presentaci\xf3n",path:"/home",icon:"home"},{text:"Estudios",path:"/studies",icon:"tags"},{text:"Software",icon:"floppy",items:[{text:"Frontend",path:"/profile"},{text:"Backend",path:"/tasks"}]},{text:"Dise\xf1o",icon:"edit",items:[{text:"Web",path:"/profile_"},{text:"Corporativo",path:"/tasks_"}]},{text:"Contacto",path:"/contact",icon:"email"}],Be=(n(662),n(228)),ze=function(e){var t=e.children,n=e.selectedItemChanged,a=e.openMenu,r=e.compactMode,s=e.onMenuReady,i=E().isLarge;var o=Object(c.useMemo)((function(){return Ve.map((function(e){return e.path&&!/^\//.test(e.path)&&(e.path="/".concat(e.path)),Object(d.a)(Object(d.a)({},e),{},{expanded:i})}))}),[]),l=h().navigationData.currentPath,u=Object(c.useRef)(),b=Object(c.useRef)(),p=Object(c.useCallback)((function(e){var t=b.current;t&&Be.off(t,"dxclick"),b.current=e,Be.on(e,"dxclick",(function(e){a(e)}))}),[a]);return Object(c.useEffect)((function(){var e=u.current&&u.current.instance;e&&(void 0!==l&&(e.selectItem(l),e.expandItem(l)),r&&e.collapseAll())}),[l,r]),Object(j.jsxs)("div",{className:"dx-swatch-additional side-navigation-menu",ref:p,children:[t,Object(j.jsx)("div",{className:"menu-container",children:Object(j.jsx)(Le.a,{ref:u,items:o,keyExpr:"path",selectionMode:"single",focusStateEnabled:!1,expandEvent:"click",onItemClick:n,onContentReady:s,width:"100%"})})]})};n(663);function Ae(){var e=E(),t=e.isSmall,n=e.isMedium,a=Object(c.useState)(t||n),r=Object(u.a)(a,2),s=r[0],i=r[1],o=Object(c.useCallback)((function(){s&&setTimeout((function(){return i(!1)}))}),[s]);return[s?"pre-init-blink-fix":"",o]}var Ge=function(e){var t=e.title,n=e.children,r=Object(c.useRef)(),s=Object(A.g)(),i=E(),o=i.isXSmall,l=i.isLarge,d=Ae(),b=Object(u.a)(d,2),h=b[0],p=b[1],m=Object(c.useState)(l?qe.Opened:qe.Closed),x=Object(u.a)(m,2),O=x[0],f=x[1],v=Object(c.useCallback)((function(e){var t=e.event;f((function(e){return e===qe.Closed?qe.Opened:qe.Closed})),t.stopPropagation()}),[]),g=Object(c.useCallback)((function(){f((function(e){return e===qe.Closed?qe.TemporaryOpened:e}))}),[]),C=Object(c.useCallback)((function(){f((function(e){return e===qe.Closed||l?e:qe.Closed}))}),[l]),w=Object(c.useCallback)((function(e){var t=e.itemData.path,n=e.event,c=e.node;O!==qe.Closed&&t&&!c.selected?(s.push(t),r.current.instance.scrollTo(0),l&&O!==qe.TemporaryOpened||(f(qe.Closed),n.stopPropagation())):n.preventDefault()}),[s,O,l]);return Object(j.jsxs)("div",{className:"side-nav-outer-toolbar",children:[Object(j.jsx)(Oe,{className:"layout-header",menuToggleEnabled:!0,toggleMenu:v,title:t}),Object(j.jsxs)(re.a,{className:["drawer",h].join(" "),position:"before",closeOnOutsideClick:C,openedStateMode:l?"shrink":"overlap",revealMode:o?"slide":"expand",minSize:o?0:60,maxSize:250,shading:!l,opened:O!==qe.Closed,template:"menu",children:[Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(ie.a,{ref:r,className:"layout-body with-footer",children:[Object(j.jsx)("div",{className:"content",children:a.a.Children.map(n,(function(e){return e.type!==fe&&e}))}),Object(j.jsx)("div",{className:"content-block",children:a.a.Children.map(n,(function(e){return e.type===fe&&e}))})]})}),Object(j.jsx)(xe.Template,{name:"menu",children:Object(j.jsx)(ze,{compactMode:O===qe.Closed,selectedItemChanged:w,openMenu:g,onMenuReady:p})})]})]})},qe={Closed:1,Opened:2,TemporaryOpened:3},Ze=(n(664),n(665),function(e){var t=e.title,n=e.description,c=e.children;return Object(j.jsx)(ie.a,{height:"100%",width:"100%",className:"with-footer single-card",children:Object(j.jsxs)("div",{className:"dx-card content",children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("div",{className:"title",children:t}),Object(j.jsx)("div",{className:"description",children:n})]}),c]})})}),We=function(){return Object(j.jsxs)(Ge,{title:G,children:[Object(j.jsxs)(A.d,{children:[ce.map((function(e){var t=e.path,n=e.component;return Object(j.jsx)(A.b,{exact:!0,path:t,component:n},t)})),Object(j.jsx)(A.a,{to:"/home"})]}),Object(j.jsxs)(fe,{children:["Copyright \xa9 2018-",(new Date).getFullYear()," ",G," Inc."]})]})},Ue=function(){return Object(j.jsxs)(A.d,{children:[Object(j.jsx)(A.b,{exact:!0,path:"/login",children:Object(j.jsx)(Ze,{title:"Sign In",children:Object(j.jsx)(we,{})})}),Object(j.jsx)(A.b,{exact:!0,path:"/create-account",children:Object(j.jsx)(Ze,{title:"Sign Up",children:Object(j.jsx)(Fe,{})})}),Object(j.jsx)(A.b,{exact:!0,path:"/reset-password",children:Object(j.jsx)(Ze,{title:"Reset Password",description:"Please enter the email address that you used to register, and we will send you a link to reset your password via Email.",children:Object(j.jsx)(_e,{})})}),Object(j.jsx)(A.b,{exact:!0,path:"/change-password/:recoveryCode",children:Object(j.jsx)(Ze,{title:"Change Password",children:Object(j.jsx)(Pe,{})})}),Object(j.jsx)(A.a,{to:"/login"})]})};function Je(){var e=D(),t=e.user;return e.loading?Object(j.jsx)(l.a,{visible:!0}):t?Object(j.jsx)(We,{}):Object(j.jsx)(Ue,{})}var Xe=function(){var e=function(){var e=E();return e.isLarge?"screen-large":e.isMedium?"screen-medium":e.isSmall?"screen-small":"screen-x-small"}();return Object(j.jsx)(i.a,{children:Object(j.jsx)(F,{children:Object(j.jsx)(p,{children:Object(j.jsx)("div",{className:"app ".concat(e),children:Object(j.jsx)(Je,{})})})})})},Ye=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,670)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(Xe,{})}),document.getElementById("root")),Ye()}},[[667,1,2]]]);
//# sourceMappingURL=main.fad3c9ce.chunk.js.map