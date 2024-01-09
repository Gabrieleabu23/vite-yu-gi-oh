<script >
import AppCard from './AppCard.vue'
import { store } from '../store'
export default {
    name: 'AppMainCards',
    components:{
        AppCard
    },
    data(){
        return{
            store
        }
    }
} 


</script>

<template>
    <div class="bg_white">
        <div class="p-3 m-4">
            <div class="row justify-content-between flex-wrap h-100">
                <div class="col-12 height_found_card">
                    <div class="bg-dark height_found_card ps-3 d-flex align-items-center h-100">
                        <span class="fw-semibold">{{store.cardlist.length}}</span>
                    </div>
                </div>
                <div class="col-2 custom-col  pb-4" v-for="card in store.cardlist" :key="card">
                    <AppCard :info="card"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style  scoped lang="scss">
@import '../styles/general.scss';
@import '../styles/partials/_variables';
.bg_white{
    background-color: white;
}
.height_found_card{
    height: 50px;
}
</style>
