<template>
  <div class = headerDiv>
    <h2>사용자 관리</h2>
    <div class = headerUserDiv>
      <router-link :to="{name: 'userCreate'}">사용자 등록</router-link>
      <router-link :to="{name:'userList'}">사용자 목록</router-link>
      
    </div>
    
  </div>
</template>

<script setup>
  
</script>

<style>
  .headerDiv {
    display:flex;
    background-color: goldenrod;
    color: white;
    justify-content:space-between;
    align-items:center;
  }

  h2{
    margin-left: 4%;
  }

  .headerUserDiv{
    margin-right: 4%;
  }
 
</style>
