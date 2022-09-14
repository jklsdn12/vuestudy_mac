<template>
  <h2>{{title}}</h2>
</template>

<script>
  export default {
    props : {
      title : {
        // type : String, 이유는 모르겠으나 책이랑 다르게 타입 지정하면 안됨
        default : "페이지 타이틀~~~" //인자값 없을 시 디폴트
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
