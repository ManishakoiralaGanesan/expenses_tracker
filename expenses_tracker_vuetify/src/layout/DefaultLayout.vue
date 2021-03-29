<template>
  <v-app class="app">
    <v-navigation-drawer
      v-model="drawer"
      app
      width="400"
      color="grey lighten-3"
    >
      <v-navigation-drawer v-model="drawer" absolute mini-variant>
        <v-divider></v-divider>
        <v-list v-for="item in items" :key="item.icon">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>

        <v-avatar color="red">
          <span class="white--text headline">CJ</span>
        </v-avatar>
      </v-navigation-drawer>

      <v-sheet color="grey lighten-3" height="128" width="100%"></v-sheet>
      <Catagory />
    </v-navigation-drawer>
    <v-navigation-drawer app clipped right width="600">
      <v-card outlined class="card1">
        <MonthlyOverview />
      </v-card>
      <v-card outlined class="card2">
        <ExpensesByCatagory />
      </v-card>
    </v-navigation-drawer>

    <v-main>
      <TransactionHistory />
    </v-main>
  </v-app>
</template>
<script>
import TransactionHistory from "../components/TransactionHistory.vue";
import Catagory from "../components/Catagories.vue";
import MonthlyOverview from "../components/MonthlyOverview.vue";
import ExpensesByCatagory from "../components/ExpensesByCatagory.vue";

export default {
  components: {
    TransactionHistory,
    Catagory,
    MonthlyOverview,
    ExpensesByCatagory,
  },
  data() {
    return {
      mini: true,
      drawer: true,
      nav: true,
      items: [
        {
          icon: "mdi-home",
        },
        { icon: "mdi-account" },
      ],
    };
  },
};
</script>
<style scoped>
.card2 {
  margin-top: 40%;
}
.card1 {
  margin-top: 20%;
}
</style>
