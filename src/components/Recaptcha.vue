<script setup>

import { onMounted, onUnmounted, defineProps, defineEmits, ref, watch } from "vue";
import { useField } from "vee-validate";
import * as yup from "yup";

const RECAPTCHA_URL = 'https://www.google.com/recaptcha/api.js?onload=onLoadRecaptcha&render=explicit';

const sitekey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

const recaptchaRef = ref(null);

const props = defineProps({
    name: {
        type: String,
        required: true
    }
})

const emits = defineEmits(['reset']);

const { errorMessage, value } = useField(
    props.name,
    yup.string().required().trim()
);

const reset = () => {
    const grecaptcha = window.grecaptcha;
    grecaptcha.reset();
    value.value = '';
}

defineExpose({ reset });

const callback = (token) => {
    value.value = token;
}

const expiredCallback = (expire) => {
    console.log('expired');
    console.log(expire);
    value.value = '';
}

const errorCallback = (error) => {
    console.log('error');
    console.log(error);
    value.value = '';
}


onMounted(() => {
    const script = document.createElement('script');
    script.src = RECAPTCHA_URL;
    script.async = script.defer = true;
    document.body.append(script);

    window.onLoadRecaptcha = () => {
        const grecaptcha = window.grecaptcha;
        grecaptcha.render(recaptchaRef.value, {
            sitekey: sitekey,
            callback: callback,
            'expired-callback': expiredCallback,
            'error-callback': errorCallback
        });
    };
})

onUnmounted(() => {
    const script = document.querySelector(`script[src="${RECAPTCHA_URL}"]`);
    document.body.removeChild(script);
})

watch(value, (oldValue, newValue) => {
    if (newValue) {
        reset();
    }
});

</script>

<template>
    <div class="container">
        <div ref="recaptchaRef"></div>
        <input type="hidden" :name="props.name" :value="value" />
        <span class="error">{{ errorMessage }}</span>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 100%;
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