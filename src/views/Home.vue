<script setup>
import { ref, computed } from 'vue'
import data from "../data.json"
import Filters from '../components/Filters.vue'

const jobs = ref(data)

const filterSearchTerm = ref('')
const filterLocation = ref('')
const filterFullTimeOnly = ref(false)

const pageSize = ref(12)
const page = ref(1)
const allPagesLoaded = ref(page.value * pageSize.value > jobs.value.length ? true : false);

const filteredJobs = ref(jobs.value)


function filterByLocation(jobs){
  return jobs.filter(job => job.location.toLocaleLowerCase().includes(filterLocation.value.toLocaleLowerCase()))
}

function filterBySearchTerm(jobs) {
  console.log(jobs);
  return jobs.filter(job => job.company.toLocaleLowerCase().includes(filterSearchTerm.value.toLocaleLowerCase()) ||
                            job.position.toLocaleLowerCase().includes(filterSearchTerm.value.toLocaleLowerCase()))
}

function filterByFullTimeOnly(jobs) {

  if(filterFullTimeOnly.value){
     return jobs.filter(job => job.contract.toLocaleLowerCase().includes('full'));
  }
  
  return jobs
}

function filterJobs(jobs){

  filteredJobs.value = filterByLocation(filterBySearchTerm(filterByFullTimeOnly(jobs)));

  return filteredJobs.value;
}

function loadMoreJobs() {

  page.value++

  if(page.value * pageSize.value > jobs.value.length){
    allPagesLoaded.value = true;
    return
  }
}

</script>

<template>
  <form v-on:submit.prevent="filterJobs(jobs)">
    <input v-model="filterSearchTerm" type="text" placeholder="Filter by title, companies, experties..."/>
    <input v-model="filterLocation" type="text" placeholder="Filter by location..."/>
    <label>
      <input v-model="filterFullTimeOnly" type="checkbox"/>
      Full Time Only
    </label>
    <button>Search</button>
  </form>
  {{filterLocation }}
  <div v-for="job in filteredJobs.slice(0, pageSize * page)" :key="job.id">
    <router-link :to="{name: 'job.detail', params: {id: job.id}}">{{job.location}}</router-link>
  </div>
  <button v-on:click="loadMoreJobs" v-if="!allPagesLoaded">
    Load More
  </button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
