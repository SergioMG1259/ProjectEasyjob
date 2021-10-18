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



<style scoped>
.card-an{
  margin-bottom: 20px;
  border: solid 1px purple;
  border-radius: 10px;
}
</style>
