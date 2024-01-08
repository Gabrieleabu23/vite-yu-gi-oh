<script >
export default {
    name:'AppHeader'
}


</script>

<template>
    <header>
        <div class="height_header ps-4 my-2">
            <img src="/yugioh-logo.png " alt="" class="">
            <h2 class="d-inline align-middle ms-4 fw-light">Yu-Gi-Oh Api</h2>
        </div>
    </header>
</template>

<style  scoped lang="scss">

@import '../styles/general.scss';
@import '../styles/partials/_variables';

.height_header{

    img{
        height: 50px;
    }
}
</style>
