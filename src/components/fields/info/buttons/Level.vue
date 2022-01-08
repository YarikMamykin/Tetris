<template>
  <button id="level_button" @mousedown="onmousedown" @contextmenu="contextmenusuppressor">
    Level: {{ level }}/{{ maxLevel }}
  </button>
</template>

<script>
export default {
  name: 'Level',
  computed: {
    level() { return this.$store.getters['level/value']; },
    maxLevel() { return this.$store.getters['level/max']; }
  },
  methods: {
    onmousedown(event) {
      const MouseButtons = {
        left: 1,
        right: 2
      };

      if(event.buttons === MouseButtons.left) 
        this.$store.commit('level/increment');

      if(event.buttons === MouseButtons.right) 
        this.$store.commit('level/decrement');

      this.$store.commit('game_controller/change_speed', { level: this.level, maxLevel: this.maxLevel });
    },
    contextmenusuppressor(event) {
      event.preventDefault();
      return false;
    }
  }
}
</script>

<style scoped>
button#level_button {
  background-color: black;
  color: beige;
  border: none;
  width: fit-content;
  font-size: xx-large;
  margin-top: 2vh;
  margin-bottom: 2vh;
  box-sizing: border-box;
  padding: 0 5px 0 5px;
  display: inline-block;
}

button#level_button:hover {
  font-weight: bold;
  border: dotted 2px darkolivegreen;
}
</style>

