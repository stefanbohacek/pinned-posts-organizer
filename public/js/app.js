import onReady from"./modules/onReady.js";import sleep from"./modules/sleep.js";import backToTop from"./modules/backToTop.js";import checkLogin from"./modules/checkLogin.js";import handleLogout from"./modules/handleLogout.js";import makeApiCall from"./modules/makeAPICall.js";import renderPinnedPosts from"./modules/renderPinnedPosts.js";onReady((async()=>{checkLogin(),handleLogout(),backToTop();let e=localStorage.getItem("user_id");if(!e){const o=await makeApiCall("/api/v1/accounts/verify_credentials");o.id&&(localStorage.setItem("user_id",o.id),e=o.id)}if(e){console.log("userId",e);const o=await makeApiCall(`/api/v1/accounts/${e}/statuses?limit=80&pinned=true`);if(o&&0!==o.length){console.log(o),renderPinnedPosts(o);const e=".list-group",n=document.getElementById("save-pinned-posts");new Sortable.default([...document.getElementsByClassName("list-group")],{draggable:"li",mirror:{appendTo:e,constrainDimensions:!0}});n.addEventListener("click",(async e=>{let o=[...document.querySelectorAll("#pinned-posts li")].map((e=>e.dataset.id));console.log(o),n.disabled=!0,n.innerHTML="Unpinning posts...";for(const e of o){console.log("unpinning...",e);await makeApiCall(`api/v1/statuses/${e}/unpin`,"POST");await sleep(500)}n.innerHTML="Pinning posts...",o=o.reverse();for(const e of o){console.log("pinning...",e);await makeApiCall(`api/v1/statuses/${e}/pin`,"POST");await sleep(500)}n.innerHTML="Done!",await sleep(700),n.disabled=!1,n.innerHTML="Save pinned posts"}))}else document.getElementsByClassName("container")[1].innerHTML='\n      <p>\n        Could not load your pinned posts. Please make sure you\'re logging into a Mastodon server, or try again later. \n      </p>\n      <p>\n        <a href="https://stefanbohacek.com/contact/">Get in touch</a>\n      </p>\n      '}}));//# sourceMappingURL=app.js.map
