(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c={form:document.querySelector(".header-form"),tasksList:document.querySelector(".tasks-list")};c.form.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements.taskName.value.trim(),s=o.target.elements.taskDescription.value.trim();if(r===""||s===""){alert("fill in all gields");return}console.log({title:r,text:s})});
//# sourceMappingURL=index.js.map
