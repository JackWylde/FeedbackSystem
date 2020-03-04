<template>
  <div class="home">
<!--    <Header />-->
    <Landing />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import Header from "@/components/Header.vue";
import Landing from "@/components/Landing.vue";
import Footer from "@/components/Footer.vue";

//import FirebaseService from '"../services/FirebaseService"';

export default {
  name: "Home",
  components: {
    // Header,
    Landing,
    Footer
  }
};
</script>
