<template>
  <div class="home">
    <drizzle-account />
     <drizzle-contract contractName="fightGame" method="GetAllPlayers" />
     <drizzle-contract-form contractName="fightGame" method="CreatePlayer" :methodArgs="{from: activeAccount, gas: 3000000}" />
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
  }
};
</script>
