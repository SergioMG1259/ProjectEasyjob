<template>
<div>
  <v-btn @click="back">regresar</v-btn>
  <h2>{{title_project}}</h2>
  <v-btn @click="open_dialog_edit" >Editar</v-btn>
  <v-row>
    <v-col>
      <div>
        <v-img
            max-height="320"
            max-width="500"
            :src="img_project"
            class="img-project"
        >
        </v-img>
      </div>
    </v-col>
    <v-col>
      <p class="description">
        {{description_project}}
      </p>
      <v-btn :href="link_github" target="_blank">Git hub</v-btn>
    </v-col>
  </v-row>
  <edit-project :dialog="dialog_edit" @close_edit="close_dialog_edit" ></edit-project>
</div>
</template>

<script>
import router from "@/router";
import ProjectApiServices from '@/core/services/project-api.services'
import ProfilePostulantServices from '@/core/services/profile-postulant-api.services'
import EditProject from '@/components/Projects/edit-project/edit-project'

export default {
  name: "View-Project",
  components: {EditProject},
  data:()=>({
    id_postulant:0,
    id_proyect:0,
    data_project:null,
    title_project:" ",
    description_project:" ",
    img_project:" ",
    link_github:" ",

    dialog_edit:false,
    username_github:" ",

  }),
  methods:{
    back(){
      router.push(`/profile-postulant/${this.id_postulant}`)
    },
    get_project(){
      ProjectApiServices.get_project_by_id(this.id_proyect).then(response=>{
        this.data_project=response.data
        this.title_project=this.data_project.title
        this.description_project=this.data_project.description
        this.img_project=this.data_project.img_project
        this.link_github=this.data_project.linktogithub
      }).catch(e=>{
        console.log(e);
      })
    },
    get_repositories(){
      ProfilePostulantServices.get_profile_postulant_by_id(this.id_postulant).then(response=>{
        let postulant=response.data
        this.username_github=postulant.namegithub
      }).catch(e=>{
        console.log(e);
      })
    },
    open_dialog_edit(){
      this.dialog_edit=true
    },
    close_dialog_edit(value){
      this.dialog_edit=value
    }
  },
  mounted() {
    this.id_postulant=this.$route.params.id
    this.id_proyect=this.$route.params.idp
    this.get_project()
    this.get_repositories()
  }
}
</script>

<style scoped>
.img-project{
  margin-left: 10%;
}
.description{
  margin-right: 5%;
}
</style>