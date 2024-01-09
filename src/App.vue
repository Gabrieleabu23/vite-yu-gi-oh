
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
      if(store.loading){
      setTimeout(() => {
        console.log("Delayed for 3 second.");
        store.loading=false;
      }, 3000);
    }
    },
    getCard() {
      axios
        .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
        .then((res) => {
          // DEBUG
          console.log(res.data.data);
          store.cardlist = res.data.data;
  
        })
        .catch((err) => {
          console.log("Errori", err)
        });
    }
  },
  created() {
    this.loadingscreen();
    this.getCard();


  }
}
</script>

<template>
  <AppLoadingScreen v-if="store.loading"/>
  <AppHeader v-if="!store.loading" />
  <AppMain v-if="!store.loading"/>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
</style>
