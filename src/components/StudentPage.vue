<template>
  <v-container>
    <v-card class="text-center" height="100%">
       <v-avatar>
      <img
        src="https://picsum.photos/id/11/500/300"
        size="122"
      >
    </v-avatar>
      <v-card-text class="text-center">
        <h1>Dados do Usuário</h1>
        <p />
        <h2>Nome: {{ form.name }}</h2>
        <p />
        <h2>Matricula: {{ form.matricula }}</h2>
        <p />
        <h2>Email: {{ form.email }}</h2>
      </v-card-text>
      <v-btn color="info"> Alterar Email </v-btn>
      <p />
      <v-btn color="info"> Alterar Senha </v-btn>
    </v-card>
    <v-footer />
  </v-container>
</template>

<script>
export default {
  name: "StudentPage",
  data() {
    return {
      form: {
        name: "João Brofresto Castanhola Caldo",
        matricula: "00000000000000",
        email: "castantaTeste@gmail.com",
      },
    };
  },
};
</script>
