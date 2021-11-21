<template>
  <v-dialog width="600px" v-model="dialog" persistent>
    <v-card >
      <div class="scroll">
        <div v-for="item in announcements" :key="item.id" class="card-an">
            <v-card-title >
              {{item.title}}
            </v-card-title>
            <v-card-subtitle>{{ item.requiredSpecialty+" | "+item.requiredExperience }}</v-card-subtitle>
            <v-card-subtitle>{{ item.date }}</v-card-subtitle>
          <v-btn @click="add_invitation(item.id,item.title)" color="purple" class="btn-invitation">Invitar</v-btn>
        </div>
      </div>
      <v-card-actions>
        <v-btn @click="close_dialog_invitation"  color="red" class="btn-invitation">Cerrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import AnnouncementApiServices from '@/core/services/announcement-api.services'
import NotificationsApiServices from '@/core/services/notifications-api.services'
import ProfileCompanyServices from '@/core/services/profile-company-api.services'
export default {
  name: "invitation",
  props:["dialog"],
  data:()=>({
    announcements:[],
    postulantId:0,
    companyId:0,
    namecompany:"",
    serviceNotification:null,
    serviceCompany:null,
    serviceAnnouncement:null
  }),
  methods:{

    get_announcements(value,valuePostulant){
      this.serviceCompany=new ProfileCompanyServices(sessionStorage.getItem("token"))
      this.serviceNotification=new NotificationsApiServices(sessionStorage.getItem("token"))
      this.serviceAnnouncement=new AnnouncementApiServices(sessionStorage.getItem("token"))
      this.postulantId=valuePostulant
      console.log("post"+this.postulantId)
      this.companyId=value
      this.serviceCompany.get_profile_company_by_id(this.companyId).then(response=>{
        this.namecompany=response.data.name
      })
      this.serviceAnnouncement.get_announcement_by_company(value).then(response=>{
        this.announcements=response.data
        console.log(this.announcements.length)
      })
    },
    close_dialog_invitation(){
      this.$emit('close_dialog_invitation',false)
    },
    add_invitation(announcement_id,title){
        this.add(this.postulantId,this.companyId,announcement_id,title)
    },
    add(postulant_id,company_id,announcement_id,title){
      const data={

        postulantId:postulant_id,
        companyId:company_id,
        nameCompany:this.namecompany,
        announcementId:announcement_id,
        titleAnnouncement:title,
        type:"invitation",
        message:"invitacion"
      }
      this.serviceNotification.add_notification(data).then(response=>{console.log(response)})
    }
  },
  created() {
    //this.id_evidence=this.$route.params.idp
    //this.get_evidence_to_edit()
    this.$parent.$on('get_invitation',this.get_announcements)
  }
}
</script>

<style scoped>
.scroll{
  max-height: 350px;
  overflow-y: auto;
  overflow-y: scroll;
}
.card-an{
  margin-bottom: 20px;
  border: solid 1px purple;
  border-radius: 10px;
}
.btn-invitation{
  color: white;
}
</style>