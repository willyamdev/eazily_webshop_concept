<template>
  <div class="cart-item">
    <div class="product-container">
      <div class="imageicon"></div>
      <div class="product-info">
        <p>Mono Clock</p>
        <h5>ID: 891419424</h5>
      </div>
    </div>
    <div class="price-container align-items-to-center">
      <h4>$20</h4>
    </div>
    <div class="quantity-container align-items-to-center">
      <div class="quantity-item">
        <button>
          <font-awesome-icon icon="minus" />
        </button>
        <h4>1</h4>
        <button>
          <font-awesome-icon icon="plus" />
        </button>
      </div>
    </div>
    <div class="total-container align-items-to-center">
      <h4>$20</h4>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "CartItem",
  props: {
    item: {}
  },
  components: {
    FontAwesomeIcon
  }
};
</script>

<style>
.cart-item {
  padding: 10px 0px;
  display: flex;
  display: grid;
  grid-template-columns: 1fr 0.6fr 0.6fr 0.5fr;
  width: 90%;

  border-width: 0px 0px 1px 0px;
  border-color: #868686;
  border-style: solid;
}

.product-container {
  display: flex;
}

.product-container .imageicon {
  background-color: red;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  margin-right: 10px;
}

.product-container .product-info {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.align-items-to-center {
  display: flex;
  align-items: center;
}

.quantity-item {
  display: flex;
  align-items: center;
  width: min-content;
  border: 1px solid #d4d2da;
  border-radius: 5px;
}

.quantity-item button {
  cursor: pointer;
  background: none;
  border: none;
  width: 30px;
  height: 30px;
}

.quantity-item button:focus {
  outline: 0;
}

.quantity-item h4 {
  width: 25px;
  text-align: center;
}
</style>