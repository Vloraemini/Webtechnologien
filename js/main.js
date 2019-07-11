!function(a,b){"use strict";"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?module.exports=b():a.Headroom=b()}(this,function(){"use strict";function a(a){this.callback=a,this.ticking=!1}function b(a){return a&&"undefined"!=typeof window&&(a===window||a.nodeType)}function c(a){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var d,e,f=a||{};for(e=1;e<arguments.length;e++){var g=arguments[e]||{};for(d in g)"object"!=typeof f[d]||b(f[d])?f[d]=f[d]||g[d]:f[d]=c(f[d],g[d])}return f}function d(a){return a===Object(a)?a:{down:a,up:a}}function e(a,b){b=c(b,e.options),this.lastKnownScrollY=0,this.elem=a,this.tolerance=d(b.tolerance),this.classes=b.classes,this.offset=b.offset,this.scroller=b.scroller,this.initialised=!1,this.onPin=b.onPin,this.onUnpin=b.onUnpin,this.onTop=b.onTop,this.onNotTop=b.onNotTop,this.onBottom=b.onBottom,this.onNotBottom=b.onNotBottom}var f={bind:!!function(){}.bind,classList:"classList"in document.documentElement,rAF:!!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame)};return window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,a.prototype={constructor:a,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},e.prototype={constructor:e,init:function(){return e.cutsTheMustard?(this.debouncer=new a(this.update.bind(this)),this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this):void 0},destroy:function(){var a=this.classes;this.initialised=!1,this.elem.classList.remove(a.unpinned,a.pinned,a.top,a.notTop,a.initial),this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var a=this.elem.classList,b=this.classes;!a.contains(b.pinned)&&a.contains(b.unpinned)||(a.add(b.unpinned),a.remove(b.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var a=this.elem.classList,b=this.classes;a.contains(b.unpinned)&&(a.remove(b.unpinned),a.add(b.pinned),this.onPin&&this.onPin.call(this))},top:function(){var a=this.elem.classList,b=this.classes;a.contains(b.top)||(a.add(b.top),a.remove(b.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notTop)||(a.add(b.notTop),a.remove(b.top),this.onNotTop&&this.onNotTop.call(this))},bottom:function(){var a=this.elem.classList,b=this.classes;a.contains(b.bottom)||(a.add(b.bottom),a.remove(b.notBottom),this.onBottom&&this.onBottom.call(this))},notBottom:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notBottom)||(a.add(b.notBottom),a.remove(b.bottom),this.onNotBottom&&this.onNotBottom.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},getViewportHeight:function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},getElementPhysicalHeight:function(a){return Math.max(a.offsetHeight,a.clientHeight)},getScrollerPhysicalHeight:function(){return this.scroller===window||this.scroller===document.body?this.getViewportHeight():this.getElementPhysicalHeight(this.scroller)},getDocumentHeight:function(){var a=document.body,b=document.documentElement;return Math.max(a.scrollHeight,b.scrollHeight,a.offsetHeight,b.offsetHeight,a.clientHeight,b.clientHeight)},getElementHeight:function(a){return Math.max(a.scrollHeight,a.offsetHeight,a.clientHeight)},getScrollerHeight:function(){return this.scroller===window||this.scroller===document.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(a){var b=0>a,c=a+this.getScrollerPhysicalHeight()>this.getScrollerHeight();return b||c},toleranceExceeded:function(a,b){return Math.abs(a-this.lastKnownScrollY)>=this.tolerance[b]},shouldUnpin:function(a,b){var c=a>this.lastKnownScrollY,d=a>=this.offset;return c&&d&&b},shouldPin:function(a,b){var c=a<this.lastKnownScrollY,d=a<=this.offset;return c&&b||d},update:function(){var a=this.getScrollY(),b=a>this.lastKnownScrollY?"down":"up",c=this.toleranceExceeded(a,b);this.isOutOfBounds(a)||(a<=this.offset?this.top():this.notTop(),a+this.getViewportHeight()>=this.getScrollerHeight()?this.bottom():this.notBottom(),this.shouldUnpin(a,c)?this.unpin():this.shouldPin(a,c)&&this.pin(),this.lastKnownScrollY=a)}},e.options={tolerance:{up:0,down:0},offset:0,scroller:window,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",bottom:"headroom--bottom",notBottom:"headroom--not-bottom",initial:"headroom"}},e.cutsTheMustard="undefined"!=typeof f&&f.rAF&&f.bind&&f.classList,e}),function(){var a=/\blang(?:uage)?-(?!\*)(\w+)\b/i,b=self.Prism={util:{type:function(a){return Object.prototype.toString.call(a).match(/\[object (\w+)\]/)[1]},clone:function(a){var c=b.util.type(a);switch(c){case"Object":var d={};for(var e in a)a.hasOwnProperty(e)&&(d[e]=b.util.clone(a[e]));return d;case"Array":return a.slice()}return a}},languages:{extend:function(a,c){var d=b.util.clone(b.languages[a]);for(var e in c)d[e]=c[e];return d},insertBefore:function(a,c,d,e){e=e||b.languages;var f=e[a],g={};for(var h in f)if(f.hasOwnProperty(h)){if(h==c)for(var i in d)d.hasOwnProperty(i)&&(g[i]=d[i]);g[h]=f[h]}return e[a]=g},DFS:function(a,c){for(var d in a)c.call(a,d,a[d]),"Object"===b.util.type(a)&&b.languages.DFS(a[d],c)}},highlightAll:function(a,c){for(var d,e=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),f=0;d=e[f++];)b.highlightElement(d,a===!0,c)},highlightElement:function(d,e,f){for(var g,h,i=d;i&&!a.test(i.className);)i=i.parentNode;if(i&&(g=(i.className.match(a)||[,""])[1],h=b.languages[g]),h){d.className=d.className.replace(a,"").replace(/\s+/g," ")+" language-"+g,i=d.parentNode,/pre/i.test(i.nodeName)&&(i.className=i.className.replace(a,"").replace(/\s+/g," ")+" language-"+g);var j=d.textContent;if(j){j=j.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ");var k={element:d,language:g,grammar:h,code:j};if(b.hooks.run("before-highlight",k),e&&self.Worker){var l=new Worker(b.filename);l.onmessage=function(a){k.highlightedCode=c.stringify(JSON.parse(a.data),g),b.hooks.run("before-insert",k),k.element.innerHTML=k.highlightedCode,f&&f.call(k.element),b.hooks.run("after-highlight",k)},l.postMessage(JSON.stringify({language:k.language,code:k.code}))}else k.highlightedCode=b.highlight(k.code,k.grammar,k.language),b.hooks.run("before-insert",k),k.element.innerHTML=k.highlightedCode,f&&f.call(d),b.hooks.run("after-highlight",k)}}},highlight:function(a,d,e){return c.stringify(b.tokenize(a,d),e)},tokenize:function(a,c,d){var e=b.Token,f=[a],g=c.rest;if(g){for(var h in g)c[h]=g[h];delete c.rest}a:for(var h in c)if(c.hasOwnProperty(h)&&c[h]){var i=c[h],j=i.inside,k=!!i.lookbehind,l=0;i=i.pattern||i;for(var m=0;m<f.length;m++){var n=f[m];if(f.length>a.length)break a;if(!(n instanceof e)){i.lastIndex=0;var o=i.exec(n);if(o){k&&(l=o[1].length);var p=o.index-1+l,o=o[0].slice(l),q=o.length,r=p+q,s=n.slice(0,p+1),t=n.slice(r+1),u=[m,1];s&&u.push(s);var v=new e(h,j?b.tokenize(o,j):o);u.push(v),t&&u.push(t),Array.prototype.splice.apply(f,u)}}}}return f},hooks:{all:{},add:function(a,c){var d=b.hooks.all;d[a]=d[a]||[],d[a].push(c)},run:function(a,c){var d=b.hooks.all[a];if(d&&d.length)for(var e,f=0;e=d[f++];)e(c)}}},c=b.Token=function(a,b){this.type=a,this.content=b};if(c.stringify=function(a,d,e){if("string"==typeof a)return a;if("[object Array]"==Object.prototype.toString.call(a))return a.map(function(b){return c.stringify(b,d,a)}).join("");var f={type:a.type,content:c.stringify(a.content,d,e),tag:"span",classes:["token",a.type],attributes:{},language:d,parent:e};"comment"==f.type&&(f.attributes.spellcheck="true"),b.hooks.run("wrap",f);var g="";for(var h in f.attributes)g+=h+'="'+(f.attributes[h]||"")+'"';return"<"+f.tag+' class="'+f.classes.join(" ")+'" '+g+">"+f.content+"</"+f.tag+">"},!self.document)return void self.addEventListener("message",function(a){var c=JSON.parse(a.data),d=c.language,e=c.code;self.postMessage(JSON.stringify(b.tokenize(e,b.languages[d]))),self.close()},!1);var d=document.getElementsByTagName("script");d=d[d.length-1],d&&(b.filename=d.src,document.addEventListener&&!d.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",b.highlightAll))}(),Prism.languages.markup={comment:/&lt;!--[\w\W]*?-->/g,prolog:/&lt;\?.+?\?>/,doctype:/&lt;!DOCTYPE.+?>/,cdata:/&lt;!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/&lt;\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?>/gi,inside:{tag:{pattern:/^&lt;\/?[\w:-]+/i,inside:{punctuation:/^&lt;\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|>|"/g}},punctuation:/\/?>/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/&amp;#?[\da-z]{1,8};/gi},Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Prism.languages.css={comment:/\/\*[\w\W]*?\*\//g,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*{))/gi,inside:{punctuation:/[;:]/g}},url:/url\((["']?).*?\1\)/gi,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/g,property:/(\b|\B)[\w-]+(?=\s*:)/gi,string:/("|')(\\?.)*?\1/g,important:/\B!important\b/gi,ignore:/&(lt|gt|amp);/gi,punctuation:/[\{\};:]/g},Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{style:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/style(>|&gt;)/gi,inside:{tag:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)|(&lt;|<)\/style(>|&gt;)/gi,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css}}}),Prism.languages.clike={comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])\/\/.*?(\r?\n|$))/g,lookbehind:!0},string:/("|')(\\?.)*?\1/g,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/gi,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/g,"boolean":/\b(true|false)\b/g,"function":{pattern:/[a-z0-9_]+\(/gi,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,operator:/[-+]{1,2}|!|&lt;=?|>=?|={1,3}|(&amp;){1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(var|let|if|else|while|do|for|return|in|instanceof|function|new|with|typeof|try|throw|catch|finally|null|break|continue)\b/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:!0}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/gi,inside:{tag:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)|(&lt;|<)\/script(>|&gt;)/gi,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript}}}),function(){function a(a){this.strategies=a}a.prototype={constructor:a,init:function(){this.elements=document.querySelectorAll("[data-code-generator]")},generate:function(a){var b=this;[].forEach.call(this.elements,function(c){b.highlightElement(c,a)})},getStrategy:function(a){return this.strategies[a.getAttribute("data-code-generator")]},highlightElement:function(a,b){var c=this.getStrategy(a),d=a.querySelector("code");c&&(d.innerHTML=c(b),Prism.highlightElement(d,!1))}},window.CodeGenerator=a}(),function(a){function b(a){return JSON.stringify({offset:a.offset,tolerance:a.tolerance,classes:{initial:a.classes.initial,pinned:a.classes.pinned,unpinned:a.classes.unpinned}},null,"  ")}function c(a,b,c){this.form=a,this.codeGenerator=b,this.getOptions=c}c.prototype={constructor:c,init:function(){var a=this.form;return a&&(this.codeGenerator.init(),this.process(),a.addEventListener("change",this,!1)),this},process:function(){var b=this.getOptions(this.form);this.headroom&&this.headroom.destroy(),this.headroom=new Headroom(a.querySelector("header"),b).init(),this.codeGenerator.generate(b)},handleEvent:function(){this.process()},destroy:function(){this.form.removeEventListener("change",this)}};var d={widget:function(a){return"var headroom = new Headroom(elem, "+b(a)+");\nheadroom.init();\n\n// to destroy\nheadroom.destroy();"},plugin:function(a){return'$("header").headroom('+b(a)+');\n\n// to destroy\n$("#header").headroom("destroy");'},dataApi:function(a){return'&lt;header data-headroom data-tolerance="'+a.tolerance+'" data-offset="'+a.offset+"\" data-classes='"+JSON.stringify(a.classes)+'\'&gt;&lt;/header&gt;\n\n// to destroy, in your JS:\n$("header").data("headroom").destroy();'},angular:function(a){return'&lt;headroom tolerance="'+a.tolerance+'" offset="'+a.offset+"\" classes='"+JSON.stringify(a.classes)+"'&gt;&lt;/headroom&gt;"}};new c(a.querySelector("form"),new CodeGenerator(d),function(a){var b=a.querySelector("[name=classes]:checked");return{tolerance:a.querySelector("#tolerance").valueAsNumber,offset:a.querySelector("#offset").valueAsNumber,classes:JSON.parse(b.value)}}).init()}(document);
