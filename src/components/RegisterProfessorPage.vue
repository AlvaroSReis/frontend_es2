<template>
  <v-app>
    <v-content>
      <v-card width="500" class="mx-auto mt-9">
        <v-card-title>Cadastro Professor</v-card-title>
        <v-card-text>
          <v-text-field v-model="form.nome" label="Nome" prepend-icon="mdi-account-circle"/>
          <v-text-field v-model="form.email" label="Email" prepend-icon="mdi-email"/>
          <v-text-field 
          v-model="form.senha"
          label="Senha" 
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"/>
          <v-text-field 
          label="Confirmar Senha" 
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"/>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="info" @click="onCreatePost()"> Cadastrar </v-btn>
        </v-card-actions>
      </v-card>
    </v-content>
  </v-app>
</template>
<script>
import api from '@/services/api.js';

export default {
    name: 'RegisterProfessorPage',
  data()
  {
    return{
      showPassword:false,
      form: {
        nome: '',
        senha: '',
        email: '',
      }
    }
  },
  methods: {
    async onCreatePost(){
      try { 
        await this.axios.post(
          api + '/professores/', this.form
          ).then(() => {
          
        this.$router.push({path:'/'})
      }) 
    } catch (e) {
      console.log(e)
    }
    }
  }
  
}
</script>