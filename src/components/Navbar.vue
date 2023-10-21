<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const target = ref()
const sticking = ref(false)

const observer = new IntersectionObserver(
  ([entry]) => {
    sticking.value = !entry.isIntersecting
  }, 
  { threshold: 0.0 }
)

onMounted(()=>{
  observer.observe(target.value)
})

onBeforeUnmount(()=>{
  observer.unobserve(target.value)
})

</script>

<template>
  <div ref="target"></div>
  <nav class="navbar" :class="{sticking}">
    <label for="navbar-toggle">
      <div class="hamburger"></div>
    </label>
    <input id="navbar-toggle" type="checkbox"/>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#experiences">Experiences</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</template>

<style lang="scss">

.navbar {
  position: fixed;
  z-index: 9999;
  background-color: transparent;
  color: white;

  input {
    display: none;
  }

  label[for="navbar-toggle"] {
    position: fixed;
    z-index: 9999;
    height: 35px;
    padding: 5px;
    top: 10px;
    right: 10px;
    cursor: pointer;
    background-color: rgb(48, 54, 63, 0.6);
    border-radius: 20%;
    box-sizing: border-box;
  }

  .hamburger {
    background: white;
    width: 30px;
    height: 5px;
    top: 5px;

    &::before,
    &::after {
      position: absolute;
      background: white;
      width: 30px;
      height: 5px;
      content: "";
    }
    &::before {
      top: 15px;
    }
    &::after {
      top: 25px;
    }
  }

  ul {
    position: fixed;
    width: 100%;
    display: grid;
    grid-auto-columns: 1fr;
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: rgb(48, 54, 63, 0.6);
    box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(8px);
    top: -30%;
    transition: top .4s ease-in-out;

    li a {
      display: block;
      text-decoration: none;
      text-align: center;
      color: inherit;
      padding: 1rem;
    }
  }

  input[id="navbar-toggle"]:checked + ul {
    top: 0;
  }
}

@media screen and (min-width: 480px) {
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    
    ul {
      display: flex;
      justify-content: flex-end;
      top: 0;
      background-color: transparent;
      box-shadow: none;
      backdrop-filter: none;
      transition: 
        background-color 0.2s ease-in-out,
        box-shadow 0.2s ease-in-out,
        color 0.2s ease-in-out;
    }
      
    &.sticking {
      ul {
        background-color: rgb(48, 54, 63, 0.6);
        box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(8px);
      }
    }

    label[for="navbar-toggle"] {
      display: none;
    }
  }
}
</style>