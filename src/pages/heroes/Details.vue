<template>
  <div class="title">{{ selectedHero.name }} details!</div>
  <div>
    <span class="prop">id:</span>
    <span class="prop-id">{{ selectedHero.id }}</span>
  </div>
  <div class="name-wrapper">
    <span class="prop">name:</span> <input v-model="selectedHero.name" />
  </div>
  <Button @click="onBackClick()" :text="'Back'" />
</template>

<script lang="ts">
import { Hero } from 'src/components/models';
import { defineComponent, Ref, ref } from 'vue';
import Button from 'src/components/Button.vue';
import { useRoute, useRouter } from 'vue-router';
import { useHeroes } from 'src/services/heroes.service';

export default defineComponent({
  components: {
    Button,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const { id } = route.params;
    const { heroes } = useHeroes();

    const selectedHero: Ref<Hero> = ref(<Hero>{});

    const filteredHeroes = heroes.value.filter((hero) => hero.id === id);
    selectedHero.value = filteredHeroes[0];

    function onBackClick() {
      router.go(-1);
    }

    return {
      selectedHero,
      onBackClick,
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
</style>
