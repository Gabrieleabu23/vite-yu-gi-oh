<script>
import { store } from '../store';

export default {
  name: 'AppSelectType',
  data() {
    return {
      store
    }
  }
};
</script>

<template>
  <div>
    <select class="form-select mb-3 ms-1" id="floatingSelectGrid" v-model="store.TypeChoose" @change="$emit('search')">
      <option selected disabled>Seleziona l'archeotipo</option>
      <option value="">Tutti</option>
      <option v-for="cardType in store.typeCardlist" :key="cardType.id" :value="cardType.archetype_name">
        {{ cardType.archetype_name }}
      </option>
    </select>
  </div>
</template>

<style scoped lang="scss">
@import '../styles/general.scss';
@import '../styles/partials/_variables';

.form-select {
  width: fit-content;
}
</style>
