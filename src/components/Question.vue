<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-1"></div>
      <div class="col-10">
        <ProgressBar type="quiz"/>
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row justify-content-center mt-3">
      <div class="col-3"></div>
      <div class="col-6">
        <img class="img-fluid rounded" :src="this.question.url" :alt="'question-' + this.question.id">
        <div class="row justify-content-center mt-3 px-5 feature-content">{{this.curContent}}</div>
        <div class="row justify-content-between mt-3 px-5" v-if="!this.answered">
          <div class="col">
            <div class="row">
              <div class="col-6">
                <button class="btn btn-outline-primary" @click="onAnswer(1)">
                  Turkish
                </button>
              </div>
              <div class="col-6">
                <button class="btn btn-outline-primary" @click="onAnswer(2)">
                  Indian
                </button>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-6">
                <button class="btn btn-outline-primary" @click="onAnswer(3)">
                  Southeast Asia
                </button>
              </div>
              <div class="col-6">
                <button class="btn btn-outline-primary" @click="onAnswer(4)">
                  East Asia
                </button>
              </div>
            </div>
          </div>
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
          answer: "1",
          trueResponse: "You are right! Turkey is the correct answer",
          falseResponse: "Ops. That's incorrect. \n\n" + 
          "Minarets are the symbol of Islamic mosque. The dome can be typically found in byzantine churches, which suggests the answer is turkish.",
        },
        {
          id: 1,
          content: "Which culture group does this building belongs to?",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Residence_dete828.JPG/640px-Residence_dete828.JPG",
          answer: "4",
          trueResponse: "You are right! East Asia is the correct answer",
          falseResponse: "Ops. That's incorrect. \n\n" +
          "The slopping roof is typical in East Asia architectures. The presence of yellow elements further suggests its Chinese imperial style.",
        },
        {
          id: 2,
          content: "Which culture group does this structure commonly appear in?",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Taj_Mahal_finial-1.jpg/240px-Taj_Mahal_finial-1.jpg",
          answer: "2",
          trueResponse: "You are right! India is the correct answer",
          falseResponse: "Ops. That's incorrect. \n\n" +
          "The finial is topped by a moon, a typical Islamic motif whose horns point heavenward.",
        },
        {
          id: 3,
          content: "Which culture group does this tower fit in the most?",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Awatcornertower01.JPG/240px-Awatcornertower01.JPG",
          answer: "3",
          trueResponse: "You are right! SEA is the correct answer",
          falseResponse: "Ops. That's incorrect. \n\n" +
          "The lotus buds shaped tower is common in Southeast Asia which symbolizes the sacred mountain in the Buddhist religion.",
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
      var nextid = this.qid + 1
      if (!this.$store.state.learnSet.has(this.question.id)) {
        this.$store.commit('incQuiz')
        this.$store.commit('updateQuizSet', this.question.id)
      }
      if (nextid == this.questions.length)
        this.$router.replace({ 'path': '/quiz/end' })
      else
        this.$router.replace({ 'path': `/quiz/question/${nextid}`})
    },
    onAnswer(ans) {
      this.ansComputed = true
      if (ans == this.question.answer){
        this.$store.commit('incQuizScore')
        this.curContent = this.question.trueResponse
      } else {
        this.curContent = this.question.falseResponse
      }
    }
  },
}
</script>

<style scoped>
  button {
    width: 150px;
  }
</style>