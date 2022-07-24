<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Home from './views/Home.vue'
import Job from './views/Job.vue';
import Header from './components/Header.vue'
import { themeStore } from './store.js'
import { CONSTANTS } from './constants';


</script>

<template>
  <div class="app-container" :class="{dark: themeStore.isDark()}">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
body, html {
  padding: 0;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
}

input, button {
  font-family: "Kumbh", sans-serif;
}
@font-face {
  font-family: "Kumbh";
  src: url('./assets/fonts/KumbhSans-Bold.woff2') format('woff2');
  font-weight: 600;
  font-display: swap;
}

@font-face {
  font-family: "Kumbh";
  src: url('./assets/fonts/KumbhSans-Regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}

:root {
  //colors
  --violet: #5964E0;
  --light-violet: #939BF4;
  --very-dark-blue: #19202D;
  --midnight: #121721;
  --white: #FFFFFF;
  --light-gray: #F4F6F8;
  --checkbox-gray: #19202D10;
  --checkbox-gray-hover: #5964E025;
  --gray: #9DAEC2;
  --dark-grey: #6E8098;
  --input-blue: #5964E0;

  --secondary-violet: #5964E010;
  --hover-secondary-violet: #5964E035;

  --secondary-dark: #FFFFFF10;
  --secondary-dark-hover: #FFFFFF35;

  --radius: 6px;

  //transition speeds
  --slow: .5s;
  --normal: .3s;
  --fast: .1s;

  //theme transition
  --theme-speed: .3s;
  --theme-timing: ease-in-out;

  --container-gap: 1.5rem;
  --desktop-max-width: 1110px;
  --desktop-container-width: calc(var(--desktop-max-width) - var(--container-gap) * 2);


  
}
#app {
  font-family: "Kumbh", sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  

  
}
.app-container {
  background-color: var(--light-gray);
  height: 100%;
  overflow-x: hidden;
  transition: background-color var(--theme-speed) var(--theme-timing);
}
.app-container.dark {
  background-color: var(--midnight);
}
h1 {
  font-size: 1.75rem;
  line-height: 34px;
}
h2 {
  font-size: 1.5rem;
  line-height: 29px;
}
h3 {
  font-size: 1.25rem;
  line-height: 24px;
  margin: .75rem 0;
}
h4 {
  font-size: .75rem;
  line-height: 18px;
}
p {
  font-size: 1rem;
  line-height: 26px;
}

.container {
  max-width: var(--desktop-container-width);
  margin: 0 auto;
  padding: 0 var(--container-gap);
  &--mb {
    margin-bottom: 3.5rem;
  }
}
.h-100 {
  height: 100%;
}

</style>
