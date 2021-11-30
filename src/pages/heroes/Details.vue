<template>
  <div class="title">{{ selectedHero.name }} details!</div>
  <div>
    <span class="prop">id:</span>
    <span class="prop-id">{{ selectedHero.id }}</span>
  </div>
  <div class="name-wrapper">
    <span class="prop">name:</span> <input v-model="selectedHero.name" />
  </div>
  <div class="button-container">
    <Button @click="onBackClick()" :text="'Back'" />
    <Button @click="onUpdateClick()" :text="'Update'" />
  </div>
</template>

<script lang="ts">
import { Hero } from 'src/components/models';
import { defineComponent, Ref, ref } from 'vue';
import Button from 'src/components/Button.vue';
import { useRoute, useRouter } from 'vue-router';
// import { useHeroes } from 'src/services/heroes.service';
import { useBackend } from 'src/services/backend.service'

export default defineComponent({
  components: {
    Button,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const { id } = route.params;
    const { heroes, updateHero } = useBackend();

    const selectedHero: Ref<Hero> = ref(<Hero>{});

    const filteredHeroes = heroes.value.filter((hero) => hero.id === id);
    selectedHero.value = filteredHeroes[0];

    const onBackClick = () => {
      router.go(-1);
    };

    const onUpdateClick = () => {
      // update uitvoeren van backend service
      updateHero({_id: selectedHero.value._id, name: selectedHero.value.name})
    };

    return {
      selectedHero,
      onBackClick,
      onUpdateClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.title {
  font-size: 24px;
  margin-top: 1em;
  margin-bottom: 1em;
}

.prop {
  color: #567868;
  font-weight: bold;
  width: 3em;
  display: inline-block;
}

.prop-id {
  color: grey;
}

.name-wrapper {
  margin-bottom: 1em;
}

.button-container {
  display: flex;
  gap: 4px;
}
</style>
