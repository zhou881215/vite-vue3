<template>
  <n-button>naive-ui</n-button>
</template>

<script setup lang="ts">
import { NButton } from "naive-ui"
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;

  &:hover {
    color: $test-color;
  }
}
</style>