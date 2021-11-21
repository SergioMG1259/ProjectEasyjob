<template>
  <v-container>
    <div class="scroll">
      <div v-for="item in list_notifications" :key="item.id">
        <v-card class="card-an" v-if="item.type=='declined'">
          <v-card-title class="title-notification-declined">
            Lo sentimos, tu postulación no fue aceptada. Sigue intentando
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="2">
                <v-img src="https://img.freepik.com/vector-gratis/aficionados-al-futbol-amigos-viendo-television-sofa-partido-futbol-apoyo-gente-ilustracion-vectorial_53562-5175.jpg?size=626&ext=jpg" width="120px" height="100px">

                </v-img>
              </v-col>
              <v-col cols="6">
                <p style="font-size: 20px">
                  La empresa {{item.nameCompany}} no acepto su solicitud, porfavor revise el feedback para mejorar sus habilidades
                </p>
              </v-col>
              <v-col cols="3">
                <v-btn @click="Open_dialog_view_feedback(item.message)" class="btn-info" color="purple">Ver feedback</v-btn>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>

          </v-card-actions>

        </v-card>
        <v-card v-else-if="item.type=='accepted'" class="card-an">
          <v-card-title class="title-notification">
            Felicitaciones, fuiste aceptado para el empleo
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="2">
               <v-img src="https://www.kindpng.com/picc/m/485-4855027_imagenes-checks-fondo-transparente-hd-png-download.png" width="100px" height="80px">
               </v-img>
              </v-col>
              <v-col cols="6" style="font-size: 20px">
                <p>
                  La empresa {{item.nameCompany}} aceptó que trabajes con ellos
                </p>
              </v-col>
              <v-col cols="3">
                <v-btn @click="to_postulation(id_postulant_notification,item.announcementId)" class="btn-info" color="purple">Ver mas</v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <v-card v-else-if="item.type=='invitation'" class="card-an">
          <v-card-title class="title-notification">
            Invitación
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="2">
                <v-img src="https://cdn-blog.mdirector.com/wp-content/uploads/2018/07/email.png" width="100px" height="90px" ></v-img>
              </v-col>
              <v-col cols="6">
                <p style="font-size: 20px">
                  La empresa {{item.nameCompany}} te invitó a postular a su anuncio
                </p>
              </v-col>
              <v-col cols="3">
                <v-btn @click="to_postulation(id_postulant_notification,item.announcementId)" class="btn-info" color="purple">Ver mas</v-btn>
              </v-col>
            </v-row>

          </v-card-text>
        </v-card>
      </div>
    </div>
    <ViewFeedback :dialog="dialog_feedback" @close_feedback="Close_dialog_view_feedback"></ViewFeedback>
  </v-container>
</template>

<script>
import NotificationsApiServices from '@/core/services/notifications-api.services'
import ViewFeedback from '@/components/Notifications/View-feedback'
import router from "@/router";
export default {
  name: "Notifications-postulant",
  components: {ViewFeedback},
  data:()=>({
    list_notifications:[],
    id_postulant_notification:0,
    name_company:"",
    dialog_feedback:false,
    serviceNotification:null
  }),
  methods:{
    get_notifications(){
      this.serviceNotification.get_by_postulant(this.id_postulant_notification).then(response=>{
        this.list_notifications=response.data
      })
    },
    Open_dialog_view_feedback(value){
      this.$emit('get_feedback_view',value)
      this.dialog_feedback=true
    },
    Close_dialog_view_feedback(value){
      this.dialog_feedback=value
    },
    to_postulation(n,m){
      router.push(`/postulant/${n}/announcement-postulation/${m}`)
    }
  },

  mounted() {
    this.serviceNotification=new NotificationsApiServices(sessionStorage.getItem("token"))
    this.id_postulant_notification=this.$route.params.id
    this.get_notifications()
  }
}
</script>

<style scoped>
.scroll{
  max-height: 450px;
  overflow-y: auto;
  overflow-y: scroll;
}
.card-an{
  margin-bottom: 20px;
  border: solid 1px purple;
  border-radius: 10px;
}
.btn-info{
  color: white;
}
.title-notification{
  color: purple;
}
.title-notification-declined{
  color: red;
}
</style>