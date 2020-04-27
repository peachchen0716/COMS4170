<template>
  <div class="container">
    <div class="row justify-content-center">
      <h3 class="m-4">
        {{ this.place.name }}
      </h3>
    </div>
    <div class="row">
      <div class="col-md-3">
        <div class="nav nav-pills flex-column">
          <a class="nav-link" href="#"  
          v-for="feature in this.place.features" 
          :key="feature.id"
          @click="curFeature = feature.id">{{ feature.name }}</a>
        </div>
      </div>
      <div class="col-md-6">
        <img class="px-2 img-fluid rounded" :src="this.place.features[curFeature].url" :alt="this.place.features[curFeature].name">
      </div>
      <div class="col-md-3 text-left" id="feature-content">{{ this.place.features[curFeature].content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlacePage",
  data: function () {
    return {
      feature: 0,
      places: [
        {
          name: "Hagia Sophia",
          features: [
            {
              id: 0,
              name: "Cathedral & Mosque",
              content: "Hagia Sophia is a former Christian cathedral, later an Ottoman imperial mosque in Istanbul, Turkey.\n\n" + 
                       "It is famous for its large dome and is said to have changed the history of architecture\".",
              url: "https://upload.wikimedia.org/wikipedia/commons/2/22/Hagia_Sophia_Mars_2013.jpg",
            },
            {
              id: 1,
              name: "Minarets",
              content: "The minarets were an turkish addition and not part of the original church's Byzantine design.\n\n" +
                       "Each of these minarets is pencil-shaped.\n\n" +
                       "They are towers typically built into mosques to notify prayers.",
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Minarets_of_Hagia_Sophia%2C_Istanbul.jpg/320px-Minarets_of_Hagia_Sophia%2C_Istanbul.jpg",
            },
            {
              id: 2,
              name: "Dome",
              content: "The dome is an innovative and unique design stemmed from the Ottomans tradition.\n\n" + 
                       "The great dome is carried on four spherical triangular pendentives, and is 107 feet in diameter.",
              url: "https://upload.wikimedia.org/wikipedia/commons/9/99/Istanbul_001.JPG",
            }
          ]
        },
      ]
    }
  },
  computed: {
    curFeature: {
      get: function () {
        return this.feature
      },
      set: function (newValue) {
        this.feature = newValue
      }
    },
    place() {
      var id = this.$route.params.id
      return this.places[parseInt(id) - 1]
    }
  }
}
</script>

<style scoped>
  #feature-content {
    white-space: pre-wrap;
  }
</style>