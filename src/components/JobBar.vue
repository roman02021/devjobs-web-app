<script setup>
import { ref, computed } from 'vue'
import data from "../data.json"
import {themeStore} from '../store'

import Button from '../components/Button.vue'

const isDark = ref(themeStore.isDark())

const props = defineProps({
    company: String,
    position: String,
    apply: String,
})

</script>

<template>
    <div class="job-bar" :class="{'job-bar--dark': themeStore.isDark()}">
        <div class="container h-100">
            <div class="job-bar__inside-container">
                <div class="job-bar__info">
                    <h3 class="job-bar__title">{{position}}</h3>
                    <div class="job-bar__company">{{company}}</div>
                </div>
                <Button class="job-bar__apply" :external-link="apply">Apply Now</Button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.job-bar {
    background-color: var(--white);
    height: 6rem;
    transition: all var(--theme-speed) var(--theme-timing);
    /* position: sticky;
    bottom: 0; */
    &__inside-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        text-align: left;
    }
    &__company {
        color: var(--dark-grey);
    }
    &__title {
        margin-bottom: .5rem;
    }
    &--dark {
        background-color: var(--very-dark-blue);
        .job-bar__title {
            color: var(--white);
        }
    }
    @media screen and (max-width: $mobile){
        .job-bar__info {
            display: none;
        }
        .job-bar__apply {
            width: 100%;
        }
    }
}
</style>
