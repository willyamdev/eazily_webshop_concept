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
        <div class="cart-item">
          <div class="product-container">
            IMAGE
          </div>
          <div class="price-container">
            <h4>$20</h4>
          </div>
          <div class="quantity-container">
            
            

          </div>
        </div>
      </div>
      <div class="order-sumary">syary</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart"
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
  grid-template-columns: 1fr 1fr 1fr 0.5fr;
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

.cart-item {
  margin: 10px 0px;
  display: flex;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 0.5fr;
  width: 90%;
}
</style>