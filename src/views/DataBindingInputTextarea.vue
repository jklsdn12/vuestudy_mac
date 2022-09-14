<template>
  <div>
    <textarea v-model="message"/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      message : "텍스트에어리어 테스트 "
    };
  }
}
</script>

<style scoped>

</style>
