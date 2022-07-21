<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
    jobs: Array,
    filteredJobs: Array
})

</script>

<template>
  <form v-on:submit.prevent="filterJobs(jobs)" class="filter">
    <input class="filter" v-model="filterSearchTerm" type="text" placeholder="Filter by title, companies, experties..."/>
    <input class="filter" v-model="filterLocation" type="text" placeholder="Filter by location..."/>
    <label>
      <input v-model="filterFullTimeOnly" type="checkbox"/>
      Full Time Only
    </label>
    <button>Search</button>
  </form>
</template>

<style scoped>
.filter {
    position: relative;
    z-index: 10;
    background-color: var(--white);
    border-radius: var(--radius);
    padding: 1.75rem;
}
</style>
