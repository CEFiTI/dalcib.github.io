!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){e.exports=r(10)},function(e,t){e.exports=React},function(e,t,r){!function(t,n){e.exports=n(r(5),r(1),r(6))}(this,function(e,t,r){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.reactiveComponent=t.PropTypes=t.propTypes=t.inject=t.Provider=t.trackComponents=t.componentByNodeRegistery=t.renderReporter=t.observer=void 0;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},i=arguments,l=r(1);Object.defineProperty(t,"observer",{enumerable:!0,get:function(){return l.observer}}),Object.defineProperty(t,"renderReporter",{enumerable:!0,get:function(){return l.renderReporter}}),Object.defineProperty(t,"componentByNodeRegistery",{enumerable:!0,get:function(){return l.componentByNodeRegistery}}),Object.defineProperty(t,"trackComponents",{enumerable:!0,get:function(){return l.trackComponents}});var s=r(9);Object.defineProperty(t,"Provider",{enumerable:!0,get:function(){return o(s).default}});var c=r(6);Object.defineProperty(t,"inject",{enumerable:!0,get:function(){return o(c).default}});var u=r(2),d=o(u),p=r(3),f=o(p),m=r(10),y=n(m),h=void 0;if(h="mobx-react",!d.default)throw new Error(h+" requires the MobX package");if(!f.default)throw new Error(h+" requires React to be available");t.propTypes=y,t.PropTypes=y,t.default=e.exports;t.reactiveComponent=function(){return console.warn("[mobx-react] `reactiveComponent` has been renamed to `observer` and will be removed in 1.1."),observer.apply(null,i)};"object"===("undefined"==typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__?"undefined":a(__MOBX_DEVTOOLS_GLOBAL_HOOK__))&&__MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobxReact(e.exports,d.default)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return y.default?y.default.findDOMNode(e):null}function a(e){var t=o(e);t&&O&&O.set(t,e),A.emit({event:"render",renderTime:e.__$mobRenderEnd-e.__$mobRenderStart,totalTime:Date.now()-e.__$mobRenderStart,component:e,node:t})}function i(){if("undefined"==typeof WeakMap)throw new Error("[mobx-react] tracking components is not supported in this browser.");g||(g=!0)}function l(e,t){var r=e[t],n=S[t];r?e[t]=function(){r.apply(this,arguments),n.apply(this,arguments)}:e[t]=n}function s(e,t){if("string"==typeof e)throw new Error("Store names should be provided as array");if(Array.isArray(e))return t?E.default.apply(null,e)(s(t)):function(t){return s(e,t)};var r=e;if(!("function"!=typeof r||r.prototype&&r.prototype.render||r.isReactClass||f.default.Component.isPrototypeOf(r)))return s(f.default.createClass({displayName:r.displayName||r.name,propTypes:r.propTypes,contextTypes:r.contextTypes,getDefaultProps:function(){return r.defaultProps},render:function(){return r.call(this,this.props,this.context)}}));if(!r)throw new Error("Please pass a valid component to 'observer'");var n=r.prototype||r;return["componentWillMount","componentWillUnmount","componentDidMount","componentDidUpdate"].forEach(function(e){l(n,e)}),n.shouldComponentUpdate||(n.shouldComponentUpdate=S.shouldComponentUpdate),r.isMobXReactObserver=!0,r}Object.defineProperty(t,"__esModule",{value:!0}),t.renderReporter=t.componentByNodeRegistery=void 0;var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};t.trackComponents=i,t.observer=s;var u=r(2),d=n(u),p=r(3),f=n(p),m=r(4),y=n(m),h=r(5),b=n(h),v=r(6),E=n(v),g=!1,O=t.componentByNodeRegistery="undefined"!=typeof WeakMap?new WeakMap:void 0,A=t.renderReporter=new b.default,S={componentWillMount:function(){var e=this,t=this.displayName||this.name||this.constructor&&(this.constructor.displayName||this.constructor.name)||"<component>",r=this._reactInternalInstance&&this._reactInternalInstance._rootNodeID,n=this.render.bind(this),o=null,a=!1,i=function(){return o=new d.default.Reaction(t+"#"+r+".render()",function(){a||(a=!0,"function"==typeof e.componentWillReact&&e.componentWillReact(),e.__$mobxIsUnmounted!==!0&&f.default.Component.prototype.forceUpdate.call(e))}),l.$mobx=o,e.render=l,l()},l=function(){a=!1;var t=void 0;return o.track(function(){g&&(e.__$mobRenderStart=Date.now()),t=d.default.extras.allowStateChanges(!1,n),g&&(e.__$mobRenderEnd=Date.now())}),t};this.render=i},componentWillUnmount:function(){if(this.render.$mobx&&this.render.$mobx.dispose(),this.__$mobxIsUnmounted=!0,g){var e=o(this);e&&O&&O.delete(e),A.emit({event:"destroy",component:this,node:e})}},componentDidMount:function(){g&&a(this)},componentDidUpdate:function(){g&&a(this)},shouldComponentUpdate:function(e,t){if(this.state!==t)return!0;var r=Object.keys(this.props);if(r.length!==Object.keys(e).length)return!0;for(var n=void 0,o=r.length-1;n=r[o];o--){var a=e[n];if(a!==this.props[n])return!0;if(a&&"object"===("undefined"==typeof a?"undefined":c(a))&&!d.default.isObservable(a))return!0}return!1}}},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function(){function e(){r(this,e),this.listeners=[]}return n(e,[{key:"on",value:function(e){var t=this;return this.listeners.push(e),function(){var r=t.listeners.indexOf(e);r!==-1&&t.listeners.splice(r,1)}}},{key:"emit",value:function(e){this.listeners.forEach(function(t){return t(e)})}}]),e}();t.default=o},function(e,t,r){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r=c.default.createClass({displayName:"MobXStoreInjector",render:function(){var r=this,n={};for(var o in this.props)this.props.hasOwnProperty(o)&&(n[o]=this.props[o]);var a=e(this.context.mobxStores||{},n,this.context)||{};for(var i in a)n[i]=a[i];return n.ref=function(e){r.wrappedInstance=e},c.default.createElement(t,n)}});return r.contextTypes={mobxStores:s.PropTypes.object},r.wrappedComponent=t,a(r,t),(0,d.default)(r,t),r}function a(t,r){"undefined"!=typeof e&&e.env&&"production"!==e.env.NODE_ENV&&["propTypes","defaultProps","contextTypes"].forEach(function(e){var n=t[e];Object.defineProperty(t,e,{set:function(t){var n=r.displayName||r.name;console.warn("Mobx Injector: you are trying to attach "+e+" to HOC instead of "+n+". Use `wrappedComponent` property.")},get:function(){return n},configurable:!0})})}function i(e){return function(t,r){return e.forEach(function(e){if(!(e in r)){if(!(e in t))throw new Error("MobX observer: Store '"+e+"' is not available! Make sure it is provided by some Provider");r[e]=t[e]}}),r}}function l(){var e=void 0;if("function"==typeof arguments[0])e=arguments[0];else{for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];e=i(t)}return function(t){return o(e,t)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var s=r(3),c=n(s),u=r(8),d=n(u)}).call(t,r(7))},function(e,t){function r(e){return s===setTimeout?setTimeout(e,0):s.call(null,e,0)}function n(e){c===clearTimeout?clearTimeout(e):c.call(null,e)}function o(){f&&d&&(f=!1,d.length?p=d.concat(p):m=-1,p.length&&a())}function a(){if(!f){var e=r(o);f=!0;for(var t=p.length;t;){for(d=p,p=[];++m<t;)d&&d[m].run();m=-1,t=p.length}d=null,f=!1,n(e)}}function i(e,t){this.fun=e,this.array=t}function l(){}var s,c,u=e.exports={};!function(){try{s=setTimeout}catch(e){s=function(){throw new Error("setTimeout is not defined")}}try{c=clearTimeout}catch(e){c=function(){throw new Error("clearTimeout is not defined")}}}();var d,p=[],f=!1,m=-1;u.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];p.push(new i(e,t)),1!==p.length||f||r(a)},i.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=l,u.addListener=l,u.once=l,u.off=l,u.removeListener=l,u.removeAllListeners=l,u.emit=l,u.binding=function(e){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(e){throw new Error("process.chdir is not supported")},u.umask=function(){return 0}},function(e,t){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,arguments:!0,arity:!0},o="function"==typeof Object.getOwnPropertySymbols;e.exports=function(e,t,a){if("string"!=typeof t){var i=Object.getOwnPropertyNames(t);o&&(i=i.concat(Object.getOwnPropertySymbols(t)));for(var l=0;l<i.length;++l)if(!(r[i[l]]||n[i[l]]||a&&a[i[l]]))try{e[i[l]]=t[i[l]]}catch(e){}}return e}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(3),c=n(s),u={children:!0,key:!0,ref:!0},d=function(e){function t(){return o(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){return c.default.Children.only(this.props.children)}},{key:"getChildContext",value:function(){var e={},t=this.context.mobxStores;if(t)for(var r in t)e[r]=t[r];for(var n in this.props)u[n]||(e[n]=this.props[n]);return{mobxStores:e}}},{key:"componentWillReceiveProps",value:function(e){Object.keys(e).length!==Object.keys(this.props).length&&console.warn("MobX Provider: The set of provided stores has changed. Please avoid changing stores as the change might not propagate to all children");for(var t in e)u[t]||this.props[t]===e[t]||console.warn("MobX Provider: Provided store '"+t+"' has changed. Please avoid replacing stores as the change might not propagate to all children")}}]),t}(s.Component);d.contextTypes={mobxStores:s.PropTypes.object},d.childContextTypes={mobxStores:s.PropTypes.object.isRequired},t.default=d},function(e,t,r){"use strict";function n(e){function t(t,r,n,o,a,i){for(var l=arguments.length,s=Array(l>6?l-6:0),c=6;c<l;c++)s[c-6]=arguments[c];return(0,u.untracked)(function(){if(o=o||"<<anonymous>>",i=i||n,null==r[n]){if(t){var l=null===r[n]?"null":"undefined";return new Error("The "+a+" `"+i+"` is marked as required in `"+o+"`, but its value is `"+l+"`.")}return null}return e.apply(void 0,[r,n,o,a,i].concat(s))})}var r=t.bind(null,!1);return r.isRequired=t.bind(null,!0),r}function o(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function a(e){var t="undefined"==typeof e?"undefined":c(e);return Array.isArray(e)?"array":e instanceof RegExp?"object":o(t,e)?"symbol":t}function i(e){var t=a(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function l(e,t){return n(function(r,n,o,l,s){return(0,u.untracked)(function(){if(e&&a(r[n])===t.toLowerCase())return null;var l=void 0;switch(t){case"Array":l=u.isObservableArray;break;case"Object":l=u.isObservableObject;break;case"Map":l=u.isObservableMap;break;default:throw new Error("Unexpected mobxType: "+t)}var c=r[n];if(!l(c)){var d=i(c),p=e?" or javascript `"+t.toLowerCase()+"`":"";return new Error("Invalid prop `"+s+"` of type `"+d+"` supplied to `"+o+"`, expected `mobx.Observable"+t+"`"+p+".")}return null})})}function s(e,t){return n(function(r,n,o,a,i){for(var s=arguments.length,c=Array(s>5?s-5:0),d=5;d<s;d++)c[d-5]=arguments[d];return(0,u.untracked)(function(){if("function"!=typeof t)return new Error("Property `"+i+"` of component `"+o+"` has invalid PropType notation.");var s=l(e,"Array")(r,n,o);if(s instanceof Error)return s;for(var u=r[n],d=0;d<u.length;d++)if(s=t.apply(void 0,[u,d,o,a,i+"["+d+"]"].concat(c)),s instanceof Error)return s;return null})})}Object.defineProperty(t,"__esModule",{value:!0}),t.objectOrObservableObject=t.arrayOrObservableArrayOf=t.arrayOrObservableArray=t.observableObject=t.observableMap=t.observableArrayOf=t.observableArray=void 0;var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},u=r(2);t.observableArray=l(!1,"Array"),t.observableArrayOf=s.bind(null,!1),t.observableMap=l(!1,"Map"),t.observableObject=l(!1,"Object"),t.arrayOrObservableArray=l(!0,"Array"),t.arrayOrObservableArrayOf=s.bind(null,!0),t.objectOrObservableObject=l(!0,"Object")}])})},function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i},o=r(5);r(7),o.useStrict(!0);var a=function(){function e(){this.db=db,this.hospedeiros=hospedeiros,this.listaNomesSci=hospedeiros.unique("nomeSci").sort(function(e,t){return e.localeCompare(t)}),this.listaNomesVul=hospedeiros.unique("nomeVul").sort(function(e,t){return e.localeCompare(t)}),this.dados={hospSci:"",hospVul:"",prod:"",orig:"",dest:""},this.estados=[{estado:"",UF:""},{estado:"Acre",UF:"AC"},{estado:"Alagoas",UF:"AL"},{estado:"Amazonas",UF:"AM"},{estado:"Amapá",UF:"AP"},{estado:"Bahia",UF:"BA"},{estado:"Ceará",UF:"CE"},{estado:"Distrito Federal",UF:"DF"},{estado:"Espirito Santo",UF:"ES"},{estado:"Goiás",UF:"GO"},{estado:"Maranhão",UF:"MA"},{estado:"Minas Gerais",UF:"MG"},{estado:"Mato Grosso do Sul",UF:"MS"},{estado:"Mato Grosso",UF:"MT"},{estado:"Pará",UF:"PA"},{estado:"Paraíba",UF:"PB"},{estado:"Pernambuco",UF:"PE"},{estado:"Piauí",UF:"PI"},{estado:"Paraná",UF:"PR"},{estado:"Rio de janeiro",UF:"RJ"},{estado:"Rio Grande do Norte",UF:"RN"},{estado:"Rondônia",UF:"RO"},{estado:"Roraima",UF:"RR"},{estado:"Rio Grande do Sul",UF:"RS"},{estado:"Santa Catarina",UF:"SC"},{estado:"Sergipe",UF:"SE"},{estado:"São Paulo",UF:"SP"},{estado:"Tocantins",UF:"TO"}],this.handleChanges=function(e){switch(e.target.name){case"hospSci":t.store.dados.hospVul=t.store.hospedeiros.find(function(t){return t.nomeSci===e.target.value}).nomeVul;break;case"hospVul":t.store.dados.hospSci=t.store.hospedeiros.find(function(t){return t.nomeVul===e.target.value}).nomeSci}t.store.dados[e.target.name]=e.target.value}}return Object.defineProperty(e.prototype,"empty",{get:function(){return 0===this.result.length},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"origem",{get:function(){var e=this;return this.estados.filter(function(t){return t.UF!==e.dados.dest||""===t.UF})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"destino",{get:function(){var e=this;return this.estados.filter(function(t){return t.UF!==e.dados.orig||""===t.UF})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"gender",{get:function(){return this.dados.hospSci.split(" ")[0]},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"completed",{get:function(){return Boolean(this.dados.hospSci)&&Boolean(this.dados.hospVul)&&Boolean(this.dados.prod)&&Boolean(this.dados.orig)&&Boolean(this.dados.dest)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"partes",{get:function(){var e=this;return db.filter(function(t){return t.hosp.includes(e.dados.hospSci)||t.hosp.includes(e.gender+" sp.")||t.hosp.includes(e.gender+" spp.")}).by("part").flatten().unique().concat([""]).sort(function(e,t){return e.localeCompare(t)})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"result",{get:function(){var e=this;return db.filter(function(t){return(t.hosp.includes(e.dados.hospSci)||t.hosp.includes(e.gender+" sp.")||t.hosp.includes(e.gender+" spp."))&&t.orig.includes(e.dados.orig)&&t.dest.includes(e.dados.dest)&&t.part.includes(e.dados.prod)})},enumerable:!0,configurable:!0}),e.prototype.clean=function(){this.dados.hospSci="",this.dados.hospVul="",this.dados.prod="",this.dados.orig="",this.dados.dest=""},e}();n([o.observable],a.prototype,"dados",void 0),n([o.computed],a.prototype,"empty",null),n([o.computed],a.prototype,"origem",null),n([o.computed],a.prototype,"destino",null),n([o.computed],a.prototype,"gender",null),n([o.computed],a.prototype,"completed",null),n([o.computed],a.prototype,"partes",null),n([o.computed],a.prototype,"result",null),n([o.action],a.prototype,"handleChanges",void 0),n([o.action],a.prototype,"clean",null),t.store=new a,Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.store},function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i},o=r(5),a=r(3);o.useStrict(!0);var i=function(){function e(){var e=this;this.exibeBase=!1,this.searched=!1,this.handleMenu=function(t,r){"Base"===t&&(e.exibeBase=!e.exibeBase),"Nova"===t&&(a.default.clean(),e.searched=!1)},this.handleSearch=function(t){e.searched=!0,t.preventDefault()}}return e}();n([o.observable],i.prototype,"exibeBase",void 0),n([o.observable],i.prototype,"searched",void 0),n([o.action],i.prototype,"handleMenu",void 0),n([o.action],i.prototype,"handleSearch",void 0),t.uiStore=new i,Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.uiStore},function(e,t){e.exports=mobx},function(e,t){e.exports=ReactDOM},function(e,t){function r(e,t){var r;switch(typeof e){case"function":r=t.map(e);break;case"string":r=t.map(function(t){return t[e]});break;default:r=t}return r}function n(e,t,r,o){return 0===t?e:e.reduce(function(a,i,l){return r&&(i=r.call(o||e,i,l,e)),Array.isArray(i)?a.push.apply(a,n(i,t-1)):a.push(i),a},[])}Array.prototype.groupBy||(Array.prototype.groupBy=function(e,t){var r,n=this.reduce(function(n,o){r=o[e],n[r]=n[r]||[];var a;switch(typeof t){case"function":a=t(o);break;case"string":a={},a[t]=o[t];break;case"object":Array.isArray(t)&&(a=t.reduce(function(e,t){return e[t]=o[t],e},{}));break;default:a=o}return n[r].push(a),n},{}),o=[];return Object.keys(n).forEach(function(t){var r={},a="function"==typeof e?"key":e;r[a]=t,r.group=n[t],o.push(r)}),o}),Array.prototype.aggregate||(Array.prototype.aggregate=function(e){return this.map(function(t){return Object.keys(e).forEach(function(r){var n,o=e[r],a=t.group.map(function(e){return e[r]}),i="";"string"==typeof o?(n=Array.prototype[o].call(a),i=o):n=o.call(a),t[i+"_"+r]=n}),delete t.group,t})}),Array.prototype.first||(Array.prototype.first=function(){return this[0]}),Array.prototype.last||(Array.prototype.last=function(){return this[this.length-1]}),Array.prototype.count||(Array.prototype.count=function(){return this.length}),Array.prototype.min||(Array.prototype.min=function(e){return Math.min.apply(null,this.by(e))}),Array.prototype.max||(Array.prototype.max=function(e){return Math.max.apply(null,this.by(e))}),Array.prototype.sum||(Array.prototype.sum=function(e){return this.by(e).reduce(function(e,t){return+t+e},0)}),Array.prototype.average||(Array.prototype.average=function(e){var t=r(e,this),n=t.length,o=t.reduce(function(e,t){return+t+e},0);return o/n}),Array.prototype.unique||(Array.prototype.unique=function(e){var t,n=r(e,this),o={},a=n.length,i=[];for(t=0;t<a;t+=1)o[JSON.stringify(n[t])]=n[t];return Object.keys(o).forEach(function(e){i.push(o[e])}),i}),Array.prototype.flatten||(Array.prototype.flatten=function(e){return void 0===e&&(e=1/0),n(this,e)}),Array.prototype.flatMap||(Array.prototype.flatMap=function(e,t){return n(this,1,e,t)}),Array.prototype.by||(Array.prototype.by=function(e){return r(e,this)}),Array.prototype.take||(Array.prototype.take=function(e){var t,r;return e>=0?(t=0,r=e):(t=e,r=this.length),this.slice(t,r)}),Array.prototype.includes||(Array.prototype.includes=function(e){"use strict";var t=Object(this),r=parseInt(t.length,10)||0;if(0===r)return!1;var n,o=parseInt(arguments[1],10)||0;o>=0?n=o:(n=r+o,n<0&&(n=0));for(var a;n<r;){if(a=t[n],e===a||e!==e&&a!==a)return!0;n++}return!1}),Array.prototype.find||(Array.prototype.find=function(e){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var t,r=Object(this),n=r.length>>>0,o=arguments[1],a=0;a<n;a++)if(t=r[a],e.call(o,t,a,r))return t}),Array.prototype.findIndex||(Array.prototype.findIndex=function(e){if(null===this)throw new TypeError("Array.prototype.findIndex called on null or undefined");if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var t,r=Object(this),n=r.length>>>0,o=arguments[1],a=0;a<n;a++)if(t=r[a],e.call(o,t,a,r))return a;return-1}),Array.prototype.fill||(Array.prototype.fill=function(e){if(null==this)throw new TypeError("this is null or not defined");for(var t=Object(this),r=t.length>>>0,n=arguments[1],o=n>>0,a=o<0?Math.max(r+o,0):Math.min(o,r),i=arguments[2],l=void 0===i?r:i>>0,s=l<0?Math.max(r+l,0):Math.min(l,r);a<s;)t[a]=e,a++;return t}),"function"!=typeof Object.assign&&!function(){Object.assign=function(e){"use strict";if(void 0===e||null===e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),r=1;r<arguments.length;r++){var n=arguments[r];if(void 0!==n&&null!==n)for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])}return t}}(),Object.isString||(Object.isString=function(e){return"string"==typeof e||e instanceof String}),Object.isNumber||(Object.isNumber=function(e){return"number"==typeof e||e instanceof Number}),Object.isBoolean||(Object.isBoolean=function(e){return"boolean"==typeof e||e instanceof Boolean}),Object.isObject||(Object.isObject=function(e){return"[object Object]"===Object.prototype.toString.call(e)}),Object.isArray||(Object.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),Object.isNull||(Object.isNull=function(e){return null===e}),Object.isUndefined||(Object.isUndefined=function(e){return void 0===e}),Object.isFunction||(Object.isFunction=function(e){return"function"==typeof e||!1}),Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),Number.isFinite||(Number.isFinite=Number.isFinite||function(e){return"number"==typeof e&&isFinite(e)}),Number.isInteger||(Number.isInteger=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e})},function(e,t,r){"use strict";var n=r(1),o=r(4),a=r(2),i=function(e){var t=e.db;return o.default.exibeBase?n.createElement("div",null,n.createElement("br",null),n.createElement("table",{style:{width:"100%"},className:"table-grid"},n.createElement("caption",null,"Exigências"),n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{style:{width:"10%"}},"Descrição"),n.createElement("th",{style:{width:"20%"}},"Hospedeiro"),n.createElement("th",{style:{width:"10%"}},"Partida"),n.createElement("th",{style:{width:"10%"}},"Origem"),n.createElement("th",{style:{width:"10%"}},"Destino"),n.createElement("th",{style:{width:"15%"}},"Legislação"),n.createElement("th",{style:{width:"30%"}},"Exigências"),n.createElement("th",{style:{width:"5%"}},"Trânsito Proibido"))),n.createElement("tbody",null,t.map(function(e,t){return n.createElement("tr",{key:t},n.createElement("td",{style:{width:"10%"}},n.createElement("span",null,e.desc)),n.createElement("td",{style:{width:"20%"},className:"italic"},n.createElement("span",null,e.hosp.toString())),n.createElement("td",{style:{width:"10%"}},n.createElement("span",null,e.part.toString())),n.createElement("td",{style:{width:"10%"}},n.createElement("span",null,e.orig.toString())),n.createElement("td",{style:{width:"10%"}},n.createElement("span",null,e.dest.toString())),n.createElement("td",{style:{width:"15%"}},n.createElement("a",{target:"_blank",href:"{item.link}"},e.leg),n.createElement("br",null),n.createElement("br",null),n.createElement("span",null,e.pragc),n.createElement("br",null),n.createElement("br",null),n.createElement("span",{className:"italic"},e.prag)),n.createElement("td",{style:{width:"30%"}},n.createElement("div",{style:{margin:"6px"}},e.exig.map(function(e,t){return n.createElement("span",{key:t},t+1," - ",e)}))),n.createElement("td",{style:{width:"5%","text-align":"center"}},n.createElement("input",{type:"checkbox",disabled:!0,selected:e.proib})))})),n.createElement("tfoot",{className:"form-barra-botoes"},n.createElement("tr",null,n.createElement("td",null))))):null};Object.defineProperty(t,"__esModule",{value:!0}),t.default=a.observer(i)},function(e,t,r){"use strict";function n(){return i.default.searched?null:o.createElement("form",null,o.createElement("table",{className:"table-form no-print"},o.createElement("tbody",null,o.createElement("tr",{title:s},o.createElement("td",{className:"col30"},o.createElement("label",null,"Espécie Vegetal (nome científico):")),o.createElement("td",null,o.createElement("select",{title:s,className:"italic form-select",value:a.default.dados.hospSci,name:"hospSci",onChange:a.default.handleChanges.bind(this)},o.createElement("option",{value:""}),a.default.listaNomesSci.map(function(e,t){return o.createElement("option",{value:e,key:t},e)})))),o.createElement("tr",{title:s},o.createElement("td",{className:"col30"},o.createElement("label",null,"Espécie Vegetal (nome vulgar):")),o.createElement("td",null,o.createElement("select",{title:s,className:"form-select",name:"hospVul",value:a.default.dados.hospVul,onChange:a.default.handleChanges.bind(this)},o.createElement("option",{value:""}),a.default.hospedeiros.map(function(e,t){return o.createElement("option",{value:e.nomeVul,key:t},e.nomeVul)})))),o.createElement("tr",null,o.createElement("td",{className:"col30"},o.createElement("label",null,"Parte da Planta:")),o.createElement("td",null,o.createElement("select",{className:"form-select",name:"prod",value:a.default.dados.prod,onChange:a.default.handleChanges.bind(this)},a.default.partes.map(function(e,t){return o.createElement("option",{value:e,key:t},e)})))),o.createElement("tr",null,o.createElement("td",{className:"col30"},o.createElement("label",null,"Origem:")),o.createElement("td",null,o.createElement("select",{className:"form-select",name:"orig",value:a.default.dados.orig,onChange:a.default.handleChanges.bind(this)},a.default.origem.map(function(e,t){return o.createElement("option",{value:e.UF,key:t},e.estado)})))),o.createElement("tr",null,o.createElement("td",{className:"col30"},o.createElement("label",null,"Destino:")),o.createElement("td",null,o.createElement("select",{className:"form-select",name:"dest",value:a.default.dados.dest,onChange:a.default.handleChanges.bind(this)},a.default.destino.map(function(e,t){return o.createElement("option",{value:e.UF,key:t},e.estado)})))),o.createElement("tr",null,o.createElement("td",{className:"col30"},o.createElement("a",{target:"_blank",href:"https://www.google.com.br/search?site=imghp&tbm=isch&q="+a.default.dados.hospSci+"+plant+OR+planta+ORfruto+OR+fruit+OR+flor+OR+flower"},"Fotos da Espécie Vegetal")),o.createElement("td",{style:{"text-align":"center"}},o.createElement("button",{onClick:i.default.handleSearch.bind(this),className:"form-button",disabled:!a.default.completed},"Pesquisar"),o.createElement("br",null))))))}var o=r(1),a=r(3),i=r(4),l=r(2),s='Se a espécie pertencer à uma destas Famílias: "Arecaceae", "Heliconiaceae", "Musaceae",';s+=' "Pandanaceae", "Strelitziaceae" ou "Zingiberaceae", fazer a consulta para a Espécie e',s+=" para a Família, ou só para a Família se a espécie não estiver relacionada",Object.defineProperty(t,"__esModule",{value:!0}),t.default=l.observer(n)},function(e,t,r){"use strict";var n=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=r(1),a=r(6),i=r(3),l=r(8),s=r(11),c=r(12),u=r(9),d=function(e){function t(){return e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){return o.createElement("div",{id:"resolucao"},o.createElement("div",{id:"moldura-topo"},o.createElement("div",{id:"topo"},o.createElement("div",{id:"identificacao-ministerio"},o.createElement("span",null,o.createElement("div",{id:"imagemGov"},o.createElement("a",{href:"http://www.brasil.gov.br",target:"_blank",id:"brasilgov"})))),o.createElement("div",{id:"identificacao-sistema",style:{float:"none"}},o.createElement("br",null),o.createElement("div",{style:{float:"right",color:"#fff",padding:"5px 10px 5px 15px"}},"Versão 3.0-6"),o.createElement("h1",null,"CEFiTI"),o.createElement("div",{style:{float:"right",color:"#fff",padding:"5px 10px 5px 15px"}},"Data: ",(new Date).toLocaleDateString()),o.createElement("h2",null,"Catálogo de Exigências Fitossanitárias para o Trânsito Interestadual")),o.createElement("div",{id:"dados-login"}))),o.createElement("div",{id:"moldura-navegacao-global"},o.createElement("div",{id:"navegacao-global"},o.createElement(s.default,null))),o.createElement("div",{id:"corpo"},o.createElement("div",{id:"conteúdo"},o.createElement(u.default,null),o.createElement(c.default,null),o.createElement(l.default,{db:this.props.store.db})),o.createElement("br",null),o.createElement("p",{className:"small red center "},"Este Sistema está em fase de HOMOLOGAÇÃO, devido a isso as informações obtidas devem ser verificadas na legislação pertinente."),o.createElement("p",{className:"small red center "},"Se for encontrada alguma informação que não reflita corretamente a legislação, favor informar o SSV-MT no e-mail abaixo."),o.createElement("br",null),o.createElement("p",{className:"small center"},"As informações apresentadas não substituem o texto legal vigente, publicado em Diário Oficial da União, e referem-se a requisitos fitossanitários, não dispensando outras exigências estabelecidas em normas específicas. No caso de interceptação de praga, serão adotados os procedimentos constantes do Decreto 24.114, de 12 de abril de 1934. Quando se tratar de material de multiplicação ou propagação vegetaldeverá ser obaservada a Legislação de Sementes e Mudas."),o.createElement("br",null),o.createElement("div",null,o.createElement("h5",{className:"center"},"Desenvolvido pelo SSV-MT - ",o.createElement("a",{href:"mailto:ssv-mt@agricultura.gov.br"
},"ssv-mt@agricultura.gov.br")))))},t}(o.Component);a.render(o.createElement(d,{store:i.default}),document.getElementById("app"))},function(e,t,r){"use strict";var n=this,o=r(1),a=r(4),i=r(2),l=function(){return o.createElement("p",null,o.createElement("span",null,o.createElement("a",{href:"#",onClick:a.default.handleMenu.bind(n,"Base")},"Ver Base de Dados")),o.createElement("span",{title:"Para salvar o resultado como PDF, utilize o navegador Chrome, e altere a impressora para 'Salvar como PDF' na página de impressão"},o.createElement("a",{href:"#",onClick:a.default.handleMenu.bind(n)},"Imprimir")),o.createElement("span",null,o.createElement("a",{href:"#"},"Para baixar o Sistema: CTRL + S ")),o.createElement("span",null,o.createElement("a",{href:"#",onClick:a.default.handleMenu.bind(n,"Nova")},"Nova Consulta")))};Object.defineProperty(t,"__esModule",{value:!0}),t.default=i.observer(l)},function(e,t,r){"use strict";function n(){return o.createElement("div",null,o.createElement("div",{className:a.default.completed&&i.default.searched?"":"hidden"},o.createElement("br",null),o.createElement("h3",null,"Exigências Fitossanitárias para o trânsito de ",a.default.dados.prod," de ",a.default.dados.hospVul," ",o.createElement("i",null,"(",a.default.dados.hospSci,")")," do ",a.default.dados.orig," para ",a.default.dados.dest),o.createElement("div",{className:a.default.empty?"":"hidden"},o.createElement("br",null),o.createElement("p",{className:"center no-print"},"Se a espécie vegetal ou a parte da planta buscada não constar das respectivas listas, e a espécie não pertencer às famílias Arecaceae, ou Heliconiaceae, ou Pandanaceae, ou Strelitziaceae, ou Zingiberaceae, então conclui-se que não há nenhuma exigência fitossanitária para o trânsito interestadual"),o.createElement("br",null),o.createElement("span",{className:"empty"},o.createElement("div",null,"SEM EXIGÊNCIAS PARA O TRÂNSITO")),o.createElement("br",null)),o.createElement("span",null,i.default.searched),a.default.result.map(function(e,t){return o.createElement("div",{key:t},o.createElement("hr",null),o.createElement("h4",{className:"h4"},o.createElement("i",null,e.prag)," - ",e.pragc)," ",o.createElement("a",{target:"_blank",href:e.link},e.leg),"         ",o.createElement("a",{className:"small",target:"_blank",href:"https://www.google.com.br/search?site=imghp&tbm=isch&q="+e.prag},"[FOTOS DA PRAGA]"),o.createElement("br",null),o.createElement("br",null),o.createElement("span",{className:"small underline"},e.desc),e.exig.map(function(t,r){return o.createElement("div",{style:{margin:"6px"},key:r},o.createElement("span",{title:"De: "+e.orig+" para "+e.dest},r+1," - ",t))}))}),o.createElement("div",{className:a.default.empty?"hidden":""},o.createElement("hr",null),o.createElement("h4",{className:"h4"},"TRÂNSITO NACIONAL DE PARTIDA IMPORTADA"),o.createElement("div",{style:{margin:"6px"}},o.createElement("span",null,"1 – SE A PARTIDA AINDA NÃO FOI INTERNALIZADA PELO MAPA E ESTIVER EM TRÂNSITO A UMA ÁREA ALFANDEGADA NO INTERIOR DO BRASIL:"),o.createElement("br",null),o.createElement("span",null,"- Certificado Fitossanitário ou Certificado Fitossanitário de Reexportação;")),o.createElement("div",{style:{margin:"6px"}},o.createElement("span",null,"2 – SE A PARTIDA JÁ FOI INTERNALIZADA PELO MAPA E ESTIVER EM TRÂNSITO AO PONTO DE DESTINO DECLARADO NA IMPORTAÇÃO:"),o.createElement("br",null),o.createElement("span",null,"- Cópia autenticada do Certificado Fitossanitário ou do Certificado Fitossanitário de Reexportação; "),o.createElement("br",null),o.createElement("span",null,"- Original ou cópia autenticada do Requerimento para Fiscalização de Produtos Agropecuários, emitido pelo MAPA;")),o.createElement("div",{style:{margin:"6px"}},o.createElement("span",null,"3 – SE A PARTIDA JÁ FOI INTERNALIZADA PELO MAPA E ESTIVER SAINDO DO DESTINO DECLARADO NA IMPORTAÇÃO, EM DIREÇÃO A QUALQUER UF:"),o.createElement("br",null),o.createElement("span",null,"- Cumprir os requisitos fitossanitários para o trânsito interestadual.")),o.createElement("hr",null),o.createElement("h4",{className:"h4"},"TRÂNSITO NACIONAL DE PARTIDA EXPORTADA"),o.createElement("div",{style:{margin:"6px"}},o.createElement("span",null,"1 – SE A PARTIDA JÁ FOI EXPORTADA PELO MAPA EM ÁREA ALFANDEGADA NO INTERIOR DO BRASIL E ESTIVER EM TRÂNSITO A PONTO DE EGRESSO:"),o.createElement("span",null,"- Não se aplicam as exigências para o trânsito interestadual.")),o.createElement("hr",null),o.createElement("h4",{className:"h4"},"LEGISLAÇÃO GERAL"),o.createElement("a",{target:"_blank",href:"leg/IN54-2007.pdf"},"Instrução Normativa MAPA Nº 54, de 4 de dezembro de 2007"),o.createElement("br",null),o.createElement("br",null),o.createElement("a",{target:"_blank",href:"leg/IN59-2013.pdf"},"Instrução Normativa MAPA Nº 59, de 18 de dezembro de 2013"))))}var o=r(1),a=r(3),i=r(4),l=r(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=l.observer(n)}]);