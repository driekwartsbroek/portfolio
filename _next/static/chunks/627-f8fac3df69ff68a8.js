"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[627],{6648:function(e,t,n){n.d(t,{default:function(){return i.a}});var r=n(5601),i=n.n(r)},8173:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let r=n(9920),i=n(1452),o=n(7437),l=i._(n(2265)),s=r._(n(4887)),a=r._(n(8321)),u=n(497),d=n(7103),f=n(3938);n(2301);let c=n(291),p=r._(n(1241)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/portfolio/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e,t,n,r,i,o,l){let s=null==e?void 0:e.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function g(e){return l.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let y=(0,l.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:i,height:s,width:a,decoding:u,className:d,style:f,fetchPriority:c,placeholder:p,loading:m,unoptimized:y,fill:v,onLoadRef:b,onLoadingCompleteRef:w,setBlurComplete:_,setShowAltText:x,sizesInput:j,onLoad:S,onError:C,...P}=e;return(0,o.jsx)("img",{...P,...g(c),loading:m,width:a,height:s,decoding:u,"data-nimg":v?"fill":"1",className:d,style:f,sizes:i,srcSet:r,src:n,ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&h(e,p,b,w,_,y,j))},[n,p,b,w,_,C,y,j,t]),onLoad:e=>{h(e.currentTarget,p,b,w,_,y,j)},onError:e=>{x(!0),"empty"!==p&&_(!0),C&&C(e)}})});function v(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...g(n.fetchPriority)};return t&&s.default.preload?(s.default.preload(n.src,r),null):(0,o.jsx)(a.default,{children:(0,o.jsx)("link",{rel:"preload",href:n.srcSet?void 0:n.src,...r},"__nimg-"+n.src+n.srcSet+n.sizes)})}let b=(0,l.forwardRef)((e,t)=>{let n=(0,l.useContext)(c.RouterContext),r=(0,l.useContext)(f.ImageConfigContext),i=(0,l.useMemo)(()=>{let e=m||r||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:s,onLoadingComplete:a}=e,h=(0,l.useRef)(s);(0,l.useEffect)(()=>{h.current=s},[s]);let g=(0,l.useRef)(a);(0,l.useEffect)(()=>{g.current=a},[a]);let[b,w]=(0,l.useState)(!1),[_,x]=(0,l.useState)(!1),{props:j,meta:S}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:b,showAltText:_});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y,{...j,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:h,onLoadingCompleteRef:g,setBlurComplete:w,setShowAltText:x,sizesInput:e.sizes,ref:t}),S.priority?(0,o.jsx)(v,{isAppRouter:!n,imgAttributes:j}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2901:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let r=n(9920)._(n(2265)).default.createContext({})},687:function(e,t){function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},497:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),n(2301);let r=n(1564),i=n(7103);function o(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var n;let s,a,u,{src:d,sizes:f,unoptimized:c=!1,priority:p=!1,loading:m,className:h,quality:g,width:y,height:v,fill:b=!1,style:w,overrideSrc:_,onLoad:x,onLoadingComplete:j,placeholder:S="empty",blurDataURL:C,fetchPriority:P,layout:E,objectFit:O,objectPosition:M,lazyBoundary:z,lazyRoot:I,...R}=e,{imgConf:k,showAltText:A,blurComplete:D,defaultLoader:L}=t,U=k||i.imageConfigDefault;if("allSizes"in U)s=U;else{let e=[...U.deviceSizes,...U.imageSizes].sort((e,t)=>e-t),t=U.deviceSizes.sort((e,t)=>e-t);s={...U,allSizes:e,deviceSizes:t}}if(void 0===L)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let N=R.loader||L;delete R.loader,delete R.srcSet;let T="__next_img_default"in N;if(T){if("custom"===s.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=N;N=t=>{let{config:n,...r}=t;return e(r)}}if(E){"fill"===E&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[E];t&&!f&&(f=t)}let B="",F=l(y),G=l(v);if("object"==typeof(n=d)&&(o(n)||void 0!==n.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,u=e.blurHeight,C=C||e.blurDataURL,B=e.src,!b){if(F||G){if(F&&!G){let t=F/e.width;G=Math.round(e.height*t)}else if(!F&&G){let t=G/e.height;F=Math.round(e.width*t)}}else F=e.width,G=e.height}}let $=!p&&("lazy"===m||void 0===m);(!(d="string"==typeof d?d:B)||d.startsWith("data:")||d.startsWith("blob:"))&&(c=!0,$=!1),s.unoptimized&&(c=!0),T&&d.endsWith(".svg")&&!s.dangerouslyAllowSVG&&(c=!0),p&&(P="high");let W=l(g),V=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:M}:{},A?{}:{color:"transparent"},w),H=D||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:F,heightInt:G,blurWidth:a,blurHeight:u,blurDataURL:C||"",objectFit:V.objectFit})+'")':'url("'+S+'")',q=H?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{},J=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:l,loader:s}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:a,kind:u}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,l),d=a.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:a.map((e,r)=>s({config:t,src:n,quality:o,width:e})+" "+("w"===u?e:r+1)+u).join(", "),src:s({config:t,src:n,quality:o,width:a[d]})}}({config:s,src:d,unoptimized:c,width:F,quality:W,sizes:f,loader:N});return{props:{...R,loading:$?"lazy":m,fetchPriority:P,width:F,height:G,decoding:"async",className:h,style:{...V,...q},sizes:J.sizes,srcSet:J.srcSet,src:_||J.src},meta:{unoptimized:c,priority:p,placeholder:S,fill:b}}}},8321:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return h},defaultHead:function(){return f}});let r=n(9920),i=n(1452),o=n(7437),l=i._(n(2265)),s=r._(n(5960)),a=n(2901),u=n(6590),d=n(687);function f(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(2301);let p=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:n}=t;return e.reduce(c,[]).reverse().concat(f(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,l=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){l=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!l)&&n.has(e)?o=!1:(n.add(e),r[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,l.default.cloneElement(e,t)}return l.default.cloneElement(e,{key:r})})}let h=function(e){let{children:t}=e,n=(0,l.useContext)(a.AmpStateContext),r=(0,l.useContext)(u.HeadManagerContext);return(0,o.jsx)(s.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,d.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1564:function(e,t){function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:l}=e,s=r?40*r:t,a=i?40*i:n,u=s&&a?"viewBox='0 0 "+s+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},3938:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let r=n(9920)._(n(2265)),i=n(7103),o=r.default.createContext(i.imageConfigDefault)},7103:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},5601:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return a},getImageProps:function(){return s}});let r=n(9920),i=n(497),o=n(8173),l=r._(n(1241));function s(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/portfolio/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let a=o.Image},1241:function(e,t){function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},5960:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let r=n(2265),i="undefined"==typeof window,o=i?()=>{}:r.useLayoutEffect,l=i?()=>{}:r.useEffect;function s(e){let{headManager:t,reduceComponentsToState:n}=e;function s(){if(t&&t.mountedInstances){let i=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(i,e))}}if(i){var a;null==t||null==(a=t.mountedInstances)||a.add(e.children),s()}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),l(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},4446:function(e,t,n){n.d(t,{M:function(){return y}});var r=n(7437),i=n(2265),o=n(7797),l=n(458),s=n(9791);class a extends i.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function u({children:e,isPresent:t}){let n=(0,i.useId)(),o=(0,i.useRef)(null),l=(0,i.useRef)({width:0,height:0,top:0,left:0}),{nonce:u}=(0,i.useContext)(s._);return(0,i.useInsertionEffect)(()=>{let{width:e,height:r,top:i,left:s}=l.current;if(t||!o.current||!e||!r)return;o.current.dataset.motionPopId=n;let a=document.createElement("style");return u&&(a.nonce=u),document.head.appendChild(a),a.sheet&&a.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${i}px !important;
            left: ${s}px !important;
          }
        `),()=>{document.head.removeChild(a)}},[t]),(0,r.jsx)(a,{isPresent:t,childRef:o,sizeRef:l,children:i.cloneElement(e,{ref:o})})}let d=({children:e,initial:t,isPresent:n,onExitComplete:s,custom:a,presenceAffectsLayout:d,mode:c})=>{let p=(0,l.h)(f),m=(0,i.useId)(),h=(0,i.useMemo)(()=>({id:m,initial:t,isPresent:n,custom:a,onExitComplete:e=>{for(let t of(p.set(e,!0),p.values()))if(!t)return;s&&s()},register:e=>(p.set(e,!1),()=>p.delete(e))}),d?[Math.random()]:[n]);return(0,i.useMemo)(()=>{p.forEach((e,t)=>p.set(t,!1))},[n]),i.useEffect(()=>{n||p.size||!s||s()},[n]),"popLayout"===c&&(e=(0,r.jsx)(u,{isPresent:n,children:e})),(0,r.jsx)(o.O.Provider,{value:h,children:e})};function f(){return new Map}var c=n(5050),p=n(9047);let m=e=>e.key||"";function h(e){let t=[];return i.Children.forEach(e,e=>{(0,i.isValidElement)(e)&&t.push(e)}),t}var g=n(9033);let y=({children:e,exitBeforeEnter:t,custom:n,initial:o=!0,onExitComplete:s,presenceAffectsLayout:a=!0,mode:u="sync"})=>{(0,p.k)(!t,"Replace exitBeforeEnter with mode='wait'");let f=(0,i.useMemo)(()=>h(e),[e]),y=f.map(m),v=(0,i.useRef)(!0),b=(0,i.useRef)(f),w=(0,l.h)(()=>new Map),[_,x]=(0,i.useState)(f),[j,S]=(0,i.useState)(f);(0,g.L)(()=>{v.current=!1,b.current=f;for(let e=0;e<j.length;e++){let t=m(j[e]);y.includes(t)?w.delete(t):!0!==w.get(t)&&w.set(t,!1)}},[j,y.length,y.join("-")]);let C=[];if(f!==_){let e=[...f];for(let t=0;t<j.length;t++){let n=j[t],r=m(n);y.includes(r)||(e.splice(t,0,n),C.push(n))}"wait"===u&&C.length&&(e=C),S(h(e)),x(f);return}let{forceRender:P}=(0,i.useContext)(c.p);return(0,r.jsx)(r.Fragment,{children:j.map(e=>{let t=m(e),i=f===j||y.includes(t);return(0,r.jsx)(d,{isPresent:i,initial:(!v.current||!!o)&&void 0,custom:i?void 0:n,presenceAffectsLayout:a,mode:u,onExitComplete:i?void 0:()=>{if(!w.has(t))return;w.set(t,!0);let e=!0;w.forEach(t=>{t||(e=!1)}),e&&(null==P||P(),S(b.current),s&&s())},children:e},t)})})}}}]);