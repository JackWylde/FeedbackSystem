<template>
  <div class="footer">
    <div class="flex-cont">
      <img class = "logo" src="../assets/iic-logo.png" alt="iic-logo" />
      <img src="../assets/nhs-logo.png" alt="nhs-logo" />
      <div class="footer-menu">
        <img
                src="../assets/mag.png"
                class="magnifier"
                v-on:click="increaseFont()"
        />
      </div>
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
        item.style.fontFamily = "Comic Sans";
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
  }
}

.logo {
  background-color: white;
  border-radius: 5px;
  padding: 2PX;
}

.magnifier {
  background-color: #005EB8;
  border-radius: 5px;
  padding: 2px;
}
</style>
