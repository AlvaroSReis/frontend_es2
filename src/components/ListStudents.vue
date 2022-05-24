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
      :search="search">
      <template v-slot:item="row">
          <tr>
            <td>{{row.item.nome}}</td>
            <td>{{row.item.matricula}}</td>
            <td>{{row.item.email}}</td>
            <td>
                <v-btn class="mx-2" dark small color="red" @click="onButtonClick(row.item)">
                    X
                </v-btn>
            </td>
          </tr>
      </template>

   
    </v-data-table>
    
  </v-card>
</template>

<script>
  export default {
    name: 'ListStudents',
    methods: {
        delete(item) {
            this.items = this.items.filter((d) => d.id !== item.id);
        },
    },
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
          { text: 'Matricula', value: 'matricula', width: "1%" },
          { text: 'Email', value: 'email', width: "1%" },

        ],
        Nomes: [
          {
              nome: 'João Brofresto Castanhola Caldo',
              matricula: '00000000000000',
              email: 'castantaTeste@gmail.com'
          },
          {
              nome: 'Cláudio de Câna',
              matricula: '13912099999',
              email: '56161@gmail.com'
          },
          {
              nome: 'DDDDDDDA AAAAAAAA',
              matricula: '13912099999',
              email: '5641641@gmail.com'
          },
          {
              nome: 'BBBBBBB BBBBBBB',
              matricula: '13912099999',
              email: '5641641@gmail.com'
          },
          {
              nome: 'CCCCCCC CCCCCCC',
              matricula: '13912099999',
              email: '5641641@gmail.com'
          },
        ],
      }
    },
  }
</script>