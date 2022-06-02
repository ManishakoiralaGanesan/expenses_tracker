<template>
  <div>
    <v-list v-if="item.name == 'Expenses'">
      <div v-for="(parent, index) in catagories" :key="index">
        <v-list-item
          v-if="parent.type == 'Expenses'"
          v-on:click="parent.expanded = !parent.expanded"
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
  </div>
</template>
