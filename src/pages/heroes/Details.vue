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

export default defineComponent({
  components: {
    Button,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const { id } = route.params;

    const selectedHero: Ref<Hero> = ref(<Hero>{});
    const heroes = [
      { id: '11', name: 'Mr. Nice' },
      { id: '12', name: 'Narco' },
      { id: '13', name: 'Bombasto' },
      { id: '14', name: 'Celeritas' },
      { id: '15', name: 'Magneta' },
      { id: '16', name: 'Rubberman' },
      { id: '17', name: 'Dynama' },
      { id: '18', name: 'Dr IQ' },
      { id: '19', name: 'Magma' },
      { id: '20', name: 'Tornado' },
    ];

    const filteredHeroes = heroes.filter((hero) => hero.id === id);
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
