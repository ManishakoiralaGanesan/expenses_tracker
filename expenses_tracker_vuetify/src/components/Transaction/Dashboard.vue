<template>
  <div id="container">
    <div id="accounts" class="ma-4">
      <Accounts />
      <Catagories />
    </div>
    <div id="reports" class="ma-4">
      <TransactionList />
    </div>
    <div id="Overview" class="ma-4">
      <MonthlyOverview /> <ExpensesByCatagory />
    </div>
  </div>
</template>
<script>
import MonthlyOverview from "./MonthlyOverview.vue";
import TransactionList from "./TransactionList.vue";
//import Reports from "./Reports.vue";
import Accounts from "./Accounts.vue";
import Catagories from "./../Catagories.vue";
import ExpensesByCatagory from "../ExpensesByCatagory.vue";

export default {
  components: {
    TransactionList,
    ExpensesByCatagory,
    MonthlyOverview,
    Accounts,
    Catagories,
  },
  data() {
    return {
      hide: true,
    };
  },
};
</script>
<style scoped>
#container {
  display: flex;
}
#accounts {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 15%;
  border-right: 1px solid rgb(200, 196, 196);
}
#reports {
  position: absolute;
  top: 0;
  left: 15%;
  bottom: 0;
  width: 60%;
}
#Overview {
  position: absolute;
  right: 0;
  width: 25%;
  height: 96%;
  border-left: 1px solid rgb(200, 196, 196);
}
</style>
