<template>
  <div>
    <button @click="jump('login')">Login</button>
    <button @click="jump('mainLayout')">Index</button>
  </div>
  <hr />
  <router-view />
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

const jump = (name: string) => {
  router.push({ name });

  console.log(import.meta.env.VITE_APP_WEB_URL)
}
</script>

<style lang="scss" scoped>

</style>
