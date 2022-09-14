<template>
  <div>
    <h1 v-if="type=='A'">A</h1>
    <h1 v-else-if="type=='B'">B</h1>
    <h1 v-else>C</h1>
    <h1 v-show="bShow">bShowTest</h1>
  </div>
</template>

<script>
export default {
  data(){
    return {
      type: 'B',
      bShow: false
    };
  }
}
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td,th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
