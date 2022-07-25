<script setup>
import { ref, watch } from 'vue'
import data from "../data.json"
import {themeStore} from '../store'
import {CONSTANTS} from '../constants';

import Moon from '../assets/desktop/icon-moon.svg'
import Sun from '../assets/desktop/icon-sun.svg'
import useMediaQuery from '../useMediaQuery';

import Switch from './Switch.vue'

const isDark = ref(themeStore.isDark())

watch(isDark, () =>{
    themeStore.switchTheme()
})

const isMobile = ref(useMediaQuery(CONSTANTS.breakpoints.mobile));
const isTablet = ref(useMediaQuery(CONSTANTS.breakpoints.tablet));

const imgUrl = new URL('../assets/mobile/bg-pattern-header.svg', import.meta.url).href;
const imgUrlTablet = new URL('../assets/tablet/bg-pattern-header.svg', import.meta.url).href;
const imgUrlDesktop = new URL('../assets/desktop/bg-pattern-header.svg', import.meta.url).href;
const logo = new URL('../assets/desktop/logo.svg', import.meta.url).href;
</script>

<template>
    <div class="header">
        <picture>
            <source :media="CONSTANTS.breakpoints.mobile" :srcset="imgUrl"/>
            <source :media="CONSTANTS.breakpoints.tablet" :srcset="imgUrlTablet"/>
            <img :src="imgUrlDesktop" alt="background" class="header__background"/>
        </picture>
        <div class="container header__container">
            <router-link :to="{ path: '/' }">
                <img class="header__logo" :src="logo"/>
            </router-link>
            <Switch theme-switch="true" v-model:checked="isDark">
                <template #icon-left>
                    <Sun/>
                </template>
                <template #icon-right>
                    <Moon/>
                </template>
            </Switch>
        </div>
    </div>
</template>

<style scoped lang="scss">
.header {
    position: relative;
}
.header__background {
    min-width: 100%;
    max-height: 10.125rem;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    @media screen and (max-width: $tablet) and (min-width: $mobile){
        height: 160px;
        object-fit: cover;
    }
   
}
.header__container {
    z-index: 10;
    position: relative;
    display: flex;
    justify-content: space-between;
    padding-top: 2.75rem;
    padding-bottom: 2.75rem;
}

</style>
