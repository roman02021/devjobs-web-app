<script setup>
import { ref } from 'vue'
import data from "../data.json"
import Filters from '../components/Filters.vue'
import Button from '../components/Button.vue'
import JobCard from '../components/JobCard.vue'
import {themeStore} from '../store'

const jobs = ref(data)



const filteredJobs = ref(jobs.value)

const pageSize = ref(12)
const page = ref(1)
const allPagesLoaded = ref(page.value * pageSize.value > jobs.value.length ? true : false || filteredJobs.value.length < pageSize.value)


function loadMoreJobs() {

  page.value++

  if(page.value * pageSize.value > jobs.value.length){
    allPagesLoaded.value = true;
    return
  }
}

function updateJobsList(updatedJobs) {
  filteredJobs.value = updatedJobs;
}

</script>

<template>

  <div class="container container--mb">
    <Filters :jobs="jobs" :filteredJobs="filteredJobs" @update-jobs-list="updateJobsList"/>
    <div class="jobs" v-if="!(filteredJobs.length === 0)">
      <JobCard  v-for="job in filteredJobs.slice(0, pageSize * page)" :logo="`.${job.logo}`" :logo-background="job.logoBackground" :posted-at="job.postedAt" :contract="job.contract" :position="job.position" :company="job.company" :job-id="job.id" :location="job.location" :key="job.id">
        {{`.${job.logo}`}}
      </JobCard>
    </div>
    <h1 class="no-results" :class="{'no-results--dark':themeStore.isDark()}" v-if="filteredJobs.length === 0">No Results</h1>
    <Button v-if="!allPagesLoaded && !(filteredJobs.length === 0)" variant="primary" v-on:click="loadMoreJobs" >
      Load More
    </Button>
  </div>
</template>

<style scoped lang="scss">
.jobs {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 65px 30px;
  margin: 3.5rem 0;
  @media (max-width: 960px){
    grid-template-columns: repeat(2,1fr);
  }
  @media (max-width: 520px){
    grid-template-columns: repeat(1,1fr);
  }
}
.no-results {
  margin: 3rem 0;
  &--dark {
    color: var(--white);
  }
}
</style>
