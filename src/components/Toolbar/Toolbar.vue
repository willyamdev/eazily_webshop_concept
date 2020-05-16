<template>
  <nav>
    <img src="../../assets/brand.png" alt />
    <div class="nav-actions">
      <div class="searchbar-container">
        <div class="search-categories">
          <h5>All</h5>
          <font-awesome-icon icon="angle-down" />
        </div>
        <input type="text" placeholder="Search for goods" />
        <div class="search-icon-container">
          <font-awesome-icon icon="search" style="color: #d4d2da;"/>
        </div>
      </div>
      <div class="navoptions-container">
        <a href="#" target="_blank" rel="noopener noreferrer">Orders</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Cart</a>
      </div>
    </div>
  </nav>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "Toolbar",
  components: { FontAwesomeIcon }
};
</script>

<style>
nav {
  display: flex;
  padding: 10px;
}

nav img {
  width: 100px;
}

.nav-actions {
  display: flex;
  width: 100%;
  margin: 0px 70px;
}

.searchbar-container {
  display: flex;
  flex-basis: 50%;
  align-items: center;
}

.search-categories {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e7e5eb;
  height: 40px;
  width: 70px;
  border-radius: 6px 0px 0px 6px;
  border: 1px solid #d4d2da;
}

.search-categories h5 {
  font-weight: normal;
  margin-right: 5px;
}

.searchbar-container input {
  border-width: 1px 0px 1px 0px; /* top right bottom left */
  border-style: solid;
  border-color: #d4d2da;
  width: 250px;
  height: 40px;
  padding-left: 5px;
  /* border-radius: 0px 7px 7px 0px; */
  transition: 0.5s;
}

.searchbar-container input:focus {
  outline: none;
  width: 300px;
}

.search-icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;

  border-width: 1px 1px 1px 0px; /* top right bottom left */
  border-style: solid;
  border-color: #d4d2da;
  border-radius: 0px 6px 6px 0px;
}

.navoptions-container {
  display: flex;
  flex-basis: 50%;
  justify-content: flex-end;
  align-items: center;
}

.navoptions-container a {
  text-decoration: none;
  color: #000;
  margin-left: 30px;
}
</style>