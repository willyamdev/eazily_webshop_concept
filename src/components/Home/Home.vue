<template>
  <div class="home">
    <Section sectionName="Categories" v-bind:sectionItems="categories" v-bind:sectionType="true"></Section>
    <Section sectionName="All Goods" v-bind:sectionItems="categories" v-bind:sectionType="false"></Section>
  </div>
</template>

<script>
import Section from "./components/Section.vue";
import { categoriesList } from "./Categories.js";

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
  padding: 0 70px;
}
</style>