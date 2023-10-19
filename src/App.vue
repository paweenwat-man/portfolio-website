<script setup>

import Cursor from './components/Cursor.vue';
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

