<template>
  <div class="title">My Heroes</div>
  <div class="list">
    <div class="hero-wrapper">
      <div class="heroId">11</div>
      <div class="heroName">Mr. Nice</div>
    </div>
    <div class="hero-wrapper">
      <div class="heroId">12</div>
      <div class="heroName">Narco</div>
    </div>
    <div class="hero-wrapper">
      <div class="heroId">13</div>
      <div class="heroName">Bombasto</div>
    </div>
    <div class="hero-wrapper">
      <div class="heroId">14</div>
      <div class="heroName">Celeritas</div>
    </div>
    <div class="hero-wrapper">
      <div class="heroId">15</div>
      <div class="heroName">Magneta</div>
    </div>
    <div class="hero-wrapper">
      <div class="heroId">16</div>
      <div class="heroName">Rubberman</div>
    </div>
    <div class="hero-wrapper">
      <div class="heroId">17</div>
      <div class="heroName">Dynama</div>
    </div>
    <div class="hero-wrapper">
      <div class="heroId">18</div>
      <div class="heroName">Dr IQ</div>
    </div>
    <div class="hero-wrapper">
      <div class="heroId">19</div>
      <div class="heroName">Magma</div>
    </div>
    <div class="hero-wrapper">
      <div class="heroId">20</div>
      <div class="heroName">Tornado</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeroesListPage',
});
</script>

<style lang="scss" scoped>
.title {
  font-size: 24px;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.hero-wrapper {
  display: flex;
  width: 150px;
}
.heroId {
  background-color: darkslategray;
  color: white;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  padding: 4px;
}
.heroName {
  background-color: aliceblue;
  color: darkgray;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  width: 100%;
  padding: 4px;
}
</style>
