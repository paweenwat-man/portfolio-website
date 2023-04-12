<script setup>

import { ref, onMounted } from 'vue'

const target = ref(null)

onMounted(() => {
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    // Get the center position of the target div
    const targetRect = target.value.getBoundingClientRect();
    const centerX = x - (targetRect.width / 2);
    const centerY = y - (targetRect.height / 2);

    // Adjust the mouse position to center it on the target div
    const deltaX = x - centerX;
    const deltaY = y - centerY;
    const newX = x - deltaX;
    const newY = y - deltaY;

    // Set the position of the cursor
    target.value.style.left = centerX + 'px';
    target.value.style.top = centerY + 'px';
  })
  document.addEventListener('mousedown', (e) => {
    target.value.style.backgroundColor = 'white';
  })
  document.addEventListener('mouseup', (e) => {
    target.value.style.backgroundColor = 'transparent';
  })
})

</script>

<template>
  <div ref="target"></div>
</template>

<style lang="scss" scoped>
div {
  position: fixed;
  top: -100%;
  left: -100%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 4px solid white;
  // background-color: transparent;
  z-index: 9999;
  pointer-events: none;
  mix-blend-mode: difference;
  transition: 
  background-color 50ms ease-in-out;
  @media screen and (max-width: 768px) {
    display: none;
  }
}
</style>