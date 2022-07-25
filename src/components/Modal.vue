<script setup>
import { ref, computed, onMounted } from 'vue'
import data from "../data.json"
import {themeStore} from '../store'

import Button from '../components/Button.vue'

const isDark = ref(themeStore.isDark())
const aha = ref(null)


const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
})
onMounted(()=>{
    console.log(aha);
})

</script>

<template>
    <div class="modal" :class="{'modal--dark' : themeStore.isDark()}" @click.self="$emit('update:isOpen', false)" v-if="isOpen">
        <div class="modal__content">
            <slot ></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
.modal {
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 20;
    background-color: #00000070;
    top: 0;
    left: 0;
    

    &__content {
        z-index: 100;
        width: calc(100% - 48px);
        background-color: var(--white);
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: var(--radius);
    }
    &--dark {
        .modal__content {
            background-color: var(--very-dark-blue);
        }
    }
}
</style>
