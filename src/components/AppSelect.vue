<script>
export default {
    name: 'AppArchetypeSelect'
}
</script>

<template>
    <div class="py-4">
        <select class="form-select" aria-label="Default select example" name="archetype" id="archetype">
            <option value="1" selected>Alien</option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
#archetype {
    width: 150px;
}
</style>