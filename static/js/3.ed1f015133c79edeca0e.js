webpackJsonp([3],{"+jlW":function(t,e,n){!function(e,n){t.exports=n()}(0,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=".",e(e.s=10)}([function(t,e,n){n(7);var i=n(5)(n(2),n(6),null,null);t.exports=i.exports},function(t,e,n){"use strict";t.exports=function(t){function e(e){e.preventDefault(),"function"==typeof t&&t(e)}function n(t){27===t.keyCode&&e(t)}var i=!1;return{get isListening(){return i},start:function(t){window.addEventListener("click",e,!0),window.addEventListener("keyup",n,!0),i=!0,"function"==typeof t&&t()},stop:function(t){window.removeEventListener("click",e,!0),window.removeEventListener("keyup",n,!0),i=!1,"function"==typeof t&&t()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),o=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={name:"context-menu",props:{id:{type:String,default:"default-ctx"}},data:function(){var t=this;return{locals:{},align:"left",ctxTop:0,ctxLeft:0,ctxVisible:!1,bodyClickListener:(0,o.default)(function(e){if(!t.ctxVisible||t.$el.contains(e.target))t.ctxVisible=!1,t.$emit("ctx-close",t.locals);else{if(1!==e.which)return e.preventDefault(),e.stopPropagation(),!1;t.ctxVisible=!1,t.$emit("ctx-cancel",t.locals),e.stopPropagation()}})}},methods:{setPositionFromEvent:function(t){var e=this;t=t||window.event;var n=document.scrollingElement||document.documentElement;return t.pageX||t.pageY?(this.ctxLeft=t.pageX,this.ctxTop=t.pageY-n.scrollTop):(t.clientX||t.clientY)&&(this.ctxLeft=t.clientX+n.scrollLeft,this.ctxTop=t.clientY+n.scrollTop),this.$nextTick(function(){var t=e.$el,n=(t.style.minHeight||t.style.height).replace("px","")||32,i=(t.style.minWidth||t.style.width).replace("px","")||32,o=t.scrollHeight||n,s=t.scrollWidth||i,r=window.innerHeight-o-25,a=window.innerWidth-s-25;e.ctxTop>r&&(e.ctxTop=r),e.ctxLeft>a&&(e.ctxLeft=a)}),t},open:function(t,e){return this.ctxVisible&&(this.ctxVisible=!1),this.ctxVisible=!0,this.$emit("ctx-open",this.locals=e||{}),this.setPositionFromEvent(t),this.$el.setAttribute("tab-index",-1),this.bodyClickListener.start(),this}},watch:{ctxVisible:function(t,e){!0===e&&!1===t&&this.bodyClickListener.stop(function(t){})}},computed:{ctxStyle:function(){return{display:this.ctxVisible?"block":"none",top:(this.ctxTop||0)+"px",left:(this.ctxLeft||0)+"px"}}}}},function(t,e,n){e=t.exports=n(4)(void 0),e.push([t.i,'.ctx{position:relative}.ctx-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:160px;padding:5px 0;margin:2px 0 0;font-size:.9rem;color:#373a3c;text-align:left;list-style:none;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem;-moz-box-shadow:0 0 5px #ccc;-webkit-box-shadow:0 0 5px #ccc;box-shadow:0 0 5px #ccc}.ctx-divider{height:1px;margin:.5rem 0;overflow:hidden;background-color:#e5e5e5}.ctx-item{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.5;color:#373a3c;text-align:inherit;white-space:nowrap;background:none;border:0;cursor:default}.ctx-item:focus,.ctx-item:hover{color:#2b2d2f;text-decoration:none;background-color:#f5f5f5;cursor:normal}.ctx-item.active,.ctx-item.active:focus,.ctx-item.active:hover{color:#fff;text-decoration:none;background-color:#0275d8;outline:0}.ctx-item.disabled,.ctx-item.disabled:focus,.ctx-item.disabled:hover{color:#818a91}.ctx-item.disabled:focus,.ctx-item.disabled:hover{text-decoration:none;cursor:not-allowed;background-color:transparent;background-image:none;filter:"progid:DXImageTransform.Microsoft.gradient(enabled = false)"}.open>.ctx-menu{display:block}.open>a{outline:0}.ctx-menu-right{right:0;left:auto}.ctx-menu-left{right:auto;left:0}.ctx-header{display:block;padding:3px 20px;font-size:.9rem;line-height:1.5;color:#818a91;white-space:nowrap}.ctx-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:990}.pull-right>.ctx-menu{right:0;left:auto}.ctx-menu-container{position:fixed;padding:0;border:1px solid #bbb;background-color:#f5f5f5;z-index:99999;box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}',""])},function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var s=i(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([s]).join("\n")}return[n].join("\n")}function i(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=n(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(i[s]=!0)}for(o=0;o<t.length;o++){var r=t[o];"number"==typeof r[0]&&i[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),e.push(r))}},e}},function(t,e){t.exports=function(t,e,n,i){var o,s=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(o=t,s=t.default);var a="function"==typeof s?s.options:s;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),i){var l=a.computed||(a.computed={});Object.keys(i).forEach(function(t){var e=i[t];l[t]=function(){return e}})}return{esModule:o,exports:s,options:a}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"contextMenu",staticClass:"ctx-menu-container",style:t.ctxStyle,attrs:{id:t.id},on:{click:function(t){t.stopPropagation()},contextmenu:function(t){t.stopPropagation()}}},[n("div",{staticClass:"ctx open",staticStyle:{"background-color":"transparent"}},[n("ul",{staticClass:"ctx-menu",class:{"ctx-menu-right":"right"===t.align,"ctx-menu-left":"left"===t.align},attrs:{role:"menu"}},[t._t("default")],2)])])},staticRenderFns:[]}},function(t,e,n){var i=n(3);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals),n(8)("0df30a58",i,!0)},function(t,e,n){function i(t){for(var e=0;e<t.length;e++){var n=t[e],i=d[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(r(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(r(n.parts[o]));d[n.id]={id:n.id,refs:1,parts:s}}}}function o(t,e){for(var n=[],i={},o=0;o<e.length;o++){var s=e[o],r=s[0],a=s[1],l=s[2],h=s[3],d={css:a,media:l,sourceMap:h};i[r]?(d.id=t+":"+i[r].parts.length,i[r].parts.push(d)):(d.id=t+":0",n.push(i[r]={id:r,parts:[d]}))}return n}function s(){var t=document.createElement("style");return t.type="text/css",c.appendChild(t),t}function r(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]'),o=null!=i;if(o&&A)return f;if(m){var r=p++;i=u||(u=s()),e=a.bind(null,i,r,!1),n=a.bind(null,i,r,!0)}else i=i||s(),e=l.bind(null,i),n=function(){i.parentNode.removeChild(i)};return o||e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function a(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=g(e,o);else{var s=document.createTextNode(o),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(s,r[e]):t.appendChild(s)}}function l(t,e){var n=e.css,i=e.media,o=e.sourceMap;if(i&&t.setAttribute("media",i),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var h="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!h)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(9),d={},c=h&&(document.head||document.getElementsByTagName("head")[0]),u=null,p=0,A=!1,f=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){A=n;var s=o(t,e);return i(s),function(e){for(var n=[],r=0;r<s.length;r++){var a=s[r],l=d[a.id];l.refs--,n.push(l)}e?(s=o(t,e),i(s)):s=[];for(var r=0;r<n.length;r++){var l=n[r];if(0===l.refs){for(var h=0;h<l.parts.length;h++)l.parts[h]();delete d[l.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],i={},o=0;o<e.length;o++){var s=e[o],r=s[0],a=s[1],l=s[2],h=s[3],d={id:t+":"+o,css:a,media:l,sourceMap:h};i[r]?i[r].parts.push(d):n.push(i[r]={id:r,parts:[d]})}return n}},function(t,e,n){"use strict";var i=n(0);i.install=function(t){return t.component("context-menu",i)},window.VueContextMenu=i,t.exports=t.exports.default=i}])})},"0FJT":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._l(t.pages,function(e){return n("div",{directives:[{name:"show",rawName:"v-show",value:e.id===t.curPageId,expression:"page.id === curPageId"}],key:e.id,staticClass:"comp-lists",style:t._f("calcStyle")(e.css)},[n("div",{staticClass:"wrap-bg",style:{backgroundColor:e.css.bgc,backgroundImage:"url("+e.css.bgi+")"}}),t._v(" "),t._l(e.comps,function(e){return n("vue-drr",{key:e.id,attrs:{w:e.css.w||e.css.base.w,h:e.css.h||e.css.base.h,y:e.css.t||e.css.base.t,x:e.css.l||e.css.base.l,minw:10,minh:10,angle:e.css.rotate||e.css.base.rotate},on:{activated:function(n){return t.toggleCompid(e.id)},dragging:t.handleDragging,resizing:t.handleResizing,rotating:t.handleRotating},nativeOn:{contextmenu:function(e){return e.preventDefault(),t.$refs.ctxMenu.open(e)},click:function(n){return t.handleClick(e)},dblclick:function(n){return t.handleDblclick(e.name)}}},[n("component-renderer",{attrs:{comp:e,type:"edit"}})],1)})],2)}),t._v(" "),n("context-menu",{ref:"ctxMenu",staticClass:"right-menu"},[n("el-dropdown-item",{nativeOn:{click:function(e){return t.handleDelete(e)}}},[t._v("删除")])],1)],2)},o=[],s={render:i,staticRenderFns:o};e.a=s},"1iSt":function(t,e,n){"use strict";e.a={name:"vue-drr",props:{active:{type:Boolean,default:!1},draggable:{type:Boolean,default:!0},resizable:{type:Boolean,default:!0},rotatable:{type:Boolean,default:!0},w:{type:Number,default:200,validator:function(t){return t>0}},h:{type:Number,default:200,validator:function(t){return t>0}},minw:{type:Number,default:50,validator:function(t){return t>0}},minh:{type:Number,default:50,validator:function(t){return t>0}},angle:{type:Number,default:0,validator:function(t){return"number"==typeof t}},x:{type:Number,default:0,validator:function(t){return"number"==typeof t}},y:{type:Number,default:0,validator:function(t){return"number"==typeof t}},handles:{type:Array,default:function(){return["n","e","s","w","nw","ne","se","sw"]}},axis:{type:String,default:"both",validator:function(t){return-1!==["x","y","both"].indexOf(t)}},grid:{type:Array,default:function(){return[1,1]}},parent:{type:Boolean,default:!1}},created:function(){this.parentW=9999,this.parentH=9999,this.lastMouseX=0,this.lastMouseY=0,this.mouseOffX=0,this.mouseOffY=0,this.elmX=0,this.elmY=0,this.elmW=0,this.elmH=0},mounted:function(){document.documentElement.addEventListener("mousedown",this.deselect,!0),document.documentElement.addEventListener("mousemove",this.handleMove,!0),document.documentElement.addEventListener("mouseup",this.handleUp,!0),this.elmX=parseInt(this.$el.style.left),this.elmY=parseInt(this.$el.style.top),this.elmW=this.$el.offsetWidth||this.$el.clientWidth,this.elmH=this.$el.offsetHeight||this.$el.clientHeight,this.reviewDimensions()},beforeDestroy:function(){document.documentElement.removeEventListener("mousedown",this.deselect,!0),document.documentElement.removeEventListener("mousemove",this.handleMove,!0),document.documentElement.removeEventListener("mouseup",this.handleUp,!0)},data:function(){return{top:this.y,left:this.x,width:this.w,height:this.h,rotateAngle:this.angle,resizing:!1,dragging:!1,rotating:!1,enabled:this.active,handle:null}},methods:{reviewDimensions:function(){if(this.minw>this.w&&(this.width=this.minw),this.minh>this.h&&(this.height=this.minh),this.parent){var t=parseInt(this.$el.parentNode.clientWidth,10),e=parseInt(this.$el.parentNode.clientHeight,10);this.parentW=t,this.parentH=e,this.w>t&&(this.width=t),this.h>e&&(this.height=e),this.x+this.w>t&&(this.width=t-this.x),this.y+this.h>e&&(this.height=e-this.y),this.elmW=this.width,this.elmH=this.height}},elmDown:function(t){var e=t.target||t.srcElement;this.$el.contains(e)&&(this.reviewDimensions(),this.enabled||(this.enabled=!0,this.$emit("activated"),this.$emit("update:active",!0)),this.draggable&&(this.dragging=!0))},deselect:function(t){this.$el.contains(t.target)&&t.preventDefault(),this.lastMouseX=t.pageX||t.clientX+document.documentElement.scrollLeft,this.lastMouseY=t.pageY||t.clientY+document.documentElement.scrollTop;var e=t.target||t.srcElement,n=new RegExp("z-handle-([nesw]{1, 2})","");this.$el.contains(e)||n.test(e.className)||this.enabled&&(this.enabled=!1,this.$emit("deactivated"),this.$emit("update:active",!1))},handleResizeStart:function(t,e){this.handle=t,e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),this.resizing=!0},getOrigin:function(){var t=this.$el.getBoundingClientRect();return{x:(t.left+t.right)/2,y:(t.bottom+t.top)/2}},handleMove:function(t){var e=this.lastMouseX,n=this.lastMouseY,i=t.pageX||t.clientX+document.documentElement.scrollLeft,o=t.pageY||t.clientY+document.documentElement.scrollTop,s=i-this.lastMouseX+this.mouseOffX,r=o-this.lastMouseY+this.mouseOffY;this.mouseOffX=this.mouseOffY=0,this.lastMouseX=i,this.lastMouseY=o;var a=s,l=r;if(this.resizing)this.handle.indexOf("n")>=0&&(this.elmH-l<this.minh?r=this.elmH-this.minh:this.elmY+l<0&&(r=-this.elmY),this.mouseOffY=l-r,this.elmY+=r,this.elmH-=r),this.handle.indexOf("s")>=0&&(this.elmH+l<this.minh?r=this.minh-this.elmH:this.elmY+this.elmH+l>this.parentH&&(r=this.parentH-this.elmY-this.elmH),this.mouseOffY=l-r,this.elmH+=r),this.handle.indexOf("w")>=0&&(this.elmW-a<this.minw?s=this.elmW-this.minw:this.elmX+a<0&&(s=-this.elmX),this.mouseOffX=a-s,this.elmX+=s,this.elmW-=s),this.handle.indexOf("e")>=0&&(this.elmW+a<this.minw?s=this.minw-this.elmW:this.elmX+this.elmW+a>this.parentW&&(s=this.parentW-this.elmX-this.elmW),this.mouseOffX=a-s,this.elmW+=s),this.left=Math.round(this.elmX/this.grid[0])*this.grid[0],this.$emit("update:x",this.left),this.top=Math.round(this.elmY/this.grid[1])*this.grid[1],this.$emit("update:y",this.top),this.width=Math.round(this.elmW/this.grid[0])*this.grid[0],this.$emit("update:w",this.width),this.height=Math.round(this.elmH/this.grid[1])*this.grid[1],this.$emit("update:h",this.height),this.$emit("resizing",this.left,this.top,this.width,this.height);else if(this.dragging)this.parent&&(this.elmX+a<0?s=-this.elmX:this.elmX+this.elmW+a>this.parentW&&(s=this.parentW-this.elmX-this.elmW),this.elmY+l<0?r=-this.elmY:this.elmY+this.elmH+l>this.parentH&&(r=this.parentH-this.elmY-this.elmH),this.mouseOffX=a-s,this.mouseOffY=l-r),this.elmX+=s,this.elmY+=r,"x"!==this.axis&&"both"!==this.axis||(this.left=Math.round(this.elmX/this.grid[0])*this.grid[0],this.$emit("update:x",this.left)),"y"!==this.axis&&"both"!==this.axis||(this.top=Math.round(this.elmY/this.grid[1])*this.grid[1],this.$emit("update:y",this.top)),this.$emit("dragging",this.left,this.top);else if(this.rotating){var h=this.getOrigin(),d=Math.atan2(n-h.y,e-h.x),c=Math.atan2(o-h.y,i-h.x);this.rotateAngle+=Math.round(180*(c-d)/Math.PI),this.$emit("update:angle",this.rotateAngle),this.$emit("rotating",this.rotateAngle)}},handleUp:function(t){this.handle=null,this.resizing&&(this.resizing=!1,this.$emit("resizestop",this.left,this.top,this.width,this.height)),this.dragging&&(this.dragging=!1,this.$emit("dragstop",this.left,this.top)),this.rotating&&(this.rotating=!1,this.$emit("rotatestop",this.rotateAngle)),this.elmX=this.left,this.elmY=this.top}},computed:{style:function(){return{top:this.top+"px",left:this.left+"px",width:this.width+"px",height:this.height+"px",transform:"rotate("+this.rotateAngle+"deg)"}}},watch:{active:function(t){this.enabled=t}}}},"4rW6":function(t,e,n){var i=n("kxFB");e=t.exports=n("FZ+f")(!0),e.push([t.i,".z-drr-container{position:absolute}.z-drr-container *,.z-drr-container :after,.z-drr-container :before{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;-moz-box-sizing:border-box}.z-draggable:hover{cursor:move}.z-rotateable-handle{position:absolute;left:50%;top:-36px;width:1px;height:36px;margin-left:-.5px;background-color:#32a6d0;cursor:url("+i(n("cjHo"))+') 8 8,default}.z-rotateable-handle:after{content:" ";top:0;left:0;margin-left:-5.5px;position:absolute;width:12px;height:12px;border:1px solid #32a6d0;border-radius:50%;background:#32a6d0}.z-resizeable-handle{display:none;position:absolute}.z-handle-ne,.z-handle-nw,.z-handle-se,.z-handle-sw{position:absolute;width:12px;height:12px;border:1px solid #32a6d0;border-radius:50%;background:#fff}.z-handle-nw{top:-6px;left:-6px;cursor:nw-resize}.z-handle-ne{top:-6px;right:-6px;cursor:ne-resize}.z-handle-sw{bottom:-6px;left:-6px;cursor:sw-resize}.z-handle-se{bottom:-6px;right:-6px;cursor:se-resize}.z-handle-e:after,.z-handle-n:after,.z-handle-s:after,.z-handle-w:after{content:" ";position:absolute;width:12px;height:12px;border:1px solid #32a6d0;border-radius:50%;background:#fff}.z-handle-n{top:0;left:0;width:100%;height:6px;border-top:1px solid #32a6d0;cursor:n-resize}.z-handle-n:after{bottom:0;left:50%;margin-left:-6px}.z-handle-w{top:0;left:0;width:6px;height:100%;border-left:1px solid #32a6d0;cursor:w-resize}.z-handle-w:after{top:50%;right:0;margin-top:-6px}.z-handle-e{top:0;right:0;width:6px;height:100%;border-right:1px solid #32a6d0;cursor:e-resize}.z-handle-e:after{top:50%;left:0;margin-top:-6px}.z-handle-s{bottom:0;left:0;width:100%;height:6px;border-bottom:1px solid #32a6d0;cursor:s-resize}.z-handle-s:after{top:0;left:50%;margin-left:-6px}.z-active{z-index:999}',"",{version:3,sources:["/home/travis/build/Alvin-Liu/h5editor/src/components/vue-drr.vue"],names:[],mappings:"AACA,iBACE,iBAAmB,CACpB,AACD,oEACI,UAAW,AACX,SAAU,AACV,8BAA+B,AACvB,sBAAuB,AAC/B,0BAA4B,CAC/B,AACD,mBACE,WAAa,CACd,AACD,qBACE,kBAAmB,AACnB,SAAU,AACV,UAAW,AACX,UAAW,AACX,YAAa,AACb,kBAAmB,AACnB,yBAA0B,AAC1B,gDAAoD,CACrD,AACD,2BACI,YAAa,AACb,MAAO,AACP,OAAQ,AACR,mBAAoB,AACpB,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,yBAA0B,AAC1B,kBAAmB,AACnB,kBAAoB,CACvB,AACD,qBACE,aAAc,AACd,iBAAmB,CACpB,AACD,oDAIE,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,yBAA0B,AAC1B,kBAAmB,AACnB,eAAiB,CAClB,AACD,aACE,SAAU,AACV,UAAW,AACX,gBAAkB,CACnB,AACD,aACE,SAAU,AACV,WAAY,AACZ,gBAAkB,CACnB,AACD,aACE,YAAa,AACb,UAAW,AACX,gBAAkB,CACnB,AACD,aACE,YAAa,AACb,WAAY,AACZ,gBAAkB,CACnB,AACD,wEAIE,YAAa,AACb,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,yBAA0B,AAC1B,kBAAmB,AACnB,eAAiB,CAClB,AACD,YACE,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,WAAY,AACZ,6BAA8B,AAC9B,eAAiB,CAClB,AACD,kBACI,SAAU,AACV,SAAU,AACV,gBAAkB,CACrB,AACD,YACE,MAAO,AACP,OAAQ,AACR,UAAW,AACX,YAAa,AACb,8BAA+B,AAC/B,eAAiB,CAClB,AACD,kBACI,QAAS,AACT,QAAS,AACT,eAAiB,CACpB,AACD,YACE,MAAO,AACP,QAAS,AACT,UAAW,AACX,YAAa,AACb,+BAAgC,AAChC,eAAiB,CAClB,AACD,kBACI,QAAS,AACT,OAAQ,AACR,eAAiB,CACpB,AACD,YACE,SAAU,AACV,OAAQ,AACR,WAAY,AACZ,WAAY,AACZ,gCAAiC,AACjC,eAAiB,CAClB,AACD,kBACI,MAAO,AACP,SAAU,AACV,gBAAkB,CACrB,AACD,UACE,WAAa,CACd",file:"vue-drr.vue",sourcesContent:["\n.z-drr-container {\n  position: absolute;\n}\n.z-drr-container *, .z-drr-container *:before, .z-drr-container *:after {\n    padding: 0;\n    margin: 0;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -moz-box-sizing: border-box;\n}\n.z-draggable:hover {\n  cursor: move;\n}\n.z-rotateable-handle {\n  position: absolute;\n  left: 50%;\n  top: -36px;\n  width: 1px;\n  height: 36px;\n  margin-left: -.5px;\n  background-color: #32a6d0;\n  cursor: url(../assets/mouserotate.png) 8 8, default;\n}\n.z-rotateable-handle:after {\n    content: ' ';\n    top: 0;\n    left: 0;\n    margin-left: -5.5px;\n    position: absolute;\n    width: 12px;\n    height: 12px;\n    border: 1px solid #32a6d0;\n    border-radius: 50%;\n    background: #32a6d0;\n}\n.z-resizeable-handle {\n  display: none;\n  position: absolute;\n}\n.z-handle-nw,\n.z-handle-ne,\n.z-handle-sw,\n.z-handle-se {\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  border: 1px solid #32a6d0;\n  border-radius: 50%;\n  background: #fff;\n}\n.z-handle-nw {\n  top: -6px;\n  left: -6px;\n  cursor: nw-resize;\n}\n.z-handle-ne {\n  top: -6px;\n  right: -6px;\n  cursor: ne-resize;\n}\n.z-handle-sw {\n  bottom: -6px;\n  left: -6px;\n  cursor: sw-resize;\n}\n.z-handle-se {\n  bottom: -6px;\n  right: -6px;\n  cursor: se-resize;\n}\n.z-handle-n:after,\n.z-handle-w:after,\n.z-handle-e:after,\n.z-handle-s:after {\n  content: ' ';\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  border: 1px solid #32a6d0;\n  border-radius: 50%;\n  background: #fff;\n}\n.z-handle-n {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 6px;\n  border-top: 1px solid #32a6d0;\n  cursor: n-resize;\n}\n.z-handle-n:after {\n    bottom: 0;\n    left: 50%;\n    margin-left: -6px;\n}\n.z-handle-w {\n  top: 0;\n  left: 0;\n  width: 6px;\n  height: 100%;\n  border-left: 1px solid #32a6d0;\n  cursor: w-resize;\n}\n.z-handle-w:after {\n    top: 50%;\n    right: 0;\n    margin-top: -6px;\n}\n.z-handle-e {\n  top: 0;\n  right: 0;\n  width: 6px;\n  height: 100%;\n  border-right: 1px solid #32a6d0;\n  cursor: e-resize;\n}\n.z-handle-e:after {\n    top: 50%;\n    left: 0;\n    margin-top: -6px;\n}\n.z-handle-s {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 6px;\n  border-bottom: 1px solid #32a6d0;\n  cursor: s-resize;\n}\n.z-handle-s:after {\n    top: 0;\n    left: 50%;\n    margin-left: -6px;\n}\n.z-active {\n  z-index: 999;\n}\n"],sourceRoot:""}])},MKpX:function(t,e,n){var i=n("4rW6");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("2622acdb",i,!0,{})},SmO2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("ba36"),o=n("0FJT"),s=n("VU/8"),r=s(i.a,o.a,!1,null,null,null);e.default=r.exports},ba36:function(t,e,n){"use strict";var i=n("+jlW"),o=n.n(i),s=n("fIT1"),r=n("pnEu");e.a={name:"TheContainer",data:function(){return{activeId:"",contextMenuTarget:document.body,contextMenuVisible:!1}},computed:{pages:function(){return this.$store.getters.pages},curPageId:function(){return this.$store.getters.curPageId}},methods:{handleClick:function(t){this.$store.commit("OPEN_PROPS_PANEL",{name:t.name+"Config",id:t.id})},handleDblclick:function(t){var e=this;"Image"===t&&this.$store.commit("SET_PICK_IMG",{status:!0,callback:function(t){e.$store.commit("EDIT_COMP",{type:"props",value:{src:t.url}})}})},toggleCompid:function(t){this.activeId=t,this.$store.commit("TOGGLE_COMP",t)},updateStyle:function(t){this.$store.commit("EDIT_COMP",{type:"css",value:t})},handleResizing:function(t,e,n,i){this.updateStyle({base:{t:e,l:t,w:n,h:i}})},handleDragging:function(t,e){this.updateStyle({base:{t:e,l:t}})},handleRotating:function(t){this.updateStyle({base:{rotate:t}})},handleDelete:function(){this.$store.dispatch("removeComp",this.activeId),this.contextMenuVisible=!1}},components:{vueDrr:s.a,ComponentRenderer:r.a,ContextMenu:o.a}}},cjHo:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABWUlEQVQ4T6WT0U3DQAyGf/sGoBuQDcjp7p2wQTsBbNCOABMAE5BuwAjpe09XJqAjlAFyRq5yIUkRKuCXSIn92f79h/DPoGl9jLFIKS0BzAEU+l1EdgBqY8zaWnvQnLZtS+/96wgQQrgD8PLDUHsADwAeAbw556oeMCwWkQ8iqpn5NaVUikhJRLcT8KYHdGO/dwkbZp7rqMOCEMKq65xffwFCCE8AltrZGFNMi7sGEcBsAB0BdLdLAM/OOe00ihhjlVK6n7yunXP1UYMQguiTmW+stc1vLjsCiMhCT/MXgN75SkTW3ns95dmRJ+gVZmZrrVXgSWy327kxphmKfATEGGcpJS1SIQ/MvJhqkc+orvTe20zvjRRjLNu2bYjoItuXiBoRKYiozLZWBzJzlacYWVkhKSX1xPV3K6hGxpjVyQrTZN2161qJyJ6Idmpra636ZRQnf+PZ8neJn9q+rxFGGvPWAAAAAElFTkSuQmCC"},fIT1:function(t,e,n){"use strict";function i(t){n("MKpX")}var o=n("1iSt"),s=n("wI+p"),r=n("VU/8"),a=i,l=r(o.a,s.a,!1,a,null,null);e.a=l.exports},"wI+p":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"z-drr-container",class:{"z-draggable":t.draggable,"z-resizable":t.resizable,"z-rotatable":t.rotatable,"z-active":t.enabled,"z-dragging":t.dragging,"z-resizing":t.resizing,"z-rotating":t.rotating},style:t.style,on:{mousedown:function(e){return e.stopPropagation(),t.elmDown(e)}}},[t._t("default"),t._v(" "),t.rotatable?n("div",{staticClass:"z-rotateable-handle",style:{display:t.enabled?"block":"none"},on:{mousedown:function(e){e.stopPropagation(),e.preventDefault(),t.rotating=!0}}}):t._e(),t._v(" "),t._l(t.handles,function(e){return t.resizable?n("div",{staticClass:"z-resizeable-handle",class:"z-handle-"+e,style:{display:t.enabled?"block":"none"},on:{mousedown:function(n){return n.stopPropagation(),n.preventDefault(),t.handleResizeStart(e,n)}}}):t._e()})],2)},o=[],s={render:i,staticRenderFns:o};e.a=s}});
//# sourceMappingURL=3.ed1f015133c79edeca0e.js.map