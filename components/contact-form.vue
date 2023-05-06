<template>
    <ClientOnly>
        <FormKit
                type="form"
                v-if="!state.submitted"
                v-model="state.formData"
                submit-label="Send message"
                @submit="submitHandler"
        >
            <div v-if="state.error" class="alert alert-danger my-3" role="alert">
                {{ state.error }}
            </div>

            <div class="mb-3">
                <FormKit
                        type="text"
                        label-class="form-label"
                        input-class="form-control"
                        name="name"
                        label="Your name"
                        validation="required"
                />
            </div>

            <div class="mb-3">
                <FormKit
                        type="email"
                        label-class="form-label"
                        input-class="form-control"
                        name="email"
                        label="Your email"
                        validation="required|email"
                />
            </div>

            <div class="mb-3">
                <FormKit
                        type="textarea"
                        label-class="form-label"
                        input-class="form-control"
                        name="message"
                        label="Your message"
                        validation="required"
                        rows="10"
                />
            </div>
        </FormKit>

        <div v-else>
            <h3 class="h4">Thank you for your message!</h3>
            <p>I'll be in touch with you as soon as possible.</p>
            <NuxtLink href="/" class="btn btn-primary btn-md" role="button">&larr; Go back to the homepage</NuxtLink>
        </div>

        <template #fallback>
            <spinner alt="Loading contact form..."/>
        </template>
    </ClientOnly>
</template>

<script setup lang="ts">
import { reactive } from "@vue/runtime-core";
import { useReCaptcha } from 'vue-recaptcha-v3'
import { SubmitContactFormBindingModel, ValidationProblemDetails } from "@/apiClient";
import { getApiClient } from "@/helpers/apiClientHelper";
import Spinner from "~/components/spinner.vue";

const recaptchaInstance = useReCaptcha();

const state = reactive({
    submitted: false,
    error: null as string | null,
    formData: {
        name: '',
        email: '',
        message: '',
    },
});

const submitHandler = async () => {
    state.error = null;

    try {
        await recaptchaInstance!.recaptchaLoaded();
        await getApiClient().contactForm(new SubmitContactFormBindingModel({
            name: state.formData.name,
            email: state.formData.email,
            message: state.formData.message,
            recaptchaCode: await recaptchaInstance!.executeRecaptcha('submit')
        }));

        state.submitted = true;
    } catch (e) {
        if (e instanceof ValidationProblemDetails) {
            state.error = Object.values(e.errors!).join('\n');
        } else {
            state.error = 'Unknown error';
        }
    }
}
</script>