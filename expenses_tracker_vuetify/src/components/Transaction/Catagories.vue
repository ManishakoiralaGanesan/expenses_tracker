<template>
  <div id="container">
    <v-card width="800px" class="ma-16">
      <v-dialog v-model="dialog" max-width="500px" persistent>
        <template v-slot:activator="{ on, attrs }">
          <v-btn id="add" color="primary" v-bind="attrs" v-on="on"
            >Add Catagory</v-btn
          >
        </template>
        <AddCatagory
          :parent="parentCatagory"
          :item="items"
          :cancel="cancel"
          :add="add"
        />
      </v-dialog>

      <v-tabs v-model="tab" centered>
        <v-tab v-for="(item, index) in types" :key="index">{{
          item.name
        }}</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="(item, index) in types" :key="index">
          <v-list v-if="item.name == 'Expenses'">
            <div v-for="(parent, index) in catagories" :key="index">
              <v-list-item
                v-if="parent.type == 'Expenses'"
                v-on:click="listDetails(parent)"
              >
                <v-list-item-content>
                  {{ parent.parent }}
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon right> {{ getIcon(parent) }}</v-icon>
                </v-list-item-icon>
              </v-list-item>
              <v-list-item
                v-for="(child, index) in parent.childcatagory"
                :key="index"
                v-show="parent.expanded"
              >
                <v-list-item-content class="menu-content">
                  <v-list-item-title>{{ child.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-list>
          <v-list v-if="item.name == 'Income'">
            <div v-for="(parent, index) in catagories" :key="index">
              <v-list-item
                v-if="parent.type == 'Income'"
                v-on:click="listDetails(parent)"
              >
                <v-list-item-content>
                  {{ parent.parent }}
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon right> {{ getIcon(parent) }}</v-icon>
                </v-list-item-icon>
              </v-list-item>
              <v-list-item
                v-for="(child, index) in parent.childcatagory"
                :key="index"
                v-show="parent.expanded"
              >
                <v-list-item-content class="menu-content">
                  <v-list-item-title>{{ child.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-list>
          <v-list v-if="item.name == 'Investment'">
            <div v-for="(parent, index) in catagories" :key="index">
              <v-list-item
                v-if="parent.type == 'Investment'"
                v-on:click="listDetails()"
              >
                <v-list-item-content>
                  {{ parent.parent }}
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon right> {{ getIcon(parent) }}</v-icon>
                </v-list-item-icon>
              </v-list-item>
              <v-list-item
                v-for="(child, index) in parent.childcatagory"
                :key="index"
                v-show="parent.expanded"
              >
                <v-list-item-content class="menu-content">
                  <v-list-item-title>{{ child.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-list>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
    <v-card width="800px" class="ma-16" v-if="showCard">
      <v-toolbar>
        <v-btn icon @click="close"><v-icon>mdi-close</v-icon></v-btn>
        <v-toolbar-title>Catagory Details</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn text color="red">Delete </v-btn>
        <v-btn text color="primary">Edit </v-btn>
      </v-toolbar>
      <v-card-title>{{ items.type }}</v-card-title>
      <v-card-subtitle>{{ items.parent }}</v-card-subtitle>
      <v-card-text>
        {{ items.catagory }}
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import AddCatagory from "./AddCatagory.vue";
export default {
  components: {
    AddCatagory,
  },
  data() {
    return {
      tab: null,
      showCard: false,

      dialog: false,
      types: [{ name: "Expenses" }, { name: "Income" }, { name: "Investment" }],
      parentCatagory: [
        {
          type: "Expenses",
          name: "Food & Beverage",
        },
        {
          type: "Income",
          name: "Salary",
        },
        {
          type: "Investment",
          name: "Gold",
        },
      ],
      catagories: [
        {
          type: "Expenses",
          parent: "Food & Beverage",
          expanded: false,

          childcatagory: [
            {
              title: "Restaurants",
            },
          ],
        },
        {
          type: "Income",
          parent: "Salary",
          expanded: false,
          childcatagory: [
            {
              title: "hai",
            },
          ],
        },
        {
          type: "Investment",
          parent: "Gold",
          expanded: false,
          childcatagory: [],
        },
      ],
      items: {
        type: "",
        catagory: "",
        parent: "",
      },
    };
  },
  methods: {
    getIcon(section) {
      if (section.expanded) {
        return "mdi-chevron-down";
      } else {
        return "mdi-chevron-right";
      }
    },
    cancel() {
      this.dialog = false;
    },
    add() {
      const item = {
        type: this.items.type,
        parent: this.items.catagory,
        expanded: false,
        childcatagory: [],
      };

      console.log(item);
      const child = {
        title: this.items.catagory,
      };
      const parent = {
        type: this.items.type,
        name: this.items.catagory,
      };
      if (this.items.parent == "") {
        console.log(this.items.parent, "hai");
        this.parentCatagory.push(parent);
        this.catagories.push(item);
      } else if (this.items.parent != "") {
        for (let i = 0; i < this.catagories.length; i++) {
          console.log("bncnv");
          if (
            this.catagories[i].parent == this.items.parent &&
            this.catagories[i].type == this.items.type
          ) {
            this.catagories[i].childcatagory.push(child);
            break;
          }
        }
      }
      this.clear();

      this.dialog = false;
    },
    clear() {
      (this.items.type = ""), (this.items.catagory = "");
      this.items.parent = "";
    },

    listDetails(parent) {
      parent.expanded = !parent.expanded;
      this.showCard = true;

      (this.items.type = parent.type),
        (this.items.parent = parent.parent),
        (this.items.catagory = parent.childcatagory.title);
    },
    func() {
      console.log("hai");
    },
    close() {
      this.showCard = false;
    },
  },
};
</script>
<style scoped>
.v-list {
  margin-left: 20%;
}
#add {
  margin: 5%;
  margin-left: 70%;
}
#container {
  display: flex;
}
</style>
