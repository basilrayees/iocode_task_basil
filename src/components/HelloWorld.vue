<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-img contain height="300" src="@/assets/logo.svg" />


      <h1 class="text-h2 font-weight-bold">HELLO</h1>

      <div class="py-14" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn :to="{ name: 'login' }" min-width="164" class="bg-primary" variant="text">


            Sign in
          </v-btn>
        </v-col>


        <v-col cols="auto">
          <v-btn min-width="164" class="bg-grey" :to="{ name: 'register' }" variant="text">


            Sign Up
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
  //
</script>
