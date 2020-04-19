<template>
  <div class="row mt-3">
    <div class="col-2"></div>
    <div class="col-2 py-2" 
    @click="onClickNavlink('turkey')"
    v-bind:class="{ active: curSectComputed == 'turkey' }">
      Turkey
    </div>
    <div class="col-2 py-2" 
    @click="onClickNavlink('india')"
    v-bind:class="{ active: curSectComputed == 'india' }">
      India
    </div>
    <div class="col-2 py-2" 
    @click="onClickNavlink('sea')"
    v-bind:class="{ active: curSectComputed == 'sea' }">
      Southeast Asia
    </div>
    <div class="col-2 py-2" 
    @click="onClickNavlink('east-asia')"
    v-bind:class="{ active: curSectComputed == 'east-asia' }">
      East Asia
    </div>
    <div class="col-1"></div>
  </div>
</template>

<script>
export default {
  name: "LearnNavbar",
  props: {
    curSect: String,
  },
  data: function () {
    return {
      curSectData: this.curSect 
    }
  },
  computed: {
    curSectComputed: {
      get: function () {
        return this.curSectData
      },
      set: function (newValue) {
        this.curSectData = newValue
      }
    }
  },
  methods: {
    onClickNavlink: function (areaSelected) {
      if (this.curSectComputed != areaSelected){
        this.curSectComputed = areaSelected
        this.$emit("area-selected", areaSelected)
      }
    }
  }
}
</script>

<style scoped>
  .active {
    background-color: #66a5ad;
    color: white;
    font-weight: 400;
  }
</style>