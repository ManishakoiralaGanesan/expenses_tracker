<template>
  <v-list-item>
    <v-list-item-content>
      <v-row>
        <v-col>
          <v-list-item-title>{{ transactions.catagory }}</v-list-item-title>
          <v-list-item-subtitle>{{ transactions.date }}</v-list-item-subtitle>
        </v-col>
        <v-col>
          <v-list-item-subtitle>{{ transactions.amount }}</v-list-item-subtitle>
        </v-col>
      </v-row>
    </v-list-item-content>
  </v-list-item>
</template>
<script>
export default {
  props: {
    transactions: {
      type: Object,
    },
  },
};
</script>
