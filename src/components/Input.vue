<script setup>
import { ref, computed } from 'vue'
import Location from '../assets/desktop/icon-location.svg';
import Search from '../assets/desktop/icon-search.svg';
import {themeStore} from '../store'

const props = defineProps({
    modelValue: String,
    type: String,
    placeholder: String,
    icon: String
})

const emit = defineEmits(['update:modelValue']);

const icons = {
    location: Location,
    search: Search
}

</script>

<template>
    <label class="filter-input" :class="{'filter-input--dark': themeStore.isDark()}">
        <component class="filter-input__icon" :is="icons[icon]"/>
        <input  class="filter-input__field" :value="props.modelValue" :type="props.type" :placeholder="props.placeholder" @change="emit('update:modelValue', $event.target.value)">
    </label>
</template>

<style scoped lang="scss">
.filter-input {
    height: 80px;
    display: flex;
    position: relative;
    border-right: 1px solid #6E809820;
    &__icon {
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 1.75rem;
    }
    &__field {
        padding: 0 1.75rem 0 4rem;
        border: none;
        outline: none;
        font-size: 1rem;
        width: 100%;
        background-color: transparent;
        caret-color: var(--violet);
    }
    &--dark {
        .filter-input__field {
            color: var(--white);
        }
    }
}
</style>
