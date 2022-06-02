<template>
  <div id="container">
    <v-row>
      <v-col v-for="(item, index) in items" :key="index">
        <v-card
          class="mx-auto"
          max-width="400"
          align="center"
          @click="lists(item)"
        >
          <v-btn
            color="purple"
            fab
            top
            absolute
            :style="{ left: '50%', transform: 'translateX(-50%)' }"
            ><v-icon color="white" size="40"> {{ item.icon }}</v-icon></v-btn
          >
          <v-card-title>{{ item.title }}</v-card-title
          ><v-divider></v-divider>

          <div id="title">
            <v-card-text class="display-1">Rs.{{ item.subtitle }}</v-card-text>
          </div>
          <v-divider></v-divider>
          <v-card-subtitle>{{ item.text }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="20" v-if="hide">
        <v-card max-width="1000px" height="300" class="mt-16 ml-8 pa-6">
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="close" color="red white--text ">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-actions>

          <v-card-title>{{ details.title }}</v-card-title>
          <v-card-subtitle>{{ details.subtitle }}</v-card-subtitle>
          <v-card-content>
            <v-card-text
              >{{ details.date }}<br />
              {{ details.amount }}
            </v-card-text>
          </v-card-content>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "dashboard-card",
  data() {
    return {
      valueDeterminate: 50,
      hide: false,
      items: [
        {
          text: "Total Income",
          title: "Income",
          subtitle: 3000,
          icon: " mdi-arrow-down-bold",
        },

        {
          text: "Total Expenses",
          title: "Expenses",
          subtitle: 6000,
          icon: " mdi mdi-arrow-up-bold",
          percentage: true,
        },
        {
          text: "Total Savings",
          title: "Savings",
          subtitle: 10000,
          icon: " mdi-cash-multiple",
        },
      ],

      details: {
        title: "",
        subtitle: "",
        catagory: "",
        date: "",
        amount: "",
      },
    };
  },
  //props: ["item", "change"],
  computed: {
    style() {
      return "border-left: 4px solid " + this.item.color + ";";
    },
  },
  methods: {
    lists(item) {
      if (item.title == "Income") {
        (this.details.title = item.title), (this.details.subtitle = "Salary");
        (this.details.date = "May 1,2021"), (this.details.amount = "10000");
        this.hide = true;
      } else if (item.title == "Expenses") {
        (this.details.title = item.title), (this.details.subtitle = "Amazon");
        (this.details.date = "May 1,2021"), (this.details.amount = "1000");
        this.hide = true;
      } else if (item.title == "Savings") {
        (this.details.title = item.title),
          (this.details.subtitle = "Share Market");
        (this.details.date = "May 1,2021"), (this.details.amount = "4000");
        this.hide = true;
      }
    },
    close() {
      this.hide = false;
    },
  },
};
</script>
<style scoped>
.v-card {
  align-content: center;
  justify-content: center;
  border-right: 10px solid blue;
}

#title {
  padding-top: 15px;

  padding-right: 0%;
  font-size: 100px;
}
#container {
  margin-top: 80px;
}
</style>