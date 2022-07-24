<script setup>
import { ref, computed } from 'vue'
import { themeStore } from '../store';

const props = defineProps({
    variant: {
        type: String,
        validators: value => ['primary', 'secondary', 'search', 'icon'].includes(value),
    },
    link: {
        type: String,
    },
    externalLink: {
        type: String,
    },
    fullWidth: {
        type: Boolean,
        default: false,
    },
    inModal: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        default: 'button'
    }
})

const emits = defineEmits(['loadMoreJobs'])
</script>

<template>
    <div :class="{'btn--modal' : inModal}">
        <button :type="type" v-if="!link && !externalLink" class="btn" :class="{'btn--primary': variant ==='primary', 'btn--secondary' : variant === 'secondary', 'btn--dark': themeStore.isDark(), 'btn--search' : variant === 'search', 'btn--icon' : variant === 'icon', 'btn--full-width' : fullWidth}">
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
    display: block;
    text-decoration: none;
    font-size: 1rem;
    transition: all var(--fast) ease-in-out;
    text-align: center;
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
    &--search {
        @media (max-width: $mobile){
            height: 48px;
            width: 48px;
            padding: 0;
        }
    }
    &--icon {
        background-color: transparent;
        padding: 1.5rem;
        &:hover {
            background-color: transparent;
        }
    }
    &--square-padding {
        padding: .75rem;
    }
    &--full-width {
        width: 100%;
    }
    &--modal {
        margin: 1.5rem;
        margin-top: 0;
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
