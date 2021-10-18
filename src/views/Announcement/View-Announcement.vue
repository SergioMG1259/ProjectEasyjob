<template>
<div>
  <v-btn @click="back">regresar</v-btn>
  <v-btn @click="Open_dialog_edit">editar</v-btn>
  <h1>{{title_announcement}}</h1>
  <h2>{{specialty_announcement+" | "+experience_announcement}}</h2>
  <h4>{{date_announcement}}</h4>

  <v-row>
    <h3 class="data-announcement">{{salary_announcement+" | "+type_money_announcement}}</h3>
  </v-row>
  <v-row class="data-announcement">
    <v-switch v-model="visible_announcement" label="Visible" >
    </v-switch>
    <p class="data-announcement">{{description_announcement}}</p>
  </v-row>
  <v-row class="data-announcement">
    <h2>Postulantes</h2>

  </v-row>
  <v-row>
    <v-col>
      <div class="scroll">
        <div v-for="item in postulants_by_announcement" :key="item.id">
          <v-card class="card-an">
            <v-img :src="item.img_postulant" max-width="100px"></v-img>
            <v-card-title>{{item.name+" "+item.lastname}}</v-card-title>
            <v-card-actions>
              <v-btn @click="view_postulant(item.id)">Ver perfil</v-btn>
              <v-btn >Aceptar</v-btn>
              <v-btn @click="Open_dialog_feedback">Declinar</v-btn>
            </v-card-actions>
          </v-card>
          <Feedback :dialog="dialog_feedback" :postulant="item.id" @close_dialog="Close_dialog_feedback"></Feedback>
        </div>
      </div>
    </v-col>

  </v-row>

  <Edit_announcement :dialog="dialog_edit" @close_dialog="Close_dialog_edit"></Edit_announcement>
</div>
</template>

<script>
import AnnouncementApiServices from '@/core/services/announcement-api.services'
import router from "@/router";
import Edit_announcement from "@/components/Announcement/edit-announcement/edit_announcement";
import ApplicationsApiServices from '@/core/services/applications-api.services'
import Feedback from "@/components/Notifications/Feedback";
export default {
  name: "View-Announcement",
  components: {Feedback, Edit_announcement},
  data:()=>({
    id_company:0,
    id_announcement:0,
    postulants_by_announcement:[],
    data_announcement:null,
    title_announcement:" ",
    specialty_announcement:" ",
    experience_announcement:" ",
    description_announcement:" ",
    salary_announcement:0,
    type_money_announcement:" ",
    visible_announcement:false,
    date_announcement:" ",
    dialog_edit:false,
    dialog_feedback:false,
  }),
  methods:{
    back(){
      const data={
        visible:this.visible_announcement
      }
      AnnouncementApiServices.edit_announcement(this.id_announcement,data).then(response=>{
        console.log(response)
      })
      router.push(`/my-announcements/${this.id_company}`)
    },
    get_announcement(){
      AnnouncementApiServices.get_announcement_by_id(this.id_announcement).then(response=>{
        this.data_announcement=response.data
        this.title_announcement=this.data_announcement.title
        this.description_announcement=this.data_announcement.description
        this.specialty_announcement=this.data_announcement.required_specialty
        this.experience_announcement=this.data_announcement.required_experience
        this.salary_announcement=this.data_announcement.salary
        this.type_money_announcement=this.data_announcement.type_money
        this.visible_announcement=this.data_announcement.visible
        this.date_announcement=this.data_announcement.date
      })
      this.get_postulants()
    },
    Open_dialog_edit(){
      this.dialog_edit=true
    },
    Close_dialog_edit(value){
      this.dialog_edit=value
    },
    get_postulants(){
      ApplicationsApiServices.get_applications_by_id_announcement(this.id_announcement).then(response=>{
        let applications=response.data
        for(let i=0;i<applications.length;i++){
          ApplicationsApiServices.get_postulant_application(applications[i].postulant_id).then(response=>{
            let data=response.data
            this.postulants_by_announcement.push(data)
            console.log(this.postulants_by_announcement)
          })
        }
      })
    },
    view_postulant(idpostulant){
      router.push(`/company/${this.id_company}/view-profile-postulant/${idpostulant}`)
    },
    Open_dialog_feedback(){
      this.dialog_feedback=true
    },
    Close_dialog_feedback(value){
      this.dialog_feedback=value
    }
  },
  mounted() {
    this.id_company=this.$route.params.id
    this.id_announcement=this.$route.params.ida
    this.get_announcement()
  }
}
</script>


