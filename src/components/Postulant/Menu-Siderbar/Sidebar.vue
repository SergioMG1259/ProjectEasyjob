<template>
  <div id="app">
    <v-app-bar app color="purple" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="white--text">
      </v-app-bar-nav-icon>
      <v-app-bar-title class="white--text">EasyJobs</v-app-bar-title>
      <v-spacer></v-spacer>

    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed app clipped temporary>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title><h2>EasyJobs</h2></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        <v-list-item v-for="item in items" :key="item.title">
          <v-list-item-content>
            <!--<v-list-item-title>{{ item.title }}</v-list-item-title>-->
            <v-btn
                link

                color="#7E0B9F"
                class="button-navigation"
                large
                block
                rounded
                :href="item.href"
            >
              {{ item.title }}
            </v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn

              color="#F80356"
              class="button-logout"
              large
              block
              rounded
              href="/"
          >
            SALIR
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>

</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      drawer: false,
      group: null,
      /*testvar: this.ruteOfUser,
      raw: this.$store.getters.getId,*/
      items: [

      ],
      id:0,
    };
  },
  methods:{
    setid(id){
      this.id=id
    }
  },
  created() {
    //this.$parent.$on('set_id',this.setid)
    let items2 = [
      { title: "Inicio",href:`/postulant/${sessionStorage.getItem("id")}/list-announcements`},
      { title: "Perfil",href: `/profile-postulant/${sessionStorage.getItem("id")}` },
      { title: "Notificaciones",href: `/postulant/${sessionStorage.getItem("id")}/my-notifications`},
      /*{ title: "Mensajes" },*/
      { title: "Para Practicantes", href: `/postulant/${sessionStorage.getItem("id")}/list-announcements-practicing`},
      /*{ title: "Premium" },*/
    ];
    this.items= items2;
    //this.testvar=linkxd
  },
}
</script>

<style scoped>
h2 {
  font-family: "Pacifico", cursive;
  height: 72px;
  font-size: 2pc;
  color: purple;
  text-align: center;
}

[b1],
.b1 {
  border: 1px dashed red;
}
.button-navigation {
  color: white !important;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
}
.button-logout {
  font-weight: 700;
  margin-bottom: 30px;
  color: white !important;
  font-family: "Poppins", sans-serif;
}
.pa-2 {
  padding: 8px 30px !important;
}
</style>