<template>
  <ul class="breadcrumbs">
    <li 
      v-for="(breadcrumb, index) in breadcrumbs" 
      :key="breadcrumb.url" 
      class="breadcrumbs-item"
    >
      <router-link v-if="breadcrumb.url" :to="breadcrumb.url">{{ breadcrumb.text }}</router-link>
      <span v-else>{{ breadcrumb.text }}</span>
      <span class="breadcrumbs-item__divider" v-if="index + 1 < breadcrumbs.length">/</span>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { Breadcrumb } from '../shared/types'

interface Props {
  breadcrumbs: Breadcrumb[]
}

const { breadcrumbs } = defineProps<Props>()
</script>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 16px;

  &-item {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 14px;
    line-height: 20px;

    a {
      color: #fff;
      text-decoration: none;
    }

    span {
      color: rgba(127, 138, 159, 1);
    }

    &__divider {
      color: #fff;
    }
  }
}
</style>