<template>
  <div class="page-wrap">
    <div class="question-wrap">
      <h3>
        I felt involved and included during my appointment...
      </h3>
    </div>

    <div class="content-wrapper">
      <div class="button-wrap">
        <button class="answer" id="agree" v-on:click="moveQ5()">
          <h3 class="mag">Agree</h3>
        </button>

        <button class="answer" id="disagree" v-on:click="moveQ5()">
          <h3 class="mag">Disagree</h3>
        </button>
      </div>
    </div>

    <div class="pointy-image">
      <p>Pointing</p>
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
  methods: {
    moveQ5: function() {
      console.log("clicked");
      this.$router.push("QuestionFive");
      window.location.reload();
    }
  },
  name: "QuestionPage",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Love+Ya+Like+A+Sister&display=swap");

.button-wrap {
  width: 80%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
}

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

.content-wrapper {
  display: flex;
  justify-content: center;
  align-content: center;
  height: 30%;
  width: 100vw;
}

.answer {
  width: 45vw;
  height: 30vh;
  margin: 2%;

  &#agree {
    background: #30ec43;
  }
  &#disagree {
    background: #f65a5a;
  }
  > h3 {
    font-family: "Love Ya Like A Sister";
  }
}
.pointy-image {
  background-color: #2ca5e9;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-wrapper button {
  border-style: none;
  border-radius: 20px;
  width: 80%;
  border: 5px solid rgba(255, 255, 255, 0.25);
  font-size: 36px;
}

.button-wrap > button:hover,
.button-wrap  button:active,
.button-wrap  button:focus {
  transition: all 0.5s;
  transform: scale(1.1);
}

@keyframes pulse {
  0% {
    transform: scale(0.975);
  }

  70% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.975);
  }
}
</style>
