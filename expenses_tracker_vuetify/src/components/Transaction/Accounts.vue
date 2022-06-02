<template>
  <v-list shaped>
    <v-list-item-group color="primary">
      <v-subheader>Accounts</v-subheader>
      <v-list-item v-for="(item, index) in accounts" :key="index">
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>
<script>
export default {
  data() {
    return {
      accounts: ["On Hand", "Hdfc bank", "Kvb bank", "Baroda Bank"],
    };
  },
};
</script>