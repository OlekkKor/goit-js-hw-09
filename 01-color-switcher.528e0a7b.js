!function(){const t=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]"),e=document.querySelector("body");function r(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}let n,l;t.addEventListener("click",(()=>{t.disabled=!0,e.style.backgroundColor=r(),n=r(),l=setInterval((()=>{e.style.backgroundColor=r(),n=e.style.backgroundColor,console.log(n)}),1e3)})),o.addEventListener("click",(()=>{t.disabled=!1,e.style.backgroundColor=n,clearTimeout(l)}))}();
//# sourceMappingURL=01-color-switcher.528e0a7b.js.map
