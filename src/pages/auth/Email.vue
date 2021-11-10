<template>
  <q-layout>
    <q-page class="page">
      <q-card class="card">
        <q-toolbar class="bg-primary text-white">
          <q-toolbar-title>Login form</q-toolbar-title>
        </q-toolbar>
        <div class="q-pa-md">
          <q-form ref="formRef" greedy>
            <q-input autofocus lazy-rules v-model="email" :label="'e-mail'">
              <template v-slot:prepend>
                <q-icon name="alternate_email" />
              </template>
            </q-input>

            <q-input
              lazy-rules
              v-model="password"
              :label="'Password'"
              type="password"
            >
              <template v-slot:prepend><q-icon name="lock" /></template>
            </q-input>
          </q-form>
        </div>
        <q-card-actions class="card-actions q-pr-md q-pb-md">
          <q-btn color="primary" @click="login()">Login</q-btn>
        </q-card-actions>
      </q-card>
    </q-page>
  </q-layout>
</template>

<script lang="ts">
import { QForm } from 'quasar';
import { defineComponent, ref, reactive, toRefs } from 'vue';
import { useBackend } from 'src/services/backend.service';
import { useRouter } from 'vue-router';
import { useAuth } from 'src/services/auth.service';
import { User } from 'src/components/models';

export default defineComponent({
  setup() {
    const { authenticate } = useBackend();
    const { setAuthenticatedUser, setAccessToken } = useAuth();
    const router = useRouter();
    const validationError = ref('');

    const user = reactive({
      password: '',
      email: '',
    });
    const formRef = ref(<QForm>{});

    const login = () => {
      formRef.value
        .validate()
        .then((valid) => {
          if (valid) {
            authenticate(user.email, user.password)
              .then((data: { accessToken: string; user: User }) => {
                const { accessToken, user } = data;
                setAuthenticatedUser(user);
                setAccessToken(accessToken);
                void router.push('/');
              })
              .catch((e) => alert(e));
          }
        })
        .catch((e) => alert(e));
    };

    return {
      ...toRefs(user),
      validationError,
      formRef,
      login,
    };
  },
});
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 100%;
  max-width: 300px;
}
</style>
