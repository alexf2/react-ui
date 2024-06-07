"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[7262],{"./src/components/input/TextArea/stories/TextArea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TextAreaAsync:()=>TextAreaAsync,TextAreaPlayground:()=>TextAreaPlayground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextArea_stories});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),TextArea=__webpack_require__("./src/components/input/TextArea/index.tsx"),types=__webpack_require__("./src/components/input/types.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextAreaPlaygroundTemplate=({value="Привет!",placeholder="Placeholder",themeBorderKind,CSSCustomProps,...props})=>{const[localValue,setValue]=react.useState(String(value)??"");return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(TextArea.f,{...props,value:localValue,onChange:e=>{const inputValue=e.currentTarget.value;setValue(inputValue),props.onChange?.(e)},placeholder})})};TextAreaPlaygroundTemplate.displayName="TextAreaPlaygroundTemplate";try{TextAreaPlaygroundTemplate.displayName="TextAreaPlaygroundTemplate",TextAreaPlaygroundTemplate.__docgenInfo={description:"",displayName:"TextAreaPlaygroundTemplate",props:{maxLength:{defaultValue:null,description:"Максимальное количество символов для ввода",name:"maxLength",required:!1,type:{name:"number"}},rows:{defaultValue:null,description:"Начальная высота компонента в количествах строк",name:"rows",required:!1,type:{name:"number"}},maxRows:{defaultValue:null,description:"Максимальная высота компонента в количествах строк",name:"maxRows",required:!1,type:{name:"number"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"ForwardedRef<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},autoHeight:{defaultValue:null,description:"Включает автоматическое изменение высоты компонента в зависимости от количества текста",name:"autoHeight",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/TextArea/stories/TextAreaPlayground.template.tsx#TextAreaPlaygroundTemplate"]={docgenInfo:TextAreaPlaygroundTemplate.__docgenInfo,name:"TextAreaPlaygroundTemplate",path:"src/components/input/TextArea/stories/TextAreaPlayground.template.tsx#TextAreaPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}const Form=styled_components_browser_esm.Ay.form.withConfig({displayName:"TextAreaAsynctemplate__Form",componentId:"sc-hlqjqc-0"})(["display:flex;flex-direction:column;gap:24px;"]),TextAreaAsyncTemplate=()=>{const[textValue,setTextValue]=(0,react.useState)("");(0,react.useLayoutEffect)((()=>{const timeout=setTimeout((()=>{setTextValue("At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.")}),1e3);return()=>{clearTimeout(timeout)}}),[setTextValue]);return(0,jsx_runtime.jsxs)(Form,{children:[(0,jsx_runtime.jsx)(TextArea.f,{"data-container-id":"textField-1",autoHeight:!0,rows:3,maxRows:6,value:textValue,onChange:e=>{const inputValue=e.target.value;setTextValue(inputValue)}}),(0,jsx_runtime.jsx)(TextArea.f,{"data-testid":"textField-2",autoHeight:!0,rows:3,maxRows:6,required:!0})]})};TextAreaAsyncTemplate.displayName="TextAreaAsyncTemplate";const TextArea_stories={title:"Admiral-2.1/Input/TextArea",component:TextArea.f,parameters:{docs:{source:{code:null}},design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61323"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=23873%3A69875"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=23873%3A70116"}]},argTypes:{dimension:{options:types.o,control:{type:"radio"}},disabled:{control:{type:"boolean"}},rows:{type:"number"},maxRows:{type:"number"},maxLength:{type:"number"},readOnly:{control:{type:"boolean"}},disableCopying:{control:{type:"boolean"}},displayClearIcon:{control:{type:"boolean"}},placeholder:{control:{type:"text"}},onChange:{action:"onChange"},icons:{control:!1},handleInput:{control:!1},containerRef:{control:!1},autoHeight:{control:{type:"boolean"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},skeleton:{control:{type:"boolean"}}}},TextAreaPlaygroundStory=props=>{const[{CSSCustomProps}]=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)();return(0,jsx_runtime.jsx)(TextAreaPlaygroundTemplate,{...props,CSSCustomProps})};TextAreaPlaygroundStory.displayName="TextAreaPlaygroundStory";const TextAreaPlayground={render:TextAreaPlaygroundStory,parameters:{docs:{source:{code:"import * as React from 'react';\nimport type { ChangeEvent } from 'react';\nimport { ThemeProvider } from 'styled-components';\n\nimport { TextArea } from '@admiral-ds/react-ui';\nimport type { TextAreaProps, BorderRadiusType } from '@admiral-ds/react-ui';\nimport { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';\n\nexport const TextAreaPlaygroundTemplate = ({\n  value = 'Привет!',\n  placeholder = 'Placeholder',\n  themeBorderKind,\n  CSSCustomProps,\n  ...props\n}: TextAreaProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {\n  const [localValue, setValue] = React.useState<string>(String(value) ?? '');\n\n  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {\n    const inputValue = e.currentTarget.value;\n    setValue(inputValue);\n    props.onChange?.(e);\n  };\n\n  return (\n    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>\n      <TextArea {...props} value={localValue} onChange={handleChange} placeholder={placeholder} />\n    </ThemeProvider>\n  );\n};\n"}}},name:"Базовый textarea компонент"},TextAreaAsync={render:props=>(0,jsx_runtime.jsx)(TextAreaAsyncTemplate,{...props}),parameters:{docs:{source:{code:"import { useLayoutEffect, useState } from 'react';\nimport styled from 'styled-components';\n\nimport { TextArea } from '@admiral-ds/react-ui';\n\nconst Form = styled.form`\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n`;\n\nconst TEXT =\n  'At breakpoint boundaries, mini units divide the screen into a fixed master ' +\n  'grid, and multiples of mini units map to fluid grid column widths and row ' +\n  'heights.At breakpoint boundaries, mini units divide the screen into a fixed ' +\n  'master grid, and multiples of mini units map to fluid grid column widths and ' +\n  'row heights.At breakpoint boundaries, mini units divide the screen into a fixed ' +\n  'master grid, and multiples of mini units map to fluid grid column widths and row ' +\n  'heights.At breakpoint boundaries, mini units divide the screen into a fixed master ' +\n  'grid, and multiples of mini units map to fluid grid column widths and row heights.';\n\nexport const TextAreaAsyncTemplate = () => {\n  const [textValue, setTextValue] = useState<string>('' /*TEXT*/);\n\n  useLayoutEffect(() => {\n    const timeout = setTimeout(() => {\n      setTextValue(TEXT);\n    }, 1000);\n    return () => {\n      clearTimeout(timeout);\n    };\n  }, [setTextValue]);\n\n  const handleChangeTextValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {\n    const inputValue = e.target.value;\n    setTextValue(inputValue);\n  };\n\n  return (\n    <Form>\n      <TextArea\n        data-container-id=\"textField-1\"\n        autoHeight\n        rows={3}\n        maxRows={6}\n        value={textValue}\n        onChange={handleChangeTextValue}\n      />\n\n      <TextArea data-testid=\"textField-2\" autoHeight rows={3} maxRows={6} required />\n    </Form>\n  );\n};\n"}}},name:"Асинхронное изменение значения"};TextAreaPlayground.parameters={...TextAreaPlayground.parameters,docs:{...TextAreaPlayground.parameters?.docs,source:{originalSource:"{\n  render: TextAreaPlaygroundStory,\n  parameters: {\n    docs: {\n      source: {\n        code: TextAreaPlaygroundRaw\n      }\n    }\n  },\n  name: 'Базовый textarea компонент'\n}",...TextAreaPlayground.parameters?.docs?.source}}},TextAreaAsync.parameters={...TextAreaAsync.parameters,docs:{...TextAreaAsync.parameters?.docs,source:{originalSource:"{\n  render: ((props => <TextAreaAsyncTemplate {...props} />) as StoryFn<typeof TextArea>),\n  parameters: {\n    docs: {\n      source: {\n        code: TextAreaAsyncRaw\n      }\n    }\n  },\n  name: 'Асинхронное изменение значения'\n}",...TextAreaAsync.parameters?.docs?.source}}};const __namedExportsOrder=["TextAreaPlayground","TextAreaAsync"]},"./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var SvgCloseOutline=function SvgCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",d:"M6.41 5.49a.65.65 0 1 0-.92.92L11.08 12l-5.49 5.49a.65.65 0 0 0 .92.92L12 12.92l5.49 5.49a.65.65 0 0 0 .92-.92L12.92 12l5.59-5.59a.65.65 0 0 0-.92-.92L12 11.08z"})))};__webpack_require__.p},"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts");const getNumFromStr=str=>str.replace(/^\D+/g,"");function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){const cssPropValueSmall=`var(--admiral-border-kind-Small_${getNumFromStr(borderRadiusKind)})`,cssPropValueMedium=`var(--admiral-border-kind-Medium_${getNumFromStr(borderRadiusKind)})`,cssPropValueLarge=`var(--admiral-border-kind-Large_${getNumFromStr(borderRadiusKind)})`;document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./src/components/InputIconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>InputIconButton});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function AnyIcon({icon,...props}){const Icon=icon;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Icon,{...props})}AnyIcon.displayName="AnyIcon";const InputIconButton=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(AnyIcon).withConfig({displayName:"InputIconButton",componentId:"sc-1brcj1d-0"})(["& *[fill^='#']{fill:var(--admiral-color-Neutral_Neutral50,",");}cursor:pointer;[disabled] &&&{pointer-events:none;& *[fill^='#']{fill:var(--admiral-color-Neutral_Neutral30,",");}}&:hover *[fill^='#']{fill:var(--admiral-color-Primary_Primary70,",");}"],(p=>p.theme.color["Neutral/Neutral 50"]),(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.theme.color["Primary/Primary 70"]));try{AnyIcon.displayName="AnyIcon",AnyIcon.__docgenInfo={description:"",displayName:"AnyIcon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputIconButton.tsx#AnyIcon"]={docgenInfo:AnyIcon.__docgenInfo,name:"AnyIcon",path:"src/components/InputIconButton.tsx#AnyIcon"})}catch(__react_docgen_typescript_loader_error){}try{InputIconButton.displayName="InputIconButton",InputIconButton.__docgenInfo={description:"",displayName:"InputIconButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputIconButton.tsx#InputIconButton"]={docgenInfo:InputIconButton.__docgenInfo,name:"InputIconButton",path:"src/components/InputIconButton.tsx#InputIconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/dom/changeInputData.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isInputDataDifferent(data1,data2){return data1.value!==data2.value||data1.selectionStart!==data2.selectionStart||data1.selectionEnd!==data2.selectionEnd}function changeInputData(input,toChangeData){const{value=input.value,selectionStart,selectionEnd}=toChangeData;if(isInputDataDifferent(input,{value,selectionStart,selectionEnd})){const nativeInputValueSetter=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(input),"value")?.set;let event;nativeInputValueSetter?.call(input,value),"number"==typeof selectionStart&&"number"==typeof selectionEnd&&input.setSelectionRange(selectionStart,selectionEnd),"function"==typeof Event?event=new Event("input",{bubbles:!0}):(event=document.createEvent("Event"),event.initEvent("input",!0,!0)),input.dispatchEvent(event)}}__webpack_require__.d(__webpack_exports__,{B:()=>changeInputData,i:()=>isInputDataDifferent})},"./src/components/common/utils/refSetter.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function refSetter(...refs){return ref=>{refs.forEach((someRef=>{someRef&&("function"==typeof someRef?someRef(ref):someRef.current=ref)}))}}__webpack_require__.d(__webpack_exports__,{d:()=>refSetter})},"./src/components/input/Container.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cg:()=>containerHeights,j2:()=>HeightLimitedContainer,mc:()=>Container,vy:()=>skeletonMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/themes/borderRadius.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/skeleton/animation.tsx");const containerHeights=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(["height:",";"],(({$dimension})=>{switch($dimension){case"xl":return"56px";case"s":return"32px";default:return"40px"}})),skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)([""," & > *{visibility:hidden;}"],_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_1__.h),Container=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div.withConfig({displayName:"Container",componentId:"sc-1p357h8-0"})(["position:relative;display:flex;align-items:stretch;border:none;border-radius:",";pointer-events:",";",";"],(p=>p.$skeleton?0:`var(--admiral-border-radius-Medium, ${(0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_2__.VM)(p.theme.shape)})`),(p=>p.$skeleton?"none":"all"),(({$skeleton})=>$skeleton&&skeletonMixin)),HeightLimitedContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay)(Container).withConfig({displayName:"Container__HeightLimitedContainer",componentId:"sc-1p357h8-1"})(["",";"],containerHeights);try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/Container.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/input/Container.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}try{HeightLimitedContainer.displayName="HeightLimitedContainer",HeightLimitedContainer.__docgenInfo={description:"",displayName:"HeightLimitedContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/Container.tsx#HeightLimitedContainer"]={docgenInfo:HeightLimitedContainer.__docgenInfo,name:"HeightLimitedContainer",path:"src/components/input/Container.tsx#HeightLimitedContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/input/TextArea/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>TextArea});var _src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/common/dom/changeInputData.ts"),_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/common/utils/refSetter.ts"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Typography/typography.ts"),_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_InputIconButton__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/InputIconButton.tsx"),_Container__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/input/Container.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const iconSizeValue=props=>{switch(props.$dimension){case"xl":default:return 24;case"s":return 20}},verticalPaddingValue=props=>{switch(props.$dimension){case"xl":return 16;case"m":default:return 8;case"s":return 6}},horizontalPaddingValue=props=>{switch(props.$dimension){case"xl":case"m":default:return 16;case"s":return 12}},extraPadding=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["padding-right:","px;"],(props=>horizontalPaddingValue(props)+(props.$iconCount?iconSizeValue(props)+8:0))),disabledColors=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["background-color:var(--admiral-color-Neutral_Neutral10,",");border-color:transparent;"],(p=>p.theme.color["Neutral/Neutral 10"])),BorderedDiv=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div.withConfig({displayName:"TextArea__BorderedDiv",componentId:"sc-1kfofel-0"})(["position:absolute;top:0;bottom:0;left:0;right:0;margin:0;pointer-events:none;overflow:hidden;min-width:0;background:none;border:1px solid var(--admiral-color-Neutral_Neutral40,",");border-radius:inherit;[data-status='error'] &&&{border:1px solid var(--admiral-color-Error_Error60Main,",");}[data-status='success'] &&&{border:1px solid var(--admiral-color-Success_Success50Main,",");}[data-read-only] &&&{border-color:transparent;}"],(p=>p.theme.color["Neutral/Neutral 40"]),(p=>p.theme.color["Error/Error 60 Main"]),(p=>p.theme.color["Success/Success 50 Main"])),colorsBorderAndBackground=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["background-color:var(--admiral-color-Neutral_Neutral00,",");&:focus + ","{border:2px solid var(--admiral-color-Primary_Primary60Main,",");}&&&:disabled + ",",[data-read-only] &&& + ","{border-color:transparent;}&:hover:not(:focus) + ","{border-color:",";}&:user-invalid + ",",&:user-invalid:hover + ","{border:1px solid var(--admiral-color-Error_Error60Main,",");}[data-status='error'] &&&:hover:not(:disabled) + ",",&:user-invalid:hover:not(:disabled) + ","{border:1px solid var(--admiral-color-Error_Error70,",");}[data-status='success'] &&&:hover:not(:disabled) + ","{border:1px solid var(--admiral-color-Success_Success60,",");}[data-status='error'] &&&:focus:not(:disabled) + ",",&:user-invalid:focus:not(:disabled) + ","{border:2px solid var(--admiral-color-Error_Error60Main,",");}[data-status='success'] &&&:focus:not(:disabled) + ","{border:2px solid var(--admiral-color-Success_Success50Main,",");}[data-read-only] &&&,&&&:disabled{","}[data-read-only] &&&:hover + ",",[data-read-only] &&&:focus + ","{border-color:transparent;}"],(p=>p.theme.color["Neutral/Neutral 00"]),BorderedDiv,(p=>p.theme.color["Primary/Primary 60 Main"]),BorderedDiv,BorderedDiv,BorderedDiv,(p=>p.disabled?"transparent":`var(--admiral-color-Neutral_Neutral60, ${p.theme.color["Neutral/Neutral 60"]})`),BorderedDiv,BorderedDiv,(p=>p.theme.color["Error/Error 60 Main"]),BorderedDiv,BorderedDiv,(p=>p.theme.color["Error/Error 70"]),BorderedDiv,(p=>p.theme.color["Success/Success 60"]),BorderedDiv,BorderedDiv,(p=>p.theme.color["Error/Error 60 Main"]),BorderedDiv,(p=>p.theme.color["Success/Success 50 Main"]),disabledColors,BorderedDiv,BorderedDiv),ieFixes=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["::-ms-clear,::-ms-reveal{display:none;}"]),textBlockStyleMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["outline:none;appearance:none;border-radius:inherit;border:none;box-sizing:border-box;margin:0;padding:","px ","px;overflow-wrap:break-word;"," "," ",""],verticalPaddingValue,horizontalPaddingValue,(props=>"s"===props.$dimension?_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__.Il["Body/Body 2 Long"]:_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__.Il["Body/Body 1 Long"]),colorsBorderAndBackground,extraPadding),HiddenSpanContainer=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div.withConfig({displayName:"TextArea__HiddenSpanContainer",componentId:"sc-1kfofel-1"})(["overflow-x:hidden;overflow-y:auto;"," [data-disable-copying] &{cursor:default;}"],textBlockStyleMixin),Text=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.textarea.withConfig({displayName:"TextArea__Text",componentId:"sc-1kfofel-2"})(["position:absolute;top:0;left:0;width:100%;height:100%;resize:none;flex:1 1 auto;min-width:10px;background:transparent;overflow-y:auto;overflow-x:hidden;color:var(--admiral-color-Neutral_Neutral90,",");"," &::placeholder{color:var(--admiral-color-Neutral_Neutral50,",");}&:disabled::placeholder,&:disabled{cursor:not-allowed;color:var(--admiral-color-Neutral_Neutral30,",");}[data-disable-copying] &{user-select:none;pointer-events:none;}"," ",""],(p=>p.theme.color["Neutral/Neutral 90"]),(props=>"s"===props.$dimension?_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__.Il["Body/Body 2 Long"]:_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__.Il["Body/Body 1 Long"]),(p=>p.theme.color["Neutral/Neutral 50"]),(p=>p.theme.color["Neutral/Neutral 30"]),textBlockStyleMixin,ieFixes),IconPanel=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div.withConfig({displayName:"TextArea__IconPanel",componentId:"sc-1kfofel-3"})(["position:absolute;top:0;bottom:0;right:0;display:flex;flex-direction:column;align-items:center;margin-right:","px;padding-top:","px;& > *{display:block;width:","px;}"],horizontalPaddingValue,verticalPaddingValue,iconSizeValue);function defaultHandleInput(newInputData){return newInputData}const stopEvent=e=>e.preventDefault(),textAreaHeight=(rows,$dimension)=>rows*("s"===$dimension?20:24)+2*verticalPaddingValue({$dimension}),StyledContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay)(_Container__WEBPACK_IMPORTED_MODULE_5__.mc).withConfig({displayName:"TextArea__StyledContainer",componentId:"sc-1kfofel-4"})(["min-height:","px;"," "," ",""],(p=>textAreaHeight(p.$rows,p.$dimension)),(p=>p.$maxRows?`max-height: ${textAreaHeight(p.$maxRows,p.$dimension)}px;`:""),(p=>p.$autoHeight?"":`height: ${textAreaHeight(p.$rows,p.$dimension)}px;`),(p=>p.disabled?"cursor: not-allowed;":""));function toHtmlString(value){return String(value||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/(\r?\n)$/g,"<br /><br />").replace(/\r?\n/g,"<br /> ")}const TextArea=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((({rows=3,maxRows,value,displayClearIcon,status,handleInput=defaultHandleInput,containerRef,icons,children,className,autoHeight,skeleton=!1,dimension="m",disableCopying,...props},ref)=>{const inputRef=react__WEBPACK_IMPORTED_MODULE_1__.useRef(null),hiddenDivRef=react__WEBPACK_IMPORTED_MODULE_1__.useRef(null),iconArray=react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(icons);!props.readOnly&&displayClearIcon&&iconArray.unshift((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_components_InputIconButton__WEBPACK_IMPORTED_MODULE_6__.G,{icon:_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_0__.h,onClick:()=>{inputRef.current&&(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_7__.B)(inputRef.current,{value:""})},"aria-hidden":!0},"clear-icon"));const iconCount=iconArray.length,inputData=null!=value?handleInput({value:String(value)}):{};return react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect((()=>{function oninput(){const{value,selectionStart,selectionEnd}=this,inputData=handleInput({value,selectionStart,selectionEnd});(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_7__.B)(this,inputData)}if(inputRef.current){const node=inputRef.current;node.addEventListener("input",oninput);const{value,selectionStart,selectionEnd}=node,inputData=handleInput({value,selectionStart,selectionEnd});return(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_7__.B)(node,inputData),()=>{node.removeEventListener("input",oninput)}}}),[handleInput]),react__WEBPACK_IMPORTED_MODULE_1__.useEffect((()=>{function oninput(){const{value}=this,hiddenDiv=hiddenDivRef.current;hiddenDiv&&(hiddenDiv.innerHTML=toHtmlString(value),this.style.overflowY=hiddenDiv.clientHeight<hiddenDiv.scrollHeight?"":"hidden")}if(autoHeight&&inputRef.current&&hiddenDivRef.current){const node=inputRef.current;return hiddenDivRef.current.innerHTML=toHtmlString(node.value),node.addEventListener("input",oninput),node.style.overflowY=hiddenDivRef.current.clientHeight<hiddenDivRef.current.scrollHeight?"":"hidden",()=>{node.removeEventListener("input",oninput),node.style.overflowY=""}}}),[autoHeight,inputData.value,props.defaultValue]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(StyledContainer,{className,ref:containerRef,"data-read-only":!!props.readOnly||void 0,"data-status":status,$skeleton:skeleton,disabled:props.disabled,"data-disable-copying":!!disableCopying||void 0,$autoHeight:!!autoHeight,$rows:rows,$maxRows:maxRows,$dimension:dimension,...disableCopying&&{onMouseDown:stopEvent},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(HiddenSpanContainer,{ref:hiddenDivRef,$dimension:dimension,disabled:props.disabled,$iconCount:iconCount}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text,{ref:(0,_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_8__.d)(ref,inputRef),...props,$dimension:dimension,$iconCount:iconCount,$autoHeight:autoHeight,value:inputData.value}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BorderedDiv,{}),iconCount>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(IconPanel,{disabled:props.disabled,$dimension:dimension,children:iconArray}),children]})}));TextArea.displayName="TextArea";try{TextArea.displayName="TextArea",TextArea.__docgenInfo={description:"",displayName:"TextArea",props:{maxLength:{defaultValue:null,description:"Максимальное количество символов для ввода",name:"maxLength",required:!1,type:{name:"number"}},rows:{defaultValue:{value:"3"},description:"Начальная высота компонента в количествах строк",name:"rows",required:!1,type:{name:"number"}},maxRows:{defaultValue:null,description:"Максимальная высота компонента в количествах строк",name:"maxRows",required:!1,type:{name:"number"}},dimension:{defaultValue:{value:"m"},description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"ForwardedRef<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},autoHeight:{defaultValue:null,description:"Включает автоматическое изменение высоты компонента в зависимости от количества текста",name:"autoHeight",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:{value:"false"},description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/TextArea/index.tsx#TextArea"]={docgenInfo:TextArea.__docgenInfo,name:"TextArea",path:"src/components/input/TextArea/index.tsx#TextArea"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/input/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>INPUT_STATUS_VALUES,o:()=>INPUT_DIMENSIONS_VALUES});const INPUT_DIMENSIONS_VALUES=["xl","m","s"],INPUT_STATUS_VALUES=["error","success"]},"./src/components/skeleton/animation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>skeletonAnimationMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const skeletonAnimation=props=>(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.i7)(["0%{background-color:var(--admiral-color-Neutral_Neutral10,",");border-color:var(--admiral-color-Neutral_Neutral10,",");}50%{background-color:var(--admiral-color-Neutral_Neutral20,",");border-color:var(--admiral-color-Neutral_Neutral20,",");}100%{background-color:var(--admiral-color-Neutral_Neutral10,",");border-color:var(--admiral-color-Neutral_Neutral10,",");}"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 20"],props.theme.color["Neutral/Neutral 20"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 10"]),skeletonAnimationMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(["animation:"," 2s ease infinite;"],(props=>skeletonAnimation(props)));try{skeletonAnimation.displayName="skeletonAnimation",skeletonAnimation.__docgenInfo={description:"",displayName:"skeletonAnimation",props:{as:{defaultValue:null,description:'Dynamically adjust the rendered component or HTML tag, e.g.\n```\nconst StyledButton = styled.button``\n\n<StyledButton as="a" href="/foo">\n  I\'m an anchor now\n</StyledButton>\n```',name:"as",required:!1,type:{name:"KnownTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"KnownTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/skeleton/animation.tsx#skeletonAnimation"]={docgenInfo:skeletonAnimation.__docgenInfo,name:"skeletonAnimation",path:"src/components/skeleton/animation.tsx#skeletonAnimation"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/themes/borderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$t:()=>ALL_BORDER_RADIUS_VALUES,VM:()=>mediumGroupBorderRadius,Z3:()=>largeGroupBorderRadius,r2:()=>smallGroupBorderRadius});const ALL_BORDER_RADIUS_VALUES=["Border radius 0","Border radius 2","Border radius 4","Border radius 6","Border radius 8","Border radius 10"];function smallGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function mediumGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function largeGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"4px";case"Border radius 4":default:return"8px";case"Border radius 6":return"12px";case"Border radius 8":return"16px";case"Border radius 10":return"20px"}}}}]);