import { j as e } from "./jsx-runtime.7faW4zRM.js"; 
import { r as n } from "./index.DhYZZe0J.js"; 
import { m as t } from "./motion.DIEilGlj.js"; 
import { A as c } from "./index.Df5wtLB1.js"; 

const d = { 
        src: "./_astro/LogoInS.BNT0Xcef.svg", width: 270, height: 160, format: "svg" }, o = [{ label: "Inicio", href: "#home", ariaLabel: "Home" }, { label: "Motivos", href: "#motivos", ariaLabel: "Motivos" }, { label: "Ejes", href: "#ejes", ariaLabel: "Ejes" }, { label: "Flexibilidad", href: "#flex", ariaLabel: "Flexibilidad" }, { label: "Beneficios", href: "#beneficios", ariaLabel: "Beneficios" }, { label: "Preguntas", href: "#preguntas", ariaLabel: "Preguntas" }, { label: "Transición", href: "#transicion", ariaLabel: "Transición" }], f = () => {
        const [r, s] = n.useState(!1); return e.jsxs("nav", {
                className: "w-full h-20 flex flex-col justify-center items-center fixed bg-white lg:bg-bgLightTransparent z-40 lg:backdrop-blur-xl", "aria-label": "Main navigation", children: [e.jsxs("div", { className: "2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative", children: [e.jsx(t.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: .3 }, exit: { opacity: 0 }, children: e.jsx("a", { href: "#home", "aria-label": "Home", children: e.jsxs("div", { className: "flex justify-start items-center grow basis-0", children: [e.jsx("div", { className: "text-black mr-2 text-6xl", children: e.jsx("img", { src: d.src, alt: "Logo", width: "100", height: "100" }) }), e.jsx("div", { className: "text-black font-['Inter'] font-bold text-xl", children: "Ing. Sistemas" })] }) }) }), e.jsx(t.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: .3 }, exit: { opacity: 0 }, children: e.jsx("div", { className: "hidden lg:flex h-full pl-12 pb-2", children: o.map(({ href: i, label: a, ariaLabel: l }) => e.jsx("a", { className: "text-black lg:text-base text-2xl leading-6 mr-4 ml-4  2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition h-full pt-2", href: i, "aria-label": l, children: a }, a)) }) }), e.jsxs("div", { className: "lg:hidden flex flex-col px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-bgLight2", onClick: () => s(!r), children: [e.jsx("div", { className: "w-5 h-0.5 bg-gray-600 mb-1" }), e.jsx("div", { className: "w-5 h-0.5 bg-gray-600 mb-1" }), e.jsx("div", { className: "w-5 h-0.5 bg-gray-600 " })] })] }), e.jsx(c, {
                        children: r && e.jsx(t.div, {
                                initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: .3 }, exit: { opacity: 0 }, children: e.jsx("div", {
                                        className: `flex flex-col mt-16 lg:hidden absolute top-4 left-0 bg-white z-50 w-full 
        items-center gap-10 pb-10 border-y border-solid border-bgLight3 pt-10`, children: o.map(({ label: i, href: a, ariaLabel: l }) => e.jsx("a", { className: "text-black lg:text-base text-2xl leading-6 mr-4 ml-4  2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition duration-300 h-full pt-2", href: a, onClick: () => s(!1), "aria-label": l, children: i }, a))
                                })
                        })
                })]
        })
}; 

export { f as Navbar };
