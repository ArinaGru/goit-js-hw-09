function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var i=o("eWCmQ");const u=document.querySelector(".form"),l={timeout:3500,clickToClose:!0};function s(e,t){return new Promise(((r,n)=>{const o=Math.random()>.3;setTimeout((()=>{o&&r(`✅ Fulfilled promise ${e} in ${t}ms`),n(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}u.addEventListener("submit",(t=>{t.preventDefault();const r=new FormData(u),n=Object.fromEntries(r.entries()),{delay:o,step:d,amount:f}=n;u.reset();for(let t=0;t<Number(f);t++){s(t+1,Number(o)+Number(d)*t).then((t=>{e(i).Notify.success(t,l)})).catch((t=>{e(i).Notify.failure(t,l)}))}}));
//# sourceMappingURL=03-promises.4aaee028.js.map