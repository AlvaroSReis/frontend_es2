<template>
  <v-app>
    <v-app-bar app dark color="blue">
      <v-toolbar-title>ES2 Gerencia de Projetos</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-card width="500" class="mx-auto mt-9">
        <v-card-title>Login</v-card-title>
        <v-card-text>
          <v-text-field label="Usuário" prepend-icon="mdi-account-circle"/>
          <v-text-field 
          label="Senha" 
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"/>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="success" to ='/RegisterPage'> Cadastro</v-btn>
          <v-btn color="info">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-content>
  </v-app>
</template>
<script>
export default {
    name: 'LoginPage',
  data()
  {
    return{
      showPassword:false
    }
  }
}
</script>