<template>
  <div class="q-mt-md">
    <input class="q-mr-md" v-model="id" placeholder="id" />
    <input class="q-mr-md" v-model="name" placeholder="name" />
    <Button :text="'Opslaan'" @click="onClick()" />

    <div>Gekozen id: {{ id }}</div>
    <div>Gekozen naam: {{ name }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Button from 'components/Button.vue';
import { useBackend } from 'src/services/backend.service';

export default defineComponent({
  components: { Button },
  setup() {
    const { createHero } = useBackend();
    const id = ref('');
    const name = ref('');

    function onClick() {
      const hero = {
        id: id.value,
        name: name.value,
      };

      createHero(hero);
    }

    return {
      id,
      name,
      onClick,
    };
  },
});
</script>
