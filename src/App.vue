
<script >
import axios from 'axios';
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppLoadingScreen from './components/AppLoadingScreen.vue'

import { store } from './store.js'
export default {
  components: {
    AppHeader,
    AppMain,
    AppLoadingScreen
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    loadingscreen() {
      if (store.loading) {
        setTimeout(() => {
          console.log("Delayed for 3 second.");
          store.loading = false;
        }, 3000);
      }
    },
    getCardType() {
      axios
        .get('https://db.ygoprodeck.com/api/v7/archetypes.php')
        .then((res) => {
          // DEBUG
          console.log(res.data);
          store.typeCardlist = res.data;

        })
        .catch((err) => {
          console.log("Errori", err)
        });
    },
    getCard() {
      axios
      .get(store.apiUrl)
        .then((res) => {
          // DEBUG
          console.log(res.data.data);
          store.cardlistgeneral = res.data.data;

        })
        .catch((err) => {
          console.log("Errori", err)
        });
     
    }

  },
  
  created() {
    this.loadingscreen();
    this.getCardType();
    this.getCard();


  },

}
</script>

<template>
  <AppLoadingScreen v-if="store.loading" />
  <AppHeader v-if="!store.loading" />
  <AppMain v-if="!store.loading" />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
</style>
