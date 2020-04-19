<template>
  <div id="app" class="container">
    <Header :curView="curView" v-on:page-selected="onPageSelected"/>
    
    <component v-bind:is="curPageComputed"></component>

  </div>
</template>

<script>
import Header from "./components/Header.vue";
import HomePage from "./components/HomePage.vue";
import LearnPage from "./components/LearnPage.vue"
import QuizPage from "./components/QuizPage.vue";

export default {
  name: 'App',
  components: {
    Header,
    HomePage,
    LearnPage,
    QuizPage
  },
  data: function () {
    return {
      curView: 'HomePage',
    }
  },
  computed: {
    curPageComputed: function () {
      return this.curView
    },
  },
  methods: {
    onPageSelected: function (pageSelected) {
      this.curView = pageSelected
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
