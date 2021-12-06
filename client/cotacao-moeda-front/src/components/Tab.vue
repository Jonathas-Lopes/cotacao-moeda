<template>
  <v-sheet elevation="6">
    <v-tabs
      class=""
      background-color="cyan"
      dark
      next-icon="mdi-arrow-right-bold-box-outline"
      prev-icon="mdi-arrow-left-bold-box-outline"
      grow
    >
      <v-tabs-slider
        class="d-flex align-lg-center justify-center"
        color="yellow"
      ></v-tabs-slider>
      <v-tab v-for="item in items" :key="item.index">
          <router-link :to="item.link">{{ item.name }}</router-link>
        
      </v-tab>
    </v-tabs>
  </v-sheet>
</template>

<script>
export default {
  name: "Tab",

  data() {
    return {
      drawer: true,
      items: [{name:"Cotação Moeda", link:"/cotacao-real"}, {name:"Ações", link:"/acoes"}, {name:"Sobre", link:"/about"}
       
      ],
    };
  },
};
</script>

