<script >

export default {
    name: 'AppSelectType'
}



</script>

<template>
    <div>
        <select class="form-select mb-3 ms-1 " id="floatingSelectGrid">
            <option selected>Alien</option>
        </select>
    </div>
</template>

<style  scoped lang="scss">
@import '../styles/general.scss';
@import '../styles/partials/_variables';

.form-select {
    width: 12%;
}
</style>
