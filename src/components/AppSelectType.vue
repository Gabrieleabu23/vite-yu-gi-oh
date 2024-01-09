<script >
import { store } from '../store'
export default {
    name: 'AppSelectType',
    data(){
        return{
            store
        }
    },
}



</script>

<template>
    <div>
        <select class="form-select mb-3 ms-1 " id="floatingSelectGrid">
            <option selected>Seleziona l'archeotipo</option>
            <option value="" v-for="cardType in store.typeCardlist" :key="cardType">{{ cardType.archetype_name }}</option>
        </select>
    </div>
</template>

<style  scoped lang="scss">
@import '../styles/general.scss';
@import '../styles/partials/_variables';

.form-select {
    width: fit-content;
}
</style>
