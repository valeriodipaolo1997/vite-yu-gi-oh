<script>
import { state } from './state';
export default {
    name: 'AppCard',
    data() {
        return {
            state
        }
    },
    
}
</script>

<template>
    <div class="col" v-for="card in state.cards">

        <div class="card rounded-0">

            <img :src="card.card_images[0].image_url" class="card-img-top" alt="...">

            <div class="card-body">

                <div class="card-text d-flex flex-column justify-content-between h-100">

                    <div class="name">
                        {{ card.name }}
                    </div>

                    <div class="archetype">
                        {{ card.archetype }}
                    </div>
                </div>
            </div>


        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.card-body {
    background-color: $yu-gi_warning;
    height: 100px;

    .name {
        color: white;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 0.9rem;
        text-align: center;
    }

    .archetype {
        text-align: center;
    }
}
</style>