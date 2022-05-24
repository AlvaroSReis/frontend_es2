<template>
  <v-card elevation="0">
    <v-card-title>
      Tarefas
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
            <td>{{row.item.descricao}}</td>
            <td>{{row.item.data}}</td>
            <td>{{row.item.hora}}</td>
            <td>
                <v-btn class="mx-2" dark small color="blue" @click="onButtonClick(row.item)">
                    <v-icon> mdi-auto-fix</v-icon>
                </v-btn>
            </td>
            <td>
                <v-btn class="mx-2" dark small color="red" @click="onButtonClick(row.item)">
                    <v-icon> mdi-clipboard-text-off</v-icon>
                </v-btn>
            </td>
          </tr>
      </template>

   
    </v-data-table>
    <v-card class="text-center">
    <v-btn color="info"> Adcionar tarefa <v-icon>mdi-plus-circle-outline</v-icon></v-btn>
    </v-card>
    <v-footer/>
  </v-card>
  
</template>

<script>
  export default {
    name: 'ListTaskStudents',
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
          { text: 'Descrição', value: 'descricao' },
          { text: 'Data', value: 'data', width: "1%" },
          { text: 'Hora', value: 'hora', width: "1%"}

        ],
        Nomes: [
          {
              nome: 'Tarefa 1',
              descricao: 'Descrição de tarefa',
              data: '30/01/2022',
              hora: '23:59:59',
          },
          {
              nome: 'Tarefa 2',
              descricao: 'Descrição de tarefa',
              data: '30/01/2022',
              hora: '23:59:59',
          },
                    {
              nome: 'Tarefa 3',
              descricao: 'Descrição de tarefa',
              data: '30/01/2022',
              hora: '23:59:59',
          },
        ],
      }
    },
  }
</script>