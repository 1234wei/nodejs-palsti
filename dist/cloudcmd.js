!function(e){function t(t){for(var r,i,s=t[0],l=t[1],c=t[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);f.length;)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={21:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dist/";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;a.push([41,0]),n()}({142:function(e,t){},168:function(e,t){},169:function(e,t){},170:function(e,t){},24:function(e,t,n){"use strict";async function r(e){if(!navigator.serviceWorker)return;const t="https:"===location.protocol,n="localhost"===location.hostname;return t||n?await navigator.serviceWorker.register(e+"/sw.js"):void 0}e.exports.registerSW=r,e.exports.unregisterSW=async function(e){const t=await r(e);null==t||t.unregister(e)},e.exports.listenSW=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];null==e||e.addEventListener(...n)}},34:function(e,t,n){"use strict";const r=n(35),o=n(31),a=n(16),i=n(36),s=n(70),l=n(76),{createBinder:c}=n(77),u=n(7),d=DOM.CurrentInfo,f=u();f([]);const{assign:p}=Object,C=c();function m(e){const{key:t,shift:n,keyCode:r,keyIdentifier:o}=e,a=t||function(e){const t=e.substring(2),n=parseInt(t,16);return String.fromCharCode(n)}(o);return[function(e,t){switch(t){case i.DOT:return".";case i.HYPHEN:return e?"_":"-";case i.EQUAL:return e?"+":"="}return""}(n,r),a]}async function g(e){const{keyCode:t}=e;if(void 0===e.altKey)return;const n=e.altKey,a=e.ctrlKey,c=e.metaKey,u=t>=i.ZERO&&t<=i.Z,p=/Numpad/.test(e.code),[g,D]=m(e);if(!C.isBind())return;(e=>{const{_config:t,config:n}=CloudCmd;e===i.ESC&&t("vim",!n("vim"))})(t);const h=CloudCmd.config("vim");if(!h&&!p&&!n&&!a&&!c&&(u||g))return l(D,f);f([]),await async function(e){let t,n,a,s,l,c=d.element;const{name:u,panel:f,path:p,isDir:C}=d,{Operation:m,changeDir:g,config:D}=CloudCmd,{keyCode:h}=e,w=e.altKey,O=e.shiftKey,y=e.ctrlKey,v=e.metaKey,M=y||v;c&&(a=c.previousSibling,s=c.nextSibling);switch(h){case i.TAB:DOM.changePanel(),e.preventDefault();break;case i.INSERT:case i.INSERT_MAC:DOM.toggleSelectedFile(c).setCurrentFile(s);break;case i.DELETE:O?m.show("delete:silent"):m.show("delete");break;case i.ASTERISK:DOM.toggleAllSelectedFiles(c);break;case i.PLUS:DOM.expandSelection(),e.preventDefault();break;case i.MINUS:DOM.shrinkSelection(),e.preventDefault();break;case i.F1:CloudCmd.Help.show(),e.preventDefault();break;case i.F2:CloudCmd.UserMenu.show();break;case i.F3:e.preventDefault(),d.isDir?await g(p):O?CloudCmd.View.show(null,{raw:!0}):M?CloudCmd.sortPanel("name"):CloudCmd.View.show();break;case i.F4:D("vim")?CloudCmd.EditFileVim.show():CloudCmd.EditFile.show(),e.preventDefault();break;case i.F5:M?CloudCmd.sortPanel("date"):w?m.show("pack"):m.show("copy"),e.preventDefault();break;case i.F6:M?CloudCmd.sortPanel("size"):O?DOM.renameCurrent(c):m.show("move"),e.preventDefault();break;case i.F7:O?DOM.promptNewFile():DOM.promptNewDir(),e.preventDefault();break;case i.F8:m.show("delete"),e.preventDefault();break;case i.F9:w?m.show("extract"):CloudCmd.Menu.show(),e.preventDefault();break;case i.F10:CloudCmd.Config.show(),e.preventDefault();break;case i.TRA:if(e.preventDefault(),O)return CloudCmd.Terminal.show();CloudCmd.Konsole.show();break;case i.BRACKET_CLOSE:CloudCmd.Konsole.show(),e.preventDefault();break;case i.SPACE:e.preventDefault(),n=!C||".."===u||DOM.isSelected(c),n||await DOM.loadCurrentSize(c),DOM.toggleSelectedFile(c);break;case i.U:M&&(DOM.swapPanels(),e.preventDefault());break;case i.UP:O&&DOM.toggleSelectedFile(c),DOM.setCurrentFile(a),e.preventDefault();break;case i.DOWN:O&&DOM.toggleSelectedFile(c),DOM.setCurrentFile(s),e.preventDefault();break;case i.LEFT:if(!w)return;e.preventDefault(),l=d.panel.getAttribute("data-name"),"js-right"===l&&DOM.duplicatePanel();break;case i.RIGHT:if(!w)return;e.preventDefault(),l=d.panel.getAttribute("data-name"),"js-left"===l&&DOM.duplicatePanel();break;case i.HOME:DOM.setCurrentFile(d.first),e.preventDefault();break;case i.END:DOM.setCurrentFile(d.last),e.preventDefault();break;case i.PAGE_DOWN:for(DOM.scrollByPages(f,1),t=0;t<30&&c.nextSibling;t++)c=c.nextSibling;DOM.setCurrentFile(c),e.preventDefault();break;case i.PAGE_UP:for(DOM.scrollByPages(f,-1),t=0;t<30&&c.previousSibling;t++)c=c.previousSibling;DOM.setCurrentFile(c),e.preventDefault();break;case i.ENTER:d.isDir?await g(p):CloudCmd.View.show();break;case i.BACKSPACE:CloudCmd.goToParentDir(),e.preventDefault();break;case i.BACKSLASH:M&&await g("/");break;case i.A:M&&(DOM.selectAllFiles(),e.preventDefault());break;case i.G:w&&(DOM.goToDirectory(),e.preventDefault());break;case i.M:M&&(D("vim")?CloudCmd.EditNamesVim.show():CloudCmd.EditNames.show(),e.preventDefault());break;case i.P:if(!M)return;e.preventDefault(),r.writeText(d.dirPath).catch(CloudCmd.log);break;case i.R:M&&(CloudCmd.log("reloading page...\n"),CloudCmd.refresh(),e.preventDefault());break;case i.C:M&&o.copy();break;case i.X:M&&o.cut();break;case i.V:M&&o.paste();break;case i.Z:M&&o.clear();break;case i.COLON:CloudCmd.CommandLine.show(),e.preventDefault();break;case i.D:M&&(CloudCmd.log("clearing storage..."),await DOM.Storage.clear(),CloudCmd.log("storage cleared"),e.preventDefault())}}(e),t>=i.F1&&t<=i.F10||h&&s(D,e)}e.exports=p(C,i),e.exports.bind=()=>{a.addKey(g,!0),C.setBind()},e.exports._listener=g},41:function(e,t,n){"use strict";n(142),n(168),n(169),n(170);const r=n(8),o=n(4),{registerSW:a,listenSW:i}=n(24);function s(e){return e?e.indexOf("/")?"/"+e:e:""}e.exports=window.CloudCmd=async e=>{window.Util=n(10),window.CloudFunc=n(6),window.DOM=n(11),window.CloudCmd=n(67),await async function(e){const{prefix:t}=e,n=await a(t);i(n,"updatefound",l(e))}(e),n(79),n(34),n(82);const t=s(e.prefix);window.CloudCmd.init(t,e)};const l=r(async e=>{const{DOM:t}=window,n=s(e.prefix);await o.js(n+"/dist/cloudcmd.common.js"),await o.js(n+"/dist/cloudcmd.js"),console.log("cloudcmd: sw: updated"),t.Events.removeAll(),window.CloudCmd(e)})},67:function(e,t,n){"use strict";const r=n(28),o=n(30),a=n(12),i=n(4),s=n(3),{addSlashToEnd:l}=n(32),c=n(33),u=n(0),d=n(1),{unregisterSW:f}=n(24),p=n(69),C=n(34),{apiURL:m,formatMsg:g,buildFromJSON:D}=n(6),h=n(78);function w(e){let t;r.call(this);const n=this,o=e.CurrentInfo,{Storage:w,Files:O}=e;this.log=function(){},this.prefix="",this.prefixSocket="",this.prefixURL="",this.MIN_ONE_PANEL_WIDTH=1155,this.HOST=location.origin||location.protocol+"//"+location.host,this.TITLE="Cloud Commander",this.sort={left:"name",right:"name"},this.order={left:"asc",right:"asc"},this.changeDir=async function(t){let{isRefresh:n,panel:r,history:a=!0,noCurrent:i,currentName:s}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const c=n;let u,f;!i&&r&&r!==o.panel&&(e.changePanel(),u=!0),(u||c||!a)&&(f="top"),d.show.load(f,r),await b(l(t),{refresh:c,history:a,noCurrent:i,currentName:s},r)},this.init=async(r,o)=>{n.prefix=r,n.prefixURL=`${r}${m}`,n.prefixSocket=o.prefixSocket,n.DIR_DIST=r+"/dist",n.DIR_MODULES=this.DIR_DIST+"/modules",n.config=e=>o[e],n.config.if=u((e,t,n)=>o[e]&&t(n)),n._config=(e,t)=>{"password"!==e&&(o[e]=t)},o.oneFilePanel&&(n.MIN_ONE_PANEL_WIDTH=1/0),document.body.scrollIntoViewIfNeeded||await i.js(n.DIR_MODULES+"/polyfill.js"),await y(),await async function(){const r=e.getFiles();n.on("current-file",e.updateCurrentInfo),n.on("current-name",v);const o=await w.get("current-name"),a=o&&e.getCurrentByName(o)||r[0];r&&e.setCurrentFile(a,{history:!location.hash});const i=e.getCurrentDirPath();t=n.Listeners,t.init();if(M().forEach(t.setOnPanel),t.initKeysPanel(),!n.config("dirStorage"))return;await w.get(i)||await w.setJson(i,p())}(),await async function(){const{prefix:e}=n,t=e+"/dist/cloudcmd.common.css";await i.css(t)}(),n.route(location.hash)},this.route=t=>{const r=t.split("/");if(!t)return;const[o]=r,a=c(o.slice(1)).replace(/.js$/,"");const i=r[1],s=e.getCurrentByName(i);if(!i||s)e.setCurrentFile(s),n.execFromModule(a,"show");else{const e=g("set current file",i,"error");n.log(e)}},this.logOut=async()=>{const t=n.prefix+"/logout",{prefix:r}=n;await e.Storage.clear(),f(r),e.load.ajax({url:t,error:()=>document.location.reload()})};const y=async()=>{n.Key=C,n.Key.bind();const[,e]=await s(O.get,"modules"),t=d.show.load,r={edit:t,menu:t};if(e)for(const t of e.local)h({name:null,path:t,dobefore:r[t]})};async function v(e){await w.set("current-name",e)}function M(){const e=["left"];return n.config("oneFilePanel")?e:[...e,"right"]}async function b(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0;const{RESTful:s}=e;n.log(`reading dir: "${t}";`);const l=n.config("dirStorage"),c=l&&await w.getJson(t),u=r.currentName||o.name,{noCurrent:d,refresh:f}=r;if(!f&&c)return await k(c,i,r);const p=e.getPanelPosition(i),C=n.sort[p],m=n.order[p],g=a("?sort={{ sort }}&order={{ order }}",{sort:C,order:m}),[,D]=await s.read(t+g,"json");D&&(r.sort=C,r.order=m,await k(D,i,r),f&&!d&&e.setCurrentByName(u),n.config("dirStorage")&&w.setJson(t,D))}async function k(r,a,i){const{history:l,noCurrent:c}=i,[u,[d,f,p,C]]=await s(O.get,["file","path","link","pathLink"]);if(u)return e.Dialog.alert(u.responseText);const m=a||e.getPanel(),{prefix:g}=n,{dir:h,name:w}=o,{childNodes:y}=m;let v=y.length;for(;v--;)m.removeChild(m.lastChild);if(m.innerHTML=D({sort:i.sort,order:i.order,data:r,id:m.id,prefix:g,template:{file:d,path:f,pathLink:C,link:p}}),t.setOnPanel(m),!c){let t;".."===w&&"/"!==h&&(t=e.getCurrentByName(h)),t||([t]=e.getFiles(m)),e.setCurrentFile(t,{history:l}),n.emit("active-dir",o.dirPath)}}this.execFromModule=async function(e,t){await n[e]();const r=n[e][t];for(var o=arguments.length,a=new Array(o>2?o-2:0),i=2;i<o;i++)a[i-2]=arguments[i];r(...a)},this.refresh=async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{panel:r=o.panel,currentName:a}=t,i=e.getCurrentDirPath(r),s=!0,l=!1,c=!!t&&t.noCurrent;await n.changeDir(i,{isRefresh:s,history:l,panel:r,noCurrent:c,currentName:a})},this.goToParentDir=async()=>{const{dir:t,dirPath:r,parentDirPath:a,panel:i}=o;if(r===a)return;const s=a;await n.changeDir(s);const l=e.getCurrentByName(t),[c]=e.getFiles(i);e.setCurrentFile(l||c,{history:history})}}o(w,r),e.exports=new w(DOM),i.addErrorListener((e,t)=>{const n=`file ${t} could not be loaded`;d.show.error(n)})},69:function(e,t,n){"use strict";const r=DOM.CurrentInfo;e.exports=()=>({path:DOM.getCurrentDirPath(),files:(r.files||[]).filter(e=>".."!==DOM.getCurrentName(e)).map(e=>{const t=DOM.getCurrentName(e),n=DOM.getCurrentSize(e),r=DOM.getCurrentOwner(e);return{name:t,size:n,mode:DOM.getCurrentMode(e),owner:r,date:DOM.getCurrentDate(e),type:DOM.getCurrentType(e)}})})},70:function(e,t,n){"use strict";const r=n(71),o=n(72),a=DOM.CurrentInfo,{Dialog:i}=DOM;e.exports=async(e,t)=>{const n=s(t);await r(e,n)};const s=e=>({escape:DOM.unselectFiles,remove:()=>{CloudCmd.Operation.show("delete")},makeDirectory:()=>{e.stopImmediatePropagation(),e.preventDefault(),DOM.promptNewDir()},makeFile:()=>{e.stopImmediatePropagation(),e.preventDefault(),DOM.promptNewFile()},terminal:()=>{CloudCmd.Terminal.show()},edit:()=>{CloudCmd.EditFileVim.show()},copy:()=>{DOM.Buffer.copy(),DOM.unselectFiles()},select:()=>{const e=a.element;DOM.toggleSelectedFile(e)},paste:DOM.Buffer.paste,moveNext:e=>{let{count:t,isVisual:n,isDelete:r}=e;c("next",{count:t,isVisual:n,isDelete:r})},movePrevious:e=>{let{count:t,isVisual:n,isDelete:r}=e;c("previous",{count:t,isVisual:n,isDelete:r})},find:async()=>{e.preventDefault();const[,t]=await i.prompt("Find","");if(!t)return;const n=a.files.map(DOM.getCurrentName),[r]=o.find(t,n);DOM.setCurrentByName(r)},findNext:()=>{const e=o.findNext();DOM.setCurrentByName(e)},findPrevious:()=>{const e=o.findPrevious();DOM.setCurrentByName(e)}});function l(e){".."!==DOM.getCurrentName(e)&&DOM.selectFile(e)}function c(e,t){let{count:n,isVisual:r,isDelete:o}=t,i=a.element;const s=r?l:DOM.unselectFile;s(i);const c=e+"Sibling";for(let e=0;e<n;e++){const e=i[c];if(!e)break;i=e,s(i)}DOM.setCurrentFile(i),o&&CloudCmd.Operation.show("delete")}e.exports.selectFile=l},71:function(e,t,n){"use strict";const r=n(7),o=r(""),a=r(!1),i=()=>{a(!1)},s=()=>{o("")},l=()=>{};function c(e){const t="d"===e[0];t&&(a(!0),e=e.split("").slice(1).join(""));var n;return{count:(n=e)?"g"===n?1:parseInt(n):1,isDelete:t,isVisual:a()}}e.exports=(e,t)=>{const n=o(),r=a(),u=o(n.concat(e)),{escape:d=l,moveNext:f=l,movePrevious:p=l,remove:C=l,copy:m=l,paste:g=l,select:D=l,find:h=l,findNext:w=l,findPrevious:O=l,makeFile:y=l,makeDirectory:v=l,terminal:M=l,edit:b=l}=t;if("Enter"===e)return s();if("Escape"===e)return a(!1),d(),s();if("j"===e||"w"===e){const{count:e,isDelete:t,isVisual:r}=c(n);return!isNaN(e)&&f({count:e,isVisual:r,isDelete:t}),s()}if("k"===e||"b"===e){const{count:e,isDelete:t,isVisual:r}=c(n);return!isNaN(e)&&p({count:e,isVisual:r,isDelete:t}),s()}if("gg"===u||"^"===e){const{isDelete:e,isVisual:t}=c(n);return p({count:1/0,isVisual:t,isDelete:e}),s()}return"md"===u?(v(),s()):"tt"===u?(M(),s()):"e"===u?(b(),s()):"mf"===u?(y(),s()):"d"!==e||!a()&&"d"!==n?"G"===e||"$"===e?(f({count:1/0,isVisual:r}),s()):"y"===e?a()?(i(),m(),s()):s():/^p$/i.test(e)?(g(),s()):/^v$/i.test(e)?(a(!a()),D(),s()):"/"===e?(h(),s()):"n"===e?(w(),s()):"N"===e?(O(),s()):void 0:(i(),C(),s())}},72:function(e,t,n){"use strict";const r=n(7),o=n(73),a=r([]),i=r(0);function s(e,t){return e===t-1?0:++e}function l(e,t){return e?--e:t-1}e.exports.find=(e,t)=>{const n=o(e,t);return a(n),i(0),n},e.exports.findNext=()=>{const e=a(),t=s(i(),e.length);return i(t),e[i()]},e.exports.findPrevious=()=>{const e=a(),t=l(i(),e.length);return i(t),e[t]},e.exports._next=s,e.exports._previous=l},76:function(e,t,n){"use strict";const{escapeRegExp:r}=n(10),o=DOM.CurrentInfo;e.exports=function(e,t){let n,a=0,i=!1,s=0;const l=r(e),c=new RegExp(`^${l}.*$`,"i"),{files:u}=o,d=t(),f=d.length;for(;s<f&&e===d[s];)s++;s||t([]);const p=a=s;t(t().concat(e));var C;DOM.getFilenames(u).filter(e=>c.test(e)).filter((C=e=>".."===e,e=>!C(e))).some(e=>{const t=DOM.getCurrentByName(e);if(!a)return i=!0,DOM.setCurrentFile(t),!0;p===a&&(n=t),--a}),i||(DOM.setCurrentFile(n),t([e]))}},77:function(e,t,n){"use strict";e.exports.createBinder=()=>{let e=!1;return{isBind:()=>e,setBind(){e=!0},unsetBind(){e=!1}}}},78:function(e,t,n){"use strict";const r=n(5),o=n(3),a=n(4).js,i=n(33);e.exports=function(e){if(!e)return;const{path:t}=e,n=t&&i(t).replace(/.js$/,"");const s=e.dobefore;CloudCmd[n]||(CloudCmd[n]=async()=>{r(s);const{DIR_MODULES:e}=CloudCmd,o=`${e}/${t}.js`;await a(o);const i=async e=>e&&e(),l=CloudCmd[n];return Object.assign(i,l),CloudCmd[n]=i,CloudCmd.log("init",n),await l.init(),i},CloudCmd[n].show=async function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];CloudCmd.log("show",n,t);const a=CloudCmd[n],[i,s]=await o(a);return i?console.error(i):await s.show(...t)})}},79:function(e,t,n){"use strict";const r=n(5),o=n(19),a=n(0),i=n(3),s=n(35),l=n(80),c=n(38),{FS:u}=n(6),d=a(n(81)),f=RegExp(String.fromCharCode(160),"g");e.exports.init=async()=>{await Promise.all([M(),b(),void DOM.Events.add(["unload","beforeunload"],e=>{const{Key:t}=CloudCmd,n=null==t?void 0:t.isBind();if(!n)return e.preventDefault(),"Please make sure that you saved all work."}),void m.add("popstate",async e=>{let{state:t}=e;const n=(t||"").replace(u,"");if(!n)return CloudCmd.route(location.hash);await CloudCmd.changeDir(n,{history:!1})}),void m.add("resize",()=>{const e=window.innerWidth<CloudCmd.MIN_ONE_PANEL_WIDTH;if(!e)return;const{panel:t}=C,n=!t;if(n)return;const r=t.getAttribute("data-name"),o="js-left"===r;o||DOM.changePanel()}),h(),w()])},CloudCmd.Listeners=e.exports;const p=a((e,t)=>{for(const n of e)n(t)}),C=DOM.CurrentInfo,{Events:m}=DOM,g={mousedown:r.with(y,(function(e){const t={alt:e.altKey,ctrl:e.ctrlKey,meta:e.metaKey,shift:e.shiftKey},n=v(e.target),r=C.name;DOM.setCurrentFile(n);const o=C.name;let a=[];t.shift?a=function(e,t){const n=DOM.getAllFiles(),r=DOM.getFilenames(n),o=d(r),a=o(e),i=o(t);return l(a,i,n)}(r,o):a.push(C.element);0===e.button&&function(e,t){const n=/Mac/.test(window.navigator.platform);if(!e)throw Error("key should not be undefined!");const[r]=t;if(n&&e.meta||e.ctrl)return DOM.toggleSelectedFile(r);if(e.shift)t.map(DOM.selectFile)}(t,a)})),click:p([function(e){e.preventDefault(),function(e){const{panel:t}=C,n=DOM.getByDataName("js-files",t);(function(e){for(;"UL"!==e.tagName;)e=e.parentElement;return e})(e)!==n&&DOM.changePanel()}(e.target)},e=>{const t=/Mac/.test(window.navigator.platform),{shiftKey:n,metaKey:r,ctrlKey:o}=e;n||t&&r||o||DOM.unselectFiles()}]),dragstart:r.with(y,(function(e){const{prefixURL:t}=CloudCmd,n=v(e.target),{isDir:r}=C;let o=DOM.getCurrentLink(n),a=DOM.getCurrentName(n);r&&(a+=D,o=document.createElement("a"),o.textContent=a,o.href=t+"/pack"+C.path+D);e.dataTransfer.setData("DownloadURL","application/octet-stream:"+a+":"+o)})),dblclick:r.with(y,(async function(e){e.preventDefault();const t=v(e.target),n=DOM.isCurrentIsDir(t),r=DOM.getCurrentPath(t);if(!n)return CloudCmd.View.show();await CloudCmd.changeDir(r)})),touchstart:r.with(y,(async function(e){const t=v(e.target);if(!DOM.isCurrentIsDir(t))return;if(!DOM.isCurrentFile(t))return;await CloudCmd.changeDir(DOM.getCurrentPath(t))}))};let D;function h(){const e=DOM.getFM(),t=e=>e.dataset,n=e=>/^js-(left|right)$/.test(e.dataset.name);m.addClick(e,e=>{const r=e.target;if("js-fm-header"!==r.parentElement.dataset.name)return;const o=(r.dataset.name||"").replace("js-","");if(!/^(name|size|date)$/.test(o))return;const a=function e(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t?e(t.parentElement,n.concat(t)):n}(r).filter(t).filter(n).pop();CloudCmd.sortPanel(o,a)})}async function w(){const[,e]=await i(DOM.Files.get,"config"),t=null==e?void 0:e.packer;D=DOM.getPackerExt(t)}e.exports.initKeysPanel=()=>{const e=DOM.getById("js-keyspanel");e&&m.addClick(e,e=>{let{target:t}=e;const{id:n}=t,o=e=>{const{Operation:t}=CloudCmd;return t.show.bind(null,e)},a={f1:CloudCmd.Help.show,f2:CloudCmd.UserMenu.show,f3:CloudCmd.View.show,f4:CloudCmd.EditFile.show,f5:o("copy"),f6:o("move"),f7:DOM.promptNewDir,f8:o("delete"),f9:CloudCmd.Menu.show,f10:CloudCmd.Config.show,"~":CloudCmd.Konsole.show,"shift~":CloudCmd.Terminal.show,contact:CloudCmd.Contact.show};r(a[n])})};async function O(e,t){t.preventDefault();const n=t.target,r=n.getAttribute("data-name"),o=function(e){const t=C.panel;return!t||e.getAttribute("data-name")!==t.getAttribute("data-name")}(e);if("js-copy-path"===r)return a=n,void s.writeText(a.parentElement.title).then(CloudCmd.log).catch(CloudCmd.log);var a;if("js-refresh"===r)return CloudCmd.refresh({panel:e,noCurrent:o});if("js-path-link"!==r)return;const{href:i}=n,l=function(e){const t=CloudCmd.HOST,{prefix:n}=CloudCmd,r=RegExp("^"+n+u);return decodeURI(e).replace(t,"").replace(r,"").replace("%%","%25%").replace(f," ")||"/"}(i);await CloudCmd.changeDir(l,{isRefresh:!1,panel:o?e:C.panel})}function y(e,t){const{target:n}=t,{tagName:r}=n;"UL"!==r&&e(t)}function v(e){if(!e)return e;for(;"LI"!==e.tagName;)e=e.parentElement;return e}function M(){const e=DOM.getFM();m.addOnce("contextmenu",e,e=>{CloudCmd.Menu.show({x:e.clientX,y:e.clientY})}),m.addContextMenu(e,e=>{CloudCmd.Menu.ENABLED||e.preventDefault()})}function b(){const e=DOM.getByClassAll("panel"),t=e=>{let{target:t}=e;t.classList.add("selected-panel")},n=e=>{let{target:t}=e;t.classList.remove("selected-panel")},r=e=>{const{files:t,items:n}=e.dataTransfer,{length:r}=t;if(e.preventDefault(),r&&(!n||!n.length||!n[0].webkitGetAsEntry))return c(t);const o=Array.from(n).filter(e=>"file"===e.kind);if(o.length)return DOM.uploadDirectory(o);const{Operation:a}=CloudCmd,i=e.shiftKey?"move":"copy";return a.show(i)},o=e=>{const{dataTransfer:t}=e,{effectAllowed:n}=t;/move|linkMove/.test(n)?t.dropEffect="move":t.dropEffect="copy",e.preventDefault()};for(const a of e)m.add("dragover",a,o).add("drop",a,r).add("dragenter",t).add(["dragleave","drop"],n)}e.exports.setOnPanel=e=>{const t=(e=>o.string(e)?DOM.getByDataName("js-"+e):e)(e),n=DOM.getByDataName("js-files",t),r=DOM.getByDataName("js-path",t);m.addClick(r,function(e){return O.bind(null,e)}(t)),m.add(n,g)}},80:function(e,t,n){"use strict";e.exports=(e,t,n)=>e<t?n.slice(e,t+1):e>t?n.slice(t,e+1):[n[e]]},81:function(e,t,n){"use strict";e.exports=(e,t)=>{const n=e.indexOf(t);return~n?n:0}},82:function(e,t,n){"use strict";const r=n(11),o=r.CurrentInfo,{sort:a,order:i}=CloudCmd,s=r.getPanelPosition();let l=a[s];const{getPanel:c}=r;CloudCmd.sortPanel=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c();const n=t.dataset.name.replace("js-","");e!==l?i[n]="asc":"asc"===i[n]?i[n]="desc":i[n]="asc",l=a[n]=e;const r=n!==o.panelPosition;CloudCmd.refresh({panel:t,noCurrent:r})}}});
//# sourceMappingURL=cloudcmd.js.map