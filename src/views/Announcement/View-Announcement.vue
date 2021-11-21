<template>
<div>
  <v-row justify="start">
    <v-col cols="2">
      <v-btn @click="back" color="purple" class="btn-announcement">regresar</v-btn>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="5" class="d-flex">
      <h1>{{title_announcement}}</h1>
      <v-btn @click="Open_dialog_edit" color="purple" class="btn-announcement">editar</v-btn>
    </v-col>
  </v-row>
  <h2>{{specialty_announcement+" | "+experience_announcement}}</h2>
  <h4>{{date_announcement}}</h4>

  <v-row>
    <h3 class="data-announcement">{{salary_announcement+" | "+type_money_announcement}}</h3>
  </v-row>
  <v-row class="data-announcement">
    <!--<v-switch v-model="visible_announcement" label="Visible" >
    </v-switch>-->
    <p >{{description_announcement}}</p>
  </v-row>
  <v-row class="data-announcement">
    <h2>Postulantes</h2>

  </v-row>
  <v-row>
    <v-col>
      <div class="scroll">
        <div v-for="item in postulants_by_announcement" :key="item.id">
          <v-row justify="center">
            <v-col cols="11">
              <v-card class="card-an">
                <v-row>
                  <v-col cols="4" >
                    <v-img :src="item.postulant.imgPostulant" max-width="150px" style="margin:10px;margin-left:30px"></v-img>
                  </v-col>
                  <v-col cols="4" class="d-flex flex-column justify-center align-center">
                    <v-card-title>{{item.postulant.name+" "+item.postulant.lastName}}</v-card-title>
                    <v-btn @click="view_postulant(item.postulant.id)" v-bind:class="{'disable':item.state=='accepted'}" color="purple" class="btn-application">Ver perfil</v-btn>
                  </v-col>
                  <v-col cols="4" class="d-flex justify-space-around align-end">
                    <v-btn @click="Accepted(item.postulant.id)" v-bind:class="{'disable':item.state=='accepted'}" color="green" class="btn-application">Aceptar</v-btn>
                    <v-btn @click="Open_dialog_feedback" v-bind:class="{'disable':item.state=='accepted'}" color="red" class="btn-application">Declinar</v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>

          <Feedback :dialog="dialog_feedback" :postulant="item.postulant.id" @close_dialog="Close_dialog_feedback"></Feedback>
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
import NotificationsApiServices from "@/core/services/notifications-api.services";
import ProfileCompanyServices from "@/core/services/profile-company-api.services"
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
    name_company:"",
    serviceNotification:null,
    serviceApplication:null,
    serviceAnnouncement:null,
    serviceCompany:null
  }),
  methods:{
    back(){
      const data={
        visible:this.visible_announcement
      }
      this.serviceAnnouncement.edit_announcement(this.id_announcement,data).then(response=>{
        console.log(response)
      })
      router.push(`/my-announcements/${this.id_company}`)
    },
    get_announcement(){
      this.serviceAnnouncement.get_announcement_by_id(this.id_announcement).then(response=>{
        this.data_announcement=response.data
        this.title_announcement=this.data_announcement.title
        this.description_announcement=this.data_announcement.description
        this.specialty_announcement=this.data_announcement.requiredSpecialty
        this.experience_announcement=this.data_announcement.requiredExperience
        this.salary_announcement=this.data_announcement.salary
        this.type_money_announcement=this.data_announcement.typeMoney
        this.visible_announcement=this.data_announcement.visible
        this.date_announcement=this.data_announcement.date
        this.SearchCompany()
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

      this.serviceApplication.get_applications_by_id_announcement(this.id_announcement).then(response=>{
        let applications=response.data
        for(let i=0;i<applications.length;i++){
          this.serviceApplication.get_postulant_application(applications[i].postulantId).then(response=>{
            const data={
              postulant:response.data,
              state:applications[i].state
            }
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
    },
    SearchCompany(){
      this.serviceCompany.get_profile_company_by_id(this.id_company).then(response=>{
        this.name_company=response.data.name
      })
    },
    Accepted(id){

        const data={
          postulantId:id,
          companyId:this.id_company,
          nameCompany:this.name_company,
          announcementId:this.id_announcement,
          titleAnnouncement: this.title_announcement,
          type:"accepted",
          message:"aceptado"
        }
      this.serviceNotification.add_notification(data).then(response=>{
          console.log(response)

        this.serviceApplication.get_application_by_announcement_postulant(id,this.id_announcement).then(response=>{
            let getApplication=response.data
            let id_application=getApplication[0].id
            const data={
              state:"accepted"
            }
            console.log(id_application)
          this.serviceApplication.edit_application(id_application,data).then(response=>{
              console.log(response)
            })
          })
        })

    }
  },
  mounted() {
    this.serviceNotification=new NotificationsApiServices(sessionStorage.getItem("token"))
    this.serviceApplication=new ApplicationsApiServices(sessionStorage.getItem("token"))
    this.serviceAnnouncement=new AnnouncementApiServices(sessionStorage.getItem("token"))
    this.serviceCompany=new ProfileCompanyServices(sessionStorage.getItem("token"))
    this.id_company=this.$route.params.id
    this.id_announcement=this.$route.params.ida
    this.get_announcement()
  }
}
</script>

<style scoped>
.data-announcement{
  margin-left: 20px;
  margin-top: 10px;
  margin-right: 10px;
}
.scroll{
  max-height: 350px;
  overflow-y: auto;
  overflow-y: scroll;
  overflow-x: hidden;
}
.card-an{
  overflow-x: hidden;
  overflow-y: hidden;
  margin-bottom: 20px;
  border: solid 1px purple;
  border-radius: 10px;
}
.disable{
  display: none;
}
.btn-announcement{
  margin-left: 25px;
  color: white;
}
.btn-application{
  color: white;
}
</style>