<script setup>

import { defineProps } from 'vue';
import { useField } from 'vee-validate';
import * as yup from 'yup';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: false,
  },
});

const { errorMessage, value } = useField(
  props.name,
  yup.string().required()
);

</script>

<template>
  <div>
    <input type="text" :placeholder="placeholder" v-model="value"/>
    <span>{{ errorMessage }}</span>
  </div>
</template>

<style lang="scss" scoped>
div {
  input {
    width: 100%;
    padding: 8px 12px;
    box-sizing: border-box;
    border-radius: 8px;
    font-size: 1.05em;
    border: 1px solid #666;
    background-color: #111;
    color: white;
  }
  span {
    display: block;
    color: #f33;
    text-shadow: black 0 0 10px;
    margin: 2px 0 0 4px;
  }
}
</style>