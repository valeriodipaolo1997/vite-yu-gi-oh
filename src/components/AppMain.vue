<script>
import AppSelect from './AppSelect.vue';
import AppCardList from './AppCardList.vue';
export default {
    name: 'AppMain',
    components: {
        AppSelect,
        AppCardList
    }
}
</script>

<template>
    <main>
        <div class="container">

            <AppSelect />
            <AppCardList/>


        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
main {
    background-color: $yu-gi_warning;
}
</style>