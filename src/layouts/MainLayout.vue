<template>
  <div class="layout-container">
    <div v-if="!authenticatedUser">
      <Button @click="onLogin()" :text="'Login'" />
    </div>
    <div v-if="authenticatedUser">
      <Button @click="onLogout()" :text="'Logout'" />
    </div>
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
import { useAuth } from 'src/services/auth.service';

export default defineComponent({
  components: { Button },
  name: 'MainLayout',
  setup() {
    const router = useRouter();
    const { authenticatedUser } = useAuth();

    function onNavigate(path: string) {
      router.push({ path }).catch(console.error);
    }

    function onLogin() {
      void router.push({ path: '/email' });
    }

    function onLogout() {
      void router.push({ path: '/logout' });
    }

    return {
      onNavigate,
      authenticatedUser,
      onLogin,
      onLogout,
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
