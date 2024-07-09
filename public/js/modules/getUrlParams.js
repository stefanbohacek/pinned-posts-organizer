export default(...e)=>{let a={},r=new URLSearchParams(document.location.search);return e.forEach((e=>{a[e]=r.get(e)})),a};//# sourceMappingURL=getUrlParams.js.map
