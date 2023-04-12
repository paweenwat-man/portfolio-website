<script setup>

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
  yup.string().required().email()
);

</script>

<template>
  <div class="container">
    <div>
      <input type="email" v-model="value" :placeholder="placeholder"/>
      <span class="underline"></span>
    </div>
    <span class="error">{{ errorMessage }}</span>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  div {
    display: table;
    width: 100%;
    position: relative;
    input {
      outline: none;
      width: 100%;
      padding: 8px 12px;
      box-sizing: border-box;
      border-radius: 8px;
      font-size: 1.05em;
      border: 1px solid #666;
      background-color: #111;
      color: white;
    }
    .underline {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #36f;
      transition: width 0.4s cubic-bezier(0.215, 0.610, 0.355, 1);
    }
    input:focus + .underline {
      width: 100%;
    }
  }
  .error {
    // display: block;
    width: 100%;
    display: flex;
    color: #f33;
    text-shadow: black 0 0 8px;
    margin: 2px 0 0 4px;
  }
}
</style>