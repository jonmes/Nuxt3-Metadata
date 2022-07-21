<script setup>
const blogs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
</script>

<template>
  <div>
    <NuxtLink to="/"> {{ $t("backtohome") }} </NuxtLink>
    <h1>{{ $t("blogspage") }}</h1>
    <NuxtLink :to="'/blogs/' + blog" v-for="blog in blogs" :key="blog" class="list">
      {{ $t("gotoblog") }} {{ blog }}
    </NuxtLink>
  </div>
</template>
<style>
.list {
  margin: 10px;
  display: flex;
  flex-direction: column;
}
</style>
