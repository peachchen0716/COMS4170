<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" 
        @click="onClickNavlink('HomePage')"
        v-bind:class="{ active: curPageComputed == 'HomePage' }">
        <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item" 
        @click="onClickNavlink('LearnPage')"
        v-bind:class="{ active: curPageComputed == 'LearnPage' }">
        <a class="nav-link" href="#">Learn</a>
        </li>
        <li class="nav-item" 
        @click="onClickNavlink('QuizPage')"
        v-bind:class="{ active: curPageComputed == 'QuizPage' }">
        <a class="nav-link" href="#">Quiz</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  props: {
    curView: String
  },
  data: function () {
    return {
      curPage: this.curView 
    }
  },
  computed: {
    curPageComputed: {
      get: function () {
        return this.curPage
      },
      set: function (newValue) {
        this.curPage = newValue
      }
    }
  },
  methods: {
    onClickNavlink: function (pageSelected) {
      if (this.curPageComputed != pageSelected){
        this.curPageComputed = pageSelected
        this.$emit("page-selected", pageSelected)
      }
    }
  }
}
</script>

<style scoped>

</style>