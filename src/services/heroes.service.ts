import { Hero } from 'src/components/models';
import { Ref, ref } from 'vue';

const heroesService = () => {
  let id = 20;

  const heroes: Ref<Array<Hero>> = ref([
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

  function getTopHeroes(amount = 3) {
    return heroes.value.slice(0, amount);
  }

  function addHero(name: string) {
    id++;
    heroes.value.unshift({ id: `${id}`, name });
  }

  return { heroes, getTopHeroes, addHero };
};

const singleton = heroesService();
const useHeroes = () => singleton;
export { useHeroes };
