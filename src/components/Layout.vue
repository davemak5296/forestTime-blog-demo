<script setup>
import Button from '@/components/Button.vue';
import { RouterView, RouterLink } from 'vue-router';
import { onMounted } from 'vue';

onMounted(() => {
  const searchToggle = document.querySelector('.search-toggle-wrap');
  const searchBox = document.querySelector('.search-wrap');
  searchToggle.addEventListener('click', e => {
    searchBox.classList.toggle('open');
  })
  const navBtn = document.querySelector('.nav-menu-btn');
  const navMenu = document.querySelector('.nav-wrap');
  navBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  })
})
</script>

<template>
  <div class="wrapper">
    <ul class="top-search">
      <li class="brands">
        <fa-icon :icon="['fab', 'facebook']" class="icon" />
        <fa-icon :icon="['fab', 'youtube']" class="icon" />
        <fa-icon :icon="['fab', 'pinterest']" class="icon" />
        <fa-icon :icon="['fab', 'twitter']" class="icon" />
        <fa-icon :icon="['fab', 'flickr']" class="icon" />
        <fa-icon :icon="['fab', 'instagram']" class="icon" />
        <fa-icon :icon="['fab', 'google-plus']" class="icon" />
      </li>
      <li class="search-toggle-wrap">
        <fa-icon class="search-toggle" :icon="['fas', 'magnifying-glass']" />
        <span>Search</span>
      </li>
    </ul>
    <div class="search-wrap">
      <input class="search-box" type="text" placeholder="What are you looking for?">
      <button type="button" class="search-btn">
        <fa-icon class="search-toggle" :icon="['fas', 'magnifying-glass']" />
      </button>
    </div>
    <div class="logo-wrap">
      <img src="../assets/images/garden-logo.png" alt="logo">
    </div>
    <nav class="nav">
      <button type="button" class="nav-menu-btn">
        <fa-icon class="icon" :icon="['fas', 'bars']" />
      </button>
      <ul class="nav-wrap">
        <li class="nav-item">
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/gardening">Gardening</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/outdoor-living">Outdoor Living</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/indoor-living">Indoor Living</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/shopping">Shopping Guide</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/contact">Contact</RouterLink>
        </li>
      </ul>
    </nav>
    <RouterView :key="$route.path" />
    <footer class="full-bleed">
      <img src="../assets/images/garden-footer-logo.png" alt="footer-logo">
      <p class="text">
        ForestTime is a personal blog for handcrafted, cameramade photography content, fashion styles from independent creatives around the world.
      </p>
      <div class="brands">
        <fa-icon :icon="['fab', 'facebook']" class="icon" />
        <fa-icon :icon="['fab', 'youtube']" class="icon" />
        <fa-icon :icon="['fab', 'pinterest']" class="icon" />
        <fa-icon :icon="['fab', 'twitter']" class="icon" />
        <fa-icon :icon="['fab', 'flickr']" class="icon" />
        <fa-icon :icon="['fab', 'instagram']" class="icon" />
        <fa-icon :icon="['fab', 'google-plus']" class="icon" />
      </div>
      <div class="subscribe">
        <input type="text" placeholder="Please enter your email" >
        <Button>
          Subscribe
          <fa-icon :icon="['fas', 'envelope-open']" class="icon" />
        </Button>
      </div>
      <span class="copyright">
        © ForestTime. Design By: 
        <a href="#">HTML Design</a>
      </span>
    </footer>
  </div>
</template>

<style scoped>
.wrapper {
  @media screen and (width >= 1200px) {
    max-width: 1320px;
    margin-inline: auto;
  }
}
.top-search {
  background-color: hsl(var(--c-primary));
  padding-block: var(--spc-4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(var(--c-base-100));
  @media screen and (width >= 576px) {
    padding-inline-start: var(--spc-8);
    padding-inline-end: var(--spc-16);
    justify-content: space-between;
  }
}

.top-search .brands {
  display: none;
  @media screen and (width >= 576px) {
    display: flex;
    width: 50%;
    font-size: var(--fs-500);
  }
}
.brands > * {
  display: inline-block;
  box-sizing: border-box;
}
.brands > .icon:not(:last-of-type), .search-toggle {
  margin-inline-end: var(--spc-1-5);
  @media screen and (width >= 768px) {
    margin-inline-end: var(--spc-3);
  }
}
.search-toggle-wrap {
  cursor: pointer;
}
.search-wrap {
  display: flex;
  overflow: hidden;
  background-color: hsl(var(--c-base-inverse-200));
  font-size: var(--fs-700);
  color: hsl(var(--c-base-inverse-400));
  max-height: 0px;
  padding: 0px;
  transition: max-height, padding 0.5s ease;
}
.search-wrap.open {
  max-height: 300px;
  padding: var(--spc-8);
}
.search-box {
  width: 100%;
  background-color: hsl(var(--c-base-inverse-200));
  color: hsl(var(--c-base-100));
  outline: none;
  caret-color: crimson;
}
.search-box::placeholder {
  color: hsl(var(--c-base-inverse-400));
}
.search-btn {
  padding-inline: var(--spc-4);
  border-inline-start: 2px solid currentColor;
}
.logo-wrap {
  padding-block-start: var(--spc-12);
  padding-block-end: var(--spc-6);
}
.logo-wrap img {
  width: 300px;
  height: 100px;
  margin-inline: auto;
}
.nav {
  font-size: var(--fs-300);
  text-align: center;
  @media screen and (576px <= width <= 768px) {
    font-size: var(--fs-200);
  }
  @media screen and (width >= 1200px) {
    max-width: 1320px;
  }
}
.nav-wrap {
  display: flex;
  flex-direction: column;
  color: hsl(var(--c-base-inverse-200));
  @media screen and (width >= 576px) {
    width: fit-content;
    flex-direction: row;
    margin-inline: auto;
  }
}
@media screen and (width < 576px){
  .nav-wrap {
    max-height: 0px;
    overflow: hidden;
    transition: max-height 0.5s ease;
  }
  .nav-wrap.open {
    max-height: 300px;
  }
}
.nav-item a {
  display: block;
  padding-block: var(--spc-2);
  padding-inline-start: var(--spc-1);
  border-block-end: 1px solid hsl(var(--c-base-100));
  background-color: hsl(var(--c-primary) / 0.45);
  @media screen and (width >= 576px) {
    width: fit-content;
    padding: var(--spc-3-5);
    background-color: unset;
  }
}
.nav-item .route-active {
  color: hsl(var(--c-primary));
}
.nav-item a:is(:hover, :focus) {
  background-color: hsl(var(--c-primary-focus));
  color: hsl(var(--c-base-100));
  cursor: pointer;
}
.nav-menu-btn {
  margin-block-end: var(--spc-1-5);
  padding-block: var(--spc-1-5);
  padding-inline: var(--spc-2);
  background-color: hsl(var(--c-primary));
  border-radius: 4px;
  @media screen and (width >= 576px) {
    display: none;
  }
}
.nav-menu-btn .icon {
  display: block;
  cursor: pointer;
  font-size: var(--fs-600);
  color: hsl(var(--c-base-100));
}
.full-bleed {
  box-shadow: 0 0 0 100vmax hsl(var(--c-base-inverse-200));
  clip-path: inset(0-100vmax);
}
footer {
  width: 100%;
  background-color: hsl(var(--c-base-inverse-200));
  margin-inline: auto;
  padding-block: var(--spc-16);
  padding-inline: var(--spc-4);
  color: hsl(var(--c-base-100));
  font-size: var(--fs-300);
  text-align: center;
  @media screen and (width >= 576px) {
    width: 510px;
    padding-inline: 0px;
  }
  @media screen and (width >= 768px) {
    width: 610px;
  }
  @media screen and (width >= 1200px) {
    width: 730px;
  }
}
footer img {
  width: 300px;
  height: 100px;
  margin-inline: auto;
  margin-block-end: var(--spc-6);
}
footer .text {
  width: 100%;
  margin-block-end: var(--spc-10);
  /* margin-inline: auto; */
}
footer .brands {
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: var(--fs-700);
  margin-block-end: var(--spc-4);
}
footer .brands > * {
  color: hsl(var(--c-base-100));
}
.subscribe {
  margin-block-end: var(--spc-8);
  @media screen and (width >= 768px) {
    display: flex;
    height: 54px;
  }
}
footer input {
  outline: none;
  width: 100%;
  padding-block: var(--spc-4);
  padding-inline: var(--spc-2);
  margin-block-end: var(--spc-2);
  background-color: hsl(var(--c-base-300));
  color: hsl(var(--c-base-inverse-400));
  caret-color: hsl(var(--c-base-inverse-400));
  @media screen and (width >= 768px) {
    margin-block-end: 0px;
    margin-inline-end: var(--spc-2);
  }
}
footer button {
  flex-shrink: 0;
}
footer button .icon {
  margin-inline-start: var(--spc-2);
}
footer .copyright {
  display: block;
  color: hsl(var(--c-base-100)/0.5);
}
footer .copyright a {
  color: hsl(var(--c-base-100));
}
footer .copyright a:is(:hover, :focus) {
  color: hsl(var(--c-primary));
}
</style>