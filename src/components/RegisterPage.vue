<template>
  <v-app>
    <v-content>
      <v-card width="500" class="mx-auto mt-9">
        <v-card-title>Cadastro</v-card-title>
        <v-card-text>
          <v-text-field label="Nome" prepend-icon="mdi-account-circle"/>
          <v-text-field label="Matricula" prepend-icon="mdi-school"/>
          <v-text-field label="Email" prepend-icon="mdi-email"/>
          <v-text-field 
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
          <v-btn color="info"> Cadastrar </v-btn>
        </v-card-actions>
      </v-card>
    </v-content>
  </v-app>
</template>
<script>
export default {
    name: 'RegisterPage',
  data()
  {
    return{
      showPassword:false
    }
  }
}
</script>