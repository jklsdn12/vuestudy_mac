<template>
  <div>
    <PageTitle title="인자값 테스트"/>
    <page-title v-bind:title="title"/> <!--책에 v-bind 빠져있음-->
    <blog-post v-bind="post"/>
    <blog-post :id="post.id"  :title="post.title"/>
    <blog-post :is-published="true"/>
    <blog-post :is-published="isShow"/>
    <blog-post :comment-ids="[4,5,6]"/>
    <blog-post :comment-ids="post.commentIds"/>
    <blog-post :author="{name : 'CHOL', name2: 'CHOLKI'}"/>
    <blog-post :author="post.author"/>
  </div>
</template>

<script>
  import PageTitle from '../components/PageTitle';
  //import PageTitleReturn from "@/components/PageTitleReturn";
  export default {
    components: {PageTitle},
    data() {
      return {
        title : "동적할당",
        post : {
          likes : "42",
          id : 1,
          title : 'Vue Test',
          commentIds : [2,3,4],
          author : {name : 'gang', name2 : 'june'}
        },
        isShow : false
      };
    },
    props : {
      propA : Number,
      propB : {String, Number},
      propC : { type : String , required : true },
      propD : { type : Number , default : 100},
      propE : { type : Object, default : function() {return {message:'hello'}}},
      propF : { validator : function(value){ return ['success', 'warning', 'danger'].indexOf(value) !== -1 }},
      propG : { type : Function , default : function(){ return 'Default function ' }}

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
