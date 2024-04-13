"use strict";(self.webpackChunkmas_docs=self.webpackChunkmas_docs||[]).push([[3659],{4588:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=t(4848),r=t(8453);const i={},o="Change Edition Issues",d={id:"change_edition_issues",title:"Change Edition Issues",description:"Error 0x80070490",source:"@site/docs/change_edition_issues.md",sourceDirName:".",slug:"/change_edition_issues",permalink:"/change_edition_issues",draft:!1,unlisted:!1,editUrl:"https://github.com/massgravel/mas-docs/tree/main/docs/change_edition_issues.md",tags:[],version:"current",frontMatter:{}},c={},l=[{value:"Error 0x80070490",id:"error-0x80070490",level:2},{value:"Other Errors",id:"other-errors",level:2}];function a(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"change-edition-issues",children:"Change Edition Issues"}),"\n",(0,s.jsx)(n.h2,{id:"error-0x80070490",children:"Error 0x80070490"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In the Home to Pro upgrade process, the script may show the below error in red color:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Exception calling "_DismSet Edition" with "6" argument(s): "Element not found. (Exception from HRESULT: 0x80070490)"\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This issue often appears due to the installed .Net 3.5 framework."}),"\n",(0,s.jsxs)(n.li,{children:["To solve this, we need to disable it, to do that, open the command prompt as admin and enter",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:'DISM /Online /English /Disable-Feature /FeatureName:"NetFx3"'})]}),"\n",(0,s.jsx)(n.li,{children:"Once it's done, try to change the edition again."}),"\n",(0,s.jsxs)(n.li,{children:["After the edition change, you can enable .net 3.5 again, to do that, enter,",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:'DISM /Online /English /Enable-Feature /FeatureName:"NetFx3"'})]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"other-errors",children:"Other Errors"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In Windows settings, go to the Windows Update page, run the check for updates button, and ensure that Windows is fully updated."}),"\n",(0,s.jsxs)(n.li,{children:["In the MAS script, go to Troubleshoot and run these options in the below order,","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"DISM Restore"}),"\n",(0,s.jsx)(n.li,{children:"SFC Scan"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Restart the system and try to change the edition again."}),"\n",(0,s.jsxs)(n.li,{children:["If it's still not resolved, please connect with us ",(0,s.jsx)(n.a,{href:"/troubleshoot",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var s=t(6540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);