import{j as e}from"./jsx-runtime.7faW4zRM.js";import{C as x}from"./CheckArrowIcon.CxGWFn1k.js";import{A as d}from"./index.Df5wtLB1.js";import{m as p}from"./motion.DIEilGlj.js";const h=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",fill:"currentColor",children:e.jsx("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})}),w=({setIsOpen:l,materias:t,enfoque:a})=>{if(!t||t.length===0)return null;const i=5,n=5,o=Array.from({length:i},(s,r)=>t.slice(r*n,(r+1)*n));return e.jsx(d,{children:e.jsx(p.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.1},exit:{opacity:0},className:"md:w-screen md:h-screen w-full h-full bg-bgDarkTransparentDarker fixed top-0 left-0 flex z-50 justify-center items-center",onClick:()=>l(!1),children:e.jsx("div",{className:"md:w-screen w-full sm:h-auto sm:w-3/4 lg:w-[1000px] xl:w-[1100px] sm:rounded-2xl bg-bgDarkTransparentLighter main-border-gray-darker py-12 px-8 sm:px-16 backdrop-blur-xl mx-auto z-50",onClick:s=>s.stopPropagation(),children:e.jsxs("div",{className:"flex relative",children:[e.jsxs("div",{className:"w-full flex items-center flex-col justify-center pt-24 sm:pt-0",children:[e.jsxs("h3",{className:"mb-7 text-2xl text-primaryText font-bold leading-snug text-center",children:["Eje de formación seleccionado: ",e.jsx("span",{className:"text-secondaryColor",children:a})]}),e.jsx("div",{className:"flex justify-between gap-4",children:o.map((s,r)=>e.jsx("ul",{className:"mb-6 text-primaryText mt-12",children:s.map((c,m)=>e.jsxs("li",{className:"mb-4 flex",children:[e.jsx(x,{}),e.jsx("span",{children:c})]},m))},r))})]}),e.jsx("div",{className:"md:relative sm:relative absolute top-6 right-6 w-5 h-5 cursor-pointer text-[rgb(255,255,255,0.7)] hover:text-white transition",onClick:()=>l(!1),children:e.jsx(h,{})})]})})})})};export{w as I};
