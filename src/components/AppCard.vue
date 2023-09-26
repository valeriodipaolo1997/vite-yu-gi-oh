<script>
import { state } from './state';
export default {
    name: 'AppCard',
    data() {
        return {
            state
        }
    },
    created() {
        state.fetchDataCard()
    }
}
</script>

<template>
    <div class="col">

        <div class="card">

            <img :src="state.cardUrl" class="card-img-top" alt="...">

            <div class="card-body">

                <div class="card-text">

                    <div>
                        {{ state.cardName }}
                    </div>

                    <div>
                        {{ state.archetype }}
                    </div>

                </div>


            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped></style>