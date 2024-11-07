<template>
    <div>
        <h3>자식 페이지입니다</h3>
        <p>이름 : {{ name }}</p>
        <p>나이 : {{ age }}</p>
    </div>
</template>

<script setup>
    defineProps({
        name: String,
        age: Number
        
    });
</script>

<style scoped>
    div{
        padding: 1%;
    }
</style>