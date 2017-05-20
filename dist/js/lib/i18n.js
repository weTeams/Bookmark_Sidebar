/*! (c) Philipp König under GPL-3.0 */
"use strict";!function(e){window.I18nHelper=function(a){var n=this,t=null,i={},l={i18n:"data-i18n",i18nReplaces:"data-i18nReplaces"};this.init=function(e){i={},a.helper.model.call("languageInfos",function(l){var r=a.helper.model.getData("a/language");"default"===r&&(r=chrome.i18n.getUILanguage());var g=n.getDefaultLanguage();[r,g].some(function(n){if(l.infos&&l.infos[n]&&l.infos[n].available)return t=n,a.helper.model.call("langvars",{lang:n,defaultLang:g},function(a){a&&a.langVars&&(i=a.langVars,"function"==typeof e&&e())}),!0})})},this.getLanguage=function(){return t},this.getDefaultLanguage=function(){return a.opts.manifest.default_locale},this.getLocaleSortCollator=function(){return new Intl.Collator([chrome.i18n.getUILanguage(),n.getDefaultLanguage()])},this.getLocaleDate=function(e){return e.toLocaleDateString([chrome.i18n.getUILanguage(),n.getDefaultLanguage()],{year:"numeric",month:"2-digit",day:"2-digit"})},this.parseHtml=function(a){e(a).find("["+l.i18n+"]").forEach(function(a){var t=null,i=e(a).attr(l.i18n);if(i){var r=[],g=e(a).attr(l.i18nReplaces);g&&(r=g.split(",")),t=n.get(i,r)}t?(e(a).removeAttr(l.i18n),e(a).html(t)):e(a).remove()})},this.get=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n="",t=i[e];return t&&t.message&&(n=t.message,a.forEach(function(e,a){n=n.replace(new RegExp("\\{"+(a+1)+"\\}"),e)}),n=n.replace(/\[b\](.*)\[\/b\]/,"<strong>$1</strong>"),n=n.replace(/\[a\](.*)\[\/a\]/,"<a href='#'>$1</a>"),n=n.replace(/\[em\](.*)\[\/em\]/,"<em>$1</em>")),n}}}(jsu);