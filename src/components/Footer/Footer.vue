<template>
  <footer>
    <div class="grid-footer-one">
      <img src="../../assets/brand.png" alt />
      <p>2020 Eazily. All rights reserved.</p>
    </div>

    <div class="grid-footer-others">
      <h4>Popular Categories</h4>
      <a href="#">Early Years</a>
      <a href="#">Cleaning & Catering</a>
      <a href="#">Arts & Crafts</a>
    </div>

    <div class="grid-footer-others">
      <h4>Get to know us</h4>
      <a href="#">About us</a>
      <a href="#">Contacts</a>
      <a href="#">Careers</a>
    </div>

    <div class="grid-footer-others">
      <h4>Legal</h4>
      <a href="#">Terms</a>
      <a href="#">Privacy</a>
    </div>

    <div class="grid-footer-others">
      <h4>Follow us</h4>
      <a href="#">Facebook</a>
      <a href="#">Instagram</a>
      <a href="#">Twitter</a>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer {
  margin-bottom: 20px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
}

footer img {
  width: 80px;
}

.grid-footer-one{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.grid-footer-others a {
  margin-top: 10px;
  text-decoration: none;
  color: #000;
  display: block;
}
</style>