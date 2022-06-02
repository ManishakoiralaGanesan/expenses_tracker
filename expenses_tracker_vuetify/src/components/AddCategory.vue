<template>
  <v-container>
    <v-card-text><h1>Add Catagory</h1></v-card-text>

    <v-form>
      <v-text-field
        v-model="list.catagory"
        label="Catagory"
        outlined
      ></v-text-field>

      <v-btn class="primary" @click="save">Add</v-btn>
    </v-form>
  </v-container>
</template>
<script >
export default {
  props: ["list", "save"],
};
</script>
