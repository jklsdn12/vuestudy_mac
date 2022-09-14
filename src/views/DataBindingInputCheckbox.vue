<template>
  <div>
    <label><input type="checkbox" v-model="checked" true-value="서울" value="서울">서울</label>
    <label><input type="checkbox" v-model="checked" true-value="부산" value="부산">부산</label>
    <label><input type="checkbox" v-model="checked" true-value="인천" value="인천">인천</label>
    <label><input type="checkbox" v-model="checked" true-value="대구" value="대구">대구</label>
    <br>
    <span>체크한 지역 : {{checked}}</span>
  </div>
</template>

<script>
export default {
  data(){
    return{
      checked : []
    };
  }
}
</script>

<style scoped>

</style>
