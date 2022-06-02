<template>
  <v-app class="app" style="background: #fad25a">
    <v-navigation-drawer
      v-model="drawer"
      class="ma-6"
      height="95.5%"
      app
      :mini-variant.sync="mini"
    >
      <v-list-item>
        <v-list-item-title class="title">Budject Tracker</v-list-item-title>
        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>
      <v-list-item
        class="item"
        v-for="item in items"
        :key="item.title"
        :to="item.link"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content class="">{{ item.title }} </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>

    <v-app-bar app color="" class="ma-6">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>{{ page }}</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-avatar>
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
    </v-app-bar>
    <v-content
      class="content ma-6 white"
      style="
         {
          `height: 100%`;
        }
      "
    >
      <slot />
    </v-content>
  </v-app>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      drawer: true,
      mini: true,
      drawer1: true,
      dialog: true,
      items: [
        {
          icon: "mdi-view-dashboard",
          title: "Dashboard",
          link: "/",
        },
        {
          icon: "mdi-store",
          title: "Transactions",
          link: "/tranasaction-history",
        },
        {
          icon: "mdi-store",
          title: "Reports",
          link: "/reports",
        },
        {
          icon: "mdi-store",
          title: "Catagories",
          link: "/catagories",
        },
        {
          icon: "mdi-store",
          title: "Form CCi",
          link: "/formcci",
        },
      ],
      catagories: [
        { catagory: "Food & Beverage" },
        { catagory: "Auto Mobile" },
        { catagory: "House hold" },
        { catagory: "Groceries" },
        { catagory: "Utilities" },
      ],
      accounts: ["On Hand", "Hdfc bank", "Kvb bank", "Baroda Bank"],
    };
  },
  computed: {
    page() {
      const route = this.$route.matched[0];
      return route.name;
    },
  },
};
</script>
<style scoped>
.item:hover {
}
</style>