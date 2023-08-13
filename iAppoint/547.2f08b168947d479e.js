"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[547],{2547:(C,p,s)=>{s.r(p),s.d(p,{AuthModule:()=>A});var d=s(6814),g=s(822),i=s(8308),t=s(4946);let f=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-auth"]],decls:6,vars:0,consts:[[1,"container-fluid","row","align-items-center","justify-content-center","g-0","min-vh-100","auth-bg"],[1,"backdrop"],[1,"form-container","col-10","col-sm-8","col-md-5","col-lg-4","col-xl-3"],[1,"text-center","mt-2"],["src","assets/images/logo.png","alt","logo","width","80","height","80",1,"logo"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"div",1),t.TgZ(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA(),t._UZ(5,"router-outlet"),t.qZA()())},dependencies:[i.lC],styles:[".auth-bg[_ngcontent-%COMP%]{background:url(https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm222-mind-16_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=1c53e59a7b21c1ffee85bc36a3837392) center center/cover no-repeat}.backdrop[_ngcontent-%COMP%]{background:rgba(255,255,255,.01);position:fixed;top:0;left:0;width:100%;height:100%;-webkit-backdrop-filter:blur(10px) saturate(100%) contrast(45%) brightness(130%);backdrop-filter:blur(10px) saturate(100%) contrast(45%) brightness(130%)}.form-container[_ngcontent-%COMP%]{position:relative;background:white;border-radius:10px}"]}),o})();var c=s(5861),m=s(8166),u=s(3096),h=s(8914);let v=(()=>{class o{constructor(e,n){this.globals=e,this.usersService=n}onSubmit(e){var n=this;return(0,c.Z)(function*(){yield n.usersService.login(e)})()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.d),t.Y36(u.f))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-signin"]],decls:10,vars:0,consts:[[1,"text-center","mb-4"],[1,"fw-bolder"],[1,"text-primary"],[3,"onSubmitEvent"],[1,"my-3","mb-5","mx-4"],["routerLink","/auth/forgot-password",1,"text-primary","text-decoration-none","pointer"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"h4",1)(2,"span",2),t._uU(3,"Welcome"),t.qZA(),t._uU(4," Back"),t.qZA()(),t.TgZ(5,"signin-form",3),t.NdJ("onSubmitEvent",function(a){return n.onSubmit(a)}),t.qZA(),t.TgZ(6,"p",4),t._uU(7," Forgot your password? "),t.TgZ(8,"a",5),t._uU(9," Reset Password "),t.qZA()())},dependencies:[i.rH,h.y]}),o})();var b=s(790);let w=(()=>{class o{constructor(e){this.usersService=e}onSubmit(e){var n=this;return(0,c.Z)(function*(){yield n.usersService.forgotPassword(e)})()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.f))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-forgot-password"]],decls:10,vars:0,consts:[[1,"text-center","mb-5"],[1,"fw-bolder"],[1,"text-primary"],[3,"onSubmitEvent"],[1,"my-3","mb-5","mx-4"],["routerLink","/auth/login",1,"text-primary","text-decoration-none","pointer"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"h4",1)(2,"span",2),t._uU(3,"Forgot"),t.qZA(),t._uU(4," Password"),t.qZA()(),t.TgZ(5,"forgot-password-form",3),t.NdJ("onSubmitEvent",function(a){return n.onSubmit(a)}),t.qZA(),t.TgZ(6,"p",4),t._uU(7," Have an account? "),t.TgZ(8,"a",5),t._uU(9," Sign in "),t.qZA()())},dependencies:[i.rH,b.r]}),o})();var Z=s(7590);const S=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"",component:f,children:[{path:"login",component:v},{path:"forgot-password",component:w},{path:"reset-password/:token",component:(()=>{class o{constructor(e,n){this.globals=e,this.usersService=n,this.token="",this.token=this.globals.router.url.split("/").pop()||""}onSubmit(e){var n=this;return(0,c.Z)(function*(){yield n.usersService.resetPassword(e),n.globals.router.navigate(["auth/login"])})()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.d),t.Y36(u.f))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-reset-password"]],decls:10,vars:1,consts:[[1,"text-center","mb-4"],[1,"fw-bolder"],[1,"text-primary"],[3,"token","onSubmitEvent"],[1,"my-3","mb-5","mx-4"],["routerLink","/auth/login",1,"text-primary","text-decoration-none","pointer"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"h4",1)(2,"span",2),t._uU(3,"Forgot"),t.qZA(),t._uU(4," Password"),t.qZA()(),t.TgZ(5,"reset-password-form",3),t.NdJ("onSubmitEvent",function(a){return n.onSubmit(a)}),t.qZA(),t.TgZ(6,"p",4),t._uU(7," Have an account? "),t.TgZ(8,"a",5),t._uU(9," Sign in "),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("token",n.token))},dependencies:[i.rH,Z.M]}),o})()}]},{path:"**",redirectTo:"login"}];let y=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[i.Bz.forChild(S),i.Bz]}),o})(),A=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,y,g.K]}),o})()}}]);