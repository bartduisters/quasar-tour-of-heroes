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
  font-weight: 600;
}

ul {
  display: flex;
  justify-content: center;
  gap: 2em;
  flex-wrap: wrap;
  padding: 0;
}

li {
  background-color: #5f7d8c;
  list-style: none;
  height: 120px;
  width: 150px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: large;

  &:hover {
    background-color: #eeeeee;
    color: #5f7d8c;
    cursor: pointer;
  }
}
</style>
