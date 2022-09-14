<template>
  <div>
    <button type="button" @click="increaseCounter">Add 1</button>
    <p>The counter is : {{counter}}</p>
    <br>

    <button type="button" @click="setCount(7)">set 7</button>
    <p>The counter is : {{counter2}}</p>
    <br>

    <button type="button" @click="one(), two()">alert</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      counter : 0,
      counter2 : 0
    };
  },
  methods: {
    increaseCounter(){
      this.counter = this.counter + 1;
    },
    setCount(counter){
      this.counter2=counter;
    },
    one(){
      alert('one');
    },
    two(){
      alert('two');
    }
  }
}
</script>

<style scoped>
</style>
