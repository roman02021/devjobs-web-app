<script setup>
import { ref, computed } from 'vue'
import Check from '../assets/desktop/icon-check.svg'
import { themeStore } from '../store';

const props = defineProps({
    checked: {
        type: Boolean,
        default: false,
    },
    placeholder: {
        type: String,
        default: "",
    }
})


</script>

<template>
    <label class="filter-checkbox" :class="{'filter-checkbox--dark': themeStore.isDark()}">
        <div :class="`filter-checkbox__background ${checked ? 'filter-checkbox__background--checked' : ''}`">
            <Check v-if="checked" class="filter-checkbox__check"/>
            <input class="filter-checkbox__input" :checked="props.checked" type="checkbox" @input="$emit('update:checked', $event.target.checked)"/>
        </div>
        <span class="filter-checkbox__label">{{placeholder}}</span>
    </label>
</template>

<style scoped lang="scss">

.filter-checkbox:hover .filter-checkbox__background:not(.filter-checkbox__background--checked)::before{
    background-color: var(--checkbox-gray-hover);
}

.filter-checkbox {
    padding: 1.75rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    max-height: 80px;
    &__input {
        visibility: hidden;
    }
    &__label {
        display: block;
        position: relative;
        left: .75rem;
        font-weight: bold;
        transition: color var(--theme-speed) var(--theme-timing);
    }
    &__background {
        position: relative;
        width: 1.5rem;
        height: 1.5rem;
        &::before {
            content: '';
            display: block;
            width: 1.5rem;
            height: 1.5rem;
            position: absolute;
            border-radius: var(--radius);
            background-color: var(--checkbox-gray);
        }
        &--checked {
            &::before {
                background-color: var(--violet);
            }
        }
    }
    &__check {
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    &--dark {
        .filter-checkbox__label {
            color: var(--white);
        }
        .filter-checkbox__background:not(.filter-checkbox__background--checked) {
            &::before {
                background-color: #ffffff10;
            }
        }
    }
}
</style>
