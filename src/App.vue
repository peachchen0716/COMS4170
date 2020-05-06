<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link" exact-active-class="active">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/learn" class="nav-link" active-class="active">Learn</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/quiz" class="nav-link" active-class="active">Quiz</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.feature-content {
  text-align: left;
  white-space: pre-wrap;
}
</style>

<style lang="sass">
  @import '../node_modules/typeface-roboto/index.css'
</style>