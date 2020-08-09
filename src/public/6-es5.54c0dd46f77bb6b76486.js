function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var c=e[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{LGDQ:function(t,e,n){"use strict";n.r(e),n.d(e,"ApiTestingModule",(function(){return p}));var c,r,o,i=n("ofXK"),u=n("fXoL"),s=n("tk/3"),b=((r=function(){function t(e){_classCallCheck(this,t),this.http=e}return _createClass(t,[{key:"get",value:function(t){return this.http.get(t)}},{key:"put",value:function(t,e){return this.http.put(t,e)}},{key:"post",value:function(t,e){return this.http.post(t,e)}},{key:"delete",value:function(t){return this.http.delete(t)}}]),t}()).\u0275fac=function(t){return new(t||r)(u.Zb(s.a))},r.\u0275prov=u.Ib({token:r,factory:r.\u0275fac,providedIn:"root"}),r),l=((c=function(){function t(e){_classCallCheck(this,t),this.apiTestingService=e}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"get",value:function(){this.apiTestingService.get("").subscribe((function(t){return console.log("success: ",t)}),(function(t){return console.log("error: ",t)}))}},{key:"put",value:function(){this.apiTestingService.put("",{}).subscribe((function(t){return console.log("success: ",t)}),(function(t){return console.log("error: ",t)}))}},{key:"post",value:function(){this.apiTestingService.post("",{}).subscribe((function(t){return console.log("success: ",t)}),(function(t){return console.log("error: ",t)}))}},{key:"delete",value:function(){this.apiTestingService.delete("").subscribe((function(t){return console.log("success: ",t)}),(function(t){return console.log("error: ",t)}))}}]),t}()).\u0275fac=function(t){return new(t||c)(u.Mb(b))},c.\u0275cmp=u.Gb({type:c,selectors:[["app-api-testing"]],decls:20,vars:0,consts:[["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-success",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(t,e){1&t&&(u.Rb(0,"h1"),u.Cc(1,"Test API Endpoints"),u.Qb(),u.Nb(2,"br"),u.Rb(3,"button",0),u.dc("click",(function(){return e.get()})),u.Cc(4,"Get"),u.Qb(),u.Nb(5,"br"),u.Nb(6,"br"),u.Nb(7,"br"),u.Rb(8,"button",1),u.dc("click",(function(){return e.put()})),u.Cc(9,"Put"),u.Qb(),u.Nb(10,"br"),u.Nb(11,"br"),u.Nb(12,"br"),u.Rb(13,"button",2),u.dc("click",(function(){return e.post()})),u.Cc(14,"Post"),u.Qb(),u.Nb(15,"br"),u.Nb(16,"br"),u.Nb(17,"br"),u.Rb(18,"button",3),u.dc("click",(function(){return e.delete()})),u.Cc(19,"Delete"),u.Qb())},styles:[""]}),c),a=n("tyNb"),f=[{path:"",component:l}],p=((o=function t(){_classCallCheck(this,t)}).\u0275mod=u.Kb({type:o}),o.\u0275inj=u.Jb({factory:function(t){return new(t||o)},imports:[[i.b,a.c.forChild(f)]]}),o)}}]);