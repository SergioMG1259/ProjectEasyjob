<!--<template>
  <v-app class="container-s2">
    <v-row justify="center">
      <v-col cols="7">
        <v-row justify="center">
          <h2 class="title">EasyJobs</h2>
        </v-row>
        <v-row justify="center">
          <h5>Registro de postulantes</h5>
        </v-row>
        <v-row justify="center">
          <v-col cols="8">
            <v-text-field
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
                class="inputs-login"
                label="Last Name"
                hide-details="auto"
                v-model="lastName"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="8">
            <v-text-field
                class="inputs-login"
                label="Github Nickname"
                hide-details="auto"
                v-model="nameGithub"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="8">
            <v-text-field
                class="inputs-login"
                label="Email"
                hide-details="auto"
                type="email"
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
          <v-col cols="8">
            <v-textarea
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
                class="inputs-login"
                name="input-7-4"
                label="Imagen de perfil"
                v-model="imPostulant"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="8">
            <v-select
                class="form-edit"
                dense
                label="Especialidad"
                :items="specialties"
                v-model="mySpecialty"
                return-object
            >
            </v-select>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="8">
            <v-select
                class="form-edit"
                dense
                label="Experiencia"
                :items="experiences"
                v-model="myExperience"
                return-object
            ></v-select>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col class="d-flex justify-center">
            <v-btn @click="registerUser" color="#9b59b6" elevation="4" large
            >Registrarse</v-btn
            >
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col class="d-flex justify-center">
            <v-btn to="/login-postulant" color="#9b59b6" elevation="4" large
            >Iniciar sesión</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-app>
</template>-->
<template>
  <v-app fluid class="container-s2">
    <v-row justify="center">
      <v-col cols="7">
        <v-row justify="center">
          <h2 class="title">EasyJobs</h2>
        </v-row>
        <v-row justify="center">
          <h5>Registro de postulantes</h5>
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
                label="Last Name"
                hide-details="auto"
                v-model="lastName"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="8">
            <v-text-field
                dark
                class="inputs-login"
                label="Github Nickname"
                hide-details="auto"
                v-model="nameGithub"
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
                type="email"
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
                v-model="imPostulant"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="8">
            <v-select
                dark
                class="form-edit"
                dense
                label="Especialidad"
                :items="specialties"
                v-model="mySpecialty"
                return-object
            >
            </v-select>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="8">
            <v-select
                dark
                class="form-edit"
                dense
                label="Experiencia"
                :items="experiences"
                v-model="myExperience"
                return-object
            ></v-select>
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
            <v-btn
                dark
                to="/login-postulant"
                color="#9b59b6"
                elevation="4"
                large
            >Iniciar sesión</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import AccessPostulantServices from '@/core/services/access-postulant.services'
import router from "@/router";
export default {

  name: "RegisterPostulant",
  data: () => ({
    name: "",
    lastName:"",
    email: "",
    password: "",
    nameGithub:"",
    mySpecialty: '',
    myExperience: "",
    description:"",
    imPostulant:"",
    specialties:['Ciencia de datos','Desarrollo movil','Diseño gráfico','Programación','Desarrollo web','Ux design'],
    experiences:['Practicante','Junior','Semi-Senior','Senior'],
  }),
  components: {},
  methods: {
    async registerUser() {
      const data={
        name:this.name,
        lastName:this.lastName,
        email:this.email,
        password:this.password,
        nameGithub: this.nameGithub,
        mySpecialty: this.mySpecialty,
        myExperience: this.myExperience,
        description:this.description,
        imgPostulant: this.imPostulant
      }

      AccessPostulantServices.registration(data).then(response=>{
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
      })
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
<style>
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