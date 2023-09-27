import { reactive } from "vue";
import axios from 'axios';

export const state = reactive({
    url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    urlArchetypesList: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    cards: '',
    status: false,
    archetypeName: '',
    archetypeList: '',
    fetchDataCard(url) {

        axios
            .get(url)
            .then(response => {
                this.status = true
                this.cards = response.data.data
            })
            .catch(error => {
                console.error(error);
            })

    },

    fetchDataArchetypes(url, index) {
        axios
            .get(url)
            .then(response => {

                this.archetypeList = response.data;

            })
            .catch(error => {
                console.error(error);
            })
    }
})