<template>
  <v-container>
    <v-card-title>Expenses By Catagory</v-card-title>
    <v-card class="mx-auto" max-width="444" min-height="70">
      <v-row>
        <v-col>
          <v-progress-circular
            :value="amount"
            :size="50"
            class="ml-5 mt-4"
            color="purple"
          ></v-progress-circular>
        </v-col>
        <v-col
          >Food & Beverage <br />
          $120.56
        </v-col>
        <v-col>47%</v-col>
      </v-row>
    </v-card>

    <v-card class="mx-auto" max-width="444" min-height="70">
      <v-row>
        <v-col>
          <v-progress-circular
            :value="20"
            :size="50"
            class="ml-5 mt-4"
            color="purple"
          ></v-progress-circular>
        </v-col>
        <v-col
          >Food & Beverage <br />
          $120.56
        </v-col>
        <v-col> 47%</v-col>
      </v-row>
    </v-card>
    <v-card class="mx-auto" max-width="444" min-height="70">
      <v-row>
        <v-col>
          <v-progress-circular
            :value="amount"
            :size="50"
            class="ml-5 mt-4"
            color="purple"
          ></v-progress-circular>
        </v-col>
        <v-col
          >Food & Beverage <br />
          $120.56
        </v-col>
        <v-col>47%</v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<style scoped>
.v-card {
  margin-top: 5%;
}
</style>
<script>
export default {
  data() {
    return {
      amount: "47%",
    };
  },
};
</script>
