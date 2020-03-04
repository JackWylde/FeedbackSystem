<template>
  <div class="footer">
    <div class="flex-cont">
      <img src="../assets/iic-logo.png" alt="iic-logo" />
      <div class="footer-menu">
        <button class="magnifier" v-on:click="increaseFont()">Magnifier</button>
      </div>
      <img src="../assets/nhs-logo.png" alt="nhs-logo" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {},

  methods: {
    increaseFont: function() {
      var target = document.getElementsByClassName("mag");
      var arr = Array.from(target);

      arr.forEach(item => {
        item.style.transform = "scale(1.3)";
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  position: absolute;
  bottom: 0;
  width: 100vw;
  background-color: #7bb0b4;
  z-index: 300;
}

.flex-cont {
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  & img {
    max-width: 100%;
    height: 50px;
    background-color: white;
  }
}
</style>
