<template>
  <v-dialog width="600px" v-model="dialog" persistent>
    <v-card >
      <div class="container-form">
        <v-text-field
            label="Nombre" class="form-edit" v-model="name_edit"
        ></v-text-field>
        <v-text-field
            label="Apellido" class="form-edit" v-model="lastname_edit"
        ></v-text-field>
        <v-text-field
            label="Imagen de perfil" class="form-edit" v-model="img_edit"
        ></v-text-field>
        <v-text-field
            label="Github Nickname" class="form-edit" v-model="name_github"
        ></v-text-field>
        <v-textarea
            label="Descripción" class="form-edit" v-model="description_edit"
        >
        </v-textarea>
        <v-select
            class="form-edit"
            dense
            label="Especialidad"
            :items="specialties"
            v-model="select_specialty"
            return-object
        >
        </v-select>
        <v-select
            class="form-edit"
            dense
            label="Experiencia"
            :items="experiences"
            v-model="select_experience"
            return-object
        >
        </v-select>
      </div>
      <v-card-actions>
        <v-btn @click="close_edit_dialog" color="red" class="btn-postulant">Cancel</v-btn>
        <v-btn @click="edit_profile" color="purple" class="btn-postulant">Save</v-btn>
      </v-card-actions>
    </v-card>

  </v-dialog>
</template>

<script>
import ProfilePostulantServices from '@/core/services/profile-postulant-api.services'
export default {
  name: "edit-postulant",
  props:["dialog"],
  data: () => ({
    id_edit:0,
    data_edit:null,
    name_edit:" ",
    lastname_edit:" ",
    img_edit:" ",
    description_edit:" ",

    specialties:['Ciencia de datos','Desarrollo movil','Diseño gráfico','Programación','Desarrollo web','Ux design'],
    select_specialty:' ',

    experiences:['Practicante','Junior','Semi-Senior','Senior'],
    select_experience:' ',
    name_github:"",
    email_postulant:"",
    password_postulant:"",
    service:null
  }),
  methods:{
    get_postulant(){
      this.service.get_profile_postulant_by_id(this.id_edit).then(response=>{
        this.data_edit=response.data
        this.name_edit=this.data_edit.name
        this.lastname_edit=this.data_edit.lastName
        this.img_edit=this.data_edit.imgPostulant
        this.description_edit=this.data_edit.description
        this.select_specialty=this.data_edit.mySpecialty
        this.select_experience=this.data_edit.myExperience
        this.name_github=this.data_edit.nameGithub
        this.email_postulant=this.data_edit.email
        this.password_postulant=this.data_edit.password
        console.log(response.data)
      })
    },
    close_edit_dialog(){
      this.name_edit=this.data_edit.name
      this.lastname_edit=this.data_edit.lastName
      this.img_edit=this.data_edit.imgPostulant
      this.description_edit=this.data_edit.description
      this.select_specialty=this.data_edit.mySpecialty
      this.select_experience=this.data_edit.myExperience
      this.$emit('close_edit',false)
    },

    edit_profile(){
      const data={
        name:this.name_edit,
        lastName:this.lastname_edit,
        email:this.email_postulant,
        password:this.password_postulant,
        description:this.description_edit,
        mySpecialty:this.select_specialty,
        myExperience:this.select_experience,
        nameGithub:this.name_github,
        imgPostulant:this.img_edit,
      }
      this.service.edit_profile_postulant(this.id_edit,data).then(response=>{
        console.log(response)
      })
      this.close_edit_dialog()
    }
  },
  mounted() {
    this.service=new ProfilePostulantServices(sessionStorage.getItem("token"))
    this.id_edit=this.$route.params.id
    this.get_postulant()
  }
}
</script>

<style scoped>
.container-form{
  /*min-width: 300px;*/

}
.form-edit{
  width: 320px;
  align-content: center;
  margin-left: 12%;
  margin-top: 10px;
}
.btn-postulant{
  color: white;
}
</style>