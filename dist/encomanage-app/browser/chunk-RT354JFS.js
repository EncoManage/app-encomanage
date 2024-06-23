import{A as ne,a as I,b as re,c as oe,d as k,e as w,f as j,g as R,h as O,i as F,j as T}from"./chunk-ZRSGEIIS.js";import{U as P}from"./chunk-IAGDSATT.js";import{A as G,B as z,a as ee,h as b,j as p,l as C,m as _,q as x,r as S,s as y,t as B,u as E,v as te,w as ie,z as M}from"./chunk-BEAOGL5K.js";import"./chunk-AESYL7IM.js";import{Ab as r,Bb as i,Cb as f,Gb as u,Gc as V,Ic as v,Lc as Z,Rb as o,Tb as L,Xa as s,Ya as c,Zb as N,ba as W,ca as D,ga as X,la as h,ma as H,ob as d,qb as l}from"./chunk-E7TWR5JV.js";var ae=(()=>{let e=class e{constructor(m){this.http=m,this.baseUrl=re.apiUrl}signUp(m){let n=`${this.baseUrl}/cuentas`;return this.http.post(n,m)}};e.\u0275fac=function(n){return new(n||e)(X(ee))},e.\u0275prov=W({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var ue=t=>({active:t});function ge(t,e){t&1&&(r(0,"mat-error"),o(1," Este campo es obligatorio "),i())}function he(t,e){t&1&&(r(0,"mat-error"),o(1," Este campo es obligatorio "),i())}function ve(t,e){t&1&&(r(0,"mat-error"),o(1," Ingrese un email v\xE1lido "),i())}function be(t,e){t&1&&(r(0,"mat-error"),o(1," Este campo es obligatorio "),i())}function Ce(t,e){t&1&&(r(0,"mat-error"),o(1," Ingrese una contrase\xF1a de al menos 4 caracteres. "),i())}var se=(()=>{let e=class e{constructor(m,n,a,g){this.fb=m,this.router=n,this.snackBar=a,this.signUpService=g,this.passwordVisible=!1,this.form=this.fb.group({name:["",[p.required]],email:["",[p.required,p.email]],password:["",[p.required,p.minLength(4)]]})}controlHasError(m,n){return this.form.controls[m].hasError(n)}signup(){if(this.form.invalid)return;let m=this.form.value;this.signUpService.signUp(m).subscribe({next:n=>{this.showSnackBar("Registro exitoso"),this.router.navigate(["verificacion"])},error:n=>{console.error("Error en el registro:",n),this.showSnackBar("Error en el registro. Por favor, intenta de nuevo.")}})}showSnackBar(m){this.snackBar.open(m,"Cerrar",{duration:3e3})}};e.\u0275fac=function(n){return new(n||e)(c(E),c(M),c(I),c(ae))},e.\u0275cmp=h({type:e,selectors:[["app-signup"]],decls:43,vars:12,consts:[[1,"container"],[1,"left-side"],["src","..\\assets\\parcelapp.png","alt","Ilustraci\xF3n"],[1,"right-side"],["href","#"],[1,"registration-form",3,"ngSubmit","formGroup"],["appearance","outline",1,"custom-form-field"],["matPrefix",""],["matInput","","type","text","placeholder","Eje: Mar\xEDa Garc\xEDa","formControlName","name","required",""],[4,"ngIf"],["matInput","","type","email","placeholder","Eje: abc@ejemplo.com","formControlName","email","required",""],["matInput","","placeholder","********","formControlName","password","required","",3,"type"],["matSuffix","",3,"click"],["mat-raised-button","","color","primary",1,"register-button",3,"disabled","ngClass"],["routerLink","/"]],template:function(n,a){n&1&&(r(0,"div",0)(1,"div",1),f(2,"img",2),i(),r(3,"div",3)(4,"h1"),o(5,"Registro"),i(),r(6,"p"),o(7,"\xA1Create una "),r(8,"a",4),o(9,"cuenta"),i(),o(10," para acceder a todos los servicios de Encomanage!"),i(),r(11,"form",5),u("ngSubmit",function(){return a.signup()}),r(12,"mat-form-field",6)(13,"mat-label"),o(14,"Nombre"),i(),r(15,"mat-icon",7),o(16,"person"),i(),f(17,"input",8),d(18,ge,2,0,"mat-error",9),i(),r(19,"mat-form-field",6)(20,"mat-label"),o(21,"Correo electr\xF3nico"),i(),r(22,"mat-icon",7),o(23,"email"),i(),f(24,"input",10),d(25,he,2,0,"mat-error",9)(26,ve,2,0,"mat-error",9),i(),r(27,"mat-form-field",6)(28,"mat-label"),o(29,"Contrase\xF1a"),i(),r(30,"mat-icon",7),o(31,"lock"),i(),f(32,"input",11),r(33,"mat-icon",12),u("click",function(){return a.passwordVisible=!a.passwordVisible}),o(34),i(),d(35,be,2,0,"mat-error",9)(36,Ce,2,0,"mat-error",9),i(),r(37,"button",13),o(38," Registrar "),i(),r(39,"p"),o(40,"\xBFYa tienes una cuenta? "),r(41,"a",14),o(42,"Inicia Sesi\xF3n"),i()()()()()),n&2&&(s(11),l("formGroup",a.form),s(7),l("ngIf",a.controlHasError("name","required")),s(7),l("ngIf",a.controlHasError("email","required")),s(),l("ngIf",a.controlHasError("email","pattern")),s(6),l("type",a.passwordVisible?"text":"password"),s(2),L(" ",a.passwordVisible?"visibility_off":"visibility"," "),s(),l("ngIf",a.controlHasError("password","required")),s(),l("ngIf",a.controlHasError("password","minlength")),s(),l("disabled",!a.form.valid)("ngClass",N(10,ue,a.form.valid)))},dependencies:[V,v,G,P,O,k,w,j,R,F,T,x,b,C,_,B,S,y],styles:["body[_ngcontent-%COMP%]{margin:0;font-family:Poppins,sans-serif}.container[_ngcontent-%COMP%]{display:flex;height:100vh}.left-side[_ngcontent-%COMP%]{background-color:#f6a13c;flex:1;display:flex;justify-content:center;align-items:center}.left-side[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:80%;height:auto}.right-side[_ngcontent-%COMP%]{background-color:#fff9f2;flex:1;padding:40px;display:flex;flex-direction:column;justify-content:center}.back-button[_ngcontent-%COMP%]{background:none;border:none;font-size:24px;cursor:pointer;margin-bottom:20px}h1[_ngcontent-%COMP%]{color:#1e3a8a}a[_ngcontent-%COMP%]{color:#1e3a8a;text-decoration:none}a[_ngcontent-%COMP%]:hover{text-decoration:underline}.registration-form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.custom-form-field[_ngcontent-%COMP%]{margin-bottom:20px}.register-button[_ngcontent-%COMP%]{margin-top:20px;padding:15px;background-color:#f6a13c;color:#fff9f2;font-size:16px}.register-button[_ngcontent-%COMP%]:hover{background-color:#f6a13c}.register-button.active[_ngcontent-%COMP%]{background-color:#f6a13c;color:#fff9f2;font-family:Poppins,sans-serif;font-size:16px;font-weight:600;font-style:normal}p[_ngcontent-%COMP%]{margin-top:20px}"]});let t=e;return t})();function _e(t,e){t&1&&(r(0,"mat-error"),o(1," Este campo es obligatorio "),i())}function xe(t,e){t&1&&(r(0,"mat-error"),o(1," Ingrese un email v\xE1lido "),i())}function Se(t,e){t&1&&(r(0,"mat-error"),o(1," Este campo es obligatorio "),i())}function ye(t,e){t&1&&(r(0,"mat-error"),o(1," Ingrese una contrase\xF1a de al menos 4 caracteres. "),i())}var le=(()=>{let e=class e{constructor(m,n,a,g){this.authService=m,this.fb=n,this.router=a,this.snackBar=g,this.form=this.fb.group({email:["",[p.required,p.email]],password:["",p.required]})}ngOnInit(){}login(){if(this.form.invalid)return;let m=this.form.value;this.authService.login(m).subscribe({next:n=>{this.showSnackBar("Inicio de sesi\xF3n exitoso"),this.router.navigate(["/home"])},error:n=>{console.error("Error en el inicio de sesi\xF3n:",n),this.showSnackBar("Error en el inicio de sesi\xF3n. Por favor, intenta de nuevo.")}})}controlHasError(m,n){return this.form.controls[m].hasError(n)}showSnackBar(m){this.snackBar.open(m,"Cerrar",{duration:3e3})}};e.\u0275fac=function(n){return new(n||e)(c(oe),c(E),c(M),c(I))},e.\u0275cmp=h({type:e,selectors:[["app-login"]],decls:34,vars:6,consts:[[1,"container"],[1,"left-side"],["src","..\\assets\\parcelapp.png","alt","Ilustraci\xF3n"],[1,"right-side"],["autocomplete","off",1,"login-form",3,"ngSubmit","formGroup"],["appearance","outline",1,"custom-form-field"],["matPrefix",""],["matInput","","type","email","placeholder","Eje: abc@ejemplo.com","formControlName","email","required",""],[4,"ngIf"],["matInput","","type","password","placeholder","********","formControlName","password","required",""],["routerLink","/password"],["mat-raised-button","","color","primary",1,"login-button",3,"disabled"],["routerLink","/signup"]],template:function(n,a){n&1&&(r(0,"div",0)(1,"div",1),f(2,"img",2),i(),r(3,"div",3)(4,"h1"),o(5,"Inicio de sesi\xF3n"),i(),r(6,"p"),o(7,"\xA1Inicia sesi\xF3n para hacer env\xEDos y hacerles un seguimiento!"),i(),r(8,"form",4),u("ngSubmit",function(){return a.login()}),r(9,"mat-form-field",5)(10,"mat-label"),o(11,"Correo electr\xF3nico"),i(),r(12,"mat-icon",6),o(13,"email"),i(),f(14,"input",7),d(15,_e,2,0,"mat-error",8)(16,xe,2,0,"mat-error",8),i(),r(17,"mat-form-field",5)(18,"mat-label"),o(19,"Contrase\xF1a"),i(),r(20,"mat-icon",6),o(21,"lock"),i(),f(22,"input",9),d(23,Se,2,0,"mat-error",8)(24,ye,2,0,"mat-error",8),i(),r(25,"p")(26,"a",10),o(27,"\xBFOlvidaste tu contrase\xF1a?"),i()(),r(28,"button",11),o(29," Inicia sesi\xF3n "),i(),r(30,"p"),o(31,"\xBFTodav\xEDa no tienes una cuenta? "),r(32,"a",12),o(33,"Registrate"),i()()()()()),n&2&&(s(8),l("formGroup",a.form),s(7),l("ngIf",a.controlHasError("email","required")),s(),l("ngIf",a.controlHasError("email","email")),s(7),l("ngIf",a.controlHasError("password","required")),s(),l("ngIf",a.controlHasError("password","minlength")),s(4),l("disabled",!a.form.valid))},dependencies:[v,G,P,O,k,w,j,F,T,x,b,C,_,B,S,y],styles:["body[_ngcontent-%COMP%]{margin:0;font-family:Poppins,sans-serif}.container[_ngcontent-%COMP%]{display:flex;height:100vh}.left-side[_ngcontent-%COMP%]{background-color:#f6a13c;flex:1;display:flex;justify-content:center;align-items:center}.left-side[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:80%;height:auto}.right-side[_ngcontent-%COMP%]{background-color:#fff9f2;flex:1;padding:40px;display:flex;flex-direction:column;justify-content:center}.back-button[_ngcontent-%COMP%]{background:none;border:none;font-size:24px;cursor:pointer;margin-bottom:20px}h1[_ngcontent-%COMP%]{color:#1e3a8a}a[_ngcontent-%COMP%]{color:#1e3a8a;text-decoration:none}a[_ngcontent-%COMP%]:hover{text-decoration:underline}.login-form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.custom-form-field[_ngcontent-%COMP%]{margin-bottom:20px}.login-button[_ngcontent-%COMP%]{margin-top:20px;padding:15px;background-color:#f6a13c;color:#fff9f2;font-size:16px}.login-button[_ngcontent-%COMP%]:hover{background-color:#f6a13c}p[_ngcontent-%COMP%]{margin-top:20px}"]});let t=e;return t})();var Ee=t=>({active:t});function Me(t,e){t&1&&(r(0,"mat-error"),o(1,"Este campo es obligatorio"),i())}function Pe(t,e){t&1&&(r(0,"mat-error"),o(1,"Debe tener al menos 4 caracteres"),i())}function Ie(t,e){t&1&&(r(0,"mat-error"),o(1,"Solo se permiten n\xFAmeros"),i())}var ce=(()=>{let e=class e{constructor(m,n,a){this.fb=m,this.router=n,this.snackBar=a,this.codever=12345,this.form=this.fb.group({codigo:["",[p.required,p.minLength(4),this.onlyNumbersValidator]]})}controlHasError(m,n){return this.form.controls[m].hasError(n)}onlyNumbersValidator(m){let n=m.value;return/^\d+$/.test(n)?null:{onlyNumbers:!0}}verfication(){this.form.invalid||(this.form.value.codigo==this.codever.toString()?(this.showSnackBar("Verificacion exitosa"),this.router.navigate(["home"])):this.showSnackBar("Error en la verificacion. Por favor, ingrese un c\xF3digo v\xE1lido."))}showSnackBar(m){this.snackBar.open(m,"Cerrar",{duration:3e3})}};e.\u0275fac=function(n){return new(n||e)(c(E),c(M),c(I))},e.\u0275cmp=h({type:e,selectors:[["app-verificacion"]],decls:18,vars:8,consts:[[1,"container"],[1,"left-side"],["src","..\\assets\\parcelapp.png","alt","Ilustraci\xF3n"],[1,"right-side"],[1,"verification-form",3,"ngSubmit","formGroup"],["appearance","outline",1,"custom-form-field"],["matInput","","type","text","placeholder","Ingrese su c\xF3digo","formControlName","codigo"],[4,"ngIf"],["mat-raised-button","","color","primary",1,"verification-button",3,"disabled","ngClass"]],template:function(n,a){n&1&&(r(0,"div",0)(1,"div",1),f(2,"img",2),i(),r(3,"div",3)(4,"h1"),o(5,"Registro"),i(),r(6,"p"),o(7,"Le enviamos un c\xF3digo de verificaci\xF3n a su correo para mayor seguridad"),i(),r(8,"form",4),u("ngSubmit",function(){return a.verfication()}),r(9,"mat-form-field",5)(10,"mat-label"),o(11,"C\xF3digo"),i(),f(12,"input",6),d(13,Me,2,0,"mat-error",7)(14,Pe,2,0,"mat-error",7)(15,Ie,2,0,"mat-error",7),i(),r(16,"button",8),o(17," Verificar "),i()()()()),n&2&&(s(8),l("formGroup",a.form),s(5),l("ngIf",a.controlHasError("codigo","required")),s(),l("ngIf",a.controlHasError("codigo","minlength")),s(),l("ngIf",a.controlHasError("codigo","onlyNumbers")),s(),l("disabled",!a.form.valid)("ngClass",N(6,Ee,a.form.valid)))},dependencies:[V,v,P,O,k,w,F,x,b,C,_,S,y],styles:["body[_ngcontent-%COMP%]{margin:0;font-family:Poppins,sans-serif}.container[_ngcontent-%COMP%]{display:flex;height:100vh}.left-side[_ngcontent-%COMP%]{background-color:#f6a13c;flex:1;display:flex;justify-content:center;align-items:center}.left-side[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:80%;height:auto}.right-side[_ngcontent-%COMP%]{background-color:#fff9f2;flex:1;padding:40px;display:flex;flex-direction:column;justify-content:center}.back-button[_ngcontent-%COMP%]{background:none;border:none;font-size:24px;cursor:pointer;margin-bottom:20px}h1[_ngcontent-%COMP%]{color:#1e3a8a}a[_ngcontent-%COMP%]{color:#1e3a8a;text-decoration:none}a[_ngcontent-%COMP%]:hover{text-decoration:underline}.verification-form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.custom-form-field[_ngcontent-%COMP%]{margin-bottom:20px}.verification-button[_ngcontent-%COMP%]{margin-top:20px;padding:15px;background-color:#f6a13c;color:#fff9f2;font-size:16px}.verification-button[_ngcontent-%COMP%]:hover{background-color:#f6a13c}.verification-button.active[_ngcontent-%COMP%]{background-color:#f6a13c;color:#fff9f2;font-family:Poppins,sans-serif;font-size:16px;font-weight:600;font-style:normal}p[_ngcontent-%COMP%]{margin-top:20px}"]});let t=e;return t})();var ke=t=>({active:t});function we(t,e){t&1&&(r(0,"mat-error"),o(1,"Este campo es obligatorio"),i())}function Oe(t,e){t&1&&(r(0,"mat-error"),o(1,"Debe tener al menos 4 caracteres"),i())}function Fe(t,e){t&1&&(r(0,"mat-error"),o(1,"Solo se permiten n\xFAmeros"),i())}function Ne(t,e){t&1&&(r(0,"mat-error"),o(1," Este campo es obligatorio "),i())}function Ve(t,e){t&1&&(r(0,"mat-error"),o(1," Ingrese una nueva contrase\xF1a de al menos 4 caracteres. "),i())}var pe=(()=>{let e=class e{constructor(m,n,a){this.fb=m,this.router=n,this.snackBar=a,this.codever=12345,this.passwordVisible=!1,this.form=this.fb.group({codigo:["",[p.required,p.minLength(4),this.onlyNumbersValidator]],password:[,[p.required,p.minLength(4)]]})}controlHasError(m,n){return this.form.controls[m].hasError(n)}onlyNumbersValidator(m){let n=m.value;return/^\d+$/.test(n)?null:{onlyNumbers:!0}}verfication(){this.form.invalid||(this.form.value.codigo==this.codever.toString()?(this.router.navigate([""]),this.showSnackBar("La contrase\xF1a fue actualizada")):this.showSnackBar("C\xF3digo incorrecto. Por favor, ingrese un c\xF3digo v\xE1lido."))}showSnackBar(m){this.snackBar.open(m,"Cerrar",{duration:3e3})}};e.\u0275fac=function(n){return new(n||e)(c(E),c(M),c(I))},e.\u0275cmp=h({type:e,selectors:[["app-password"]],decls:28,vars:12,consts:[[1,"container"],[1,"left-side"],["src","..\\assets\\parcelapp.png","alt","Ilustraci\xF3n"],[1,"right-side"],[1,"password-form",3,"ngSubmit","formGroup"],["appearance","outline",1,"custom-form-field"],["matInput","","type","text","placeholder","Ingrese su c\xF3digo","formControlName","codigo"],[4,"ngIf"],["matPrefix",""],["matInput","","placeholder","********","formControlName","password","required","",3,"type"],["matSuffix","",3,"click"],["mat-raised-button","","color","primary",1,"confirm-button",3,"disabled","ngClass"]],template:function(n,a){n&1&&(r(0,"div",0)(1,"div",1),f(2,"img",2),i(),r(3,"div",3)(4,"h1"),o(5,"\xBFOlvidaste tu contrase\xF1a?"),i(),r(6,"p"),o(7,"No te preocupes, puedes recuperarla"),i(),r(8,"form",4),u("ngSubmit",function(){return a.verfication()}),r(9,"mat-form-field",5)(10,"mat-label"),o(11,"C\xF3digo"),i(),f(12,"input",6),d(13,we,2,0,"mat-error",7)(14,Oe,2,0,"mat-error",7)(15,Fe,2,0,"mat-error",7),i(),r(16,"mat-form-field",5)(17,"mat-label"),o(18,"Nueva Contrase\xF1a"),i(),r(19,"mat-icon",8),o(20,"lock"),i(),f(21,"input",9),r(22,"mat-icon",10),u("click",function(){return a.passwordVisible=!a.passwordVisible}),o(23),i(),d(24,Ne,2,0,"mat-error",7)(25,Ve,2,0,"mat-error",7),i(),r(26,"button",11),o(27," Confirmar "),i()()()()),n&2&&(s(8),l("formGroup",a.form),s(5),l("ngIf",a.controlHasError("codigo","required")),s(),l("ngIf",a.controlHasError("codigo","minlength")),s(),l("ngIf",a.controlHasError("codigo","onlyNumbers")),s(6),l("type",a.passwordVisible?"text":"password"),s(2),L(" ",a.passwordVisible?"visibility_off":"visibility"," "),s(),l("ngIf",a.controlHasError("password","required")),s(),l("ngIf",a.controlHasError("password","minlength")),s(),l("disabled",!a.form.valid)("ngClass",N(10,ke,a.form.valid)))},dependencies:[V,v,P,O,k,w,j,R,F,T,x,b,C,_,B,S,y],styles:["body[_ngcontent-%COMP%]{margin:0;font-family:Poppins,sans-serif}.container[_ngcontent-%COMP%]{display:flex;height:100vh}.left-side[_ngcontent-%COMP%]{background-color:#f6a13c;flex:1;display:flex;justify-content:center;align-items:center}.left-side[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:80%;height:auto}.right-side[_ngcontent-%COMP%]{background-color:#fff9f2;flex:1;padding:40px;display:flex;flex-direction:column;justify-content:center}.back-button[_ngcontent-%COMP%]{background:none;border:none;font-size:24px;cursor:pointer;margin-bottom:20px}h1[_ngcontent-%COMP%]{color:#1e3a8a}a[_ngcontent-%COMP%]{color:#1e3a8a;text-decoration:none}a[_ngcontent-%COMP%]:hover{text-decoration:underline}.password-form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.custom-form-field[_ngcontent-%COMP%]{margin-bottom:20px}.confirm-button[_ngcontent-%COMP%]{margin-top:20px;padding:15px;background-color:#f6a13c;color:#fff9f2;font-size:16px}.confirm-button[_ngcontent-%COMP%]:hover{background-color:#f6a13c}.confirm-button.active[_ngcontent-%COMP%]{background-color:#f6a13c;color:#fff9f2;font-family:Poppins,sans-serif;font-size:16px;font-weight:600;font-style:normal}p[_ngcontent-%COMP%]{margin-top:20px}"]});let t=e;return t})();var Be=[{path:"signup",component:se},{path:"",component:le},{path:"verificacion",component:ce},{path:"password",component:pe}],fe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=H({type:e}),e.\u0275inj=D({imports:[z.forChild(Be),z]});let t=e;return t})();var dt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=H({type:e}),e.\u0275inj=D({imports:[Z,fe,ne,te,ie]});let t=e;return t})();export{dt as UserModule};
