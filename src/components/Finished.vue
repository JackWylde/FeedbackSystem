<template>
  <div class="finished-wrap">
    <div class="modal">
      <h3>Thank you for your feedback!</h3>
      <p>
        Brought to you by...
      </p>
      <div class="row">
        <div class="column">
          <div class="left-col">
            <img src="../assets/iic-logo.png" />
          </div>
        </div>
        <div class="column">
          <div class="right-col">
            <img src="../assets/nhs-logo.png" />
          </div>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  name: "Finished",
  components: {
    "app-footer": Footer
  },
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Love+Ya+Like+A+Sister&display=swap");

.finished-wrap {
  width: 100vw;
  height: 100%;
}
.modal {
  width: 90vw;
  margin: 4% auto;
  height: 70%;
  background-color: #7bb0b4;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  h3 {
    font-size: 48px;
    font-family: "Love Ya Like A Sister";
    color: white;
    display: flex;
    justify-content: center;
    align-content: center;
    padding-top: 10%;
  }
  p {
    padding-top: 35px;
    text-align: center;
    font-size: 24px;
    font-family: "Love Ya Like A Sister";
    color: white;
  }
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.column {
  padding: 10% 2%;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.left-col {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
}
.right-col {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
}
</style>
