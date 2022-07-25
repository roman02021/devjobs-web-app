<script setup>
import { ref} from 'vue'
import useMediaQuery from '../useMediaQuery';
import Input from './Input.vue';
import CheckBox from '@/components/CheckBox.vue';
import Button from './Button.vue';
import Icon from './icons/Icon.vue';
import {themeStore} from '../store';
import {CONSTANTS} from '../constants';
import Modal from './Modal.vue';

const props = defineProps({
    jobs: Array,
    filteredJobs: Array
})

const emit = defineEmits(['updateJobsList'])

// const filteredJobs = computed(()=>props.filteredJobs);

const filterSearchTerm = ref('')
const filterLocation = ref('')
const filterFullTimeOnly = ref(false)
const modalIsOpen = ref(false)


function filterByLocation(jobs){
    return jobs.filter(job => job.location.toLocaleLowerCase().includes(filterLocation.value.toLocaleLowerCase()))
}

function filterBySearchTerm(jobs) {
    return jobs.filter(job =>   job.company.toLocaleLowerCase().includes(filterSearchTerm.value.toLocaleLowerCase()) ||
                                job.position.toLocaleLowerCase().includes(filterSearchTerm.value.toLocaleLowerCase())
                        )
}

function filterByFullTimeOnly(jobs) {
    if(Boolean(filterFullTimeOnly.value)){
        return jobs.filter(job => job.contract.toLocaleLowerCase().includes('full'));
    }
  
  return jobs
}

function filterJobs(jobs){

    modalIsOpen.value = false;

    const filteredJobs =  filterByLocation(filterBySearchTerm(filterByFullTimeOnly(jobs)));

    emit('updateJobsList', filteredJobs);

    return filteredJobs
}
function handleFilterBtn(e) {
    modalIsOpen.value = true;
    e.preventDefault();
}


const isMobile = ref(useMediaQuery(CONSTANTS.breakpoints.mobile));
const isTablet = ref(useMediaQuery(CONSTANTS.breakpoints.tablet));

</script>

<template>
    
  <form v-on:submit.prevent="filterJobs(jobs)" class="filter" :class="{'filter--dark': themeStore.isDark()}">
    
    <Input icon="search" v-model="filterSearchTerm" :show-mobile="true" type="text" :placeholder="isTablet || isMobile ? 'Filter by title...' : 'Filter by title, companies, experties...'"/>
    <Input icon="location" v-model="filterLocation" type="text" placeholder="Filter by location..."/>
    <div class="checkbox-with-btn">
        
        <CheckBox v-if="!isMobile" v-model:checked="filterFullTimeOnly" :placeholder="`Full Time ${isTablet ? '' : 'Only'}`" type="checkbox"/>
        <Button variant="icon" v-if="isMobile" @keydown.enter.prevent @keyup.enter.prevent @click="handleFilterBtn" >
            <Icon icon="filter" :height="20" :color="themeStore.isDark() ? '#fff' : '#6E8098'" v-if="isMobile"/>
        </Button>
        <Button variant="search" type="submit">
            <Icon icon="search" :height="20" color="#FFF" v-if="isMobile"/>
            <span v-else>Search</span>
        </Button>
    </div>
    <Modal v-model:isOpen="modalIsOpen" v-if="modalIsOpen">
        <Input icon="location" :inModal="true" v-model="filterLocation" type="text" placeholder="Filter by location..."/>
        <CheckBox v-model:checked="filterFullTimeOnly" placeholder="Full Time Only" type="checkbox" :inModal="true"/>
        <Button variant="search" :full-width="true" :inModal="true" type="submit">
            <span>Search</span>
        </Button>
    </Modal>
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
    @media (max-width: $tablet){
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
    @media (max-width: $mobile){
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
    min-width: 270px;
    @media (max-width: $mobile){
        min-width: fit-content;
    }
    
}
</style>
