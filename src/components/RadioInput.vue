<template>
  <div class="radio" @click="onClick">
    <svg v-if="checked" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="10" fill="#775CFF"/>
      <rect x="7" y="7" width="10" height="10" rx="5" fill="white"/>
    </svg>

    <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.5" y="2.5" width="19" height="19" rx="9.5" stroke="white" stroke-opacity="0.24"/>
    </svg>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['change']);

const { checked, value } = defineProps({
  checked: Boolean,
  value: String || Number,
});

function onClick() {
  emit('change', value)
}
</script>

<style lang="scss" scoped>
.radio {
  display: flex;
  align-items: center;
}
</style>