<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Home from './views/Home.vue'
import Job from './views/Job.vue';
import { store } from './store.js'
import { CONSTANTS } from './constants';


</script>

<template>
  <div class="app-container" :class="{dark: store.isDark()}">
    <header class="header">
      <img class="header-logo" src="./assets/desktop/logo.svg"/>
      <button @click="store.switchTheme()">switch theme</button>
    </header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
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
  --violet: #9e7f66;
  --light-violet: #939BF4;
  --very-dark-blue: #19202D;
  --midnight: #121721;
  --white: #FFFFFF;
  --light-gray: #F4F6F8;
  --gray: #9DAEC2;
  --dark-grey: #6E8098;
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
}
h4 {
  font-size: .75rem;
  line-height: 18px;
}
p {
  font-size: 1rem;
  line-height: 26px;
}
.header {
  background-color: red;
}

</style>
