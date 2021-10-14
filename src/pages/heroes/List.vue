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
  margin-top: 1em;
  margin-bottom: 1em;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.hero-wrapper {
  display: flex;
  width: 150px;
  background-color: darken(#eeeeee, 10%);
  background-color: #eeeeee;
  cursor: pointer;
  color: #8d8d8d;
  line-height: 1.05em;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;

  &:hover {
    background-color: #cfd8dc;
    color: white;
    margin-left: 4px;
  }
}
.heroId {
  background-color: #5f7d8c;
  color: white;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  padding: 8px;
  font-size: 12px;
  font-weight: 600;
}
.heroName {
  width: 100%;
  padding: 8px;
  padding-left: 12px;
  font-weight: 600;
  font-size: 1.05em;
}
</style>
