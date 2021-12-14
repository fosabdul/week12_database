(function(t){function e(e){for(var r,c,a=e[0],s=e[1],o=e[2],l=0,b=[];l<a.length;l++)c=a[l],Object.prototype.hasOwnProperty.call(d,c)&&d[c]&&b.push(d[c][0]),d[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);i&&i(e);while(b.length)b.shift()();return u.push.apply(u,o||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==d[s]&&(r=!1)}r&&(u.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},d={app:0},u=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var o=0;o<a.length;o++)e(a[o]);var i=s;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),d={id:"app"},u=Object(r["e"])("h1",{class:"m-2"},"Student Sign In",-1);function c(t,e,n,c,a,s){var o=Object(r["l"])("NewStudentForm"),i=Object(r["l"])("StudentTable"),l=Object(r["l"])("StudentMessage");return Object(r["h"])(),Object(r["d"])("div",d,[u,Object(r["f"])(o,{onStudentAdded:s.newStudentAdded},null,8,["onStudentAdded"]),Object(r["f"])(i,{students:a.students,onStudentPresent:s.studentArrivedOrLeft,onDeleteStudent:s.studentDeleted},null,8,["students","onStudentPresent","onDeleteStudent"]),Object(r["f"])(l,{student:a.mostRecentStudent},null,8,["student"])])}n("a15b");var a=function(t){return Object(r["j"])("data-v-13fc4f7e"),t=t(),Object(r["i"])(),t},s={class:"alert alert-danger"},o={class:"card add-student m-2 p-2"},i=a((function(){return Object(r["e"])("h4",{class:"card-title"},"Add new student ",-1)})),l={class:"form-group"},b=a((function(){return Object(r["e"])("label",{for:"name"},"Name",-1)})),f={class:"form-group"},p=a((function(){return Object(r["e"])("label",{for:"starID"},"Star ID",-1)}));function O(t,e,n,d,u,c){return Object(r["h"])(),Object(r["d"])("div",null,[Object(r["q"])(Object(r["e"])("div",s,[(Object(r["h"])(!0),Object(r["d"])(r["a"],null,Object(r["k"])(u.errors,(function(t){return Object(r["h"])(),Object(r["d"])("li",{key:t},Object(r["m"])(t),1)})),128))],512),[[r["p"],u.errors.length]]),Object(r["e"])("div",o,[i,Object(r["e"])("div",l,[b,Object(r["q"])(Object(r["e"])("input",{id:"name",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=function(t){return u.newStudentName=t})},null,512),[[r["o"],u.newStudentName,void 0,{trim:!0}]])]),Object(r["e"])("div",f,[p,Object(r["q"])(Object(r["e"])("input",{id:"starID",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=function(t){return u.newStarID=t})},null,512),[[r["o"],u.newStarID,void 0,{trim:!0}]])]),Object(r["e"])("button",{class:"btn btn-primary",onClick:e[2]||(e[2]=function(){return c.addStudent&&c.addStudent.apply(c,arguments)})},"Add")])])}var h={name:"NewStudentForm",emits:["student-added"],data:function(){return{newStudentName:"",newStarID:"",errors:[]}},methods:{addStudent:function(){if(this.errors=[],this.newStudentName||this.errors.push("Student name is required"),this.newStarID||this.errors.push("StarID is required"),0==this.errors.length){var t={name:this.newStudentName,starID:this.newStarID,present:!1};this.$emit("student-added",t),this.newStudentName="",this.newStarID=""}}}},j=(n("ab66"),n("99f9"),n("6b0d")),m=n.n(j);const S=m()(h,[["render",O],["__scopeId","data-v-13fc4f7e"]]);var v=S,g={class:"card student-list m-2 p-2"},y=Object(r["e"])("h4",{class:"card-title"},"Students List",-1),w={class:"edit-table-toggle form-check"},D=Object(r["e"])("label",{for:"edit-table",class:"form-check-label"},"Edit table?",-1),k={id:"student-table"},I={class:"table"},A=Object(r["e"])("th",null,"Name",-1),_=Object(r["e"])("th",null,"StarID",-1),N=Object(r["e"])("th",null,"Present?",-1);function P(t,e,n,d,u,c){var a=Object(r["l"])("Student-Row");return Object(r["h"])(),Object(r["d"])("div",null,[Object(r["e"])("div",g,[y,Object(r["e"])("div",w,[Object(r["q"])(Object(r["e"])("input",{id:"edit-table",type:"checkbox",class:"form-check-input","onUpdate:modelValue":e[0]||(e[0]=function(t){return u.editTable=t})},null,512),[[r["n"],u.editTable]]),D]),Object(r["e"])("div",k,[Object(r["e"])("table",I,[Object(r["e"])("tr",null,[A,_,N,Object(r["q"])(Object(r["e"])("th",null,"Delete",512),[[r["p"],u.editTable]])]),(Object(r["h"])(!0),Object(r["d"])(r["a"],null,Object(r["k"])(n.students,(function(t){return Object(r["h"])(),Object(r["c"])(a,{student:t,key:t.starID,edit:u.editTable,onStudentArrivedOrLeft:c.arrivedOrLeft,onDeleteStudent:c.deleteStudent},null,8,["student","edit","onStudentArrivedOrLeft","onDeleteStudent"])})),128))])])])])}n("b0c0");var T=n("ed3a"),$=n.n(T),q=["checked"];function x(t,e,n,d,u,c){return Object(r["h"])(),Object(r["d"])("tr",{class:Object(r["g"])({present:n.student.present,absent:!n.student.present})},[Object(r["e"])("td",null,Object(r["m"])(n.student.name),1),Object(r["e"])("td",null,Object(r["m"])(n.student.starID),1),Object(r["e"])("td",null,[Object(r["e"])("input",{type:"checkbox",checked:n.student.present,onChange:e[0]||(e[0]=function(t){return c.arrivedOrLeft(n.student,t.srcElement.checked)})},null,40,q)]),Object(r["q"])(Object(r["e"])("td",null,[Object(r["e"])("img",{class:"delete-icon",onClick:e[1]||(e[1]=function(){return c.deleteStudent&&c.deleteStudent.apply(c,arguments)}),src:$.a})],512),[[r["p"],n.edit]])],2)}var L={name:"StudentRow",emits:["student-arrived-or-left","delete-student"],props:{student:Object,edit:Boolean},methods:{arrivedOrLeft:function(t,e){this.$emit("student-arrived-or-left",t,e)},deleteStudent:function(){confirm("Delete ".concat(this.student.name,"?"))&&this.$emit("delete-student",this.student)}}};n("d5aa");const E=m()(L,[["render",x]]);var M=E,R={name:"StudentTable",components:{StudentRow:M},props:{students:Array},emits:["student-present","delete-student"],data:function(){return{editTable:!1}},methods:{arrivedOrLeft:function(t,e){this.$emit("student-arrived-or-left",t,e)},deleteStudent:function(t){this.$emit("delete-student",t)}}};const C=m()(R,[["render",P]]);var F=C,U={key:0,class:"alert alert-primary",role:"alert"},V={key:1,class:"alert alert-info"};function J(t,e,n,d,u,c){return Object(r["h"])(),Object(r["d"])("div",null,[Object(r["q"])(Object(r["e"])("div",null,[n.student.present?(Object(r["h"])(),Object(r["d"])("div",U," Welcome, "+Object(r["m"])(n.student.name)+"! ",1)):(Object(r["h"])(),Object(r["d"])("div",V," Goodbye, "+Object(r["m"])(n.student.name)+". See you later! ",1))],512),[[r["p"],n.student.name]])])}var B={name:"StudentMessage",props:{student:Object}};const G=m()(B,[["render",J]]);var W=G,z={name:"app",data:function(){return{students:[],mostRecentStudent:{}}},components:{NewStudentForm:v,StudentTable:F,StudentMessage:W},mounted:function(){this.updateStudents()},methods:{updateStudents:function(){var t=this;this.$student_api.getAllStudents().then((function(e){t.students=e})).catch((function(t){console.error("Error getting latest student list",t.response),alert("Sorry, unable to fetch student list")}))},newStudentAdded:function(t){var e=this;this.$student_api.addStudent(t).then((function(){e.updateStudents()})).catch((function(t){if(console.log("Error fetching student list",t),t.response.data&&Array.isArray(t.response.data)){var e=t.response.data.join(",");alert("Error adding student\n"+e)}else console.error("Error adding student",t.response),alert("Sorry, unable to add student")}))},studentArrivedOrLeft:function(t,e){var n=this;t.present=e,this.$student_api.updateStudent(t).then((function(){n.mostRecentStudent=t,n.updateStudents()})).catch((function(t){console.error("Error updating student",t.response),alert("Sorry, unable to update student")}))},studentDeleted:function(t){var e=this;this.$student_api.deleteStudent(t.id).then((function(){e.updateStudents(),e.mostRecentStudent={}})).catch((function(t){console.error("Error deleting student",t.response),alert("Sorry, unable to delete student")}))}}};n("dcd2");const H=m()(z,[["render",c]]);var K=H,Q=n("bc3a"),X=n.n(Q),Y="/api/students",Z={getAllStudents:function(){return X.a.get(Y).then((function(t){return t.data}))},addStudent:function(t){return X.a.post(Y,t).then((function(t){return t.data}))},updateStudent:function(t){return X.a.patch("".concat(Y,"/").concat(t.id),t).then((function(t){return t.data}))},deleteStudent:function(t){return X.a.delete("".concat(Y,"/").concat(t)).then((function(t){return t.data}))}},tt=Object(r["b"])(K);tt.config.globalProperties.$student_api=Z,tt.mount("#app")},"6a97":function(t,e,n){},"780c":function(t,e,n){},"96d7":function(t,e,n){},"99f9":function(t,e,n){"use strict";n("bab8")},ab66:function(t,e,n){"use strict";n("6a97")},bab8:function(t,e,n){},d5aa:function(t,e,n){"use strict";n("780c")},dcd2:function(t,e,n){"use strict";n("96d7")},ed3a:function(t,e,n){t.exports=n.p+"img/delete.bc032f0c.png"}});
//# sourceMappingURL=app.30af4872.js.map