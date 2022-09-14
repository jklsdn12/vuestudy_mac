<template>
  <div>
    <input type="text" v-model="textValue">
    <button type="button" v-bind:disabled="textValue==''">Click</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      textValue : ""
    };
  }
}
</script>

<style scoped>
  container {
    width : 100%;
    height : 200px;
  }
  .active {
    background: yellow;
    font-weight: bold;
  }
  .text-red{
    color:red
  }
</style>
