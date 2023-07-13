<script setup>
import { ref } from 'vue';
import Button from '@/components/Button.vue';

const inputs = ref({
  name: '',
  email: '',
  phone: 0,
  subject: '',
  message: ''
});

</script>

<template>
  <div class="container page-title-wrap">
    <h2 class="page-title">
      <fa-icon :icon="['fas', 'phone']" class="icon" />
      Contact us
    </h2>
  </div>
  
  <div class="map"></div>
  <main class="container">
    <ul class="about-us-wrap">
      <li class="about-us-item">
        <h4 class="title">Who we are</h4>
        <p class="text">ForestTime is a personal blog for handcrafted, cameramade photography content, fashion styles from independent creatives around the world.</p>
      </li>
      <li class="about-us-item">
        <h4 class="title">How we help?</h4>
        <p class="text">Etiam vulputate urna id libero auctor maximus. Nulla dignissim ligula diam, in sollicitudin ligula congue quis turpis dui urna nibhs.</p>
      </li>
      <li class="about-us-item">
        <h4 class="title">Pre-sale Question</h4>
        <p class="text">Fusce dapibus nunc quis quam tempor vestibulum sit amet consequat enim. Pellentesque blandit hendrerit placerat. Integertis non.</p>
      </li>
    </ul>
    <form class="contact-form">
      <input name="name" type="text" v-model="inputs.name" placeholder="Your name ( * required )" required>
      <input name="email" type="email" v-model="inputs.email" placeholder="Email address ( * required )" required>
      <input name="phone" type="number" v-model="inputs.phone" placeholder="Phone ( optional )">
      <input name="subject" type="text" v-model="inputs.subject" placeholder="Subject ( * required )" required>
      <textarea name="message" id="" cols="30" rows="10" v-model="inputs.message" placeholder="Your message ( * required )" required></textarea>
      <Button type="submit">
        Submit
        <fa-icon :icon="['fas', 'arrow-up-from-bracket']" class="icon" />
      </Button>
    </form>
  </main>
  
</template>

<style scoped>
.map {
  outline: auto;
  outline-color: firebrick;
  height: 400px;
  margin-block-end: var(--spc-16);
  @media screen and (width >= 1200px) {
    max-width: 1320px;
    margin-inline: auto;
  }
}
main {
  /* outline: auto;
  outline-color: firebrick; */
  margin-block-end: var(--spc-16);
}
.page-title-wrap {
  padding-block: var(--spc-12);
}
.page-title {
  display: flex;
  align-items: center;
  font-size: var(--fs-700);
  font-weight: var(--fw-bold);
}
.page-title .icon {
  display: inline-block;
  padding: var(--spc-3);
  margin-inline-end: var(--spc-3);
  background-color: hsl(var(--c-primary));
  color: hsl(var(--c-base-100));
  border-radius: 50%;
}
.about-us-wrap {
  /* outline: auto;
  outline-color: firebrick; */
  margin-block-end: var(--spc-16);
  @media screen and (width >= 768px) {
    display: flex;
    justify-content: center;
    gap: var(--spc-6);
  }
}
.about-us-item {
  margin-block-end: var(--spc-8);
  @media screen and (width >= 768px) {
    max-width: 300px;
    margin-block-end: 0px;
  }
}
.about-us-item .title {
  margin-block-end: var(--spc-4);
  font-size: var(--fs-500);
  font-weight: var(--fw-bold);
}
.about-us-item .text {
  color: hsl(var(--c-base-inverse-400));
  line-height: var(--lh-md);
}
.contact-form {
  margin-inline: auto;
  @media screen and (width >= 576px) {
    width: 540px;
  }
  @media screen and (width >= 768px) {
    max-width: 600px;
  }
}

.contact-form :is(input, textarea) {
  display: block;
  width: 100%;
  padding-block: var(--spc-4);
  padding-inline: var(--spc-2);
  margin-block-end: var(--spc-6);
  border: 1px dashed hsl(var(--c-base-300));
  outline: none;
}
.contact-form input {
  display: block;
}
.contact-form .icon {
  margin-inline-start: var(--spc-2);
}
</style>