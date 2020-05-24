<template>
  <div class="section">
    <div class="section-header">
      <h1>{{ sectionName }}</h1>
      <a href="#">View all</a>
    </div>

    <div class="section-container">
      <button class="arrow left" @click="leftClick()">
        <font-awesome-icon icon="angle-left" class="icon-arrow" />
      </button>
      <button class="arrow right" @click="rightClick()">
        <font-awesome-icon icon="angle-right" class="icon-arrow" />
      </button>

      <div class="section-itens-container" ref="sections-itens-container">
        <div class="section-item" v-for="(item, index) in sectionItems" :key="index">
          <div class="image-div" v-if="sectionType == true">
            <img :src="item.backgroundImage" alt />
          </div>
          <div v-else class="image-div">
            <img :src="item.image01" alt />
          </div>

          <h2>{{ item.categoryName }}</h2>
        </div>
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
    sectionType: { type: Boolean },
    sectionItems: { type: Array }
  },
  methods: {
    rightClick() {
      let element = this.$refs["sections-itens-container"];
      let maxScroll = element.scrollWidth;
      if (element.scrollLeft >= maxScroll) return;
      element.scrollLeft = element.scrollLeft + 360;
    },
    leftClick() {
      let element = this.$refs["sections-itens-container"];
      if (element.scrollLeft <= 0) return;
      element.scrollLeft = element.scrollLeft - 360;
    }
  }
};
</script>

<style>
.section {
  margin-bottom: 80px;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.section-header a {
  text-decoration: none;
  color: #5144c0;
}

.section-container {
  position: relative;
}

.section-itens-container {
  scroll-behavior: smooth;
  position: relative;
  overflow: hidden;
  margin-top: 20px;
  display: flex;
  padding-top: 10px;
  width: 100%;
}

.arrow {
  background: none;
  border: none;
  position: absolute;
  z-index: 3;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 40px;
  cursor: pointer;
}

.arrow:focus {
  outline: 0;
}

.left {
  left: 20px;
}

.right {
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
  background-color: gray;
  transition: 0.5s;
  cursor: pointer;
}

.section-item h2 {
  z-index: 3;
  color: white;
}

.section-item img {
  object-fit: contain;
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
}

.image-div {
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
}

.section-item:hover {
  transform: translateY(-5px);
}
</style>