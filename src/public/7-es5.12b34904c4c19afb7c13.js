!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{X3zk:function(r,a,n){"use strict";n.r(a),n.d(a,"LoginModule",(function(){return d}));var i,o,c=n("tyNb"),s=n("ofXK"),b=n("thzI"),u=n("OQGK"),l=n("fXoL"),h=[{path:"",component:(i=function(){function r(t,a){e(this,r),this.router=t,this.appStateService=a,this.state={isArthurTaken:!1,isArthurReady:!1,isStarmantaken:!1,isStarmanReady:!1,phoneCall:{arthurToken:null,starmanToken:null,arthurCallingStarman:!1,starmanCallingArthur:!1,phoneCallActive:!1,roomsid:null,roomUniqueName:null}}}var a,n,i;return a=r,(n=[{key:"ngOnInit",value:function(){var e=this;this.appStateService.state$.subscribe((function(t){e.state=Object.assign(Object.assign({},e.state),t)})),this.appStateService.selectedCharacter===u.a.ARTHUR&&this.appStateService.toggleCharacterTaken(b.b.ARTHUR_AVAILABLE),this.appStateService.selectedCharacter===u.a.STARMAN&&this.appStateService.toggleCharacterTaken(b.b.STARMAN_AVAILABLE)}},{key:"takeArthur",value:function(){this.appStateService.toggleCharacterTaken(b.b.ARTHUR_TAKEN),this.appStateService.setSelectedCharacter(u.a.ARTHUR),this.router.navigate(["/preview"])}},{key:"takeStarman",value:function(){this.appStateService.toggleCharacterTaken(b.b.STARMAN_TAKEN),this.appStateService.setSelectedCharacter(u.a.STARMAN),this.router.navigate(["/preview"])}},{key:"starmanTaken",get:function(){return this.state.isStarmantaken}},{key:"starmanBorderTaken",get:function(){return this.starmanTaken?"#ff3603":""}},{key:"arthurTaken",get:function(){return this.state.isArthurTaken}},{key:"arthurBorderTaken",get:function(){return this.arthurTaken?"#ff3603":""}}])&&t(a.prototype,n),i&&t(a,i),r}(),i.\u0275fac=function(e){return new(e||i)(l.Mb(c.a),l.Mb(b.a))},i.\u0275cmp=l.Gb({type:i,selectors:[["app-login"]],decls:8,vars:8,consts:[[1,"orb-container"],[1,"orb-row"],[1,"orb","arthur"],["src","../../../assets/login_orbs/arthur_overlap_bw.png",1,"orb-overlay-image",3,"hidden","click"],["src","../../../assets/login_orbs/arthur_overlap_taken_bw.png",1,"orb-overlay-image-taken",3,"hidden"],[1,"orb","starman"],["src","../../../assets/login_orbs/starman_overlap_bw.png",1,"orb-overlay-image",3,"hidden","click"],["src","../../../assets/login_orbs/starman_overlap_taken_bw.png",1,"orb-overlay-image-taken",3,"hidden"]],template:function(e,t){1&e&&(l.Rb(0,"div",0),l.Rb(1,"div",1),l.Rb(2,"div",2),l.Rb(3,"img",3),l.dc("click",(function(){return t.takeArthur()})),l.Qb(),l.Nb(4,"img",4),l.Qb(),l.Rb(5,"div",5),l.Rb(6,"img",6),l.dc("click",(function(){return t.takeStarman()})),l.Qb(),l.Nb(7,"img",7),l.Qb(),l.Qb(),l.Qb()),2&e&&(l.zb(2),l.zc("border-color",t.arthurBorderTaken),l.zb(1),l.kc("hidden",t.arthurTaken),l.zb(1),l.kc("hidden",!t.arthurTaken),l.zb(1),l.zc("border-color",t.starmanBorderTaken),l.zb(1),l.kc("hidden",t.starmanTaken),l.zb(1),l.kc("hidden",!t.starmanTaken))},styles:[".orb-container[_ngcontent-%COMP%]{height:100%;padding-top:3%;padding-bottom:3%}.orb-row[_ngcontent-%COMP%]{height:100%;position:relative}.orb[_ngcontent-%COMP%]{border-radius:50%;margin-left:5%;margin-right:5%;display:inline-block;width:40%;border:10px solid #282310;background-size:cover;background-repeat:no-repeat;background-position:50%;transition:all 1s}.orb[_ngcontent-%COMP%]:hover{transform:scale(1.1);border-color:#ff3603}.arthur[_ngcontent-%COMP%]{background-image:url(arthur.53bd146ffe880ac41486.jpg)}.starman[_ngcontent-%COMP%]{background-image:url(starman.b0c37524e47de9ad8445.jpg)}.orb-overlay-image[_ngcontent-%COMP%]{width:100%;opacity:0;border-radius:50%;transition:all 1s}.orb-overlay-image[_ngcontent-%COMP%]:hover{opacity:1}.orb-overlay-image-taken[_ngcontent-%COMP%]{width:100%;border-radius:50%}"]}),i)}],d=((o=function t(){e(this,t)}).\u0275mod=l.Kb({type:o}),o.\u0275inj=l.Jb({factory:function(e){return new(e||o)},imports:[[c.c.forChild(h),s.b]]}),o)}}])}();