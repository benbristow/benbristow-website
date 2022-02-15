<template>
  <FormKit
    type="form"
    v-if="!submitted"
    v-model="formData"
    submit-label="Send message"
    @submit="submitHandler"
  >
    <div v-if="error" class="alert alert-danger" role="alert">
      {{ error }}
    </div>

    <div class="mb-3">
      <FormKit
        type="text"
        label-class="form-label"
        input-class="form-control"
        name="Name"
        label="Your name"
        validation="required"
      />
    </div>

    <div class="mb-3">
      <FormKit
        type="email"
        label-class="form-label"
        input-class="form-control"
        name="Email"
        label="Your email"
        validation="required|email"
      />
    </div>

    <div class="mb-3">
      <FormKit
        type="textarea"
        label-class="form-label"
        input-class="form-control"
        name="Message"
        label="Your message"
        validation="required"
        rows="10"
      />
    </div>
  </FormKit>

  <div v-else>
    <h3 class="h4">Thank you for your message!</h3>
    <p>I'll be in touch with you as soon as possible.</p>
    <a href="/" class="btn btn-primary btn-md" role="button">&larr; Go back to the homepage</a>
  </div>
</template>

<script>
import axios from "axios";

import config from "../config.js";

export default {
  data() {
    return {
      error: null,
      formData: {},
      submitted: false,
    };
  },

  methods: {
    async submitHandler(formData) {
      this.error = null;

      try {
        await this.$recaptchaLoaded();
        
        const recaptchaCode = await this.$recaptcha('login');
        await axios.post(`${config.apiUrl}/ContactForm`, {
          ...formData,
          RecaptchaCode: recaptchaCode,
        });

        this.submitted = true;
      } catch (e) {
        this.error = e.response?.data?.detail ?? "An unexpected error occurred. Please try again later.";
        console.error(e);
      }
    },
  },
};
</script>