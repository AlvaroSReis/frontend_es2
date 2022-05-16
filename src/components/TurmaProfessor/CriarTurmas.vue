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
          :items="turmas"
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
          <v-text-field
            label="Nome da turma"
            value="Engenharia de Software Turma 2"
            type="text"
          ></v-text-field>
          <span class="text-caption grey--text text--darken-1">
            Selecione o nome da turma
          </span>
        </v-card-text>

        <v-card-text>
          <v-text-field
            label="Periodo"
            value="2022.1"
            type="text"
          ></v-text-field>
          <span class="text-caption grey--text text--darken-1">
            Selecione um periodo
          </span>
        </v-card-text>

        
        
      </v-window-item>

      <v-window-item :value="3">
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
        :disabled="step === 3"
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
      turmas: ["Engenharia de Software", "Programação Paralela e Concorrente", "Programação Imperativa"]
    }),

    computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Selecionar a disciplina'
          case 2: return 'Detalhes da turma'
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