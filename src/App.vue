<script setup>

import Navbar from './components/Navbar.vue'
import Projects from './pages/Projects.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue';

</script>

<template>
  <Navbar/>
  <div id="about">
    <About/>
  </div>
  <div id="work-experience">
    <!-- Work Experience -->
  </div>
  <div id="projects">
    <Projects/>
  </div>
  <div id="contact">
    <Contact/>
  </div>
</template>

<style lang="scss" scoped>

.navbar {
  position: sticky;
  top: 0;
}

#personal {
  display: block;
  font-size: 30px;
  font-weight: lighter;
  padding: 40px 24px;
  box-sizing: border-box;
  width: 100%;
}

#portrait {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

</style>