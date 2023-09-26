<script>
import AppCard from './AppCard.vue';
export default {
    name: 'AppCardList',
    components: {
        AppCard
    }
}
</script>

<template>
    <div class="card_list">

        <div class="found">
            Found 39 cards
        </div>

        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5">
            <AppCard />
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
.card_list {
    background-color: white;
    padding: 3rem;
    .found {
        background-color: $yu-gi_dark;
        color: white;
        padding: 1rem;
    }
}
</style>