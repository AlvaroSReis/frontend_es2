<template>
  <div class="container">
    <v-card>
      <v-navigation-drawer permanent>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Applications
            </v-list-item-title>
            <v-list-item-subtitle> subtext </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.link"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-content>
        <create-group/>
      </v-content>
    </v-card>
    
  </div>
</template>



<script>

import CreateGroup from './CreateGroup.vue'

export default {
  name: "UserPage",
  components: {
    CreateGroup
  },
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", link: "/" },
        { title: "Photos", icon: "mdi-image", link: "/" },
        { title: "About", icon: "mdi-help-box", link: "/" },
      ],
      right: null,
    };
  },
};
</script>