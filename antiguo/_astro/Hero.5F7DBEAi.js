import { j as e } from "./jsx-runtime.7faW4zRM.js"; 
import { r as i } from "./index.DhYZZe0J.js"; 
import { I as s } from "./InvitationModal.DMsUedFe.js"; 
import { m as t } from "./motion.DIEilGlj.js"; 
import "./CheckArrowIcon.CxGWFn1k.js"; 
import "./index.Df5wtLB1.js"; 

const l = { 
    src: "./_astro/facultad40.B96sOUik.jpg", 
    width: 600, 
    height: 400, 
    format: "jpg", 
    orientation: 1 
}, 

p = () => { 
    const [r, a] = i.useState(!1); 
    return e.jsxs("section", { 
        className: "w-screen flex justify-center items-center pb-4 bg-bgDark1 mb-10 md:mb-10 lg:mb-10 xl:mb-8 2xl:mb-16 hero-bg-gradient sm:pb-16 md:pb-24 lg:pb-0", 
        id: "home", 
        children: [e.jsxs("div", { 
            className: "w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center", 
            children: [e.jsx(t.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: .5 }, children: e.jsx("h3", { className: "text-secondaryColor text-4xl sm:text-3xl  mb-6 sm:mt-15 mt-10  font-bold", children: "Descubre la actualizacion curricular" }) }), e.jsx(t.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: .5, delay: .05 }, children: e.jsx("div", { className: "text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-primaryText  px-8 sm:px-8 md:px-20 lg:px-4", children: e.jsx("h1", { children: "Ingenieria de Sistemas" }) }) }), e.jsx(t.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: .5, delay: .1 }, children: e.jsx("h2", { className: "text-secondaryText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 ", children: "Conoce cómo el plan de estudios se adapta a las necesidades actuales del mercado laboral." }) }), e.jsx(t.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: .5, delay: .15 }, children: e.jsxs("div", { className: "flex flex-col gap-2 sm:flex-row mt-14 mb-10 sm:mb-10 justify-center", children: [e.jsx("a", { href: "pensum", target: "_blank", rel: "noopener noreferrer", children: e.jsx("button", { className: "w-64 sm:w-52 h-12 rounded-xl font-bold text-primaryText border border-solid  flex justify-center items-center cursor-pointer bg-bgDark2 hover:bg-bgDark3 border-rojoUd transition", "aria-label": "Live demo", children: "Nuevo Plan de Estudios" }) }), e.jsx("a", { href: "simulador", target: "_blank", rel: "noopener noreferrer", children: e.jsx("button", { className: "w-64 sm:w-52 h-12 rounded-xl font-bold text-primaryText border border-solid  flex justify-center items-center cursor-pointer bg-bgDark2 hover:bg-bgDark3 border-secondaryColor transition", "aria-label": "Live demo", children: "Simulador" }) })] }) }), e.jsx(t.div, { initial: { opacity: 0, y: 10, zIndex: 20 }, animate: { opacity: 1, y: 0, zIndex: 20 }, transition: { duration: .5, delay: .15 }, children: e.jsx("div", { className: "relative flex justify-center w-full pb-20", children: e.jsx("img", { src: l.src, alt: "Facultad Ingenieria", className: "w-full max-w-full h-[200px] sm:h-[300px] lg:h-[400px] mx-auto rounded-xl main-border-gray hero-dashboard-border-gradient lg:top-6 xl:top-0" }) }) })] }), r && e.jsx(s, { isOpen: r, setIsOpen: a })] }) }; 

export { p as Hero };
