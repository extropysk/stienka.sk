<script setup>
defineProps({
  primary: String,
  secondary: String
})
</script>

<template>
  <h1 class="text-white font-semibold text-5xl uppercase">
    {{ primary }} <span class="text-primary-500">{{ secondary }}</span>
  </h1>
</template>

<style scoped>

</style> 