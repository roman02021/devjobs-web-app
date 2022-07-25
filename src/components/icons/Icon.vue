<script setup>
import {computed} from 'vue';
import Search from './Search.vue'
import Location from './Location.vue'
import Check from './Check.vue'
import Filter from './Filter.vue'
const props = defineProps({
    icon: String,
    height: Number,
    color: String
})
const icons = {
    'search': () => Search,
    'location': () => Location,
    'check': () => Check,
    'filter': () => Filter
}
const iconComponent = computed(icons[props.icon]);
// const iconHeight = computed(() => {
//     switch(props.size){
//         case 's':
//             return '20px';
//         case 'm':
//             return '48px';
//         case 'l':
//             return '64px';
//     }
// })
</script>

<template>
    <component :is="iconComponent" :height="height" :color="color" class="icon"/>
</template>

<style global lang="scss">
    .icon {
        transition: all var(--theme-speed) var(--theme-timing);
    }
</style>