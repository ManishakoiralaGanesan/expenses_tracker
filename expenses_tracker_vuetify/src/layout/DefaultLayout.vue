<template>
  <v-app class="app">
    <v-navigation-drawer
      v-model="drawer"
      app
      width="400"
      color="grey lighten-3"
    >
      <v-navigation-drawer v-model="drawer" absolute mini-variant>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/women/75.jpg"></v-img>
        </v-list-item-avatar>
        <v-list v-for="item in items" :key="item.icon">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-sheet color="grey lighten-3" height="128" width="100%"></v-sheet>
      <Catagory />
    </v-navigation-drawer>
    <v-navigation-drawer app clipped right width="600">
      <MonthlyOverview />
      <ExpensesByCatagory />
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
</style>
