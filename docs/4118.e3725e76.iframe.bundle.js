"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[4118],{"./node_modules/@admiral-ds/icons/build/documents/FolderSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgFolderSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var SvgFolderSolid=function SvgFolderSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M20 18.604a1.3 1.3 0 0 1-1.3 1.3H5.3a1.3 1.3 0 0 1-1.3-1.3V5.314a1.3 1.3 0 0 1 1.3-1.3h4.156a3 3 0 0 1 1.985.75l1.327 1.17a3 3 0 0 0 1.984.751H18.7a1.3 1.3 0 0 1 1.3 1.3zM5.3 8.819h3.538a3 3 0 0 1 1.985.75l1.326 1.171a3 3 0 0 0 1.985.75H18.7V7.986h-3.947a4.3 4.3 0 0 1-2.845-1.076L10.58 5.74a1.7 1.7 0 0 0-1.125-.425H5.3z",clipRule:"evenodd"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/ChevronRightOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgChevronRightOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var SvgChevronRightOutline=function SvgChevronRightOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",d:"M9.474 18.754c-.18 0-.35-.07-.48-.21a.66.66 0 0 1 .04-.92l6.37-5.74-6.41-5.55a.65.65 0 0 1-.04-.92c.24-.26.65-.28.92-.04l6.9 5.99c.31.28.31.76 0 1.04l-6.86 6.18c-.13.12-.28.17-.44.17"})))};__webpack_require__.p},"./src/components/common/keyboardKey.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isObject(val){return null!==val&&!Array.isArray(val)&&"object"==typeof val}__webpack_require__.d(__webpack_exports__,{r:()=>keyboardKey});const codes={3:"Cancel",6:"Help",8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",28:"Convert",29:"NonConvert",30:"Accept",31:"ModeChange",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",41:"Select",42:"Print",43:"Execute",44:"PrintScreen",45:"Insert",46:"Delete",48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],91:"OS",93:"ContextMenu",144:"NumLock",145:"ScrollLock",181:"VolumeMute",182:"VolumeDown",183:"VolumeUp",186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'",'"'],224:"Meta",225:"AltGraph",246:"Attn",247:"CrSel",248:"ExSel",249:"EraseEof",250:"Play",251:"ZoomOut"};for(let i=0;i<24;i+=1)codes[112+i]="F"+(i+1);for(let j=0;j<26;j+=1){let n=j+65;codes[n]=[String.fromCharCode(n+32),String.fromCharCode(n)]}const keyboardKey={codes,getCode(eventOrKey){return isObject(eventOrKey)?eventOrKey.keyCode||eventOrKey.which||this[eventOrKey.key]:this[eventOrKey]},getKey(eventOrCode){const isEvent=isObject(eventOrCode);if(isEvent&&eventOrCode.key)return eventOrCode.key;let name=codes[isEvent?eventOrCode.keyCode||eventOrCode.which:eventOrCode];return Array.isArray(name)&&(name=isEvent?name[eventOrCode.shiftKey?1:0]:name[0]),name},Cancel:3,Help:6,Backspace:8,Tab:9,Clear:12,Enter:13,Shift:16,Control:17,Alt:18,Pause:19,CapsLock:20,Escape:27,Convert:28,NonConvert:29,Accept:30,ModeChange:31," ":32,PageUp:33,PageDown:34,End:35,Home:36,ArrowLeft:37,ArrowUp:38,ArrowRight:39,ArrowDown:40,Select:41,Print:42,Execute:43,PrintScreen:44,Insert:45,Delete:46,0:48,")":48,1:49,"!":49,2:50,"@":50,3:51,"#":51,4:52,$:52,5:53,"%":53,6:54,"^":54,7:55,"&":55,8:56,"*":56,9:57,"(":57,a:65,A:65,b:66,B:66,c:67,C:67,d:68,D:68,e:69,E:69,f:70,F:70,g:71,G:71,h:72,H:72,i:73,I:73,j:74,J:74,k:75,K:75,l:76,L:76,m:77,M:77,n:78,N:78,o:79,O:79,p:80,P:80,q:81,Q:81,r:82,R:82,s:83,S:83,t:84,T:84,u:85,U:85,v:86,V:86,w:87,W:87,x:88,X:88,y:89,Y:89,z:90,Z:90,OS:91,ContextMenu:93,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,F16:127,F17:128,F18:129,F19:130,F20:131,F21:132,F22:133,F23:134,F24:135,NumLock:144,ScrollLock:145,VolumeMute:181,VolumeDown:182,VolumeUp:183,";":186,":":186,"=":187,"+":187,",":188,"<":188,"-":189,_:189,".":190,">":190,"/":191,"?":191,"`":192,"~":192,"[":219,"{":219,"\\":220,"|":220,"]":221,"}":221,"'":222,'"':222,Meta:224,AltGraph:225,Attn:246,CrSel:247,ExSel:248,EraseEof:249,Play:250,ZoomOut:251};keyboardKey.Spacebar=keyboardKey[" "],keyboardKey.Digit0=keyboardKey[0],keyboardKey.Digit1=keyboardKey[1],keyboardKey.Digit2=keyboardKey[2],keyboardKey.Digit3=keyboardKey[3],keyboardKey.Digit4=keyboardKey[4],keyboardKey.Digit5=keyboardKey[5],keyboardKey.Digit6=keyboardKey[6],keyboardKey.Digit7=keyboardKey[7],keyboardKey.Digit8=keyboardKey[8],keyboardKey.Digit9=keyboardKey[9],keyboardKey.Tilde=keyboardKey["~"],keyboardKey.GraveAccent=keyboardKey["`"],keyboardKey.ExclamationPoint=keyboardKey["!"],keyboardKey.AtSign=keyboardKey["@"],keyboardKey.PoundSign=keyboardKey["#"],keyboardKey.PercentSign=keyboardKey["%"],keyboardKey.Caret=keyboardKey["^"],keyboardKey.Ampersand=keyboardKey["&"],keyboardKey.PlusSign=keyboardKey["+"],keyboardKey.MinusSign=keyboardKey["-"],keyboardKey.EqualsSign=keyboardKey["="],keyboardKey.DivisionSign=keyboardKey["/"],keyboardKey.MultiplicationSign=keyboardKey["*"],keyboardKey.Comma=keyboardKey[","],keyboardKey.Decimal=keyboardKey["."],keyboardKey.Colon=keyboardKey[":"],keyboardKey.Semicolon=keyboardKey[";"],keyboardKey.Pipe=keyboardKey["|"],keyboardKey.BackSlash=keyboardKey["\\"],keyboardKey.QuestionMark=keyboardKey["?"],keyboardKey.SingleQuote=keyboardKey["'"],keyboardKey.DoubleQuote=keyboardKey['"'],keyboardKey.LeftCurlyBrace=keyboardKey["{"],keyboardKey.RightCurlyBrace=keyboardKey["}"],keyboardKey.LeftParenthesis=keyboardKey["("],keyboardKey.RightParenthesis=keyboardKey[")"],keyboardKey.LeftAngleBracket=keyboardKey["<"],keyboardKey.RightAngleBracket=keyboardKey[">"],keyboardKey.LeftSquareBracket=keyboardKey["["],keyboardKey.RightSquareBracket=keyboardKey["]"]},"./src/components/T/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>T});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/themes/common/index.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/skeleton/animation.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(["",";pointer-events:none;"],_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_3__.h),Tspan=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.span.withConfig({displayName:"T__Tspan",componentId:"sc-1bd4slr-0"})(["color:",";",";"," ",""],(({$color,theme,$skeleton})=>{const cssVar=`--admiral-color-${$color?.replace("/","_").replaceAll(" ","")}`;return $skeleton?"transparent":$color?theme.color[$color]?`var(${cssVar}, ${theme.color[$color]})`:$color:`var(--admiral-color-Neutral_Neutral90, ${theme.color[_src_components_themes__WEBPACK_IMPORTED_MODULE_4__.jn]})`}),(p=>p.theme.typography[p.$font]),(p=>p.$cssMixin?p.$cssMixin:""),(p=>p.$skeleton&&skeletonMixin)),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((({font,color,cssMixin,skeleton,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Tspan,{ref,...props,$font:font,$color:color,$cssMixin:cssMixin,$skeleton:skeleton})));T.displayName="T";try{T.displayName="T",T.__docgenInfo={description:"",displayName:"T",props:{font:{defaultValue:null,description:"Имя шрифта из списка дизайн системы",name:"font",required:!0,type:{name:"enum",value:[{value:'"Main/XXL"'},{value:'"Main/XL"'},{value:'"Main/L"'},{value:'"Main/M"'},{value:'"Main/S"'},{value:'"Main/XS-bold"'},{value:'"Main/XS"'},{value:'"Additional/L-bold"'},{value:'"Additional/L"'},{value:'"Additional/M"'},{value:'"Additional/S"'},{value:'"Additional/S-bold"'},{value:'"Additional/XS"'},{value:'"Button/M"'},{value:'"Button/S"'},{value:'"Caption/XS"'},{value:'"Header/HL1"'},{value:'"Header/HL2"'},{value:'"Header/HL3"'},{value:'"Header/H1"'},{value:'"Header/H2"'},{value:'"Header/H3"'},{value:'"Header/H4"'},{value:'"Header/H5"'},{value:'"Header/H6"'},{value:'"Subtitle/Subtitle 1"'},{value:'"Subtitle/Subtitle 2"'},{value:'"Subtitle/Subtitle 3"'},{value:'"Body/Body 1 Long"'},{value:'"Body/Body 1 Short"'},{value:'"Body/Body 2 Long"'},{value:'"Body/Body 2 Short"'},{value:'"Button/Button 1"'},{value:'"Button/Button 2"'},{value:'"Caption/Caption 1"'},{value:'"Caption/Caption 2"'}]}},color:{defaultValue:null,description:"Имя цвета шрифта из палитры темы *",name:"color",required:!1,type:{name:"enum",value:[{value:'"Neutral/Neutral 00"'},{value:'"Neutral/Neutral 05"'},{value:'"Neutral/Neutral 10"'},{value:'"Neutral/Neutral 20"'},{value:'"Neutral/Neutral 30"'},{value:'"Neutral/Neutral 40"'},{value:'"Neutral/Neutral 50"'},{value:'"Neutral/Neutral 60"'},{value:'"Neutral/Neutral 70"'},{value:'"Neutral/Neutral 80"'},{value:'"Neutral/Neutral 90"'},{value:'"Primary/Primary 10"'},{value:'"Primary/Primary 20"'},{value:'"Primary/Primary 30"'},{value:'"Primary/Primary 40"'},{value:'"Primary/Primary 50"'},{value:'"Primary/Primary 60 Main"'},{value:'"Primary/Primary 70"'},{value:'"Primary/Primary 80"'},{value:'"Special/Static White"'},{value:'"Special/Elevated BG"'},{value:'"Special/Dark Static Neutral 00"'},{value:'"Special/Dark Static Neutral 05"'},{value:'"Special/Dark Static Neutral 10"'},{value:'"Special/Dark Static Neutral 20"'},{value:'"Special/Dark Static Neutral 30"'},{value:'"Special/Dark Static Neutral 50"'},{value:'"Special/Dark Static Neutral 70"'},{value:'"Special/Dark Static Neutral 80"'},{value:'"Special/Dark Static Neutral 90"'},{value:'"Special/Dark Static Primary 60"'},{value:'"Special/Dark Static Primary 70"'},{value:'"Special/Dark Static Primary 80"'},{value:'"Special/Dark Static Error 60"'},{value:'"Special/Dark Static Success 50"'},{value:'"Opacity/Hover"'},{value:'"Opacity/Focus"'},{value:'"Opacity/Press"'},{value:'"Opacity/Modal"'},{value:'"Opacity/Dark Static Hover"'},{value:'"Opacity/Dark Static Focus"'},{value:'"Opacity/Dark Static Press"'},{value:'"Error/Error 10"'},{value:'"Error/Error 20"'},{value:'"Error/Error 30"'},{value:'"Error/Error 40"'},{value:'"Error/Error 50"'},{value:'"Error/Error 60 Main"'},{value:'"Error/Error 70"'},{value:'"Error/Error 80"'},{value:'"Success/Success 10"'},{value:'"Success/Success 20"'},{value:'"Success/Success 30"'},{value:'"Success/Success 40"'},{value:'"Success/Success 50 Main"'},{value:'"Success/Success 60"'},{value:'"Success/Success 70"'},{value:'"Warning/Warning 10"'},{value:'"Warning/Warning 20"'},{value:'"Warning/Warning 30"'},{value:'"Warning/Warning 40"'},{value:'"Warning/Warning 50 Main"'},{value:'"Warning/Warning 60"'},{value:'"Warning/Warning 70"'},{value:'"Attention/Attention 10"'},{value:'"Attention/Attention 20"'},{value:'"Attention/Attention 30"'},{value:'"Attention/Attention 40"'},{value:'"Attention/Attention 50 Main"'},{value:'"Attention/Attention 60"'},{value:'"Attention/Attention 70"'},{value:'"Purple/Purple 10"'},{value:'"Purple/Purple 20"'},{value:'"Purple/Purple 30"'},{value:'"Purple/Purple 40"'},{value:'"Purple/Purple 50"'},{value:'"Purple/Purple 60 Main"'},{value:'"Purple/Purple 70"'},{value:'"Purple/Purple 80"'},{value:'"Magenta/Magenta 10"'},{value:'"Magenta/Magenta 20"'},{value:'"Magenta/Magenta 30"'},{value:'"Magenta/Magenta 40"'},{value:'"Magenta/Magenta 50"'},{value:'"Magenta/Magenta 60 Main"'},{value:'"Magenta/Magenta 70"'},{value:'"Magenta/Magenta 80"'},{value:'"Cyan/Cyan 10"'},{value:'"Cyan/Cyan 20"'},{value:'"Cyan/Cyan 30"'},{value:'"Cyan/Cyan 40"'},{value:'"Cyan/Cyan 50"'},{value:'"Cyan/Cyan 60 Main"'},{value:'"Cyan/Cyan 70"'},{value:'"Cyan/Cyan 80"'},{value:'"Teal/Teal 10"'},{value:'"Teal/Teal 20"'},{value:'"Teal/Teal 30"'},{value:'"Teal/Teal 40"'},{value:'"Teal/Teal 50"'},{value:'"Teal/Teal 60 Main"'},{value:'"Teal/Teal 70"'},{value:'"Teal/Teal 80"'}]}},cssMixin:{defaultValue:null,description:"Позволяет добавлять  миксин созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/T/index.tsx#T"]={docgenInfo:T.__docgenInfo,name:"T",path:"src/components/T/index.tsx#T"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/uid.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function uid(){return(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")}__webpack_require__.d(__webpack_exports__,{L:()=>uid})},"./src/components/common/utils/splitDataAttributes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$e:()=>passFormFieldDataAttributes,CR:()=>passMenuDataAttributes,D9:()=>passDataAttributes,G:()=>passFormFieldContainerDataAttributes,G$:()=>FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,c$:()=>passDropdownDataAttributes});const FORM_FIELD_DATA_CONTAINER_ATTRIBUTE="data-container",FORM_FIELD_DATA_ATTRIBUTE="data-field",DROPDOWN_DATA_ATTRIBUTE="data-dropdown-container",MENU_DATA_ATTRIBUTE="data-menu";function passFormFieldContainerDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,!0)}function passFormFieldDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,FORM_FIELD_DATA_ATTRIBUTE,!1)}function passDropdownDataAttributes(initialProps){const dropMenuProps={};return passDataAttributes(initialProps,dropMenuProps,DROPDOWN_DATA_ATTRIBUTE,!0),dropMenuProps}function passMenuDataAttributes(initialProps){const menuProps={};return passDataAttributes(initialProps,menuProps,MENU_DATA_ATTRIBUTE,!0),menuProps}function passDataAttributes(sourceProps,destinationProps,dataAttributesStart,deleteProp){Object.keys(sourceProps).forEach((key=>{"string"==typeof key&&key.startsWith(dataAttributesStart)&&(destinationProps[key]=sourceProps[key],deleteProp&&delete sourceProps[key])}))}},"./src/components/form/CheckboxField/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>CheckboxField});var _path,react=__webpack_require__("./node_modules/react/index.js"),splitDataAttributes=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts"),uid=__webpack_require__("./src/components/common/uid.ts"),keyboardKey=__webpack_require__("./src/components/common/keyboardKey.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/Typography/typography.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}__webpack_require__.p;var _rect;function Minus_extends(){return Minus_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Minus_extends.apply(null,arguments)}__webpack_require__.p;var borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts");const CheckboxComponentWrapper=styled_components_browser_esm.Ay.label.withConfig({displayName:"style__CheckboxComponentWrapper",componentId:"sc-suyql9-0"})(["display:inline-flex;align-items:flex-start;position:relative;box-sizing:content-box;padding:0;user-select:none;cursor:",";"," color:",";fieldset[data-dimension='s'] &&{",";}fieldset:disabled &&{color:var(--admiral-color-Neutral_Neutral30,",");cursor:not-allowed;}",";"],(p=>p.disabled?"not-allowed":p.readOnly?"default":"pointer"),(p=>"s"===p.$dimension?typography.Il["Body/Body 2 Short"]:typography.Il["Body/Body 1 Short"]),(p=>p.disabled?`var(--admiral-color-Neutral_Neutral30, ${p.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${p.theme.color["Neutral/Neutral 90"]})`),typography.Il["Body/Body 2 Short"],(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.readOnly?"pointer-events: none":"")),readOnlyCss=(0,styled_components_browser_esm.AH)(["pointer-events:none;cursor:default;&:not(:checked){& + div > span{border-color:var(--admiral-color-Neutral_Neutral30,",");background-color:var(--admiral-color-Neutral_Neutral10,",");}}&:checked{& + div > span{border-color:var(--admiral-color-Primary_Primary30,",");background-color:var(--admiral-color-Primary_Primary30,",");& *[fill^='#']{fill:var(--admiral-color-Neutral_Neutral00,",");}& > svg{visibility:visible;}}}"],(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.theme.color["Neutral/Neutral 10"]),(p=>p.theme.color["Primary/Primary 30"]),(p=>p.theme.color["Primary/Primary 30"]),(p=>p.theme.color["Neutral/Neutral 00"])),indeterminateCss=(0,styled_components_browser_esm.AH)(["&:not(:checked) + div > span{border-color:var(--admiral-color-Primary_Primary60Main,",");background-color:var(--admiral-color-Primary_Primary60Main,",");}> *{display:block;}"],(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Primary/Primary 60 Main"])),hoveredCss=(0,styled_components_browser_esm.AH)(["&:not(:disabled){& + div > div{visibility:visible;}&:focus-visible + div{outline:none;}}"]),activeCss=(0,styled_components_browser_esm.AH)(["&:not(:disabled){"," & + div > div{background:var(--admiral-color-Opacity_Press,",");}}"],hoveredCss,(p=>p.theme.color["Opacity/Press"])),Input=styled_components_browser_esm.Ay.input.withConfig({displayName:"style__Input",componentId:"sc-suyql9-1"})(["appearance:none;::-ms-check{display:none;}position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;padding:0;margin:0;opacity:0;box-sizing:border-box;&:disabled{cursor:not-allowed;&:not(:checked){& + div > span{border-color:var(--admiral-color-Neutral_Neutral30,",");background-color:var(--admiral-color-Neutral_Neutral10,",");}}&:checked{& + div > span{border-color:var(--admiral-color-Primary_Primary30,",");background-color:var(--admiral-color-Primary_Primary30,",");& *[fill^='#']{fill:var(--admiral-color-Neutral_Neutral00,",");}& > svg{visibility:visible;}}}}&:checked:not(:disabled){& + div > span{border-color:var(--admiral-color-Primary_Primary60Main,",");background-color:var(--admiral-color-Primary_Primary60Main,",");& *[fill^='#']{fill:var(--admiral-color-Special_StaticWhite,",");}& > svg{visibility:visible;}}}"," &:not(:disabled){&:focus-visible + div{outline-offset:","px;outline:var(--admiral-color-Primary_Primary60Main,",") solid ","px;}&:hover{","}&:active{","}",";",";}"],(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.theme.color["Neutral/Neutral 10"]),(p=>p.theme.color["Primary/Primary 30"]),(p=>p.theme.color["Primary/Primary 30"]),(p=>p.theme.color["Neutral/Neutral 00"]),(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Special/Static White"]),(p=>!p.readOnly&&p.$hovered&&hoveredCss),2,(p=>p.theme.color["Primary/Primary 60 Main"]),2,(p=>!p.readOnly&&hoveredCss),(p=>!p.readOnly&&activeCss),(p=>p.$indeterminate&&indeterminateCss),(p=>p.readOnly&&readOnlyCss)),InputContainer=styled_components_browser_esm.Ay.div.withConfig({displayName:"style__InputContainer",componentId:"sc-suyql9-2"})(["box-sizing:border-box;padding:2px;pointer-events:none;position:relative;flex-shrink:0;"," fieldset[data-dimension='s'] &{width:","px;height:","px;}"],(p=>`\n    width: ${"s"===p.$dimension?20:24}px;\n    height: ${"s"===p.$dimension?20:24}px;\n  `),20,20),CheckboxComponentHover=styled_components_browser_esm.Ay.div.withConfig({displayName:"style__CheckboxComponentHover",componentId:"sc-suyql9-3"})(["visibility:hidden;pointer-events:none;position:absolute;background:var(--admiral-color-Opacity_Hover,",");left:50%;top:50%;transform:translate(-50%,-50%);border-radius:50%;"," background-color:var(--admiral-color-Opacity_Hover,",");fieldset[data-dimension='s'] &&{width:32px;height:32px;}"],(p=>p.theme.color["Opacity/Hover"]),(p=>`\n        width: ${"s"===p.$dimension?32:36}px;\n        height: ${"s"===p.$dimension?32:36}px;\n      `),(p=>p.theme.color["Opacity/Hover"])),CheckboxComponentBackground=styled_components_browser_esm.Ay.span.withConfig({displayName:"style__CheckboxComponentBackground",componentId:"sc-suyql9-4"})(["box-sizing:border-box;pointer-events:none;display:inline-block;position:absolute;margin:0;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:var(--admiral-border-radius-Small,",");"," outline:0;transition:background 0.1s ease-in;fieldset[data-dimension='s'] &&{width:16px;height:16px;}line-height:initial;background-color:var(--admiral-color-Neutral_Neutral00,",");border:1px solid ",";& *[fill^='#']{fill:",";}fieldset:disabled &&{& *[fill^='#']{fill:var(--admiral-color-Neutral_Neutral10,",");}}"],(p=>(0,borderRadius.r2)(p.theme.shape)),(p=>`\n    width: ${"s"===p.$dimension?16:20}px;\n    height: ${"s"===p.$dimension?16:20}px;\n  `),(p=>p.theme.color["Neutral/Neutral 00"]),(p=>p.$error?`var(--admiral-color-Error_Error60Main, ${p.theme.color["Error/Error 60 Main"]})`:`var(--admiral-color-Neutral_Neutral50, ${p.theme.color["Neutral/Neutral 50"]})`),(p=>p.disabled?`var(--admiral-color-Neutral_Neutral10, ${p.theme.color["Neutral/Neutral 10"]})`:`var(--admiral-color-Neutral_Neutral00, ${p.theme.color["Neutral/Neutral 00"]})`),(p=>p.theme.color["Neutral/Neutral 10"])),iconCss=(0,styled_components_browser_esm.AH)([""," position:absolute;margin:0;top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;"],(p=>`\n    width: ${"s"===p.$dimension?16:20}px;\n    height: ${"s"===p.$dimension?16:20}px;\n  `)),Check=(0,styled_components_browser_esm.Ay)((function SvgSuccess(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 16"},props),_path||(_path=react.createElement("path",{fill:"#fff",d:"M13.471 5.805a.667.667 0 1 0-.942-.943L7 10.39 4.138 7.53a.667.667 0 0 0-.943.942l3.334 3.334c.26.26.682.26.942 0z"})))})).withConfig({displayName:"style__Check",componentId:"sc-suyql9-5"})(["visibility:hidden;",""],iconCss),Indeterminate=(0,styled_components_browser_esm.Ay)((function SvgMinus(props){return react.createElement("svg",Minus_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"-5 -9 20 20"},props),_rect||(_rect=react.createElement("rect",{width:10,height:2,fill:"#fff",rx:1})))})).withConfig({displayName:"style__Indeterminate",componentId:"sc-suyql9-6"})([""," & *[fill^='#']{fill:var(--admiral-color-Special_StaticWhite,",");}"],iconCss,(p=>p.theme.color["Special/Static White"])),CheckboxComponentLabel=styled_components_browser_esm.Ay.div.withConfig({displayName:"style__CheckboxComponentLabel",componentId:"sc-suyql9-7"})(["display:flex;flex-direction:column;align-content:center;margin-top:2px;margin-bottom:2px;margin-left:",";"," color:",";fieldset:disabled &&{color:var(--admiral-color-Neutral_Neutral30,",");}fieldset[data-dimension='s'] &&{","}"],"8px",(p=>"s"===p.$dimension?typography.Il["Body/Body 2 Short"]:typography.Il["Body/Body 1 Short"]),(p=>p.disabled?`var(--admiral-color-Neutral_Neutral30, ${p.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${p.theme.color["Neutral/Neutral 90"]})`),(p=>p.theme.color["Neutral/Neutral 30"]),typography.Il["Body/Body 2 Short"]),CheckboxComponentHint=styled_components_browser_esm.Ay.div.withConfig({displayName:"style__CheckboxComponentHint",componentId:"sc-suyql9-8"})(["margin-top:4px;"," color:",";fieldset[data-dimension='s'] &&{","}"],(p=>"s"===p.$dimension?typography.Il["Caption/Caption 1"]:typography.Il["Body/Body 2 Short"]),(p=>p.disabled?`var(--admiral-color-Neutral_Neutral30, ${p.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral50, ${p.theme.color["Neutral/Neutral 50"]})`),typography.Il["Caption/Caption 1"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CheckboxField=(0,react.forwardRef)((({children,disabled=!1,readOnly=!1,hovered,dimension="m",error,indeterminate=!1,extraText,className,id=(0,uid.L)(),name,...props},ref)=>{const fieldContainerProps={"data-field-id":id,"data-field-name":name};(0,splitDataAttributes.G)(props,fieldContainerProps);return(0,jsx_runtime.jsxs)(CheckboxComponentWrapper,{className,$dimension:dimension,disabled,readOnly,...fieldContainerProps,children:[(0,jsx_runtime.jsx)(Input,{...props,ref,disabled,readOnly,type:"checkbox",$indeterminate:indeterminate,onKeyDown:e=>{if(readOnly){keyboardKey.r.getCode(e)===keyboardKey.r[" "]&&e.preventDefault()}props.onKeyDown?.(e)},"data-hovered":hovered,$hovered:hovered,$dimension:dimension,id,name}),(0,jsx_runtime.jsxs)(InputContainer,{$dimension:dimension,children:[(0,jsx_runtime.jsx)(CheckboxComponentHover,{$dimension:dimension}),(0,jsx_runtime.jsx)(CheckboxComponentBackground,{$dimension:dimension,$error:error,disabled:disabled||readOnly,children:indeterminate?(0,jsx_runtime.jsx)(Indeterminate,{"aria-hidden":"true",focusable:"false",$dimension:dimension}):(0,jsx_runtime.jsx)(Check,{"aria-hidden":"true",focusable:"false",$dimension:dimension})})]}),children&&(0,jsx_runtime.jsxs)(CheckboxComponentLabel,{$dimension:dimension,disabled,children:[children,extraText&&(0,jsx_runtime.jsx)(CheckboxComponentHint,{disabled,$dimension:dimension,children:extraText})]})]})}));CheckboxField.displayName="CheckboxField";try{CheckboxField.displayName="CheckboxField",CheckboxField.__docgenInfo={description:"",displayName:"CheckboxField",props:{extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},indeterminate:{defaultValue:{value:"false"},description:"Состояние частичного выбора",name:"indeterminate",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Состояние ошибки",name:"error",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Состояние hover",name:"hovered",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/CheckboxField/index.tsx#CheckboxField"]={docgenInfo:CheckboxField.__docgenInfo,name:"CheckboxField",path:"src/components/form/CheckboxField/index.tsx#CheckboxField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/skeleton/animation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>skeletonAnimationMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const skeletonAnimation=props=>(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.i7)(["0%{background-color:var(--admiral-color-Neutral_Neutral10,",");border-color:var(--admiral-color-Neutral_Neutral10,",");}50%{background-color:var(--admiral-color-Neutral_Neutral20,",");border-color:var(--admiral-color-Neutral_Neutral20,",");}100%{background-color:var(--admiral-color-Neutral_Neutral10,",");border-color:var(--admiral-color-Neutral_Neutral10,",");}"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 20"],props.theme.color["Neutral/Neutral 20"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 10"]),skeletonAnimationMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(["animation:"," 2s ease infinite;"],(props=>skeletonAnimation(props)));try{skeletonAnimation.displayName="skeletonAnimation",skeletonAnimation.__docgenInfo={description:"",displayName:"skeletonAnimation",props:{as:{defaultValue:null,description:'Dynamically adjust the rendered component or HTML tag, e.g.\n```\nconst StyledButton = styled.button``\n\n<StyledButton as="a" href="/foo">\n  I\'m an anchor now\n</StyledButton>\n```',name:"as",required:!1,type:{name:"KnownTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"KnownTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/skeleton/animation.tsx#skeletonAnimation"]={docgenInfo:skeletonAnimation.__docgenInfo,name:"skeletonAnimation",path:"src/components/skeleton/animation.tsx#skeletonAnimation"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/themes/borderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$t:()=>ALL_BORDER_RADIUS_VALUES,VM:()=>mediumGroupBorderRadius,Z3:()=>largeGroupBorderRadius,r2:()=>smallGroupBorderRadius});const ALL_BORDER_RADIUS_VALUES=["Border radius 0","Border radius 2","Border radius 4","Border radius 6","Border radius 8","Border radius 10"];function smallGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function mediumGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function largeGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"4px";case"Border radius 4":default:return"8px";case"Border radius 6":return"12px";case"Border radius 8":return"16px";case"Border radius 10":return"20px"}}},"./src/components/themes/common/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gz:()=>DefaultBackgroundColorName,jn:()=>DefaultFontColorName,yL:()=>MainPrimaryColorName});const DefaultFontColorName="Neutral/Neutral 90",DefaultBackgroundColorName="Neutral/Neutral 00",MainPrimaryColorName="Primary/Primary 60 Main"}}]);