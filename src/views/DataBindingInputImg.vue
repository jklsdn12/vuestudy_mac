<template>
  <div>
    <img v-bind:src="imgSrc"/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      imgSrc : "https://conf.vuejs.de/assets/logo-conference-vuejs.svg"
    };
  }
}
</script>

<style scoped>

</style>
