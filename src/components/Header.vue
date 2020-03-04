<template>
  <div>
    <div id="header-wrap">
<!--      <p>{{ question }}</p>-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: "Some question here"
    };
  },
  methods: {
    test: function() {
      console.log("Working");
    }
  },
  name: "Header",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  /*@import url('https://fonts.googleapis.com/css?family=Love+Ya+Like+A+Sister&display=swap');*/

div {
  background: #7bb0b4;
}
#header-wrap {
  width: 100%;
  height: 75px;
  background-color: #7bb0b4;
}
/*p {*/
/*  font-family: "Love Ya Like A Sister";*/
/*  color: white;*/
/*  text-align: center;*/
/*  padding: 20px 5px;*/
/*  margin: 0 auto;*/
/*  font-size: 30px;*/
/*}*/
</style>
