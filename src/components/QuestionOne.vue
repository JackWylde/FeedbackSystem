<template>
  <div class="page-wrap">
    <div class="question-wrap">
      <div class="title">
        <h3 class="mag">
          What word would you use to describe <br> your health care appointment?
        </h3>
      </div>
    </div>
    <div class="content-wrap">
      <div class="button-wrap">
        <button v-on:click.capture="getAnswer" class="answer" id="good">
          <h3 class = "mag">Good</h3>
        </button>
      </div>
      <div class="button-wrap">
        <button v-on:click.capture="getAnswer" class="answer" id="excellent">
          <h3 class = "mag">Excellent</h3>
        </button>
      </div>
      <div class="button-wrap">
        <button v-on:click.capture="getAnswer" class="answer" id="okay">
          <h3 class = "mag">Okay</h3>
        </button>
      </div>
      <div class="button-wrap">
        <button v-on:click.capture="getAnswer" class="answer" id="poor">
          <h3 class = "mag">Poor</h3>
        </button>
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
  data() {
    return {};
  },
  methods: {
    getAnswer: function(event) {
      this.answer = event.target.innerText;
      console.log(this.answer);
      this.$router.push("QuestionTwo");
    }
  },
  name: "QuestionPage",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Love+Ya+Like+A+Sister&display=swap");
.page-wrap {
  height: 100vh;
}
.question-wrap {
  position: relative;
  width: 100%;
  background-color: #7bb0b4;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    width: 100%;
    text-align: center;
    h3 {
      font-family: "Love Ya Like A Sister";
      color: white;
      margin: 0 auto;
      font-size: 30px;
      font-weight: lighter;
    }
  }
}

.content-wrap {
  display: flex;
  flex-wrap: wrap;
  height: 72%;
  background-color: #81c6cb;
  padding: 20px;
  align-items: center;
  justify-content: center;
}

.content-wrap button {
  border-style: none;
  border-radius: 20px;
  padding: 90px 165px;
  width: 80%;
  border: 5px solid rgba(255, 255, 255, 0.25);
}

html,
body {
  height: 100%;
  width: 100%;
}
.button-wrap {
  width: 50%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.answer {
  &#good {
    background: #30ec43;
  }
  &#excellent {
    background: #2ca5e9;
  }
  &#poor {
    background: #f65a5a;
  }
  &#okay {
    background: #dddf5c;
  }

  > h3 {
    font-family: "Love Ya Like A Sister";
    color: white;
    text-align: center;
    margin: 0 auto;
    font-size: 30px;
    font-weight: lighter;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
