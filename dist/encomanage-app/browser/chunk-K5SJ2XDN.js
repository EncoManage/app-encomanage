import{A as jt,a as ht,b as Ct,c as q,d as w,e as bt,g as xt,h as D,i as I,k as vt,l as _t,m as Mt,n as yt,t as St,u as Et,v as Pt,w as wt,x as Dt,y as It,z as kt}from"./chunk-ZRSGEIIS.js";import{U as P}from"./chunk-IAGDSATT.js";import{A as U,B as X,a as pt,h as M,j as y,l as S,m as R,p as ft,q as B,r as H,s as Y,u as L,v as ut,x as gt,z as E}from"./chunk-BEAOGL5K.js";import"./chunk-AESYL7IM.js";import{$b as V,Ab as a,Bb as r,Cb as f,Db as G,Gb as g,Gc as lt,Hc as mt,Ib as T,Ic as ct,Kc as N,Lb as at,Lc as dt,Qb as W,Rb as s,Sb as $,Tb as _,Ua as et,Ub as J,Vb as K,Wb as Q,Xa as l,Ya as p,_b as st,ac as A,ba as Z,ca as F,ga as tt,ha as z,la as v,ma as O,ob as h,qb as m,ta as b,ua as x,vb as it,wb as nt,yb as rt,zb as ot}from"./chunk-E7TWR5JV.js";var k=(()=>{let t=class t{constructor(n){this.http=n,this.baseUrl=Ct.apiUrl}getAllChats(n){let i=`${this.baseUrl}/cuentas/chats/${n}`;return this.http.get(i)}getChatById(n){let i=`${this.baseUrl}/chats/${n}`;return this.http.get(i)}registerChat(n){let i=`${this.baseUrl}/chats`;return this.http.post(i,n)}};t.\u0275fac=function(i){return new(i||t)(tt(pt))},t.\u0275prov=Z({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function Gt(e,t){if(e&1){let c=G();a(0,"mat-card",13)(1,"mat-card-header",14)(2,"mat-card-title",15),s(3),r(),a(4,"mat-card-subtitle",16),s(5),r(),a(6,"mat-card-subtitle",16),s(7),r()(),f(8,"img",17),a(9,"mat-card-content",18)(10,"p",19),s(11),V(12,"date"),r()(),a(13,"mat-card-actions",20)(14,"button",21),g("click",function(){b(c);let i=T(2);return x(i.viewChatDetails())}),s(15,"Ver Detalles"),r()()()}if(e&2){let c=t.$implicit,n=T(2);l(3),_("Chat ",c.id,""),l(2),_("Para: ",c.toAccount,""),l(2),_("Tipo: ",c.type,""),l(),m("src",n.getChatImage(c.type),et),l(3),_(" Fecha: ",A(12,5,c.date,"MM-dd-YYYY")," ")}}function Wt(e,t){if(e&1&&(a(0,"div",12),rt(1,Gt,16,8,"mat-card",13,nt),r()),e&2){let c=T();l(),ot(c.filteredChats)}}function $t(e,t){e&1&&(a(0,"p"),s(1,"No hay chats creados."),r())}var Bt=(()=>{let t=class t{constructor(n){this.router=n,this.userFullName="",this.chats=[],this.filteredChats=[],this.startDate=null,this.endDate=null,this.proveedorImage="../assets/chatProv.jpg",this.clienteImage="../assets/chatback.png",this.mensajesService=z(k),this.authService=z(q),this.loginResponse=this.authService.getLoginResponse()}ngOnInit(){let n=this.authService.getLoginResponse();if(n&&this.authService.isLoggedIn()){let{name:i}=n.user;this.userFullName=`${i}`}this.loginResponse&&(this.loadChats(this.loginResponse.user.id),this.getChatData(this.loginResponse.user.id))}loadChats(n){this.mensajesService.getAllChats(n).subscribe({next:i=>{this.chats=i,this.filteredChats=i,console.log("Cuentas del cliente:",i)},error:i=>{console.error("Error al cargar cuentas del cliente:",i)}})}getChatData(n){this.mensajesService.getAllChats(n).subscribe(i=>{this.chats=i,this.filteredChats=i,console.log("Chats obtenidos:",i)},i=>{console.error("Error al obtener los chats:",i)})}applyDateFilter(){if(this.startDate&&this.endDate){let n=new Date(this.startDate).setHours(0,0,0,0),i=new Date(this.endDate).setHours(23,59,59,999);this.filteredChats=this.chats.filter(o=>{let d=new Date(o.date).getTime();return d>=n&&d<=i})}else this.filteredChats=this.chats}showAllChats(){this.filteredChats=this.chats,this.startDate=null,this.endDate=null}viewChatDetails(){this.router.navigate(["/detalle-chat"])}addNewChat(){this.router.navigate(["/mensajes/agregar-chat"])}getChatImage(n){return n==="proveedor"?this.proveedorImage:n==="cliente"?this.clienteImage:"../assets/open.png"}};t.\u0275fac=function(i){return new(i||t)(p(E))},t.\u0275cmp=v({type:t,selectors:[["app-mensajes"]],decls:30,vars:8,consts:[["startPicker",""],["endPicker",""],[1,"container"],[1,"container-top"],[1,"titulo"],[1,"container-bottom"],[1,"subtitulo"],[1,"date-range"],["appearance","fill",1,"datepicker"],["matInput","",3,"ngModelChange","matDatepicker","ngModel"],["matSuffix","",3,"for"],["mat-raised-button","",1,"custom-button",3,"click"],[1,"card-container"],[1,"example-card"],[1,"card-header"],[1,"title"],[1,"subtitle"],["mat-card-image","","alt","Imagen de ejemplo",3,"src"],[1,"card-info"],[1,"chat-info"],[1,"card-actions"],["mat-button","",1,"primary-button",3,"click"]],template:function(i,o){if(i&1){let d=G();a(0,"div",2)(1,"div",3)(2,"h1",4),s(3),r()(),a(4,"div",5)(5,"h2",6),s(6,"Historial de chats"),r(),a(7,"div",7)(8,"mat-form-field",8)(9,"mat-label"),s(10,"Chats desde MM-dd-YYYY"),r(),a(11,"input",9),Q("ngModelChange",function(C){return b(d),K(o.startDate,C)||(o.startDate=C),x(C)}),r(),f(12,"mat-datepicker-toggle",10)(13,"mat-datepicker",null,0),r(),a(15,"mat-form-field",8)(16,"mat-label"),s(17,"Chats hasta MM-dd-YYYY"),r(),a(18,"input",9),Q("ngModelChange",function(C){return b(d),K(o.endDate,C)||(o.endDate=C),x(C)}),r(),f(19,"mat-datepicker-toggle",10)(20,"mat-datepicker",null,1),r(),a(22,"button",11),g("click",function(){return b(d),x(o.applyDateFilter())}),s(23,"Filtrar"),r(),a(24,"button",11),g("click",function(){return b(d),x(o.showAllChats())}),s(25,"Todos"),r(),a(26,"button",11),g("click",function(){return b(d),x(o.addNewChat())}),s(27,"Nuevo chat"),r()(),h(28,Wt,3,0,"div",12)(29,$t,2,0,"p"),r()()}if(i&2){let d=W(14),u=W(21);l(3),_("Bienvenido a la secci\xF3n de chats, ",o.userFullName,""),l(8),m("matDatepicker",d),J("ngModel",o.startDate),l(),m("for",d),l(6),m("matDatepicker",u),J("ngModel",o.endDate),l(),m("for",u),l(9),it(o.filteredChats.length>0?28:29)}},dependencies:[vt,_t,Mt,P,D,w,xt,I,M,S,St,Dt,Pt,It,kt,wt,Et,ft,N],styles:[".container[_ngcontent-%COMP%]{justify-content:center;align-items:center;height:100vh;padding:20px;font-family:Poppins,sans-serif;background-color:#fff9f2}.container-top[_ngcontent-%COMP%]{max-width:100%;margin:0 auto;padding-top:20px;padding-bottom:5px;background-color:#fff9f2}.titulo[_ngcontent-%COMP%]{color:#f6a13c;font-family:Poppins,sans-serif;font-weight:800;font-style:normal;font-size:32px;text-align:center;margin-bottom:0}.subtitulo[_ngcontent-%COMP%]{color:#1e3a8a;font-family:Poppins,sans-serif;font-weight:500;font-style:normal;font-size:32px;text-align:center;margin-bottom:40px}.container-bottom[_ngcontent-%COMP%]{max-width:100%;margin:0 auto;padding-top:20px;padding-bottom:20px;background-color:#fff9f2;justify-content:center;flex-direction:column;align-items:center}.custom-button[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;background-color:#f6a13c;color:#fff9f2;font-size:16px;width:15%;height:50px}.custom-button[_ngcontent-%COMP%]:hover{background-color:#d98829}.date-range[_ngcontent-%COMP%]{display:flex;gap:20px;margin-bottom:20px;text-align:center;align-items:center;justify-content:center}.datepicker[_ngcontent-%COMP%]{width:100%}.card-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:30px;justify-content:space-between}.mat-card[_ngcontent-%COMP%]{width:100%;max-width:250px;box-shadow:0 4px 8px #0000001a;border-radius:10%;overflow:hidden}.title[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-weight:500;font-style:normal;font-size:16px;color:#1e3a8a}.subtitle[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-weight:300;font-style:normal;font-size:16px;color:#1e3a8a;margin-bottom:10px}.card-header[_ngcontent-%COMP%], .card-actions[_ngcontent-%COMP%], .card-info[_ngcontent-%COMP%]{background-color:#f6a13c}.chat-info[_ngcontent-%COMP%]{font-size:.9rem;color:#1e3a8a;margin-bottom:1rem}.card-actions[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:8px;background-color:#ffd5a5}.card-actions[_ngcontent-%COMP%]   button.primary-button[_ngcontent-%COMP%]{color:#fff9f2;background-color:#1e3a8a}.card-actions[_ngcontent-%COMP%]   button.primary-button[_ngcontent-%COMP%]:hover{background-color:#1e3a8a}@media (max-width: 768px){.card-container[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fill,minmax(200px,1fr))}}@media (max-width: 576px){.card-container[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fill,minmax(150px,1fr))}}"]});let e=t;return e})();var Jt=(e,t)=>({user:e,system:t});function Kt(e,t){if(e&1&&(a(0,"div",8),V(1,"date"),a(2,"span",9),s(3),r(),s(4,": "),a(5,"span",10),s(6),r()()),e&2){let c=t.$implicit;at("matTooltip",A(1,4,c.timestamp,"short")),m("ngClass",st(7,Jt,c.isUserMessage,!c.isUserMessage)),l(3),$(c.sender),l(3),$(c.text)}}var Ht=(()=>{let t=class t{constructor(n,i,o,d){this.fb=n,this.route=i,this.router=o,this.mensajesService=d,this.messages=[],this.chatForm=this.fb.group({message:["",y.required]}),this.messages.push({text:"Hola :)",sender:"Proveedor/Cliente",timestamp:new Date,isUserMessage:!1},{text:"Tengo una consulta",sender:"User",timestamp:new Date,isUserMessage:!1})}sendMessage(){this.chatForm.valid&&(this.messages.push({text:this.chatForm.value.message,sender:"Usuario",timestamp:new Date,isUserMessage:!0}),this.chatForm.reset())}};t.\u0275fac=function(i){return new(i||t)(p(L),p(gt),p(E),p(k))},t.\u0275cmp=v({type:t,selectors:[["app-detalle-chat"]],decls:12,vars:3,consts:[[1,"chat-container"],[1,"messages"],["class","message",3,"ngClass","matTooltip",4,"ngFor","ngForOf"],[1,"chat-form",3,"ngSubmit","formGroup"],[1,"message-input"],["matInput","","formControlName","message","placeholder","Escribe un mensaje"],["mat-raised-button","","type","submit",1,"send-button",3,"disabled"],["mat-raised-button","","type","button","routerLink","/mensajes",1,"custom-button"],[1,"message",3,"ngClass","matTooltip"],[1,"sender"],[1,"text"]],template:function(i,o){i&1&&(a(0,"div",0)(1,"div",1),h(2,Kt,7,10,"div",2),r(),a(3,"form",3),g("ngSubmit",function(){return o.sendMessage()}),a(4,"mat-form-field",4)(5,"mat-label"),s(6,"Mensaje"),r(),f(7,"input",5),r(),a(8,"button",6),s(9,"Enviar"),r(),a(10,"button",7),s(11,"Volver"),r()()()),i&2&&(l(2),m("ngForOf",o.messages),l(),m("formGroup",o.chatForm),l(5),m("disabled",o.chatForm.invalid))},dependencies:[lt,mt,U,P,D,w,I,B,M,S,R,H,Y,yt,N],styles:[".chat-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;max-width:600px;margin:0 auto;border:1px solid #FBB768;padding:20px;background-color:#fff9f2}.messages[_ngcontent-%COMP%]{flex:1;overflow-y:auto;margin-bottom:20px;font-family:Poppins,sans-serif}.message[_ngcontent-%COMP%]{margin:10px 0;padding:10px;border-radius:5px;background-color:#ffd5a5;display:flex;align-items:center;font-family:Poppins,sans-serif}.message.user[_ngcontent-%COMP%]{background-color:#ffd5a5;align-self:flex-end}.message.system[_ngcontent-%COMP%]{background-color:#e8e0d7;align-self:flex-start}.message[_ngcontent-%COMP%]   .sender[_ngcontent-%COMP%]{font-weight:700;margin-right:5px}.chat-form[_ngcontent-%COMP%]{display:flex;flex-direction:row}.message-input[_ngcontent-%COMP%]{flex:1;margin-right:10px}.send-button[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;background-color:#f6a13c;color:#fff9f2;font-size:16px;width:auto;height:50px;margin:0 8px}.send-button[_ngcontent-%COMP%]:hover{background-color:#d98829}.custom-button[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;background-color:#1e3a8a;color:#fff9f2;font-size:16px;width:auto;height:50px;margin:0 8px}.custom-button[_ngcontent-%COMP%]:hover{background-color:#d98829}"]});let e=t;return e})();var Yt=e=>{let t=e.value;return t&&!/^\d{2}-\d{2}-\d{4}$/.test(t)?{invalidDateFormat:!0}:null},Lt=e=>{let t=e.value;if(t){let[c,n,i]=t.split("-").map(Number);if(c<1||c>12)return{invalidMonth:!0};if(n<1||n>31)return{invalidDay:!0};if(i<2e3||i>2024)return{invalidYear:!0}}return null},Ut=e=>{let t=e.value;return t!=="proveedor"&&t!=="cliente"&&t!=="Proveedor"&&t!=="Cliente"?{invalidChatType:!0}:null};function Qt(e,t){e&1&&(a(0,"mat-error"),s(1," Este campo es obligatorio "),r())}function Xt(e,t){e&1&&(a(0,"mat-error"),s(1," Este campo es obligatorio "),r())}function Zt(e,t){e&1&&(a(0,"mat-error"),s(1," Debe ingresar el valor Proveedor o Cliente "),r())}function te(e,t){e&1&&(a(0,"mat-error"),s(1," Este campo es obligatorio "),r())}function ee(e,t){e&1&&(a(0,"mat-error"),s(1," El formato de fecha es incorrecto, debe ser fecha mes-dia-a\xF1o "),r())}function ie(e,t){e&1&&(a(0,"mat-error"),s(1," El mes debe existir "),r())}function ne(e,t){e&1&&(a(0,"mat-error"),s(1," El dia debe existir "),r())}function re(e,t){e&1&&(a(0,"mat-error"),s(1," El a\xF1o debe ser valido "),r())}var qt=(()=>{let t=class t{constructor(n,i,o,d,u){this.fb=n,this.router=i,this.mensajesService=o,this.authService=d,this.snackBar=u,this.form=this.fb.group({toAccount:["",[y.required]],type:["",[y.required,Ut]],date:["",[y.required,Yt,Lt]]}),this.loginResponse=this.authService.getLoginResponse()}ngOnInit(){}controlHasError(n,i){return this.form.controls[n].hasError(i)}onSubmit(){if(this.form.invalid||!this.loginResponse)return;let n=this.form.value,i={id:0,toAccount:n.toAccount,date:n.date,type:n.type,cuentaId:this.loginResponse.user.id};this.mensajesService.registerChat(i).subscribe({next:o=>{this.router.navigate(["/mensajes"]),this.showSnackBar("Chat registrado exitosamente")},error:o=>{console.error("Error al registrar chat:",o),this.showSnackBar("Error al registrar chat. Por favor, intente de nuevo.")}})}showSnackBar(n){this.snackBar.open(n,"Cerrar",{duration:3e3})}};t.\u0275fac=function(i){return new(i||t)(p(L),p(E),p(k),p(q),p(ht))},t.\u0275cmp=v({type:t,selectors:[["app-agregar-chat"]],decls:32,vars:10,consts:[[1,"container"],[1,"titulo"],[1,"row","justify-content-center","my-5"],[1,"col-md-6","col-lg-4"],["autocomplete","off",1,"mt-5",3,"ngSubmit","formGroup"],[1,"form-group"],["appearance","outline",1,"mb-2","w-100"],["matInput","","formControlName","toAccount","placeholder","Ingrese el nombre del Receptor"],[4,"ngIf"],["matInput","","formControlName","type","placeholder","Ingrese el tipo de chat"],["matInput","","formControlName","date","placeholder","Ingrese la fecha del uso de chat:"],[1,"button-container"],["mat-raised-button","","type","button","routerLink","/mensajes",1,"custom-button"],["mat-raised-button","","type","submit",1,"custom-button",3,"disabled"]],template:function(i,o){i&1&&(a(0,"div",0)(1,"h1",1),s(2,"Agregar Chat"),r(),a(3,"div",2)(4,"div",3)(5,"form",4),g("ngSubmit",function(){return o.onSubmit()}),a(6,"div",5)(7,"mat-form-field",6)(8,"mat-label"),s(9,"Receptor"),r(),f(10,"input",7),h(11,Qt,2,0,"mat-error",8),r(),a(12,"mat-form-field",6)(13,"mat-label"),s(14,"Tipo"),r(),f(15,"input",9),h(16,Xt,2,0,"mat-error",8)(17,Zt,2,0,"mat-error",8),r(),a(18,"mat-form-field",6)(19,"mat-label"),s(20,"Fecha"),r(),f(21,"input",10),h(22,te,2,0,"mat-error",8)(23,ee,2,0,"mat-error",8)(24,ie,2,0,"mat-error",8)(25,ne,2,0,"mat-error",8)(26,re,2,0,"mat-error",8),r()(),a(27,"div",11)(28,"button",12),s(29," Cancelar "),r(),a(30,"button",13),s(31," Agregar "),r()()()()()()),i&2&&(l(5),m("formGroup",o.form),l(6),m("ngIf",o.controlHasError("toAccount","required")),l(5),m("ngIf",o.controlHasError("type","required")),l(),m("ngIf",o.controlHasError("type","invalidChatType")&&!o.controlHasError("type","required")),l(5),m("ngIf",o.controlHasError("date","required")),l(),m("ngIf",o.controlHasError("date","invalidDateFormat")&&!o.controlHasError("date","required")),l(),m("ngIf",o.controlHasError("date","invalidMonth")&&!o.controlHasError("date","required")),l(),m("ngIf",o.controlHasError("date","invalidDay")&&!o.controlHasError("date","required")),l(),m("ngIf",o.controlHasError("date","invalidYear")&&!o.controlHasError("date","required")),l(4),m("disabled",!o.form.valid))},dependencies:[ct,U,P,D,w,bt,I,B,M,S,R,H,Y],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#fff9f2;padding:20px;font-family:Poppins,sans-serif}.titulo[_ngcontent-%COMP%]{color:#f6a13c;font-family:Poppins,sans-serif;font-weight:800;font-style:normal;font-size:32px;text-align:center;margin-bottom:0}.form-group[_ngcontent-%COMP%]{margin-top:8%;display:flex;flex-direction:column;width:100%;align-items:center}.form-group[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-bottom:10%;width:100%;max-width:800px}.custom-button[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;background-color:#f6a13c;color:#fff9f2;font-size:16px;width:auto;height:50px;margin:0 8px}.custom-button[_ngcontent-%COMP%]:hover{background-color:#d98829}.button-container[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:8%}"]});let e=t;return e})();var oe=[{path:"",component:Bt},{path:"detalle-chat",component:Ht},{path:"agregar-chat",component:qt}],zt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=O({type:t}),t.\u0275inj=F({imports:[X.forChild(oe),X]});let e=t;return e})();var Be=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=O({type:t}),t.\u0275inj=F({imports:[dt,zt,jt,ut]});let e=t;return e})();export{Be as MensajesModule};
