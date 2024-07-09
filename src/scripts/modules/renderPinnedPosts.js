export default async (statuses) => {
  console.log("statuses", statuses);

  const pinnedPostsOutput = document.getElementById("pinned-posts");
  const pinnedPostsURLs = document.getElementById("pinned-posts-urls");

  pinnedPostsURLs.value = statuses.map((status) => status.url).join("\n");

  pinnedPostsOutput.innerHTML = /* html */ `
  <ul class="list-group">${statuses
    .map((status) => {
      return /* html */ `
        <li role="button" data-id="${status.id}" class="list-group-item">${status.content}</li>
      `;
    })
    .join("")}
  </ul>    
  `;
};
