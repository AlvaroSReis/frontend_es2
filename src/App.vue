<template>
  <div id="app">
    <v-app>
    <v-app-bar app dark color="info">
      <v-toolbar-title>Gerencia de Projetos</v-toolbar-title>
      <v-spacer/>
      <v-btn depressed color="info" to='/'>Home</v-btn> 
      <v-btn depressed color="info" to='/CreateGroup'>Grupos</v-btn> 
      <v-btn depressed color="info" to='/ListStudents'>ListStudents</v-btn> 
      <v-btn depressed color="info" to ='/Turma/CriarTurmas'>Criar Turma</v-btn>
      <v-btn depressed color="info" to ='/Turma/AdicionarAlunos'>Adicionar Alunos</v-btn>
      <v-btn depressed color="info" to='/'>Home</v-btn> 

      <v-btn color="info" to ='/UserPage'>Teste</v-btn>
      
    </v-app-bar>
    
    <router-view/>
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


