<script setup>
import { ref, computed } from 'vue'
import data from "../data.json"
import {themeStore} from '../store'

import Button from '../components/Button.vue'

const isDark = ref(themeStore.isDark())

const props = defineProps({
    company: String,
    website: String,
    postedAt: String,
    position: String,
    apply: String,
    contract: String,
    location: String,
    description: String,
    requirementsContent: String,
    requirementsItems: Array,
    roleContent: String,
    roleItems: Array,

})

const logoUrl = computed(() => {
  return new URL(`.${props.logo}`, import.meta.url)
})

const logoBackground = computed(() => {
  return {
    backgroundColor: props.logoBackground
  }
})

</script>

<template>
    <div class="job-description" :class="{'job-description--dark': themeStore.isDark()}">
    <div class="job-description__info-container">
      <span class="job-description__info">
        {{postedAt}}
      </span>
      <span class="job-description__info">
        {{contract}}
      </span>
    </div> 
    <div class="job-description__header">
        <div class="job-description__top">
            <h1 class="job-description__title">{{position}}</h1>
            <div class="job-description__location">
                {{location}}
            </div>
        </div>
        <Button :external-link="apply">Apply Now</Button>
    </div>
    <p>{{description}}</p>
    <h3>Requirements</h3>
    <p>
        {{requirementsContent}}
    </p>
    <ul class="list list--unordered">
        <li class="list__item" v-for="item in requirementsItems">{{item}}</li>
    </ul>
    <h3>What You Will Do</h3>
    <p>
        {{roleContent}}
    </p>
    <ol class="list list--ordered">
        <li class="list__item" v-for="item in roleItems">{{item}}</li>
    </ol>
    </div>
</template>

<style scoped lang="scss">
.job-description {
    text-align: left;
    padding: 3rem;
    background: var(--white);
    margin: 2rem 0;
    border-radius: var(--radius);
    transition: all var(--theme-speed) var(--theme-timing);
    &__header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 3rem;
    }
    &__info-container {
        color: var(--dark-grey);
        
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
    &__location {
        font-weight: bold;
        color: var(--violet);
    }
    &__title {
        margin: .5rem 0;
        transition: all var(--theme-speed) var(--theme-timing);
        color: var(--very-dark-blue);
    }
    h3 {
        color: var(--very-dark-blue);
        transition: all var(--theme-speed) var(--theme-timing);
        margin: 3rem 0 1.75rem 0;
    }
    &--dark {
        background-color: var(--very-dark-blue);
        color: var(--gray);
        .job-description__title {
            color: var(--white);
        }
        h3 {
            color: var(--white);
        }
        
    }
    @media screen and (max-width: $mobile){
        .job-description__header {
            flex-direction: column;
            align-items: stretch;
        }
        .job-description__top {
            margin-bottom: 3rem;
        }
        .job-description__title {
            font-size: 20px;
        }
    }
}
.list {
    margin: 0;
    padding-left: 0rem;
    &--unordered {
        .list__item {
            list-style: none;
            margin: 0;
            display: flex;
            align-items: flex-start;
            line-height: 26px;
            margin-bottom: .5rem;
            &::before {
                content: '\2022';
                color: var(--violet);
                font-weight: bold;
                margin-right: 2rem;
                font-size: 1.75rem;
            }
        }
    }
    &--ordered {
        counter-reset: list-item-counter;
        .list__item {
            list-style: none;
            margin: 0;
            display: flex;
            align-items: flex-start;
            line-height: 26px;
            margin-bottom: .5rem;
            &::before {
                counter-increment: list-item-counter;
                content: counter(list-item-counter);
                color: var(--violet);
                font-weight: bold;
                margin-right: 2rem;
                font-size: 1rem;
                width: .5rem;
            }
        }
    }

}

</style>
