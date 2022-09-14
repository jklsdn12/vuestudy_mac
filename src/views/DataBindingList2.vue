<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>제품명</th>
        <th>가격</th>
        <th>카테고리</th>
        <th>배송료</th>
      </tr>
      </thead>
      <tbody>
      <tr :key="i" v-for="(product,i) in productList.data ">
        <td>{{product.CODNUM}}</td>
        <td>{{product.CODENM}}</td>
        <td>{{product.IMGSRC}}</td>
        <td>{{product.CRETIM}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import mixins from "@/mixins";

export default {
  mixins: [mixins],
  data(){
    return {
      productList: []
    };
  },
  created() {
    this.createSession();

    this.getList();
  },
  methods: {
    async createSession()
    {
      await this.$callAPI(
        "/common/json/login.data",
        "post",
        {USERID: "하미자", PASSWD: "1234"}
      );
    },

     async getList() {
       this.productList = await this.$callAPI(
         "/common/UserRoom/list/json/USRICONALL.data",
         "post",
         {}
       );

       //console.log(this.productList.data);
     },
    },
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
