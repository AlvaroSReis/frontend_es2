<template>
  <v-app>
    <v-main>
      <v-card width="500" class="mx-auto mt-9">
        <v-card-title>Login</v-card-title>
        <v-card-text>
          <v-text-field v-model="form.username" label="Usuário" prepend-icon="mdi-account-circle"/>
          <v-text-field 
          v-model="form.password"
          label="Senha" 
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"/>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="info" to ='/RegisterPage'> Cadastro</v-btn>
          <v-btn color="info" to ='/RegisterProfessorPage'> Cadastro Professor</v-btn>
          <v-btn color="info" @click="onCreatePost()">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-main>
  </v-app>
</template>
<script>

import api from '@/services/api.js';
//import axios from 'axios'

export default {
    name: 'LoginPage',
  data()
  {
    return{
      showPassword:false,
      token: '',
      form: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    async onCreatePost(){
      try { 
        await this.axios.post(
          api + '/login/', this.form
          ).then((response) => {
        this.token = response
        this.$router.push({path:'/StudentPage'})
      }) 
    } catch (e) {
      console.log(e)
    }
    }
  }
}
</script>