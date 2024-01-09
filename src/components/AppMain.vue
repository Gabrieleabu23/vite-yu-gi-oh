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
            console.log("lista generica:",store.cardlistgeneral)
            if (store.TypeChoose !== '') {
                store.cardlist=[];

                console.log("lista attuale carte:");
                for (let i = 0; i < store.cardlistgeneral.length; i++) {
                    if (store.cardlistgeneral[i].archetype === store.TypeChoose) {
                        store.cardlist.push(store.cardlistgeneral[i])
                        console.log(store.cardlist)
                    }
                    // console.log(store.cardlistgeneral[i].archetype);
                }

            }else{
                store.cardlist=store.cardlistgeneral
            }
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
            <AppSelectType @search="printCards" />
            <AppMainCards />
        </div>

    </main>
</template>

<style  scoped lang="scss">
@import '../styles/general.scss';
@import '../styles/partials/_variables';
</style>
