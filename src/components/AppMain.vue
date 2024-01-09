<script >
import AppMainCards from './AppMainCards.vue'
import AppSelectType from './AppSelectType.vue'
export default {
    name: 'AppMain',
    components:{
        AppMainCards,
        AppSelectType
    }
} 



</script>

<template>
    <main>
        <div class="container p-4 ps-0">
            <AppSelectType/>
            <AppMainCards/>
        </div>
        
    </main>
</template>

<style  scoped lang="scss">
@import '../styles/general.scss';
@import '../styles/partials/_variables';

</style>
