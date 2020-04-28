<template>
  <div class="row justify-content-md-center mt-2">
    <div class="bg">
      <div class="title">
        Ready to take a quiz?
      </div>
      <div class="take-quiz" @click="goQuiz">
        Take quiz
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuizPage",
  methods: {
    goQuiz() {
      this.$router.push({ path: 'quiz/question/0' })
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
  .title {
    color: white;
    font-size: 1.5rem;
    margin-top: 170px;

  }
  .take-quiz {
    color: white;
    /* width: 30%; */
    font-size: 1.5rem;
    font-weight: 400;
    border: 2px solid white;
    margin: 8% 40% 0px 40%;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
    padding: 10px;
  }
</style>