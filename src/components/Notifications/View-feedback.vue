<template>
  <!-- Esto es para que un postulante vea el feedback -->
  <v-dialog width="600px" v-model="dialog" persistent>
    <v-card>
      <v-card-text class="form-edit">
        {{feedback_text}}
      </v-card-text>
      <v-card-actions class="form-edit">
        <v-btn @click="close_this_dialog">Cerrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "View-feedback",
  props:["dialog","feedback"],
  data:()=>({
    feedback_text:"s"
  }),
  methods:{
    close_this_dialog(){
      this.$emit('close_feedback',false)
    }
  },
  mounted() {
    this.feedback_text=this.feedback
  }
}
</script>

<style scoped>

</style>
