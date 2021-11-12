<template>
  <v-container class="container-s">
    <v-row justify="center">
      <v-col cols="7">
        <v-row justify="center">
          <h1>EasyJobs</h1>
        </v-row>
        <v-row justify="center">
          <v-col cols="8">
            <v-text-field
              class="inputs-login"
              label="Usuario"
              hide-details="auto"
              v-model="user"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="8">
            <v-text-field
              class="inputs-login"
              label="Contraseña"
              hide-details="auto"
              type="password"
              v-model="password"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col class="d-flex justify-center">
            <v-btn color="#9b59b6" elevation="4" large @click="validateLogin()"
              >Iniciar Sesión</v-btn
            >
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col class="d-flex justify-center">
            <v-btn to="/register" color="#9b59b6" elevation="4" large
              >Registrarse</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>



<script>
export default {
  name: "Login",
  data: () => ({
    password: "",
    user: "",
  }),
};
</script>

<style scoped>
.container-s {
  height: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
}
.inputs-login input {
  color: white !important;
}
.v-text-field input {
  color: white !important;
}
.row {
  justify-content: center;
}
</style>