<script setup>
</script>

<template>
  <aside class="sidebar-wrap">
    <div class="recent-posts">
      <h3 class="title">Recent Posts</h3>
      <ul class="posts-wrap">
        <li class="posts">
          <img src="../assets/images/garden_sq_09.jpg" alt="">
          <a href="#">
            <h4 class="title">5 Beautiful buildings you need to before dying</h4>
            <span class="meta">12 JAN, 2045</span>
          </a>
        </li>
        <li class="posts">
          <img src="../assets/images/garden_sq_06.jpg" alt="">
          <a href="#">
            <h4 class="title">5 Beautiful buildings you need to before dying</h4>
            <span class="meta">12 JAN, 2045</span>
          </a>
        </li>
        <li class="posts">
          <img src="../assets/images/garden_sq_02.jpg" alt="">
          <a href="#">
            <h4 class="title">5 Beautiful buildings you need to before dying</h4>
            <span class="meta">12 JAN, 2045</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="advertise">
      <h3 class="title">Advertising</h3>
      <img src="../assets/images/banner_04.jpg" alt="">
    </div>
    <div class="popular-cat">
      <h3 class="title">Popular Categories</h3>
      <ul class="cat-wrap">
        <li class="cat-item">Gardening
          <span>(21)</span>
        </li>
        <li class="cat-item">
          Outdoor Living
          <span>(15)</span>
        </li>
        <li class="cat-item">
          Indoor Living
          <span>(31)</span>
        </li><li class="cat-item">
          Shopping Guide
          <span>(22)</span>
        </li><li class="cat-item">
          Pool Design
          <span>(66)</span>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
.sidebar-wrap {
  overflow: auto;
  /* margin-block-start: var(--spc-16);
  @media screen and (width >= 992px) {
    margin-block-start: 0px;
  } */
}
.recent-posts {
  margin-block-end: var(--spc-10);
}
.recent-posts > .title {
  font-size: var(--fs-400);
  font-weight: var(--fw-bold);
  margin-block-end: var(--spc-6);
  @media screen and (576px <= width < 992px) {
    font-size: var(--fs-600);
  }
}
.posts {
  display: flex;
}
.posts:not(:last-child) {
  margin-block-end: var(--spc-4);
}
.posts img {
  max-width: 15%;
  object-fit: contain;
  margin-inline-end: var(--spc-3);
  @media screen and (width >= 992px) {
    max-width: 25%;
  }
}
.posts .title {
  font-size: var(--fs-300);
  font-weight: var(--fw-bold);
  margin-block-start: var(--spc-1);
  @media screen and (768px <= width < 992px) {
    font-size: var(--fs-400);
  }
  @media screen and (width >= 992px) {
    font-size: var(--fs-200);
  }
}
.posts .meta {
  display: block;
  margin-block-start: var(--spc-3);
  font-size: var(--fs-100);
  font-weight: var(--fw-medium);
  color: hsl(var(--c-base-inverse-400));
  @media screen and (width >= 992px) {
    margin-block-start: var(--spc-2);
  }
}
.advertise {
  margin-block-end: var(--spc-10);
}
.advertise > .title {
  font-size: var(--fs-400);
  font-weight: var(--fw-bold);
  margin-block-end: var(--spc-6);
  @media screen and (576px <= width < 992px) {
    font-size: var(--fs-600);
  }
}
.advertise img {
  border: 4px solid hsl(var(--c-base-300));
}
.popular-cat {
  margin-block-end: var(--spc-10);
}
.popular-cat > .title {
  font-size: var(--fs-400);
  font-weight: var(--fw-bold);
  margin-block-end: var(--spc-4);
  @media screen and (576px <= width < 992px) {
    font-size: var(--fs-600);
  }
}
.cat-wrap {
  padding-inline-start: var(--spc-1-5);
}
.cat-item {
  padding-block: var(--spc-2);
  display: flex;
  justify-content: space-between;
  color: hsl(var(--c-base-inverse-400));
  border-block-end: 1px dashed hsl(var(--c-base-300));
}
.cat-item span {
  display: inline-block;
}
</style>