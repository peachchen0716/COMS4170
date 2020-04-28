<template>
  <div class="card">
    <img class="card-img-top img-fluid" :src="placeUrl" :alt="placeName">
    <div class="card-body">
      <h5 class="card-title">{{placeName}}</h5>
      <p class="card-text">{{placeLoc}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlaceCard",
  props: {
    placeName: String,
    placeLoc: String,
    placeUrl: String,
  }
}
</script>

<style scoped>

</style>