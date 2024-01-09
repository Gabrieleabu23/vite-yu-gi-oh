<script >
import { store } from '../store';

export default {
    name: 'AppCard',
    props:{
        info:Object
    },
    created(){
        // DEBUG
        // console.log(this.info.card_images[0].image_url);
    }
}


</script>

<template>
        <div class="card rounded-0 h-100">
            <img :src="info.card_images[0].image_url"  :alt="info.name"> 
             <div class="card-body">
                <div class="text-center text-white flex-grow-1 d-flex flex-column h-100">
                    <h5 class="fw-light">{{ info.name  }}</h5>
                    <span class="mt-auto text-dark fw-lighter fs-4 pb-2">{{info.archetype}}</span>
                </div>
            </div>
            
        </div>
    
    
    
</template>

<style  scoped lang="scss">
@import '../styles/general.scss';
@import '../styles/partials/_variables';

.card-body{
    background-color: $orange_main_color;
}
</style>
