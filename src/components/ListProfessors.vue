<template>
  <v-card>
    <v-card-title>
      Alunos
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
        hide-default-footer
      :headers="headers"
      :items="Nomes"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
  export default {
    name: 'ListProfessors',
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Nome',
            align: 'start',
            sortable: false,
            value: 'nome',
          },
          { text: 'Matricula', value: 'matricula' },
          { text: 'Email', value: 'email' },

        ],
        Nomes: [
          {
              nome: 'AAAAAAAA AAAAAAAA',
              matricula: '1391201381399999',
              email: '5641641@gmail.com'
          },
          {
              nome: 'OOOOOOA OOOOOO',
              matricula: '1391201381399999',
              email: '5641641@gmail.com'
          },
          {
              nome: 'DDDDDDD AAAAAAAA',
              matricula: '1391201381399999',
              email: '5641641@gmail.com'
          },
          {
              nome: 'BBBBBBB BBBBBBB',
              matricula: '1391201381399999',
              email: '5641641@gmail.com'
          },
          {
              nome: 'CCCCCCC CCCCCCC',
              matricula: '1391201381399999',
              email: '5641641@gmail.com'
          },
        ],
      }
    },
  }
</script>