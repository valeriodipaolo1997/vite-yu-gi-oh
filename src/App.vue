<script>
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    }
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

<template></template>

<style scoped></style>
