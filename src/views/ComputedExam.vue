<template>
  <div>
    <h1>{{firstName + ' '+lastName}}</h1>
    <h1>{{getFulName()}}</h1>
    <h1>{{fullName}}</h1>
    <h1>{{fullName2}}</h1> <button type="button" @click="changeFirst">changeFirst</button>
    <h1>{{fullName2}}</h1> <button type="button" @click="changeLast">changeLast</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      firstName : 'Kim',
      lastName : 'Kimkim',
      fullName2 : ''
    };
  },
  methods: {
    getFulName(){
      return this.firstName+' '+this.lastName;
    },
    changeFirst(){
      this.firstName ="Choi";
    },
    changeLast(){
      this.lastName ="ChoiChoi";
    }

  },
  computed: {
    fullName(){
      return  this.firstName + ' ' +this.lastName;
    }
  },
  watch: {
    firstName() {
      this.fullName2 = this.firstName + ' ' +this.lastName;
    },
    lastName(){
      this.fullName2 = this.firstName + ' ' +this.lastName;
    }
  }
}
</script>

<style scoped>
</style>
