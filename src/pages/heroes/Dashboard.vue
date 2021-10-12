<template>
  <div class="title">Top Heroes</div>
  <ul>
    <li>Mr. Nice</li>
    <li>Narco</li>
    <li>Bombasto</li>
    <li>Celeritas</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeroesDashboardPage',
});
</script>

<style lang="scss" scoped>
.title {
  font-size: 24px;
  color: grey;
  display: flex;
  justify-content: center;
}

ul {
  display: flex;
  justify-content: space-around;
}

li {
  background-color: deeppink;
  list-style: none;
  height: 120px;
  width: 120px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
