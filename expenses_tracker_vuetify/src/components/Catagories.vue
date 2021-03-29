<template>
  <v-card class="mx-auto" max-width="400" tile color="grey lighten-3" outlined>
    <v-list shaped>
      <v-list-item-group color="primary">
        <v-subheader>Catagories</v-subheader>
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-btn text @click="additems"><v-icon>mdi-plus</v-icon> Add more</v-btn>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    items: [
      { text: "Food & Beverage", icon: "" },
      { text: "Auto Mobile", icon: "" },
      { text: "House hold", icon: "" },
      { text: "Groceries", icon: "" },
      { text: "Utilities", icon: "" },
    ],
  }),
  methods: {
    addItems() {},
  },
};
</script>
<style scoped>
.v-btn {
  margin: 30px;
}
.v-subheader {
  margin-left: 40px;
  font-style: bold;
}
.v-card {
  padding: 40px;
}
</style>