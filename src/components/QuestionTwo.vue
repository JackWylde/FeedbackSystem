<template>
  <div class="page-wrap">
    <div class="question-wrap">
      <h3 class="mag">
        The healthcare staff are listening to me...
      </h3>
    </div>
    <div class="content-wrap" id="content">
      <div
        v-on:click.capture="getAnswer"
        class="balloon a mag"
        v-bind:class="{ clicked: clickedA }"
      >
        <h3>I agree a lot</h3>
      </div>
      <div
        v-on:click.capture="getAnswer"
        class="balloon b mag"
        v-bind:class="{ clicked: clickedB }"
      >
        <h3>I agree a bit</h3>
      </div>
      <div
        v-on:click.capture="getAnswer"
        class="balloon c mag"
        v-bind:class="{ clicked: clickedC }"
      >
        <h3>I'm not sure</h3>
      </div>

      <div
        v-on:click.capture="getAnswer"
        class="balloon d mag"
        v-bind:class="{ clicked: clickedD }"
      >
        <h3>I disagree a bit</h3>
      </div>

      <div
        v-on:click.capture="getAnswer"
        class="balloon e mag"
        v-bind:class="{ clicked: clickedE }"
      >
        <h3>I disagree a lot</h3>
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
  data: function() {
    return {
      clickedA: false,
      clickedB: false,
      clickedC: false,
      clickedD: false,
      clickedE: false
    };
  },
  methods: {
    moveQ3: function() {
      this.$router.push("QuestionThree");
    },

    getAnswer: function(event) {
      let obj = event.target;
      console.log(obj);
      console.log(obj.className);

      if (obj.className === "balloon a mag") {
        this.clickedA = true;
        setTimeout(this.moveQ3, 300);
      } else if (obj.className === "balloon b mag") {
        this.clickedB = true;
        setTimeout(this.moveQ3, 300);
      } else if (obj.className === "balloon c mag") {
        this.clickedC = true;
        setTimeout(this.moveQ3, 300);
      } else if (obj.className === "balloon d mag") {
        this.clickedD = true;
        setTimeout(this.moveQ3, 300);
      } else if (obj.className === "balloon e mag") {
        this.clickedE = true;
        setTimeout(this.moveQ3, 300);
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

.footer {
  position: relative;
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

.content-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex: 0 0 100%;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px;

  .balloon {
    display: flex;
    min-width: 33.33%;
    max-width: 33.33%;
    flex: 0 0 33.33%;
    align-self: center;
    align-items: center;
    justify-content: center;
    height: 255px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    flex-direction: column;
    transition: all .2s; 

    &:nth-of-type(1) {
      background-image: url('../assets/green_b.png');
    }
    &:nth-of-type(2) {
      background-image: url('../assets/blue_b.png');
    }
    &:nth-of-type(3) {
      background-image: url('../assets/yellow_b.png');
    }
    &:nth-of-type(4) {
      background-image: url('../assets/orange_b.png');
    }
    &:nth-of-type(5) {
      background-image: url('../assets/red_b.png');
    }

    h3 {
      font-family: "Love Ya Like A Sister";
      color: black;
      align-self: center;
      font-size: 21px;
      font-weight: 600;
      margin-bottom: 75px;
    }
  }
}

.content-wrap > div > img {
  width: 85%;
}

.clicked {
  background-image: url(../assets/confetti.jpg);
}

.a {
  position: relative;
  transition: all 1s;
  animation: move-up 1.2s ease-in-out;
}

.b {
  position: relative;
  animation: move-up 1.3s ease-in-out;
}
.c {
  position: relative;
  animation: move-up 1.4s ease-in-out;
}
.d {
  position: relative;
  animation: move-up 1.5s ease-in-out;
}
.e {
  position: relative;
  animation: move-up 1.6s ease-in-out;
}

@keyframes move-up {
  0% {
    transform: translateY(350%);
  }
  100% {
    transform: translateY(0%);
  }
}
</style>
