<template>
  <ul class="starship-list">
    <StarshipItem
      v-for="(starship, index) in starships"
      :key="index"
      :starship="starship"
    />
  </ul>
</template>

<script>
import StarshipItem from "@/components/StarshipItem.vue";

export default {
  name: "StarshipList",
  components: {
    StarshipItem,
  },
  props: { starships: Array },
};
</script>

<style>
.starship-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 70px;
  margin-bottom: 30px;
  margin: auto;
  width: 1080px;
  align-items: center;
  margin-top: 60px;
  padding-bottom: 60px;
  padding: 0;
}
</style>
