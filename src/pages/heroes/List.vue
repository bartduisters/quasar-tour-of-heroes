<template>
  <div class="title">My Heroes</div>
  <div class="list">
    <ListItem
      v-for="(hero, index) in heroes"
      :key="index"
      :preText="hero.id"
      :text="hero.name"
      @click="onHeroClick(hero)"
    />
  </div>

  <div v-if="selectedHero.name">
    <div class="title">{{ selectedHero.name.toUpperCase() }} is my hero</div>
    <Button :text="'View Details'" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';
import ListItem from 'components/ListItem.vue';
import Button from 'components/Button.vue';
import { Hero } from 'src/components/models';

export default defineComponent({
  name: 'HeroesListPage',
  components: {
    ListItem,
    Button,
  },
  setup() {
    const selectedHero: Ref<Hero> = ref(<Hero>{});
    const heroes = ref([
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
    ]);

    function onHeroClick(hero: Hero) {
      selectedHero.value = hero;
    }

    return {
      heroes,
      selectedHero,
      onHeroClick,
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

.list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
