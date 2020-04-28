<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-1"></div>
      <div class="col-10">
        <ProgressBar :progress="this.progress"/>
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row justify-content-center mt-3">
      <div class="col-3"></div>
      <div class="col-6">
        <img class="img-fluid rounded" :src="this.question.url" :alt="'question-' + this.question.id">
        <div class="row justify-content-center mt-3 px-5 feature-content">{{this.curContent}}</div>
        <div class="row justify-content-between mt-3 px-5" v-if="!this.answered">
          <button class="btn btn-primary" @click="onAnswer(1)">
            {{this.question.opt1}}
          </button>
          <button class="btn btn-primary" @click="onAnswer(2)">
            {{this.question.opt2}}
          </button>
        </div>
        <div class="row justify-content-end mt-3 pr-5" v-if="this.answered">
          <button class="btn btn-primary" @click="goNext">
            Next
          </button>
        </div>
      </div>
      <div class="col-3"></div>
    </div>

  </div>
</template>

<script>
import ProgressBar from "./ProgressBar.vue"

export default {
  name: "Question",
  components: {
    ProgressBar,
  },
  data: function () {
    return {
      answered: false,
      progress: 0,
      questions: [
        {
          id: 0,
          content: "Which culture group does this building belongs to?",
          url: "https://upload.wikimedia.org/wikipedia/commons/2/2b/S%C3%BCleymaniye_Camii.jpg",
          opt1: "Turkish",
          opt2: "Indian",
          answer: "1",
          trueResponse: "You are right! Turkey is the correct answer",
          falseResponse: "Ops. India is incorrect. \n\n" + 
          "Minarets are the symbol of Islamic mosque. The dome can be typically found in byzantine churches, which suggests the answer is turkish.",
        },
        {
          id: 1,
          content: "Which culture group does this building belongs to?",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Residence_dete828.JPG/640px-Residence_dete828.JPG",
          opt1: "East Asia (China)",
          opt2: "Southeast Asia (Myanmar)",
          answer: "1",
          trueResponse: "You are right! China is the correct answer",
          falseResponse: "Ops. Sea is incorrect. \n\n" +
          "The slopping roof is typical in East Asia architectures. The presence of yellow elements further suggests its Chinese imperial style.",
        },
      ]
    }
  },
  computed: {
    ansComputed: {
      get: function() {return this.answered},
      set: function(newValue) {this.answered = newValue}
    },
    curContent: {
      get: function() {
        return this.question.content
      },
      set: function(newValue) {
        this.question.content = newValue
      }
    },
    qid() {
      return parseInt(this.$route.params.id)
    },
    question() {
      return this.questions[this.$route.params.id]
    }
  },
  methods: {
    goNext() {
      this.ansComputed = false
      this.$router.replace({ 'path': `/quiz/question/${this.qid + 1}`})
    },
    onAnswer(ans) {
      this.ansComputed = true
      if (ans == this.question.answer){
        this.curContent = this.question.trueResponse
      } else {
        this.curContent = this.question.falseResponse
      }
    }
  }
}
</script>

<style>

</style>