<script >
import AppMainCards from './AppMainCards.vue'
import AppSelectType from './AppSelectType.vue'
import { store } from '../store.js'

export default {
    name: 'AppMain',
    components: {
        AppMainCards,
        AppSelectType
    },
    data(){
        return{
            store,
        }
    },
    methods: {
        printCards() {
            if (store.TypeChoose !== '') {
                store.cardlist=[];
                for (let i = 0; i < store.cardlistgeneral.length; i++) {
                    if (store.cardlistgeneral[i].archetype === store.TypeChoose) {
                        store.cardlist.push(store.cardlistgeneral[i])
                        console.log(store.cardlist)
                    }
                    // console.log(store.cardlistgeneral[i].archetype);
                }

            }else{
                console.log("in generale",store.cardlist)
                store.cardlist=store.cardlistgeneral
            }
        }

    },
    computed:{
        boh(){
            return this.printCards();
        }
    },
    created() {
        this.printCards()
    }
}





</script>

<template>
    <main>
        <div class="container p-4 ps-0">
            <AppSelectType @search="boh" />
            <AppMainCards />
        </div>

    </main>
</template>

<style  scoped lang="scss">
@import '../styles/general.scss';
@import '../styles/partials/_variables';
</style>
