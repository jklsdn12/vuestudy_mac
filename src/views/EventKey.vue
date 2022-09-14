<template>
  <div>
    <input @keyup.enter="keyAlert('enter')">
    <input @keyup.tab="keyAlert('tab')">
    <input @keyup.delete="keyAlert('delete')">
    <input @keyup.esc="keyAlert('esc')">
    <input @keyup.space="keyAlert('space')">
    <h1>art+enter</h1><input @keyup.alt.enter="keyAlert('alt+enter')">
    <div @click.shift="keyAlert('shift+click')"><h1>ctl+shift</h1></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
    };
  },
  methods: {
    keyAlert(key){
      alert(key);
    }
  }
}
</script>

<style scoped>
</style>
