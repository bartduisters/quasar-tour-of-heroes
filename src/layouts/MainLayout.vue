<template>
  <div class="title">Tour of Heroes</div>
  <div>
    <button>Dashboard</button>
    <button>Heroes</button>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
});
</script>

<style lang="scss" scoped>
.title {
  font-size: 24px;
  color: grey;
}
</style>
