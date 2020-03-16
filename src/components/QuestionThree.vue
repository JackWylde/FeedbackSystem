<template>
  <div class="page-wrapper">
    <div class="page-row has-images">
      <div class="flex-col">
        <img src="../assets/girl.png" alt="girl" />
      </div>
      <div class="flex-col">
        <img src="../assets/picture5.png" alt="cloud-icon" class = "mag" />
        <h3 class="mag">Would you tell your friends and family that the service is good?</h3>
      </div>
    </div>
    <div class="page-row has-buttons">
      <div class="funky-btn" v-on:click="moveQ4()">
        <img src="../assets/thumbs_mid2.png" alt="thumb" />
      </div>
      <div class="funky-btn" v-on:click="moveQ4()">
        <img src="../assets/thumbs_mid.png" alt="thumb" />
      </div>
      <div class="funky-btn" v-on:click="moveQ4()">
        <img src="../assets/thumbs_down.png" alt="thumb" />
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
  data: function() {},
  methods: {
    moveQ4: function() {
      console.log("clicked");
      this.$router.push("QuestionFour");
    },
  },
  name: "QuestionPage",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Love+Ya+Like+A+Sister&display=swap");

.main-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
}

.main-image > img {
  max-width: 80%;
  position: relative;
  left: 10%;
}

@media screen and (max-width: 1024px) and (orientation: portrait) {
  .inner-flex {
    width: 100%;
  }

  .main-image {
    position: relative;

    img {
      max-width: 80%;
      position: absolute;
      left: 15%;
      bottom: 10%;
    }
  }

  .speech-bubble {
    margin-right: 120px;
  }
}

.inner-flex {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  height: 100%;
  align-items: center;
}

.a {
  background-color: #2ca5e9;
  margin-bottom: 40px;
}

.speech-bubble {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
}
.speech-bubble > img {
  height: auto;
  position: absolute;
  max-width: 565px;
  animation: pulse 2s infinite;
}

.speech-bubble > .title h3 {
  font-family: "Love Ya Like A Sister";
  color: black;
  font-size: 30px;
  font-weight: lighter;
  display: inline-block;
  padding: 0% 25% 7.5% 25%;
  text-align: center;
  position: relative;
  z-index: 45;
}

.answer-flex {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}

.answer-flex div {
  height: 55px;
  width: 95px;
  position: relative;
  bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  border-radius: 20px;
  border: 5px solid rgba(255,255,255,0.25);
  transition: all 0.25s ease-in-out;

  &:nth-of-type(1) {
    background-color: #30ec43;
  }
  &:nth-of-type(2) {
    background-color: #c679ed;
  }
  &:nth-of-type(3) {
    background-color: #ef5d5c;
  }
  img {
    max-width: 70%;
    height: auto;
  }
}

.answer-flex > div:hover,
.answer-flex div:active,
.answer-flex div:focus {
  transition: all 0.5s;
  transform: scale(1.1);
  border: 5px solid rgba(255,255,255,0.5);
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

/* NB */
@media screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .page-wrapper {
    max-width: 100%;
    height: 95vh;

    .page-row {
      width: 100%;
      position: relative;
      display: flex;
      flex: 0 0 100%;

      .flex-col {
        display: flex;
        flex: 0 0 50%;
        position: relative;
        justify-content: center;
      }

      &.has-images {
        .flex-col {
          max-width: 50%;
          min-height: 415px;

          &:nth-child(1) img {
            max-width: 350px;
            top: 15%;
            left: 5%;
            position: absolute;
          }

          &:nth-child(2) img {
            max-width: 550px;
            position: absolute;
            top: 5%;
            left: -10%;
            right: 0;
          }

          &:nth-child(2) h3 {
            align-self: center;
            position: relative;
            z-index: 45;
            max-width: 70%;
            text-align: center;
            font-family: "Love Ya Like A Sister";
            color: black;
            font-size: 35px;
            font-weight: lighter;
            margin-bottom: 85px;
            margin-right: 75px;
          }
        }
      }

      &.has-buttons {
        justify-content: flex-end;
        padding: 20px;
        margin: 20px -40px;

        .funky-btn {
          display: flex;
          flex: 0 0 200px;
          max-width: 150px;
          height: 150px;
          background: red;
          justify-content: center;
          align-items: center;
          border: 5px solid rgba(245, 245, 245, 0.25);
          border-radius: 20px;
          margin: 25px 10px;
          transition: 0.25s ease-in-out;

          &:hover {
            transform: scale(1.05);
            border: 5px solid rgba(245,245,245,0.5);
          }

          &:nth-child(1) {
            background-color: #30ec43;
          }

          &:nth-child(2) {
            background-color: #c679ed;
          }

          &:nth-child(3) {
            background-color: #ef5d5c;
          }
        }

        .funky-btn img {
          max-width: 100px;
        }

      }
    }

  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .page-wrapper {
    max-width: 100%;
    height: 95vh;

    .page-row {
      width: 100%;
      position: relative;
      display: flex;
      flex: 0 0 100%;

      .flex-col {
        display: flex;
        flex: 0 0 50%;
        position: relative;
        justify-content: center;
      }

      &.has-images {
        .flex-col {
          max-width: 50%;
          min-height: 415px;

          &:nth-child(1) img {
            max-width: 350px;
            top: 15%;
            left: 5%;
            position: absolute;
          }

          &:nth-child(2) img {
            max-width: 550px;
            position: absolute;
            top: 5%;
            left: -10%;
            right: 0;
          }

          &:nth-child(2) h3 {
            align-self: center;
            position: relative;
            z-index: 45;
            max-width: 70%;
            text-align: center;
            font-family: "Love Ya Like A Sister";
            color: black;
            font-size: 21px;
            font-weight: lighter;
            margin-bottom: 85px;
            margin-right: 75px;
          }
        }
      }

      &.has-buttons {
        justify-content: flex-end;
        padding: 20px;
        margin: 20px -40px;

        .funky-btn {
          display: flex;
          flex: 0 0 200px;
          max-width: 150px;
          height: 150px;
          background: red;
          justify-content: center;
          align-items: center;
          border: 5px solid rgba(245, 245, 245, 0.5);
          border-radius: 20px;
          margin: 25px 10px;

          &:nth-child(1) {
            background-color: #30ec43;
          }

          &:nth-child(2) {
            background-color: #c679ed;
          }

          &:nth-child(3) {
            background-color: #ef5d5c;
          }
        }

        .funky-btn img {
          max-width: 100px;
        }
      }
    }
  }
}
</style>
