<!--<template>
  <v-container class="container-s">

    <v-row justify="center">
      <v-col cols="7">
        <v-row justify="center">
          <h2 class="title">EasyJobs</h2>

        </v-row>
        <v-row><h5>Postulantes</h5></v-row>
        <v-row justify="center">
          <v-col cols="8">
            <v-text-field
              class="inputs-login"
              label="email"
              hide-details="auto"
              v-model="email"
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
            <v-btn to="/register-postulant" color="#9b59b6" elevation="4" large
              >Registrarse</v-btn
            >
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col class="d-flex justify-center">
            <v-btn to="/login-company" color="#9b59b6" elevation="4" large
            >Iniciar sesión como Empresa</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>

  </v-container>
</template>-->
<template>
  <v-container fluid class="container-s">
    <v-row justify="center">
      <v-col cols="7">
        <v-row justify="center">
          <h2 class="title">EasyJobs</h2>
        </v-row>
        <v-row><h5 class="subtitle">Postulantes</h5></v-row>
        <v-row justify="center">
          <v-col cols="8">
            <v-text-field
                dark
                class="inputs-login"
                label="email"
                hide-details="auto"
                v-model="email"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="8">
            <v-text-field
                dark
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
            <v-btn
                dark
                color="#9b59b6"
                elevation="4"
                large
                @click="validateLogin()"
            >Iniciar Sesión</v-btn
            >
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col class="d-flex justify-center">
            <v-btn
                dark
                to="/register-postulant"
                color="#9b59b6"
                elevation="4"
                large
            >Registrarse</v-btn
            >
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col class="d-flex justify-center">
            <v-btn dark to="/login-company" color="#9b59b6" elevation="4" large
            >Iniciar sesión como Empresa</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>



<script>
import router from "@/router";
//import ProfilePostulantServices from '@/core/services/profile-postulant-api.services'
import AccessPostulantServices from '@/core/services/access-postulant.services'
export default {
  name: "Login",
  data: () => ({
    password: "",
    email: "",
  }),
  methods:{
    validateLogin(){
      AccessPostulantServices.get_authorization({Email:this.email,Password:this.password}).then(response=>{
        console.log(this.email+this.password)
        console.log(response.data.token)
        console.log(response)
        if(response.data!=""){
        //  this.$emit('set_id',response.data.id)
          //this.$store.state.postulant.id=response.data.id
          sessionStorage.setItem("id",response.data.id)
          sessionStorage.setItem("token",response.data.token)
          router.push(`/profile-postulant/${response.data.id}`)
        }
      })
    }
  }
};
</script>

<style scoped>
.container-s {
  background-image: linear-gradient(
      to right bottom,
      #051937,
      #38245a,
      #77216c,
      #b70767,
      #eb124b
  ) !important;
  height: 100vh !important;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  width: 100%;
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
.title {
  font-family: "Pacifico", cursive;
  height: 72px;
  font-size: 2pc;
  color: white;
  text-align: center;
}
.subtitle {
  font-family: "Pacifico", cursive;

  font-size: 1pc;
  color: white;
  text-align: center;
}
</style>