<template>
  <div class="container">
    <v-dialog v-model="dialog" max-width="600px" transition="none">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="purple" dark v-bind="attrs" v-on="on">
          New Transaction
        </v-btn>
      </template>

      <NewTransaction
        :item="items"
        :types="types"
        :catagoryType="catagoryType"
        :selectedcatagory="selectcatagory"
        :save="saveItems"
        :reset="resetAll"
      />
    </v-dialog>

    <v-card max-width="1000px" outlined class="ma-9" color="grey lighten-3">
      <v-card-title class="title trancard"> Transaction History</v-card-title>

      <div class="trancard">
        <v-list-item>
          <v-list-item-content>
            <v-row>
              <v-col> Inflow </v-col>
              <v-col class="amount"> Rs.{{ inflow }}</v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-row>
              <v-col> Outflow </v-col>
              <v-col class="amount"> Rs.{{ outflow }} </v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
      </div>

      <div
        v-for="transactions in transactionList"
        :key="transactions.type"
        class="mt-6 pa-2 trancard"
      >
        <TransactionCard :transactions="transactions" />
      </div>
    </v-card>
  </div>
</template>
<script>
import NewTransaction from "./NewTransaction.vue";
import TransactionCard from "./TransactionCard.vue";
//import TransactionDetail from "./TransactionDetail.vue";
export default {
  components: {
    NewTransaction,
    TransactionCard,
    //TransactionDetail,
  },
  data() {
    return {
      types: [
        { text: "Expenses", id: 0 },
        { text: "Income", id: 1 },
      ],
      catagoryType: [
        {
          typeName: "Expenses",
          catagory: ["Food & Bevaerage", "Bills & Utilities"],
        },
        {
          typeName: "Income",
          catagory: ["salary", "interest"],
        },
      ],
      dialog: false,
      items: {
        type: -1,
        catagory: "",
        catagories: [],
        amount: 0,
        date: null,
        notes: "",
        menu: false,
      },
      inflow: 0,
      outflow: 0,
      totalIncome: 0,
      transactionList: [],
    };
  },

  methods: {
    selectcatagory() {
      this.items.catagory = "";
      console.log(this.items.type);
      this.items.catagories = this.catagoryType[this.items.type].catagory;
    },
    saveItems() {
      const list = {
        type: this.items.type,
        catagory: this.items.catagory,
        amount: this.items.amount,
        date: this.items.date,
        notes: this.items.notes,
      };

      this.calculateOutflow();
      this.transactionList.push(list);

      console.log(this.transactionList);
      this.items = {};
      this.dialog = false;
    },
    calculateOutflow() {
      if (this.items.type == 0) {
        //  console.log(amount);
        this.outflow += parseInt(this.items.amount);
      } else if (this.items.type == 1) {
        this.totalIncome += parseInt(this.items.amount);
      }
      this.calculateInflow();
    },
    calculateInflow() {
      this.inflow = this.totalIncome - this.outflow;
    },
    resetAll() {
      (this.items.type = ""),
        (this.items.catagory = ""),
        (this.items.amount = ""),
        (this.items.date = ""),
        (this.items.notes = "");
    },
  },
};
</script>
<style scoped>
.v-btn {
  margin-left: 70%;
  margin-top: 3%;
}
.amount {
  display: block;
  text-align: right;
  overflow: auto;
}

.trancard {
  background-color: white !important;
}
</style>

