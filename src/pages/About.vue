<script setup>

import portrait from '../assets/me.png'

</script>

<template>
  <div class="container">
    <div class="personal">
      <h1>Hi, I'm Paweenwat Maneechai</h1>
      <h2>I'm a Computer Engineering student at</h2>
      <h2>Kasetsart University Sri Racha Campus</h2>
    </div>
    <div class="portrait">
      <Transition name="slide-fade" appear>
        <div>
          <img :src="portrait">
        </div>

      </Transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 100vh;
  background:  url(../assets/sea_background.jpg) no-repeat center fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
}

.personal {
  padding: 24px 32px;
  h1, h2 {
    // show text shadow that cut with sea ans sky background
    color: white;
    text-shadow: 0 0 10px #000000;
    font-size: calc(2vw + 1em);
    @media screen and (max-width: 576px) {
      font-size: 4vw;
    }
  }
}

.portrait {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: flex-end;
  object-fit: contain;
  div { 
    aspect-ratio: 1/1;
    img {
      height: 100%;
      width: 100%;
    }
  }

}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 1s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(500px);
  opacity: 0;
}


</style>