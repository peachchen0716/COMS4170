<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-1"></div>
      <div class="col-10">
        <ProgressBar :progress="80"/>
      </div>
      <div class="col-1"></div>
    </div>

    <LearnNavbar :curSect="'turkey'" v-on:area-selected="onAreaSelected"/>
    
    <div class="row">
      <div class="card-group mt-3">
        <PlaceCard v-for="place in placeDict[curArea]"
        :placeName="place.placeName"
        :placeLoc="place.placeLoc"
        :placeUrl="place.placeUrl"
        :key="place.id"
        />
      </div> 
    </div>
  </div>

</template>

<script>
import LearnNavbar from "./LearnNavbar.vue";
import PlaceCard from "./PlaceCard.vue";
import ProgressBar from "./ProgressBar.vue";

export default {
  name: "LearnPage",
  components: {
    LearnNavbar,
    PlaceCard,
    ProgressBar,
  },
  data: function () {
    return {
      curArea: "turkey",
      placeDict: {
        "turkey": [
          {
            placeName: "Hagia Sophia",
            placeLoc: "Istanbul, Turkey",
            placeUrl: "1079px-Hagia_Sophia_Mars_2013.jpg",
          },
          {
            placeName: "Blue Mosque",
            placeLoc: "Istanbul, Turkey",
            placeUrl: "1440px-P1020390.jpg",
          }
        ],
        "india": [
          {
            placeName: "Taj Mahal",
            placeLoc: "Uttar Pradesh, India",
            placeUrl: "1200px-Taj_Mahal_(Edited).jpeg",
          },
          {
            placeName: "Lakshmana Temple",
            placeLoc: "Madhya Pradesh, India",
            placeUrl: "Khajuraho-Lakshmana_temple.jpg",
          }
        ],
        "sea": [],
        "east-asia": []
      },
    }
  },
  methods: {
    onAreaSelected: function (areaSelected) {
      this.curArea = areaSelected
    },
  }
}
</script>

<style>

</style>