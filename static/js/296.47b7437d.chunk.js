"use strict";(self.webpackChunkswiftwheels_rentals=self.webpackChunkswiftwheels_rentals||[]).push([[296],{239:(n,e,r)=>{r.d(e,{Z:()=>J});var i,t=r(791),o=r(168),s=r(867);const l=s.ZP.div(i||(i=(0,o.Z)(["\ndisplay: flex;\nwidth: 274px;\nheight: 426px;\nflex-direction: column;\nalign-items: flex-start;\ngap: 28px;\nflex-shrink: 0;\n"])));var a=r(329);const c=n=>{let{children:e}=n;return(0,a.jsx)(l,{children:e})};let d=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce(((n,e)=>n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"),"")};var x,h,p,g=r(940);const u=s.ZP.div(x||(x=(0,o.Z)(["\np {\n    color: #121417;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 24px;\n    display: flex;\n    gap: 6px;\n    margin-top: 14px;\n    span{\n        &.price {\n            margin-left: auto;\n        }\n        &.accent {\n            color: var(--color-accent);\n        }\n    }\n}\n"]))),v=s.ZP.div(h||(h=(0,o.Z)(["\n    max-width: 274px;\n    height: 268px;\n    border: 0.1px solid transparent;\n    border-radius: 14px;\n    overflow: hidden;\nimg { \n    display: block;\n    max-width: 100%;\n    height: 100%;\n    object-fit:cover;}\n    &::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        max-height: 100%;\n        background: linear-gradient(\n            180deg,\n            rgba(18, 20, 23, 0.50) 2.5%,\n            rgba(18, 20, 23, 0.00) 41.07%\n        );\n        border-radius: 14px;\n    }\n"]))),f=s.ZP.ul(p||(p=(0,o.Z)(["\n    margin-top: 8px;\n    margin-bottom: 28px;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 4px;\n    color: var(--color-subtext);\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 18px;\n"]))),m=n=>{let{advert:e,handleOpenModal:r}=n;const{img:i,make:t,year:o,model:s,rentalPrice:l,rentalCompany:c,type:x,id:h,functionalities:p}=e,m=p.reduce(((n,e)=>e.length<n.length?e:n),p[0]),j=e.address.split(",").map((n=>n.trim())),b=j[1],w=j[2];return(0,a.jsxs)(u,{children:[(0,a.jsx)(v,{children:(0,a.jsx)("img",{src:i,alt:"rental car"})}),(0,a.jsxs)("p",{children:[t,(0,a.jsxs)("span",{className:"accent",children:[s,","]}),o,(0,a.jsx)("span",{className:"price",children:l})]}),(0,a.jsxs)(f,{children:[(0,a.jsxs)("li",{children:[b,"  |"]},d()),(0,a.jsxs)("li",{children:[w,"  |"]},d()),(0,a.jsxs)("li",{children:[c,"  |"]},d()),(0,a.jsxs)("li",{children:[s,"  |"]},d()),(0,a.jsxs)("li",{children:[x,"  |"]},d()),(0,a.jsxs)("li",{children:[h,"  |"]},d()),(0,a.jsx)("li",{children:m},d())]}),(0,a.jsx)(g.Z,{onClick:()=>{r(e)},children:"Learn more"})]})};const j=r.p+"static/media/icon-sprite.64ae7def655d867914050ba6d7c9bc09.svg";var b,w=r(434),k=r(580),Z=r(94);const y=s.ZP.svg(b||(b=(0,o.Z)(["\n    cursor: pointer;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    fill: transparent;\n    stroke: var(--color-text-light);\n    /* stroke: black; */\n    transition: fill linear  500ms, stroke linear 500ms;\n    &.active{\n        fill: var(--color-accent-active);\n        stroke: var(--color-accent-active);\n    }\n"]))),P=n=>{let{advertId:e}=n;const r=(0,w.I0)(),i=(0,w.v9)(k.OG),[o,s]=(0,t.useState)(!1);return(0,a.jsx)("div",{onClick:()=>(n=>{const e=i.find((e=>e.id===n));o?o&&e&&(s(!1),r((0,Z.r7)(e))):e&&(s(!0),r((0,Z.a3)(e)))})(e),children:(0,a.jsx)(y,{width:"24",height:"24",className:o&&"active",children:(0,a.jsx)("use",{href:"".concat(j,"#icon-heart")})})})};var C,S;const E=s.ZP.div(C||(C=(0,o.Z)(["\ndisplay: flex;\njustify-content: center;\nflex-wrap: wrap;\ngap: 20px;\nmargin-bottom: 100px;\n"]))),I=s.ZP.div(S||(S=(0,o.Z)(["\n    position: relative;\n"])));var z=r(164);const M=n=>{let{onClick:e,children:r}=n;return(0,a.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:100},onClick:e,children:r})};var O,L,N;const F=s.ZP.div(O||(O=(0,o.Z)(["\n    border-radius: 12px;\n    border: 1px solid rgba(239, 237, 232, 0.2);\n    background: #10100f;\n    max-width: 335px;\n    width: calc(100% - 40px);\n    /* min-height: 280px; */\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    padding: 32px;\n    /* overflow-y: auto;  */\n\n    background: #efefbb; /* fallback for old browsers */\n    background: -webkit-linear-gradient(\n        to right,\n        #d4d3dd,\n        #efefbb\n  ); /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(\n        to right,\n        #d4d3dd,\n        #efefbb\n  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n\n    @media screen and (min-width: 768px) {\n        max-width: 479px;\n        width: 479px;\n        /* height: 286px; */\n    }\n"]))),G=s.ZP.div(L||(L=(0,o.Z)(["\n    position: relative;\n"]))),R=s.ZP.svg(N||(N=(0,o.Z)(["\n    stroke: var(--color-text);\n    padding: 0;\n    transition: all 0.1s linear;\n    position: relative;\n    left: 94%;\n    cursor: pointer;\n    &:hover,\n    &:focus {\n        stroke: black;\n        }\n\n    @media screen and (min-width: 768px) {\n        width: 26px;\n        height: 26px;\n\n        svg {\n        width: 26px;\n        height: 26px;\n        }\n    }\n"])));var U,_,A,T,$;const q=s.ZP.div(U||(U=(0,o.Z)(["\noverflow-y: auto; \n"]))),Q=s.ZP.div(_||(_=(0,o.Z)(["\n    max-width: 469px;\n    height: 314px;\n    border: 0.1px solid transparent;\n    border-radius: 14px;\n    overflow: hidden;\n    margin-top: 14px;\nimg { \n    display: block;\n    width: 100%;\n    height: 100%;\n    object-fit:cover;}\n    &::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        max-height: 100%;\n        background: linear-gradient(\n            180deg,\n            rgba(18, 20, 23, 0.50) 2.5%,\n            rgba(18, 20, 23, 0.00) 41.07%\n        );\n        border-radius: 14px;\n    }\n"]))),V=s.ZP.ul(A||(A=(0,o.Z)(["\n    margin-top: 8px;\n    margin-bottom: 28px;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 4px;\n    color: var(--color-subtext);\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 18px;\n"]))),W=s.ZP.li(T||(T=(0,o.Z)(["\nborder-radius: 12px;\nbackground-color: rgba(18, 20, 23, 0.1);\npadding: 7px 14px;\ncolor: var(--color-text);\n"]))),Y=s.ZP.a($||($=(0,o.Z)(["\n    text-decoration: none;\n    display: flex;\n    /* justify-content: start; */\n    width: 274px;\n    height: 44px;\n    padding: 12px 99px;\n    justify-content: center;\n    align-items: center;\n    flex-shrink: 0;\n    border-radius: 12px;\n    background-color: var(--color-accent);\n    transition: background-color linear 500ms;\n    color: var(--color-text-light);\n    cursor: pointer;\n    &:hover {\n        background-color: var(--color-accent-active);\n    }\n"]))),B=n=>{let{advert:e}=n;const{img:r,make:i,year:t,model:o,rentalPrice:s,type:l,id:c,fuelConsumption:x,engineSize:h,functionalities:p,accessories:g,rentalConditions:u,mileage:v}=e,f=e.address.split(",").map((n=>n.trim())),m=f[1],j=f[2],b=u,w=b.split("  ").map((n=>n.trim()));return console.log(b),(0,a.jsxs)(q,{children:[(0,a.jsx)(Q,{children:(0,a.jsx)("img",{src:r,alt:"rental car"})}),(0,a.jsxs)("p",{children:[i,(0,a.jsxs)("span",{className:"accent",children:[o,","]}),t]}),(0,a.jsxs)(V,{children:[(0,a.jsxs)("li",{children:[m,"  |"]},d()),(0,a.jsxs)("li",{children:[j,"  |"]},d()),(0,a.jsxs)("li",{children:["Id: ",c,"  |"]},d()),(0,a.jsxs)("li",{children:["Year: ",t,"  |"]},d()),(0,a.jsxs)("li",{children:["Type: ",l,"  |"]},d()),(0,a.jsxs)("li",{children:["Fuel Concumption: ",x,"  |"]},d()),(0,a.jsxs)("li",{children:["Engine Size: ",h,"  |"]},d())]}),(0,a.jsx)("p",{children:"Accessories and functionalities:"}),(0,a.jsxs)(V,{children:[(0,a.jsxs)("li",{children:[g[0],"  |"]},d()),(0,a.jsxs)("li",{children:[g[1],"  |"]},d()),(0,a.jsxs)("li",{children:[g[2],"  |"]},d()),(0,a.jsxs)("li",{children:[p[0],"  |"]},d()),(0,a.jsxs)("li",{children:[p[1],"  |"]},d()),(0,a.jsx)("li",{children:p[2]},d())]}),(0,a.jsx)("p",{children:"Rental Conditions: "}),(0,a.jsxs)(V,{children:[(0,a.jsx)(W,{children:w[0]},d()),(0,a.jsxs)(W,{children:["Mileage: ",v.toLocaleString("en-US",{useGrouping:!0})]},d()),(0,a.jsxs)(W,{children:["Price: ",s]},d())]}),(0,a.jsx)("div",{children:(0,a.jsx)(Y,{href:"tel:+380730000000",children:"Rental car"})})]})};var D=r(851);const H=n=>{let{advert:e}=n;const r=(0,w.I0)();(0,t.useEffect)((()=>{const n=n=>{"Escape"===n.code&&r((0,D.Mr)())};return document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}}),[r]),(0,t.useEffect)((()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="visible"})),[]);return(0,z.createPortal)((0,a.jsx)(M,{onClick:n=>{n.currentTarget===n.target&&r((0,D.Mr)())},children:(0,a.jsxs)(F,{children:[(0,a.jsx)(G,{children:(0,a.jsx)(R,{width:"24",height:"24",onClick:()=>r((0,D.Mr)()),children:(0,a.jsx)("use",{href:"".concat(j,"#icon-x")})})}),(0,a.jsx)(B,{advert:e})]})}),document.querySelector("#modal-root"))},J=n=>{let{adverts:e}=n;const r=(0,w.I0)(),i=(0,w.v9)(k.Sm),[o,s]=(0,t.useState)(null),l=n=>{r((0,D.h7)()),s(n)};return(0,a.jsxs)(E,{children:[e.map((n=>(0,a.jsx)(I,{children:(0,a.jsxs)(c,{children:[(0,a.jsx)(m,{advert:n,handleOpenModal:l}),(0,a.jsx)(P,{advertId:n.id})]})},n.id))),i&&(0,a.jsx)(H,{advert:o})]})}},940:(n,e,r)=>{r.d(e,{Z:()=>l});r(791);var i,t=r(168);const o=r(867).ZP.button(i||(i=(0,t.Z)(["\n    display: flex;\n    width: 274px;\n    height: 44px;\n    padding: 12px 99px;\n    justify-content: center;\n    align-items: center;\n    flex-shrink: 0;\n    border-radius: 12px;\n    background-color: var(--color-accent);\n    transition: background-color linear 500ms;\n    color: var(--color-text-light);\n    cursor: pointer;\n    outline: none;\n    &:hover {\n        background-color: var(--color-accent-active);\n    }\n"])));var s=r(329);const l=n=>{let{children:e,onClick:r}=n;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o,{type:"button",onClick:r,children:e})})}},580:(n,e,r)=>{r.d(e,{$l:()=>o,OG:()=>i,Q$:()=>s,Sm:()=>l,cz:()=>t});const i=n=>n.adverts.items,t=n=>n.adverts.isLoading,o=n=>n.favorities.favorities,s=n=>n.pagination.currentPage,l=n=>n.modal.isOpen}}]);
//# sourceMappingURL=296.47b7437d.chunk.js.map