<template>
  <div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" 
    :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100" :style="{ width: progress + '%' }" id="progress-bar">
      Learning Progress: {{progress}}%
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    progress: Number
  }
}
</script>

<style scoped>

</style>