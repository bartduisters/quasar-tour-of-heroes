<template>
  <div class="layout-container">
    <div class="title">Tour of Heroes</div>
    <div class="button-container">
      <Button :text="'Dashboard'" />
      <Button :text="'Heroes'" />
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from 'components/Button.vue';

export default defineComponent({
  components: { Button },
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


</style>
