export default async n=>{console.log("statuses",n);const t=document.getElementById("pinned-posts");document.getElementById("pinned-posts-urls").value=n.map((n=>n.url)).join("\n"),t.innerHTML=`\n  <ul class="list-group">${n.map((n=>`\n        <li role="button" data-id="${n.id}" class="list-group-item">${n.content}</li>\n      `)).join("")}\n  </ul>    \n  `};//# sourceMappingURL=renderPinnedPosts.js.map
