<script setup>
import { ref } from 'vue'
import data from "../data.json"
import { themeStore } from '../store';


const props = defineProps({
    checked: {
        type: Boolean,
        default: false,
    }
})
</script>

<template>
    <label class="switch" :class="{'switch--dark': themeStore.isDark()}">
        <slot name="icon-left"/>
        <input class="switch__input" :class="{'switch__input--checked': checked}" type="checkbox" :checked="props.checked" @input="$emit('update:checked', $event.target.checked)"/>
        <slot name="icon-right"/>
    </label>
</template>

<style scoped lang="scss">
.switch {
    display: flex;
    align-items: center;
    cursor: pointer;
    &__input {
        position: relative;
        background-color: rebeccapurple;
        width: 3rem;
        height: 1.5rem;
        cursor: pointer;
        margin: 0 1rem;
        &::before {
            content: '';
            display: block;
            background-color: var(--white);
            width: 100%;
            height: 1.5rem;
            border-radius: 12px;
        }
        &::after {
            content: '';
            display: block;
            background-color: var(--violet);
            width: 14px;
            height: 14px;
            position: absolute;
            top: 50%;
            left: 5px;
            border-radius: 50%;
            transform: translate(0%, -50%);
            transition: transform .3s ease-in-out, background-color .2s ease-out;
        }
        &--checked {
            &::after {
                transform: translate(calc(100% + 14px - 5px), -50%);
            }
        }
    }
    &:hover {
        .switch__input {
            &::after {
                background-color: var(--light-violet);
            }
        }
    }
}
</style>
