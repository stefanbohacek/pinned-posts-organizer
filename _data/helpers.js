module.exports = {
  /**
   * Returns back some attributes based on whether the
   * link is active or a parent of an active item
   *
   * @param {String} itemUrl The link in question
   * @param {String} pageUrl The page context
   * @returns {String} The attributes or empty
   */
  getLinkActiveState(itemUrl, pageUrl) {
    let aria = "";
    let classes = "";
    let id = itemUrl.replaceAll("/", "");

    if (itemUrl === pageUrl) {
      classes += "nav-link link-secondary active fw-bold";
      aria = `aria-current="page"`;
    } else {
      classes += "nav-link link-secondary";
    }

    if (itemUrl === "/app/") {
      classes += " d-none";
    }

    return `id="${id}-link" class="${classes}" ${aria}`;
  },
};
