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
        <v-btn @click="send_feedback">Save</v-btn>
        <v-btn @click="close_this_dialog">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>



<style scoped>
.form-edit{
  width: 320px;
  align-content: center;
  margin-left: 12%;
  margin-top: 10px;
}
</style>
