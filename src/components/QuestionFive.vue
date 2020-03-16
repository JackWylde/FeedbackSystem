<template>
  <div class="page-wrapper">
    <div class="question-wrap">
      <h3 class="mag">
        When I come here I feel...
      </h3>
    </div>

    <div class="content-wrap" id="content">
      <div
        class="lego-a"
        v-on:click.capture="getAnswer"
        v-bind:class="{ clicked: clickedA }"
      >
        <h3 class="mag">Happy</h3>
      </div>
      <div
        class="lego-b"
        v-on:click.capture="getAnswer"
        v-bind:class="{ clicked: clickedB }"
      >
        <h3 class="mag">Safe</h3>
      </div>
      <div
        class="lego-c"
        v-on:click.capture="getAnswer"
        v-bind:class="{ clicked: clickedC }"
      >
        <h3 class="mag">Included</h3>
      </div>

      <div
        class="lego-d"
        v-on:click.capture="getAnswer"
        v-bind:class="{ clicked: clickedD }"
      >
        <h3 class="mag">Sad</h3>
      </div>

      <div
        class="lego-e"
        v-on:click.capture="getAnswer"
        v-bind:class="{ clicked: clickedE }"
      >
        <h3 class="mag">Confused</h3>
      </div>

      <div
        class="lego-f"
        v-on:click.capture="getAnswer"
        v-bind:class="{ clicked: clickedF }"
      >
        <h3 class="mag">Angry</h3>
      </div>
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
  el: "#app",
  data: () => ({
    clickedA: false,
    clickedB: false,
    clickedC: false,
    clickedD: false,
    clickedE: false
  }),
  methods: {

    routeToEnd: function(){
      this.$router.push("Finished");
    },

    getAnswer: function(event) {
      let obj = event.target;
      console.log(obj);
      console.log(obj.innerHTML);

      if (obj.innerHTML === "Sad") {
        console.log("a");
        this.routeToEnd();
      } else if (obj.innerHTML === "Safe") {
        console.log("b");
        this.routeToEnd();
      } else if (obj.innerHTML === "Included") {
        console.log("c");
        this.routeToEnd();
      } else if (obj.innerHTML === "Confused") {
        console.log("d");
        this.routeToEnd();
      } else if (obj.innerHTML === "Angry") {
        console.log("e");
        this.routeToEnd();
      }
    }
  },
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

#content {
  display: flex;
  flex-wrap: wrap;
  height: 70vh;
  justify-content: space-evenly;
  div {
    display: flex;
    justify-content: center;
    width: 30%;
    margin: 5px;
    padding-top: 3.5%;
    align-items: center;

    h3 {
      font-family: "Love Ya Like A Sister";
      font-size: 24px;
    }
  }
}

.lego-a {
  background-image: url("../assets/lego-green.png");
  background-repeat: no-repeat;
  background-position: center;
}
.lego-b {
  background-image: url("../assets/lego-pink.png");
  background-repeat: no-repeat;
  background-position: center;

}
.lego-c {
  background-image: url("../assets/lego-orange.png");
  background-repeat: no-repeat;
  background-position: center;

}
.lego-d {
  background-image: url("../assets/lego-blue.png");
  background-repeat: no-repeat;
  background-position: center;

}

.lego-e {
  background-image: url("../assets/lego-purple.png");
  background-repeat: no-repeat;
  background-position: center;

}

.lego-f {
  background-image: url("../assets/lego-red.png");
  background-repeat: no-repeat;
  background-position: center;
}
</style>
