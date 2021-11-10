<template>
  <span></span>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useAuth } from 'src/services/auth.service';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const { logout, setAuthenticatedUser, setAccessToken } = useAuth();
    const router = useRouter();

    onMounted(async () => {
      await logout()
        .finally(() => {
          setAuthenticatedUser(null);
          setAccessToken('');
          void router.push('/');
        })
        .catch(() => {
          /* ignore error */
        });
    });
  },
});
</script>
