<template>
  <li>{{ text }}</li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        text: {
            type: String,
            required: true
        }
    }
});
</script>

<style lang="scss" scoped>
li {
  background-color: #5f7d8c;
  list-style: none;
  height: 120px;
  width: 150px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: large;

  &:hover {
    background-color: #eeeeee;
    color: #5f7d8c;
    cursor: pointer;
  }
}
</style>
