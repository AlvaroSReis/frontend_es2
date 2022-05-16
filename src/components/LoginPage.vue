<template>
  <v-app>
    <v-content>
      <v-card width="500" class="mx-auto mt-9">
        <v-card-title>Login</v-card-title>
        <v-card-text>
          <v-text-field v-model="username" label="Usuário" prepend-icon="mdi-account-circle"/>
          <v-text-field 
          v-model="password"
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
          <v-btn color="info">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-content>
  </v-app>
</template>
<script>

import api from '@/services/api.js';

export default {
    name: 'LoginPage',
  data()
  {
    return{
      username: '',
      password: '',
      showPassword:false
    }
  },
  methods: {
    onCreatePost(){
      api.post(
        '/login',
        {username:'', password:''}
      ).then((response) => {
        console.log(response)
      })
    }
  }
}
</script>