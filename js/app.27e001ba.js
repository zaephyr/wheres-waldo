(function(e){function t(t){for(var a,s,c=t[0],l=t[1],o=t[2],u=0,m=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&m.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,o||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],a=!0,c=1;c<i.length;c++){var l=i[c];0!==n[l]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=i[0]))}return e}var a={},n={app:0},r=[];function s(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=a,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(i,a,function(t){return e[t]}.bind(null,a));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/wheres-waldo/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var d=l;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var a=i("85ec"),n=i.n(a);n.a},"0d3b":function(e,t,i){e.exports=i.p+"img/sci-fi1.c260966d.png"},1872:function(e,t,i){"use strict";var a=i("8161"),n=i.n(a);n.a},3371:function(e,t,i){},"3a18":function(e,t,i){e.exports=i.p+"img/sci-fi2.3a77ed5a.jpg"},"4e2d":function(e,t,i){},"553e":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!e.gameStarted,expression:"!gameStarted"}],staticClass:"home-page"},[e._m(0),i("h3",[e._v("Find listed character in these detailed illustrations")]),i("p",[e._v(">> Click an image to start playing <<")]),i("carousel-3d",{staticClass:"courousel",attrs:{count:3,display:3,width:270,height:405}},e._l(e.images,(function(t){return i("slide",{key:t.index,attrs:{index:t.index}},[i("div",{staticClass:"home-img",style:{background:"url("+t.src+")","background-size":"270px"}},[i("div",{staticClass:"img-overlay"},[i("div",{staticClass:"pic-desc"},[i("h2",[e._v(e._s(t.title))]),i("p",[e._v("by")]),i("h3",[e._v(e._s(t.author))])]),i("div",{staticClass:"buttons"},[i("i",{staticClass:"fas fa-play-circle",on:{click:function(i){return e.startGame(t)}}}),i("i",{staticClass:"fas fa-trophy",on:{click:function(i){return e.viewHighScores(t.name)}}})])])])])})),1)],1),i("div",{directives:[{name:"show",rawName:"v-show",value:e.gameStarted,expression:"gameStarted"}],staticClass:"see-fi"},[i("app-side-bar",{attrs:{gameStarted:e.gameStarted,characters:e.characters,gameName:e.selectPic,startTime:e.startTime},on:{updateGameStarted:e.update,getHighScores:e.viewHighScores}}),i("div",{staticClass:"picture"},[e.gameStarted?i("app-game",{attrs:{gameName:e.selectPic,characters:e.characters,gameData:e.images[e.selectPic]}}):e._e()],1)],1),e.highScoresPage?i("app-high-scores",{attrs:{picTitle:this.images[this.selectPic].title,highScoresPage:e.highScoresPage,gameName:e.selectPic},on:{viewingScores:e.noScores}}):e._e()],1)},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("h1",[i("span",{staticStyle:{color:"var(--main-color)"}},[e._v("See")]),e._v("-fi")])}],s=(i("b0c0"),i("2af0")),c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"side-bar"},[e._m(0),i("div",{staticClass:"links"},[i("i",{staticClass:"fas fa-home",on:{click:e.backHome}}),i("i",{staticClass:"fas fa-trophy",on:{click:e.viewHighScores}})]),i("div",[i("h3",[e._v("Easy")]),e._l(e.easyChars,(function(t,a){return i("div",{key:a,staticClass:"char-btn",class:{found:t.selected},on:{click:function(i){return e.openLink(t.url)}}},[i("div",[e._v(e._s(t.name))]),i("span",[e._v(e._s(t.film))])])}))],2),i("div",[i("h3",[e._v("Medium")]),e._l(e.mediumChars,(function(t,a){return i("div",{key:a,staticClass:"char-btn",class:{found:t.selected},on:{click:function(i){return e.openLink(t.url)}}},[i("div",[e._v(e._s(t.name))]),i("span",[e._v(e._s(t.film))])])}))],2),i("div",[i("h3",[e._v("Hard")]),e._l(e.hardChars,(function(t,a){return i("div",{key:a,staticClass:"char-btn",class:{found:t.selected},on:{click:function(i){return e.openLink(t.url)}}},[i("div",[e._v(e._s(t.name))]),i("span",[e._v(e._s(t.film))])])}))],2),e.gameFinished?i("app-submit",{attrs:{goHome:e.backHome,elapsedTime:e.elapsedTime,gameName:e.gameName}}):e._e()],1)},l=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("h1",[i("span",{staticStyle:{color:"var(--main-color)"}},[e._v("See")]),e._v("-fi")])}],o=(i("a623"),i("4de4"),i("4160"),i("159b"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{attrs:{fluid:""}},[i("v-btn",{staticClass:"mx-2",attrs:{fab:"",outlined:"",dark:"",large:"",color:"var(--main-color)"},on:{click:e.goHome}},[i("v-icon",{attrs:{dark:""}},[e._v(" fa-window-close ")])],1),i("div",[i("h2",[e._v("Congratulations!")]),i("p",[e._v("You completed the game in "+e._s(e.elapsedTime)+" seconds.")])]),i("v-form",[i("v-text-field",{attrs:{required:"",autofocus:"",dark:"",clearable:"",counter:15,rules:e.nameRules,label:"Name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),i("v-btn",{staticClass:"mr-4",attrs:{color:"var(--main-color)"},on:{click:function(t){return e.addToDB()}}},[e._v("Submit!")])],1)],1)}),d=[],u={props:["goHome","elapsedTime","gameName"],data:function(){return{name:"",nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=10||"Name must be less than 10 characters"}]}},methods:{addToDB:function(){var e=this.$firebase.firestore();void 0==this.gameName?console.log("Game name is undefined"):e.collection("".concat(this.gameName,"_highscores")).add({name:this.name,time:this.elapsedTime}),goHome()}}},m=u,h=(i("e1d0"),i("2877")),f=i("6544"),p=i.n(f),g=i("8336"),v=i("a523"),y=i("4bd4"),_=i("132d"),k=i("8654"),b=Object(h["a"])(m,o,d,!1,null,"570023f8",null),w=b.exports;p()(b,{VBtn:g["a"],VContainer:v["a"],VForm:y["a"],VIcon:_["a"],VTextField:k["a"]});var S=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{attrs:{fluid:""}},[i("v-btn",{staticClass:"mx-2",attrs:{fab:"",outlined:"",dark:"",large:"",color:"var(--main-color)"},on:{click:e.goHome}},[i("v-icon",{attrs:{dark:""}},[e._v(" fa-window-close ")])],1),i("h2",[e._v(e._s(e.picTitle))]),i("table",e._l(e.newScores,(function(t){return i("tr",{key:t.id},[i("td",[e._v(e._s(t.name))]),i("td",[e._v(e._s(t.time)+"sec")])])})),0)],1)},x=[],C=(i("d81d"),i("5530")),j={props:["gameName","picTitle","highScoresPage"],data:function(){return{newScores:[]}},methods:{goHome:function(){this.$emit("viewingScores",!1)}},mounted:function(){var e=this,t=this.$firebase.firestore();t.collection("".concat(this.gameName,"_highscores")).orderBy("time","asc").onSnapshot((function(t){var i=t.docs.map((function(e){return Object(C["a"])({id:e.id},e.data())}));e.newScores=i}))}},T=j,P=(i("a7cd"),Object(h["a"])(T,S,x,!1,null,"5bd0beb6",null)),F=P.exports;p()(P,{VBtn:g["a"],VContainer:v["a"],VIcon:_["a"]});var N=i("a959"),R={props:["gameStarted","characters","gameName","startTime"],components:{appSubmit:w,appHighScores:F},data:function(){return{gameFinished:!1,charFound:[],endTime:"",elapsedTime:"",titles:{Scourge:"Scourge of the Machines",Raid:"The Raid",Incident:"Incident on Line 13"}}},methods:{viewHighScores:function(){this.$emit("getHighScores",this.gameName)},backHome:function(){var e=!1;this.gameFinished=!1,this.$emit("updateGameStarted",e)},openLink:function(e){window.open(e,"_blank")},finishGame:function(){this.gameFinished=!0}},computed:{easyChars:function(){var e=this;return this.charFound=[],this.characters.forEach((function(t){e.charFound.push(t.selected)})),this.characters.filter((function(e){return"easy"==e.difficulty}))},mediumChars:function(){return this.characters.filter((function(e){return"medium"==e.difficulty}))},hardChars:function(){return this.characters.filter((function(e){return"hard"==e.difficulty}))}},watch:{charFound:function(e,t){var i=function(e){return 1==e};this.charFound.length<6?this.gameFinished=!1:this.charFound.every(i)&&(this.gameFinished=this.charFound.every(i),this.endTime=Date.now(),this.elapsedTime=Object(N["a"])(this.endTime,this.startTime))}}},O=R,H=(i("1872"),Object(h["a"])(O,c,l,!1,null,null,null)),G=H.exports,z=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",[i("div",{staticStyle:{"background-size":"contain","z-index":"50","min-width":"800px","max-width":"1120px"},style:{"background-image":"url("+e.gameData.src+")"},on:{click:e.clicked}},[i("img",{ref:"pic",staticStyle:{visibility:"hidden","min-width":"800px","max-width":"1120px",width:"100%","object-fit":"scale-down"},attrs:{id:"pic",src:e.gameData.src}}),i("transition",{attrs:{name:"slide"}},[e.click?i("div",{staticClass:"click",style:{left:e.clickX+"px",top:e.clickY+"px"}}):e._e()]),e._l(e.characters,(function(t,a){return i("div",{key:a,staticClass:"char-selection",class:[t.title,{selected:t.selected}],style:{left:e.adjustCoords(t.x)+"px",top:e.adjustCoords(t.y)+"px"},on:{click:function(t){return e.charSelected(a)}}},[e._v(" "+e._s(t.name)+" ")])}))],2)])},B=[],I={props:["characters","gameName","gameData"],data:function(){return{imageWidth:"",click:!1,clickX:null,clickY:null}},methods:{clicked:function(e){e.target.className?this.click=!1:(this.click=!0,this.clickX=e.layerX-50,this.clickY=e.layerY-50),console.log(this.clickX,this.clickY),console.log(e.target,"x:"+e.layerX,"y:"+e.layerY)},charSelected:function(e){this.characters[e].selected=!0},checkWidth:function(){this.imageWidth=this.$refs.pic.clientWidth,console.log(this.imageWidth)},adjustCoords:function(e){var t=this.imageWidth/1120,i=e*t;return i}},mounted:function(){var e=this;setTimeout((function(){return e.checkWidth()}),500)}},D=I,$=(i("68e4"),Object(h["a"])(D,z,B,!1,null,null,null)),E=$.exports;p()($,{VContainer:v["a"]});var W=i("5a69"),L=i("0d3b"),M=i.n(L),J=i("3a18"),V=i.n(J),X=i("6c4b"),A=i.n(X),Y={name:"App",components:{Carousel3d:s["Carousel3d"],Slide:s["Slide"],appSideBar:G,appGame:E,appHighScores:F},data:function(){return{gameStarted:!1,highScoresPage:!1,selectPic:"",startTime:0,images:{Scourge:{name:"Scourge",index:0,src:M.a,author:"Laurie Greasley",title:"Scourge of the Machines",characters:W["Scourge"].characters},Raid:{name:"Raid",index:1,src:V.a,author:"Josan Gonzalez & Laurie Greasley",title:"The Raid",characters:W["Raid"].characters},Incident:{name:"Incident",index:2,src:A.a,author:"Josan Gonzalez & Laurie Greasley",title:"Incident on Line 13",characters:W["Incident"].characters}},characters:[]}},methods:{startGame:function(e){this.gameStarted=!0,this.selectPic=e.name,this.startTime=Date.now(),this.characters=JSON.parse(JSON.stringify(e.characters))},viewHighScores:function(e){this.selectPic=e,this.highScoresPage=!0},update:function(e){this.highScoresPage=e,this.gameStarted=e},noScores:function(e){this.highScoresPage=e}}},K=Y,q=(i("034f"),Object(h["a"])(K,n,r,!1,null,null,null)),U=q.exports,Z=i("ce5b"),Q=i.n(Z);i("15f5");a["default"].use(Q.a);var ee=new Q.a({icons:{iconfont:"fa"}}),te=i("59ca"),ie=i.n(te),ae=(i("e71f"),{apiKey:"AIzaSyBLuc0x0vfnhZaszjId7pD2xmAwKrOuJr4",authDomain:"wheres-waldo-90a10.firebaseapp.com",databaseURL:"https://wheres-waldo-90a10.firebaseio.com",projectId:"wheres-waldo-90a10",storageBucket:"wheres-waldo-90a10.appspot.com",messagingSenderId:"805816168680",appId:"1:805816168680:web:58ef38b05ec525d79a195d"});ie.a.initializeApp(ae),a["default"].prototype.$firebase=ie.a,a["default"].config.productionTip=!1,new a["default"]({vuetify:ee,render:function(e){return e(U)}}).$mount("#app")},"5a69":function(e){e.exports=JSON.parse('{"Scourge":{"characters":[{"title":"smith","name":"Agent Smith","url":"https://i.redd.it/8uzj6arxtfc31.jpg","film":"The Matrix","difficulty":"medium","selected":false,"x":680,"y":180},{"title":"bender","name":"Bender","url":"https://en.wikipedia.org/wiki/Bender_(Futurama)#/media/File:Bender_Rodriguez.png","film":"Futurama","difficulty":"hard","selected":false,"x":195,"y":470},{"title":"data","name":"Data","film":"Star Trek","difficulty":"easy","selected":false,"url":"https://nerdist.com/wp-content/uploads/2019/08/intro-1497367373.jpg","x":820,"y":1070},{"title":"r2-d2","name":"R2-D2","url":"https://en.wikipedia.org/wiki/R2-D2#/media/File:R2-D2_Droid.png","film":"Star Wars","difficulty":"medium","selected":false,"x":255,"y":750},{"title":"number-six","name":"Number Six","url":"https://en.wikipedia.org/wiki/Number_Six_(Battlestar_Galactica)#/media/File:Number_Six_Tricia_Helfer.jpg","film":"Battlestar Galactica","difficulty":"easy","selected":false,"x":100,"y":1345},{"title":"wall-e","name":"Wall-e","url":"https://vignette.wikia.nocookie.net/pixar/images/d/de/Wall%E2%80%A2e_clipped_rev_1.png/revision/latest?cb=20170807223723","film":"Wall-e","difficulty":"hard","selected":false,"x":845,"y":1375}]},"Raid":{"characters":[{"title":"xena","name":"Xena","url":"https://en.wikipedia.org/wiki/Xena#/media/File:Returnofcallisto_02.jpg","film":"Xena: Warrior Princess","difficulty":"easy","selected":false,"x":385,"y":140},{"title":"rachel","name":"Rachel","url":"https://en.wikipedia.org/wiki/Replicant#/media/File:BladeRunner_Rachael.jpg","film":"Blade Runner","difficulty":"easy","selected":false,"x":565,"y":460},{"title":"space-invader","name":"Space Invader Alien","film":"Space Invaders","difficulty":"medium","selected":false,"url":"https://upload.wikimedia.org/wikipedia/commons/a/a9/Space_invaders_alien.svg","x":945,"y":1365},{"title":"eleven","name":"Eleven","url":"https://en.wikipedia.org/wiki/Eleven_(Stranger_Things)#/media/File:Eleven_(Stranger_Things).jpg","film":"Stranger Things","difficulty":"medium","selected":false,"x":980,"y":930},{"title":"fsociety","name":"FSociety","url":"https://vignette.wikia.nocookie.net/villains/images/4/4a/Wiki-logo.jpg","film":"Mr. Robot","difficulty":"hard","selected":false,"x":75,"y":1255},{"title":"chappie","name":"Chappie","url":"https://fi.wikipedia.org/wiki/Chappie#/media/Tiedosto:Chappie_poster.jpg","film":"Chappie","difficulty":"hard","selected":false,"x":775,"y":1525}]},"Incident":{"characters":[{"title":"pickle-rick","name":"Pickle Rick","url":"https://i.redd.it/8uzj6arxtfc31.jpg","film":"Rick and Morty","difficulty":"hard","selected":false,"x":47,"y":1525},{"title":"gizmo","name":"Gizmo","url":"https://vignette.wikia.nocookie.net/p__/images/6/62/Gizmo_%28Gremlins%29.png/revision/latest?cb=20130512002219&path-prefix=protagonist","film":"Gremlins","difficulty":"hard","selected":false,"x":205,"y":1310},{"title":"pale-man","name":"Pale Man","film":"Pan\'s Labyrinth","difficulty":"medium","selected":false,"url":"https://nocountryforbadfilm.files.wordpress.com/2018/06/pans.jpeg","x":840,"y":1390},{"title":"chucky","name":"Chucky","url":"https://en.wikipedia.org/wiki/Chucky_(character)#/media/File:Chucky_(Child\'s_Play).jpg","film":"Child\'s Play","difficulty":"medium","selected":false,"x":50,"y":300},{"title":"jason","name":"Jason","url":"https://upload.wikimedia.org/wikipedia/en/f/f7/Jason_Voorhees_%28Ken_Kirzinger%29.jpg","film":"Friday the 13th","difficulty":"easy","selected":false,"x":205,"y":475},{"title":"slimer","name":"Slimer","url":"https://upload.wikimedia.org/wikipedia/en/4/4f/Slimer.jpeg","film":"Ghost Busters","difficulty":"easy","selected":false,"x":645,"y":68}]}}')},"68e4":function(e,t,i){"use strict";var a=i("4e2d"),n=i.n(a);n.a},"6c4b":function(e,t,i){e.exports=i.p+"img/sci-fi3.d2e50779.jpg"},8161:function(e,t,i){},"85ec":function(e,t,i){},a7cd:function(e,t,i){"use strict";var a=i("553e"),n=i.n(a);n.a},e1d0:function(e,t,i){"use strict";var a=i("3371"),n=i.n(a);n.a}});
//# sourceMappingURL=app.27e001ba.js.map