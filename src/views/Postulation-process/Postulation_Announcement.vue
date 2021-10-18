<template>
 <div>
   <v-btn @click="back">regresar</v-btn>
   <h1>{{ title }}</h1>
   <h2>{{specialty+" | "+experience}}</h2>
   <h4>{{date}}</h4>
   <v-row class="data-announcement">
     <h2>{{salary+" | "+type_money}}</h2>
   </v-row>
   <v-row class="data-announcement">
     <p>{{description}}</p>
   </v-row>
   <v-btn @click="postulate">{{ action }}</v-btn>
 </div>
</template>



<style scoped>
.data-announcement{
  margin-left: 20px;
  margin-top: 10px;
  margin-right: 10px;
}
</style>
