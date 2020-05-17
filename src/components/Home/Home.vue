<template>
  <div class="home">
    <Section sectionName="Categories" v-bind:sectionItems="categories"></Section>
  </div>
</template>

<script>
import Section from "./components/Section.vue";
import { categoriesList } from './Categories.js';

export default {
  data: function() {
    return {
      categories: categoriesList
    };
  },
  name: "Home",
  components: { Section }
};
</script>
<style>
.home {
  margin-top: 40px;
  padding: 0 70px;
}
</style>