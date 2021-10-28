<template>
  <div class="title">Top Heroes</div>
  <ul>
    <SquareItem
      v-for="(hero, index) in topHeroes"
      :key="index"
      :text="hero.name"
      @click="onHeroClick(hero.id)"
    />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SquareItem from 'components/SquareItem.vue';
import { useRouter } from 'vue-router';
import { useHeroes } from 'src/services/heroes.service';

export default defineComponent({
  name: 'HeroesDashboardPage',
  components: {
    SquareItem,
  },
  setup() {
    const router = useRouter();
    const { getTopHeroes } = useHeroes();

    function onHeroClick(id: string) {
      router.push({ path: `/heroes/${id}` }).catch(console.error);
    }

    return {
      topHeroes: getTopHeroes(4),
      onHeroClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.title {
  font-size: 24px;
  color: grey;
  display: flex;
  justify-content: center;
  font-weight: 600;
}

ul {
  display: flex;
  justify-content: center;
  gap: 2em;
  flex-wrap: wrap;
  padding: 0;
}
</style>
