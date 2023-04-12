<script setup>

import tetrisImage from '../assets/tetris.png'
import jobku65Image from '../assets/jobku65.png'
import TLoHAImage from '../assets/the_legend_of_heros_adventure.png'
import FwKImage from '../assets/farmer_without_knowledge.png'
import alienHunterImage from '../assets/alien_hunter.png'

import ProjectDetails from './ProjectDetails.vue'

const projects = [
  {
    name: 'The Mighty Tetris!',
    image: tetrisImage,
    link: 'https://masterminddev.itch.io/the-mighty-tetris',
  },
  {
    name: 'Alien Hunter',
    image: alienHunterImage,
    link: 'https://masterminddev.itch.io/alien-hunter',
  },
  {
    name: 'The Legend of Hero\'s Adventure',
    image: TLoHAImage,
    link: 'https://play.unity.com/mg/other/webgl-builds-327336',
  },
  {
    name: 'Farmer without Knowledge',
    image: FwKImage,
    link: 'https://play.unity.com/mg/other/webgl-builds-327302',
  },
  {
    name: 'Job KUSRC job search website',
    image: jobku65Image,
    link: 'https://gradreq.src.ku.ac.th/jobku65',
  }
]

</script>

<template>
  <!-- <ProjectDetails/> -->
  <div class="container">
    <h1 class="title">Projects</h1>
    <div class="projects">
      <a v-for="project in projects" :href="project.link" target="_blank">
        <img :src="project.image">
        <p>{{ project.name }}</p>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  color: white;
}
.title {
  text-align: center;
  padding: 12px 0;
}
.projects {
  position: relative;
  display: grid;
  font-size: 16px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 16px;
  grid-gap: 24px;
  // perspective: 100rem;
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, 100%);
  }
  a, div {
    color: inherit;
    text-decoration: none;
    transition: transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    background-color: rgba($color: #000000, $alpha: 0.2);
    border-radius: 12px;
    border: 1px solid #666;
    box-sizing: border-box;
    backdrop-filter: blur(8px);
    aspect-ratio: 16/10;
    // transform-style: preserve-3d;
    // backface-visibility: hidden;
    &:hover {
      transform: scale(1.025);
      // transform: rotateY(180deg);
    }
    &:active {
      transform: scale(0.975);
    }
    img {
      height: 100%;
      width: 100%;
      padding: 8px;
      object-fit: cover;
      box-sizing: border-box;
      border-radius: 12px;
    }
    p {
      text-align: center;
      padding-bottom: 8px;
    }
  }
}

</style>