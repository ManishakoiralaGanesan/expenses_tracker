<template>
  <v-list shaped>
    <v-list-item-group color="primary">
      <v-subheader>Catagories</v-subheader>
      <v-list-item v-for="(item, i) in items" :key="i">
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.catagory"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-btn text @click="additems" @click.stop="dialog = true" color="red"
        ><v-icon>mdi-plus</v-icon> Add more</v-btn
      >
    </v-list-item-group>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <AddCatagory :list="catagorylist" :save="addItems" />
      </v-card>
    </v-dialog>
  </v-list>
</template>
<script>
import AddCatagory from "../components/AddCategory";
export default {
  components: {
    AddCatagory,
  },
  data: () => ({
    dialog: false,
    catagorylist: { catagory: "" },
    items: [
      { catagory: "Food & Beverage" },
      { catagory: "Auto Mobile" },
      { catagory: "House hold" },
      { catagory: "Groceries" },
      { catagory: "Utilities" },
    ],
  }),
  methods: {
    addItems() {
      this.items.push(this.catagorylist);
      this.catagorylist = {};
      this.dialog = false;
    },
  },
};
</script>
<style scoped>
</style>