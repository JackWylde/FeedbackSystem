<template>
  <div class="page-wrapper">
    <div class="question-wrap">
    <h3>
      When I come here I feel...
    </h3>
  </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  components: {
    "app-footer": Footer
  },
  data: function() {},
  methods: {},
  name: "QuestionPage",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Love+Ya+Like+A+Sister&display=swap");

.question-wrap {
  position: relative;
  width: 100%;
  height: 150px;
  background-color: #7bb0b4;
}

.question-wrap > h3 {
  font-family: "Love Ya Like A Sister";
  color: white;
  text-align: center;
  margin: 0 auto;
  padding-top: 50px;
  font-size: 30px;
  font-weight: lighter;
}

</style>
