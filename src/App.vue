<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/dataBindingList2">DataBindingList2</router-link> |
    <router-link to="/nestedComponent">NestedComponent</router-link>
<!--    <router-link to="/databindingList">DataBind List</router-link>- -->
<!--    <router-link to="/computedExam">ComputedExamx</router-link>-->
<!--    <router-link to="/eventKey">Event Key</router-link>-->
<!--    <router-link to="/eventChange">Event Change</router-link>-->
<!--    <router-link to="/eventClick">Event Click</router-link>-->
<!--    <router-link to="/databindingVIf">DataBind VIf</router-link>-->
<!--    <router-link to="/databindingList">DataBind List</router-link>-->
<!--    <router-link to="/databindingStyle">DataBind Style</router-link>-->
<!--    <router-link to="/databindingClass">DataBind Class</router-link>-->
<!--    <router-link to="/databindingInputButton">DataBind Button</router-link>-->
<!--    <router-link to="/databindingInputImg">DataBind Img</router-link>-->
<!--    <router-link to="/databindingInputRadio">DataBind Radio</router-link>-->
<!--    <router-link to="/databindingInputCheckbox">DataBind Checkbox</router-link>-->
<!--    <router-link to="/databindingInputSelect">DataBind Select</router-link>-->
<!--    <router-link to="/databinding">Data Binding</router-link> |-->
<!--    <router-link to="/databindingHtml">Data Binding HTML</router-link> |-->
<!--    <router-link to="/databindingInputText">Data Binding Input</router-link> |-->
<!--    <router-link to="/databindingInputNumber">Data Binding Number</router-link> |-->
<!--    <router-link to="/databindingInputTextarea">Data Binding TextArea</router-link>-->
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>

</script>
