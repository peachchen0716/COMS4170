<template>
  <div class="row justify-content-md-center mt-2">
    <div class="bg">
      <div class="title" @click="$emit('page-selected', 'LearnPage')">
        Learn about Asian Architecture
      </div>
      <div class="description">
        At the end of this tutorial, you will get a basic understanding of turkish, indian, southeastern asian, eastern asian architecture designs, and hopefully be able to distinguish designs among different cultural groups
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
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
    font-weight: 400;
    margin: 180px 200px 0px 200px;
    padding: 20px;
    border: 2px solid white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
  }
  .description {
    color: white;
    font-size: .8rem;
    margin: 50px 140px 0px 140px;
  }
</style>