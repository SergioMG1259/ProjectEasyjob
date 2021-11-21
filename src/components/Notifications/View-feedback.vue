<template>
  <v-dialog width="620px" v-model="dialog" persistent>
    <v-card>
      <v-row>
        <v-col>
          <h2>Feedback</h2>
        </v-col>

      </v-row>
      <v-row>
        <v-col>
          <p>
            {{feedback_text}}
          </p>
        </v-col>
      </v-row>

      <v-card-actions class="form-edit">
        <v-btn @click="close_this_dialog" color="red" class="btn-feedback">Cerrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "View-feedback",
  props:["dialog"],
  data:()=>({
    feedback_text:""
  }),
  methods:{
    close_this_dialog(){
      this.$emit('close_feedback',false)
    },
    get_feedback(feedback){
      this.feedback_text=feedback
    }
  },
  mounted() {

  },
  created() {
    //this.id_evidence=this.$route.params.idp
    //this.get_evidence_to_edit()
    this.$parent.$on('get_feedback_view',this.get_feedback)
  }
}
</script>

<style scoped>
.btn-feedback{
  color: white;
}
</style>