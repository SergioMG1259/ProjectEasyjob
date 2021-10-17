<template>
  <div>
    <h2>{{title_project}}</h2>
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

  </div>
</template>

<script>
import ProjectApiServices from '@/core/services/project-api.services'
export default {
  name: "View-project-postulant",
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
    get_project_to_visit(){
      ProjectApiServices.get_project_by_id(this.id_proyect).then(response=>{
        this.data_project=response.data
        this.title_project=this.data_project.title
        this.description_project=this.data_project.description
        this.img_project=this.data_project.img_project
        this.link_github=this.data_project.linktogithub
      }).catch(e=>{
        console.log(e);
      })
    }
  },
  mounted() {
    this.id_proyect=this.$route.params.ida
    this.get_project_to_visit()
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