<template>
  <div id="gamezone">
    <GameField/>
    <InfoField/>
  </div>
</template>

<script>
import GameField from './fields/game/GameField.vue';
import InfoField from './fields/info/InfoField.vue';

export default {
  name: 'GameZone',
  components: {
    GameField,
    InfoField
  }
}
</script>

<style scoped>
div#gamezone {
  display: grid;
  grid-template-columns: 40% 30%;
  grid-column-gap: 10%;
  margin-left: 20%;
}
</style>
