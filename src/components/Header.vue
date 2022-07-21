<script setup>
import { ref, watch } from 'vue'
import data from "../data.json"
import {themeStore} from '../store'
import Moon from '../assets/desktop/icon-moon.svg'
import Sun from '../assets/desktop/icon-sun.svg'

import Switch from './Switch.vue'

const isDark = ref(themeStore.isDark())

watch(isDark, () =>{
    themeStore.switchTheme()
})

</script>

<template>
    <div class="header">
        
            <img class="header__background" src="../assets/desktop/bg-pattern-header.svg"/>
        
        <div class="container header__container">
            <router-link :to="{ path: '/' }">
                <img class="header__logo" src="../assets/desktop/logo.svg"/>
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

<style scoped>
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
