<template>
  <div style="{ width: 100%; }">
    <button id="start_button" @click="launch_game">START</button>
  </div>
</template>

<script>
export default {
  name: 'START',
  methods: {
    launch_game() {
      this.$store.commit('game_controller/start');
    }
  }
}
</script>

<style scoped>
button#start_button {
  background-color: black;
  color: blueviolet;
  border: none;
  width: fit-content;
  font-size: xx-large;
  margin-top: 2vh;
  margin-bottom: 2vh;
  box-sizing: border-box;
  padding: 0 5px 0 5px;
  display: inline-block;
}
button#start_button:hover {
  font-weight: bold;
  text-shadow: 0 0 10px #fafafa, 0 0 20px blueviolet, 0 0 7px darkorange;
}
</style>
