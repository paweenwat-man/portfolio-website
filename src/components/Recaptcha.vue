<script setup>

import { ref } from "vue";
import { VueRecaptcha, useRecaptcha } from "vue3-recaptcha-v2";

const { resetRecaptcha } = useRecaptcha();
const recaptchaWidget = ref(null);

const emit = defineEmits(['verify','expire','fail'])

const callbackVerify = (response) => {
  // console.log(response);
  emit("verify", response);
};

const callbackExpired = () => {
  console.log("expired!");
  emit("expire");
};

const callbackFail = () => {
  console.log("fail");
  emit("fail");
};

// Reset Recaptcha action
const actionReset = () => {
  resetRecaptcha(recaptchaWidget.value);
};

defineExpose({
  actionReset: actionReset,
})

</script>

<template>
  <vue-recaptcha
    theme="light"
    size="normal"
    :tabindex="0"
    @widgetId="recaptchaWidget = $event"
    @verify="callbackVerify($event)"
    @expired="callbackExpired()"
    @fail="callbackFail()"
  />
</template>

<!-- <template>
  <vue-recaptcha
    theme="light"
    size="normal"
    :tabindex="0"
    @widgetId="recaptchaWidget = $event"
    @verify="callbackVerify($event)"
    @expired="callbackExpired()"
    @fail="callbackFail()"
  />

  <button @click="actionReset()">reset!</button>
</template> -->

<!-- <script>
  import { ref } from "vue";
  import { VueRecaptcha, useRecaptcha } from "vue3-recaptcha-v2";

  export default {
    name: "recaptcha",
    components: { VueRecaptcha },
    setup: () => {
      // Reset Recaptcha
      const { resetRecaptcha } = useRecaptcha();
      const recaptchaWidget = ref(null);

      const callbackVerify = (response) => {
        // console.log(response);
        this.$emit("token", response);
      };
      const callbackExpired = () => {
        console.log("expired!");
      };
      const callbackFail = () => {
        console.log("fail");
      };
      // Reset Recaptcha action
      const actionReset = () => {
        resetRecaptcha(recaptchaWidget.value);
      };

      return {
        recaptchaWidget,
        callbackVerify,
        callbackFail,
        actionReset,
      };
    },
  };
</script> -->