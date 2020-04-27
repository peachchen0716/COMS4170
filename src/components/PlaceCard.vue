<template>
  <div class="card">
    <img class="card-img-top" :src="require(`@/assets/img/${placeUrl}`)" :alt="placeName">
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
  img {
    height: 300px;
  }
</style>