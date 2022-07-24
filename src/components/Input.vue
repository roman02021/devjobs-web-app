<script setup>
import { ref, computed, onMounted } from 'vue'
import Location from '../assets/desktop/icon-location.svg';
import Search from '../assets/desktop/icon-search.svg';
import {themeStore} from '../store'

const props = defineProps({
    modelValue: String,
    type: String,
    placeholder: String,
    icon: String,
    showMobile: {
        type: Boolean,
        default: false
    },
    inModal: {
        type: Boolean,
        default: false,
    }
})

const inputRef = ref(null)

const emit = defineEmits(['update:modelValue']);

onMounted(() => {
    if(props.inModal){
        inputRef.value.focus();
    }
})

const icons = {
    location: Location,
    search: Search
}
</script>

<template>
    <label class="filter-input" :class="{'filter-input--dark': themeStore.isDark(), 'filter-input--show-mobile' : showMobile, 'filter-input--modal': inModal}">
        <component class="filter-input__icon" :is="icons[icon]"/>
        <input ref="inputRef" class="filter-input__field" :value="props.modelValue" :type="props.type" :placeholder="props.placeholder" @change="emit('update:modelValue', $event.target.value)">
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
    &--modal {
        border-bottom: 1px solid #6E809820;
        height: 65px;
        .filter-input__field {
            padding: 0 1.75rem 0 3.625rem;
        }
        .filter-input__icon {
            left: 1.5rem;
        }
    }
    &--show-mobile {
        @media (max-width: $mobile){
            .filter-input__icon {
                display: none;
            }
            .filter-input__field {
                padding-left: 1.5rem;
                padding-right: 0;
            }
        }
    }
}
</style>
