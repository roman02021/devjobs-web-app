<script setup>
import { ref, computed } from 'vue'
import { themeStore } from '../store';

const props = defineProps({
    variant: {
        type: String,
        validators: value => ['primary', 'secondary'].includes(value),
    },
    link: {
        type: String,
    },
    externalLink: {
        type: String,
    }
})

const emits = defineEmits(['loadMoreJobs'])
</script>

<template>
    <div>
        <button v-if="!link && !externalLink" class="btn" :class="{'btn--primary': variant ==='primary', 'btn--secondary' : variant === 'secondary', 'btn--dark': themeStore.isDark()}">
            <span class="btn__text">
                <slot/>
            </span>
        </button>
        <a v-if="externalLink" :href="externalLink" target="__blank" rel="noopener" class="btn" :class="{'btn--primary': variant ==='primary', 'btn--secondary' : variant === 'secondary', 'btn--dark': themeStore.isDark()}">    
            <span class="btn__text">
                <slot/>
            </span>
        </a>
    </div>
</template>

<style scoped lang="scss">
.btn {
    padding: 1rem 2rem;
    cursor: pointer;
    background-color: var(--violet);
    border-radius: var(--radius);
    border: none;
    color: var(--white);
    font-weight: bold;
    text-decoration: none;
    font-size: 1rem;
    transition: all var(--fast) ease-in-out;
    &:hover {
        background-color: var(--light-violet);
    }
    &--secondary {
        color: var(--violet);
        background-color: var(--secondary-violet);
        &:hover {
            background-color: var(--hover-secondary-violet);
        }
    }
    &--square-padding {
        padding: .75rem;
    }
    &--dark {
        &.btn--secondary {
            background-color: var(--secondary-dark);
            color: var(--white);
            &:hover {
                background-color: var(--secondary-dark-hover);
            }
        }
    }
}


</style>
