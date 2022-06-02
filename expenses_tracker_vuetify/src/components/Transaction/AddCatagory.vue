<template>
  <v-card class="pa-5">
    <v-card-title>New Catagory</v-card-title>
    <v-card-content>
      <v-radio-group v-model="item.type" @change="selectedParent">
        <v-radio label="Income" value="Income"></v-radio>
        <v-radio label="Expenses" value="Expenses"></v-radio>
        <v-radio label="Investment" value="Investment"></v-radio>
      </v-radio-group>
      <v-text-field label="Catagory Name" v-model="item.catagory">
      </v-text-field>
      <v-select
        label="Select Parengt Catagory"
        v-model="item.parent"
        :items="parentCatagories"
        name="catagory"
        item-text="name"
      >
      </v-select>
    </v-card-content>
    <v-card-actions>
      <v-btn @click="cancel">Cancel</v-btn>
      <v-btn @click="add">Add</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    parent: {
      type: Array,
    },
    item: {
      type: Object,
    },
    cancel: {
      type: Function,
    },
    add: {
      type: Function,
    },
  },
  data() {
    return {
      parentCatagories: [],
    };
  },
  methods: {
    selectedParent() {
      console.log(this.item.type);
      this.parentCatagories = this.parent.filter(
        (p) => p.type === this.item.type
      );
      console.log(this.parentCatagories);
    },
  },
};
</script>
