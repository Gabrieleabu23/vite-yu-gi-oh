<script >
import AppMainCards from './AppMainCards.vue'
export default {
    name: 'AppMain',
    components:{
        AppMainCards
    }
} 



</script>

<template>
    <main>
        <div class="container p-4 ps-0">
            <select class="form-select mb-3 ms-1 " id="floatingSelectGrid">
                <option selected>Alien</option>
                
            </select>
            <AppMainCards/>
        </div>
        
    </main>
</template>

<style  scoped lang="scss">
@import '../styles/general.scss';
@import '../styles/partials/_variables';

.container {
    .form-select{
        width: 12%;
    }
    img {
        height: 50px;
    }
}
</style>
