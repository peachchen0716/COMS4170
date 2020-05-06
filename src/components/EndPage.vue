<template>
  <div class="row justify-content-md-center mt-2">
    <div class="bg pt-5">
      <div class="title mt-5">
        Good job! You've finished the quiz.
      </div>
      <div class="title mt-5">
         Your final score is <span class="font-weight-bold score">{{this.$store.state.quizScore}}</span> / 100.
      </div>
      <div class="take-quiz" @click="goHome">
        Home Page
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EndPage",
  methods: {
    goHome: function() {
      this.$router.replace({ path: '/' })
    }
  }
}
</script>

<style scoped>
  .bg {
    opacity: 0.65;
    height: 500px;
    width: 80%;
    background-image: url('https://cdn.theatlantic.com/thumbor/RkyK_ynhE1qRR77sjv8WUANgjxA=/1200x755/media/img/photo/2019/07/bagan/b19_525729376/original.jpg');
  }
  .score {
    color: #000000;
  }
  .title {
    color: white;
    font-size: 1.5rem;
  }
  .take-quiz {
    color: white;
    font-size: 1.2rem;
    font-weight: 400;
    border: 2px solid white;
    margin: 8% 40% 0px 40%;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
    padding: 10px;
  }
</style>