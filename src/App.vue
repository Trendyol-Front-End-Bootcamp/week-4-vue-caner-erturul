<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/TheNavbar";
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
@font-face {
  font-family: "StarWars";
  src: local("StarWars"), url(assets/fonts/STARWARS.otf) format("truetype");
}
* {
  font-family: "StarWars";
}
body {
  background: url("./assets/img/background-image.jpg");
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: white;
}
</style>
