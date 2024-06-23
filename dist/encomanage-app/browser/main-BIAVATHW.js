import{a as ee}from"./chunk-OTE6ROX5.js";import{A as ae,a as $,c as k,j as te,o as ne,p as oe,q as ie,r as re}from"./chunk-ZRSGEIIS.js";import{a as se}from"./chunk-DLTQNAOM.js";import{a as O}from"./chunk-F7FTCMIQ.js";import{U as Q}from"./chunk-IAGDSATT.js";import{A as K,B as I,b as Z,c as q,d as W,e as X,v as Y,y as J,z as g}from"./chunk-BEAOGL5K.js";import"./chunk-AESYL7IM.js";import{$a as j,Ab as r,Bb as a,Cb as d,Db as L,Gb as p,Ia as D,Ib as P,Ic as U,Qb as E,Rb as c,Xa as f,Ya as u,Za as T,_ as A,ba as N,bb as B,ca as _,db as z,eb as H,ha as v,la as m,ma as x,oa as R,ob as V,qb as y,sb as w,ta as C,ua as M,zc as G}from"./chunk-E7TWR5JV.js";var le=(()=>{let e=class e{constructor(n,t,s){this.router=n,this.snackBar=t,this.orderService=s,this.selectedProfile=null,this.newOrder={shipping_address:"",pickup_address:"",express_shipping:!1,tipo_encomienda:"",price:0,instrucciones:""},this.orderService.setOrder(this.newOrder)}OnInit(){this.orderService.setOrder(this.newOrder)}selectProfile(n){this.selectedProfile=n}navigate(){this.selectedProfile==="consumer"?(this.router.navigate(["/menus/consumidor"]),this.showSnackBar("Se seleccion\xF3 el perfil Consumidor.")):this.selectedProfile==="business"?(this.router.navigate(["/menus/empresa"]),this.showSnackBar("Se seleccion\xF3 el perfil Empresa.")):this.showSnackBar("Por favor, seleccione un perfil antes de continuar. Esto nos ayudar\xE1 a personalizar tu experiencia en la plataforma seg\xFAn tus necesidades y preferencias. \xA1Gracias!")}showSnackBar(n){this.snackBar.open(n,"Cerrar",{duration:3e3})}};e.\u0275fac=function(t){return new(t||e)(u(g),u($),u(O))},e.\u0275cmp=m({type:e,selectors:[["app-home"]],decls:26,vars:4,consts:[[1,"container"],[1,"left-side"],["src","..\\assets\\parcelapp.png","alt","Ilustraci\xF3n"],[1,"right-side"],[1,"profile-selection"],[1,"profiles"],[1,"profile-option",3,"click"],["src","..\\assets\\shipping2.png","alt","Consumidor individual"],[1,"profile-text"],["src","..\\assets\\shipping1.png","alt","Empresa de e-commerce"],[1,"select-button",3,"click"]],template:function(t,s){t&1&&(r(0,"div",0)(1,"div",1),d(2,"img",2),a(),r(3,"div",3)(4,"div",4)(5,"h2"),c(6,"Selecci\xF3n de perfil"),a(),r(7,"p"),c(8,"\xA1Ahora ya eres miembro de Encomanage! Seleccione uno de nuestros perfiles para brindarte servicios m\xE1s personalizados"),a(),r(9,"div",5)(10,"div",6),p("click",function(){return s.selectProfile("consumer")}),d(11,"img",7),r(12,"div",8)(13,"h3"),c(14,"Consumidor individual"),a(),r(15,"p"),c(16,"Obt\xE9n acceso r\xE1pido para enviar y rastrear tus paquetes de manera f\xE1cil y segura. Recibe notificaciones en tiempo real sobre el estado de tus env\xEDos y gestiona tus entregas de acuerdo a tus preferencias."),a()()(),r(17,"div",6),p("click",function(){return s.selectProfile("business")}),d(18,"img",9),r(19,"div",8)(20,"h3"),c(21,"Empresa de e-commerce"),a(),r(22,"p"),c(23,"Aprovecha herramientas avanzadas para simplificar y optimizar tus operaciones de env\xEDo. Gestiona grandes cantidades de env\xEDos con facilidad desde la programaci\xF3n hasta el seguimiento y la entrega. Obt\xE9n descuentos exclusivos para hacer crecer tu negocio."),a()()()(),r(24,"button",10),p("click",function(){return s.navigate()}),c(25," Seleccionar "),a()()()()),t&2&&(f(10),w("selected",s.selectedProfile==="consumer"),f(7),w("selected",s.selectedProfile==="business"))},styles:[".left-side[_ngcontent-%COMP%]{background-color:#f6a13c;flex:1;display:flex;justify-content:center;align-items:center}.left-side[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:80%;height:auto}.container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;background-color:#f6a13c;padding:20px;box-sizing:border-box;font-family:Poppins,sans-serif}.profile-selection[_ngcontent-%COMP%]{background-color:#fff9f2;padding:20px;border-radius:8px;box-shadow:0 4px 8px #0000001a;width:96.7%}.right-side[_ngcontent-%COMP%]{flex:1;background-color:#fff9f2;display:flex;flex-direction:column}.back-button[_ngcontent-%COMP%]{margin-bottom:20px}.back-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;border:none;font-size:20px;cursor:pointer}h2[_ngcontent-%COMP%]{color:#1e3a8a;margin-bottom:10px;font-family:Poppins,sans-serif}p[_ngcontent-%COMP%]{color:#131313;margin-bottom:20px}.profiles[_ngcontent-%COMP%]{display:flex;flex-direction:column}.profile-option[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:#fff9f2;padding:15px;margin-bottom:10px;border-radius:5px;cursor:pointer;transition:background-color .3s;font-family:Poppins,sans-serif}.profile-option[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:100px;margin-right:15px}.profile-option[_ngcontent-%COMP%]   .profile-text[_ngcontent-%COMP%]{display:flex;flex-direction:column}.profile-option[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;margin-top:0;margin-bottom:5px;color:#1e3a8a;font-size:16px;font-weight:600;font-style:normal}.profile-option[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#1e3a8a;font-size:16px}.profile-option[_ngcontent-%COMP%]:hover{background-color:#ffd5a5}.profile-option.selected[_ngcontent-%COMP%]{background-color:#fbb768;color:#1e3a8a}.profile-option.selected[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .profile-option.selected[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff9f2}.select-button[_ngcontent-%COMP%]{background-color:#1e3a8a;color:#fff9f2;border:none;padding:10px 20px;border-radius:5px;cursor:pointer;transition:background-color .3s}.select-button[_ngcontent-%COMP%]:disabled{background-color:#95a5a6}.select-button[_ngcontent-%COMP%]:not(:disabled):hover{background-color:#f6a13c}"]});let o=e;return o})();var S=(o,e)=>{let i=v(k),n=v(g);return i.isLoggedIn()?!0:(n.navigate(["/"]),!1)};var ve=[{path:"home",component:le},{path:"hacer-pedido",loadChildren:()=>import("./chunk-WMWYJAVI.js").then(o=>o.HacerPedidoModule),canActivate:[S]},{path:"",loadChildren:()=>import("./chunk-RT354JFS.js").then(o=>o.UserModule)},{path:"menus",loadChildren:()=>import("./chunk-43GQOVV2.js").then(o=>o.MenusModule),canActivate:[S]},{path:"mensajes",loadChildren:()=>import("./chunk-K5SJ2XDN.js").then(o=>o.MensajesModule),canActivate:[S]},{path:"historial-de-pedidos",loadChildren:()=>import("./chunk-R53OUXBA.js").then(o=>o.HistorialDePedidosModule)}],de=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=x({type:e}),e.\u0275inj=_({imports:[I.forRoot(ve),I]});let o=e;return o})();function be(o,e){if(o&1){let i=L();r(0,"mat-toolbar",3),d(1,"img",4),r(2,"button",5),c(3," Inicio "),a(),r(4,"button",6)(5,"mat-icon",7),c(6,"shop"),a(),c(7,"Pedidos "),a(),r(8,"mat-menu",null,0)(10,"button",8),p("click",function(){C(i);let t=P();return M(t.makeOrder())}),r(11,"mat-icon",7),c(12,"library_add"),a(),c(13," Hacer un pedido "),a(),r(14,"button",8),p("click",function(){C(i);let t=P();return M(t.seeOrders())}),r(15,"mat-icon",7),c(16,"assessment"),a(),c(17," Ver pedidos "),a()(),d(18,"span",9),r(19,"button",6)(20,"mat-icon",7),c(21,"account_circle"),a()(),r(22,"mat-menu",null,1)(24,"button",8),p("click",function(){C(i);let t=P();return M(t.logout())}),r(25,"mat-icon",7),c(26,"logout"),a(),c(27," Cerrar sesi\xF3n "),a()()()}if(o&2){let i=E(9),n=E(23);f(4),y("matMenuTriggerFor",i),f(15),y("matMenuTriggerFor",n)}}var me=(()=>{let e=class e{constructor(n,t){this.authService=n,this.router=t}logout(){this.authService.logout(),this.router.navigate(["/"])}makeOrder(){this.router.navigate(["/hacer-pedido/create-order"])}seeOrders(){this.router.navigate(["/ver-pedidos"])}isLoggedIn(){return this.authService.isLoggedIn()}};e.\u0275fac=function(t){return new(t||e)(u(k),u(g))},e.\u0275cmp=m({type:e,selectors:[["app-navbar"]],decls:1,vars:1,consts:[["pedidoMenu",""],["userMenu",""],["color","primary",4,"ngIf"],["color","primary"],["src","../assets/logoRe.PNG","alt","Encomanage Logo",1,"logo"],["mat-button","","routerLink","/home",1,"ms-3"],["mat-button","",3,"matMenuTriggerFor"],[1,"color-icon"],["mat-menu-item","",3,"click"],[1,"spacer"]],template:function(t,s){t&1&&V(0,be,28,2,"mat-toolbar",2),t&2&&y("ngIf",s.isLoggedIn())},dependencies:[U,K,Q,ne,ie,oe,re,te],styles:[".navbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:10px 20px;background-color:#333;color:#fff}.navbar-brand[_ngcontent-%COMP%]{font-size:1.5em;font-weight:700}.navbar-nav[_ngcontent-%COMP%]{display:flex;gap:15px}.navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;padding:10px 15px;transition:background-color .3s,color .3s}.navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#555;color:#fff}.navbar-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background-color:#007bff;color:#fff}@media (max-width: 768px){.navbar[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.navbar-nav[_ngcontent-%COMP%]{flex-direction:column;width:100%}.navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%;text-align:left}}mat-toolbar[_ngcontent-%COMP%]{background-color:#1e3a8a;color:#fff;display:flex;justify-content:space-between;align-items:center;padding:0 16px}.logo[_ngcontent-%COMP%]{height:60px;width:300px}mat-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:16px;color:#f6a13c}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.ms-3[_ngcontent-%COMP%]{margin-left:16px}mat-icon[_ngcontent-%COMP%]{vertical-align:middle;margin-right:8px;color:#fff}button[mat-button][_ngcontent-%COMP%]{display:flex;align-items:center;color:#000}mat-menu[_ngcontent-%COMP%]{background-color:#fff;color:#000}mat-menu[_ngcontent-%COMP%]   button[mat-menu-item][_ngcontent-%COMP%]{display:flex;align-items:center;color:#000}.color-icon[_ngcontent-%COMP%]{color:#f6a13c}"]});let o=e;return o})();var pe=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["app-footer"]],decls:3,vars:0,consts:[[1,"footer"],[1,"footer-text"]],template:function(t,s){t&1&&(r(0,"footer",0)(1,"div",1),c(2,"Encomanage \xA9 2024"),a()())},styles:[".footer[_ngcontent-%COMP%]{background-color:#f5f5f5;padding:10px;text-align:center}.footer-text[_ngcontent-%COMP%]{font-size:12px;color:#888}"]});let o=e;return o})();var ue=(()=>{let e=class e{constructor(){this.title="encomanage-app"}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"app-container"],[1,"content"]],template:function(t,s){t&1&&(r(0,"div",0),d(1,"app-navbar"),r(2,"div",1),d(3,"router-outlet"),a(),d(4,"app-footer"),a())},dependencies:[J,me,pe],styles:[".app.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:100vh}.content[_ngcontent-%COMP%]{flex-grow:1}"]});let o=e;return o})();var Ce="@",Me=(()=>{let e=class e{constructor(n,t,s,l,b){this.doc=n,this.delegate=t,this.zone=s,this.animationType=l,this.moduleImpl=b,this._rendererFactoryPromise=null,this.scheduler=v(j,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-SQPLM3YE.js").then(t=>t)).catch(t=>{throw new A(5300,!1)}).then(({\u0275createEngine:t,\u0275AnimationRendererFactory:s})=>{this._engine=t(this.animationType,this.doc);let l=new s(this.delegate,this._engine,this.zone);return this.delegate=l,l})}createRenderer(n,t){let s=this.delegate.createRenderer(n,t);if(s.\u0275type===0)return s;typeof s.throwOnSyntheticProps=="boolean"&&(s.throwOnSyntheticProps=!1);let l=new F(s);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(b=>{let he=b.createRenderer(n,t);l.use(he),this.scheduler?.notify(9)}).catch(b=>{l.use(s)}),l}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(t){T()},e.\u0275prov=N({token:e,factory:e.\u0275fac});let o=e;return o})(),F=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let i of this.replay)i(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,i){return this.delegate.createElement(e,i)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,i){this.delegate.appendChild(e,i)}insertBefore(e,i,n,t){this.delegate.insertBefore(e,i,n,t)}removeChild(e,i,n){this.delegate.removeChild(e,i,n)}selectRootElement(e,i){return this.delegate.selectRootElement(e,i)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,i,n,t){this.delegate.setAttribute(e,i,n,t)}removeAttribute(e,i,n){this.delegate.removeAttribute(e,i,n)}addClass(e,i){this.delegate.addClass(e,i)}removeClass(e,i){this.delegate.removeClass(e,i)}setStyle(e,i,n,t){this.delegate.setStyle(e,i,n,t)}removeStyle(e,i,n){this.delegate.removeStyle(e,i,n)}setProperty(e,i,n){this.shouldReplay(i)&&this.replay.push(t=>t.setProperty(e,i,n)),this.delegate.setProperty(e,i,n)}setValue(e,i){this.delegate.setValue(e,i)}listen(e,i,n){return this.shouldReplay(i)&&this.replay.push(t=>t.listen(e,i,n)),this.delegate.listen(e,i,n)}shouldReplay(e){return this.replay!==null&&e.startsWith(Ce)}};function fe(o="animations"){return z("NgAsyncAnimations"),R([{provide:B,useFactory:(e,i,n)=>new Me(e,i,n,o),deps:[G,q,H]},{provide:D,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var ge=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=x({type:e,bootstrap:[ue]}),e.\u0275inj=_({providers:[fe(),O],imports:[X,de,ae,ee,Y,Z,se]});let o=e;return o})();W().bootstrapModule(ge,{ngZoneEventCoalescing:!0}).catch(o=>console.error(o));
