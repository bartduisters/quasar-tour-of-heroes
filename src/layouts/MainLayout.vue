<template>
  <div class="layout-container">
    <div class="title">Tour of Heroes</div>
    <div class="button-container">
      <Button @click="onNavigate('/dashboard')" :text="'Dashboard'" />
      <Button @click="onNavigate('/heroes')" :text="'Heroes'" />
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from 'components/Button.vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: { Button },
  name: 'MainLayout',
  setup() {
    const router = useRouter();

    function onNavigate(path: string) {
      router.push({ path }).catch(console.error);
    }

    return {
      onNavigate,
    };
  },
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
