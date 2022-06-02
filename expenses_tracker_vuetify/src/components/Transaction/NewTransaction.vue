<template>
  <v-card max-width="600px" class="pa-5">
    <v-card-title class="justify-center title">New Transaction</v-card-title>
    <v-select
      outlined
      v-model="item.type"
      :items="types"
      item-text="text"
      item-value="id"
      @change="selectedcatagory"
      label="Select Type"
    >
    </v-select>
    <v-select
      outlined
      v-model="item.catagory"
      :items="item.catagories"
      label="Catagory"
    >
    </v-select>
    <v-text-field v-model="item.amount" label="Amount" outlined> </v-text-field>

    <v-menu
      ref="menu"
      v-model="item.menu"
      :close-on-content-click="false"
      :return-value.sync="date"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="item.date"
          label="Date"
          append-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
          outlined
        ></v-text-field>
      </template>
      <v-date-picker v-model="item.date" no-title scrollable>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
        <v-btn text color="primary"> OK </v-btn>
      </v-date-picker>
    </v-menu>

    <v-textarea v-model="item.notes" label="Description" outlined></v-textarea>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="save">Save</v-btn>
      <v-btn @click="reset">Reset</v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
export default {
  props: {
    item: {
      type: Object,
    },
    types: {
      type: Array,
    },
    catagoryType: {
      type: Array,
    },
    selectedcatagory: {
      type: Function,
    },
    save: {
      type: Function,
    },
    reset: {
      type: Function,
    },
  },
  data() {
    return {};
  },
  methods: {
    selectcatagory() {
      this.catagory = "";
      console.log(this.type);
      this.catagories = this.catagoryType[this.type].catagory;
    },
  },
};
</script>
