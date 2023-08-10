"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[86],{7179:(V,_,c)=>{c.r(_),c.d(_,{MainModule:()=>K});var d=c(6814),v=c(822),m=c(8308),a=c(5861),t=c(4946),f=c(2817),u=c(4039),p=c(8166),g=c(5046),h=c(7251),C=c(2123);const Z=function(o,i,e,n,s){return{"bg-info":o,"bg-success":i,"bg-danger":e,"bg-warning":n,"bg-secondary":s}};function y(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",16)(1,"div",17)(2,"div",18)(3,"div",19)(4,"h4",20),t._uU(5),t.qZA(),t.TgZ(6,"div",21),t._UZ(7,"i",22),t.TgZ(8,"ul",23)(9,"li")(10,"a",24),t.NdJ("click",function(){const r=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.appointmentsService.appointment=r)}),t._UZ(11,"i",25),t._uU(12," Edit"),t.qZA()(),t.TgZ(13,"li")(14,"a",26),t.NdJ("click",function(){const r=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.onDelete(r._id))}),t._UZ(15,"i",27),t._uU(16," Delete"),t.qZA()()()()(),t.TgZ(17,"small",28),t._uU(18),t.ALo(19,"date"),t.qZA(),t.TgZ(20,"p",29),t._uU(21),t.qZA()()()()}if(2&o){const e=i.$implicit,n=t.oxw();t.xp6(1),t.Q6J("ngClass",t.qbA(9,Z,"pending"===e.status,"completed"===e.status,"cancelled"===e.status,"rescheduled"===e.status,"overdue"===e.status)),t.xp6(4),t.AsE(" ",e.customer.firstname," ",e.customer.lastname," "),t.xp6(5),t.uIk("data-bs-target","#"+n.modalId),t.xp6(8),t.hij(" ",t.xi3(19,6,e.appointment_date,"dd MMMM yyyy hh:mm a")," "),t.xp6(3),t.hij(" ",e.description," ")}}function x(o,i){1&o&&(t.TgZ(0,"div",30),t._UZ(1,"img",31),t.TgZ(2,"p",32),t._uU(3,"No Appointments Found"),t.qZA()())}let S=(()=>{class o{constructor(e,n,s){this.appointmentsService=e,this.customersService=n,this.globals=s,this.modalId="appointmentFormModal"}ngOnInit(){var e=this;return(0,a.Z)(function*(){yield e.appointmentsService.getAppointments(),yield e.customersService.getCustomersByOrganisation()})()}ngAfterViewInit(){this.startListener()}onDelete(e){var n=this;return(0,a.Z)(function*(){confirm("Are you sure you want to delete this appointment?")&&(n.globals.spinner.show(),yield n.appointmentsService.deleteAppointment(e),n.globals.spinner.hide(),yield n.appointmentsService.getAppointments())})()}startListener(){let e=document.querySelector(".table-responsive");e&&e.addEventListener("scroll",n=>{let r=n.target.scrollTop,l=document.getElementById("table-header");r+100>=200?l?.classList.add("shadow"):l?.classList.remove("shadow")})}search(e){var n=this;return(0,a.Z)(function*(){n.customersService.customersPagination.search=e.target.value,setTimeout((0,a.Z)(function*(){n.globals.spinner.show(),yield n.appointmentsService.getAppointments(),n.globals.spinner.hide()}),1500)})()}onSubmit(e){var n=this;return(0,a.Z)(function*(){n.globals.spinner.show(),n.appointmentsService.appointment?._id?yield n.appointmentsService.updateAppointment(e):yield n.appointmentsService.postAppointment(e),yield n.appointmentsService.getAppointments(),n.globals.spinner.hide()})()}onPageChange(e){var n=this;return(0,a.Z)(function*(){n.appointmentsService.appointmentsPagination.page=e,yield n.appointmentsService.getAppointments()})()}resetData(){this.appointmentsService.appointment=null}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(f.O),t.Y36(u.v),t.Y36(p.d))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-appointments"]],decls:17,vars:11,consts:[[1,"container","mt-5"],[1,"row","g-0","mx-3","mb-5"],[1,"col-4"],[1,"searchbar"],["type","text","name","search","placeholder","Search by Customer's First Name or Last Name",3,"keyup"],[1,"bi","bi-search"],[1,"col","text-end"],["type","button","data-bs-toggle","modal",1,"btn","btn-primary"],[1,"bi","bi-plus-circle","me-2"],[1,"row","g-3","mx-3"],["class","col-3",4,"ngFor","ngForOf"],["class","col-12 no-content text-center",4,"ngIf"],[1,"mx-3","mt-2"],[3,"totalItems","itemsPerPage"],["size","xl",3,"modalId","centered","keyboard","backdrop"],[3,"appointment","customers","emitSubmit","dismissModal"],[1,"col-3"],[1,"card",3,"ngClass"],[1,"card-body"],[1,"d-flex","justify-content-between","align-items-center"],[1,"card-title","text-white"],[1,"dropdown"],["role","button","data-bs-toggle","dropdown","aria-expanded","false",1,"bi","bi-three-dots-vertical"],[1,"dropdown-menu","dropend"],["data-bs-toggle","modal",1,"dropdown-item",3,"click"],[1,"bi","bi-pencil","me-2"],[1,"dropdown-item",3,"click"],[1,"bi","bi-trash","me-2"],[1,"text-white"],[1,"card-text","mt-3","text-white"],[1,"col-12","no-content","text-center"],["width","150","height","150","src","https://img.icons8.com/external-flat-andi-nur-abdillah/64/external-No-Content-empty-state-(flat)-flat-andi-nur-abdillah.png","alt","external-No-Content-empty-state-(flat)-flat-andi-nur-abdillah"],[1,"mb-0","fw-500","fs-24","text-muted"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"input",4),t.NdJ("keyup",function(r){return n.search(r)}),t.qZA(),t._UZ(5,"i",5),t.qZA()(),t.TgZ(6,"div",6)(7,"button",7),t._UZ(8,"i",8),t._uU(9," Add Appointment "),t.qZA()()(),t.TgZ(10,"div",9),t.YNc(11,y,22,15,"div",10),t.YNc(12,x,4,0,"div",11),t.qZA(),t.TgZ(13,"div",12),t._UZ(14,"pagination",13),t.qZA()(),t.TgZ(15,"modal",14)(16,"appointment-form",15),t.NdJ("emitSubmit",function(r){return n.onSubmit(r)})("dismissModal",function(){return n.resetData()}),t.qZA()()),2&e&&(t.xp6(7),t.uIk("data-bs-target","#"+n.modalId),t.xp6(4),t.Q6J("ngForOf",n.appointmentsService.appointments),t.xp6(1),t.Q6J("ngIf",0===n.appointmentsService.appointments.length),t.xp6(2),t.Q6J("totalItems",n.appointmentsService.appointments.length)("itemsPerPage",n.appointmentsService.appointmentsPagination.itemsPerPage),t.xp6(1),t.Q6J("modalId",n.modalId)("centered",!0)("keyboard",!1)("backdrop","static"),t.xp6(1),t.Q6J("appointment",n.appointmentsService.appointment)("customers",n.customersService.customers))},dependencies:[d.mk,d.sg,d.O5,g.z,h.Q,C.t,d.uU],styles:[".no-content[_ngcontent-%COMP%]{background:rgba(255,255,255,.5);padding:1rem;border-radius:1rem}.searchbar[_ngcontent-%COMP%]{background:rgba(255,255,255,.5);border-radius:1rem;padding:.8rem 1rem;width:100%;display:flex;align-items:center;gap:1rem;box-shadow:0 5px 16px -4px #1018281a,0 4px 6px -2px #10182808}.searchbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{outline:none;border:none;background:transparent;width:100%;font-size:14px}.avatar[_ngcontent-%COMP%]{width:2.5rem;height:2.5rem;border-radius:50%;object-fit:cover;aspect-ratio:1/1}.actionBtn[_ngcontent-%COMP%]{background:transparent;border:none;outline:none;cursor:pointer;border-radius:50%;padding:.5rem;width:2.5rem;height:2.5rem;transition:all .3s ease-in-out}.actionBtn.text-primary[_ngcontent-%COMP%]{background:var(--primary-light-color)}.actionBtn.text-danger[_ngcontent-%COMP%]{background:var(--danger-light-color)}.actionBtn[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.actionBtn[_ngcontent-%COMP%]:active{transform:scale(.95)}.card[_ngcontent-%COMP%]{height:15rem}.card-text[_ngcontent-%COMP%]{-webkit-line-clamp:5;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical}"]}),o})();var P=c(9835),b=c(3096),M=c(842);let T=(()=>{class o{constructor(e,n,s,r){this.smsService=e,this.customersService=n,this.usersService=s,this.globals=r,this.customers=[],this.customerInput=""}ngOnInit(){return(0,a.Z)(function*(){})()}ngOnDestroy(){this.customers=[]}sendBulkSms(e){var n=this;return(0,a.Z)(function*(){yield n.smsService.sendBulkSms(e),n.customerInput=""})()}sendBulkSmsToAll(){var e=this;return(0,a.Z)(function*(){let n;switch(e.globals.user.role){case"super_admin":e.globals.spinner.show(),n=yield e.customersService.getCustomers(),e.customers=n.data.map(s=>s.phone||s.phone_alt||""),e.customerInput=e.customers.join(","),e.globals.spinner.hide();break;case"user":e.globals.spinner.show(),n=yield e.customersService.getCustomersByOrganisation(),e.customers=n.data.map(s=>s.phone||s.phone_alt||""),e.customerInput=e.customers.join(","),e.globals.spinner.hide()}})()}sendBulkSmsToUsers(){var e=this;return(0,a.Z)(function*(){let n;switch(e.globals.user.role){case"super_admin":e.globals.spinner.show(),n=yield e.usersService.getUsers(),e.customers=n.data.map(s=>s.phone||s.phone_alt||""),e.customerInput=e.customers.join(","),e.globals.spinner.hide();break;case"user":e.globals.spinner.show(),n=yield e.usersService.getStaff(),e.customers=n.data.map(s=>s.phone||s.phone_alt||""),e.customerInput=e.customers.join(","),e.globals.spinner.hide()}})()}setCustomer(e){this.customerInput=e.target.value,this.customers=this.customerInput.split(",")}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(P.t),t.Y36(u.v),t.Y36(b.f),t.Y36(p.d))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-bulk-sms"]],decls:14,vars:2,consts:[[1,"container","mt-5"],[1,"row","g-0","mx-3","mb-5"],[1,"col-5"],[1,"searchbar"],["type","text","name","customer","placeholder","Type phone number",3,"value","change"],[1,"bi","bi-search"],[1,"col","text-end"],["type","button",1,"btn","btn-danger","me-2",3,"click"],[1,"bi","bi-plus-circle","me-2"],["type","button",1,"btn","btn-primary",3,"click"],[3,"receipients","emitSubmit"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"input",4),t.NdJ("change",function(r){return n.setCustomer(r)}),t.qZA(),t._UZ(5,"i",5),t.qZA()(),t.TgZ(6,"div",6)(7,"button",7),t.NdJ("click",function(){return n.sendBulkSmsToUsers()}),t._UZ(8,"i",8),t._uU(9," Add All Users "),t.qZA(),t.TgZ(10,"button",9),t.NdJ("click",function(){return n.sendBulkSmsToAll()}),t._UZ(11,"i",8),t._uU(12," Add All Customers "),t.qZA()()(),t.TgZ(13,"bulksms-form",10),t.NdJ("emitSubmit",function(r){return n.sendBulkSms(r)}),t.qZA()()),2&e&&(t.xp6(4),t.s9C("value",n.customerInput),t.xp6(9),t.Q6J("receipients",n.customers))},dependencies:[M.M],styles:[".searchbar[_ngcontent-%COMP%]{background:rgba(255,255,255,.5);border-radius:1rem;padding:.8rem 1rem;width:100%;display:flex;align-items:center;gap:1rem;box-shadow:0 5px 16px -4px #1018281a,0 4px 6px -2px #10182808}.searchbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{outline:none;border:none;background:transparent;width:100%;font-size:14px}"]}),o})();var O=c(8608);function A(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td",20),t._uU(2),t.qZA(),t.TgZ(3,"td")(4,"div",21),t._UZ(5,"img",22),t.TgZ(6,"p",23),t._uU(7),t.qZA()()(),t.TgZ(8,"td")(9,"p",23),t._uU(10),t.qZA()(),t.TgZ(11,"td")(12,"p",23),t._uU(13),t.ALo(14,"date"),t.qZA()(),t.TgZ(15,"td"),t._uU(16),t.ALo(17,"date"),t.qZA(),t.TgZ(18,"td")(19,"div",24)(20,"button",25),t.NdJ("click",function(){const r=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.customersService.customer=r)}),t._UZ(21,"i",26),t.qZA(),t.TgZ(22,"button",27),t.NdJ("click",function(){const r=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.onDelete(r._id))}),t._UZ(23,"i",28),t.qZA()()()()}if(2&o){const e=i.$implicit,n=t.oxw();t.xp6(2),t.hij(" ","#"+e._id.slice(-8)," "),t.xp6(3),t.Q6J("src",e.picture,t.LSH),t.xp6(2),t.hij(" ",e.firstname+" "+e.lastname," "),t.xp6(3),t.AsE(" ",e.phone," ",e.phone_alt?" / "+e.phone_alt:""," "),t.xp6(3),t.hij(" ",t.xi3(14,8,e.dob,"mediumDate")," "),t.xp6(3),t.hij(" ",t.xi3(17,11,e.createdAt,"mediumDate")," "),t.xp6(4),t.uIk("data-bs-target","#"+n.modalId)}}function U(o,i){1&o&&(t.TgZ(0,"tr")(1,"td",29),t._UZ(2,"img",30),t.TgZ(3,"p",31),t._uU(4,"No Customers Found"),t.qZA()()())}let k=(()=>{class o{constructor(e,n){this.customersService=e,this.globals=n,this.modalId="customerModal"}ngOnInit(){var e=this;return(0,a.Z)(function*(){e.globals.spinner.show(),yield e.customersService.getCustomersByOrganisation(),e.globals.spinner.hide()})()}ngOnDestroy(){this.customersService.customers=[],this.customersService.customersPagination={page:1,itemsPerPage:10,totalItemsCount:0,search:"",sortBy:"createdAt",order:"DESC"}}ngAfterViewInit(){this.startListener()}onDelete(e){var n=this;return(0,a.Z)(function*(){if(confirm("Are you sure you want to delete this customer?")){n.globals.spinner.show();const s=yield n.customersService.deleteCustomer(e);n.globals.spinner.hide(),n.globals.toast.success(s.message),yield n.customersService.getCustomersByOrganisation()}})()}onSubmit(e){var n=this;return(0,a.Z)(function*(){n.globals.spinner.show(),n.customersService.customer?._id?yield n.customersService.updateCustomer(e):yield n.customersService.postCustomer(e),yield n.customersService.getCustomersByOrganisation(),n.globals.spinner.hide()})()}startListener(){let e=document.querySelector(".table-responsive");e&&e.addEventListener("scroll",n=>{let r=n.target.scrollTop,l=document.getElementById("table-header");r+100>=200?l?.classList.add("shadow"):l?.classList.remove("shadow")})}search(e){var n=this;return(0,a.Z)(function*(){n.customersService.customersPagination.search=e.target.value,setTimeout((0,a.Z)(function*(){n.globals.spinner.show(),yield n.customersService.getCustomersByOrganisation(),n.globals.spinner.hide()}),1500)})()}onPageChange(e){var n=this;return(0,a.Z)(function*(){n.customersService.customersPagination.page=e,yield n.customersService.getCustomersByOrganisation()})()}resetData(){this.customersService.customer=null}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.v),t.Y36(p.d))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-customers"]],decls:33,vars:10,consts:[[1,"container","mt-5"],[1,"row","g-0","mx-3","mb-5"],[1,"col-4"],[1,"searchbar"],["type","text","name","search","placeholder","Search by Customer's First Name or Last Name",3,"keyup"],[1,"bi","bi-search"],[1,"col","text-end"],["type","button","data-bs-toggle","modal",1,"btn","btn-primary"],[1,"bi","bi-plus-circle","me-2"],[1,"table-responsive","mx-3"],[1,"table","table-borderless","align-middle"],["id","table-header"],[1,"fw-500","bg-none"],[1,"table-group-divider"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"mx-3","mt-2"],[3,"totalItems","itemsPerPage"],["size","xl",3,"modalId","centered","keyboard","backdrop"],[3,"customer","emitSubmit","dismissModal"],["scope","row"],[1,"d-flex","align-items-center","gap-3"],["loading","lazy","alt","Customer Avatar",1,"img-fluid","avatar","rounded-circle",3,"src"],[1,"mb-0","fw-500"],[1,"d-flex","align-items-center","gap-2"],["data-bs-toggle","modal",1,"actionBtn","text-primary",3,"click"],[1,"bi","bi-pencil-square"],[1,"actionBtn","text-danger",3,"click"],[1,"bi","bi-x-lg"],["colspan","6",1,"text-center"],["width","150","height","150","src","https://img.icons8.com/external-flat-andi-nur-abdillah/64/external-No-Content-empty-state-(flat)-flat-andi-nur-abdillah.png","alt","external-No-Content-empty-state-(flat)-flat-andi-nur-abdillah"],[1,"mb-0","fw-500","fs-24","text-muted"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"input",4),t.NdJ("keyup",function(r){return n.search(r)}),t.qZA(),t._UZ(5,"i",5),t.qZA()(),t.TgZ(6,"div",6)(7,"button",7),t._UZ(8,"i",8),t._uU(9," Add Customer "),t.qZA()()(),t.TgZ(10,"div",9)(11,"table",10)(12,"thead",11)(13,"tr")(14,"th",12),t._uU(15,"ID"),t.qZA(),t.TgZ(16,"th",12),t._uU(17,"Full Name"),t.qZA(),t.TgZ(18,"th",12),t._uU(19,"Phone"),t.qZA(),t.TgZ(20,"th",12),t._uU(21,"D.O.B"),t.qZA(),t.TgZ(22,"th",12),t._uU(23,"Joined"),t.qZA(),t.TgZ(24,"th",12),t._uU(25,"Action"),t.qZA()()(),t.TgZ(26,"tbody",13),t.YNc(27,A,24,14,"tr",14),t.YNc(28,U,5,0,"tr",15),t.qZA()()(),t.TgZ(29,"div",16),t._UZ(30,"pagination",17),t.qZA()(),t.TgZ(31,"modal",18)(32,"customer-form",19),t.NdJ("emitSubmit",function(r){return n.onSubmit(r)})("dismissModal",function(){return n.resetData()}),t.qZA()()),2&e&&(t.xp6(7),t.uIk("data-bs-target","#"+n.modalId),t.xp6(20),t.Q6J("ngForOf",n.customersService.customers),t.xp6(1),t.Q6J("ngIf",0===n.customersService.customers.length),t.xp6(2),t.Q6J("totalItems",n.customersService.customers.length)("itemsPerPage",n.customersService.customersPagination.itemsPerPage),t.xp6(1),t.Q6J("modalId",n.modalId)("centered",!0)("keyboard",!1)("backdrop","static"),t.xp6(1),t.Q6J("customer",n.customersService.customer))},dependencies:[d.sg,d.O5,g.z,h.Q,O.O,d.uU],styles:["table[_ngcontent-%COMP%]{border-collapse:separate;border-spacing:0 .8em}td[_ngcontent-%COMP%]{padding-top:1.2rem;padding-bottom:1.2rem;color:#333;text-align:left;word-wrap:break-word}.table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:nth-child(1), .table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:nth-child(1){border-top-left-radius:10px;border-bottom-left-radius:10px}.table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:nth-child(6), .table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:nth-child(6){border-top-right-radius:10px;border-bottom-right-radius:10px}.table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{background:rgba(255,255,255,.5)}.bg-none[_ngcontent-%COMP%]{background:none}.searchbar[_ngcontent-%COMP%]{background:rgba(255,255,255,.5);border-radius:1rem;padding:.8rem 1rem;width:100%;display:flex;align-items:center;gap:1rem;box-shadow:0 5px 16px -4px #1018281a,0 4px 6px -2px #10182808}.searchbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{outline:none;border:none;background:transparent;width:100%;font-size:14px}.avatar[_ngcontent-%COMP%]{width:2.5rem;height:2.5rem;border-radius:50%;object-fit:cover;aspect-ratio:1/1}.actionBtn[_ngcontent-%COMP%]{background:transparent;border:none;outline:none;cursor:pointer;border-radius:50%;padding:.5rem;width:2.5rem;height:2.5rem;transition:all .3s ease-in-out}.actionBtn.text-primary[_ngcontent-%COMP%]{background:var(--primary-light-color)}.actionBtn.text-danger[_ngcontent-%COMP%]{background:var(--danger-light-color)}.actionBtn[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.actionBtn[_ngcontent-%COMP%]:active{transform:scale(.95)}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{position:sticky;top:0;background:rgba(255,255,255,.8)}.table-responsive[_ngcontent-%COMP%]{height:calc(100vh - 23em);overflow-y:scroll}"]}),o})(),w=(()=>{class o{constructor(e,n,s,r){this.customersService=e,this.usersService=n,this.appointmentsService=s,this.globals=r}ngOnInit(){var e=this;return(0,a.Z)(function*(){switch(e.globals.user.role){case"super_admin":e.globals.spinner.show(),yield e.customersService.getCustomerTotal(),yield e.usersService.getUsersTotal(),yield e.appointmentsService.getAppointmentsTotal(),e.globals.spinner.hide();break;case"user":e.globals.spinner.show(),yield e.customersService.getCustomerTotalByOrganisation(),yield e.usersService.getUsersTotalByOrganisation(),yield e.appointmentsService.getAppointmentsTotalByOrganisation(),e.globals.spinner.hide()}})()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.v),t.Y36(b.f),t.Y36(f.O),t.Y36(p.d))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-home"]],decls:35,vars:3,consts:[[1,"container","mt-5"],[1,"row","g-0","mx-3","mb-5","gx-3"],[1,"col-4"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"card-text","fs-24","text-primary","fw-bolder"],[1,"bi","bi-people-fill"],[1,"card-text"],[1,"text-muted"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h4",5),t._uU(6,"Customers"),t.qZA(),t.TgZ(7,"p",6),t._UZ(8,"i",7),t._uU(9),t.qZA(),t.TgZ(10,"p",8)(11,"small",9),t._uU(12," Total customers registered in the system. "),t.qZA()()()()(),t.TgZ(13,"div",2)(14,"div",3)(15,"div",4)(16,"h4",5),t._uU(17,"Users"),t.qZA(),t.TgZ(18,"p",6),t._UZ(19,"i",7),t._uU(20),t.qZA(),t.TgZ(21,"p",8)(22,"small",9),t._uU(23," Total users who are registered in the system "),t.qZA()()()()(),t.TgZ(24,"div",2)(25,"div",3)(26,"div",4)(27,"h4",5),t._uU(28,"Appointments"),t.qZA(),t.TgZ(29,"p",6),t._UZ(30,"i",7),t._uU(31),t.qZA(),t.TgZ(32,"p",8)(33,"small",9),t._uU(34," Total appointments made in the system. "),t.qZA()()()()()()()),2&e&&(t.xp6(9),t.hij(" ",n.customersService.dashboard.totalCustomers," "),t.xp6(11),t.hij(" ",n.usersService.dashboard.totalUsers," "),t.xp6(11),t.hij(" ",n.customersService.dashboard.totalCustomers," "))},styles:[".card[_ngcontent-%COMP%]{background:rgba(255,255,255,.5);height:100%}"]}),o})();var q=c(2181),I=c(7398),B=c(6593),J=c(2362),N=c(4047);const F=function(){return{width:"15em"}};let D=(()=>{class o{constructor(e,n,s){this.router=e,this.activatedRoute=n,this.titleService=s,this.router.events.pipe((0,q.h)(r=>r instanceof m.m2),(0,I.U)(()=>{let r=this.activatedRoute.firstChild;for(;r;){if(!r.firstChild)return r.snapshot.data&&r.snapshot.data.title?r.snapshot.data.title:null;r=r.firstChild}return null})).subscribe(r=>{r&&this.titleService.setTitle(r+" - iAppoint")})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.F0),t.Y36(m.gz),t.Y36(B.Dx))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-main"]],decls:10,vars:2,consts:[[1,"d-flex","align-item-center","min-vh-100","bg-img"],[1,"backdrop"],[1,"backdrop-img"],[1,"col-2","sidenav",3,"ngStyle"],[1,"col"],[1,"container-fluid","g-0","px-0"],[1,"mt-6"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"div",1)(2,"div",2),t.TgZ(3,"div",3),t._UZ(4,"sidebar"),t.qZA(),t.TgZ(5,"main",4)(6,"div",5),t._UZ(7,"navbar"),t.TgZ(8,"div",6),t._UZ(9,"router-outlet"),t.qZA()()()()),2&e&&(t.xp6(3),t.Q6J("ngStyle",t.DdM(1,F)))},dependencies:[d.PC,m.lC,J.k,N.S],styles:[".bg-img[_ngcontent-%COMP%]{position:relative}.backdrop-img[_ngcontent-%COMP%]{position:absolute;top:0;left:0;z-index:-2;width:100%;height:100%;background:url(background.0a6a9c4af100a2d5.jpg) no-repeat center center fixed}.backdrop[_ngcontent-%COMP%]{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background:rgba(255,255,255,.25)}.container-fluid[_ngcontent-%COMP%]{z-index:1;background:rgba(255,255,255,.2);height:100%;border-radius:50px 0 0 50px}"]}),o})(),L=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-payments"]],decls:2,vars:0,template:function(e,n){1&e&&(t.TgZ(0,"p"),t._uU(1,"payments works!"),t.qZA())}}),o})();var Q=c(6180);function j(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td",20),t._uU(2),t.qZA(),t.TgZ(3,"td")(4,"div",21),t._UZ(5,"img",22),t.TgZ(6,"p",23),t._uU(7),t.qZA()()(),t.TgZ(8,"td")(9,"p",23),t._uU(10),t.qZA()(),t.TgZ(11,"td")(12,"span",24),t._uU(13),t.ALo(14,"titlecase"),t.qZA()(),t.TgZ(15,"td"),t._uU(16),t.ALo(17,"date"),t.qZA(),t.TgZ(18,"td")(19,"div",25)(20,"button",26),t._UZ(21,"i",27),t.qZA(),t.TgZ(22,"button",28),t.NdJ("click",function(){const r=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.onDelete(r._id))}),t._UZ(23,"i",29),t.qZA()()()()}if(2&o){const e=i.$implicit;t.xp6(2),t.hij(" ","#"+e._id.slice(-8)," "),t.xp6(3),t.Q6J("src",e.picture,t.LSH),t.xp6(2),t.hij(" ",e.fullname," "),t.xp6(3),t.hij(" ",e.email," "),t.xp6(2),t.Q6J("ngClass","super_admin"===e.role?"bg-info":"user"===e.role?"bg-success":"bg-warning"),t.xp6(1),t.hij(" ",t.lcZ(14,7,e.role.replace("_"," "))," "),t.xp6(3),t.hij(" ",t.xi3(17,9,e.createdAt,"mediumDate")," ")}}function Y(o,i){1&o&&(t.TgZ(0,"tr")(1,"td",30),t._UZ(2,"img",31),t.TgZ(3,"p",32),t._uU(4,"No Staffs Found"),t.qZA()()())}let z=(()=>{class o{constructor(e,n){this.usersService=e,this.globals=n,this.modalId="staffFormModal"}ngOnInit(){var e=this;return(0,a.Z)(function*(){yield e.usersService.getStaff()})()}ngOnDestroy(){this.usersService.staffs=[],this.usersService.staffPagination={page:1,itemsPerPage:10,totalItemsCount:0,search:"",sortBy:"createdAt",order:"DESC"}}ngAfterViewInit(){this.startListener()}onDelete(e){var n=this;return(0,a.Z)(function*(){if(confirm("Are you sure you want to delete this user?")){n.globals.spinner.show();const s=yield n.usersService.deleteUser(e);n.globals.spinner.hide(),n.globals.toast.success(s.message),yield n.usersService.getStaff()}})()}onSubmit(e){var n=this;return(0,a.Z)(function*(){n.globals.spinner.show(),n.usersService.user?._id?yield n.usersService.updateUser(e):yield n.usersService.postStaff(e),yield n.usersService.getStaff(),n.globals.spinner.hide()})()}startListener(){let e=document.querySelector(".table-responsive");e&&e.addEventListener("scroll",n=>{let r=n.target.scrollTop,l=document.getElementById("table-header");r+100>=200?l?.classList.add("shadow"):l?.classList.remove("shadow")})}onPageChange(e){var n=this;return(0,a.Z)(function*(){n.usersService.staffPagination.page=e,yield n.usersService.getStaff()})()}resetData(){this.usersService.staff=null}search(e){var n=this;return(0,a.Z)(function*(){n.usersService.staffPagination.search=e.target.value,setTimeout((0,a.Z)(function*(){n.globals.spinner.show(),yield n.usersService.getStaff(),n.globals.spinner.hide()}),1500)})()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(b.f),t.Y36(p.d))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-staff"]],decls:33,vars:10,consts:[[1,"container","mt-5"],[1,"row","g-0","mx-3","mb-5"],[1,"col-4"],[1,"searchbar"],["type","text","name","","placeholder","Search by Full Name or Email",3,"keyup"],[1,"bi","bi-search"],[1,"col","text-end"],["type","button","data-bs-toggle","modal",1,"btn","btn-primary"],[1,"bi","bi-plus-circle","me-2"],[1,"table-responsive","mx-3"],[1,"table","table-borderless","align-middle"],["id","table-header"],[1,"fw-500","bg-none"],[1,"table-group-divider"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"mx-3","mt-2"],[3,"totalItems","itemsPerPage"],["size","xl",3,"modalId","centered","keyboard","backdrop"],[3,"staff","emitSubmit","dismissModal"],["scope","row"],[1,"d-flex","align-items-center","gap-3"],["loading","lazy","alt","User Avatar",1,"img-fluid","avatar","rounded-circle",3,"src"],[1,"mb-0","fw-500"],[1,"badge","rounded-pill","text-bg-info","fs-14","text-white","px-3","py-2",3,"ngClass"],[1,"d-flex","align-items-center","gap-2"],[1,"actionBtn","text-primary"],[1,"bi","bi-pencil-square"],[1,"actionBtn","text-danger",3,"click"],[1,"bi","bi-x-lg"],["colspan","6",1,"text-center"],["width","150","height","150","src","https://img.icons8.com/external-flat-andi-nur-abdillah/64/external-No-Content-empty-state-(flat)-flat-andi-nur-abdillah.png","alt","external-No-Content-empty-state-(flat)-flat-andi-nur-abdillah"],[1,"mb-0","fw-500","fs-24","text-muted"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"input",4),t.NdJ("keyup",function(r){return n.search(r)}),t.qZA(),t._UZ(5,"i",5),t.qZA()(),t.TgZ(6,"div",6)(7,"button",7),t._UZ(8,"i",8),t._uU(9," Add Staff "),t.qZA()()(),t.TgZ(10,"div",9)(11,"table",10)(12,"thead",11)(13,"tr")(14,"th",12),t._uU(15,"ID"),t.qZA(),t.TgZ(16,"th",12),t._uU(17,"Full Name"),t.qZA(),t.TgZ(18,"th",12),t._uU(19,"Email"),t.qZA(),t.TgZ(20,"th",12),t._uU(21,"Role"),t.qZA(),t.TgZ(22,"th",12),t._uU(23,"Joined"),t.qZA(),t.TgZ(24,"th",12),t._uU(25,"Action"),t.qZA()()(),t.TgZ(26,"tbody",13),t.YNc(27,j,24,12,"tr",14),t.YNc(28,Y,5,0,"tr",15),t.qZA()()(),t.TgZ(29,"div",16),t._UZ(30,"pagination",17),t.qZA()(),t.TgZ(31,"modal",18)(32,"staff-form",19),t.NdJ("emitSubmit",function(r){return n.onSubmit(r)})("dismissModal",function(){return n.resetData()}),t.qZA()()),2&e&&(t.xp6(7),t.uIk("data-bs-target","#"+n.modalId),t.xp6(20),t.Q6J("ngForOf",n.usersService.staffs),t.xp6(1),t.Q6J("ngIf",0===n.usersService.staffs.length),t.xp6(2),t.Q6J("totalItems",n.usersService.staffs.length)("itemsPerPage",5),t.xp6(1),t.Q6J("modalId",n.modalId)("centered",!0)("keyboard",!1)("backdrop","static"),t.xp6(1),t.Q6J("staff",n.usersService.staff))},dependencies:[d.mk,d.sg,d.O5,g.z,h.Q,Q.G,d.rS,d.uU],styles:["table[_ngcontent-%COMP%]{border-collapse:separate;border-spacing:0 .8em}td[_ngcontent-%COMP%]{padding-top:1.2rem;padding-bottom:1.2rem;color:#333;text-align:left;word-wrap:break-word}.table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:nth-child(1), .table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:nth-child(1){border-top-left-radius:10px;border-bottom-left-radius:10px}.table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:nth-child(6), .table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:nth-child(6){border-top-right-radius:10px;border-bottom-right-radius:10px}.table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{background:rgba(255,255,255,.5)}.bg-none[_ngcontent-%COMP%]{background:none}.searchbar[_ngcontent-%COMP%]{background:rgba(255,255,255,.5);border-radius:1rem;padding:.8rem 1rem;width:100%;display:flex;align-items:center;gap:1rem;box-shadow:0 5px 16px -4px #1018281a,0 4px 6px -2px #10182808}.searchbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{outline:none;border:none;background:transparent;width:100%;font-size:14px}.avatar[_ngcontent-%COMP%]{width:2.5rem;height:2.5rem;border-radius:50%;object-fit:cover;aspect-ratio:1/1}.actionBtn[_ngcontent-%COMP%]{background:transparent;border:none;outline:none;cursor:pointer;border-radius:50%;padding:.5rem;width:2.5rem;height:2.5rem;transition:all .3s ease-in-out}.actionBtn.text-primary[_ngcontent-%COMP%]{background:var(--primary-light-color)}.actionBtn.text-danger[_ngcontent-%COMP%]{background:var(--danger-light-color)}.actionBtn[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.actionBtn[_ngcontent-%COMP%]:active{transform:scale(.95)}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{position:sticky;top:0;background:rgba(255,255,255,.8)}.table-responsive[_ngcontent-%COMP%]{height:calc(100vh - 23em);overflow-y:scroll}"]}),o})();var E=c(5208),H=c(7126);function R(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td",20),t._uU(2),t.qZA(),t.TgZ(3,"td")(4,"div",21),t._UZ(5,"img",22),t.TgZ(6,"p",23),t._uU(7),t.qZA()()(),t.TgZ(8,"td")(9,"p",23),t._uU(10),t.qZA()(),t.TgZ(11,"td")(12,"span",24),t._uU(13),t.ALo(14,"titlecase"),t.qZA()(),t.TgZ(15,"td"),t._uU(16),t.ALo(17,"date"),t.qZA(),t.TgZ(18,"td")(19,"div",25)(20,"button",26),t._UZ(21,"i",27),t.qZA(),t.TgZ(22,"button",28),t.NdJ("click",function(){const r=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.onDelete(r._id))}),t._UZ(23,"i",29),t.qZA()()()()}if(2&o){const e=i.$implicit;t.xp6(2),t.hij(" ","#"+e._id.slice(-8)," "),t.xp6(3),t.Q6J("src",e.picture,t.LSH),t.xp6(2),t.hij(" ",e.fullname," "),t.xp6(3),t.hij(" ",e.email," "),t.xp6(2),t.Q6J("ngClass","super_admin"===e.role?"bg-info":"user"===e.role?"bg-success":"bg-warning"),t.xp6(1),t.hij(" ",t.lcZ(14,7,e.role.replace("_"," "))," "),t.xp6(3),t.hij(" ",t.xi3(17,9,e.createdAt,"mediumDate")," ")}}function $(o,i){1&o&&(t.TgZ(0,"tr")(1,"td",30),t._UZ(2,"img",31),t.TgZ(3,"p",32),t._uU(4,"No Users Found"),t.qZA()()())}const G=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"",component:D,children:[{path:"home",component:w,data:{title:"Dashboard"}},{path:"customers",component:k,data:{title:"Customers"}},{path:"appointments",component:S,data:{title:"Appointments"}},{path:"users",component:(()=>{class o{constructor(e,n,s){this.usersService=e,this.organisationsService=n,this.globals=s,this.modalId="userFormModal"}ngOnInit(){var e=this;return(0,a.Z)(function*(){yield e.usersService.getUsers(),yield e.organisationsService.getOrganisations()})()}ngAfterViewInit(){this.startListener()}onDelete(e){var n=this;return(0,a.Z)(function*(){confirm("Are you sure you want to delete this user?")&&(yield n.usersService.deleteUser(e),yield n.usersService.getUsers())})()}onSubmit(e){var n=this;return(0,a.Z)(function*(){n.globals.spinner.show(),n.usersService.user?._id?yield n.usersService.updateUser(e):yield n.usersService.postUser(e),yield n.usersService.getUsers(),n.globals.spinner.hide()})()}startListener(){let e=document.querySelector(".table-responsive");e&&e.addEventListener("scroll",n=>{let r=n.target.scrollTop,l=document.getElementById("table-header");r+100>=200?l?.classList.add("shadow"):l?.classList.remove("shadow")})}onPageChange(e){var n=this;return(0,a.Z)(function*(){n.usersService.usersPagination.page=e,yield n.usersService.getUsers()})()}search(e){var n=this;return(0,a.Z)(function*(){n.usersService.usersPagination.search=e.target.value,setTimeout((0,a.Z)(function*(){n.globals.spinner.show(),yield n.usersService.getUsers(),n.globals.spinner.hide()}),1500)})()}resetData(){this.usersService.user=null}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(b.f),t.Y36(E.s),t.Y36(p.d))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-users"]],decls:33,vars:11,consts:[[1,"container","mt-5"],[1,"row","g-0","mx-3","mb-5"],[1,"col-4"],[1,"searchbar"],["type","text","name","search","placeholder","Search by Full Name or Email",3,"keyup"],[1,"bi","bi-search"],[1,"col","text-end"],["type","button","data-bs-toggle","modal",1,"btn","btn-primary"],[1,"bi","bi-plus-circle","me-2"],[1,"table-responsive","mx-3"],[1,"table","table-borderless","align-middle"],["id","table-header"],[1,"fw-500","bg-none"],[1,"table-group-divider"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"mx-3","mt-2"],[3,"totalItems","itemsPerPage"],["size","xl",3,"modalId","centered","keyboard","backdrop"],[3,"user","organisations","emitSubmit","dismissModal"],["scope","row"],[1,"d-flex","align-items-center","gap-3"],["loading","lazy","alt","User Avatar",1,"img-fluid","avatar","rounded-circle",3,"src"],[1,"mb-0","fw-500"],[1,"badge","rounded-pill","text-bg-info","fs-14","text-white","px-3","py-2",3,"ngClass"],[1,"d-flex","align-items-center","gap-2"],[1,"actionBtn","text-primary"],[1,"bi","bi-pencil-square"],[1,"actionBtn","text-danger",3,"click"],[1,"bi","bi-x-lg"],["colspan","6",1,"text-center"],["width","150","height","150","src","https://img.icons8.com/external-flat-andi-nur-abdillah/64/external-No-Content-empty-state-(flat)-flat-andi-nur-abdillah.png","alt","external-No-Content-empty-state-(flat)-flat-andi-nur-abdillah"],[1,"mb-0","fw-500","fs-24","text-muted"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"input",4),t.NdJ("keyup",function(r){return n.search(r)}),t.qZA(),t._UZ(5,"i",5),t.qZA()(),t.TgZ(6,"div",6)(7,"button",7),t._UZ(8,"i",8),t._uU(9," Add User "),t.qZA()()(),t.TgZ(10,"div",9)(11,"table",10)(12,"thead",11)(13,"tr")(14,"th",12),t._uU(15,"ID"),t.qZA(),t.TgZ(16,"th",12),t._uU(17,"Full Name"),t.qZA(),t.TgZ(18,"th",12),t._uU(19,"Email"),t.qZA(),t.TgZ(20,"th",12),t._uU(21,"Role"),t.qZA(),t.TgZ(22,"th",12),t._uU(23,"Joined"),t.qZA(),t.TgZ(24,"th",12),t._uU(25,"Action"),t.qZA()()(),t.TgZ(26,"tbody",13),t.YNc(27,R,24,12,"tr",14),t.YNc(28,$,5,0,"tr",15),t.qZA()()(),t.TgZ(29,"div",16),t._UZ(30,"pagination",17),t.qZA()(),t.TgZ(31,"modal",18)(32,"user-form",19),t.NdJ("emitSubmit",function(r){return n.onSubmit(r)})("dismissModal",function(){return n.resetData()}),t.qZA()()),2&e&&(t.xp6(7),t.uIk("data-bs-target","#"+n.modalId),t.xp6(20),t.Q6J("ngForOf",n.usersService.users),t.xp6(1),t.Q6J("ngIf",0===n.usersService.users.length),t.xp6(2),t.Q6J("totalItems",n.usersService.users.length)("itemsPerPage",n.usersService.usersPagination.itemsPerPage),t.xp6(1),t.Q6J("modalId",n.modalId)("centered",!0)("keyboard",!1)("backdrop","static"),t.xp6(1),t.Q6J("user",n.usersService.user)("organisations",n.organisationsService.organisations))},dependencies:[d.mk,d.sg,d.O5,g.z,h.Q,H.m,d.rS,d.uU],styles:["table[_ngcontent-%COMP%]{border-collapse:separate;border-spacing:0 .8em}td[_ngcontent-%COMP%]{padding-top:1.2rem;padding-bottom:1.2rem;color:#333;text-align:left;word-wrap:break-word}.table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:nth-child(1), .table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:nth-child(1){border-top-left-radius:10px;border-bottom-left-radius:10px}.table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:nth-child(6), .table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:nth-child(6){border-top-right-radius:10px;border-bottom-right-radius:10px}.table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{background:rgba(255,255,255,.5)}.bg-none[_ngcontent-%COMP%]{background:none}.searchbar[_ngcontent-%COMP%]{background:rgba(255,255,255,.5);border-radius:1rem;padding:.8rem 1rem;width:100%;display:flex;align-items:center;gap:1rem;box-shadow:0 5px 16px -4px #1018281a,0 4px 6px -2px #10182808}.searchbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{outline:none;border:none;background:transparent;width:100%;font-size:14px}.avatar[_ngcontent-%COMP%]{width:2.5rem;height:2.5rem;border-radius:50%;object-fit:cover;aspect-ratio:1/1}.actionBtn[_ngcontent-%COMP%]{background:transparent;border:none;outline:none;cursor:pointer;border-radius:50%;padding:.5rem;width:2.5rem;height:2.5rem;transition:all .3s ease-in-out}.actionBtn.text-primary[_ngcontent-%COMP%]{background:var(--primary-light-color)}.actionBtn.text-danger[_ngcontent-%COMP%]{background:var(--danger-light-color)}.actionBtn[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.actionBtn[_ngcontent-%COMP%]:active{transform:scale(.95)}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{position:sticky;top:0;background:rgba(255,255,255,.8)}.table-responsive[_ngcontent-%COMP%]{height:calc(100vh - 23em);overflow-y:scroll}"]}),o})(),data:{title:"Users"}},{path:"staff",component:z,data:{title:"Staff"}},{path:"bulk-sms",component:T,data:{title:"Bulk SMS"}},{path:"payments",component:L,data:{title:"Payments"}}]},{path:"**",redirectTo:"home"}];let X=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[m.Bz.forChild(G),m.Bz]}),o})(),K=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,X,v.K]}),o})()}}]);