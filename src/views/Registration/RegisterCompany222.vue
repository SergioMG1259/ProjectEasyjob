<template>
  <v-container fluid class="container-s2">
    <v-row justify="center">
      <v-col cols="7">
        <v-row justify="center">
          <h2 class="title">EasyJobs</h2>
        </v-row>
        <v-row justify="center">
          <h5>Registro de empresas</h5>
        </v-row>
        <v-row justify="center">
          <v-col cols="8">
            <v-text-field
              dark
              class="inputs-login"
              label="Name"
              hide-details="auto"
              v-model="name"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="8">
            <v-text-field
              dark
              class="inputs-login"
              label="Email"
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
          <v-col cols="8">
            <v-textarea
              dark
              outlined
              name="input-7-4"
              label="Description"
              v-model="description"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="8">
            <v-text-field
              dark
              class="inputs-login"
              name="input-7-4"
              label="Imagen de perfil"
              v-model="imgCompany"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col class="d-flex justify-center">
            <v-btn
              dark
              @click="registerUser"
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
              >Iniciar sesión</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//import router from "@/router";
import AccessCompanyServices from "@/core/services/access-company.services";
import router from "@/router";

export default {
  name: "RegisterPostulant",
  data: () => ({
    name: "",
    lastName: "",
    email: "",
    password: "",
    nameGithub: "",
    description: "",
    imgCompany: "",
  }),
  components: {},
  methods: {
    registerUser() {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
        description: this.description,
        imgCompany: this.imgCompany,
      };
      console.log(data);
      AccessCompanyServices.registration(data).then((response) => {
        console.log(response);
        AccessCompanyServices.get_authorization({
          Email: this.email,
          Password: this.password,
        }).then((response2) => {
          if (response2.data != "") {
            //  this.$emit('set_id',response.data.id)
            //this.$store.state.postulant.id=response.data.id
            sessionStorage.setItem("id", response2.data.id);
            sessionStorage.setItem("token", response2.data.token);
            router.push(`/profile-company/${response2.data.id}`);
          }
        });
      });
      /* AccessPostulantServices.registration(data).then(response=>{
        console.log(response)
        AccessPostulantServices.get_authorization({Email:this.email,Password:this.password}).then(response2=>{
          if(response2.data!=""){
            //  this.$emit('set_id',response.data.id)
            //this.$store.state.postulant.id=response.data.id
            sessionStorage.setItem("id",response2.data.id)
            sessionStorage.setItem("token",response2.data.token)
            router.push(`/profile-postulant/${response2.data.id}`)
          }
        })
      })*/
      /* if (
           this.user != "" &&
           this.email != "" &&
           this.password != "" &&
           this.rpassword != "" &&
           this.password == this.rpassword
       ) {
         this.$router.push("/");
       }*/
    },
  },
};
</script>
<style scoped>
h5 {
  color: white;
}
.container-s2 {
  height: 100% !important;
  display: flex;
  align-items: center;
  background-image: linear-gradient(
    to right bottom,
    #051937,
    #38245a,
    #77216c,
    #b70767,
    #eb124b
  ) !important;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  width: 100%;
  padding-top: 40px;
  height: 100vh;
}

.row {
  justify-content: center;
}
.v-input__slot {
  padding: 3px !important;
}
.title {
  font-family: "Pacifico", cursive;
  height: 72px;
  font-size: 2pc;
  color: white !important;
  text-align: center;
}
</style>