<template>
  <v-card class="mx-auto mt-5 pa-5">
    <v-card-title>
      <h1 class="display-1">Add Transaction</h1>
    </v-card-title>
    <v-form class="formDesign">
      <v-select :items="items" label="Type" outlined v-model="type"> </v-select>
      <v-select :items="catogories" label="Catagory" outlined> </v-select>
      <v-text-field
        v-model="list.description"
        label="Description"
        required
        outlined
      ></v-text-field>
      <v-text-field
        v-model="list.amount"
        label="Amount"
        required
        outlined
      ></v-text-field>
    </v-form>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn class="primary" @click="calculateValue">Add</v-btn>
      <v-btn dark class="grey" @click="close">Reset</v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: ["close", "save", "list"],
  data() {
    return {
      type: "",
      items: ["Income", "Expenses", "Investment"],
      catogories: [
        "Food & Beverage",
        "Auto Mobile",
        "House hold",
        "Groceries",
        "Utilities",
      ],
    };
  },
  methods: {
    /*selectSubItems() {
      this.subitems = [];
      if (this.type == "Income") {
        const list = [
          { value: "emi", text: "Emi" },
          { value: "interest", text: "Interest" },
        ];
        this.subitems = list.map((listitem) => {
          return {
            value: listitem.value,
            text: listitem.text,
          };
        });
      } else if (this.type == "Expenses") {
        const list = [
          { value: "rent", text: "Rent" },
          { value: "grocessary", text: "Grocessary" },
        ];
        this.subitems = list.map((listitem) => {
          return {
            value: listitem.value,
            text: listitem.text,
          };
        });
      } else if (this.type == "Investment") {
        const list = [
          { value: "gold", text: "Gold" },
          { value: "land", text: "Land" },
        ];
        this.subitems = list.map((listitem) => {
          return {
            value: listitem.value,
            text: listitem.text,
          };
        });
      }
    },*/
    /* calculateValue() {
      if (this.type == "Income") {
        this.totValue = this.totValue + parseInt(this.list.amount);
      }
      console.log(this.totValue);
    },*/
  },
};
</script>
<style scoped>
#formDesign {
  margin: 10px;
  width: 50px;
}
</style>