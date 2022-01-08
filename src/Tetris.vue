<template>
  <Header/>
  <GameZone/>
</template>

<script>
import Header from './components/Header.vue';
import GameZone from './components/GameZone.vue';

export default {
  name: 'Tetris',
  components: {
    Header,
    GameZone
  }
}
</script>

<style>
body {
  background-color: black;
}

#tetris {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
