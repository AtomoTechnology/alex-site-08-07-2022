<template>
  <section class="red-social flex items-center bg-gray-700 shadow text-white justify-between">
    <span class="adress px-4 adress-text">Rosario, Santa Fe</span>
    <div class="icons-box flex icons items-center justify-center">
      <router-link to="www.facebook.com/alexluisdort">
        <i title="facebook" class="fa-brands text-white hover:bg-blue-700 fa-facebook"></i>
      </router-link>
      <router-link to="www.facebook.com/alexluisdort">
        <i title="youtube" class="fa-brands text-white hover:bg-red-700 fa-youtube"></i>
      </router-link>
      <router-link to="www.facebook.com/alexluisdort">
        <i title="instagram" class="fa-brands text-white hover:bg-pink-700 fa-instagram"></i>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.red-social {
  border-bottom: 0.1px solid rgba(0, 0, 0, 0.221);
}
.icons i {
  border-left: 0.3px solid rgba(0, 0, 0, 0.37);
  /* border-right: 0.3px solid rgba(0, 0, 0, 0.37); */
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
}

@media screen and (max-width: 300px) {
  .adress-text {
    display: none;
  }
  .icons-box {
    width: 100%;
  }
}
</style>
