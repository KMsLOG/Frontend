<template>
  <div>
    <h2>TMDBView</h2>
    <router-link :to="{name: 'tmdbPopular'}">인기순위</router-link> | 
    <router-link :to="{name: 'tmdbTopRated'}">역대순위</router-link>
    <hr>
    <router-view/>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>
