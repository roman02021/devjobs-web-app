<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import data from "../data.json"
import JobHeader from '../components/JobHeader.vue'
import JobDescription from '../components/JobDescription.vue'
import JobBar from '../components/JobBar.vue'

const route = useRoute()

const jobs = ref(data)

const jobId = ref(route.params.id)

const job = ref(jobs.value.find(job => job.id === parseInt(jobId.value)))


</script>

<template>
  <div class="container container--mb">
    <JobHeader :logo="job.logo" :logoBackground="job.logoBackground" :company="job.company" :website="job.website"/>
    <JobDescription :postedAt="job.postedAt" :contract="job.contract" :position="job.position" :apply="job.apply" :location="job.location" :description="job.description" :requirementsContent="job.requirements.content" :requirementsItems="job.requirements.items" :roleContent="job.role.content" :roleItems="job.role.items"/>
  </div>
  <JobBar :position="job.position" :company="job.company" :apply="job.apply"/>
</template>

<style scoped>

</style>
