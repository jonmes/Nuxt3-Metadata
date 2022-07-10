<template>
  <div
    class="min-h-screen min-w-[325px] bg-secondary-3 duration-500 ease-in dark:bg-DarkModeBg"
  >
    <NavsTvetNav />
    <slot class="bg-secondary-3 duration-500 ease-in dark:bg-DarkModeBg" />
    <NavsFooter />
  </div>
</template>

<script setup></script>

<style scoped></style>
