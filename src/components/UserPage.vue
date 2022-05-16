<template>
<div class="container">
  <v-card
    height="100%"
    width="100%"
  >
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Josefa da Silva Santos
          </v-list-item-title>
          <v-list-item-subtitle>
            Professor
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon to='/' >{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-card/>
  </v-card>
</div>
</template>
<script>
import CreateGroupVue from './CreateGroup.vue'

//import CreateGroupVue from './CreateGroup.vue'
  export default {
    name: "UserPage",
    data () {
      return {
        items: [
          { title: 'Turmas', icon: 'mdi-google-classroom' },
          { title: 'Disciplinas', icon: 'mdi-book-edit-outline' },
          { title: 'Configurações', icon: 'mdi-cog' },
        ],
        right: CreateGroupVue,
      }
    },
  }
</script>

<style scoped>
  .container {
    align-self: right;
  }

</style>