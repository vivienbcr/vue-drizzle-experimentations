<template>
  <div class="home">
    <v-container>
      {{ activeAccount }}
      <!-- TODO: V-if drizzle initialized -->
      <v-col class="d-flex" cols="12" sm="6">
        <!-- <v-select :items="items" label="Outlined style" outlined></v-select> -->
        <v-btn @click="changeAccount">Click</v-btn>
      </v-col>
    </v-container>
    <!-- {{ activeAccount }}
    <drizzle-account />
    <drizzle-contract contractName="fightGame" method="GetAllPlayers" />
    <drizzle-contract-form
      contractName="fightGame"
      method="CreatePlayer"
      :methodArgs="req"
    /> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: {},
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      activeAccount: "accounts/activeAccount"
    })
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    changeAccount() {
      console.log("hello");
    }
  }
};
</script>
