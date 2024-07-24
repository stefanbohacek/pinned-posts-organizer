---
layout: layout-main.njk
title: Home
eleventyNavigation:
  key: Home
  order: 1
---

<div class="row">
  <div class="col-12 col-md-6">
    <h1>Pinned posts organizer</h1>
    <p class="lead">
      Easily organize your pinned Mastodon posts
    </p>
    <p>
      This tool is free to use, <a href="https://github.com/stefanbohacek/pinned-posts-organizer">open-source</a>, and doesn't save or share your data. Read more about the project and view the full privacy policy on the <a href="/about/"><em>About</em> page</a>, and then go ahead and start by putting in your Mastodon's domain below.
    </p>
    <form id="sign-in-form" class="mb-5 mt-5">
      <label for="fediverse-server" class="d-block form-label text-start fw-bold">Your instance or server</label>
      <div class="input-group my-3">
        <span class="input-group-text">https://</span>
        <input required="" id="fediverse-server" type="text" class="form-control" placeholder="mastodon.social">
        <button class="btn btn-outline-secondary" type="submit" id="sign-in">Manage pinned posts</button>
      </div>
    </form>
    <p>
      <a href="https://stefanbohacek.com/project/pinned-posts-organizer/">Learn more on my blog.</a>
    </p>
  </div>
  <div class="col-12 col-md-6">
    <figure class="px-5 mt-2">
      <img alt="Stylized drawing of a person with a serene expression on their face, slightly smiling, trying to find balance while surrounded by floating sheets of paper." title="Balance!" src="/assets/opendoodles/clumsy.svg" class="w-100">
    </figure>
  </div>
</div>

