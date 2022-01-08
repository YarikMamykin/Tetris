<template>
  <div style="{ width: 100%; }">
    <button id="stop_button" @click="stop_game">STOP</button>
  </div>
</template>

<script>
export default {
  name: 'STOP',
  methods: {
    stop_game() {
      this.$store.commit('game_controller/stop');
    }
  }
}
</script>

<style scoped>
button#stop_button {
  background-color: black;
  color: aquamarine;
  border: none;
  width: fit-content;
  font-size: xx-large;
  margin-top: 2vh;
  margin-bottom: 2vh;
  box-sizing: border-box;
  padding: 0 5px 0 5px;
  display: inline-block;
}
button#stop_button:hover {
  font-weight: bold;
  text-shadow: 0 0 10px #fafafa, 0 0 20px aquamarine, 0 0 30px #fa0000;
}
</style>
