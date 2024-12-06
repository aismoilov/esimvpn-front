<template>
  <AppModal class="contact-form-success-modal" @close="onCloseContactForm">
    <template #title>Contact support</template>
    <template #body>
      <div class="contact-form-success-modal__body">
        <img src="/icons/mark.svg" />
        <p>Your message has been sent</p>
        <button class="button" @close="onCloseContactForm">Close</button>
      </div>
    </template>
  </AppModal>
</template>

<script setup lang="ts">
import AppModal from './Modal.vue'

const emit = defineEmits(['close'])

function onCloseContactForm() {
  emit('close')
}
</script>

<style lang="scss" scoped>
.contact-form-success-modal {
  &__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 24px 0;

    img {
      max-height: 96px;
    }

    p {
      color: $textSecondaryColor;
      font-size: 16px;
      line-height: 22px;
    }

    button {
      width: 100%;
    }
  }
}
</style>