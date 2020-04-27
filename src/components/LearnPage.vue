<template>
  <div class="container">

    <div class="row mt-3">
      <div class="col-2"></div>
      <div class="col-2 py-2 button">
        <router-link to="/learn" 
        class="nav-link" exact-active-class="active">Turkey</router-link>
      </div>
      <div class="col-2 py-2 button">
        <router-link to="/learn/india" 
        class="nav-link" exact-active-class="active">India</router-link>
      </div>
      <div class="col-2 py-2 button">
        <router-link to="/learn/sea"  
        class="nav-link" exact-active-class="active">Southeast Asia</router-link>
      </div>
      <div class="col-2 py-2 button">
        <router-link to="/learn/east-asia"   
        class="nav-link" exact-active-class="active">East Asia</router-link>
      </div>
      <div class="col-1"></div>
    </div>

    <div class="row mt-3">
      <div class="col-1"></div>
      <div class="col-10">
        <ProgressBar :progress="this.progress"/>
      </div>
      <div class="col-1"></div>
    </div>

    <!-- <LearnNavbar :curSect="'turkey'" v-on:area-selected="onAreaSelected"/> -->
    
    <div class="row">
      <div class="card-group mt-3">
        <div v-for="place in placeDict[group]" :key="place.id" id="card">
          <PlaceCard
          :placeName="place.placeName"
          :placeLoc="place.placeLoc"
          :placeUrl="place.placeUrl"
          @click.native="onClickCard(place.id)"
          />
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
// import LearnNavbar from "./LearnNavbar.vue";
import PlaceCard from "./PlaceCard.vue";
import ProgressBar from "./ProgressBar.vue";

export default {
  name: "LearnPage",
  components: {
    // LearnNavbar,
    PlaceCard,
    ProgressBar,
  },
  data: function () {
    return {
      // curArea: "turkey",
      placeDict: {
        "turkey": [
          {
            id: 1,
            placeName: "Hagia Sophia",
            placeLoc: "Istanbul, Turkey",
            placeUrl: "1079px-Hagia_Sophia_Mars_2013.jpg",
          },
          {
            id: 2,
            placeName: "Blue Mosque",
            placeLoc: "Istanbul, Turkey",
            placeUrl: "1440px-P1020390.jpg",
          }
        ],
        "india": [
          {
            id: 3,
            placeName: "Taj Mahal",
            placeLoc: "Uttar Pradesh, India",
            placeUrl: "1200px-Taj_Mahal_(Edited).jpeg",
          },
          {
            id: 4,
            placeName: "Lakshmana Temple",
            placeLoc: "Madhya Pradesh, India",
            placeUrl: "Khajuraho-Lakshmana_temple.jpg",
          }
        ],
        "sea": [
          {
            id: 5,
            placeName: "Ananda Temple",
            placeLoc: "Bagan, Myanmar",
            placeUrl: "Ananda-Temple-2.jpg",
          },
          {
            id: 6,
            placeName: "Angkor Wat",
            placeLoc: "Siem Reap, Cambodia",
            placeUrl: "1200px-Angkor_(II).jpg",
          }
        ],
        "east-asia": [
          {
            id: 7,
            placeName: "Forbidden City",
            placeLoc: "Beijing, China",
            placeUrl: "Forbidden_City_Beijing_(3019178959).jpg",
          },
          {
            id: 8,
            placeName: "Kinkaku-ji",
            placeLoc: "Kyoto, Japan",
            placeUrl: "1440px-Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.jpg",
          }
        ]
      },
      progress: 0,
      // selectedPlace: null,
    }
  },
  computed: {
    group() {
      // console.log(this.$route.params)
      if (!("group" in this.$route.params))
        return "turkey"
      return this.$route.params.group
    },
    progressComputed: {
      get: function() {
        return this.progress
      },
      set: function(newValue) {
        this.progress = newValue
      }
    },
    // selectedPlaceComputed: {
    //   get: function() {
    //     return this.selectedPlace
    //   },
    //   set: function(newValue) {
    //     this.selectedPlace = newValue
    //   }
    // }
  },
  methods: {
    // onAreaSelected: function (areaSelected) {
    //   this.curArea = areaSelected
    // },
    onClickCard: function (id) {
      // this.selectedPlaceComputed = id
      this.$router.push({ path: `/learn/place/${id}` })
    }
  }
}
</script>

<style scoped>
  #card {
    max-width: 33%;
    cursor: pointer;
  }
  .active {
    background-color: #66a5ad;
    color: white;
    font-weight: 400;
  }
</style>