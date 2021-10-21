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

export default defineComponent({
  name: 'HeroesDashboardPage',
  components: {
    SquareItem,
  },
  setup() {
    const router = useRouter();
    const topHeroes = [
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

    function onHeroClick(id: string) {
      router.push({ path: `/heroes/${id}` }).catch(console.error);
    }

    return {
      topHeroes: topHeroes.splice(0, 4),
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
