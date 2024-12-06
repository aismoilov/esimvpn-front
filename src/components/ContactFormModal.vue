<template>
  <AppModal class="contact-form-modal" @close="onCloseContactForm">
    <template #title>Contact support</template>
    <template #body>
      <form class="contact-form-modal__form" @submit="onFormSubmit">
        <p>Get in touch with our support team if you need help.</p>
        <div 
          class="contact-form-modal__form-item" 
          :class="{'contact-form-modal__form-item--error': errors.email}"
        >
          <input type="text" placeholder="Email" v-model="email" />
          <span v-if="errors.email" class="error">Email is required</span>
        </div>

        <div class="contact-form-modal__form-item">
          <textarea placeholder="Your message" v-model="message" />
        </div>

        <button type="submit" class="button button-primary">Send</button>
        <div class="contact-form-modal__form-agreement">
          By clicking 'Send' I agree with <router-link to="/policy">Privacy Policy</router-link>
        </div>
      </form>
    </template>
  </AppModal>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import AppModal from './Modal.vue'

const emit = defineEmits(['close', 'save'])

const email = ref('')
const message = ref('')
let errors = reactive({
  email: false
})

function onCloseContactForm() {
  emit('close')
}

function clearErrors() {
  errors.email = false
}

function validateForm(): boolean {
  if(!email.value) {
    errors.email = true;
    return false;
  }

  return true;
}

function onFormSubmit(e: Event) {
  e.preventDefault();
  clearErrors()
  if (validateForm()) {
    emit('save', { email: email.value, message: message.value })
  }  
}
</script>

<style lang="scss" scoped>
.contact-form-modal {
  &__form {
    display: flex;
    flex-direction: column;
    gap: 16px;

    p {
      font-size: 16px;
      line-height: 24px;
      color: $textSecondaryColor;
    }

    &-item {
      display: flex;
      flex-direction: column;
      gap: 4px;
      border-radius: 12px;

      input {
        height: 56px;
        background: $bgPrimary;
        border: none;
        outline: none;
        color: $textSecondaryColor;
        padding: 16px;
        font-size: 16px;
        line-height: 22px;
      }

      textarea {
        min-height: 144px;
        background: $bgPrimary;
        border: none;
        outline: none;
        color: $textSecondaryColor;
        padding: 16px;
        font-size: 16px;
        line-height: 22px;
      }

      &--eror {
        border: 1px solid red;
      }
    }

    &-agreement {
      text-align: center;
      font-size: 12px;
      line-height: 16px;
      color: $textSecondaryColor;

      a {
        color: $textSecondaryColor;
      }
    }
  }
}
</style>