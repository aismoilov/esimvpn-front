<template>
  <header class="header">
    <section class="header-container">
      <div class="header-logo">
        <img src="/logo.svg" alt="logo" />
      </div>

      <div v-if="isMobileScreen" class="header-menu__icon">
        <img v-if="!showMobileMenu" src="/icons/menu.svg" alt="menu" @click="showMobileMenu = true" />
        <img v-else src="/icons/close.svg" alt="close-menu" @click="showMobileMenu = false" />
      </div>  

      <nav v-if="!isMobileScreen || showMobileMenu">
        <ul class="header-menu">
          <li class="header-menu__item">
            <router-link to="/help">
              <img src="/icons/info.svg" alt="info" />
              Help
            </router-link>
          </li>

          <li class="header-menu__item">
            <button class="button button-primary">Get started</button>
          </li>
        </ul>
      </nav>
    </section>
  </header>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import useWindowResize from '../composables/useWindowResize'

const route = useRoute()
const showMobileMenu = ref(false)
const { width } = useWindowResize()

const isMobileScreen = computed(() => {
  return width.value < 1024;
})

const routePath = computed(() => {
  return route.path
})

watch(routePath, () => {
  if (showMobileMenu) {
    showMobileMenu.value = false
  }
})
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  padding: 16px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;

  &-container {
    max-width: 1184px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-menu {
    display: flex;
    align-items: center;
    gap: 24px;
    list-style: none;

    &__icon {
      display: none;
    }

    &__item {
      a {
        display: flex;
        align-items: center;
        gap: 4px;
        color: $textPrimaryColor;
        text-decoration: none;
        font-size: 16px;
        line-height: 22px;
      }  
    }
  }

  @media (max-width: $screenMobileEnd) {
    nav {
      flex-direction: column;
      position: absolute;
      top: 72px;
      left: 0;
      right: 0;
      bottom: 0;
    }

    &-menu {
      flex-direction: column;
      background: black;
      padding: 24px 0;
      height: calc(100vh - 72px);

      &__icon {
        display: flex;
        justify-content: end;
        height: 24px;
        cursor: pointer;
      }
    }
  }

}
</style>