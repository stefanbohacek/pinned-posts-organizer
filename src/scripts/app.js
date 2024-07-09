import onReady from "./modules/onReady.js";
import sleep from "./modules/sleep.js";
import backToTop from "./modules/backToTop.js";
import checkLogin from "./modules/checkLogin.js";
import handleLogout from "./modules/handleLogout.js";
import makeApiCall from "./modules/makeApiCall.js";
import renderPinnedPosts from "./modules/renderPinnedPosts.js";

onReady(async () => {
  checkLogin();
  handleLogout();
  backToTop();

  let userId = localStorage.getItem("user_id");

  if (!userId) {
    const resp = await makeApiCall("/api/v1/accounts/verify_credentials");
    if (resp.id) {
      localStorage.setItem("user_id", resp.id);
      userId = resp.id;
    }
  }

  if (userId) {
    const statuses = await makeApiCall(
      `/api/v1/accounts/${userId}/statuses?limit=80&pinned=true`
    );

    if (!statuses || statuses.length === 0) {
      document.getElementsByClassName("container")[1].innerHTML = /* html */ `
      <p>
        Could not load your pinned posts. Please make sure you're logging into a Mastodon server, or try again later. 
      </p>
      <p>
        <a href="https://stefanbohacek.com/contact/">Get in touch</a>
      </p>
      `;
    } else {
      renderPinnedPosts(statuses);

      const containerSelector = ".list-group";
      const savePinnedPostsBtn = document.getElementById("save-pinned-posts");

      const sortable = new Sortable.default(
        [...document.getElementsByClassName("list-group")],
        {
          draggable: "li",
          mirror: {
            appendTo: containerSelector,
            constrainDimensions: true,
          },
        }
      );

      savePinnedPostsBtn.addEventListener("click", async (ev) => {
        let postIds = [...document.querySelectorAll("#pinned-posts li")].map(
          (li) => li.dataset.id
        );

        savePinnedPostsBtn.disabled = true;
        savePinnedPostsBtn.innerHTML = "Unpinning posts...";

        for (const postId of postIds) {
          console.log("unpinning...", postId);
          const resp = await makeApiCall(
            `api/v1/statuses/${postId}/unpin`,
            "POST"
          );
          await sleep(500);
        }

        savePinnedPostsBtn.innerHTML = "Pinning posts...";
        postIds = postIds.reverse();

        for (const postId of postIds) {
          console.log("pinning...", postId);
          const resp = await makeApiCall(
            `api/v1/statuses/${postId}/pin`,
            "POST"
          );
          await sleep(500);
        }

        savePinnedPostsBtn.innerHTML = "Done!";
        await sleep(700);
        savePinnedPostsBtn.disabled = false;
        savePinnedPostsBtn.innerHTML = "Save pinned posts";
      });
    }
  }
});
