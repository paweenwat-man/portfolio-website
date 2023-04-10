<script setup>

import { ref } from "vue";
import emailjs from '@emailjs/browser'
import Recaptcha from '../components/Recaptcha.vue';

const recaptchaToken = ref(null);

const name = ref('');
const email = ref('');
const company = ref('');
const message = ref('');

const textAreaRef = ref()
const recaptchaRef = ref()

const resizeTextArea = () => {
  textAreaRef.value.style.height = 'auto';
  textAreaRef.value.style.height = textAreaRef.value.scrollHeight + 'px';
}

const getToken = (token) => {
  console.log(token)
  recaptchaToken.value = token;
};

const resetToken = () => {
  recaptchaToken.value = null;
};

const sendEmail = async () => {

  emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      name: name.value,
      email: email.value,
      message: message.value,
      company: company.value,
      'g-recaptcha-response': recaptchaToken.value
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  ).then(()=>{
    alert('Thank you for your message!');
    name.value = '';
    email.value = '';
    company.value = '';
    message.value = '';
    recaptchaToken.value = null;
    recaptchaRef.value.actionReset();
  }).catch((err)=>{
    alert('Something went wrong!');
    console.log(err);
  });
};

const socials = [
  {
    name: 'Email',
    icon: 'fa-solid fa-envelope',
    link: 'mailto:paweenwat.m@gmail.com',
    // blue email color
    color: '#0078d4'
  },
  {
    name: 'Facebook',
    icon: 'fa-brands fa-facebook',
    link: 'https://www.facebook.com/win.maneechai',
    color: '#3b5998'
  },
  {
    name: 'LinkedIn',
    icon: 'fa-brands fa-linkedin',
    link: 'https://www.linkedin.com/in/paweenwat-maneechai-10391626a/',
    color: '#0077b5'
  },
  {
    name: 'GitHub',
    icon: 'fa-brands fa-github',
    link: 'https://github.com/winrecker',
    color: '#211F1F'
  },
  {
    name: 'YouTube',
    icon: 'fa-brands fa-youtube',
    link: 'https://www.youtube.com/@user-iw5vh8vi3h/',
    color: '#ff0000'
  }
]

</script>

<template>
  <div class="container">
    <form class="form" @submit.prevent="sendEmail">
      <input type="text" name="from_name" placeholder="Name" v-model="name">
      <input type="email" name="from_email" placeholder="Email" v-model="email">
      <input type="text" name="company_name" placeholder="Company" v-model="company">
      <textarea name="message" placeholder="Message" v-model="message" rows="6" ref="textAreaRef" @focus="resizeTextArea" @keyup="resizeTextArea"></textarea>
      <Recaptcha class="recaptcha" ref="recaptchaRef" @verify="getToken" @expire="resetToken"/>
      <button :disabled="recaptchaToken === null && !email && !company && !name" type="submit">Send</button>
    </form>
    <div class="social">
      <a v-for="social in socials" :href="social.link" target="_blank">
        <font-awesome-icon :icon="social.icon" size="2x" :style="{ color: social.color }"/>
        <span>{{ social.name }}</span>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
}

.contact {
  flex-grow: 1;
  margin: 24px;
  display: grid;
}

.social {
  display: flex;
  flex-direction: row;
  grid-gap: 8px;
  padding: 12px;
  @media screen and (max-width: 768px) {
    display: grid;
    width: 100%;
    box-sizing: border-box;
    grid-template-columns:  repeat(auto-fit, minmax(160px, 1fr));
  }
  a {
    color: inherit;
    text-decoration: none;
    background-color: #eee;
    padding: 4px 12px;
    border-radius: 8px;
    display: grid;
    justify-items: center;
    grid-template-columns: 30px 1fr;
    span {
      margin-left: 8px;
      font-size: 1.25em;
    }
  }
}

.form {
  margin-top: 12px;
  display: grid;
  grid-auto-flow: row;
  padding: 12px 24px;
  background-color: darkslateblue;
  box-sizing: border-box;
  @media screen and (max-width: 480px) {
    margin: 0;
    width: 100%;

  }
  input {
    margin: 12px 0;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  textarea {
    margin: 12px 0;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  button {
    margin: 12px 0;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    color: white;
    background-color: #333;
    cursor: pointer;
    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }
  .recaptcha {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>