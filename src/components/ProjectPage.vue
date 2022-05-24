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
          <v-text-field
            label="Nome do grupo"
            value="Os desesperados"
          ></v-text-field>
          <span class="text-caption grey--text text--darken-1">
            Entre com um nome para o grupo do trabalho
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
          <v-text-field
            label="Password"
            type="password"
          ></v-text-field>
          <v-text-field
            label="Confirm Password"
            type="password"
          ></v-text-field>
          <span class="text-caption grey--text text--darken-1">
            Entre com a senha para sua conta
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="3">
        <v-card-text>
           <v-select
          :items= "projetos"
          label="Outlined style"
          outlined
        ></v-select>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="4">
        <div class="pa-4 text-center">
          <v-img
            class="mb-4"
            contain
            height="128"
            src="https://cdn.vuetifyjs.com/images/logos/v.svg"
          ></v-img>
          <h3 class="text-h6 font-weight-light mb-2">
            Welcome to Vuetify
          </h3>
          <span class="text-caption grey--text">Thanks for signing up!</span>
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
    name: 'CreateGroup',
    data: () => ({
      step: 1,
        projetos:[ 
        "projeto 1",
        "foguete invertido errado", 
        "carroça do desespero"
      ]
    }),

    computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Criar grupo'
          case 2: return 'Convidar participantes'
          case 3: return 'Escolher projeto'
          default: return 'Account created'
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