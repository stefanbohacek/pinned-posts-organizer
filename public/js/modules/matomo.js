export default e=>{setTimeout((()=>{if(!window.Matomo){const t=`https://tools.stefanbohacek.dev/info?idsite=${e}&action_name=${encodeURIComponent(document.title)}&url=${window.location.href}&uadata=${encodeURIComponent(JSON.stringify(navigator.userAgentData))}&res=${window.screen.availWidth}x${window.screen.availHeight}`;fetch(t)}}),2e3)};//# sourceMappingURL=matomo.js.map
