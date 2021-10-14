<template>
  <div class="layout-container">
    <div class="title">Tour of Heroes</div>
    <div class="button-container">
      <button>Dashboard</button>
      <button>Heroes</button>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
});
</script>

<style lang="scss" scoped>
.layout-container {
  margin: 2em;
}

.title {
  font-size: 24px;
  color: grey;
  font-weight: 600;
}

.button-container {
  display: flex;
  gap: 4px;
}

button {
  background-color: #eeeeee;
  border-radius: 4px;
  font-weight: 500;
  border: none;
  padding: 4px 8px;
  color: #567868;

  &:hover {
    background-color: darken(#eeeeee, 10%);
    color: #0096e8;
    cursor: pointer;
  }
}
</style>
