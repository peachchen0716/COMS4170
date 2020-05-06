<template>
  <div>
    <div class="row justify-content-center">
      Current Progress: {{this.progressComputed}} %
    </div>
    <div class="progress">
      <div class="progress-bar" role="progressbar" 
      :style="{ width: this.progressComputed + '%' }" id="progress-bar">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    type: String
  },
  computed: {
    progressComputed() {
      if (this.type == "learn")
        return this.$store.state.learnProgress
      else
        return this.$store.state.quizProgress
    }
  }
}
</script>

<style scoped>

</style>