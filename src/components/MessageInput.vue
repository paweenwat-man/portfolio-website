<template>
  <div>
    <textarea ref="target" rows="6" v-model="value" :placeholder="placeholder" @focus="autoResize" @keyup="autoResize"></textarea>
    <span>{{ errorMessage }}</span>
  </div>
</template>

<style lang="scss" scoped>
div {
  textarea {
    width: 100%;
    padding: 8px 12px;
    box-sizing: border-box;
    border-radius: 8px;
    font-size: 1.05em;
    font-family: Arial, Helvetica, sans-serif;
    border: 1px solid #666;
    background-color: #111;
    color: white;
    @media screen and (max-width: 480px) {
      resize: vertical;
    }
  }
  span {
    display: block;
    color: #f33;
    text-shadow: black 0 0 10px;
    margin: 2px 0 0 4px;
  }
}
</style>

<script setup>

import { defineProps, ref } from 'vue';
import { useField } from 'vee-validate';
import * as yup from 'yup';

const target = ref(null);

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: false,
  }
});

const { errorMessage, value } = useField(
  props.name,
  yup.string().required()
);

const autoResize = () => {
  target.value.style.height = 'auto';
  target.value.style.height = target.value.scrollHeight + 5 + 'px';
}

</script>