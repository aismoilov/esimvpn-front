<script setup lang="ts">
import { useRoute } from 'vue-router'
import Header from "./components/Header.vue";
import Breadcrumbs from "./components/Breadcrumbs.vue";
import { computed } from 'vue';

const route = useRoute();

const breadcrumbs = computed(() => {
  return route?.meta?.breadcrumbs || []
})


</script>

<template>
  <Header />
  <main>
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <router-view />
  </main>
</template>

<style lang="scss" scoped>
main {
  max-width: 1184px;
  width: 100%;
  padding: 16px 24px;
  margin: 16px auto 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;

  @media (max-width: $screenMobileEnd) {
    padding: 16px;
  }
}
</style>
