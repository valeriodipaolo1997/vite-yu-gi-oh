<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue';
export default {
  name: 'App',
  data() {
    return {
      url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    }
  },
  components: {
    AppHeader,
    AppMain
  },
  created() {
    for (let i = 0; i < 20; i++) {
      axios
        .get(this.url)
        .then(response => {
          console.log(response.data.data[i].name);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
}

</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style scoped></style>
