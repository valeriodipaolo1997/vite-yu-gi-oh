<script>
import AppSelect from './AppSelect.vue';
export default {
    name: 'AppMain',
    components: {
        AppSelect
    }
}
</script>

<template>
    <main>
        <div class="container">

            <AppSelect />


        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
main {
    background-color: $yu-gi_warning;
}
</style>