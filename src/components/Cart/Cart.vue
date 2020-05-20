<template>
  <div class="cart">
    <h1>Cart</h1>
    <div class="cart-container">
      <div class="cart-items-container">
        <div class="items-title">
          <h5>PRODUCT</h5>
          <h5>PRICE</h5>
          <h5>QUANTITY</h5>
          <h5>TOTAL</h5>
        </div>

        <cart-item/>

      </div>
      <div class="order-sumary">syary</div>
    </div>
  </div>
</template>

<script>

import CartItem from './components/CartItem.vue';

export default {
  name: "Cart",
  components:{
    CartItem
  },
  props:{
    cartItems:{}
  }
};
</script>

<style>
.cart {
  margin: 0 auto;
  width: 75%;
}

.cart-container {
  margin-top: 40px;
  display: flex;
}

.order-sumary {
  flex-basis: 30%;
}

.cart-items-container {
  flex-basis: 70%;
}

.items-title {
  display: grid;
  grid-template-columns: 1fr 0.6fr 0.6fr 0.5fr;
  width: 90%;

  border-width: 0px 0px 1px 0px;
  border-color: #868686;
  border-style: solid;
  padding-bottom: 5px;
}

.items-title h5 {
  color: #868686;
  font-weight: normal;
}
</style>