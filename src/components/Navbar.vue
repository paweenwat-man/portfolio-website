<script setup>
import { onMounted, ref } from 'vue'

const target = ref()
const sticking = ref(false)

const observer = new IntersectionObserver(
  ([entry]) => {
    // console.log(entry)
    sticking.value = !entry.isIntersecting
  }, 
  { threshold: 0.0 }
)

onMounted(()=>{
  observer.observe(target.value)
})

</script>

<template>
  <div ref="target"></div>
  <nav class="navbar" :class="{sticking}">
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
  z-index: 999;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: transparent;
  color: white;
  transition: 
    background-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out,
    color 0.2s ease-in-out;

  &.sticking {
    background-color: rgb(48, 54, 63, 0.6);
    box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(8px);

  }

  ul {
    display: flex;
    justify-content: flex-end;
    list-style: none;
    margin: 0;
    padding: 0;

    li a {
      display: block;
      text-decoration: none;
      color: inherit;
      padding: 1rem;
    }
  }
}
</style>