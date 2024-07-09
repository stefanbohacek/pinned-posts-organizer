export default async (statuses) => {
  console.log("statuses", statuses);

  const pinnedPostsOutput = document.getElementById("pinned-posts");
  const pinnedPostsURLs = document.getElementById("pinned-posts-urls");

  pinnedPostsURLs.value = statuses.map((status) => status.url).join("\n");

  pinnedPostsOutput.innerHTML = /* html */ `
  <ul class="list-group">${statuses
    .map((status) => {
      let attachments = "";

      if (status.media_attachments) {
        attachments = `<div class="row">${status.media_attachments.map(
          (attachment) => /* html */ `
            <div class="col-12 col-md-4">
              <img class="img-thumbnail" alt="${attachment?.description?.replaceAll(
                '"',
                "&quot;"
              )}" src="${attachment?.preview_url}" class="w-100">
            </div>
          `
        )}</div>`;
      }

      return /* html */ `
        <li role="button" data-id="${status.id}" class="list-group-item">
          <p>
            ${status.content}
          </p>
          ${attachments}
        </li>
      `;
    })
    .join("")}
  </ul>    
  `;
};
