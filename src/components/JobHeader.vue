<script setup>
import { ref, computed } from 'vue'
import data from "../data.json"
import {themeStore} from '../store'

import Button from '../components/Button.vue'

const isDark = ref(themeStore.isDark())

const props = defineProps({
    logo: String,
    logoBackground: String,
    company: String,
    website: String,
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
    <div class="header" :class="{'header--dark': themeStore.isDark()}">
        <div class="header__logo-background" :style="logoBackground">
            <img class="header__logo" :src="logoUrl"/>
        </div>
        <div class="header__info-container">
            <div class="header__left-info">
                <h2 class="header__title">{{company}}</h2>
                <a class="header__website" :href="website">
                    {{website}}
                </a>
            </div>
            <Button variant="secondary" :external-link="website">Company Site</Button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.header {
    display: flex;
    align-items: center;
    position: relative;
    height: 140px;
    z-index: 100;
    background-color: var(--white);
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    overflow: hidden;
    transition: background-color var(--theme-speed) var(--theme-timing);
    &__logo-background {
        height: 100%;
        min-width: 140px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &__logo {
        width: 80px;
    }
    &__left-info {
        text-align: left;
    }
    &__title {
        margin-top: 0;
        margin-bottom: .75rem;
        transition: color var(--theme-speed) var(--theme-timing);
    }
    &__info-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 40px;
        width: 100%;
    }
    &__website {
        color: var(--dark-grey);
        text-decoration: none;
        transition: color var(--normal) ease-in-out;
        &:hover {
            color: var(--violet);
        }
    }
    &--dark {
        background-color: var(--very-dark-blue);
        .header__title {
            color: var(--white);
        }
    }
    @media screen and (max-width: $mobile){
        flex-direction: column;
        overflow: visible;
        height: fit-content;
        border-radius: var(--radius);
        .header__logo-background {
            position: relative;
            top: -25px;
            width: 50px;
            height: 50px;
            min-width: fit-content;
            border-radius: 15px;

        }
        .header__logo {
            width: fit-content;
        }
        .header__info-container {
            flex-direction: column;
            align-items: center;
            padding: 0 40px 32px 40px;
        }
        .header__title {
            text-align: center;
        }
        .header__left-info {
            margin-bottom: 2rem;
        }
    }
}

</style>
