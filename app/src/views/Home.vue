<template>
  <div class="home">
    <v-container>
      {{ activeAccount }} // {{ activeBalance }}
      <!-- TODO: V-if drizzle initialized -->
      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          v-model="pickedAccount"
          :items="arrListAcc"
          label="Outlined style"
          outlined
        ></v-select>
        <v-btn @click="changeAccount">Click</v-btn>
      </v-col>
    </v-container>
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
      activeAccount: "accounts/activeAccount",
      activeBalance: "accounts/activeBalance",
      listAccounts: "listAccounts"
    }),
    arrListAcc: function() {
      return Object.keys(this.listAccounts);
    }
  },
  data() {
    return {
      pickedAccount: ""
    };
  },
  mounted() {
    // init pickedAccount from current state account
    this.pickedAccount = this.activeAccount;
  },
  methods: {
    changeAccount() {
      this.$store.dispatch("accounts/SET_ACCOUNTS", {
        activeAccount: this.pickedAccount,
        accountBalances: this.listAccounts
      });
    }
  }
};
</script>
