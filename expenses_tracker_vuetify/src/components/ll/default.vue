<template>
  <div id="a">
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
        </v-navigation-drawer>

        <v-sheet color="grey lighten-3" height="128" width="100%"></v-sheet>
        <Catagory />
      </v-navigation-drawer>
      <v-navigation-drawer app clipped right width="600">
        <div class="card1">
          <MonthlyOverview />
        </div>
        <div class="card2">
          <ExpensesByCatagory />
        </div>
      </v-navigation-drawer>

      <v-main>
        <TransactionHistory />
        <TransactionList />
      </v-main>
    </v-app>
  </div>
</template>
<script>
import TransactionHistory from "../components/TransactionHistory.vue";
import Catagory from "../components/Catagories.vue";
import MonthlyOverview from "../components/MonthlyOverview.vue";
import ExpensesByCatagory from "../components/ExpensesByCatagory.vue";
import TransactionList from "../components/Transaction/TransactionList";

export default {
  components: {
    TransactionHistory,
    Catagory,
    MonthlyOverview,
    ExpensesByCatagory,
    TransactionList,
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
.card1 {
  margin-top: 46%;
}
</style>
