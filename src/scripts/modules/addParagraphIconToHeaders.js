export default () => {

  [...document.querySelectorAll("h2")].forEach((heading) => {
    var id = heading.getAttribute('id');
    var link = document.createElement('a');
    link.setAttribute('href', '#' + id);
    link.classList.add("pilcrow-link");
    link.innerHTML = `${heading.innerHTML} <span class="pilcrow">¶</span>`;
    heading.innerHTML = link.outerHTML;
  });
};
