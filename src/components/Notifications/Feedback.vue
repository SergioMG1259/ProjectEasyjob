<template>
  <v-dialog width="600px" v-model="dialog" persistent>
    <v-card>
      <div class="container-form">
        <v-textarea
            label="Escriba feedback" class="form-edit" v-model="feedback"
        >
        </v-textarea>
      </div>
      <v-card-actions>
        <v-btn @click="close_this_dialog" color="red" class="btn-feedback">Cancel</v-btn>
        <v-btn @click="send_feedback" color="purple" class="btn-feedback">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import NotificationsApiServices from '@/core/services/notifications-api.services'
import ApplicationsApiServices from '@/core/services/applications-api.services'
export default {
  name: "Feedback",
  props:["dialog","postulant"],
  data:()=>({
    feedback:"",
    id_announcement_notification:0,
    id_company_notification:0,
    id_notification:1,
    name_company_notification: "",
    title_announcement_notification:"",
    serviceNotification:null,
    serviceApplication:null
  }),
  methods:{
    close_this_dialog(){
      this.$emit('close_dialog',false)
    },
    get_company_name() {
      this.serviceNotification.get_company_notification(this.id_company_notification).then(response=>{
        let data=response.data
        this.name_company_notification=data.name
        console.log(this.name_company_notification)
      })

    },
    get_announcement_name(){
      this.serviceNotification.get_announcement_notification(this.id_announcement_notification).then(response=>{
        let data_a=response.data
        this.title_announcement_notification=data_a.title
      })
    },
    delete_application_declined() {
      let id_applications
      this.serviceApplication.get_applications_by_id_announcement(this.id_announcement_notification).then(response=>{

        let application_by_announcement=response.data
        for(let i=0;i<application_by_announcement.length;i++){
          if(application_by_announcement[i].postulantId==this.postulant){
            id_applications=application_by_announcement[i].id
          }
        }
        this.serviceApplication.delete_application(id_applications)

      })

    },
    send_feedback(){

        const data={
          postulantId:this.postulant,
          companyId:this.id_company_notification,
          nameCompany:this.name_company_notification,
          announcementId:this.id_announcement_notification,
          titleAnnouncement: this.title_announcement_notification,
          type:"declined",
          message:this.feedback
        }
        console.log(data.id)
      this.serviceNotification.add_notification(data).then(response=>{
          console.log(response)
          this.delete_application_declined()
          this.close_this_dialog()
        })
    }
  },
  mounted() {
    this.serviceNotification=new NotificationsApiServices(sessionStorage.getItem("token"))
    this.serviceApplication=new ApplicationsApiServices(sessionStorage.getItem("token"))
    this.id_company_notification=this.$route.params.id
    this.id_announcement_notification=this.$route.params.ida
    this.get_company_name()
    this.get_announcement_name()
  }
}
</script>

<style scoped>
.form-edit{
  width: 320px;
  align-content: center;
  margin-left: 12%;
  margin-top: 10px;
}
.btn-feedback{
  color: white;
}
</style>