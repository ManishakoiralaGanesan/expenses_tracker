<template>
  <div id="container">
    <v-data-table :headers="headers" :items="transactions" class="cell-height">
      <template v-slot:top color="white">
        <v-card color="grey lighten-4" flat tile>
          <v-toolbar flat>
            <v-toolbar-title class="headline font-weight-medium"
              >Daily Transactions</v-toolbar-title
            >

            <v-spacer></v-spacer>
            <v-icon class="calendar">mdi-calendar</v-icon>
            <v-btn dark @click.stop="dialog = true" icon>
              <v-icon color="white">mdi-plus</v-icon>
            </v-btn>
          </v-toolbar>
        </v-card>

        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <newTransaction :close="close" :save="save" :list="list" />
          </v-card>
        </v-dialog>

        <v-card class="cal" max-width="1000%">
          <v-row>
            <v-col
              >Total Expenses <br />
              {{ totExpenses }}</v-col
            >
            <v-col
              >Total Income <br />
              {{ totIncome }}
            </v-col>
            <v-col class="net">Net <br />{{ totNet }}</v-col>
          </v-row>
        </v-card>
      </template>

      <tr v-for="item in items" :key="item.id">
        <td>{{ item.description }}</td>
        <td>{{ item.amount }}</td>
      </tr>
    </v-data-table>
  </div>
</template>
<script>
import newTransaction from "../components/newTransaction.vue";
export default {
  components: {
    newTransaction,
  },
  data() {
    return {
      headers: [
        { text: "", value: "description" },
        { text: "", value: "amount" },
      ],
      noData: "",
      dialog: false,
      totIncome: 0,
      totExpenses: 0,
      totNet: 0,

      transactions: [],
      list: { type: "", description: "", amount: 0 },
    };
  },
  mounted() {
    this.noData = "No Data";
  },
  methods: {
    close() {
      this.dialog = false;
    },
    save() {
      this.transactions.push(this.list);
      this.list = {};
      this.close();
    },
  },
};
</script>
<style scoped>
.cal {
  margin: 30px;
  padding: 30px;
}
#container {
  margin-top: 10%;
  margin-right: 10%;
  margin-left: 5%;
}
.v-btn {
  background-color: blue;
}
.calendar {
  padding-right: 4%;
}
</style>