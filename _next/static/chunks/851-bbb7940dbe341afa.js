"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[851],{3839:function(e,t,l){l.d(t,{Cs:function(){return d},_t:function(){return g},gq:function(){return a}});var i=l(2265),s=l(6565),n=l(5479),o=l(6820),r=l(3967);function c(e){return(0,n.ad)()?e.altKey:e.ctrlKey}function u(e){return(0,n.V5)()?e.metaKey:e.ctrlKey}function a(e){let t,{selectionManager:l,keyboardDelegate:a,ref:d,autoFocus:h=!1,shouldFocusWrap:y=!1,disallowEmptySelection:f=!1,disallowSelectAll:g=!1,selectOnFocus:p="replace"===l.selectionBehavior,disallowTypeAhead:K=!1,shouldUseVirtualFocus:v,allowsTabNavigation:m=!1,isVirtualized:S,scrollRef:w=d}=e,{direction:b}=(0,r.bU)(),k=(0,i.useRef)({top:0,left:0});(0,n.zX)(w,"scroll",S?null:()=>{k.current={top:w.current.scrollTop,left:w.current.scrollLeft}});let F=(0,i.useRef)(h);(0,i.useEffect)(()=>{if(F.current){let e=null;"first"===h&&(e=a.getFirstKey()),"last"===h&&(e=a.getLastKey());let t=l.selectedKeys;t.size&&(e=t.values().next().value),l.setFocused(!0),l.setFocusedKey(e),null!=e||v||(0,s.ex)(d.current)}F.current=!1},[]);let x=(0,i.useRef)(l.focusedKey);(0,i.useEffect)(()=>{let e=(0,o.Jz)();if(l.isFocused&&null!=l.focusedKey&&(null==w?void 0:w.current)){let t=w.current.querySelector(`[data-key="${l.focusedKey}"]`);t&&"keyboard"===e&&(S||(0,n.zT)(w.current,t),(0,n.Gt)(t,{containingElement:d.current}))}l.isFocused&&null==l.focusedKey&&null!=x.current&&(0,s.ex)(d.current),x.current=l.focusedKey},[S,w,l.focusedKey,l.isFocused,d]);let C={onKeyDown:e=>{var t,i,o,r,h,K,v,S;if(e.altKey&&"Tab"===e.key&&e.preventDefault(),!d.current.contains(e.target))return;let w=(t,i)=>{null!=t&&(l.setFocusedKey(t,i),e.shiftKey&&"multiple"===l.selectionMode?l.extendSelection(t):p&&!c(e)&&l.replaceSelection(t))};switch(e.key){case"ArrowDown":if(a.getKeyBelow){e.preventDefault();let s=null!=l.focusedKey?a.getKeyBelow(l.focusedKey):null===(t=a.getFirstKey)||void 0===t?void 0:t.call(a);null==s&&y&&(s=null===(i=a.getFirstKey)||void 0===i?void 0:i.call(a,l.focusedKey)),w(s)}break;case"ArrowUp":if(a.getKeyAbove){e.preventDefault();let t=null!=l.focusedKey?a.getKeyAbove(l.focusedKey):null===(o=a.getLastKey)||void 0===o?void 0:o.call(a);null==t&&y&&(t=null===(r=a.getLastKey)||void 0===r?void 0:r.call(a,l.focusedKey)),w(t)}break;case"ArrowLeft":if(a.getKeyLeftOf){e.preventDefault();let t=a.getKeyLeftOf(l.focusedKey);null==t&&y&&(t="rtl"===b?null===(h=a.getFirstKey)||void 0===h?void 0:h.call(a,l.focusedKey):null===(K=a.getLastKey)||void 0===K?void 0:K.call(a,l.focusedKey)),w(t,"rtl"===b?"first":"last")}break;case"ArrowRight":if(a.getKeyRightOf){e.preventDefault();let t=a.getKeyRightOf(l.focusedKey);null==t&&y&&(t="rtl"===b?null===(v=a.getLastKey)||void 0===v?void 0:v.call(a,l.focusedKey):null===(S=a.getFirstKey)||void 0===S?void 0:S.call(a,l.focusedKey)),w(t,"rtl"===b?"last":"first")}break;case"Home":if(a.getFirstKey){e.preventDefault();let t=a.getFirstKey(l.focusedKey,u(e));l.setFocusedKey(t),u(e)&&e.shiftKey&&"multiple"===l.selectionMode?l.extendSelection(t):p&&l.replaceSelection(t)}break;case"End":if(a.getLastKey){e.preventDefault();let t=a.getLastKey(l.focusedKey,u(e));l.setFocusedKey(t),u(e)&&e.shiftKey&&"multiple"===l.selectionMode?l.extendSelection(t):p&&l.replaceSelection(t)}break;case"PageDown":a.getKeyPageBelow&&(e.preventDefault(),w(a.getKeyPageBelow(l.focusedKey)));break;case"PageUp":a.getKeyPageAbove&&(e.preventDefault(),w(a.getKeyPageAbove(l.focusedKey)));break;case"a":u(e)&&"multiple"===l.selectionMode&&!0!==g&&(e.preventDefault(),l.selectAll());break;case"Escape":e.preventDefault(),f||l.clearSelection();break;case"Tab":if(!m){if(e.shiftKey)d.current.focus();else{let e,t,l=(0,s.QL)(d.current,{tabbable:!0});do(t=l.lastChild())&&(e=t);while(t);e&&!e.contains(document.activeElement)&&(0,n.Ao)(e)}}}},onFocus:e=>{if(l.isFocused){e.currentTarget.contains(e.target)||l.setFocused(!1);return}if(e.currentTarget.contains(e.target)){if(l.setFocused(!0),null==l.focusedKey){var t,i,s;let n=e.relatedTarget;null!=(s=n&&e.currentTarget.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_FOLLOWING?null!==(t=l.lastSelectedKey)&&void 0!==t?t:a.getLastKey():null!==(i=l.firstSelectedKey)&&void 0!==i?i:a.getFirstKey())&&(l.setFocusedKey(s),p&&l.replaceSelection(s))}else S||(w.current.scrollTop=k.current.top,w.current.scrollLeft=k.current.left);if(!S&&null!=l.focusedKey){let e=w.current.querySelector(`[data-key="${l.focusedKey}"]`);e&&(e.contains(document.activeElement)||(0,n.Ao)(e),"keyboard"===(0,o.Jz)()&&(0,n.Gt)(e,{containingElement:d.current}))}}},onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||l.setFocused(!1)},onMouseDown(e){w.current===e.target&&e.preventDefault()}},{typeSelectProps:I}=function(e){let{keyboardDelegate:t,selectionManager:l,onTypeSelect:s}=e,n=(0,i.useRef)({search:"",timeout:null}).current;return{typeSelectProps:{onKeyDownCapture:t.getKeyForSearch?e=>{var i;let o=1!==(i=e.key).length&&/^[A-Z]/i.test(i)?"":i;if(!o||e.ctrlKey||e.metaKey||!e.currentTarget.contains(e.target))return;" "!==o||!(n.search.trim().length>0)||(e.preventDefault(),"continuePropagation"in e||e.stopPropagation()),n.search+=o;let r=t.getKeyForSearch(n.search,l.focusedKey);null==r&&(r=t.getKeyForSearch(n.search)),null!=r&&(l.setFocusedKey(r),s&&s(r)),clearTimeout(n.timeout),n.timeout=setTimeout(()=>{n.search=""},1e3)}:null}}}({keyboardDelegate:a,selectionManager:l});return K||(C=(0,n.dG)(I,C)),v||(t=null==l.focusedKey?0:-1),{collectionProps:{...C,tabIndex:t}}}function d(e){let{selectionManager:t,key:l,ref:r,shouldSelectOnPressUp:a,shouldUseVirtualFocus:d,focus:f,isDisabled:g,onAction:p,allowsDifferentPressOrigin:K}=e,v=e=>{if("keyboard"===e.pointerType&&c(e))t.toggleSelection(l);else{if("none"===t.selectionMode)return;"single"===t.selectionMode?t.isSelected(l)&&!t.disallowEmptySelection?t.toggleSelection(l):t.replaceSelection(l):e&&e.shiftKey?t.extendSelection(l):"toggle"===t.selectionBehavior||e&&(u(e)||"touch"===e.pointerType||"virtual"===e.pointerType)?t.toggleSelection(l):t.replaceSelection(l)}};(0,i.useEffect)(()=>{l===t.focusedKey&&t.isFocused&&!d&&(f?f():document.activeElement!==r.current&&(0,s.ex)(r.current))},[r,l,t.focusedKey,t.childFocusStrategy,t.isFocused,d]),g=g||t.isDisabled(l);let m={};d||g?g&&(m.onMouseDown=e=>{e.preventDefault()}):m={tabIndex:l===t.focusedKey?0:-1,onFocus(e){e.target===r.current&&t.setFocusedKey(l)}};let S=!g&&t.canSelectItem(l),w=p&&!g,b=w&&("replace"===t.selectionBehavior?!S:t.isEmpty),k=w&&S&&"replace"===t.selectionBehavior,F=b||k,x=(0,i.useRef)(null),C=F&&S,I=(0,i.useRef)(!1),T=(0,i.useRef)(!1),A={};a?(A.onPressStart=e=>{x.current=e.pointerType,I.current=C,"keyboard"===e.pointerType&&(!F||y())&&v(e)},K?(A.onPressUp=e=>{"keyboard"!==e.pointerType&&v(e)},A.onPress=b?()=>p():null):A.onPress=e=>{b||k&&"mouse"!==e.pointerType?("keyboard"!==e.pointerType||h())&&p():"keyboard"!==e.pointerType&&v(e)}):(A.onPressStart=e=>{x.current=e.pointerType,I.current=C,T.current=b,("mouse"===e.pointerType&&!b||"keyboard"===e.pointerType&&(!p||y()))&&v(e)},A.onPress=e=>{("touch"===e.pointerType||"pen"===e.pointerType||"virtual"===e.pointerType||"keyboard"===e.pointerType&&F&&h()||"mouse"===e.pointerType&&T.current)&&(F?p():v(e))}),m["data-key"]=l,A.preventFocusOnPress=d;let{pressProps:B,isPressed:M}=(0,o.r7)(A),P=k?e=>{"mouse"===x.current&&(e.stopPropagation(),e.preventDefault(),p())}:void 0,{longPressProps:E}=(0,o.TA)({isDisabled:!C,onLongPress(e){"touch"===e.pointerType&&(v(e),t.setSelectionBehavior("toggle"))}});return{itemProps:(0,n.dG)(m,S||b?B:{},C?E:{},{onDoubleClick:P,onDragStartCapture:e=>{"touch"===x.current&&I.current&&e.preventDefault()}}),isPressed:M,isSelected:t.isSelected(l),isFocused:t.isFocused&&t.focusedKey===l,isDisabled:g,allowsSelection:S,hasAction:F}}function h(){let e=window.event;return(null==e?void 0:e.key)==="Enter"}function y(){let e=window.event;return(null==e?void 0:e.key)===" "||(null==e?void 0:e.code)==="Space"}class f{getNextKey(e){for(e=this.collection.getKeyAfter(e);null!=e;){if("item"===this.collection.getItem(e).type&&!this.disabledKeys.has(e))return e;e=this.collection.getKeyAfter(e)}return null}getPreviousKey(e){for(e=this.collection.getKeyBefore(e);null!=e;){if("item"===this.collection.getItem(e).type&&!this.disabledKeys.has(e))return e;e=this.collection.getKeyBefore(e)}return null}findKey(e,t,l){let i=this.getItem(e);if(!i)return null;let s=i.getBoundingClientRect();do e=t(e),i=this.getItem(e);while(i&&l(s,i.getBoundingClientRect()));return e}isSameRow(e,t){return e.top===t.top||e.left!==t.left}isSameColumn(e,t){return e.left===t.left||e.top!==t.top}getKeyBelow(e){return"grid"===this.layout&&"vertical"===this.orientation?this.findKey(e,e=>this.getNextKey(e),this.isSameRow):this.getNextKey(e)}getKeyAbove(e){return"grid"===this.layout&&"vertical"===this.orientation?this.findKey(e,e=>this.getPreviousKey(e),this.isSameRow):this.getPreviousKey(e)}getNextColumn(e,t){return t?this.getPreviousKey(e):this.getNextKey(e)}getKeyRightOf(e){return"grid"===this.layout?"vertical"===this.orientation?this.getNextColumn(e,"rtl"===this.direction):this.findKey(e,e=>this.getNextColumn(e,"rtl"===this.direction),this.isSameColumn):"horizontal"===this.orientation?this.getNextColumn(e,"rtl"===this.direction):null}getKeyLeftOf(e){return"grid"===this.layout?"vertical"===this.orientation?this.getNextColumn(e,"ltr"===this.direction):this.findKey(e,e=>this.getNextColumn(e,"ltr"===this.direction),this.isSameColumn):"horizontal"===this.orientation?this.getNextColumn(e,"ltr"===this.direction):null}getFirstKey(){let e=this.collection.getFirstKey();for(;null!=e;){if("item"===this.collection.getItem(e).type&&!this.disabledKeys.has(e))return e;e=this.collection.getKeyAfter(e)}return null}getLastKey(){let e=this.collection.getLastKey();for(;null!=e;){if("item"===this.collection.getItem(e).type&&!this.disabledKeys.has(e))return e;e=this.collection.getKeyBefore(e)}return null}getItem(e){return this.ref.current.querySelector(`[data-key="${e}"]`)}getKeyPageAbove(e){let t=this.ref.current,l=this.getItem(e);if(!l)return null;if(!(0,n.a9)(t))return this.getFirstKey();let i=t.getBoundingClientRect(),s=l.getBoundingClientRect();if("horizontal"===this.orientation){let n=i.x-t.scrollLeft,o=Math.max(0,s.x-n+s.width-i.width);for(;l&&s.x-n>o;)s=null==(l=null==(e=this.getKeyAbove(e))?null:this.getItem(e))?void 0:l.getBoundingClientRect()}else{let n=i.y-t.scrollTop,o=Math.max(0,s.y-n+s.height-i.height);for(;l&&s.y-n>o;)s=null==(l=null==(e=this.getKeyAbove(e))?null:this.getItem(e))?void 0:l.getBoundingClientRect()}return null!=e?e:this.getFirstKey()}getKeyPageBelow(e){let t=this.ref.current,l=this.getItem(e);if(!l)return null;if(!(0,n.a9)(t))return this.getLastKey();let i=t.getBoundingClientRect(),s=l.getBoundingClientRect();if("horizontal"===this.orientation){let n=i.x-t.scrollLeft,o=Math.min(t.scrollWidth,s.x-n-s.width+i.width);for(;l&&s.x-n<o;)s=null==(l=null==(e=this.getKeyBelow(e))?null:this.getItem(e))?void 0:l.getBoundingClientRect()}else{let n=i.y-t.scrollTop,o=Math.min(t.scrollHeight,s.y-n-s.height+i.height);for(;l&&s.y-n<o;)s=null==(l=null==(e=this.getKeyBelow(e))?null:this.getItem(e))?void 0:l.getBoundingClientRect()}return null!=e?e:this.getLastKey()}getKeyForSearch(e,t){if(!this.collator)return null;let l=this.collection,i=t||this.getFirstKey();for(;null!=i;){let t=l.getItem(i),s=t.textValue.slice(0,e.length);if(t.textValue&&0===this.collator.compare(s,e))return i;i=this.getKeyBelow(i)}return null}constructor(...e){if(1===e.length){let t=e[0];this.collection=t.collection,this.ref=t.ref,this.disabledKeys=t.disabledKeys||new Set,this.orientation=t.orientation,this.direction=t.direction,this.layout=t.layout||"stack"}else this.collection=e[0],this.disabledKeys=e[1],this.ref=e[2],this.collator=e[3],this.layout="stack",this.orientation="vertical";"stack"===this.layout&&"vertical"===this.orientation&&(this.getKeyLeftOf=void 0,this.getKeyRightOf=void 0)}}function g(e){let{selectionManager:t,collection:l,disabledKeys:s,ref:n,keyboardDelegate:o,autoFocus:c,shouldFocusWrap:u,isVirtualized:d,disallowEmptySelection:h,selectOnFocus:y="replace"===t.selectionBehavior,disallowTypeAhead:g,shouldUseVirtualFocus:p,allowsTabNavigation:K}=e,v=(0,r.Xe)({usage:"search",sensitivity:"base"}),m=t.disabledBehavior,S=(0,i.useMemo)(()=>o||new f(l,"selection"===m?new Set:s,n,v),[o,l,s,n,v,m]),{collectionProps:w}=a({ref:n,selectionManager:t,keyboardDelegate:S,autoFocus:c,shouldFocusWrap:u,disallowEmptySelection:h,selectOnFocus:y,disallowTypeAhead:g,shouldUseVirtualFocus:p,allowsTabNavigation:K,isVirtualized:d,scrollRef:n});return{listProps:w}}},464:function(e,t,l){l.d(t,{Em:function(){return h},Kx:function(){return u},_P:function(){return a},ck:function(){return n},eg:function(){return f},l8:function(){return d},s:function(){return y}});var i=l(2265);function s(e){return null}s.getCollectionNode=function*(e,t){let{childItems:l,title:s,children:n}=e,o=e.title||e.children,r=e.textValue||("string"==typeof o?o:"")||e["aria-label"]||"";r||(null==t?void 0:t.suppressTextValueWarning)||console.warn("<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop."),yield{type:"item",props:e,rendered:o,textValue:r,"aria-label":e["aria-label"],hasChildNodes:null!=e.hasChildItems?e.hasChildItems:!!(e.childItems||e.title&&i.Children.count(e.children)>0),*childNodes(){if(l)for(let e of l)yield{type:"item",value:e};else if(s){let e=[];i.Children.forEach(n,t=>{e.push({type:"item",element:t})}),yield*e}}}};let n=s;class o{build(e,t){return this.context=t,r(()=>this.iterateCollection(e))}*iterateCollection(e){let{children:t,items:l}=e;if("function"==typeof t){if(!l)throw Error("props.children was a function but props.items is missing");for(let l of e.items)yield*this.getFullNode({value:l},{renderer:t})}else{let e=[];i.Children.forEach(t,t=>{e.push(t)});let l=0;for(let t of e)for(let e of this.getFullNode({element:t,index:l},{}))l++,yield e}}getKey(e,t,l,i){if(null!=e.key)return e.key;if("cell"===t.type&&null!=t.key)return`${i}${t.key}`;let s=t.value;if(null!=s){var n;let e=null!==(n=s.key)&&void 0!==n?n:s.id;if(null==e)throw Error("No key found for item");return e}return i?`${i}.${t.index}`:`$.${t.index}`}getChildState(e,t){return{renderer:t.renderer||e.renderer}}*getFullNode(e,t,l,s){let n=e.element;if(!n&&e.value&&t&&t.renderer){let l=this.cache.get(e.value);if(l&&(!l.shouldInvalidate||!l.shouldInvalidate(this.context))){l.index=e.index,l.parentKey=s?s.key:null,yield l;return}n=t.renderer(e.value)}if(i.isValidElement(n)){let i=n.type;if("function"!=typeof i&&"function"!=typeof i.getCollectionNode)throw Error(`Unknown element <${"function"==typeof n.type?n.type.name:n.type}> in collection.`);let o=i.getCollectionNode(n.props,this.context),r=e.index,u=o.next();for(;!u.done&&u.value;){let i=u.value;e.index=r;let a=i.key;a||(a=i.element?null:this.getKey(n,e,t,l));let d=[...this.getFullNode({...i,key:a,index:r,wrapper:function(e,t){return e&&t?l=>e(t(l)):e||t||void 0}(e.wrapper,i.wrapper)},this.getChildState(t,i),l?`${l}${n.key}`:n.key,s)];for(let t of d){if(t.value=i.value||e.value,t.value&&this.cache.set(t.value,t),e.type&&t.type!==e.type)throw Error(`Unsupported type <${c(t.type)}> in <${c(s.type)}>. Only <${c(e.type)}> is supported.`);r++,yield t}u=o.next(d)}return}if(null==e.key)return;let o=this,u={type:e.type,props:e.props,key:e.key,parentKey:s?s.key:null,value:e.value,level:s?s.level+1:0,index:e.index,rendered:e.rendered,textValue:e.textValue,"aria-label":e["aria-label"],wrapper:e.wrapper,shouldInvalidate:e.shouldInvalidate,hasChildNodes:e.hasChildNodes,childNodes:r(function*(){if(!e.hasChildNodes)return;let l=0;for(let i of e.childNodes())for(let e of(null!=i.key&&(i.key=`${u.key}${i.key}`),i.index=l,o.getFullNode(i,o.getChildState(t,i),u.key,u)))l++,yield e})};yield u}constructor(){this.cache=new WeakMap}}function r(e){let t=[],l=null;return{*[Symbol.iterator](){for(let e of t)yield e;for(let i of(l||(l=e()),l))t.push(i),yield i}}}function c(e){return e[0].toUpperCase()+e.slice(1)}function u(e,t,l){let s=(0,i.useMemo)(()=>new o,[]),{children:n,items:r,collection:c}=e;return(0,i.useMemo)(()=>c||t(s.build({children:n,items:r},l)),[s,n,r,c,l,t])}function a(e,t){return"function"==typeof t.getChildren?t.getChildren(e.key):e.childNodes}function d(e){return h(e,0)}function h(e,t){if(t<0)return;let l=0;for(let i of e){if(l===t)return i;l++}}function y(e){let t;for(let l of e)t=l;return t}function f(e,t,l){if(t.parentKey===l.parentKey)return t.index-l.index;let i=[...g(e,t),t],s=[...g(e,l),l],n=i.slice(0,s.length).findIndex((e,t)=>e!==s[t]);return -1!==n?(t=i[n],l=s[n],t.index-l.index):i.findIndex(e=>e===l)>=0?1:(s.findIndex(e=>e===t),-1)}function g(e,t){let l=[];for(;(null==t?void 0:t.parentKey)!=null;)l.unshift(t=e.getItem(t.parentKey));return l}new WeakMap},1932:function(e,t,l){l.d(t,{Z:function(){return u},q:function(){return r}});var i=l(2265),s=l(4114),n=l(464);class o extends Set{constructor(e,t,l){super(e),e instanceof o?(this.anchorKey=t||e.anchorKey,this.currentKey=l||e.currentKey):(this.anchorKey=t,this.currentKey=l)}}function r(e){let{selectionMode:t="none",disallowEmptySelection:l,allowDuplicateSelectionEvents:n,selectionBehavior:r="toggle",disabledBehavior:u="all"}=e,a=(0,i.useRef)(!1),[,d]=(0,i.useState)(!1),h=(0,i.useRef)(null),y=(0,i.useRef)(null),[,f]=(0,i.useState)(null),g=(0,i.useMemo)(()=>c(e.selectedKeys),[e.selectedKeys]),p=(0,i.useMemo)(()=>c(e.defaultSelectedKeys,new o),[e.defaultSelectedKeys]),[K,v]=(0,s.zk)(g,p,e.onSelectionChange),m=(0,i.useMemo)(()=>e.disabledKeys?new Set(e.disabledKeys):new Set,[e.disabledKeys]),[S,w]=(0,i.useState)(r);"replace"===r&&"toggle"===S&&"object"==typeof K&&0===K.size&&w("replace");let b=(0,i.useRef)(r);return(0,i.useEffect)(()=>{r!==b.current&&(w(r),b.current=r)},[r]),{selectionMode:t,disallowEmptySelection:l,selectionBehavior:S,setSelectionBehavior:w,get isFocused(){return a.current},setFocused(e){a.current=e,d(e)},get focusedKey(){return h.current},get childFocusStrategy(){return y.current},setFocusedKey(e,t="first"){h.current=e,y.current=t,f(e)},selectedKeys:K,setSelectedKeys(e){(n||!function(e,t){if(e.size!==t.size)return!1;for(let l of e)if(!t.has(l))return!1;return!0}(e,K))&&v(e)},disabledKeys:m,disabledBehavior:u}}function c(e,t){return e?"all"===e?"all":new o(e):t}class u{get selectionMode(){return this.state.selectionMode}get disallowEmptySelection(){return this.state.disallowEmptySelection}get selectionBehavior(){return this.state.selectionBehavior}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}get isFocused(){return this.state.isFocused}setFocused(e){this.state.setFocused(e)}get focusedKey(){return this.state.focusedKey}get childFocusStrategy(){return this.state.childFocusStrategy}setFocusedKey(e,t){(null==e||this.collection.getItem(e))&&this.state.setFocusedKey(e,t)}get selectedKeys(){return"all"===this.state.selectedKeys?new Set(this.getSelectAllKeys()):this.state.selectedKeys}get rawSelection(){return this.state.selectedKeys}isSelected(e){return"none"!==this.state.selectionMode&&(e=this.getKey(e),"all"===this.state.selectedKeys?this.canSelectItem(e):this.state.selectedKeys.has(e))}get isEmpty(){return"all"!==this.state.selectedKeys&&0===this.state.selectedKeys.size}get isSelectAll(){if(this.isEmpty)return!1;if("all"===this.state.selectedKeys)return!0;if(null!=this._isSelectAll)return this._isSelectAll;let e=this.getSelectAllKeys(),t=this.state.selectedKeys;return this._isSelectAll=e.every(e=>t.has(e)),this._isSelectAll}get firstSelectedKey(){let e=null;for(let t of this.state.selectedKeys){let l=this.collection.getItem(t);(!e||l&&0>(0,n.eg)(this.collection,l,e))&&(e=l)}return null==e?void 0:e.key}get lastSelectedKey(){let e=null;for(let t of this.state.selectedKeys){let l=this.collection.getItem(t);(!e||l&&(0,n.eg)(this.collection,l,e)>0)&&(e=l)}return null==e?void 0:e.key}get disabledKeys(){return this.state.disabledKeys}get disabledBehavior(){return this.state.disabledBehavior}extendSelection(e){let t;if("none"!==this.selectionMode){if("single"===this.selectionMode){this.replaceSelection(e);return}if(e=this.getKey(e),"all"===this.state.selectedKeys)t=new o([e],e,e);else{let l=this.state.selectedKeys,i=l.anchorKey||e;for(let s of(t=new o(l,i,e),this.getKeyRange(i,l.currentKey||e)))t.delete(s);for(let l of this.getKeyRange(e,i))this.canSelectItem(l)&&t.add(l)}this.state.setSelectedKeys(t)}}getKeyRange(e,t){let l=this.collection.getItem(e),i=this.collection.getItem(t);return l&&i?0>=(0,n.eg)(this.collection,l,i)?this.getKeyRangeInternal(e,t):this.getKeyRangeInternal(t,e):[]}getKeyRangeInternal(e,t){let l=[],i=e;for(;i;){let e=this.collection.getItem(i);if((e&&"item"===e.type||"cell"===e.type&&this.allowsCellSelection)&&l.push(i),i===t)return l;i=this.collection.getKeyAfter(i)}return[]}getKey(e){let t=this.collection.getItem(e);if(!t||"cell"===t.type&&this.allowsCellSelection)return e;for(;"item"!==t.type&&null!=t.parentKey;)t=this.collection.getItem(t.parentKey);return t&&"item"===t.type?t.key:null}toggleSelection(e){if("none"===this.selectionMode)return;if("single"===this.selectionMode&&!this.isSelected(e)){this.replaceSelection(e);return}if(null==(e=this.getKey(e)))return;let t=new o("all"===this.state.selectedKeys?this.getSelectAllKeys():this.state.selectedKeys);t.has(e)?t.delete(e):this.canSelectItem(e)&&(t.add(e),t.anchorKey=e,t.currentKey=e),this.disallowEmptySelection&&0===t.size||this.state.setSelectedKeys(t)}replaceSelection(e){if("none"===this.selectionMode||null==(e=this.getKey(e)))return;let t=this.canSelectItem(e)?new o([e],e,e):new o;this.state.setSelectedKeys(t)}setSelectedKeys(e){if("none"===this.selectionMode)return;let t=new o;for(let l of e)if(null!=(l=this.getKey(l))&&(t.add(l),"single"===this.selectionMode))break;this.state.setSelectedKeys(t)}getSelectAllKeys(){let e=[],t=l=>{for(;l;){if(this.canSelectItem(l)){let i=this.collection.getItem(l);"item"===i.type&&e.push(l),i.hasChildNodes&&(this.allowsCellSelection||"item"!==i.type)&&t((0,n.l8)((0,n._P)(i,this.collection)).key)}l=this.collection.getKeyAfter(l)}};return t(this.collection.getFirstKey()),e}selectAll(){this.isSelectAll||"multiple"!==this.selectionMode||this.state.setSelectedKeys("all")}clearSelection(){!this.disallowEmptySelection&&("all"===this.state.selectedKeys||this.state.selectedKeys.size>0)&&this.state.setSelectedKeys(new o)}toggleSelectAll(){this.isSelectAll?this.clearSelection():this.selectAll()}select(e,t){"none"!==this.selectionMode&&("single"===this.selectionMode?this.isSelected(e)&&!this.disallowEmptySelection?this.toggleSelection(e):this.replaceSelection(e):"toggle"===this.selectionBehavior||t&&("touch"===t.pointerType||"virtual"===t.pointerType)?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys)return!0;let t=this.selectedKeys;if(e.size!==t.size)return!1;for(let l of e)if(!t.has(l))return!1;for(let l of t)if(!e.has(l))return!1;return!0}canSelectItem(e){if("none"===this.state.selectionMode||this.state.disabledKeys.has(e))return!1;let t=this.collection.getItem(e);return!!t&&("cell"!==t.type||!!this.allowsCellSelection)}isDisabled(e){return this.state.disabledKeys.has(e)&&"all"===this.state.disabledBehavior}constructor(e,t,l){var i;this.collection=e,this.state=t,this.allowsCellSelection=null!==(i=null==l?void 0:l.allowsCellSelection)&&void 0!==i&&i,this._isSelectAll=null}}}}]);