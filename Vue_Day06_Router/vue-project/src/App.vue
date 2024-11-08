<template>
  <div>
    <h1>App.vue</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink> | 
      <RouterLink to="/about">about</RouterLink> | 
      <RouterLink :to="{name: 'home'}">HomeName</RouterLink> | 
      <RouterLink :to="{name: 'about'}">aboutName</RouterLink> | 
      <RouterLink :to="{name: 'user', params: {id: '김싸피'}}">김싸피</RouterLink> | 
      <RouterLink :to="{name: 'user', params: {id: '양싸피'}}">양싸피</RouterLink> | 
      <RouterLink :to="{name: 'login'}">로그인</RouterLink> | 
       
    </nav>

    <RouterView/>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>