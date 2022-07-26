<script setup>
import { ref, computed } from 'vue'
import {themeStore} from '../store';


const props = defineProps({
    logo: String,
    logoBackground: String,
    jobId: Number,
    postedAt: String,
    contract: String,
    position: String,
    company: String,
    location: String
})

// const logoUrl = computed(() => {
//   const urla = `.${props.logo}`;
//   console.log(typeof(urla));
//   const url = new URL(urla, import.meta.url).href;
//   console.log(url, props.logo, urla);
//   return url;
// })

// const urla = `.${props.logo}`.toString();
// const url = new URL(props.logo, import.meta.url);
// console.log(url);

// const url = new URL(./dir/${}, import.meta.url);

const url = new URL(`./dir/${props.logo}`, import.meta.url);

const logoBackground = computed(() => {
  return {
    backgroundColor: props.logoBackground
  }
})


</script>

<template>

  <div class="job-card" :class="{'job-card--dark': themeStore.isDark()}">
  <slot/>
    <div class="job-card__logo-background" :style="logoBackground">
      <img class="job-card__logo"  :src="url"/>
    </div>
    <div class="job-card__info-container">
      <span class="job-card__info">
        {{postedAt}}
      </span>
      <span class="job-card__info">
        {{contract}}
      </span>
    </div>      
    <h3 class="job-card__title">
      <router-link :to="{name: 'job.detail', params: {id: jobId}}">{{position}}</router-link>
    </h3>
    <div class="job-card__info-container">
      <span class="job-card__info">
        {{company}}
      </span>
    </div>
    <div class="job-card__location">
      
      {{location}}
    </div>
  </div>
</template>

<style scoped lang="scss">
.job-card {
  background-color: var(--white);
  border-radius: 6px;
  padding: 3rem 2rem 2.25rem 2rem;
  position: relative;
  text-align: left;
  transition: background-color var(--theme-speed) var(--theme-timing);
  &__logo-background {
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    position: absolute;
    top: -25px;
  }
  &__location {
    color: var(--violet);
    font-weight: bold;
    margin-top: 2.5rem;
  }
  &__info-container {
    color: var(--dark-grey);
  }
  &__title {
    a {
      text-decoration: none;
      color: var(--very-dark-blue);
      transition: color .2s linear;
      &:hover {
        color: var(--dark-grey);
      }
    }
  }
  &__info {
    &:not(:last-child){
      &::after {
        content: '\2022';
        margin: 0 .75rem;
        font-weight: bold;
      }
    }
  }
  &--dark {
    background-color: var(--very-dark-blue);
    .job-card__title {
      a{
        color: var(--white);
         &:hover {
          color: var(--dark-grey);
        }
      }
      
    }
  }
}
</style>
