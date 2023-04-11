<script setup>

import { ref } from "vue";
import emailjs from '@emailjs/browser'
import Recaptcha from '../components/Recaptcha.vue';

import { useForm, useField } from 'vee-validate'
import TextInput from "../components/TextInput.vue";
import EmailInput from "../components/EmailInput.vue";
import MessageInput from "../components/MessageInput.vue";
import * as yup from 'yup'

const recaptchaToken = ref(null);

const name = ref('');
const email = ref('');
const company = ref('');
const message = ref('');

const textAreaRef = ref()
const recaptchaRef = ref()

const schema = yup.object({
  Name: yup.string().required().trim(),
  Email: yup.string().required().email().trim(),
  Company: yup.string().required().trim(),
  Message: yup.string().required().trim(),
  // recaptchaToken: yup.string().required()
})

const { handleSubmit, errors } = useForm({
  validationSchema: schema,
  // initialValues: {
  //   name: '',
  //   email: '',
  //   company: '',
  //   message: '',
  //   recaptchaToken: ''
  // }
})

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


};

function onInvalidSubmit({ values, errors, results }) {
  console.log(values); // current form values
  console.log(errors); // a map of field names and their first error message
  console.log(results); // a detailed map of field names and their validation results
}

const onSubmit = handleSubmit((values)=>{
  if (!recaptchaToken.value) {
    alert('Please verify that you are not a robot!');
    return;
  }
  // alert(JSON.stringify(values));
  emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      name: values.Name,
      email: values.Email,
      message: values.Message,
      company: values.Company,
      'g-recaptcha-response': recaptchaToken.value
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  ).then(()=>{
    alert('Thank you for your message!');
  }).catch((err)=>{
    alert('Something went wrong!');
    console.log(err);
  }).finally(()=>{
    recaptchaToken.value = null;
    recaptchaRef.value.actionReset();
  })

}, onInvalidSubmit);



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
    link: 'https://www.linkedin.com/in/paweenwat-maneechai/',
    color: '#0077b5'
  },
  {
    name: 'GitHub',
    icon: 'fa-brands fa-github',
    link: 'https://github.com/winrecker',
    color: '#ffffff'
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
    <h1 class="title">Get in touch</h1>
    <form class="form" @submit="onSubmit">
      <!-- <input type="text" name="name" placeholder="Name" v-model="name">
      <input type="email" name="email" placeholder="Email" v-model="email">
      <input type="text" name="company" placeholder="Company" v-model="company"> -->
      <!-- <textarea name="message" placeholder="Message" v-model="message" rows="6" ref="textAreaRef" @focus="resizeTextArea" @keyup="resizeTextArea"></textarea> -->
      <TextInput name="Name" placeholder="Name"/>
      <EmailInput name="Email" placeholder="Email"/>
      <TextInput name="Company" placeholder="Company"/>
      <MessageInput name="Message" placeholder="Message"/>
      <input type="hidden" name="recaptchaToken" v-model="recaptchaToken"/>
      <Recaptcha class="recaptcha" ref="recaptchaRef" @verify="getToken" @expire="resetToken"/>
      <button type="submit">Send</button>
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
  color: white;
  background: url('../assets/contact_background.jpg') no-repeat center center fixed;
  background-size: cover;
  // background-color: #333;
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

.title {
  // color: white;
  margin: 12px;
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
    color: white;
    text-decoration: none;
    background-color: #333;
    padding: 4px 12px;
    border: 1px solid #666;
    border-radius: 8px;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 30px 1fr;
    transition: box-shadow 0.1s ease-in-out;
    &:hover {
      box-shadow: inset 0 0 60px 2px rgba(255, 255, 255, 0.2);
    }
    &:active {
      box-shadow: inset 0 0 60px 2px rgba(0, 0, 0, 0.2);
    }
    span {
      margin-left: 8px;
      font-size: 1.25em;
    }
  }
}

.form {
  display: grid;
  width: 100%;
  grid-gap: 6px;
  grid-auto-flow: row;
  box-sizing: border-box;
  padding: 0 18px;
  @media screen and (min-width: 480px) {
    padding: 30px;
    width: 400px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    border: 1px solid #666;
    backdrop-filter: blur(8px);
  }
  @media screen and (min-width: 768px) {
    width: 600px;
  }
  button {
    font-size: 1.2em;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #666;
    box-sizing: border-box;
    color: white;
    background-color: #333;
    cursor: pointer;
    transition: box-shadow 0.1s ease-in-out;
    &:disabled {
      background-color: #ccc;
      color: black;
      cursor: not-allowed;
    }
    &:hover {
      box-shadow: inset 0 0 60px 2px rgba(255, 255, 255, 0.2);
    }
    &:active {
      box-shadow: inset 0 0 60px 2px rgba(0, 0, 0, 0.2);
    }
  }
  .recaptcha {
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      width: 100% !important;
    }
  }
}

</style>