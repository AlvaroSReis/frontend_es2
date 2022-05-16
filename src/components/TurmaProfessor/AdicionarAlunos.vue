<template>
    <div class="container">
        <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-card-title class="text-h6 font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar
        color="primary lighten-2"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
          <v-select
          :items="disciplinas"
          label="Selecione uma disciplina"
          outlined
        ></v-select>
          <span class="text-caption grey--text text--darken-1">
            Seleciona a disciplina que a nova turma corresponde
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
          <v-card-text>
          <v-select
          :items="turmas"
          label="Selecione uma turma"
          outlined
        ></v-select>
          <span class="text-caption grey--text text--darken-1">
            Seleciona a turma que deseja adicionar novos alunos
          </span>
        </v-card-text>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="3">
        <v-card-text>
          <v-card-text>
          <v-file-input
            small-chips
            label="Arquivo com matricula dos alunos"
            ></v-file-input>
          <span class="text-caption grey--text text--darken-1">
            Adicione o arquivo .txt com a matricula dos alunos
          </span>
        </v-card-text>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="4">
        <div class="pa-4 text-center">
          <v-img
            class="mb-4"
            contain
            height="128"
            src="../../assets/ok_verified.png"
          ></v-img>
          <h3 class="text-h6 font-weight-light mb-2">
            Turma Cadastrada
          </h3>
          <span class="text-caption grey--text">Cadastro de turma realizado com sucesso</span>
        </div>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        :disabled="step === 1"
        text
        @click="step--"
        color ="info"
      >
        Voltar
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="step === 4"
        color="primary"
        depressed
        @click="step++"
      >
        Proximo
      </v-btn>
    </v-card-actions>
  </v-card>
    </div>
</template>

<script>
  export default {
    name: 'CriarTurmas',
    data: () => ({
      step: 1,
      disciplinas: ["Engenharia de Software", "Programação Paralela e Concorrente", "Programação Imperativa"],
      turmas: ["ES2 - T01 2022.1", "ES2 - T02 2022.1"]
    }),

    computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Selecionar a disciplina'
          case 2: return 'Selecionar a turma'
          case 3: return 'Inserir Alunos'
          default: return 'Cadastrado com sucesso'
        }
      },
    },
  }
</script>

<style scoped>

  .container {
    padding-top: 10%;
  }

</style>