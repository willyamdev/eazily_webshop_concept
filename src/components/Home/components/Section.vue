<template>
  <div class="section">
    <h1>{{ sectionName }}</h1>
    <div class="section-itens-container">

      <div class="arrow left">
        <font-awesome-icon icon="angle-left" class="icon-arrow" />
      </div>
      <div class="arrow right">
        <font-awesome-icon icon="angle-right" class="icon-arrow" />
      </div>

      <div class="section-item" v-for="(item, index) in sectionItems" :key="index">
        <img :src="item.backgroundImage" alt />
        <h2>{{ item.categoryName }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "Section",
  components: { FontAwesomeIcon },
  props: {
    sectionName: {},
    sectionItems: { type: Array }
  }
};
</script>

<style>
.section-itens-container {
  position: relative;
  overflow: hidden;
  margin-top: 20px;
  display: flex;
  padding-top: 10px;
  width: 100%;
}

.arrow{
  position: absolute;
  z-index: 3;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 40px;
  cursor: pointer;
}

.left{
  left: 20px;
}

.right{
  right: 20px;
}

.icon-arrow {
  font-size: 40px;
}

.section-item {
  flex-shrink: 0;
  position: relative;
  display: flex;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  width: 360px;
  height: 230px;
  background-color: blue;
  transition: 0.5s;
  cursor: pointer;
}

.section-item h2 {
  z-index: 2;
  color: white;
}

.section-item img {
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
}

.section-item:hover {
  transform: translateY(-5px);
}
</style>