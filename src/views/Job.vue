<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import data from "../data.json"

const route = useRoute()

const jobs = ref(data)

const jobId = ref(route.params.id)

const job = ref(jobs.value.find(job => job.id === parseInt(jobId.value)))


</script>

<template>
  <h1>JOB{{$route.params.id}}</h1>
  {{job}}
<router-link to="/">HOME</router-link>
</template>

<style scoped>

</style>
