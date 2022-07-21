<script setup>
import { ref, computed } from 'vue'
import useMediaQuery from '../useMediaQuery';
import Input from './Input.vue';
import CheckBox from './CheckBox.vue';
import Button from './Button.vue';
import Search from '../assets/desktop/icon-search.svg';
import {themeStore} from '../store';
import {CONSTANTS} from '../constants';

const props = defineProps({
    jobs: Array,
    filteredJobs: Array
})

const emit = defineEmits(['updateJobsList'])

// const filteredJobs = computed(()=>props.filteredJobs);

const filterSearchTerm = ref('')
const filterLocation = ref('')
const filterFullTimeOnly = ref(false)

function filterByLocation(jobs){
    return jobs.filter(job => job.location.toLocaleLowerCase().includes(filterLocation.value.toLocaleLowerCase()))
}

function filterBySearchTerm(jobs) {
    return jobs.filter(job =>   job.company.toLocaleLowerCase().includes(filterSearchTerm.value.toLocaleLowerCase()) ||
                                job.position.toLocaleLowerCase().includes(filterSearchTerm.value.toLocaleLowerCase())
                        )
}

function filterByFullTimeOnly(jobs) {
    console.log(filterFullTimeOnly.value);
    if(Boolean(filterFullTimeOnly.value)){
        return jobs.filter(job => job.contract.toLocaleLowerCase().includes('full'));
    }
  
  return jobs
}

function filterJobs(jobs){

    const filteredJobs =  filterByLocation(filterBySearchTerm(filterByFullTimeOnly(jobs)));

    emit('updateJobsList', filteredJobs);

    return filteredJobs
}

const isMobile = ref(useMediaQuery(CONSTANTS.breakpoints.mobile));
const isTablet = ref(useMediaQuery(CONSTANTS.breakpoints.tablet));

</script>

<template>

  <form v-on:submit.prevent="filterJobs(jobs)" class="filter" :class="{'filter--dark': themeStore.isDark()}">
    <Input icon="search" v-model="filterSearchTerm" type="text" placeholder="Filter by title, companies, experties..."/>
    <Input icon="location" v-model="filterLocation" type="text" placeholder="Filter by location..."/>
    <div class="checkbox-with-btn">
        <CheckBox v-if="!isMobile" v-model:checked="filterFullTimeOnly" :placeholder="`Full Time ${isTablet ? '' : 'Only'}`" type="checkbox"/>
        <Button variant="primary">
            <Search class="search-icon" v-if="isMobile"/>
            <span v-else>Search</span>
        </Button>
    </div>
  </form>
</template>

<style scoped lang="scss">
.filter {
    position: relative;
    display: flex;
    justify-content: space-between;
    z-index: 10;
    background-color: var(--white);
    border-radius: var(--radius);
    padding: 0 1rem 0 .25rem;
    transition: background-color var(--theme-speed) var(--theme-timing);
    & > *:first-child {
        width: 40%;
    }
    & > *:nth-child(2) {
        width: 30%;
    }
    & > *:nth-child(3) {
        width: 30%;
    }
    &--dark {
        background-color: var(--very-dark-blue);
    }
    @media (max-width: 960px){
        & > *:first-child {
            width: 30%;
        }
        & > *:nth-child(2) {
            width: 30%;
        }
        & > *:nth-child(3) {
            width: 40%;
        }
    }
    @media (max-width: 520px){
        & > *:first-child {
            width: 90%;
            border-right: none;
        }
        & > *:nth-child(2) {
            display: none;
        }
        & > *:nth-child(3) {
            width: 10%;
        }
    }
}

.checkbox-with-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}
</style>
