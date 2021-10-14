<template>
  <div class="wrapper">
    <div class="firstText">{{ preText }}</div>
    <div class="secondText">{{ text }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    preText: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
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
.firstText {
  background-color: #5f7d8c;
  color: white;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  padding: 8px;
  font-size: 12px;
  font-weight: 600;
}
.secondText {
  width: 100%;
  padding: 8px;
  padding-left: 12px;
  font-weight: 600;
  font-size: 1.05em;
}
</style>
