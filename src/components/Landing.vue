<template>
  <div class="landing-wrap">
    <div class="question-wrap">
      <h3 class="mag">Welcome to the NHS Children's Feedback System</h3>
    </div>

    <div class="char-containers">
      <div class="char left-char" id="left-char">
        <img src="../assets/girl.png">
      </div>
      <div class="char right-char" id="right-char">
        <img src="../assets/boy.png">
      </div>
    </div>

    <router-link to="/QuestionOne"
      ><button class="btn">Start</button></router-link
    >
  </div>
</template>

<script>
export default {
  name: "Landing",
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
  display: flex;
  align-items: center;
  justify-items: center;
}

.question-wrap > h3 {
  font-family: "Love Ya Like A Sister";
  color: white;
  text-align: center;
  margin: 0 auto;
  font-size: 30px;
  font-weight: lighter;
}

.landing-wrap {
  position: relative;
  width: 100%;
  height: 100%;
}

.welcome-message {
  display: flex;
  justify-content: center;
  /*background-color: #30ec43;*/
  color: white;
  font-family: "Love Ya Like A Sister";
  font-weight: lighter;
  font-size: 28px;
  width: 100%;
  padding: 10px;
}

img {
  width: 100%;
  height: 630px;
}
.btn {
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #30ec43;
  color: white;
  font-size: 16px;
  display: inline-block;
  padding: 20px 70px;
  cursor: pointer;
  z-index: 300;
  transition: background-color 0.25s cubic-bezier(0.19, 1, 0.22, 1);
  border-radius: 10px;
  border: 5px solid rgba(255,255,255,0.25);
  font-family: "Love Ya Like A Sister";
  letter-spacing: 0.1em;
  font-size: 24px;


  &:hover {
    background-color: #30ec43;
  }
}

.char-containers {
  display: flex;
  width: 100%;
  height: 70vh;
  /*background-color: #f65a5a;*/
}

.char-containers > div {
  width: 50%;
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left-char {
  position: relative;
  animation: left-move 3s;
}

.right-char {
  position: relative;
  animation: right-move 3s;
}

.char img {
  max-width: 100%;
  height: 500px;
}

@keyframes left-move {
  0% {
    left: -100%;
  }

  80% {
    left: 7%;
  }

  100% {
    left: 0%;
  }
}

@keyframes right-move {
  0% {
    right: -100%;
  }

  80% {
    right: 7%;
  }

  100% {
    right: 0%;
  }
}
</style>
