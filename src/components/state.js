import { reactive } from "vue";
import axios from 'axios';

export const state = reactive({
    url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    archetype: null,
    cardName: null,
    cardUrl: null,
    fetchDataCard() {

        axios
            .get(this.url)
            .then(response => {

                this.cardName = response.data.data[0].name;
                this.cardUrl = response.data.data[0].card_images[0].image_url;
                this.archetype = response.data.data[0].archetype;

            })
            .catch(error => {
                console.log(error);
            })

    }
})