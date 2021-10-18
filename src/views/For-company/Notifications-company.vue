<template>
  <v-container>
    <h1>Mis notificaciones</h1>
    <div class="scroll">
      <div v-for="item in list_my_notifications" :key="item.id">
        <v-card class="card-an" >
          <v-card-title>
            Tu anuncio+{{item.title_announcement}}+recibió un nuevo postulante
          </v-card-title>
        </v-card>

      </div>
    </div>
  </v-container>
</template>

<script>
import AnnouncementApiServices from '@/core/services/announcement-api.services'
import router from "@/router";
export default {
  name: "Initiation-postulant",
  data:()=>({
    id_postulant_to_postulation:0,
    list_announcements:[],
    search:""
  }),
  methods:{
    get_list_announcement() {
      AnnouncementApiServices.get_all_not_practicing().then(response=>{
        this.list_announcements=response.data
        this.list_announcements.sort((a, b) => {
          let key1 = new Date(a.date);
          let key2 = new Date(b.date);
          if (key1 > key2) {
            return -1;
          } else if (key1 == key2) {
            return 0;
          } else {
            return 1;
          }
        })
      })
    },
    to_postulation(n,m){
      router.push(`/postulant/${n}/announcement-postulation/${m}`)
    }
  },
  computed:{
    announcements: function(){
      return this.list_announcements.filter((item) => {
        return item.required_specialty.toLowerCase().match(this.search.toLowerCase())||item.required_experience.toLowerCase().match(this.search.toLowerCase());
      })
    }
  },
  mounted() {
    this.id_postulant_to_postulation=this.$route.params.id
    this.get_list_announcement()
  }
}
</script>


<style scoped>
.card-an{
  margin-bottom: 20px;
  border: solid 1px purple;
  border-radius: 10px;
}
</style>
