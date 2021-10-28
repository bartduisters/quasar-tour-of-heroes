<template>
  <div class="title">My Heroes</div>

  <Button
    class="addHeroButton"
    @click="addHero('Samson')"
    :text="'Add new hero'"
  />

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
    <Button @click="onViewDetailsClick()" :text="'View Details'" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';
import ListItem from 'components/ListItem.vue';
import Button from 'components/Button.vue';
import { Hero } from 'src/components/models';
import { useRouter } from 'vue-router';
import { useHeroes } from 'src/services/heroes.service';

export default defineComponent({
  name: 'HeroesListPage',
  components: {
    ListItem,
    Button,
  },
  setup() {
    const router = useRouter();
    const selectedHero: Ref<Hero> = ref(<Hero>{});
    const { heroes, addHero } = useHeroes();

    function onHeroClick(hero: Hero) {
      selectedHero.value = hero;
    }

    function onViewDetailsClick() {
      router
        .push({ path: `/heroes/${selectedHero.value.id}` })
        .catch(console.error);
    }

    return {
      heroes,
      selectedHero,
      onHeroClick,
      onViewDetailsClick,
      addHero,
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

.addHeroButton {
  margin-bottom: 1em;
}
</style>
