<template>
  <div class="title">My Heroes</div>

  <Button
    class="addHeroButton"
    @click="addHero()"
    :text="'Add new hero'"
  />

  <div class="list">
    <ListItem
      v-for="(hero, index) in heroes"
      :key="index"
      :preText="hero.id"
      :text="hero.name"
      @click="onHeroClick(hero)"
      @delete="onDeleteHero(hero)"
    />
  </div>

  <div v-if="selectedHero.name">
    <div class="title">{{ selectedHero.name.toUpperCase() }} is my hero</div>
    <Button @click="onViewDetailsClick()" :text="'View Details'" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, onBeforeMount } from 'vue';
import ListItem from 'components/ListItem.vue';
import Button from 'components/Button.vue';
import { Hero } from 'src/components/models';
import { useRouter } from 'vue-router';
import { useBackend } from 'src/services/backend.service';

export default defineComponent({
  name: 'HeroesListPage',
  components: {
    ListItem,
    Button,
  },
  setup() {
    const { getHeroes, heroes, deleteHero } = useBackend();
    const router = useRouter();
    const selectedHero: Ref<Hero> = ref(<Hero>{});

    onBeforeMount(async () => {
      await getHeroes();
    });

    function addHero() {
      void router.push({ path: '/heroes/create' });
    }

    function onHeroClick(hero: Hero) {
      selectedHero.value = hero;
    }

    function onViewDetailsClick() {
      void router.push({ path: `/heroes/${selectedHero.value.id}` });
    }

    const onDeleteHero = (hero: Hero) => {
      if (hero._id) {
        deleteHero(hero._id);
      }
    }


    return {
      heroes,
      selectedHero,
      onHeroClick,
      onViewDetailsClick,
      addHero,
      onDeleteHero
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
