"use strict";(self.webpackChunksource=self.webpackChunksource||[]).push([[967],{762:(e,t,s)=>{var i=s(306);var n=s(141),o=s(846),r=s(421),a=s(869);var d=s(206),l=s(82),p=s(218),c=s(388),u=s(71);var h=s(942),g=s(403);class f{constructor(e,t){e&&(this.el=e,this.list=this.el.querySelector('[data-breakingnews-el="list"]'),this.prototypeDefault=g.Z.createHtmlStringByPrototypeId("prototype-breaking-news-default"),this.prototypeTextOnly=g.Z.createHtmlStringByPrototypeId("prototype-breaking-news-textonly"),this.resizeObserver=null,this._height=0,this.list&&this.prototypeDefault&&this.prototypeTextOnly&&(window.ResizeObserver&&(this.resizeObserver=new ResizeObserver((e=>this.onResize(e))),this.resizeObserver.observe(this.el)),t&&Array.isArray(t)&&t.length>0?this.refreshItems(t):window.polygon&&window.polygon.componentLoader&&window.polygon.componentLoader.subscribe(i.gx,this.onBreakingNewsChanged,this)))}onBreakingNewsChanged(e){e&&Array.isArray(e)&&this.refreshItems(e)}onResize(e){e&&e[0]&&e[0].contentRect&&(this.height=e[0].contentRect.height)}refreshItems(e){if(!e||!Array.isArray(e))return;for(;this.list.firstChild;)this.list.removeChild(this.list.firstChild);const t=document.documentElement;0===e.length?(t.classList.remove("has-breaking-news"),this.el.classList.add("hidden")):(t.classList.add("has-breaking-news"),this.el.classList.remove("hidden"),e.forEach((e=>{if(e.headline){const t=e.url?this.prototypeDefault:this.prototypeTextOnly,s=g.Z.populateHtmlString(t,e);this.list.insertAdjacentHTML("beforeend",s)}})))}get height(){return this._height}set height(e){"number"==typeof e&&e!==this._height&&(this._height=e,0===e?document.documentElement.style.removeProperty("--polygon-breakingnews-height"):document.documentElement.style.setProperty("--polygon-breakingnews-height",`${e}px`))}}var y=s(115);class m{execute(){let e=[];if(y.Z.getItem(h.E9.breakingNews.name)){let t;try{t=JSON.parse(y.Z.getItem(h.E9.breakingNews.name))}catch(e){}if(t){const s=r.default.instance,i=s.cacheControl&&s.cacheControl.breakingnews&&Number.isInteger(s.cacheControl.breakingnews.sessionStorageMaxAge)?s.cacheControl.breakingnews.sessionStorageMaxAge:900,n=Date.now()-1e3*i;t.updated_at&&t.updated_at>=n&&t.items&&Array.isArray(t.items)&&t.items.length>0&&(e=t.items)}}const t=document.querySelector("[data-breakingnews]");t&&(window.polygon.breakingNewsRenderer=new f(t,e))}}var w=s(955);window.SARAs_data=window.SARAs_data||[],window.polygon=window.polygon||{},window.polygon.componentLoader=new class{constructor(){this.subscriptions=[],this.publications=[]}subscribe(...e){this.subscriptions.push(e)}publish(...e){this.publications.push(e)}destroy(e){if(e&&"function"==typeof e.subscribe&&"function"==typeof e.publish){for(window.polygon&&(window.polygon.componentLoader=e);this.subscriptions.length>0;){const t=this.subscriptions.pop();e.subscribe(...t)}for(;this.publications.length>0;){const t=this.publications.pop();e.publish(...t)}}}},window.addEventListener(i.MX,(()=>{(new m).execute()})),window.navigator.webBridge=new class{globalFontsize(e){if(e){const t={"typo-xs":"12px","typo-s":"14px","typo-m":"16px","typo-l":"18px","typo-xl":"20px"},s=r.default.instance,i=void 0!==s&&void 0!==s.page&&void 0!==s.page.category&&void 0!==s.page.category.route?s.page.category.route:void 0,n=t[e];void 0!==i&&n&&(document.querySelector("html").style.fontSize=n,window.dispatchEvent(new Event("resize")))}}hyphenation(e){e?document.documentElement.classList.add("hyphenated"):document.documentElement.classList.remove("hyphenated")}onPageResume(e,t,s="app"){o.Z.publish(i.R_,{referrer:e,trigger:t,platform:s})}outbrainFurtherReadsContainerReady(e){e&&o.Z.publish(i.go,e)}outbrainTopReadsContainerReady(e){e&&o.Z.publish(i.it,e)}targetAdPositionLoaded(e){"string"==typeof e&&e&&o.Z.publish(i.yZ,e)}triggerRegister(e=void 0){e&&"function"==typeof e.preventDefault&&e.preventDefault();const t=e&&e.targetUrl?e.targetUrl:"";o.Z.publish(i.BW,{targetUrl:t})}triggerLogin(e=void 0){e&&"function"==typeof e.preventDefault&&e.preventDefault();const t=e&&e.targetUrl?e.targetUrl:"";o.Z.publish(i.V5,{targetUrl:t})}triggerLogout(e=void 0){e&&"function"==typeof e.preventDefault&&e.preventDefault(),o.Z.publish(i.QP)}triggerAccount(e=void 0){e&&"function"==typeof e.preventDefault&&e.preventDefault(),o.Z.publish(i.Mz)}triggerOffer(e=void 0){e&&"function"==typeof e.preventDefault&&e.preventDefault();const t=e&&e.product?e.product:"paid",s=e&&e.targetUrl?e.targetUrl:void 0;o.Z.publish(i.iz,{product:t,targetUrl:s})}triggerRestorePurchases(e=void 0){e&&"function"==typeof e.preventDefault&&e.preventDefault();const t=e&&e.targetUrl?e.targetUrl:void 0;o.Z.publish(i.kn,{targetUrl:t})}getTeaserImageSrc(e){const t=r.default.instance;return e&&t.urls&&"string"==typeof t.urls.assetsBasePath?`${t.urls.assetsBasePath}/assets/image/${e}_tm.jpg`:""}toggleTalk(){const e={id:n.Tr};this.sendMessage(JSON.stringify(e))}switchLanguage(e){e&&void 0!==window.polygon&&void 0!==window.polygon.componentLoader&&window.polygon.componentLoader.publish(i.B_,e)}toggleToc(){const e={id:n.Nb};this.sendMessage(JSON.stringify(e))}sendMessage(e){let t;try{t=JSON.parse(e)}catch(e){return}t&&t.id&&o.Z.publish(i.LC,t)}get userAccess(){const e=a.default.instance;return{paid:e.hasPaidAccess,noAds:e.hasNoAdsAccess}}get userIsLoggedIn(){return a.default.instance.isLoggedIn}get domain(){return r.default.instance.domain}},window.polygon.cookies=window.polygon.cookies||{};(new class{constructor(){this.user=a.default.instance,this.route=c.Z.instance,this.appBridge=d.Z.instance}execute(){this.appBridge.shouldRedirectToAppUpdate?this.appBridge.redirectToAppUpdate():(this.setRootClasses(),this.saveUrlParamsKeys(),this.deleteAccessTokenUrlParam(),this.initApp())}setRootClasses(){const e=document.documentElement;if(l.default.isApp&&(e.classList.add("is-app"),(!Number.isInteger(this.appBridge.minVersion)||l.default.appVersion<this.appBridge.minVersion)&&(e.classList.add("is-unsupported"),e.classList.add("is-unsupported-version")),(!Number.isInteger(this.appBridge.minOfflineIssueVersion)||l.default.appVersion<this.appBridge.minOfflineIssueVersion)&&e.classList.add("is-unsupported-offline-issue"),(!Number.isInteger(this.appBridge.minAudioPlaylistVersion)||l.default.appVersion<this.appBridge.minAudioPlaylistVersion)&&e.classList.add("is-unsupported-audio-playlist"),(!Number.isInteger(this.appBridge.minIssuesDrawerVersion)||l.default.appVersion<this.appBridge.minIssuesDrawerVersion)&&e.classList.add("is-unsupported-issues-drawer"),window.navigator.webBridge.globalFontsize(this.appBridge.appFontSize)),p.default.isIOS&&e.classList.add("is-ios"),p.default.isAndroid&&e.classList.add("is-android"),u.Z.isSupported||(e.classList.add("is-unsupported"),e.classList.add("is-unsupported-feature")),p.default.isMobile&&e.classList.add("is-mobile"),this.user.isLoggedIn&&e.classList.add("is-logged-in"),this.user.hasConditionalAccess&&e.classList.add("hide-conditional"),this.user.hasPaidAccess&&e.classList.add("has-paid-access"),this.user.hasNoAdsAccess&&e.classList.add("has-noads-access"),this.user.accessInfo&&Object.keys(this.user.accessInfo).forEach((t=>{!0===this.user.accessInfo[t]&&e.classList.add(t)})),p.default.isTablet&&e.classList.add("is-tablet"),(this.route.isIssueArticle||"issue"===this.route.route)&&e.classList.add("is-issue-context"),this.route.route){const t=this.route.route.replace(/\//g,"-");e.classList.add(t)}this.route.isGiftArticle&&e.classList.add("is-gift-article")}saveUrlParamsKeys(){if(window.polygon){const e=new URL(document.location);window.polygon.initialUrlSearchParamsKeys=window.polygon.initialUrlSearchParamsKeys||[],e.searchParams.forEach(((e,t)=>{window.polygon.initialUrlSearchParamsKeys.push(t)}))}}deleteAccessTokenUrlParam(){const e=new URL(document.location);e.searchParams.get("accessToken")&&(e.searchParams.delete("accessToken"),window.history.replaceState({},document.title,e.href))}initApp(){if(l.default.isApp){const e=r.default.instance;e.app&&e.app.pageContext&&this.appBridge.sendPageContext(e.app.pageContext)}}}).execute();(new class{execute(){const e=document.head?document.head.querySelector('[data-target-el="head-style"]'):null;if(!e||"function"!=typeof e.appendChild)return;let t;try{t=JSON.parse(e.dataset.settings)}catch(e){return}if(!t||0===Object.keys(t).len)return;const s=w.Z.get(h.E9.saraTargetTeaser.name);let i;if("string"==typeof s&&(i=decodeURIComponent(s).split(":")[0]),!i||!t[i])return;const n=t[i];e.appendChild(document.createTextNode(n))}}).execute()}},e=>{var t;t=762,e(e.s=t)}]);