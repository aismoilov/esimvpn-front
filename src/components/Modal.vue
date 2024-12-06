<script setup lang="ts">
const emit = defineEmits(["close"]);

function closeModal() {
  emit("close");
}
</script>

<template>
  <Teleport to="body">
    <div class="modal">
      <div class="modal-content" @click.stop>
        <div class="title" v-if="$slots.title">
          <h3><slot name="title" /></h3>
          <img class="close" src="/icons/close.svg" alt="close" @click="closeModal" />
        </div>
        
        <div class="body">
          <slot name="body"/>  
        </div>    
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  &-content {
    position: relative;
    width: 100%;
    border-radius: 24px;
    border: 1px solid #FFFFFF14;
    max-width: 500px;
    padding: 24px 32px;
    background: #151324;

    .title {
      font-weight: 700;
      margin-bottom: spacing(2);
      display: flex;
      align-items: center;
      justify-content: space-between;

      h3 {
        font-size: 36px;
        line-height: 44px;
        font-weight: 700;
        color: $textPrimaryColor;
      }

      .close {
        cursor: pointer;
      }
    }
  }
}
</style>